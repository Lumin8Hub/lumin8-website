import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, TrendingDown, Users, HelpCircle, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import SectionReveal from "@/components/animations/SectionReveal";
import GlowCard from "@/components/animations/GlowCard";
import MagneticButton from "@/components/animations/MagneticButton";
import StatsBar from "@/components/casestudy/StatsBar";
import TestimonialBand from "@/components/casestudy/TestimonialBand";
import FeatureGrid from "@/components/casestudy/FeatureGrid";
import { franchisorServices, franchiseeServices, agencyModelPillars, franchiseProblems } from "@/data/franchise";
import { serviceSchema } from "@/lib/schema";

const sportballStats = [
  { value: "60%+", label: "CAC reduction" },
  { value: "<$10", label: "Cost per registration" },
  { value: "20+", label: "Franchise locations" },
  { value: "134K+", label: "Kids enrolled" },
];

const problemIcons = [AlertTriangle, TrendingDown, Users, HelpCircle];

const Franchise = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Franchise Marketing Agency"
        description="Brand systems, local marketing, and growth engines for franchise networks — built by people who have sat on both sides of the table as franchise owners."
        path="/franchise"
        jsonLd={serviceSchema({
          name: "Franchise Marketing",
          description:
            "Brand systems, local marketing, and growth engines for franchise networks, built by former franchise owners.",
          path: "/franchise",
        })}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="blob blob-coral w-40 h-40 top-16 -right-10 opacity-30 blur-[60px]" />
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <span className="section-label justify-center">Franchise Marketing</span>
            <h1 className="section-headline text-foreground mx-auto mb-4">
              We've been franchise owners. That's why franchisors trust us.
            </h1>
            <p className="section-subheadline mx-auto text-center">
              Brand systems, local marketing, and growth engines for franchise networks — built by people who
              have sat on both sides of the table.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Operator credential */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <div className="rounded-2xl border border-foreground/[0.08] bg-muted/30 p-8 md:p-10">
              <span className="font-mono text-xs uppercase tracking-wider text-primary mb-4 block">
                The Operator Credential
              </span>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Before we were an agency, we were franchise owners. Dan and Dorit ran a franchise location
                themselves — payroll, local marketing, and the franchisor relationship, all of it.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                We've also worked as marketing partners to franchisors and franchisees on the other side of the
                table. That combination — owner, franchisee, and agency partner — is the perspective behind
                every recommendation on this page.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Two audiences, two paths */}
      <section className="px-6 py-16 bg-lumin8-off-white">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <h2 className="section-headline text-lumin8-black mb-12 text-center mx-auto">Two Audiences, Two Paths</h2>
          </SectionReveal>
          <div className="grid md:grid-cols-2 gap-6">
            <GlowCard className="bg-foreground rounded-2xl p-8 border border-lumin8-black/5 shadow-sm">
              <span className="font-mono text-xs uppercase tracking-wider text-primary mb-3 block">For Franchisors</span>
              <ul className="space-y-3">
                {franchisorServices.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-lumin8-black/80">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    {s}
                  </li>
                ))}
              </ul>
            </GlowCard>
            <GlowCard className="bg-foreground rounded-2xl p-8 border border-lumin8-black/5 shadow-sm">
              <span className="font-mono text-xs uppercase tracking-wider text-primary mb-3 block">For Franchisees</span>
              <ul className="space-y-3">
                {franchiseeServices.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-lumin8-black/80">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    {s}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* The Franchisee Agency Model */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <span className="section-label">Our Methodology</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
              The Franchisee Agency Model
            </h2>
            <p className="text-lumin8-gray-400 leading-relaxed mb-10 max-w-2xl">
              Developed and proven on the Sportball engagement — our proprietary approach to marketing a
              network without flattening what makes each location work.
            </p>
          </SectionReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {agencyModelPillars.map((p) => (
              <GlowCard key={p.title} className="bg-muted/30 rounded-2xl p-6 border border-foreground/[0.06]">
                <h3 className="font-heading font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-lumin8-gray-400 leading-relaxed">{p.description}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee results */}
      <section className="px-6 py-20 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-10 text-center">
              Results Across the Network
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="rounded-2xl border border-foreground/[0.08] p-8 mb-6">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <h3 className="font-heading font-bold text-xl text-foreground">Sportball</h3>
                <Link
                  to="/work/sportball"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                >
                  Full case study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <StatsBar stats={sportballStats} accentColor="#2DD4BF" variant="dark" />
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-6">
            <SectionReveal delay={0.15}>
              <div className="rounded-2xl border border-foreground/[0.08] p-6 h-full">
                <h3 className="font-heading font-bold text-foreground mb-2">Aqua-Tots North York</h3>
                <p className="text-sm text-lumin8-gray-400 leading-relaxed">
                  Social media and paid marketing strategy for a location launch, reaching parents in a
                  competitive local market.
                </p>
                {/* FUTURE: /work/aqua-tots — testimonial only at launch, full case study planned */}
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="rounded-2xl border border-foreground/[0.08] p-6 h-full">
                <h3 className="font-heading font-bold text-foreground mb-2">Yogen Früz</h3>
                <p className="text-sm text-lumin8-gray-400 leading-relaxed mb-3">
                  Network-wide creative innovation — including an AR filter for the Netflix "Unicorn Academy"
                  collaboration that drove a verified sales lift on the new flavour.
                </p>
                <Link to="/work/yogen-fruz" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                  Full case study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialBand
        quote="Dan's leadership in our full rebranding was transformative for Sportball. He developed a multi-functional website and crafted a strategy that enabled our franchisees across North America to benefit from professional brand assets and best practices in paid advertising and local marketing."
        author="Head of Marketing"
        role="Sportball"
        accentColor="#fff"
        background="linear-gradient(135deg, rgba(45,212,191,0.18), rgba(20,90,80,0.12))"
      />
      <TestimonialBand
        quote="Dorit and the Lumin8 team exceeded our expectations with social media and paid marketing strategy for our North York location launch. They deeply understand how to reach parents in our target market."
        author="Aqua-Tots North York"
        role="Owners"
        accentColor="#fff"
        background="linear-gradient(135deg, rgba(163,113,247,0.15), rgba(20,20,20,0.05))"
      />

      {/* Franchise problems */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-10">
              Common Franchise Problems We Solve
            </h2>
          </SectionReveal>
          <FeatureGrid
            features={franchiseProblems.map((p, i) => {
              const Icon = problemIcons[i];
              return { icon: <Icon className="w-5 h-5" />, title: p.title, description: p.description };
            })}
            accentColor="#79cac1"
            cardBg="rgba(255,255,255,0.02)"
            cardBorder="rgba(255,255,255,0.08)"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 relative overflow-hidden">
        <div className="blob blob-green w-40 h-40 -top-10 left-[15%] opacity-25 blur-[60px]" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <SectionReveal>
            <h2 className="font-serif text-foreground mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Scale your network.
            </h2>
            <MagneticButton
              as="link"
              to="/contact?need=franchise"
              className="bg-primary text-primary-foreground font-heading font-bold px-10 py-4 rounded-full text-lg inline-block"
            >
              Talk to Us About Your Network
            </MagneticButton>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Franchise;
