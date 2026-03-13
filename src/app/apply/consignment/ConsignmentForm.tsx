"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ConsignmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const rawData = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const { first_name, last_name, bio, website, ...rest } = rawData;
    const data = {
      ...rest,
      name: `${first_name} ${last_name}`.trim(),
      statement: bio,
      portfolio_url: website || undefined,
    };
    const apiUrl = process.env.NEXT_PUBLIC_LARAVEL_API_URL;

    try {
      const res = await fetch(`${apiUrl}/api/public/consignment-application`, {
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
        <div className="text-5xl mb-4">🎨</div>
        <h2 className="text-xl font-bold mb-2">Application Received!</h2>
        <p className="text-muted text-sm">
          Thank you for applying to our gallery shop. Our committee reviews
          applications monthly and you can expect a response within 4–6 weeks.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-5">
      <h2 className="text-xl font-bold">Artist Application</h2>

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
        <label htmlFor="website" className="form-label">
          Website / Portfolio URL
        </label>
        <input
          id="website"
          name="website"
          type="url"
          className="form-input"
          placeholder="https://yourportfolio.com"
        />
      </div>

      <div>
        <label htmlFor="instagram" className="form-label">Instagram Handle</label>
        <input
          id="instagram"
          name="instagram"
          type="text"
          className="form-input"
          placeholder="@yourhandle"
        />
      </div>

      <div>
        <label htmlFor="medium" className="form-label">
          Primary Medium <span style={{ color: "var(--color-accent)" }}>*</span>
        </label>
        <select id="medium" name="medium" required className="form-input">
          <option value="">Select your medium</option>
          <option value="ceramics">Ceramics / Pottery</option>
          <option value="painting">Painting</option>
          <option value="printmaking">Prints / Printmaking</option>
          <option value="drawing">Drawing / Illustration</option>
          <option value="textiles">Textiles / Fiber Arts</option>
          <option value="jewelry">Jewelry</option>
          <option value="sculpture">Sculpture</option>
          <option value="photography">Photography</option>
          <option value="mixed_media">Mixed Media</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="price_range" className="form-label">
          Typical Price Range per Piece{" "}
          <span style={{ color: "var(--color-accent)" }}>*</span>
        </label>
        <select id="price_range" name="price_range" required className="form-input">
          <option value="">Select range</option>
          <option value="under_50">Under $50</option>
          <option value="50_150">$50 – $150</option>
          <option value="150_500">$150 – $500</option>
          <option value="500_1000">$500 – $1,000</option>
          <option value="over_1000">Over $1,000</option>
        </select>
      </div>

      <div>
        <label htmlFor="pieces_count" className="form-label">
          How many pieces would you like to start with?
        </label>
        <select id="pieces_count" name="pieces_count" className="form-input">
          <option value="1_5">1–5 pieces</option>
          <option value="6_10">6–10 pieces</option>
          <option value="11_15">11–15 pieces (maximum)</option>
        </select>
      </div>

      <div>
        <label htmlFor="bio" className="form-label">
          Artist Statement / Bio{" "}
          <span style={{ color: "var(--color-accent)" }}>*</span>
        </label>
        <textarea
          id="bio"
          name="bio"
          required
          rows={4}
          className="form-input resize-none"
          placeholder="Tell us about your practice, your work, and why you'd like to join our gallery shop (2–4 sentences)."
        />
      </div>

      <div>
        <label htmlFor="member_status" className="form-label">
          Rainier Gardens Membership Status
        </label>
        <select id="member_status" name="member_status" className="form-input">
          <option value="not_member">Not a member</option>
          <option value="community">Community Member</option>
          <option value="studio">Studio Member</option>
          <option value="advanced">Advanced Member</option>
        </select>
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

      <p className="text-xs text-muted text-center">
        Applications are reviewed monthly. You&rsquo;ll hear back within 4–6 weeks.
      </p>
    </form>
  );
}
