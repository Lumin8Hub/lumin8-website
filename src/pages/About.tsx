import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import SectionReveal from "@/components/animations/SectionReveal";
import GlowCard from "@/components/animations/GlowCard";
import MagneticButton from "@/components/animations/MagneticButton";
import { convictions } from "@/data/about";
import { organizationSchema } from "@/lib/schema";

const PortraitPlaceholder = ({ initials, accent }: { initials: string; accent: string }) => (
  // PHOTO-PASS-2: replace with a real portrait
  <div
    className="aspect-[4/5] rounded-2xl flex items-center justify-center"
    style={{ background: `linear-gradient(135deg, ${accent}25, ${accent}08)`, border: `1px solid ${accent}30` }}
  >
    <span className="text-6xl font-heading font-bold opacity-30" style={{ color: accent }}>
      {initials}
    </span>
  </div>
);

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="About"
        description="Dan Flatt and Dorit Smali — the two people behind Lumin8. Their partnership, their franchise-owner history, and their Toronto community roots."
        path="/about"
        jsonLd={organizationSchema}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 relative overflow-hidden">
        <div className="blob blob-pink w-40 h-40 top-16 -left-10 opacity-25 blur-[60px]" />
        <div className="max-w-3xl mx-auto text-center">
          <SectionReveal>
            <h1 className="section-headline text-foreground mx-auto">The two of us. And everything we've learned.</h1>
          </SectionReveal>
        </div>
      </section>

      {/* The partnership */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <p className="text-lumin8-gray-400 leading-relaxed text-lg max-w-2xl mx-auto text-center mb-4">
              Dan Flatt and Dorit Smali are partners in business and in life. The split that makes the agency
              work: Dan on strategy, build, and creative direction; Dorit on client relationships,
              implementation, and operations.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Dan & Dorit */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <SectionReveal>
            <PortraitPlaceholder initials="DF" accent="#79cac1" />
            <h2 className="font-heading font-bold text-xl text-foreground mt-6 mb-1">Dan Flatt</h2>
            <p className="font-mono text-xs uppercase tracking-wider text-primary mb-4">Co-Founder &amp; Principal</p>
            <p className="text-lumin8-gray-400 leading-relaxed mb-4">
              Strategy, technical direction, AI build systems, copywriting, and design systems. Dan directs the
              Lumin8 Build System end to end.
            </p>
            <p className="text-sm text-lumin8-gray-400 leading-relaxed">
              Outside the agency, Dan fronts{" "}
              {/* REVIEW: confirm The Honeyrunners' official site/social URL before publishing */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                The Honeyrunners
                <ExternalLink className="w-3 h-3" />
              </a>
              , a six-piece Northern Soul group. It's a trust signal, not a bio padding — the same taste that
              picks a bassline shows up in how we pick a typeface.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <PortraitPlaceholder initials="DS" accent="#ed4c96" />
            <h2 className="font-heading font-bold text-xl text-foreground mt-6 mb-1">Dorit Smali</h2>
            <p className="font-mono text-xs uppercase tracking-wider text-primary mb-4">Co-Founder</p>
            <p className="text-lumin8-gray-400 leading-relaxed mb-4">
              Client-facing leadership, outreach, operations, and community administration. Dorit runs the
              relationships that keep every project on track.
            </p>
            <p className="text-sm text-lumin8-gray-400 leading-relaxed">
              Dorit is also a registered campaign manager, having run a 2026 school board trustee campaign — see{" "}
              <a href="https://dorit4trustee.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                dorit4trustee.com
                <ExternalLink className="w-3 h-3" />
              </a>
              . That operational discipline shows up in how every Lumin8 engagement is run.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* The operator chapter */}
      <section className="px-6 py-16 bg-lumin8-off-white">
        <div className="max-w-3xl mx-auto text-center">
          <SectionReveal>
            <span className="section-label text-lumin8-gray-600 justify-center">The Operator Chapter</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-lumin8-black mb-4">
              We've been franchise owners too.
            </h2>
            <p className="text-lumin8-gray-600 leading-relaxed mb-6">
              Before the agency, Dan and Dorit owned and operated a franchise location themselves — and have
              since worked as marketing partners to both franchisors and franchisees. It's the credential behind
              our deepest specialty.
            </p>
            <Link to="/franchise" className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm hover:gap-3 transition-all">
              The full franchise story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* Community */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <span className="section-label">Community</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-10">
              Toronto roots, referral-driven growth.
            </h2>
          </SectionReveal>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <GlowCard className="bg-muted/30 rounded-2xl p-6 border border-foreground/[0.06]">
              <h3 className="font-heading font-semibold text-foreground mb-2">Everything Jewish Toronto</h3>
              <p className="text-sm text-lumin8-gray-400 leading-relaxed">
                Preferred-vendor standing in a professionally moderated community of roughly 51,000 members.
              </p>
            </GlowCard>
            <GlowCard className="bg-muted/30 rounded-2xl p-6 border border-foreground/[0.06]">
              <h3 className="font-heading font-semibold text-foreground mb-2">Jewish Business Network</h3>
              <p className="text-sm text-lumin8-gray-400 leading-relaxed">
                Co-owned and administered by Dan and Dorit — a community of roughly 9,000 business operators.
              </p>
            </GlowCard>
            <GlowCard className="bg-muted/30 rounded-2xl p-6 border border-foreground/[0.06]">
              <h3 className="font-heading font-semibold text-foreground mb-2">Build My Business Contest</h3>
              <p className="text-sm text-lumin8-gray-400 leading-relaxed">
                13 applicants, one winner — Esther Warner of The Balloon Artist. We built preview sites for the
                other 12 anyway, at an exclusive applicant rate. Proof over promise.
              </p>
            </GlowCard>
          </div>
          <SectionReveal delay={0.2}>
            <p className="text-lumin8-gray-400 leading-relaxed max-w-2xl">
              This is how the agency actually grows — by referral and trust, not cold outbound.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* What we believe */}
      <section className="px-6 py-20 bg-lumin8-off-white">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <h2 className="section-headline text-lumin8-black mb-12 text-center mx-auto">What We Believe</h2>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {convictions.map((c) => (
              <div key={c.title} className="bg-foreground rounded-2xl p-6 border border-lumin8-black/5 shadow-sm">
                <h3 className="font-heading font-semibold text-lumin8-black mb-2">{c.title}</h3>
                <p className="text-sm text-lumin8-gray-600 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 relative overflow-hidden">
        <div className="blob blob-yellow w-40 h-40 -top-10 right-[15%] opacity-25 blur-[60px]" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <SectionReveal>
            <h2 className="font-serif text-foreground mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Come say hi.
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

export default About;
