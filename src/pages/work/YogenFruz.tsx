import { Link } from "react-router-dom";
import { BarChart3, Layers, Sparkles, Target } from "lucide-react";
import CaseStudyLayout from "@/components/casestudy/CaseStudyLayout";
import BrowserMockup from "@/components/casestudy/BrowserMockup";
import StatsBar from "@/components/casestudy/StatsBar";
import FeatureGrid from "@/components/casestudy/FeatureGrid";
import Timeline from "@/components/casestudy/Timeline";
import TestimonialBand from "@/components/casestudy/TestimonialBand";
import ProseSection from "@/components/casestudy/ProseSection";
import SectionReveal from "@/components/animations/SectionReveal";
import Seo from "@/components/Seo";

const ACCENT = "#EC008C";
const ACCENT_BLUE = "#00AEEF";

const stats = [
  { value: "AR Filter", label: "Netflix \"Unicorn Academy\" collaboration" },
  { value: "Verified", label: "Sales lift on the new flavour" },
  { value: "4", label: "Ad platforms tracked: Google, Meta, TikTok, GroundTruth" },
  { value: "Ongoing", label: "Relationship continues into the AI era" },
];

const features = [
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "AR Filter, Built for a Netflix Collaboration",
    description: "A custom AR filter tied to the Netflix \"Unicorn Academy\" collaboration, built to drive in-store trial of a new flavour launch.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Cross-Platform Analytics Dashboard",
    description: "A custom React dashboard pulling live data from Google, Meta, TikTok, and GroundTruth into one place the marketing team actually uses.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Network-Wide Creative Innovation",
    description: "Creative work built to work across every Yogen Früz location, not just a single flagship store.",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "A Legacy Relationship, Modern Toolkit",
    description: "A partnership that started before Lumin8's AI-accelerated build system existed — and now runs on it.",
  },
];

const timeline = [
  {
    phase: "Legacy Era",
    title: "Where the Relationship Started",
    description: "Lumin8 began working with Yogen Früz on creative and campaign execution — the relationship that seeded the trust behind everything that followed.",
  },
  {
    phase: "Campaign",
    title: "The Netflix Collaboration",
    description: "An AR filter built for the \"Unicorn Academy\" collaboration, designed to bring a Netflix IP tie-in to life in a way that felt native to the brand.",
  },
  {
    phase: "Measurement",
    title: "Building the Dashboard",
    description: "As paid media spend grew across more platforms, Lumin8 built a custom analytics dashboard so the team could see performance across Google, Meta, TikTok, and GroundTruth in one view.",
  },
  {
    phase: "Today",
    title: "Current-Era Capability",
    description: "The relationship now runs on the same AI-accelerated build system Lumin8 uses for every client — proof that the legacy trust and the new capability aren't in tension.",
  },
];

const YogenFruz = () => (
  <CaseStudyLayout accentColor={ACCENT} bgColor="hsl(0 0% 5%)">
    <Seo
      title="Yogen Früz — Creative Innovation Across a Franchise Network"
      description="An AR filter for the Netflix Unicorn Academy collaboration and an ongoing analytics dashboard across four ad platforms — a legacy relationship built into current AI-era capability."
      path="/work/yogen-fruz"
    />
    {/* Hero */}
    <section className="px-6 pb-16">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <div className="text-xs font-mono uppercase tracking-wider mb-4" style={{ color: ACCENT }}>
            Case Study
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: '"DM Serif Display", serif', color: "#fff" }}
          >
            Yogen Früz
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-body">
            A relationship that started before AI-accelerated builds existed — and now runs on the same system
            Lumin8 uses for every client.
          </p>
        </SectionReveal>

        <div className="flex flex-wrap gap-3 mt-8">
          {["Franchise", "AI & Automation", "Dashboards", "Creative"].map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1.5 rounded-full border"
              style={{ borderColor: `${ACCENT}40`, color: ACCENT }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* Browser Mockup */}
    <section className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <SectionReveal delay={0.2}>
          {/* PHOTO-PASS-2: replace with real dashboard screenshot */}
          <BrowserMockup url="app.yogenfruz.com/analytics" accentColor={ACCENT_BLUE} frameVariant="dark-rounded">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8">
                <div
                  className="text-5xl md:text-7xl font-bold mb-4 opacity-20"
                  style={{ fontFamily: '"DM Serif Display", serif', color: ACCENT }}
                >
                  Yogen Früz
                </div>
                <div className="text-sm text-white/30 font-mono">Cross-Platform Analytics Dashboard</div>
              </div>
            </div>
          </BrowserMockup>
        </SectionReveal>
      </div>
    </section>

    {/* Stats */}
    <section className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <StatsBar stats={stats} accentColor={ACCENT} />
      </div>
    </section>

    {/* The Client */}
    <ProseSection
      label="THE CLIENT"
      heading="A Franchise Brand Playing the Long Game"
      labelColor={ACCENT}
      mutedColor="rgba(255,255,255,0.6)"
      paragraphs={[
        "Yogen Früz is a global frozen yogurt and treats franchise with locations across North America. Lumin8's relationship with the brand predates the current AI-accelerated build system — it started with creative and campaign work, the kind of trust that gets built one good project at a time.",
        "As the brand's marketing needs grew more complex — more platforms, more locations, more campaigns to track — the relationship grew with it.",
      ]}
    />

    {/* The Challenge */}
    <ProseSection
      label="THE CHALLENGE"
      heading="Big Ideas Need Big-Brand Execution"
      labelColor={ACCENT}
      mutedColor="rgba(255,255,255,0.6)"
      bgColor="rgba(255,255,255,0.02)"
      paragraphs={[
        "A collaboration with a Netflix IP isn't a small campaign — it needed creative work polished enough to sit next to a major studio's brand, built fast enough to hit a launch window, and distinct enough to actually drive people into stores for a new flavour.",
        "At the same time, running paid media across Google, Meta, TikTok, and GroundTruth meant the marketing team was checking four different dashboards to answer one question: is this working?",
      ]}
    />

    {/* Features */}
    <section className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: '"DM Serif Display", serif', color: "#fff" }}>
            What We Delivered
          </h2>
        </SectionReveal>
        <FeatureGrid features={features} accentColor={ACCENT} />
      </div>
    </section>

    {/* Testimonial */}
    <section className="mx-6 rounded-xl mb-20 overflow-hidden">
      <TestimonialBand
        quote="Dorit and the team brought creative innovation to our brand — including an AR filter for the Netflix Unicorn Academy collaboration that drove sales increases across our store locations."
        author="Yogen Früz"
        role="Head of Marketing"
        accentColor="#fff"
        background={`linear-gradient(135deg, ${ACCENT}, ${ACCENT_BLUE})`}
      />
    </section>

    {/* Timeline */}
    <section className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2 className="text-2xl font-bold mb-10" style={{ fontFamily: '"DM Serif Display", serif', color: "#fff" }}>
            From Legacy Relationship to Current-Era Capability
          </h2>
        </SectionReveal>
        <Timeline steps={timeline} accentColor={ACCENT} />
      </div>
    </section>

    {/* Impact */}
    <ProseSection
      label="THE IMPACT"
      heading="Proof That Trust and Capability Compound"
      labelColor={ACCENT}
      mutedColor="rgba(255,255,255,0.6)"
      bgColor="rgba(255,255,255,0.02)"
      paragraphs={[
        "The Netflix collaboration's AR filter drove a verified sales lift on the new flavour it promoted — approved for publication precisely because it's real, not rounded up.",
        "The analytics dashboard means the marketing team now answers \"is this working?\" by looking at one screen instead of four. And the relationship itself is the real result: a brand that trusted Lumin8 in the legacy era is the same brand running on the current AI-accelerated build system today.",
      ]}
    />

    {/* CTA */}
    <section className="px-6 pb-24">
      <div className="max-w-5xl mx-auto text-center">
        <SectionReveal>
          <p className="text-sm font-mono uppercase tracking-wider mb-4" style={{ color: ACCENT }}>
            Every asset Yogen Früz owns is theirs outright — the ongoing relationship is a choice, not a lock-in.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: '"DM Serif Display", serif', color: "#fff" }}>
            Ready for creative that performs?
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Let's talk about your network's next campaign.
          </p>
          <Link
            to="/contact?need=franchise"
            className="inline-flex items-center gap-2 font-heading font-semibold text-sm px-8 py-3 rounded-full transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: ACCENT, color: "#fff" }}
          >
            Start a Conversation →
          </Link>
        </SectionReveal>
      </div>
    </section>
  </CaseStudyLayout>
);

export default YogenFruz;
