import { Resend } from "resend";
import { SITE } from "@/lib/site";

export async function sendEnquiryEmail(opts: {
  type: string;
  to: string;
  subject: string;
  payload: Record<string, unknown>;
}) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn("[email] RESEND_API_KEY missing — skipping send");
    return { skipped: true as const };
  }
  const resend = new Resend(key);
  const from = process.env.RESEND_FROM || "W1 Enquiries <onboarding@resend.dev>";
  const lines = Object.entries(opts.payload)
    .filter(([k]) => k !== "website" && k !== "type")
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#888;">${k}</td><td>${String(v ?? "")}</td></tr>`)
    .join("");

  const html = `
    <div style="font-family:Georgia,serif;color:#1A3A35;">
      <h2>New ${opts.type} enquiry</h2>
      <table style="font-size:14px;border-collapse:collapse;">${lines}</table>
      <p style="margin-top:24px;font-size:12px;color:#888;">W1@Bangkoknoi · ${SITE.email}</p>
    </div>
  `;

  const result = await resend.emails.send({
    from,
    to: opts.to,
    subject: opts.subject,
    html,
  });
  return result;
}
