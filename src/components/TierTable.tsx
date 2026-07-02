import { useRef } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { tiers } from "@/data/tiers";
import GlowCard from "./animations/GlowCard";

interface TierTableProps {
  className?: string;
  theme?: "dark" | "light";
}

const TierTable = ({ className = "", theme = "dark" }: TierTableProps) => {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  const isLight = theme === "light";

  return (
    <div ref={cardsRef} className={`grid md:grid-cols-3 gap-6 ${className}`}>
      {tiers.map((tier, i) => (
        <motion.div
          key={tier.name}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
        >
          <GlowCard
            className={`rounded-2xl p-8 text-left h-full flex flex-col ${
              isLight
                ? "bg-foreground border border-lumin8-black/5 shadow-sm"
                : "bg-muted/30 border border-foreground/[0.06]"
            }`}
          >
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-primary mb-3">{tier.name}</span>
            <h3
              className={`font-heading font-bold text-xl mb-3 ${isLight ? "text-lumin8-black" : "text-foreground"}`}
            >
              {tier.framing}
            </h3>
            <p className={`leading-relaxed mb-6 ${isLight ? "text-lumin8-gray-600" : "text-lumin8-gray-400"}`}>
              {tier.promise}
            </p>

            <ul className="space-y-2 mb-6 flex-1">
              {tier.services.map((s) => (
                <li
                  key={s}
                  className={`flex items-start gap-2 text-sm ${isLight ? "text-lumin8-black/70" : "text-foreground/70"}`}
                >
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {s}
                </li>
              ))}
            </ul>

            <div className={`font-mono text-xs mb-4 ${isLight ? "text-lumin8-gray-600" : "text-lumin8-gray-400"}`}>
              {tier.priceSignal}
            </div>

            <Link
              to={tier.href}
              className={`inline-flex items-center justify-center border font-heading font-semibold text-sm px-6 py-3 rounded-full transition-colors ${
                isLight
                  ? "border-lumin8-black/20 text-lumin8-black hover:bg-lumin8-black/5"
                  : "border-foreground/20 text-foreground hover:bg-white/5"
              }`}
            >
              Explore {tier.name}
            </Link>
          </GlowCard>
        </motion.div>
      ))}
    </div>
  );
};

export default TierTable;
