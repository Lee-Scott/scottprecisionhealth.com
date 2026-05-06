import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const baseUrl = "https://scottprecisionhealth.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Scott Precision Health — Precision Medicine San Diego",
    template: "%s | Scott Precision Health",
  },
  description:
    "Precision medicine for high-performance life. Evidence-based naturopathic care from Dr. Jordan Scott ND in San Diego, CA. HRT, peptide therapy, functional medicine, and advanced lab testing.",
  keywords: [
    "San Diego naturopathic doctor",
    "HRT San Diego",
    "functional medicine",
    "peptide therapy",
    "precision health",
    "longevity medicine",
    "Dr. Jordan Scott ND",
    "hormone replacement therapy San Diego",
    "naturopath San Diego",
    "precision medicine San Diego",
  ],
  openGraph: {
    title: "Scott Precision Health — Precision Medicine San Diego",
    description:
      "Precision medicine for high-performance life. Evidence-based naturopathic care from Dr. Jordan Scott ND in San Diego, CA.",
    type: "website",
    locale: "en_US",
    siteName: "Scott Precision Health",
    url: baseUrl,
    images: [
      {
        url: `${baseUrl}/images/LogoScottPercistion.png`,
        width: 1200,
        height: 630,
        alt: "Scott Precision Health — Precision Medicine San Diego",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scott Precision Health — Precision Medicine San Diego",
    description:
      "Precision medicine for high-performance life. Evidence-based naturopathic care from Dr. Jordan Scott ND in San Diego, CA.",
    images: [`${baseUrl}/images/LogoScottPercistion.png`],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Scott Precision Health",
              description:
                "Precision medicine for high-performance life. Evidence-based naturopathic care.",
              url: baseUrl,
              telephone: "",
              email: "hello@scottprecisionhealth.com",
              areaServed: "San Diego, CA",
              founder: [
                {
                  "@type": "Person",
                  name: "Dr. Jordan Scott, ND",
                  jobTitle: "Naturopathic Doctor",
                },
                {
                  "@type": "Person",
                  name: "Lee Scott",
                  jobTitle: "Software Engineer & Wellness Enthusiast",
                },
              ],
              medicalSpecialty: [
                "Naturopathic Medicine",
                "Hormone Replacement Therapy",
                "Functional Medicine",
                "Peptide Therapy",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Diego",
                addressRegion: "CA",
                addressCountry: "US",
              },
              sameAs: [
                "https://jordanscottnd.com",
                "https://yourslongevitylab.com",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
