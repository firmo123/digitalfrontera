import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy", label: "Privacy Policy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="font-heading text-3xl md:text-4xl text-foreground"
            >
              Digital Frontera
            </Link>
            <p className="text-muted text-sm mt-6 leading-[1.7] max-w-xs">
              From Teesside. Working with businesses across the UK.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <span className="text-muted text-[10px] tracking-[0.2em] uppercase block mb-6">
              Navigation
            </span>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted hover:text-foreground transition-colors text-sm link-underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3">
            <span className="text-muted text-[10px] tracking-[0.2em] uppercase block mb-6">
              Get in touch
            </span>
            <a
              href="mailto:info@digitalfrontera.com"
              className="text-accent hover:text-foreground transition-colors text-sm link-underline block mb-6"
            >
              info@digitalfrontera.com
            </a>
            <span className="text-muted text-[10px] tracking-[0.2em] uppercase block mb-3">
              Location
            </span>
            <p className="text-muted text-sm leading-[1.7]">
              Teesside
              <br />
              North East England
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8">
          <p className="text-muted/50 text-xs">
            &copy; {new Date().getFullYear()} Digital Frontera. All rights
            reserved.
          </p>
        </div>
      </div>

      {/* Giant wordmark */}
      <div
        className="px-6 md:px-10 translate-y-[25%] select-none"
        aria-hidden="true"
      >
        <p className="font-heading text-[14vw] leading-[1] tracking-[-0.03em] text-foreground/[0.06] whitespace-nowrap text-center">
          Digital Frontera
        </p>
      </div>
    </footer>
  );
}
