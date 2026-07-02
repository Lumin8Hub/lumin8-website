import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionReveal from "./animations/SectionReveal";

const FranchiseStrip = () => (
  <section className="bg-muted py-20 px-6 relative overflow-hidden border-y border-foreground/[0.06]">
    <div className="max-w-4xl mx-auto text-center">
      <SectionReveal>
        <p className="font-serif italic text-2xl md:text-3xl text-foreground leading-snug mb-6">
          We've owned a franchise. We've marketed for franchisors and franchisees.
          <br className="hidden md:block" /> That changes how we work.
        </p>
        <Link
          to="/franchise"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold text-sm px-8 py-3 rounded-full hover:scale-[1.03] transition-transform duration-300"
        >
          Franchise Marketing
          <ArrowRight className="w-4 h-4" />
        </Link>
      </SectionReveal>
    </div>
  </section>
);

export default FranchiseStrip;
