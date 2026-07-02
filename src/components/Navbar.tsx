import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import lumin8Logo from "@/assets/lumin8-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const servicesLinks = [
  { label: "Websites & Digital Platforms", href: "/services/websites" },
  { label: "Performance Marketing", href: "/services/performance-marketing" },
  { label: "Branding & Creative Content", href: "/services/branding-content" },
  { label: "AI, Automation & Custom Apps", href: "/services/ai-automation" },
  { label: "Fractional CMO & Strategy", href: "/services/fractional-cmo" },
];

const workLinks = [
  { label: "Sportball", href: "/work/sportball" },
  { label: "Earth Song Festival", href: "/work/earth-song" },
  { label: "Jillian Rodak", href: "/work/jillian-rodak" },
  { label: "Unapologetically Jewish", href: "/work/unapologetically-jewish" },
  { label: "Yogen Früz", href: "/work/yogen-fruz" },
];

const simpleLinks = [
  { label: "Franchise Marketing", href: "/franchise" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

const triggerClass =
  "bg-transparent px-0 py-0 h-auto text-sm font-body text-foreground/80 hover:bg-transparent hover:text-foreground focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent";

const dropdownLinkClass =
  "block px-4 py-2.5 text-sm text-foreground/80 rounded-lg hover:bg-white/5 hover:text-foreground transition-colors";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl rounded-full px-6 py-3 flex items-center justify-between gap-4 transition-all duration-300 ${
        scrolled ? "border border-foreground/[0.06]" : "bg-transparent"
      }`}
      style={{
        backdropFilter: scrolled ? "blur(12px)" : "none",
        background: scrolled ? "rgba(13, 17, 23, 0.8)" : "transparent",
      }}
    >
      <Link to="/" aria-label="Lumin8 home">
        <img src={lumin8Logo} alt="LUMIN8" className="h-7 w-auto shrink-0" />
      </Link>

      {/* Desktop nav */}
      <NavigationMenu className="hidden lg:flex" delayDuration={100}>
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/"
                className="text-sm font-body text-foreground/80 hover:text-foreground transition-colors"
              >
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className={triggerClass}>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-72 p-2 bg-popover">
                <Link
                  to="/services"
                  className="block px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-primary mb-1"
                >
                  All Services →
                </Link>
                {servicesLinks.map((l) => (
                  <Link key={l.href} to={l.href} className={dropdownLinkClass}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/franchise"
                className="text-sm font-body text-foreground/80 hover:text-foreground transition-colors"
              >
                Franchise Marketing
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className={triggerClass}>Work</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-64 p-2 bg-popover">
                <Link
                  to="/work"
                  className="block px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-primary mb-1"
                >
                  All Work →
                </Link>
                {workLinks.map((l) => (
                  <Link key={l.href} to={l.href} className={dropdownLinkClass}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {simpleLinks.slice(1).map((l) => (
            <NavigationMenuItem key={l.href}>
              <NavigationMenuLink asChild>
                <Link
                  to={l.href}
                  className="text-sm font-body text-foreground/80 hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Link
        to="/contact"
        className="hidden lg:inline-flex bg-primary text-primary-foreground font-heading font-semibold text-sm px-5 py-2 rounded-full hover:scale-[1.03] transition-transform duration-300 shrink-0"
      >
        Contact
      </Link>

      {/* Mobile trigger */}
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetTrigger asChild>
          <button className="lg:hidden text-foreground" aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-lumin8-black border-foreground/[0.08] w-[85%] sm:max-w-sm overflow-y-auto"
        >
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <div className="flex flex-col gap-1 mt-8">
            <Link to="/" className="text-foreground font-body py-3 text-lg">
              Home
            </Link>

            <button
              className="flex items-center justify-between text-foreground font-body py-3 text-lg"
              onClick={() => setMobileServicesOpen((v) => !v)}
              aria-expanded={mobileServicesOpen}
            >
              Services
              <ChevronDown
                className={`w-5 h-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 flex flex-col gap-1 pb-2">
                <Link to="/services" className="text-primary font-mono text-xs uppercase tracking-wider py-2">
                  All Services →
                </Link>
                {servicesLinks.map((l) => (
                  <Link key={l.href} to={l.href} className="text-foreground/70 font-body py-2">
                    {l.label}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/franchise" className="text-foreground font-body py-3 text-lg">
              Franchise Marketing
            </Link>

            <button
              className="flex items-center justify-between text-foreground font-body py-3 text-lg"
              onClick={() => setMobileWorkOpen((v) => !v)}
              aria-expanded={mobileWorkOpen}
            >
              Work
              <ChevronDown
                className={`w-5 h-5 transition-transform ${mobileWorkOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileWorkOpen && (
              <div className="pl-4 flex flex-col gap-1 pb-2">
                <Link to="/work" className="text-primary font-mono text-xs uppercase tracking-wider py-2">
                  All Work →
                </Link>
                {workLinks.map((l) => (
                  <Link key={l.href} to={l.href} className="text-foreground/70 font-body py-2">
                    {l.label}
                  </Link>
                ))}
              </div>
            )}

            {simpleLinks.slice(1).map((l) => (
              <Link key={l.href} to={l.href} className="text-foreground font-body py-3 text-lg">
                {l.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="bg-primary text-primary-foreground font-heading font-semibold text-sm px-5 py-3 rounded-full text-center mt-4"
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
