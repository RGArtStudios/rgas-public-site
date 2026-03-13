import type { Metadata } from "next";
import Link from "next/link";

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
      {/* Hero */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-surface-alt)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span
              className="inline-block text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              Our Story
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              A Studio Built on
              <br />
              <span style={{ color: "var(--color-accent)" }}>Belonging</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              Rainier Gardens Art Studio was founded in 2009 by a collective of
              Seattle-area artists who wanted to create a space where creativity
              could flourish without pretension — a place where beginners were as
              welcome as professionals, and the joy of making was always the
              point.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-muted mb-4 leading-relaxed">
              We provide professional-grade facilities, expert instruction, and a
              thriving community to support artists at every stage of their
              journey. Whether you&rsquo;re picking up a brush for the first time or
              preparing work for a gallery show, Rainier Gardens is your home
              studio.
            </p>
            <p className="text-muted mb-8 leading-relaxed">
              Today we serve over 500 members across 8 disciplines, host 40+
              classes per month, and maintain a rotating gallery that showcases
              local and regional artists. Our 12,000 sq ft facility sits in the
              Rainier Valley neighborhood, surrounded by community gardens that
              inspire the work made inside.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2009", label: "Founded" },
                { value: "12,000", label: "Square Feet" },
                { value: "500+", label: "Members" },
                { value: "8", label: "Disciplines" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl p-4 text-center"
                  style={{ backgroundColor: "var(--color-surface-alt)" }}
                >
                  <div
                    className="text-2xl font-bold"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs text-muted mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            {values.map((v) => (
              <div key={v.title} className="card p-5">
                <h3
                  className="font-bold mb-1.5"
                  style={{ color: "var(--color-accent)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-surface-alt)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Instructors</h2>
            <p className="section-subtitle">
              Every instructor at Rainier Gardens is a working artist with a
              genuine commitment to teaching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="card p-6 flex gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-bold text-sm">{member.name}</h3>
                  <p
                    className="text-xs mb-2"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {member.role}
                  </p>
                  <p className="text-xs text-muted leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Facilities</h2>
          <p className="section-subtitle">
            Professional-grade equipment in a beautiful, light-filled space.
          </p>
        </div>
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
          ].map((f) => (
            <div
              key={f.name}
              className="card p-5 text-center"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h4 className="font-bold text-sm mb-1">{f.name}</h4>
              <p className="text-xs text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-center"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3">
            Come See It for Yourself
          </h2>
          <p className="text-muted mb-6">
            Schedule a free studio tour and meet the community.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/tour" className="btn-primary">Schedule a Tour</Link>
            <Link href="/contact" className="btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
