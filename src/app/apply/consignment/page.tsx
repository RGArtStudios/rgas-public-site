import type { Metadata } from "next";
import ConsignmentForm from "./ConsignmentForm";

export const metadata: Metadata = {
  title: "Artist Consignment Application",
  description:
    "Apply to sell your work in the Rainier Gardens Art Studio gallery shop. Open to all Pacific Northwest artists.",
};

export default function ConsignmentPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Info */}
        <div>
          <span
            className="inline-block text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Artist Opportunities
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Consignment
            <br />
            Application
          </h1>
          <p className="text-muted text-lg mb-8 leading-relaxed">
            Our gallery shop features handmade works by local and regional
            artists. We accept ceramics, prints, paintings, textiles, jewelry,
            and mixed media. The shop is open to the public daily and sees
            significant foot traffic from our 500+ member community.
          </p>

          <div className="space-y-5 mb-8">
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
              <div key={item.title} className="flex gap-3">
                <div
                  className="w-1 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
                <div>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="rounded-xl p-5"
            style={{ backgroundColor: "var(--color-surface-alt)" }}
          >
            <p className="text-sm text-muted">
              <strong>Not yet a member?</strong> Consignment is open to all
              Pacific Northwest artists, regardless of membership status. Studio
              and Advanced members receive priority placement.
            </p>
          </div>
        </div>

        {/* Form */}
        <div>
          <ConsignmentForm />
        </div>
      </div>
    </div>
  );
}
