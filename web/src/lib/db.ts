import { neon } from "@neondatabase/serverless";

export function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  return neon(url);
}

export async function ensureEnquiriesTable() {
  const sql = getSql();
  if (!sql) return false;
  await sql`
    CREATE TABLE IF NOT EXISTS enquiries (
      id BIGSERIAL PRIMARY KEY,
      type TEXT NOT NULL,
      email TEXT NOT NULL,
      locale TEXT DEFAULT 'en',
      payload JSONB NOT NULL DEFAULT '{}'::jsonb,
      status TEXT NOT NULL DEFAULT 'new',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
  await sql`CREATE INDEX IF NOT EXISTS enquiries_type_idx ON enquiries (type)`;
  await sql`CREATE INDEX IF NOT EXISTS enquiries_created_idx ON enquiries (created_at DESC)`;
  return true;
}

export async function insertEnquiry(input: {
  type: string;
  email: string;
  locale?: string;
  payload: Record<string, unknown>;
}) {
  const sql = getSql();
  if (!sql) return null;
  await ensureEnquiriesTable();
  const rows = await sql`
    INSERT INTO enquiries (type, email, locale, payload)
    VALUES (
      ${input.type},
      ${input.email},
      ${input.locale || "en"},
      ${JSON.stringify(input.payload)}
    )
    RETURNING id, created_at
  `;
  return rows[0] as { id: number; created_at: string };
}
