import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const helpfulLinks = [
  { label: "Home", href: "/" },
  { label: "Our Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo title="Page Not Found" description="This page isn't lit — but plenty of others are." path={location.pathname} />
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 pt-32 pb-24">
        <div className="max-w-md text-center">
          <span className="font-mono text-6xl font-bold text-primary block mb-4">404</span>
          <h1 className="section-headline text-foreground mb-4">This page isn't lit.</h1>
          <p className="text-lumin8-gray-400 leading-relaxed mb-10">
            The page you're looking for doesn't exist, or it moved. Here's where you probably meant to go.
          </p>
          <div className="flex flex-col gap-3">
            {helpfulLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="inline-flex items-center justify-center gap-2 border border-foreground/15 text-foreground font-heading font-semibold text-sm px-6 py-3 rounded-full hover:border-primary/40 hover:text-primary transition-colors"
              >
                {l.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
