import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Rainier Gardens Art Studio — our history, our mission, and the community we've built in the Pacific Northwest.",
};

const team = [
  {
    name: "Elena Vasquez",
    role: "Lead Ceramics Instructor & Resident Artist",
    bio: "Elena has been throwing pots for over 20 years. Her work has been exhibited nationally and is part of several Pacific Northwest museum collections.",
    initials: "EV",
  },
  {
    name: "Renata Nowak",
    role: "Painting Program Director",
    bio: "A graduate of the Rhode Island School of Design, Renata brings rigorous classical training and a warm, encouraging teaching style to all levels.",
    initials: "RN",
  },
  {
    name: "Marcus Chen",
    role: "Sculpture & 3D Instructor",
    bio: "Marcus works primarily in bronze and mixed media. He leads our sculpture garden programming and the advanced metalwork workshop series.",
    initials: "MC",
  },
  {
    name: "Sofia Andrade",
    role: "Printmaking Instructor",
    bio: "Sofia studied at the Tamarind Institute and specializes in lithography and relief printing. She brings an interdisciplinary lens to her teaching.",
    initials: "SA",
  },
  {
    name: "Tanya Okafor",
    role: "Watercolor & Drawing Instructor",
    bio: "An award-winning botanical illustrator, Tanya teaches observation-based drawing and watercolor with a focus on the natural world.",
    initials: "TO",
  },
  {
    name: "Hiroshi Tanaka",
    role: "Illustration & Design Instructor",
    bio: "With a background in graphic design and fine art, Hiroshi bridges the worlds of commercial and studio practice in his popular illustration courses.",
    initials: "HT",
  },
];

const values = [
  {
    title: "Accessibility",
    description:
      "We believe art should be available to everyone. We offer sliding-scale scholarships and reduced-rate memberships for students and seniors.",
  },
  {
    title: "Community",
    description:
      "We're more than a studio — we're a gathering place. Our events, open critiques, and shared studio time foster deep, lasting creative friendships.",
  },
  {
    title: "Craft",
    description:
      "We honor the tradition of making things well. Our instructors are working artists who bring rigor, passion, and decades of experience to every session.",
  },
  {
    title: "Sustainability",
    description:
      "Our studio sources low-impact materials, recycles clay and paper scraps, and maintains a sculpture garden that celebrates the natural world.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: "52vh", backgroundColor: "var(--color-dark)" }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
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
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-36">
          <div className="animate-fade-in-up">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#e8c4a8", fontFamily: "system-ui, sans-serif" }}
            >
              Our Story
            </span>
            <h1
              className="font-bold text-white mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.1 }}
            >
              A Studio Built on
              <br />
              <em style={{ color: "#e8c4a8", fontStyle: "italic" }}>Belonging</em>
            </h1>
            <p
              className="max-w-2xl animate-fade-in-up delay-100"
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.72)",
                fontFamily: "system-ui, sans-serif",
                lineHeight: 1.7,
              }}
            >
              Rainier Gardens Art Studio was founded in 2009 by a collective of
              Seattle-area artists who wanted to create a space where creativity
              could flourish without pretension.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimateOnScroll>
              <span className="section-eyebrow">Our Mission</span>
              <h2 className="section-title">Art for Everyone,<br />At Every Level</h2>
              <p
                className="mb-5 leading-relaxed"
                style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
              >
                We provide professional-grade facilities, expert instruction, and a
                thriving community to support artists at every stage of their
                journey. Whether you&rsquo;re picking up a brush for the first time or
                preparing work for a gallery show, Rainier Gardens is your home studio.
              </p>
              <p
                className="mb-10 leading-relaxed"
                style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
              >
                Today we serve over 500 members across 8 disciplines, host 40+
                classes per month, and maintain a rotating gallery that showcases
                local and regional artists. Our 12,000 sq ft facility sits in the
                Rainier Valley neighborhood, surrounded by community gardens that
                inspire the work made inside.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2009", label: "Founded" },
                  { value: "12,000 sq ft", label: "Studio Space" },
                  { value: "500+", label: "Members" },
                  { value: "8", label: "Disciplines" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl p-5 text-center"
                    style={{ backgroundColor: "var(--color-surface-alt)" }}
                  >
                    <div
                      className="text-2xl font-bold"
                      style={{
                        color: "var(--color-accent)",
                        fontFamily: "var(--font-playfair, Georgia, serif)",
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      className="text-xs uppercase tracking-wider mt-1"
                      style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <span className="section-eyebrow">Our Values</span>
              <h2 className="section-title">What We Stand For</h2>
              <div className="space-y-4">
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="card p-6 flex gap-4"
                  >
                    <div
                      className="w-1 rounded-full flex-shrink-0 self-stretch"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                    <div>
                      <h3
                        className="font-bold mb-1.5"
                        style={{ color: "var(--color-accent)", fontFamily: "var(--font-playfair, Georgia, serif)" }}
                      >
                        {v.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
                      >
                        {v.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--color-dark)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-eyebrow-light">The People</span>
            <h2 className="section-title-light">Our Instructors</h2>
            <p
              className="text-base max-w-xl mx-auto"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "system-ui, sans-serif", lineHeight: 1.75 }}
            >
              Every instructor at Rainier Gardens is a working artist with a
              genuine commitment to teaching.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <AnimateOnScroll key={member.name} delay={(i % 3) * 100}>
                <div className="card-dark p-6 flex gap-4 rounded-2xl h-full">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 text-sm"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h3
                      className="font-bold text-white text-sm mb-0.5"
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-xs mb-3"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {member.role}
                    </p>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.55)", fontFamily: "system-ui, sans-serif" }}
                    >
                      {member.bio}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Facilities ── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--color-surface-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-eyebrow">The Space</span>
            <h2 className="section-title">Our Facilities</h2>
            <p className="section-subtitle">
              Professional-grade equipment in a beautiful, light-filled 12,000 sq ft space.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🏺", name: "Ceramics Studio", desc: "12 pottery wheels, 3 slab rollers, 4 electric kilns" },
              { icon: "🎨", name: "Painting Studios", desc: "Natural north light, easels, drying racks, and a model platform" },
              { icon: "🖨️", name: "Printmaking Lab", desc: "Etching press, litho stone, screen printing, and a relief station" },
              { icon: "✂️", name: "Fiber Arts", desc: "Floor looms, spinning wheels, a dye kitchen, and embroidery frames" },
              { icon: "🪨", name: "Sculpture Studio", desc: "Welding equipment, stone carving tools, mold-making supplies" },
              { icon: "🌿", name: "Sculpture Garden", desc: "A half-acre outdoor space for large-scale work and inspiration" },
              { icon: "🖼️", name: "Gallery", desc: "Professional lighting, hanging system, and monthly rotating shows" },
              { icon: "📚", name: "Library & Lounge", desc: "Art books, reference materials, and comfortable gathering space" },
            ].map((f, i) => (
              <AnimateOnScroll key={f.name} delay={(i % 4) * 80}>
                <div className="card p-6 text-center h-full flex flex-col items-center">
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h4 className="font-bold text-sm mb-2">{f.name}</h4>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
                  >
                    {f.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24 md:py-32 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-dark)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(176,112,80,0.16) 0%, transparent 65%)",
          }}
        />
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <AnimateOnScroll>
            <span className="section-eyebrow-light">Visit Us</span>
            <h2
              className="font-bold text-white mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
            >
              Come See It for Yourself
            </h2>
            <p
              className="text-base mb-10"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "system-ui, sans-serif", lineHeight: 1.75 }}
            >
              Schedule a free studio tour and meet the community.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/tour" className="btn-primary">Schedule a Tour</Link>
              <Link href="/contact" className="btn-ghost-white">Get in Touch</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
