import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rainier Gardens Art Studio — Creative Community in the Pacific Northwest",
  description:
    "Find your artistic voice at Rainier Gardens Art Studio. Classes, memberships, events, and a welcoming creative community.",
};

const featuredClasses = [
  {
    title: "Wheel Throwing Fundamentals",
    category: "Ceramics",
    schedule: "Tuesdays & Thursdays, 6–9 PM",
    level: "Beginner",
    spots: 4,
    description:
      "Learn to center clay, open, and pull walls on the potter's wheel. All materials included.",
  },
  {
    title: "Oil Painting Studio",
    category: "Painting",
    schedule: "Saturdays, 10 AM–1 PM",
    level: "All Levels",
    spots: 2,
    description:
      "Explore color mixing, composition, and classical oil painting techniques in an open studio format.",
  },
  {
    title: "Botanical Illustration",
    category: "Drawing",
    schedule: "Wednesdays, 5–8 PM",
    level: "Intermediate",
    spots: 6,
    description:
      "Render plants and flowers with scientific precision and artistic beauty using pen, ink, and watercolor.",
  },
];

const testimonials = [
  {
    quote:
      "Rainier Gardens completely changed how I see creativity. I've made lifelong friends and discovered a passion I never knew I had.",
    name: "Mara T.",
    role: "Studio Member, 3 years",
  },
  {
    quote:
      "The instructors are world-class and the space is absolutely gorgeous. It's my favorite place in Seattle.",
    name: "Daniel K.",
    role: "Community Member",
  },
  {
    quote:
      "I took one ceramics class and now I'm obsessed. The studio has everything you need, and the community is so welcoming.",
    name: "Priya S.",
    role: "Advanced Member, 1 year",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--color-surface-alt)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, var(--color-accent) 0%, transparent 60%), radial-gradient(circle at 80% 20%, var(--color-accent) 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <span
              className="inline-block text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              Pacific Northwest Art Community
            </span>
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              style={{ color: "var(--color-text)" }}
            >
              Where Art Finds
              <br />
              <span style={{ color: "var(--color-accent)" }}>Community</span>
            </h1>
            <p
              className="text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl"
              style={{ color: "var(--color-text-muted)" }}
            >
              Rainier Gardens Art Studio is a creative sanctuary offering
              world-class instruction, open studio time, and a welcoming
              community for artists at every level.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/classes" className="btn-primary text-base px-8 py-4">
                Explore Classes
              </Link>
              <Link href="/tour" className="btn-outline text-base px-8 py-4">
                Schedule a Tour
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full opacity-5"
          style={{
            backgroundColor: "var(--color-accent)",
            transform: "translate(30%, 30%)",
          }}
        />
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: "var(--color-accent)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            {[
              { value: "40+", label: "Classes Per Month" },
              { value: "500+", label: "Active Members" },
              { value: "12", label: "Resident Artists" },
              { value: "8", label: "Studio Disciplines" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Classes */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Classes</h2>
          <p className="section-subtitle">
            From ceramics to illustration, find your medium and master it with
            expert guidance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredClasses.map((cls) => (
            <div key={cls.title} className="card p-6 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <span
                  className="text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--color-accent) 15%, transparent)",
                    color: "var(--color-accent)",
                  }}
                >
                  {cls.category}
                </span>
                <span
                  className="text-xs px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: "var(--color-surface-alt)",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {cls.level}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">{cls.title}</h3>
              <p className="text-sm text-muted mb-4 flex-1">{cls.description}</p>
              <div
                className="text-xs text-muted mb-4 pb-4 border-b"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div>{cls.schedule}</div>
                <div
                  className="mt-1 font-medium"
                  style={{ color: cls.spots <= 3 ? "#c05040" : "var(--color-text-muted)" }}
                >
                  {cls.spots} spots remaining
                </div>
              </div>
              <Link href="/classes" className="btn-outline text-sm py-2">
                View Details
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/classes" className="btn-primary">
            View All Classes
          </Link>
        </div>
      </section>

      {/* About the Studio */}
      <section className="py-20" style={{ backgroundColor: "var(--color-surface-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span
                className="inline-block text-sm font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--color-accent)" }}
              >
                About the Studio
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Art Is for Everyone
              </h2>
              <p className="text-muted mb-6 text-lg leading-relaxed">
                Founded with the belief that creative expression is a fundamental
                human need, Rainier Gardens Art Studio provides a space where
                beginners and professionals alike can pursue their craft with
                intention and joy.
              </p>
              <p className="text-muted mb-8 leading-relaxed">
                Our 12,000 sq ft facility houses professional-grade ceramic
                studios, light-filled painting rooms, printmaking presses, a
                sculpture garden, and a curated gallery featuring local artists.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-primary">
                  Our Story
                </Link>
                <Link href="/membership" className="btn-outline">
                  Membership Options
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: "🏺",
                  title: "Professional Equipment",
                  desc: "Kiln rooms, pottery wheels, painting stations, and more",
                },
                {
                  icon: "🎨",
                  title: "Expert Instructors",
                  desc: "Working artists and educators with decades of experience",
                },
                {
                  icon: "🌿",
                  title: "Sculpture Garden",
                  desc: "An outdoor creative space open to all members",
                },
                {
                  icon: "🖼️",
                  title: "Gallery Shop",
                  desc: "Member-made works available for purchase year-round",
                },
              ].map((feature) => (
                <div key={feature.title} className="card p-5">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h4 className="font-bold mb-1 text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">What Members Say</h2>
          <p className="section-subtitle">
            Thousands of artists have found their community here.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card p-6">
              <div className="text-3xl mb-4" style={{ color: "var(--color-accent)" }}>
                &ldquo;
              </div>
              <blockquote className="text-muted leading-relaxed mb-6 text-sm">
                {t.quote}
              </blockquote>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Creating?
          </h2>
          <p className="text-muted text-lg mb-8">
            Schedule a free tour of our studio and see if Rainier Gardens is the
            right fit for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/tour" className="btn-primary text-base px-8 py-4">
              Schedule a Free Tour
            </Link>
            <Link href="/membership" className="btn-outline text-base px-8 py-4">
              View Memberships
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
