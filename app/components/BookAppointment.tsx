"use client";
import { useState } from "react";

const services = [
  "General Dentistry",
  "Dental Crowns",
  "Teeth Cleaning",
  "Root Canal Treatment",
  "Cosmetic Dentistry",
  "Tooth Extraction",
  "Other",
];

export default function BookAppointment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none focus:ring-2 bg-white";
  const inputStyle = {
    borderColor: "rgba(38,65,76,0.2)",
    color: "#0f172a",
  };

  return (
    <section
      id="booking"
      className="py-24"
      style={{ background: "#f8fafc" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left info */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 rounded-full" style={{ background: "#c9a96e" }} />
              <span
                className="text-sm font-semibold tracking-wider uppercase"
                style={{ color: "#c9a96e" }}
              >
                Book an Appointment
              </span>
            </div>

            <h2
              className="text-4xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: "#26414c" }}
            >
              Ready to Start Your
              <span className="block" style={{ color: "#c9a96e" }}>
                Dental Journey?
              </span>
            </h2>

            <p className="text-gray-500 leading-relaxed mb-8">
              Schedule your appointment with Dr. Hilina today. We&apos;ll reach out to confirm
              your booking and answer any questions you may have.
            </p>

            {/* Quick contact */}
            <div className="flex flex-col gap-4">
              <div
                className="flex items-center gap-4 p-4 rounded-2xl"
                style={{ background: "white", border: "1px solid rgba(38,65,76,0.08)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: "rgba(38,65,76,0.08)" }}
                >
                  📞
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Prefer to call?</div>
                  <a
                    href="tel:0910151739"
                    className="font-semibold text-sm transition-opacity hover:opacity-70"
                    style={{ color: "#26414c" }}
                  >
                    091 015 1739
                  </a>
                </div>
              </div>

              <div
                className="flex items-center gap-4 p-4 rounded-2xl"
                style={{ background: "white", border: "1px solid rgba(38,65,76,0.08)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: "rgba(38,65,76,0.08)" }}
                >
                  📍
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Visit us at</div>
                  <div className="font-semibold text-sm" style={{ color: "#26414c" }}>
                    KT Building, Bole Atlas, Addis Ababa
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className="rounded-3xl p-8 bg-white shadow-xl"
            style={{ border: "1px solid rgba(38,65,76,0.08)" }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#26414c" }}
                >
                  Appointment Requested!
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Thank you! We&apos;ll contact you at{" "}
                  <strong style={{ color: "#26414c" }}>{form.phone}</strong> to
                  confirm your appointment.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      phone: "",
                      email: "",
                      service: "",
                      date: "",
                      message: "",
                    });
                  }}
                  className="px-6 py-2.5 rounded-full text-white text-sm font-medium transition-all hover:scale-105"
                  style={{ background: "#26414c" }}
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#26414c" }}
                >
                  Book Your Appointment
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-500">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      style={{
                        ...inputStyle,
                        boxShadow: "none",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#26414c";
                        e.target.style.boxShadow = "0 0 0 3px rgba(38,65,76,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(38,65,76,0.2)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-500">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="09X XXX XXXX"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#26414c";
                        e.target.style.boxShadow = "0 0 0 3px rgba(38,65,76,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(38,65,76,0.2)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5 text-gray-500">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#26414c";
                      e.target.style.boxShadow = "0 0 0 3px rgba(38,65,76,0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(38,65,76,0.2)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-500">
                      Service *
                    </label>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className={inputClass}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#26414c";
                        e.target.style.boxShadow = "0 0 0 3px rgba(38,65,76,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(38,65,76,0.2)";
                        e.target.style.boxShadow = "none";
                      }}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-500">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className={inputClass}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#26414c";
                        e.target.style.boxShadow = "0 0 0 3px rgba(38,65,76,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(38,65,76,0.2)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5 text-gray-500">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us about your concern or any additional information..."
                    value={form.message}
                    onChange={handleChange}
                    className={inputClass + " resize-none"}
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#26414c";
                      e.target.style.boxShadow = "0 0 0 3px rgba(38,65,76,0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(38,65,76,0.2)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                  style={{ background: "#26414c" }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending Request...
                    </span>
                  ) : (
                    "Book Appointment"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
