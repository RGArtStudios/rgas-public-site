import type { Metadata } from "next";
import ConsignmentForm from "./ConsignmentForm";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Artist Consignment Application",
  description:
    "Apply to sell your work in the Rainier Gardens Art Studio gallery shop. Open to all Pacific Northwest artists.",
};

export default function ConsignmentPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: "40vh", backgroundColor: "var(--color-dark)" }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1600&q=80"
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
              Artist Opportunities
            </span>
            <h1
              className="font-bold text-white"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", lineHeight: 1.1 }}
            >
              Consignment Application
            </h1>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Info */}
            <AnimateOnScroll>
              <span className="section-eyebrow">About the Gallery Shop</span>
              <h2 className="section-title">Sell Your Work<br />with Us</h2>
              <p
                className="text-lg mb-10 leading-relaxed"
                style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
              >
                Our gallery shop features handmade works by local and regional
                artists. We accept ceramics, prints, paintings, textiles, jewelry,
                and mixed media. The shop is open to the public daily and sees
                significant foot traffic from our 500+ member community.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  {
                    title: "Consignment Split",
                    desc: "Artists receive 60% of the sale price. The studio retains 40% to cover overhead, marketing, and staffing.",
                  },
                  {
                    title: "Contract Length",
                    desc: "Initial consignment agreements are for 6 months, renewable each season.",
                  },
                  {
                    title: "Piece Limits",
                    desc: "Artists may have up to 15 pieces displayed at any time, subject to space availability.",
                  },
                  {
                    title: "Review Process",
                    desc: "Our gallery committee reviews applications monthly. You will hear back within 4–6 weeks.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div
                      className="w-1 rounded-full flex-shrink-0 self-stretch"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                    <div>
                      <h3
                        className="font-semibold text-sm mb-1"
                        style={{ color: "var(--color-text)" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: "var(--color-surface-alt)" }}
              >
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
                >
                  <strong style={{ color: "var(--color-text)" }}>Not yet a member?</strong>{" "}
                  Consignment is open to all Pacific Northwest artists, regardless of
                  membership status. Studio and Advanced members receive priority placement.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Form */}
            <AnimateOnScroll delay={150}>
              <ConsignmentForm />
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
