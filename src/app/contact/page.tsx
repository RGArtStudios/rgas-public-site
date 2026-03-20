import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rainier Gardens Art Studio — questions, class inquiries, and general contact.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: "40vh", backgroundColor: "var(--color-dark)" }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(26,26,46,0.92) 0%, rgba(26,26,46,0.55) 55%, rgba(26,26,46,0.25) 100%)",
            }}
          />
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-32">
          <div className="animate-fade-in-up">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#e8c4a8", fontFamily: "system-ui, sans-serif" }}
            >
              We&rsquo;d Love to Hear From You
            </span>
            <h1
              className="font-bold text-white"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1.1 }}
            >
              Get in Touch
            </h1>
          </div>
        </div>
      </section>

      {/* ── Contact Content ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info column */}
            <AnimateOnScroll>
              <p
                className="text-lg mb-10 leading-relaxed"
                style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
              >
                Questions about classes, membership, or anything else? We&rsquo;d love to
                hear from you. Reach us by form, phone, or stop by in person.
              </p>

              <div className="space-y-5 mb-12">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: "Location",
                    value: "4820 Rainier Ave S, Seattle, WA 98118",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: "Phone",
                    value: "(206) 555-0142",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: "Email",
                    value: "hello@rainiergardens.art",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    label: "Hours",
                    value: "Tuesday–Sunday, 9 AM–8 PM",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--color-accent) 12%, transparent)",
                        color: "var(--color-accent)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div
                        className="text-xs font-bold uppercase tracking-widest mb-0.5"
                        style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
                      >
                        {item.label}
                      </div>
                      <div
                        className="text-sm font-medium"
                        style={{ color: "var(--color-text)", fontFamily: "system-ui, sans-serif" }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="rounded-2xl p-7"
                style={{ backgroundColor: "var(--color-surface-alt)" }}
              >
                <h3
                  className="font-bold mb-3"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  Planning a visit?
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
                >
                  We&rsquo;re located in the heart of Seattle&rsquo;s Rainier Valley neighborhood,
                  close to the Columbia City light rail station. Free street parking available.
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm px-5 py-2.5"
                >
                  Get Directions
                </a>
              </div>
            </AnimateOnScroll>

            {/* Form column */}
            <AnimateOnScroll delay={150}>
              <ContactForm />
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
