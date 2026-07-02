import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Zap, KeyRound } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { differenceCards } from "@/data/home";
import SectionReveal from "./animations/SectionReveal";
import GlowCard from "./animations/GlowCard";

const icons = [Target, Zap, KeyRound];

const DifferenceSection = () => {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-background py-24 px-6 relative overflow-hidden">
      <div className="blob blob-green w-32 h-32 top-10 -left-10 opacity-30 blur-[50px]" />

      <div className="max-w-6xl mx-auto text-center">
        <SectionReveal>
          <h2 className="section-headline text-foreground mx-auto">AI-accelerated. Human-refined.</h2>
          <p className="section-subheadline mx-auto text-center">
            AI is a tool we're exceptionally good at using. It accelerates taste and judgment honed over 30
            years of combined marketing experience — everything ships human-reviewed. No AI slop. Ever.
          </p>
        </SectionReveal>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 mt-16">
          {differenceCards.map((card, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={card.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 }}
              >
                <GlowCard className="bg-muted/30 rounded-2xl p-8 text-left border border-foreground/[0.06] h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">{card.title}</h3>
                  <p className="text-lumin8-gray-400 leading-relaxed">{card.description}</p>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>

        <SectionReveal delay={0.2}>
          <Link
            to="/how-we-work"
            className="inline-flex items-center gap-2 mt-10 text-primary font-heading font-semibold text-sm hover:gap-3 transition-all"
          >
            How We Work
            <ArrowRight className="w-4 h-4" />
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
};

export default DifferenceSection;
