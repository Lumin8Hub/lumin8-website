import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { insights } from "@/data/insights";
import SectionReveal from "./animations/SectionReveal";
import GlowCard from "./animations/GlowCard";

const latest = [...insights].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);

const InsightsTeaser = () => {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-background py-24 px-6 relative overflow-hidden">
      <div className="blob blob-pink w-28 h-28 top-10 right-[8%] opacity-30 blur-[50px]" />

      <div className="max-w-6xl mx-auto">
        <SectionReveal className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <div>
            <h2 className="section-headline text-foreground mb-2">Insights</h2>
            <p className="text-lumin8-gray-400">Thinking on AI, franchise growth, and Toronto business.</p>
          </div>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm hover:gap-3 transition-all shrink-0"
          >
            All Insights
            <ArrowRight className="w-4 h-4" />
          </Link>
        </SectionReveal>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
          {latest.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
            >
              <Link to={`/insights/${article.slug}`} className="block h-full">
                <GlowCard className="bg-muted/30 rounded-2xl p-6 h-full border border-foreground/[0.06] flex flex-col">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-primary mb-3">
                    {article.category}
                  </span>
                  <h3 className="font-heading font-bold text-foreground mb-2 leading-snug">{article.title}</h3>
                  <p className="text-sm text-lumin8-gray-400 leading-relaxed flex-1">{article.excerpt}</p>
                  <span className="text-xs text-lumin8-gray-400 mt-4">By {article.author}</span>
                </GlowCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsTeaser;
