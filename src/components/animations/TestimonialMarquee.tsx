import { motion, useReducedMotion } from "framer-motion";
import GlowCard from "./GlowCard";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

interface TestimonialMarqueeProps {
  testimonials: Testimonial[];
}

const TestimonialMarquee = ({ testimonials }: TestimonialMarqueeProps) => {
  const shouldReduceMotion = useReducedMotion();
  const doubled = [...testimonials, ...testimonials];

  if (shouldReduceMotion) {
    return (
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex gap-6 hover:[animation-play-state:paused]"
        animate={{ x: [0, `-${testimonials.length * 50}%`] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
        style={{ width: "max-content" }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </motion.div>
    </div>
  );
};

const TestimonialCard = ({ quote, name, title }: Testimonial) => (
  <GlowCard className="bg-muted/30 rounded-2xl p-8 border border-foreground/[0.06] max-w-[360px] shrink-0">
    <span className="text-4xl text-primary font-serif leading-none">"</span>
    <p className="text-foreground/80 leading-relaxed mt-2 mb-6">{quote}</p>
    <div>
      <p className="font-heading font-bold text-foreground">{name}</p>
      <p className="text-lumin8-gray-400 text-sm">{title}</p>
    </div>
  </GlowCard>
);

export default TestimonialMarquee;
