"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function TourForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const rawData = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const { first_name, last_name, group_size, message, ...rest } = rawData;
    const data: Record<string, unknown> = {
      ...rest,
      name: `${first_name} ${last_name}`.trim(),
      party_size: group_size ? parseInt(group_size, 10) || null : null,
      notes: message || undefined,
    };
    const apiUrl = process.env.NEXT_PUBLIC_LARAVEL_API_URL;

    try {
      const res = await fetch(`${apiUrl}/api/public/tour-request`, {
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
      setErrorMessage("Unable to submit request. Please check your connection.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card p-8 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-xl font-bold mb-2">Tour Requested!</h2>
        <p className="text-muted text-sm">
          We&rsquo;ll reach out within 1 business day to confirm your tour date and
          time. See you soon!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-5">
      <h2 className="text-xl font-bold">Request a Tour</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="first_name" className="form-label">
            First Name <span style={{ color: "var(--color-accent)" }}>*</span>
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            required
            className="form-input"
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="last_name" className="form-label">
            Last Name <span style={{ color: "var(--color-accent)" }}>*</span>
          </label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            required
            className="form-input"
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="form-label">
          Email <span style={{ color: "var(--color-accent)" }}>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="form-input"
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="form-input"
          placeholder="(206) 555-0000"
        />
      </div>

      <div>
        <label htmlFor="preferred_date" className="form-label">
          Preferred Date <span style={{ color: "var(--color-accent)" }}>*</span>
        </label>
        <input
          id="preferred_date"
          name="preferred_date"
          type="date"
          required
          className="form-input"
          min={new Date().toISOString().split("T")[0]}
        />
      </div>

      <div>
        <label htmlFor="preferred_time" className="form-label">
          Preferred Time <span style={{ color: "var(--color-accent)" }}>*</span>
        </label>
        <select id="preferred_time" name="preferred_time" required className="form-input">
          <option value="">Select a time</option>
          <option value="10:00">10:00 AM</option>
          <option value="11:00">11:00 AM</option>
          <option value="12:00">12:00 PM</option>
          <option value="13:00">1:00 PM</option>
          <option value="14:00">2:00 PM</option>
          <option value="15:00">3:00 PM</option>
          <option value="16:00">4:00 PM</option>
        </select>
      </div>

      <div>
        <label htmlFor="group_size" className="form-label">
          Group Size
        </label>
        <select id="group_size" name="group_size" className="form-input">
          <option value="1">Just me</option>
          <option value="2">2 people</option>
          <option value="3">3 people</option>
          <option value="4">4 people</option>
          <option value="5">5 or more</option>
        </select>
      </div>

      <div>
        <label htmlFor="interests" className="form-label">
          Artistic Interests
        </label>
        <select id="interests" name="interests" className="form-input">
          <option value="">Select primary interest</option>
          <option value="ceramics">Ceramics / Pottery</option>
          <option value="painting">Painting</option>
          <option value="drawing">Drawing / Illustration</option>
          <option value="printmaking">Printmaking</option>
          <option value="sculpture">Sculpture</option>
          <option value="fiber">Fiber Arts / Textiles</option>
          <option value="mixed">Mixed / Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="form-label">
          Anything else we should know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="form-input resize-none"
          placeholder="Accessibility needs, questions, etc."
        />
      </div>

      {status === "error" && (
        <div
          className="rounded-lg p-3 text-sm"
          style={{ backgroundColor: "#fef2f2", color: "#991b1b" }}
        >
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full"
        style={{ opacity: status === "loading" ? 0.7 : 1 }}
      >
        {status === "loading" ? "Submitting…" : "Request Tour"}
      </button>
    </form>
  );
}
