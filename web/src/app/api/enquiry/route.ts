import { NextResponse } from "next/server";
import { z } from "zod";
import { insertEnquiry } from "@/lib/db";
import { sendEnquiryEmail } from "@/lib/email";
import { SITE } from "@/lib/site";

const baseSchema = z.object({
  type: z.enum(["contact", "stay", "treatment", "table"]),
  email: z.string().email(),
  locale: z.string().optional(),
  website: z.string().optional(), // honeypot
});

const rateMap = new Map<string, { count: number; reset: number }>();

function rateLimit(ip: string, limit = 8, windowMs = 60_000) {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + windowMs });
    return true;
  }
  if (entry.count >= limit) return false;
  entry.count += 1;
  return true;
}

function recipientFor(type: string) {
  if (type === "table") return SITE.email;
  return SITE.emailHm;
}

function subjectFor(type: string) {
  switch (type) {
    case "stay":
      return "New Room Booking Enquiry — W1@Bangkoknoi";
    case "treatment":
      return "New Treatment Booking — W1@Bangkoknoi";
    case "table":
      return "New Table Reservation — W1@Bangkoknoi";
    default:
      return "General Enquiry — W1@Bangkoknoi";
  }
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (!rateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await req.json();
    const parsed = baseSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Missing or invalid fields." }, { status: 400 });
    }

    // Honeypot — pretend success
    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    const { type, email, locale, website: _hp, ...rest } = body as Record<string, unknown> & {
      type: string;
      email: string;
      locale?: string;
      website?: string;
    };

    const payload = { ...rest, email, type };

    const row = await insertEnquiry({
      type,
      email,
      locale: typeof locale === "string" ? locale : "en",
      payload,
    });

    await sendEnquiryEmail({
      type,
      to: recipientFor(type),
      subject: subjectFor(type),
      payload,
    });

    return NextResponse.json({ ok: true, id: row?.id ?? null, persisted: Boolean(row) });
  } catch (err) {
    console.error("[enquiry]", err);
    return NextResponse.json({ error: "Unable to submit enquiry." }, { status: 500 });
  }
}
