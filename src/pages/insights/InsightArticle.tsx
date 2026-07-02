import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import SectionReveal from "@/components/animations/SectionReveal";
import { insights } from "@/data/insights";
import { articleSchema } from "@/lib/schema";

const InsightArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = insights.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) return <NotFound />;

  const formattedDate = new Date(article.date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={article.title}
        description={article.excerpt}
        path={`/insights/${article.slug}`}
        jsonLd={articleSchema({
          title: article.title,
          description: article.excerpt,
          path: `/insights/${article.slug}`,
          author: article.author,
          datePublished: article.date,
        })}
      />
      <Navbar />

      <article className="pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          {/* REVIEW: draft pending principal sign-off before this article goes live */}
          <div className="mb-8 rounded-lg border border-primary/30 bg-primary/[0.06] px-4 py-2 text-xs font-mono text-primary">
            REVIEW: draft pending principal sign-off
          </div>

          <Link to="/insights" className="inline-flex items-center gap-2 text-sm text-lumin8-gray-400 hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            All Insights
          </Link>

          <SectionReveal>
            <span className="font-mono text-[11px] uppercase tracking-wider text-primary mb-3 block">{article.category}</span>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 leading-tight">{article.title}</h1>
            <div className="flex items-center gap-2 text-sm text-lumin8-gray-400 mb-12">
              <span>By {article.author}</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime={article.date}>{formattedDate}</time>
            </div>
          </SectionReveal>

          <div className="space-y-8">
            {article.body.map((section, i) => (
              <SectionReveal key={i} delay={Math.min(i * 0.05, 0.3)}>
                {section.heading && (
                  <h2 className="text-xl font-heading font-bold text-foreground mb-4 mt-2">{section.heading}</h2>
                )}
                <div className="space-y-4">
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-lumin8-gray-300 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </SectionReveal>
            ))}
          </div>

          {article.relatedCaseSlug && (
            <SectionReveal delay={0.2}>
              <Link
                to={article.relatedCaseSlug}
                className="inline-flex items-center gap-2 mt-12 text-primary font-heading font-semibold text-sm hover:gap-3 transition-all"
              >
                Related reading
                <ArrowRight className="w-4 h-4" />
              </Link>
            </SectionReveal>
          )}

          {/* Newsletter capture */}
          <div className="mt-16 pt-10 border-t border-foreground/[0.08] text-center">
            <SectionReveal>
              <h3 className="font-heading font-bold text-foreground mb-2">Not another newsletter.</h3>
              <p className="text-sm text-lumin8-gray-400 mb-6">
                No weekly filler. Just the occasional real thing worth reading.
              </p>
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold text-sm px-6 py-3 rounded-full hover:scale-[1.03] transition-transform"
              >
                Read More Insights
              </Link>
            </SectionReveal>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default InsightArticle;
