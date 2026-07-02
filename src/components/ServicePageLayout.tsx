import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import SectionReveal from "@/components/animations/SectionReveal";
import GlowCard from "@/components/animations/GlowCard";
import MagneticButton from "@/components/animations/MagneticButton";
import Timeline from "@/components/casestudy/Timeline";
import TestimonialBand from "@/components/casestudy/TestimonialBand";
import { processSteps } from "@/data/process";
import { serviceSchema } from "@/lib/schema";
import type { ServiceData } from "@/data/services";

// REVIEW: the ownership/no-lock-in pillar block below renders identically on
// every service page by design (per the pre-launch checklist requirement) —
// confirm the generic wording fits all 5 services rather than a per-service line.
const ServicePageLayout = ({ service }: { service: ServiceData }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service.slug]);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        jsonLd={serviceSchema({
          name: service.navLabel,
          description: service.metaDescription,
          path: `/services/${service.slug}`,
        })}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="blob blob-green w-36 h-36 top-16 -right-10 opacity-30 blur-[50px]" />
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <span className="section-label justify-center">Services</span>
            <h1 className="section-headline text-foreground mx-auto mb-4">{service.heroHeadline}</h1>
            <p className="section-subheadline mx-auto text-center mb-6">{service.heroSub}</p>
            <span className="inline-block font-mono text-xs uppercase tracking-wider text-primary border border-primary/30 rounded-full px-4 py-1.5">
              {service.priceSignal}
            </span>
          </SectionReveal>
        </div>
      </section>

      {/* Intro / objection reframe / credibility frame */}
      {service.intro && (
        <section className="px-6 pb-8">
          <div className="max-w-3xl mx-auto">
            <SectionReveal>
              {service.intro.heading && (
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">{service.intro.heading}</h2>
              )}
              <div className="space-y-4">
                {service.intro.paragraphs.map((p, i) => (
                  <p key={i} className="text-lumin8-gray-400 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>
      )}

      {/* Grid sections */}
      {service.gridSections.map((section) => (
        <section key={section.heading} className="px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <SectionReveal>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">{section.heading}</h2>
            </SectionReveal>
            <div className="grid sm:grid-cols-2 gap-5">
              {section.items.map((item) => (
                <GlowCard
                  key={item.title}
                  className="bg-muted/30 rounded-2xl p-6 border border-foreground/[0.06]"
                >
                  <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-lumin8-gray-400 leading-relaxed">{item.description}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Proof block */}
      {service.proof && (
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-8 md:p-10">
                <h2 className="text-xl font-heading font-bold text-foreground mb-4">{service.proof.heading}</h2>
                <p className="text-lumin8-gray-400 leading-relaxed">{service.proof.body}</p>
              </div>
            </SectionReveal>
          </div>
        </section>
      )}

      {/* Personas (Fractional CMO) */}
      {service.personas && (
        <section className="px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <SectionReveal>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">Who It's For</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-5">
              {service.personas.map((p) => (
                <div key={p.title} className="bg-muted/30 rounded-2xl p-6 border border-foreground/[0.06]">
                  <h3 className="font-heading font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-lumin8-gray-400 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Notes / callouts */}
      {service.notes?.map((note) => (
        <section key={note.heading} className="px-6 py-6">
          <div className="max-w-3xl mx-auto">
            <SectionReveal>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-heading font-semibold text-foreground mb-1">{note.heading}</h3>
                <p className="text-lumin8-gray-400 leading-relaxed">{note.body}</p>
              </div>
            </SectionReveal>
          </div>
        </section>
      ))}

      {/* How it connects (Fractional CMO) */}
      {service.howItConnects && (
        <section className="px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <SectionReveal>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">{service.howItConnects.heading}</h2>
              <p className="text-lumin8-gray-400 leading-relaxed">{service.howItConnects.body}</p>
            </SectionReveal>
          </div>
        </section>
      )}

      {/* Process strip */}
      {service.showProcess && (
        <section className="px-6 py-16 bg-muted/20">
          <div className="max-w-3xl mx-auto">
            <SectionReveal>
              <span className="section-label">Process</span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-10">
                From brief to full ownership handoff
              </h2>
            </SectionReveal>
            <Timeline steps={processSteps.map((s) => ({ phase: s.phase, title: s.title, description: s.description }))} accentColor="#79cac1" />
          </div>
        </section>
      )}

      {/* Featured cases */}
      {service.featuredCases && service.featuredCases.length > 0 && (
        <section className="px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <SectionReveal>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">Featured Work</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-5">
              {service.featuredCases.map((c) => {
                const content = (
                  <div className="bg-muted/30 rounded-2xl p-6 border border-foreground/[0.06] h-full flex flex-col group">
                    <h3 className="font-heading font-semibold text-foreground mb-2">{c.name}</h3>
                    <p className="text-sm text-lumin8-gray-400 leading-relaxed flex-1">{c.blurb}</p>
                    {c.slug && (
                      <span className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                        View case study
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                );
                return c.slug ? (
                  <Link key={c.name} to={c.slug} className="block h-full">
                    {content}
                  </Link>
                ) : (
                  <div key={c.name} className="h-full">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {service.testimonial && (
        <TestimonialBand
          quote={service.testimonial.quote}
          author={service.testimonial.author}
          role={service.testimonial.role}
          accentColor="#fff"
          background="linear-gradient(135deg, rgba(121,202,193,0.15), rgba(163,113,247,0.1))"
        />
      )}

      {/* Ownership pillar — present on every service page */}
      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <SectionReveal>
            <div className="flex items-center justify-center gap-2 text-primary font-heading font-semibold mb-2">
              <Check className="w-5 h-5" />
              You own everything we build
            </div>
            <p className="text-lumin8-gray-400 leading-relaxed">
              Full ownership transfer, every time. No lock-in, no hostage websites, no dependency on us to make
              a change.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* CTA + upgrade path */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="blob blob-pink w-40 h-40 -bottom-10 left-[15%] opacity-20 blur-[60px]" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <SectionReveal>
            <MagneticButton
              as="link"
              to="/contact"
              className="bg-primary text-primary-foreground font-heading font-bold px-10 py-4 rounded-full text-lg inline-block"
            >
              {service.ctaText}
            </MagneticButton>
            <p className="text-sm text-lumin8-gray-400 mt-8 leading-relaxed">
              {service.upgradeLine}{" "}
              {service.upgradeLinks.map((l, i) => (
                <span key={l.href}>
                  <Link to={l.href} className="text-primary hover:underline">
                    {l.label}
                  </Link>
                  {i < service.upgradeLinks.length - 1 ? " · " : ""}
                </span>
              ))}
            </p>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePageLayout;
