"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/classes", label: "Classes" },
  { href: "/events", label: "Events" },
  { href: "/membership", label: "Membership" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 55);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              backgroundColor: "rgba(250,245,240,0.97)",
              backdropFilter: "blur(14px)",
              borderBottom: "1px solid var(--color-border)",
              boxShadow: "0 1px 24px rgba(0,0,0,0.07)",
            }
          : { backgroundColor: "transparent" }
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative flex items-center flex-shrink-0">
            <Image
              src="/images/logos/logo-black.png"
              alt="Rainier Gardens Art Studio"
              width={148}
              height={42}
              className="h-9 w-auto"
              style={{ opacity: scrolled ? 1 : 0, position: scrolled ? "static" : "absolute", transition: "opacity 0.3s" }}
              priority
            />
            <Image
              src="/images/logos/logo-white.png"
              alt="Rainier Gardens Art Studio"
              width={148}
              height={42}
              className="h-9 w-auto"
              style={{ opacity: scrolled ? 0 : 1, position: scrolled ? "absolute" : "static", transition: "opacity 0.3s" }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide transition-colors duration-200 hover:opacity-100"
                style={{ color: scrolled ? "var(--color-text-muted)" : "rgba(255,255,255,0.82)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/tour"
              className="text-sm font-semibold px-5 py-2.5 rounded-md border-2 transition-all duration-200 hover:opacity-100"
              style={
                scrolled
                  ? { borderColor: "var(--color-accent)", color: "var(--color-accent)", backgroundColor: "transparent" }
                  : { borderColor: "rgba(255,255,255,0.65)", color: "#fff", backgroundColor: "transparent" }
              }
            >
              Schedule Tour
            </Link>
            <Link href="/membership" className="btn-primary text-sm px-5 py-2.5">
              Join Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: scrolled ? "var(--color-text)" : "#fff" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden border-t pb-5"
            style={{ backgroundColor: "rgba(250,245,240,0.98)", borderColor: "var(--color-border)" }}
          >
            <div className="pt-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-3 text-sm font-medium rounded-lg transition-colors hover:text-accent"
                  style={{ color: "var(--color-text)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pt-4 px-3 flex flex-col gap-2.5 border-t mt-3" style={{ borderColor: "var(--color-border)" }}>
              <Link href="/tour" className="btn-outline text-sm" onClick={() => setMenuOpen(false)}>
                Schedule Tour
              </Link>
              <Link href="/membership" className="btn-primary text-sm" onClick={() => setMenuOpen(false)}>
                Join Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
