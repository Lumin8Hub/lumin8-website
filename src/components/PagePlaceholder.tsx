import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PagePlaceholderProps {
  title: string;
  note: string;
}

/**
 * Scaffold used while a route's real content is pending in a later build
 * phase (see Lumin8-2026-Build-Instructions.md). Every route in the final
 * site map exists from Phase 1 onward; this keeps `npm run build` green
 * between phases without shipping unstyled 404s.
 */
const PagePlaceholder = ({ title, note }: PagePlaceholderProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 pt-32 pb-24">
        <div className="max-w-lg text-center">
          <span className="section-label">Coming Soon</span>
          <h1 className="section-headline text-foreground mb-4">{title}</h1>
          <p className="text-lumin8-gray-400 leading-relaxed mb-8">{note}</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold text-sm px-6 py-3 rounded-full hover:scale-[1.03] transition-transform"
          >
            Talk to us in the meantime
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PagePlaceholder;
