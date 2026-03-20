import type { Metadata } from "next";
import Link from "next/link";
import StatsBar from "@/components/StatsBar";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Rainier Gardens Art Studio — Creative Community in the Pacific Northwest",
  description:
    "Find your artistic voice at Rainier Gardens Art Studio. Classes, memberships, events, and a welcoming creative community in Seattle.",
};

const featuredClasses = [
  {
    title: "Wheel Throwing Fundamentals",
    category: "Ceramics",
    instructor: "Elena Vasquez",
    schedule: "Tues & Thurs, 6–9 PM",
    level: "Beginner",
    spots: 4,
    price: 320,
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
  },
  {
    title: "Oil Painting Studio",
    category: "Painting",
    instructor: "Renata Nowak",
    schedule: "Saturdays, 10 AM–1 PM",
    level: "All Levels",
    spots: 2,
    price: 380,
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
  },
  {
    title: "Botanical Illustration",
    category: "Drawing",
    instructor: "Hiroshi Tanaka",
    schedule: "Wednesdays, 5–8 PM",
    level: "Intermediate",
    spots: 6,
    price: 295,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

const testimonials = [
  {
    quote:
      "Rainier Gardens completely changed how I see creativity. I've made lifelong friends and discovered a passion I never knew I had.",
    name: "Mara T.",
    role: "Studio Member, 3 years",
    tier: "Studio",
  },
  {
    quote:
      "The instructors are world-class and the space is absolutely gorgeous. It's my favorite place in Seattle.",
    name: "Daniel K.",
    role: "Community Member",
    tier: "Community",
  },
  {
    quote:
      "I took one ceramics class and now I'm obsessed. The studio has everything you need, and the community is so welcoming.",
    name: "Priya S.",
    role: "Advanced Member, 1 year",
    tier: "Advanced",
  },
];

const membershipTiers = [
  {
    name: "Community",
    price: 135,
    tagline: "For casual creatives",
    benefits: [
      "8 hrs open studio / month",
      "5% discount on all classes",
      "Gallery shop access",
      "Member events & exhibitions",
    ],
    highlight: false,
  },
  {
    name: "Studio",
    price: 195,
    tagline: "For dedicated practitioners",
    benefits: [
      "5 sessions / week",
      "4 sq ft shelf space",
      "7% discount on classes",
      "10-day advance booking",
      "Priority kiln access",
    ],
    highlight: true,
  },
  {
    name: "Advanced",
    price: 325,
    tagline: "For serious artists",
    benefits: [
      "7 sessions / week",
      "8 sq ft shelf space",
      "10% discount on classes",
      "14-day advance booking",
      "Gallery wall space",
    ],
    highlight: false,
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
  "https://images.unsplash.com/photo-1481072881274-e5b88f71e7ca?w=600&q=80",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80",
  "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image + overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1920&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(26,26,46,0.80) 0%, rgba(26,26,46,0.55) 55%, rgba(176,112,80,0.25) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="animate-fade-in-up">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-7 px-4 py-2 rounded-full"
              style={{
                color: "#e8c4a8",
                backgroundColor: "rgba(176,112,80,0.22)",
                border: "1px solid rgba(176,112,80,0.4)",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Pacific Northwest Art Community
            </span>
          </div>

          <h1
            className="font-bold text-white animate-fade-in-up delay-100"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              lineHeight: 1.05,
              textShadow: "0 2px 24px rgba(0,0,0,0.35)",
            }}
          >
            Where Art Finds
            <br />
            <em style={{ color: "#e8c4a8", fontStyle: "italic" }}>
              Community
            </em>
          </h1>

          <p
            className="mt-8 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-200"
            style={{
              fontSize: "clamp(1.05rem, 2.2vw, 1.25rem)",
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.75,
            }}
          >
            Rainier Gardens Art Studio is a creative sanctuary offering
            world-class instruction, open studio time, and a welcoming community
            for artists at every level in the heart of Seattle.
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up delay-300">
            <Link href="/classes" className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.25rem" }}>
              Explore Classes
            </Link>
            <Link href="/tour" className="btn-ghost-white" style={{ fontSize: "1rem", padding: "1rem 2.25rem" }}>
              Schedule a Tour
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-9 left-1/2 -translate-x-1/2 animate-bounce-slow" style={{ color: "rgba(255,255,255,0.45)" }}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ backgroundColor: "var(--color-dark)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <StatsBar />
        </div>
      </section>

      {/* ── Featured Classes ── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <span className="section-eyebrow">What We Offer</span>
            <h2 className="section-title">Featured Classes</h2>
            <p className="section-subtitle">
              From ceramics to illustration, find your medium and master it with
              expert guidance from working artists.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {featuredClasses.map((cls, i) => (
              <AnimateOnScroll key={cls.title} delay={i * 110}>
                <div className="card group h-full flex flex-col">
                  <div className="aspect-[4/3] img-zoom-wrap overflow-hidden">
                    <img
                      src={cls.image}
                      alt={cls.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{
                          backgroundColor:
                            "color-mix(in srgb, var(--color-accent) 12%, transparent)",
                          color: "var(--color-accent)",
                          fontFamily: "system-ui, sans-serif",
                        }}
                      >
                        {cls.category}
                      </span>
                      <span
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: "var(--color-surface-alt)",
                          color: "var(--color-text-muted)",
                          fontFamily: "system-ui, sans-serif",
                        }}
                      >
                        {cls.level}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-1">{cls.title}</h3>
                    <p
                      className="text-sm mb-5 flex-1"
                      style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
                    >
                      with {cls.instructor} &mdash; {cls.schedule}
                    </p>

                    <div
                      className="flex items-center justify-between pt-4 border-t"
                      style={{ borderColor: "var(--color-border)" }}
                    >
                      <div>
                        <div
                          className="text-2xl font-bold"
                          style={{
                            color: "var(--color-accent)",
                            fontFamily: "var(--font-playfair, Georgia, serif)",
                          }}
                        >
                          ${cls.price}
                        </div>
                        <div
                          className="text-xs mt-0.5"
                          style={{
                            color: cls.spots <= 3 ? "#c05040" : "var(--color-text-muted)",
                            fontFamily: "system-ui, sans-serif",
                          }}
                        >
                          {cls.spots} spots remaining
                        </div>
                      </div>
                      <Link href="/classes" className="btn-primary text-sm px-5 py-2.5">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="text-center">
            <Link href="/classes" className="btn-outline">
              View All Classes
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--color-surface-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            <AnimateOnScroll>
              <span className="section-eyebrow">About the Studio</span>
              <h2 className="section-title">
                Art Is for<br />Everyone
              </h2>
              <p
                className="text-lg mb-5 leading-relaxed"
                style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
              >
                Founded with the belief that creative expression is a
                fundamental human need, Rainier Gardens Art Studio provides a
                space where beginners and professionals alike can pursue their
                craft with intention and joy.
              </p>
              <p
                className="mb-9 leading-relaxed"
                style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
              >
                Our 12,000 sq ft facility houses professional-grade ceramic
                studios, light-filled painting rooms, printmaking presses, a
                sculpture garden, and a curated gallery showcasing the best of
                Pacific Northwest talent.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { label: "Founded", value: "2009" },
                  { label: "Studio Space", value: "12,000 sq ft" },
                  { label: "Resident Artists", value: "12" },
                  { label: "Disciplines", value: "8 Mediums" },
                ].map((fact) => (
                  <div
                    key={fact.label}
                    className="p-5 rounded-xl"
                    style={{ backgroundColor: "var(--color-surface)" }}
                  >
                    <div
                      className="text-2xl font-bold"
                      style={{
                        color: "var(--color-accent)",
                        fontFamily: "var(--font-playfair, Georgia, serif)",
                      }}
                    >
                      {fact.value}
                    </div>
                    <div
                      className="text-xs uppercase tracking-wider mt-1"
                      style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
                    >
                      {fact.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-primary">
                  Our Story
                </Link>
                <Link href="/membership" className="btn-outline">
                  Membership Options
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200} className="relative mt-8 lg:mt-0">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/5" }}>
                <img
                  src="https://images.unsplash.com/photo-1481072881274-e5b88f71e7ca?w=900&q=80"
                  alt="Ceramics at Rainier Gardens"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating stat */}
              <div
                className="absolute -bottom-5 -left-5 p-5 rounded-xl shadow-2xl"
                style={{ backgroundColor: "var(--color-surface)" }}
              >
                <div
                  className="text-3xl font-bold"
                  style={{
                    color: "var(--color-accent)",
                    fontFamily: "var(--font-playfair, Georgia, serif)",
                  }}
                >
                  500+
                </div>
                <div
                  className="text-xs uppercase tracking-wider mt-0.5"
                  style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
                >
                  Active Members
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <span className="section-eyebrow">Member Stories</span>
            <h2 className="section-title">What Our Community Says</h2>
            <p className="section-subtitle">
              Thousands of artists have found their creative home here.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 110}>
                <div className="card p-8 h-full flex flex-col">
                  <div
                    className="text-6xl leading-none mb-4"
                    style={{ color: "var(--color-accent)", fontFamily: "Georgia, serif", opacity: 0.35 }}
                  >
                    &ldquo;
                  </div>
                  <blockquote
                    className="text-base leading-relaxed mb-8 flex-1"
                    style={{
                      color: "var(--color-text)",
                      fontStyle: "italic",
                      fontFamily: "var(--font-playfair, Georgia, serif)",
                    }}
                  >
                    {t.quote}
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    >
                      {t.name[0]}
                    </div>
                    <div className="flex-1">
                      <div
                        className="font-semibold text-sm"
                        style={{ fontFamily: "system-ui, sans-serif" }}
                      >
                        {t.name}
                      </div>
                      <div
                        className="text-xs mt-0.5"
                        style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
                      >
                        {t.role}
                      </div>
                    </div>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-semibold"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--color-accent) 12%, transparent)",
                        color: "var(--color-accent)",
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      {t.tier}
                    </span>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Membership Preview ── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--color-dark)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <span className="section-eyebrow-light">Membership</span>
            <h2 className="section-title-light">Join Our Community</h2>
            <p
              className="text-base max-w-lg mx-auto"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "system-ui, sans-serif", lineHeight: 1.75 }}
            >
              Choose the membership tier that fits your creative practice.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {membershipTiers.map((tier, i) => (
              <AnimateOnScroll key={tier.name} delay={i * 110}>
                <div
                  className="relative rounded-2xl p-8 h-full flex flex-col"
                  style={{
                    backgroundColor: tier.highlight
                      ? "var(--color-accent)"
                      : "rgba(255,255,255,0.05)",
                    border: tier.highlight
                      ? "none"
                      : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {tier.highlight && (
                    <div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full text-white"
                      style={{ backgroundColor: "var(--color-accent-hover)", fontFamily: "system-ui, sans-serif" }}
                    >
                      Most Popular
                    </div>
                  )}
                  <h3
                    className="text-2xl font-bold text-white mb-1"
                  >
                    {tier.name}
                  </h3>
                  <p
                    className="text-sm mb-7"
                    style={{
                      color: tier.highlight ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.45)",
                      fontFamily: "system-ui, sans-serif",
                    }}
                  >
                    {tier.tagline}
                  </p>
                  <div className="mb-8">
                    <span
                      className="text-5xl font-bold text-white"
                      style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                    >
                      ${tier.price}
                    </span>
                    <span
                      className="text-sm ml-1"
                      style={{
                        color: tier.highlight ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)",
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      /month
                    </span>
                  </div>
                  <ul className="space-y-3 flex-1 mb-9">
                    {tier.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm">
                        <svg
                          className="w-4 h-4 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          style={{ color: tier.highlight ? "rgba(255,255,255,0.9)" : "var(--color-accent)" }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span
                          style={{
                            color: tier.highlight ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.65)",
                            fontFamily: "system-ui, sans-serif",
                          }}
                        >
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/membership"
                    className="block text-center py-3 rounded-lg font-semibold text-sm transition-all text-white"
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      backgroundColor: tier.highlight ? "rgba(255,255,255,0.2)" : "transparent",
                      border: tier.highlight ? "none" : "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    Join Now
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="text-center">
            <Link
              href="/membership"
              className="text-sm font-medium"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: "system-ui, sans-serif" }}
            >
              Compare all membership benefits &rarr;
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--color-surface-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-eyebrow">Gallery</span>
            <h2 className="section-title">Life at the Studio</h2>
            <p className="section-subtitle">
              A glimpse into our creative community and beautiful Pacific
              Northwest surroundings.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((src, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="aspect-square overflow-hidden rounded-xl cursor-pointer img-zoom-wrap">
                  <img
                    src={src}
                    alt={`Studio gallery ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="text-center mt-12">
            <a
              href="https://instagram.com"
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow Us on Instagram
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        className="py-28 md:py-40 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-dark)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(176,112,80,0.18) 0%, transparent 68%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <AnimateOnScroll>
            <span className="section-eyebrow-light">Ready to Create?</span>
            <h2
              className="font-bold text-white mb-6"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", lineHeight: 1.1 }}
            >
              Your Creative Journey
              <br />
              <em style={{ color: "#e8c4a8", fontStyle: "italic" }}>
                Starts Here
              </em>
            </h2>
            <p
              className="text-lg mb-12 max-w-lg mx-auto"
              style={{
                color: "rgba(255,255,255,0.58)",
                fontFamily: "system-ui, sans-serif",
                lineHeight: 1.75,
              }}
            >
              Schedule a free tour of our studio and discover why hundreds of
              Pacific Northwest artists call Rainier Gardens their creative home.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/tour" className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.25rem" }}>
                Schedule a Tour
              </Link>
              <Link href="/membership" className="btn-ghost-white" style={{ fontSize: "1rem", padding: "1rem 2.25rem" }}>
                Join Now
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
