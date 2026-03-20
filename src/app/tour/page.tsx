import type { Metadata } from "next";
import TourForm from "./TourForm";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Schedule a Tour",
  description:
    "Schedule a free tour of Rainier Gardens Art Studio. See our facilities, meet the instructors, and find your membership.",
};

export default function TourPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: "42vh", backgroundColor: "var(--color-dark)" }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1600&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(26,26,46,0.92) 0%, rgba(26,26,46,0.55) 55%, rgba(26,26,46,0.2) 100%)",
            }}
          />
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-32">
          <div className="animate-fade-in-up">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#e8c4a8", fontFamily: "system-ui, sans-serif" }}
            >
              Free &amp; No Commitment
            </span>
            <h1
              className="font-bold text-white mb-3"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1.1 }}
            >
              Schedule a Studio Tour
            </h1>
            <p
              className="max-w-lg animate-fade-in-up delay-100"
              style={{
                fontSize: "1.0625rem",
                color: "rgba(255,255,255,0.7)",
                fontFamily: "system-ui, sans-serif",
                lineHeight: 1.7,
              }}
            >
              45–60 minutes. All studio spaces. Meet working instructors.
              No obligation.
            </p>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Info */}
            <AnimateOnScroll>
              <span className="section-eyebrow">What to Expect</span>
              <h2 className="section-title">Your Tour,<br />Your Way</h2>
              <p
                className="text-lg mb-8 leading-relaxed"
                style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
              >
                Come see Rainier Gardens in person. Our guided tours walk you
                through all studio spaces, introduce you to working instructors,
                and give you a clear picture of what membership looks like.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    ),
                    text: "Available Tuesday–Saturday, 10 AM–4 PM",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    text: "45–60 minutes",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    text: "Completely free, no commitment required",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    text: "Individual and group tours welcome",
                  },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--color-accent) 12%, transparent)",
                        color: "var(--color-accent)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <span
                      className="pt-1.5 text-sm leading-relaxed"
                      style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="rounded-2xl p-7"
                style={{ backgroundColor: "var(--color-surface-alt)" }}
              >
                <h3
                  className="font-bold mb-4"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  What you&rsquo;ll see
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "Ceramics studio with 12 pottery wheels and kilns",
                    "Painting and drawing studios",
                    "Printmaking lab",
                    "Fiber arts and textile space",
                    "Sculpture garden",
                    "Gallery and member shop",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm"
                      style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
                    >
                      <svg
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: "var(--color-accent)" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            {/* Form */}
            <AnimateOnScroll delay={150}>
              <TourForm />
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
