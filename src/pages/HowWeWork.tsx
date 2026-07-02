import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import SectionReveal from "@/components/animations/SectionReveal";
import GlowCard from "@/components/animations/GlowCard";
import MagneticButton from "@/components/animations/MagneticButton";
import Timeline from "@/components/casestudy/Timeline";
import { buildSystemExplanation, tasteArguments, speedProofs, ethicsRules } from "@/data/howWeWork";
import { processSteps } from "@/data/process";

const HowWeWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="How We Work"
        description="AI-accelerated. Human-refined. An honest walkthrough of the Lumin8 Build System — how senior strategists direct AI to ship faster without shipping AI slop."
        path="/how-we-work"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 relative overflow-hidden">
        <div className="blob blob-lavender w-40 h-40 top-16 -right-10 opacity-30 blur-[60px]" />
        <div className="max-w-3xl mx-auto text-center">
          <SectionReveal>
            <h1 className="section-headline text-foreground mx-auto mb-4">AI-accelerated. Human-refined.</h1>
            <p className="section-subheadline mx-auto text-center">
              We've spent 30 combined years learning what good marketing looks like. AI lets us build it at a
              speed traditional agencies can't match.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* The honest explanation */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <span className="section-label">The Honest Explanation</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">
              How does the Lumin8 Build System actually work?
            </h2>
            <div className="space-y-5">
              {buildSystemExplanation.map((p, i) => (
                <p key={i} className="text-lumin8-gray-400 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <p className="font-serif italic text-primary text-2xl mt-8">No AI slop. Ever.</p>
          </SectionReveal>
        </div>
      </section>

      {/* Taste is the moat */}
      <section className="px-6 py-16 bg-lumin8-off-white">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <span className="section-label text-lumin8-gray-600">Taste Is the Moat</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-lumin8-black mb-8">
              If AI made production cheap, what are you actually paying for?
            </h2>
            <div className="space-y-5">
              {tasteArguments.map((p, i) => (
                <p key={i} className="text-lumin8-gray-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* The process */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <span className="section-label">The Process</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-10">
              What does the process actually look like?
            </h2>
          </SectionReveal>
          <Timeline
            steps={processSteps.map((s) => ({ phase: s.phase, title: s.title, description: s.description }))}
            accentColor="#79cac1"
          />
          <SectionReveal delay={0.2}>
            <p className="text-sm text-lumin8-gray-400 mt-10 leading-relaxed">
              Launch & Handoff isn't a formality — it's the point. Read how we handed{" "}
              <Link to="/work/jillian-rodak" className="text-primary hover:underline">
                Jillian Rodak the keys
              </Link>{" "}
              to her own website, with a walkthrough of the AI editor and zero ongoing dependency on us.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Speed proofs */}
      <section className="px-6 py-20 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <span className="section-label">Speed Proofs</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-10">
              How fast is fast, really?
            </h2>
          </SectionReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {speedProofs.map((p) => (
              <GlowCard key={p.stat} className="bg-muted/30 rounded-2xl p-6 border border-foreground/[0.06]">
                <div className="font-heading font-bold text-3xl text-primary mb-2">{p.stat}</div>
                <p className="text-sm text-lumin8-gray-400 leading-relaxed mb-3">{p.description}</p>
                {p.href && (
                  <Link to={p.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
                    Read the case study
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics & guardrails */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <span className="section-label">Ethics &amp; Guardrails</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-10">
              Where do you draw the line with AI?
            </h2>
          </SectionReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {ethicsRules.map((rule) => (
              <div key={rule.title} className="bg-muted/30 rounded-2xl p-6 border border-foreground/[0.06]">
                <ShieldCheck className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-heading font-semibold text-foreground mb-2">{rule.title}</h3>
                <p className="text-sm text-lumin8-gray-400 leading-relaxed">{rule.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing honesty */}
      <section className="px-6 py-16 bg-lumin8-off-white">
        <div className="max-w-2xl mx-auto text-center">
          <SectionReveal>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-lumin8-black mb-6">
              What does this mean for pricing?
            </h2>
            <p className="text-lumin8-gray-600 leading-relaxed">
              Efficiency shows up as accessible project pricing and faster timelines — not as junior staff or
              templates. Projects start from $5,000; retainers start from $3,000/month. No public menu, because
              scope varies — but no games either.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 relative overflow-hidden">
        <div className="blob blob-green w-40 h-40 -top-10 right-[15%] opacity-25 blur-[60px]" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <SectionReveal>
            <h2 className="font-serif text-foreground mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              See it in the work.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton
                as="link"
                to="/work"
                className="border border-foreground/30 text-foreground font-heading font-semibold px-8 py-4 rounded-full inline-block"
              >
                See Our Work
              </MagneticButton>
              <MagneticButton
                as="link"
                to="/contact"
                className="bg-primary text-primary-foreground font-heading font-bold px-8 py-4 rounded-full inline-block"
              >
                Start a Conversation
              </MagneticButton>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowWeWork;
