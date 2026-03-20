import type { Metadata } from "next";
import JobsForm from "./JobsForm";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Work With Us",
  description:
    "Join the team at Rainier Gardens Art Studio — instructor, studio assistant, gallery staff, and administrative roles.",
};

const openings = [
  {
    title: "Ceramics Instructor",
    type: "Part-time",
    description:
      "Lead wheel-throwing and hand-building classes for all levels. Minimum 3 years of teaching experience required.",
  },
  {
    title: "Studio Assistant",
    type: "Part-time",
    description:
      "Support daily studio operations: clay prep, kiln loading, materials management, and member orientation.",
  },
  {
    title: "Gallery & Shop Associate",
    type: "Part-time",
    description:
      "Assist with gallery installations, member consignment, and retail sales in our artist shop.",
  },
  {
    title: "Events Coordinator",
    type: "Full-time",
    description:
      "Plan and execute exhibitions, workshops, and community events. Strong project management skills required.",
  },
];

export default function JobsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: "40vh", backgroundColor: "var(--color-dark)" }}
      >
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
              Join Our Team
            </span>
            <h1
              className="font-bold text-white"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", lineHeight: 1.1 }}
            >
              Work With Us
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
              <span className="section-eyebrow">Why Rainier Gardens</span>
              <h2 className="section-title">A Wonderful<br />Place to Work</h2>
              <p
                className="text-lg mb-8 leading-relaxed"
                style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
              >
                We&rsquo;re looking for passionate, community-minded artists and arts
                professionals to join the Rainier Gardens team. We offer competitive
                pay, free membership, and a genuinely wonderful place to work.
              </p>

              {/* Perks */}
              <div
                className="rounded-2xl p-7 mb-10"
                style={{ backgroundColor: "var(--color-surface-alt)" }}
              >
                <h3
                  className="font-bold mb-5"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  Why Work at Rainier Gardens?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Free Studio membership for all staff",
                    "Flexible scheduling (most roles part-time)",
                    "Surrounded by working artists and makers",
                    "Employee discount on all classes",
                    "Paid professional development opportunities",
                    "A genuinely supportive, creative team",
                  ].map((perk) => (
                    <li
                      key={perk}
                      className="flex items-center gap-3 text-sm"
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
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Current openings */}
              <div>
                <h3
                  className="font-bold mb-5"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  Current Openings
                </h3>
                <div className="space-y-3">
                  {openings.map((job) => (
                    <div key={job.title} className="card p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-sm">{job.title}</h4>
                        <span
                          className="text-xs px-2.5 py-0.5 rounded-full ml-3 flex-shrink-0 font-medium"
                          style={{
                            backgroundColor: "color-mix(in srgb, var(--color-accent) 12%, transparent)",
                            color: "var(--color-accent)",
                            fontFamily: "system-ui, sans-serif",
                          }}
                        >
                          {job.type}
                        </span>
                      </div>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
                      >
                        {job.description}
                      </p>
                    </div>
                  ))}
                </div>
                <p
                  className="text-sm mt-5"
                  style={{ color: "var(--color-text-muted)", fontFamily: "system-ui, sans-serif" }}
                >
                  Don&rsquo;t see a role that fits? We accept general interest
                  applications and keep them on file for future openings.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Form */}
            <AnimateOnScroll delay={150}>
              <JobsForm openings={openings.map((j) => j.title)} />
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
