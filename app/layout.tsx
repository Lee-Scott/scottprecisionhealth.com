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

export const metadata: Metadata = {
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
  ],
  openGraph: {
    title: "Scott Precision Health — Precision Medicine San Diego",
    description:
      "Precision medicine for high-performance life. Evidence-based naturopathic care.",
    type: "website",
    locale: "en_US",
    siteName: "Scott Precision Health",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
