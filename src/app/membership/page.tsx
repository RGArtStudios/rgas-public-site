import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Join Rainier Gardens Art Studio. Choose from Community ($135/mo), Studio ($195/mo), or Advanced ($325/mo) membership tiers.",
};

const tiers = [
  {
    name: "Community",
    price: 135,
    tagline: "Perfect for casual creatives",
    accent: "#8a6a5a",
    popular: false,
    sessions: "3 sessions/week",
    benefits: [
      { label: "3 open studio sessions / week", strong: true },
      { label: "Kiln access (member rate)", strong: false },
      { label: "Class enrollment eligibility", strong: false },
      { label: "5% discount on all classes", strong: false },
      { label: "Gallery shop access", strong: false },
      { label: "Member event invitations", strong: false },
      { label: "Monthly newsletter", strong: false },
    ],
    notIncluded: ["Shelf storage", "Extended booking window", "Guest passes"],
  },
  {
    name: "Studio",
    price: 195,
    tagline: "For dedicated studio practitioners",
    accent: "#b07050",
    popular: true,
    sessions: "5 sessions/week",
    benefits: [
      { label: "5 open studio sessions / week", strong: true },
      { label: "4 sq ft dedicated shelf space", strong: true },
      { label: "Kiln access (priority scheduling)", strong: false },
      { label: "Class enrollment eligibility", strong: false },
      { label: "7% discount on all classes", strong: false },
      { label: "10-day advance booking window", strong: false },
      { label: "Gallery shop with consignment option", strong: false },
      { label: "2 guest passes / month", strong: false },
      { label: "Monthly member critique", strong: false },
    ],
    notIncluded: [],
  },
  {
    name: "Advanced",
    price: 325,
    tagline: "For serious artists and professionals",
    accent: "#7a5840",
    popular: false,
    sessions: "7 sessions/week",
    benefits: [
      { label: "7 open studio sessions / week", strong: true },
      { label: "8 sq ft dedicated shelf space", strong: true },
      { label: "Kiln access + priority scheduling", strong: false },
      { label: "Class enrollment eligibility", strong: false },
      { label: "10% discount on all classes", strong: false },
      { label: "14-day advance booking window", strong: true },
      { label: "Rotating gallery wall space", strong: false },
      { label: "1 private instruction session / quarter", strong: false },
      { label: "4 guest passes / month", strong: false },
      { label: "Advanced critique group invitation", strong: false },
      { label: "Annual portfolio review", strong: false },
    ],
    notIncluded: [],
  },
];

const compareRows = [
  { feature: "Open Studio Sessions", community: "3/week", studio: "5/week", advanced: "7/week" },
  { feature: "Dedicated Shelf Space", community: "—", studio: "4 sq ft", advanced: "8 sq ft" },
  { feature: "Kiln Access", community: "✓", studio: "✓ Priority", advanced: "✓ Priority" },
  { feature: "Class Discount", community: "5%", studio: "7%", advanced: "10%" },
  { feature: "Booking Window", community: "Standard", studio: "10 days advance", advanced: "14 days advance" },
  { feature: "Gallery Space", community: "—", studio: "Shop only", advanced: "Rotating wall" },
  { feature: "Guest Passes", community: "—", studio: "2/month", advanced: "4/month" },
  { feature: "Private Session", community: "—", studio: "—", advanced: "1/quarter" },
  { feature: "Critique Group", community: "—", studio: "Monthly", advanced: "Advanced group" },
  { feature: "Portfolio Review", community: "—", studio: "—", advanced: "Annual" },
];

const faqs = [
  {
    q: "Can I try the studio before joining?",
    a: "Yes! Schedule a free tour and we'll show you the space. You can also attend a single class as a non-member before committing to a membership.",
  },
  {
    q: "Is there a joining fee?",
    a: "There is a one-time $25 enrollment fee for all new memberships.",
  },
  {
    q: "Can I pause or cancel my membership?",
    a: "Studio and Advanced members can pause for up to 2 months per year. All memberships can be cancelled with 30 days' notice.",
  },
  {
    q: "Do discounts apply to workshops and special events?",
    a: "Yes — your member discount applies to all paid classes, workshops, and ticketed events throughout the year.",
  },
  {
    q: "Can I upgrade or downgrade?",
    a: "You can change your membership tier at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "What is shelf space used for?",
    a: "Shelf space lets you store works-in-progress between studio sessions — especially important for ceramics projects that span multiple visits.",
  },
];

export default function MembershipPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "50vh", backgroundColor: "var(--color-dark)" }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1481072881274-e5b88f71e7ca?w=1600&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(26,26,46,0.88) 0%, rgba(26,26,46,0.5) 60%, rgba(26,26,46,0.15) 100%)",
            }}
          />
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-36">
          <div className="animate-fade-in-up">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#e8c4a8", fontFamily: "system-ui, sans-serif" }}
            >
              Join the Community
            </span>
            <h1
              className="font-bold text-white mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.1 }}
            >
              Become a Member
            </h1>
            <p
              className="max-w-xl animate-fade-in-up delay-100"
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.72)",
                fontFamily: "system-ui, sans-serif",
                lineHeight: 1.7,
              }}
            >
              Join a community of makers, learners, and professional artists.
              Every tier includes access to our events, gallery, and studio
              community.
            </p>
          </div>
        </div>
      </section>

      {/* ── Tier Cards ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-eyebrow">Membership Tiers</span>
            <h2 className="section-title">Choose Your Path</h2>
            <p className="section-subtitle">
              All memberships are billed monthly with no long-term commitment.
              One-time $25 enrollment fee applies.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {tiers.map((tier, i) => (
              <AnimateOnScroll key={tier.name} delay={i * 110}>
                <div
                  className="relative flex flex-col h-full rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    border: tier.popular
                      ? `2px solid ${tier.accent}`
                      : "1px solid var(--color-border)",
                    boxShadow: tier.popular
                      ? `0 0 0 1px ${tier.accent}20, 0 20px 60px ${tier.accent}18`
                      : undefined,
                  }}
                >
                  {tier.popular && (
                    <div
                      className="absolute top-0 left-0 right-0 text-center text-xs font-bold uppercase tracking-widest text-white py-2"
                      style={{ backgroundColor: tier.accent, fontFamily: "system-ui, sans-serif" }}
                    >
                      Most Popular
                    </div>
                  )}

                  {/* Color bar */}
                  <div
                    className={tier.popular ? "h-1 mt-8" : "h-1.5"}
                    style={{ backgroundColor: tier.accent }}
                  />

                  <div className="p-8 flex flex-col flex-1">
                    {/* Header */}
                    <div className="mb-6">
                      <div
                        className="text-xs font-bold uppercase tracking-widest mb-3"
                        style={{ color: tier.accent, fontFamily: "system-ui, sans-serif" }}
                      >
                        {tier.sessions}
                      </div>
                      <h2
                        className="text-3xl font-bold mb-1"
                        style={{ color: tier.accent }}
                      >
                        {tier.name}
                      </h2>
                      <p
                        className="text-sm"
                        style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
                      >
                        {tier.tagline}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-8 pb-6" style={{ borderBottom: "1px solid var(--color-border)" }}>
                      <span
                        className="text-5xl font-bold"
                        style={{ color: "var(--color-text)", fontFamily: "var(--font-playfair, Georgia, serif)" }}
                      >
                        ${tier.price}
                      </span>
                      <span
                        className="text-sm ml-1"
                        style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
                      >
                        /month
                      </span>
                    </div>

                    {/* Benefits */}
                    <ul className="space-y-3 flex-1 mb-8">
                      {tier.benefits.map((b) => (
                        <li key={b.label} className="flex items-start gap-3 text-sm">
                          <svg
                            className="w-4 h-4 flex-shrink-0 mt-0.5"
                            style={{ color: tier.accent }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span
                            style={{
                              color: b.strong ? "var(--color-text)" : "var(--color-text-muted)",
                              fontWeight: b.strong ? 600 : 400,
                              fontFamily: "system-ui, sans-serif",
                            }}
                          >
                            {b.label}
                          </span>
                        </li>
                      ))}
                      {tier.notIncluded.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm">
                          <svg
                            className="w-4 h-4 flex-shrink-0 mt-0.5"
                            style={{ color: "var(--color-border)" }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span
                            style={{
                              color: "var(--color-border)",
                              fontFamily: "system-ui, sans-serif",
                            }}
                          >
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="block text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
                      style={
                        tier.popular
                          ? {
                              backgroundColor: tier.accent,
                              color: "#fff",
                              fontFamily: "system-ui, sans-serif",
                            }
                          : {
                              border: `2px solid ${tier.accent}`,
                              color: tier.accent,
                              fontFamily: "system-ui, sans-serif",
                            }
                      }
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--color-surface-alt)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-12">
            <span className="section-eyebrow">Compare</span>
            <h2 className="section-title">All Benefits at a Glance</h2>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <div className="overflow-x-auto">
                <table className="w-full text-sm" style={{ minWidth: "560px" }}>
                  <thead>
                    <tr style={{ backgroundColor: "var(--color-dark)" }}>
                      <th
                        className="text-left p-4 font-semibold text-white"
                        style={{ fontFamily: "system-ui, sans-serif", width: "35%" }}
                      >
                        Feature
                      </th>
                      {tiers.map((t) => (
                        <th
                          key={t.name}
                          className="text-center p-4 font-bold"
                          style={{ color: t.accent === "#b07050" ? "#e8c4a8" : "#fff", fontFamily: "var(--font-playfair, Georgia, serif)" }}
                        >
                          {t.name}
                        </th>
                      ))}
                    </tr>
                    <tr style={{ backgroundColor: "var(--color-dark)" }}>
                      <td className="p-2" />
                      {tiers.map((t) => (
                        <td key={t.name} className="text-center p-2 pb-4">
                          <span
                            className="text-xs font-bold"
                            style={{ color: t.accent, fontFamily: "system-ui, sans-serif" }}
                          >
                            ${t.price}/mo
                          </span>
                        </td>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {compareRows.map((row, i) => (
                      <tr
                        key={row.feature}
                        style={{
                          backgroundColor:
                            i % 2 === 0 ? "var(--color-surface)" : "var(--color-surface-alt)",
                        }}
                      >
                        <td
                          className="p-4 font-medium"
                          style={{ color: "var(--color-text)", fontFamily: "system-ui, sans-serif" }}
                        >
                          {row.feature}
                        </td>
                        {[row.community, row.studio, row.advanced].map((val, j) => (
                          <td
                            key={j}
                            className="p-4 text-center"
                            style={{
                              color:
                                val === "—"
                                  ? "var(--color-border)"
                                  : "var(--color-text)",
                              fontFamily: "system-ui, sans-serif",
                            }}
                          >
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Why Join ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-eyebrow">The Experience</span>
            <h2 className="section-title">Why Artists Love It Here</h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
                title: "Professional Equipment",
                desc: "Kiln rooms, pottery wheels, painting stations, presses, and sculpture tools — everything maintained to professional standards.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: "Expert Instruction",
                desc: "12 resident artists and educators with decades of professional experience across every discipline we offer.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Genuine Community",
                desc: "From critiques to open studio nights, our members form real friendships built around shared creative practice.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Exhibition Opportunities",
                desc: "Members can show and sell their work in our curated gallery, which rotates fresh exhibitions throughout the year.",
              },
            ].map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 100}>
                <div className="card p-7 text-center h-full flex flex-col items-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                    style={{ backgroundColor: "color-mix(in srgb, var(--color-accent) 12%, transparent)", color: "var(--color-accent)" }}
                  >
                    {item.icon}
                  </div>
                  <h4 className="font-bold mb-2 text-base">{item.title}</h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--color-surface-alt)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-12">
            <span className="section-eyebrow">Got Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </AnimateOnScroll>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={faq.q} delay={i * 60}>
                <div className="card p-7">
                  <h3
                    className="font-bold mb-2.5 text-base"
                    style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                  >
                    {faq.q}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
                  >
                    {faq.a}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        className="py-24 md:py-36 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-dark)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(176,112,80,0.16) 0%, transparent 65%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <AnimateOnScroll>
            <span className="section-eyebrow-light">Next Steps</span>
            <h2
              className="font-bold text-white mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: 1.1 }}
            >
              Not sure which tier is right for you?
            </h2>
            <p
              className="text-base mb-10 max-w-lg mx-auto"
              style={{
                color: "rgba(255,255,255,0.55)",
                fontFamily: "system-ui, sans-serif",
                lineHeight: 1.75,
              }}
            >
              Schedule a free tour and spend 45 minutes with one of our studio
              coordinators. We&rsquo;ll help you find the perfect fit.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/tour" className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.25rem" }}>
                Schedule a Free Tour
              </Link>
              <Link href="/contact" className="btn-ghost-white" style={{ fontSize: "1rem", padding: "1rem 2.25rem" }}>
                Ask a Question
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
