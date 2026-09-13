"use client";

import { useRouter } from "next/navigation";
import { FormEvent, ReactNode, useState } from "react";

type Props = {
  type: string;
  children: ReactNode;
  submitLabel?: string;
  extraFields?: Record<string, string>;
};

export function FormShell({ type, children, submitLabel = "Send Enquiry →", extraFields }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    if (String(fd.get("website") || "").trim()) {
      router.push("/thank-you");
      return;
    }

    const payload: Record<string, string> = { type };
    fd.forEach((value, key) => {
      if (key === "website") return;
      payload[key] = String(value);
    });
    if (extraFields) Object.assign(payload, extraFields);

    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again or call us directly.");
      }
      router.push("/thank-you");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unable to send enquiry.");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate={false}>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {children}
      {status === "error" && <p className="form-error">{error}</p>}
      <button type="submit" className="btn-submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
