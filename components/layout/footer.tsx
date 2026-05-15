import Link from "next/link";
import { Mail, MapPin, Activity } from "lucide-react";

const BOOKING_URL =
  "https://my.practicebetter.io/#/69ee51c3126eb6f1fbb39b21/bookings?r=69fd1d6b6134cb51ba771a5e";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Activity className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-foreground">
                Scott<span className="text-primary">Precision</span>Health
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Precision medicine for high-performance life. Evidence-based
              naturopathic care rooted in advanced diagnostics and data-driven
              treatment plans.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>San Diego, California</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/shot-studio"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Shot Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/services/scott-precision-health-at-remedy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Scott Precision Health at Remedy
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Network */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Our Network
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://yourslongevitylab.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Yours Longevity Lab
                </a>
              </li>
              <li>
                <a
                  href="https://jordanscottnd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Dr. Jordan Scott ND
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Scott Precision Health. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@scottprecisionhealth.com"
              className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              <Mail className="h-3 w-3" />
              hello@scottprecisionhealth.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
