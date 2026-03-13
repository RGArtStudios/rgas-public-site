"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/classes", label: "Classes" },
  { href: "/events", label: "Events" },
  { href: "/membership", label: "Membership" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-sm border-b"
      style={{
        backgroundColor: "color-mix(in srgb, var(--color-bg) 90%, transparent)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/images/logos/logo-black.png"
              alt="Rainier Gardens Art Studio"
              width={140}
              height={40}
              className="h-9 w-auto block dark:hidden"
              priority
            />
            <Image
              src="/images/logos/logo-white.png"
              alt="Rainier Gardens Art Studio"
              width={140}
              height={40}
              className="h-9 w-auto hidden dark:block"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/tour" className="btn-outline text-sm px-4 py-2">
              Schedule Tour
            </Link>
            <Link href="/membership" className="btn-primary text-sm px-4 py-2">
              Join Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: "var(--color-text-muted)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden border-t py-4 space-y-2"
            style={{ borderColor: "var(--color-border)" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-2 py-2 nav-link text-base"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2 px-2">
              <Link
                href="/tour"
                className="btn-outline text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Schedule Tour
              </Link>
              <Link
                href="/membership"
                className="btn-primary text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Join Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
