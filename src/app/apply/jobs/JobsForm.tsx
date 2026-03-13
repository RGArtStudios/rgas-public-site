"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

interface Props {
  openings: string[];
}

export default function JobsForm({ openings }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const rawData = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const { first_name, last_name, experience, why_rgas, ...rest } = rawData;
    const data = {
      ...rest,
      name: `${first_name} ${last_name}`.trim(),
      message: [experience, why_rgas].filter(Boolean).join("\n\n"),
    };
    const apiUrl = process.env.NEXT_PUBLIC_LARAVEL_API_URL;

    try {
      const res = await fetch(`${apiUrl}/api/public/job-application`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const err = await res.json().catch(() => ({}));
        setErrorMessage(err.message ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Unable to submit application. Please check your connection.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card p-8 text-center">
        <div className="text-5xl mb-4">🌟</div>
        <h2 className="text-xl font-bold mb-2">Application Received!</h2>
        <p className="text-muted text-sm">
          Thanks for your interest in joining our team. We review all
          applications and will be in touch if your background is a strong fit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-5">
      <h2 className="text-xl font-bold">Job Application</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="first_name" className="form-label">
            First Name <span style={{ color: "var(--color-accent)" }}>*</span>
          </label>
          <input id="first_name" name="first_name" type="text" required className="form-input" placeholder="Jane" />
        </div>
        <div>
          <label htmlFor="last_name" className="form-label">
            Last Name <span style={{ color: "var(--color-accent)" }}>*</span>
          </label>
          <input id="last_name" name="last_name" type="text" required className="form-input" placeholder="Doe" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="form-label">
          Email <span style={{ color: "var(--color-accent)" }}>*</span>
        </label>
        <input id="email" name="email" type="email" required className="form-input" placeholder="jane@example.com" />
      </div>

      <div>
        <label htmlFor="phone" className="form-label">Phone</label>
        <input id="phone" name="phone" type="tel" className="form-input" placeholder="(206) 555-0000" />
      </div>

      <div>
        <label htmlFor="position" className="form-label">
          Position of Interest <span style={{ color: "var(--color-accent)" }}>*</span>
        </label>
        <select id="position" name="position" required className="form-input">
          <option value="">Select a position</option>
          {openings.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
          <option value="general">General Interest / Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="availability" className="form-label">
          Availability <span style={{ color: "var(--color-accent)" }}>*</span>
        </label>
        <select id="availability" name="availability" required className="form-input">
          <option value="">Select availability</option>
          <option value="full_time">Full-time</option>
          <option value="part_time">Part-time (15–25 hrs/week)</option>
          <option value="part_time_light">Part-time (under 15 hrs/week)</option>
          <option value="weekends">Weekends only</option>
          <option value="evenings">Evenings only</option>
        </select>
      </div>

      <div>
        <label htmlFor="portfolio_url" className="form-label">
          Portfolio / Website URL
        </label>
        <input
          id="portfolio_url"
          name="portfolio_url"
          type="url"
          className="form-input"
          placeholder="https://yourportfolio.com"
        />
      </div>

      <div>
        <label htmlFor="resume_url" className="form-label">
          Link to Resume (Google Drive, Dropbox, etc.)
        </label>
        <input
          id="resume_url"
          name="resume_url"
          type="url"
          className="form-input"
          placeholder="https://drive.google.com/..."
        />
      </div>

      <div>
        <label htmlFor="experience" className="form-label">
          Relevant Experience{" "}
          <span style={{ color: "var(--color-accent)" }}>*</span>
        </label>
        <textarea
          id="experience"
          name="experience"
          required
          rows={4}
          className="form-input resize-none"
          placeholder="Briefly describe your relevant background, teaching experience, or studio practice."
        />
      </div>

      <div>
        <label htmlFor="why_rgas" className="form-label">
          Why Rainier Gardens?{" "}
          <span style={{ color: "var(--color-accent)" }}>*</span>
        </label>
        <textarea
          id="why_rgas"
          name="why_rgas"
          required
          rows={3}
          className="form-input resize-none"
          placeholder="What draws you to our studio and this role?"
        />
      </div>

      {status === "error" && (
        <div className="rounded-lg p-3 text-sm" style={{ backgroundColor: "#fef2f2", color: "#991b1b" }}>
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full"
        style={{ opacity: status === "loading" ? 0.7 : 1 }}
      >
        {status === "loading" ? "Submitting…" : "Submit Application"}
      </button>
    </form>
  );
}
