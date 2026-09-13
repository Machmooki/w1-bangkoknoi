import { NextResponse } from "next/server";
import { getSql, ensureEnquiriesTable } from "@/lib/db";

export async function GET(req: Request) {
  const auth = req.headers.get("authorization");
  const expected = process.env.ADMIN_ENQUIRIES_TOKEN;
  if (!expected || auth !== `Bearer ${expected}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const sql = getSql();
  if (!sql) {
    return NextResponse.json({ error: "DATABASE_URL not configured" }, { status: 503 });
  }

  await ensureEnquiriesTable();
  const rows = await sql`
    SELECT id, type, email, locale, status, payload, created_at
    FROM enquiries
    ORDER BY created_at DESC
    LIMIT 100
  `;
  return NextResponse.json({ enquiries: rows });
}

export async function PATCH(req: Request) {
  const auth = req.headers.get("authorization");
  const expected = process.env.ADMIN_ENQUIRIES_TOKEN;
  if (!expected || auth !== `Bearer ${expected}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const sql = getSql();
  if (!sql) {
    return NextResponse.json({ error: "DATABASE_URL not configured" }, { status: 503 });
  }

  const body = await req.json();
  const id = Number(body.id);
  const status = String(body.status || "");
  if (!id || !["new", "contacted", "closed"].includes(status)) {
    return NextResponse.json({ error: "Invalid id/status" }, { status: 400 });
  }

  await sql`UPDATE enquiries SET status = ${status} WHERE id = ${id}`;
  return NextResponse.json({ ok: true });
}
