"use client";

import { FormEvent, useState } from "react";
import { Nav } from "@/components/Nav";

type Enquiry = {
  id: number;
  type: string;
  email: string;
  locale: string;
  status: string;
  payload: Record<string, unknown>;
  created_at: string;
};

export default function AdminEnquiriesPage() {
  const [token, setToken] = useState("");
  const [rows, setRows] = useState<Enquiry[]>([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  async function load(e?: FormEvent) {
    e?.preventDefault();
    setError("");
    const res = await fetch("/api/admin/enquiries", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) {
      setError("Unauthorized or database unavailable.");
      setLoaded(false);
      return;
    }
    const data = await res.json();
    setRows(data.enquiries || []);
    setLoaded(true);
  }

  async function setStatus(id: number, status: string) {
    await fetch("/api/admin/enquiries", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status }),
    });
    await load();
  }

  return (
    <>
      <Nav />
      <main className="legal-page" style={{ maxWidth: 960 }}>
        <h1>Enquiry inbox</h1>
        <p>Protected by <code>ADMIN_ENQUIRIES_TOKEN</code>. Set the token below to load recent enquiries.</p>
        <form onSubmit={load} className="form-card" style={{ marginBottom: 32, padding: 24 }}>
          <div className="form-group">
            <label htmlFor="token">Admin token</label>
            <input
              id="token"
              type="password"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Load enquiries
          </button>
          {error && <p className="form-error">{error}</p>}
        </form>

        {loaded && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {rows.length === 0 && <p>No enquiries yet.</p>}
            {rows.map((r) => (
              <article
                key={r.id}
                style={{
                  background: "var(--white)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  padding: 20,
                }}
              >
                <header style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <strong>
                    #{r.id} · {r.type} · {r.email}
                  </strong>
                  <span style={{ fontSize: 12, color: "var(--charcoal-light)" }}>
                    {new Date(r.created_at).toLocaleString()} · {r.status}
                  </span>
                </header>
                <pre
                  style={{
                    marginTop: 12,
                    fontSize: 11,
                    whiteSpace: "pre-wrap",
                    color: "var(--charcoal-light)",
                  }}
                >
                  {JSON.stringify(r.payload, null, 2)}
                </pre>
                <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                  {["new", "contacted", "closed"].map((s) => (
                    <button
                      key={s}
                      type="button"
                      className="btn-outline"
                      style={{ fontSize: 10, padding: "8px 12px", color: "var(--emerald)", borderColor: "var(--emerald)" }}
                      onClick={() => setStatus(r.id, s)}
                    >
                      Mark {s}
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
