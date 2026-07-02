import { homeTestimonials } from "@/data/home";
import SectionReveal from "./animations/SectionReveal";
import TestimonialMarquee from "./animations/TestimonialMarquee";

const TestimonialsSection = () => {
  return (
    <section className="bg-background py-24 px-6 relative overflow-hidden">
      <div className="blob blob-lavender w-28 h-28 top-10 left-[10%] opacity-40 blur-[50px]" />

      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2 className="section-headline text-foreground mb-12">Don't take our word for it</h2>
        </SectionReveal>

        <TestimonialMarquee testimonials={homeTestimonials} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
