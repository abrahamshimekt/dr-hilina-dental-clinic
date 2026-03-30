"use client";

export default function StickyCallButton() {
  return (
    <a
      href="tel:0910151739"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3.5 rounded-full text-white font-semibold text-sm shadow-2xl transition-all duration-200 hover:scale-110 md:hidden"
      style={{
        background: "linear-gradient(135deg, #26414c 0%, #3a5f6f 100%)",
        boxShadow: "0 8px 30px rgba(38,65,76,0.5)",
      }}
      aria-label="Call Dr. Hilina Dental Clinic"
    >
      <span className="text-base">📞</span>
      Call Now
    </a>
  );
}
