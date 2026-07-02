import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import SectionReveal from "@/components/animations/SectionReveal";
import { featuredCases, galleryProjects, serviceFilters, verticalFilters } from "@/data/work";

type Filter = string | null;

const WorkIndex = () => {
  const shouldReduceMotion = useReducedMotion();
  const [serviceFilter, setServiceFilter] = useState<Filter>(null);
  const [verticalFilter, setVerticalFilter] = useState<Filter>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredCases = useMemo(
    () =>
      featuredCases.filter(
        (c) =>
          (!serviceFilter || c.services.includes(serviceFilter)) &&
          (!verticalFilter || c.verticals.includes(verticalFilter)),
      ),
    [serviceFilter, verticalFilter],
  );

  const filteredGallery = useMemo(
    () =>
      galleryProjects.filter(
        (p) =>
          (!serviceFilter || p.services.includes(serviceFilter)) &&
          (!verticalFilter || p.verticals.includes(verticalFilter)),
      ),
    [serviceFilter, verticalFilter],
  );

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Our Work"
        description="Real results for real businesses — franchise rebrands, festival launches, activist platforms, and more. See how Lumin8 builds."
        path="/work"
      />
      <Navbar />
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="pt-32 pb-12 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h1 className="section-headline text-foreground mb-4">Work that shines in the dark.</h1>
              <p className="section-subheadline mb-10">A few projects that show what we're made of.</p>
            </SectionReveal>

            {/* Filters */}
            <SectionReveal delay={0.1}>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-lumin8-gray-400 self-center mr-2">
                  Service:
                </span>
                {serviceFilters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setServiceFilter(serviceFilter === f ? null : f)}
                    className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-colors ${
                      serviceFilter === f
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-foreground/15 text-foreground/60 hover:border-foreground/30"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-lumin8-gray-400 self-center mr-2">
                  Vertical:
                </span>
                {verticalFilters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setVerticalFilter(verticalFilter === f ? null : f)}
                    className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-colors ${
                      verticalFilter === f
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-foreground/15 text-foreground/60 hover:border-foreground/30"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Featured case grid */}
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            {filteredCases.length === 0 ? (
              <p className="text-lumin8-gray-400">No featured cases match those filters yet.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredCases.map((study, i) => (
                  <motion.div
                    key={study.slug}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link to={`/work/${study.slug}`} className="block group h-full">
                      <div
                        className="rounded-xl bg-muted/30 overflow-hidden transition-all duration-300 group-hover:shadow-lg h-full flex flex-col"
                        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = `0 12px 40px ${study.glowColor}`;
                          e.currentTarget.style.borderColor = `${study.accentColor}40`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = "none";
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                        }}
                      >
                        <div className="h-[3px] w-full" style={{ backgroundColor: study.accentColor }} />
                        <div
                          className="aspect-video w-full flex items-center justify-center"
                          style={{ background: `linear-gradient(135deg, ${study.accentColor}10, ${study.accentColor}05)` }}
                        >
                          <span className="text-3xl font-heading font-bold opacity-15" style={{ color: study.accentColor }}>
                            {study.company}
                          </span>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <h2 className="text-xl font-heading font-bold text-foreground mb-2">{study.company}</h2>
                          <p className="text-sm text-lumin8-gray-400 leading-relaxed mb-3 flex-1">{study.story}</p>
                          <p className="text-sm font-semibold mb-4" style={{ color: study.accentColor }}>
                            {study.metric}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {study.tags.map((tag) => (
                              <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded-full border border-foreground/10 text-foreground/50">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div
                            className="inline-flex items-center gap-2 text-sm font-semibold transition-transform group-hover:translate-x-1"
                            style={{ color: study.accentColor }}
                          >
                            Read Case Study
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Lighter project gallery */}
        <section className="px-6 pb-20 bg-lumin8-off-white py-20">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="section-headline text-lumin8-black mb-10">More Projects</h2>
            </SectionReveal>
            {filteredGallery.length === 0 ? (
              <p className="text-lumin8-gray-600">No gallery projects match those filters yet.</p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredGallery.map((p) => (
                  <div key={p.name} className="bg-foreground rounded-xl p-6 border border-lumin8-black/5 shadow-sm">
                    <h3 className="font-heading font-bold text-lumin8-black mb-2">{p.name}</h3>
                    <p className="text-sm text-lumin8-gray-600 leading-relaxed mb-3">{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded-full border border-lumin8-black/10 text-lumin8-gray-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Capability strip */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <SectionReveal>
              <p className="font-mono text-sm text-lumin8-gray-400 uppercase tracking-wider">
                50+ websites built &middot; $500K+ ad spend managed &middot; Clients across Toronto, Montreal &amp; NYC
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto text-center">
            <SectionReveal>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                Your project could be next.
              </h2>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold text-sm px-8 py-3 rounded-full hover:scale-[1.03] transition-transform"
              >
                Start a Conversation →
              </Link>
            </SectionReveal>
          </div>
        </section>

        <Footer />
      </motion.div>
    </div>
  );
};

export default WorkIndex;
