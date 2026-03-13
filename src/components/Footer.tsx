import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Studio: [
    { href: "/about", label: "About Us" },
    { href: "/classes", label: "Classes" },
    { href: "/events", label: "Events" },
    { href: "/membership", label: "Membership" },
  ],
  "Get Involved": [
    { href: "/tour", label: "Schedule a Tour" },
    { href: "/apply/consignment", label: "Artist Consignment" },
    { href: "/apply/jobs", label: "Work With Us" },
    { href: "/contact", label: "Contact Us" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t mt-20"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logos/logo-black.png"
                alt="Rainier Gardens Art Studio"
                width={160}
                height={46}
                className="h-10 w-auto block dark:hidden"
              />
              <Image
                src="/images/logos/logo-white.png"
                alt="Rainier Gardens Art Studio"
                width={160}
                height={46}
                className="h-10 w-auto hidden dark:block"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-4 max-w-xs text-muted">
              A creative sanctuary in the Pacific Northwest where artists of all
              levels find community, instruction, and inspiration.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors hover:border-terracotta-500"
                style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors hover:border-terracotta-500"
                style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="font-semibold text-sm uppercase tracking-wider mb-4"
                style={{ color: "var(--color-text)" }}
              >
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="nav-link text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "var(--color-border)" }}
        >
          <p className="text-xs text-muted">
            &copy; {year} Rainier Gardens Art Studio. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="text-xs nav-link">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-xs nav-link">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
