const footerLinks = {
  Services: [
    "General Dentistry",
    "Dental Crowns",
    "Teeth Cleaning",
    "Root Canal Treatment",
    "Cosmetic Dentistry",
    "Tooth Extraction",
  ],
  "Quick Links": [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
    { label: "Book Appointment", href: "#booking" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: "linear-gradient(135deg, #1a2e36 0%, #26414c 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg shadow-md"
                style={{ background: "rgba(201,169,110,0.3)" }}
              >
                🦷
              </div>
              <div>
                <div
                  className="font-bold text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Dr. Hilina
                </div>
                <div className="text-xs text-white/60">Specialty Dental Clinic</div>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs mb-6">
              Providing exceptional, gentle, and pain-free dental care in Addis Ababa.
              Your smile is our mission.
            </p>
            {/* Rating */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <span className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>
              <span className="text-white/70 text-sm">4.9 · 62 Reviews</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.Services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/55 text-sm hover:text-white transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links + contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Quick Links</h4>
            <ul className="flex flex-col gap-2.5 mb-6">
              {footerLinks["Quick Links"].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/55 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-white mb-3 text-sm">Contact</h4>
            <div className="flex flex-col gap-2">
              <a
                href="tel:0910151739"
                className="text-white/55 text-sm hover:text-white transition-colors flex items-center gap-2"
              >
                <span>📞</span> 091 015 1739
              </a>
              <div className="text-white/55 text-sm flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>KT Building, Bole Atlas,<br />Addis Ababa</span>
              </div>
              <div className="text-white/55 text-sm flex items-center gap-2">
                <span>🕒</span> Closes 6:30 PM
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Dr. Hilina Specialty Dental Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-xs">Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
