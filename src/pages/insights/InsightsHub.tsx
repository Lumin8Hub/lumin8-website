import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import SectionReveal from "@/components/animations/SectionReveal";
import GlowCard from "@/components/animations/GlowCard";
import { insights, type InsightCategory } from "@/data/insights";

const categories: InsightCategory[] = ["AI & Marketing", "Franchise Growth", "Web & Brand", "Toronto Business"];

const sorted = [...insights].sort((a, b) => (a.date < b.date ? 1 : -1));

const InsightsHub = () => {
  const [category, setCategory] = useState<InsightCategory | null>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featured = sorted[0];
  const rest = useMemo(
    () => sorted.slice(1).filter((a) => !category || a.category === category),
    [category],
  );

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // REVIEW: wire to MailerLite once the list ID / API key are confirmed.
    setSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Insights"
        description="Thinking on AI-accelerated marketing, franchise growth, web and brand strategy, and Toronto business — from the people who do the work."
        path="/insights"
      />
      <Navbar />

      <section className="pt-40 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <h1 className="section-headline text-foreground mb-4">Insights</h1>
            <p className="section-subheadline mb-10">
              Thinking on AI, franchise growth, web and brand, and Toronto business.
            </p>
          </SectionReveal>

          {/* Featured article */}
          <SectionReveal delay={0.1}>
            <Link to={`/insights/${featured.slug}`} className="block group mb-12">
              <GlowCard className="bg-muted/30 rounded-2xl p-8 md:p-10 border border-foreground/[0.08]">
                <span className="font-mono text-[11px] uppercase tracking-wider text-primary mb-3 block">
                  Featured &middot; {featured.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="text-lumin8-gray-400 leading-relaxed mb-4 max-w-2xl">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  By {featured.author}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </GlowCard>
            </Link>
          </SectionReveal>

          {/* Category filters */}
          <SectionReveal delay={0.15}>
            <div className="flex flex-wrap gap-2 mb-10">
              <button
                onClick={() => setCategory(null)}
                className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-colors ${
                  category === null
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-foreground/15 text-foreground/60 hover:border-foreground/30"
                }`}
              >
                All
              </button>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(category === c ? null : c)}
                  className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-colors ${
                    category === c
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-foreground/15 text-foreground/60 hover:border-foreground/30"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </SectionReveal>

          {/* Article grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {rest.map((article) => (
              <Link key={article.slug} to={`/insights/${article.slug}`} className="block h-full group">
                <div className="bg-muted/30 rounded-2xl p-6 h-full border border-foreground/[0.06] flex flex-col transition-colors group-hover:border-primary/30">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-primary mb-3">
                    {article.category}
                  </span>
                  <h3 className="font-heading font-bold text-foreground mb-2 leading-snug">{article.title}</h3>
                  <p className="text-sm text-lumin8-gray-400 leading-relaxed flex-1">{article.excerpt}</p>
                  <span className="text-xs text-lumin8-gray-400 mt-4">By {article.author}</span>
                </div>
              </Link>
            ))}
            {rest.length === 0 && <p className="text-lumin8-gray-400">No articles in this category yet.</p>}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 py-20 bg-lumin8-off-white">
        <div className="max-w-xl mx-auto text-center">
          <SectionReveal>
            <h2 className="text-2xl font-heading font-bold text-lumin8-black mb-2">Not another newsletter.</h2>
            <p className="text-lumin8-gray-600 leading-relaxed mb-6">
              No weekly filler. Just the occasional real thing worth reading, sent when we have one.
            </p>
            {subscribed ? (
              <p className="text-primary font-semibold">You're in. Talk soon.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 rounded-full border border-lumin8-black/15 px-5 py-3 text-sm text-lumin8-black bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground font-heading font-semibold text-sm px-6 py-3 rounded-full hover:scale-[1.03] transition-transform"
                >
                  Sign Up
                </button>
              </form>
            )}
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InsightsHub;
