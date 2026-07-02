import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import SectionReveal from "@/components/animations/SectionReveal";
import GlowCard from "@/components/animations/GlowCard";
import MagneticButton from "@/components/animations/MagneticButton";
import TierTable from "@/components/TierTable";
import Timeline from "@/components/casestudy/Timeline";
import FAQSection from "@/components/FAQSection";
import { services } from "@/data/services";
import { processSteps } from "@/data/process";

const ServicesHub = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Services"
        description="Full-funnel digital marketing capability — websites, performance marketing, branding & content, AI automation, and fractional CMO strategy. Project-based or retained."
        path="/services"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 relative overflow-hidden">
        <div className="blob blob-lavender w-36 h-36 top-16 -left-10 opacity-30 blur-[50px]" />
        <div className="max-w-3xl mx-auto text-center">
          <SectionReveal>
            <h1 className="section-headline text-foreground mx-auto mb-4">Everything you need. Nothing you don't.</h1>
            <p className="section-subheadline mx-auto text-center">
              Full-funnel capability, project-based or retained — every engagement led by principals.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Tier framing */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <TierTable theme="dark" />
          <SectionReveal delay={0.2}>
            <p className="text-center text-foreground font-heading font-semibold mt-10">
              Every project is a beginning. When you're ready to grow, we're already your agency.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Service index */}
      <section className="px-6 py-16 bg-lumin8-off-white">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <h2 className="section-headline text-lumin8-black mb-12">The Five Services</h2>
          </SectionReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="block h-full">
                <GlowCard className="bg-foreground rounded-2xl p-8 h-full border border-lumin8-black/5 shadow-sm flex flex-col">
                  <h3 className="font-heading font-bold text-xl text-lumin8-black mb-2">{s.navLabel}</h3>
                  <p className="text-lumin8-gray-600 leading-relaxed mb-4 flex-1">{s.heroSub}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-lumin8-gray-600">
                      {s.priceSignal}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </GlowCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work teaser */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <span className="section-label">How We Work</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-10">
              Four stages, every time
            </h2>
          </SectionReveal>
          <Timeline
            steps={processSteps.map((s) => ({ phase: s.phase, title: s.title, description: s.description }))}
            accentColor="#79cac1"
          />
          <SectionReveal delay={0.2}>
            <Link
              to="/how-we-work"
              className="inline-flex items-center gap-2 mt-10 text-primary font-heading font-semibold text-sm hover:gap-3 transition-all"
            >
              See the full build system
              <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      <FAQSection />

      {/* CTA */}
      <section className="px-6 py-24 relative overflow-hidden">
        <div className="blob blob-yellow w-40 h-40 -top-10 right-[15%] opacity-25 blur-[60px]" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <SectionReveal>
            <h2 className="font-serif text-foreground mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Ready to start?
            </h2>
            <MagneticButton
              as="link"
              to="/contact"
              className="bg-primary text-primary-foreground font-heading font-bold px-10 py-4 rounded-full text-lg inline-block"
            >
              Start a Conversation
            </MagneticButton>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesHub;
