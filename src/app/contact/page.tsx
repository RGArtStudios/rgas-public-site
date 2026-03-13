import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rainier Gardens Art Studio — questions, class inquiries, and general contact.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="section-title">Get in Touch</h1>
          <p className="section-subtitle">
            Questions about classes, membership, or anything else? We&rsquo;d love to
            hear from you.
          </p>
        </div>

        {/* Contact info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: "📍", label: "Location", value: "3200 Rainier Ave S\nSeattle, WA 98144" },
            { icon: "📞", label: "Phone", value: "(206) 555-0192" },
            { icon: "📧", label: "Email", value: "hello@rainiergardens.art" },
          ].map((item) => (
            <div
              key={item.label}
              className="card p-4 text-center"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                {item.label}
              </div>
              <div className="text-sm whitespace-pre-line">{item.value}</div>
            </div>
          ))}
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
