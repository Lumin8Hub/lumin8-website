import { useEffect } from "react";
import { gsap } from "gsap";
import MagneticButton from "./animations/MagneticButton";

const Hero = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.from(".hero-headline", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" })
        .from(".hero-subline", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .from(".hero-ctas", { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.3");
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={`${import.meta.env.BASE_URL}Lumin8Hero.mp4`} type="video/mp4" />
      </video>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 md:pb-28 pt-32 w-full">
        <h1
          className="hero-headline font-heading font-extrabold tracking-[-0.03em] leading-[1.05] text-foreground mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          There's light at the
          <br className="hidden sm:block" />
          {" "}end of the funnel.
        </h1>

        <p className="hero-subline max-w-2xl text-lumin8-gray-400 text-lg leading-relaxed mb-10">
          Lumin8 is a Toronto digital agency that builds websites, brands, and marketing engines — with
          senior strategy and AI-accelerated delivery that moves at the speed your business actually needs.
        </p>

        <div className="hero-ctas flex flex-col sm:flex-row gap-4">
          <MagneticButton
            as="link"
            to="/contact"
            className="bg-primary text-primary-foreground font-heading font-bold px-8 py-4 rounded-full text-center inline-block"
          >
            Start a Conversation
          </MagneticButton>
          <MagneticButton
            as="link"
            to="/work"
            className="border border-foreground/30 text-foreground font-heading font-semibold px-8 py-4 rounded-full text-center inline-block"
          >
            See Our Work
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
