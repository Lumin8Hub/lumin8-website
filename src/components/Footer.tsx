import { Link } from "react-router-dom";
import lumin8Logo from "@/assets/lumin8-logo.png";

const columns = [
  {
    heading: "Services",
    links: [
      { label: "Websites & Digital Platforms", href: "/services/websites" },
      { label: "Performance Marketing", href: "/services/performance-marketing" },
      { label: "Branding & Creative Content", href: "/services/branding-content" },
      { label: "AI, Automation & Custom Apps", href: "/services/ai-automation" },
      { label: "Fractional CMO & Strategy", href: "/services/fractional-cmo" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Work", href: "/work" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "About", href: "/about" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Franchise Marketing",
    links: [{ label: "Scale your network →", href: "/franchise" }],
  },
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/company/lumin8-digital-agency" },
  { label: "Instagram", href: "https://instagram.com/lumin8.agency" },
  { label: "Facebook", href: "https://facebook.com/lumin8digitalagency" },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-foreground/[0.06] py-16 px-6">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Logo + tagline */}
        <div className="md:col-span-1">
          <Link to="/">
            <img src={lumin8Logo} alt="LUMIN8" className="h-10 w-auto" />
          </Link>
          <p className="text-lumin8-gray-400 text-sm mt-3 font-serif italic">
            There's light at the end of the funnel.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <h4 className="font-mono text-xs uppercase tracking-[0.1em] text-lumin8-gray-400 mb-4">
              {col.heading}
            </h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-foreground/70 text-sm hover:-translate-y-px transition-transform duration-200 inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Connect */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.1em] text-lumin8-gray-400 mb-4">Connect</h4>
          <ul className="space-y-2 mb-4">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 text-sm hover:-translate-y-px transition-transform duration-200 inline-block"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:hello@lumin8.agency"
            className="text-foreground/70 text-sm hover:-translate-y-px transition-transform duration-200 inline-block"
          >
            hello@lumin8.agency
          </a>
        </div>
      </div>

      {/* Legal row */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-foreground/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-lumin8-gray-400 flex flex-wrap items-center gap-x-2 gap-y-1 justify-center">
          <span>© 2026 Lumin8</span>
          <span aria-hidden="true">·</span>
          <Link to="/terms" className="hover:text-foreground/80 transition-colors">
            Terms &amp; Conditions
          </Link>
          <span aria-hidden="true">·</span>
          <Link to="/privacy" className="hover:text-foreground/80 transition-colors">
            Privacy Policy
          </Link>
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-lumin8-green animate-pulse" />
          <span className="font-mono text-xs text-lumin8-gray-400">All systems operational</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
