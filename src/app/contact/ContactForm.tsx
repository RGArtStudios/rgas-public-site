"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const rawData = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const { first_name, last_name, ...rest } = rawData;
    const data = { ...rest, name: `${first_name} ${last_name}`.trim() };
    const apiUrl = process.env.NEXT_PUBLIC_LARAVEL_API_URL;

    try {
      const res = await fetch(`${apiUrl}/api/public/contact`, {
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
      setErrorMessage("Unable to send message. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="card p-8 text-center"
      >
        <div className="text-4xl mb-4">✓</div>
        <h2 className="text-xl font-bold mb-2">Message Sent!</h2>
        <p className="text-muted text-sm">
          Thanks for reaching out. We&rsquo;ll get back to you within 1–2 business days.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 btn-outline text-sm px-6 py-2"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-5">
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
          Phone (optional)
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
        <label htmlFor="subject" className="form-label">
          Subject <span style={{ color: "var(--color-accent)" }}>*</span>
        </label>
        <select id="subject" name="subject" required className="form-input">
          <option value="">Select a subject</option>
          <option value="class_inquiry">Class Inquiry</option>
          <option value="membership">Membership</option>
          <option value="private_instruction">Private Instruction</option>
          <option value="events">Events</option>
          <option value="gallery">Gallery</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="form-label">
          Message <span style={{ color: "var(--color-accent)" }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="form-input resize-none"
          placeholder="Tell us what you have in mind..."
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
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
