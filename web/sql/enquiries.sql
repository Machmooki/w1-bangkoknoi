-- W1 enquiries table (Neon / Vercel Postgres)
-- Applied automatically on first insert via ensureEnquiriesTable(),
-- or run manually in the SQL editor.

CREATE TABLE IF NOT EXISTS enquiries (
  id BIGSERIAL PRIMARY KEY,
  type TEXT NOT NULL,
  email TEXT NOT NULL,
  locale TEXT DEFAULT 'en',
  payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS enquiries_type_idx ON enquiries (type);
CREATE INDEX IF NOT EXISTS enquiries_created_idx ON enquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS enquiries_status_idx ON enquiries (status);
