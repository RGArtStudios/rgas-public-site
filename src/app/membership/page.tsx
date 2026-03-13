import type { Metadata } from "next";
import Link from "next/link";

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
    color: "#8a6a5a",
    popular: false,
    benefits: [
      "8 hours of open studio time per month",
      "10% discount on all classes",
      "Access to gallery shop",
      "Monthly newsletter",
      "Invitations to member events",
      "Free RSVP to all exhibitions",
      "Online member portal access",
    ],
  },
  {
    name: "Studio",
    price: 195,
    tagline: "For dedicated studio practitioners",
    color: "#b07050",
    popular: true,
    benefits: [
      "Unlimited open studio hours",
      "20% discount on all classes",
      "One free class per quarter",
      "Access to all studio disciplines",
      "Storage locker (small)",
      "Gallery shop with consignment option",
      "Priority registration for workshops",
      "Monthly member critique",
      "Guest passes (2 per month)",
    ],
  },
  {
    name: "Advanced",
    price: 325,
    tagline: "For serious artists and professionals",
    color: "#7a5840",
    popular: false,
    benefits: [
      "Unlimited open studio hours + 24/7 key fob access",
      "30% discount on all classes",
      "Two free classes per quarter",
      "Dedicated locker and shelf storage",
      "Priority kiln scheduling",
      "Featured artist spotlight opportunity",
      "Gallery wall space (rotating)",
      "One free private instruction session per quarter",
      "Invitation to advanced critique group",
      "Guest passes (4 per month)",
      "Annual portfolio review with resident artist",
    ],
  },
];

const faqs = [
  {
    q: "Can I try the studio before joining?",
    a: "Yes! Schedule a free tour and we'll show you the space. You can also attend a single class as a non-member before committing.",
  },
  {
    q: "Is there a joining fee?",
    a: "There is a one-time $25 enrollment fee for all memberships.",
  },
  {
    q: "Can I pause or cancel my membership?",
    a: "Studio and Advanced members can pause up to 2 months per year. All memberships can be cancelled with 30 days' notice.",
  },
  {
    q: "Do discounts apply to workshops?",
    a: "Yes — your member discount applies to all paid classes, workshops, and events.",
  },
  {
    q: "Can I upgrade or downgrade?",
    a: "You can change your membership tier at any time. Changes take effect at the start of your next billing cycle.",
  },
];

export default function MembershipPage() {
  return (
    <>
      {/* Header */}
      <section
        className="py-16 text-center"
        style={{ backgroundColor: "var(--color-surface-alt)" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="section-title">Membership</h1>
          <p className="section-subtitle">
            Join a community of makers, learners, and professional artists. Every
            tier includes unlimited access to our events and gallery.
          </p>
        </div>
      </section>

      {/* Tier cards */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="card flex flex-col relative"
              style={{
                ...(tier.popular
                  ? {
                      borderColor: tier.color,
                      borderWidth: "2px",
                      boxShadow: `0 0 0 1px ${tier.color}20, 0 8px 32px ${tier.color}20`,
                    }
                  : {}),
              }}
            >
              {tier.popular && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-4 py-1 rounded-full"
                  style={{ backgroundColor: tier.color }}
                >
                  Most Popular
                </div>
              )}

              {/* Tier top bar */}
              <div className="h-1.5" style={{ backgroundColor: tier.color }} />

              <div className="p-6 flex flex-col flex-1">
                <div className="mb-6">
                  <h2
                    className="text-2xl font-bold mb-1"
                    style={{ color: tier.color }}
                  >
                    {tier.name}
                  </h2>
                  <p className="text-sm text-muted">{tier.tagline}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  <span className="text-muted text-sm">/month</span>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-sm">
                      <svg
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: tier.color }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span style={{ color: "var(--color-text)" }}>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="w-full text-center py-3 rounded-lg font-semibold text-sm transition-all duration-200"
                  style={
                    tier.popular
                      ? {
                          backgroundColor: tier.color,
                          color: "#fff",
                        }
                      : {
                          border: `2px solid ${tier.color}`,
                          color: tier.color,
                        }
                  }
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison note */}
        <p className="text-center text-sm text-muted mt-8">
          All memberships are billed monthly. Cancel anytime with 30 days&rsquo;
          notice. One-time $25 enrollment fee applies.
        </p>
      </section>

      {/* Benefits comparison table */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--color-surface-alt)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            Compare All Benefits
          </h2>
          <div
            className="rounded-xl overflow-hidden border"
            style={{ borderColor: "var(--color-border)" }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "var(--color-surface)" }}>
                  <th className="text-left p-4 font-semibold" style={{ color: "var(--color-text)" }}>
                    Benefit
                  </th>
                  {tiers.map((t) => (
                    <th
                      key={t.name}
                      className="text-center p-4 font-semibold"
                      style={{ color: t.color }}
                    >
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Open Studio Hours", "8 hrs/mo", "Unlimited", "Unlimited + 24/7"],
                  ["Class Discount", "10%", "20%", "30%"],
                  ["Free Classes", "—", "1/quarter", "2/quarter"],
                  ["Storage", "—", "Small locker", "Large locker + shelf"],
                  ["Guest Passes", "—", "2/month", "4/month"],
                  ["Gallery Space", "—", "—", "Rotating wall space"],
                  ["Private Session", "—", "—", "1/quarter"],
                  ["24/7 Key Fob", "—", "—", "✓"],
                  ["Critique Group", "—", "Monthly", "Advanced group"],
                ].map(([benefit, community, studio, advanced], i) => (
                  <tr
                    key={benefit}
                    style={{
                      backgroundColor:
                        i % 2 === 0 ? "var(--color-surface)" : "var(--color-surface-alt)",
                    }}
                  >
                    <td
                      className="p-4 font-medium"
                      style={{ color: "var(--color-text)" }}
                    >
                      {benefit}
                    </td>
                    {[community, studio, advanced].map((val, j) => (
                      <td
                        key={j}
                        className="p-4 text-center"
                        style={{
                          color:
                            val === "—"
                              ? "var(--color-border)"
                              : "var(--color-text)",
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
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="card p-6">
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Not sure which tier is right?</h2>
          <p className="text-muted mb-6">
            Schedule a free tour and we&rsquo;ll help you find the perfect fit.
          </p>
          <Link href="/tour" className="btn-primary">
            Schedule a Free Tour
          </Link>
        </div>
      </section>
    </>
  );
}
