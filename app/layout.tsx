import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Hilina Specialty Dental Clinic | Expert Dental Care in Addis Ababa",
  description:
    "Dr. Hilina Specialty Dental Clinic offers professional, gentle, and high-quality dental care in Addis Ababa. Trusted by patients for comfort and expertise.",
  keywords: [
    "Dentist Addis Ababa",
    "Dental clinic Ethiopia",
    "Pain-free dental treatment",
    "Dental care Bole Addis",
    "Dr. Hilina dental clinic",
    "Teeth cleaning Addis Ababa",
    "Root canal Ethiopia",
    "Cosmetic dentistry Addis Ababa",
  ].join(", "),
  openGraph: {
    title: "Dr. Hilina Specialty Dental Clinic",
    description:
      "Professional, gentle, and high-quality dental care in Addis Ababa. ⭐ 4.9 rating.",
    type: "website",
    locale: "en_ET",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
