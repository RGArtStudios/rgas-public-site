import type { Metadata } from "next";
import TourForm from "./TourForm";

export const metadata: Metadata = {
  title: "Schedule a Tour",
  description:
    "Schedule a free tour of Rainier Gardens Art Studio. See our facilities, meet the instructors, and find your membership.",
};

export default function TourPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Info */}
        <div>
          <span
            className="inline-block text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Free & No Commitment
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Schedule a Studio Tour
          </h1>
          <p className="text-muted text-lg mb-8 leading-relaxed">
            Come see Rainier Gardens in person. Our 45–60 minute tours include a
            walk through all studio spaces, a chance to meet working instructors,
            and an overview of our membership options.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { icon: "🗓️", text: "Tours available Tuesday–Saturday, 10 AM–4 PM" },
              { icon: "⏱️", text: "45–60 minutes" },
              { icon: "💰", text: "Completely free, no commitment required" },
              { icon: "👥", text: "Individual and group tours welcome" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-muted">{item.text}</span>
              </div>
            ))}
          </div>

          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: "var(--color-surface-alt)" }}
          >
            <h3 className="font-bold mb-2">What you&rsquo;ll see</h3>
            <ul className="space-y-2 text-sm text-muted">
              {[
                "Ceramics studio with 12 pottery wheels and kilns",
                "Painting and drawing studios",
                "Printmaking lab",
                "Fiber arts and textile space",
                "Sculpture garden",
                "Gallery and member shop",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span style={{ color: "var(--color-accent)" }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form */}
        <div>
          <TourForm />
        </div>
      </div>
    </div>
  );
}
