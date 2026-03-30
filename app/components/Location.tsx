export default function Location() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 rounded-full" style={{ background: "#c9a96e" }} />
            <span
              className="text-sm font-semibold tracking-wider uppercase"
              style={{ color: "#c9a96e" }}
            >
              Find Us
            </span>
            <div className="w-8 h-0.5 rounded-full" style={{ background: "#c9a96e" }} />
          </div>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#26414c" }}
          >
            Location & Contact
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Visit us at our modern clinic in the heart of Bole, Addis Ababa.
            We are easily accessible and ready to welcome you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            {/* Address card */}
            <div
              className="rounded-2xl p-6 flex gap-4 items-start"
              style={{ background: "#f8fafc", border: "1px solid rgba(38,65,76,0.08)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: "rgba(38,65,76,0.1)" }}
              >
                📍
              </div>
              <div>
                <h4 className="font-semibold mb-1" style={{ color: "#26414c" }}>
                  Our Address
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  KT Building, 3rd Floor<br />
                  Bole Atlas Road, Cape Verde St<br />
                  Addis Ababa, Ethiopia
                </p>
                <a
                  href="https://maps.google.com/?q=Bole+Atlas+Addis+Ababa+Ethiopia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-sm font-medium transition-colors hover:opacity-70"
                  style={{ color: "#26414c" }}
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Phone card */}
            <div
              className="rounded-2xl p-6 flex gap-4 items-start"
              style={{ background: "#f8fafc", border: "1px solid rgba(38,65,76,0.08)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: "rgba(38,65,76,0.1)" }}
              >
                📞
              </div>
              <div>
                <h4 className="font-semibold mb-1" style={{ color: "#26414c" }}>
                  Phone
                </h4>
                <a
                  href="tel:0910151739"
                  className="text-gray-600 text-sm hover:opacity-70 transition-opacity"
                >
                  091 015 1739
                </a>
                <div className="mt-3">
                  <a
                    href="tel:0910151739"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-md animate-pulse-ring"
                    style={{ background: "#26414c" }}
                  >
                    <span>📞</span>
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div
              className="rounded-2xl p-6 flex gap-4 items-start"
              style={{ background: "#f8fafc", border: "1px solid rgba(38,65,76,0.08)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: "rgba(38,65,76,0.1)" }}
              >
                🕒
              </div>
              <div>
                <h4 className="font-semibold mb-1" style={{ color: "#26414c" }}>
                  Working Hours
                </h4>
                <div className="flex items-center gap-2 text-sm">
                  <span
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium text-white"
                    style={{ background: "#22c55e" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    Open Now
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-1">Closes at 6:30 PM</p>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div
            className="rounded-3xl overflow-hidden shadow-lg"
            style={{ border: "1px solid rgba(38,65,76,0.1)", minHeight: "350px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.7939!3d9.0054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMTkuNCJOIDM4wrA0Nyc0MS44IkU!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Hilina Specialty Dental Clinic Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
