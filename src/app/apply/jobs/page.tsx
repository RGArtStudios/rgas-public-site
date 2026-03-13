import type { Metadata } from "next";
import JobsForm from "./JobsForm";

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Info */}
        <div>
          <span
            className="inline-block text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Join Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Work With Us
          </h1>
          <p className="text-muted text-lg mb-8 leading-relaxed">
            We&rsquo;re looking for passionate, community-minded artists and arts
            professionals to join the Rainier Gardens team. We offer competitive
            pay, free membership, and a genuinely wonderful place to work.
          </p>

          {/* Perks */}
          <div className="mb-8">
            <h3 className="font-bold mb-4">Why Work at Rainier Gardens?</h3>
            <ul className="space-y-2 text-sm text-muted">
              {[
                "Free Studio membership for all staff",
                "Flexible scheduling (most roles part-time)",
                "Surrounded by working artists and makers",
                "Employee discount on all classes",
                "Paid professional development opportunities",
                "A genuinely supportive, creative team",
              ].map((perk) => (
                <li key={perk} className="flex items-center gap-2">
                  <span style={{ color: "var(--color-accent)" }}>✓</span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          {/* Current openings */}
          <div>
            <h3 className="font-bold mb-4">Current Openings</h3>
            <div className="space-y-3">
              {openings.map((job) => (
                <div key={job.title} className="card p-4">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="font-semibold text-sm">{job.title}</h4>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full ml-2 flex-shrink-0"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--color-accent) 12%, transparent)",
                        color: "var(--color-accent)",
                      }}
                    >
                      {job.type}
                    </span>
                  </div>
                  <p className="text-xs text-muted">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted mt-6">
            Don&rsquo;t see a role that fits? We accept general interest applications
            and keep them on file for future openings.
          </p>
        </div>

        {/* Form */}
        <div>
          <JobsForm openings={openings.map((j) => j.title)} />
        </div>
      </div>
    </div>
  );
}
