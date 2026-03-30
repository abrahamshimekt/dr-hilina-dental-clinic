"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(38,65,76,0.1)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md"
              style={{ background: "#26414c" }}
            >
              🦷
            </div>
            <div>
              <div
                className="font-bold text-sm leading-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: scrolled ? "#26414c" : "#ffffff",
                }}
              >
                Dr. Hilina
              </div>
              <div
                className="text-xs leading-tight"
                style={{ color: scrolled ? "#64748b" : "rgba(255,255,255,0.8)" }}
              >
                Specialty Dental Clinic
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
                style={{ color: scrolled ? "#26414c" : "#ffffff" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#booking"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105 shadow-md"
            style={{ background: "#26414c" }}
          >
            Book Appointment
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div
              className="w-5 flex flex-col gap-1"
              style={{ color: scrolled ? "#26414c" : "#ffffff" }}
            >
              <span
                className="block h-0.5 w-5 transition-all duration-200"
                style={{
                  background: scrolled ? "#26414c" : "#ffffff",
                  transform: menuOpen ? "rotate(45deg) translateY(6px)" : "",
                }}
              />
              <span
                className="block h-0.5 w-5 transition-all duration-200"
                style={{
                  background: scrolled ? "#26414c" : "#ffffff",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block h-0.5 w-5 transition-all duration-200"
                style={{
                  background: scrolled ? "#26414c" : "#ffffff",
                  transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "",
                }}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{ maxHeight: menuOpen ? "400px" : "0px" }}
        >
          <div
            className="py-4 flex flex-col gap-1 border-t"
            style={{ borderColor: "rgba(38,65,76,0.1)" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-sm font-medium transition-colors hover:bg-gray-50"
                style={{ color: "#26414c" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="mt-2 py-3 px-4 rounded-full text-center text-sm font-semibold text-white"
              style={{ background: "#26414c" }}
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
