import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TALLY_FORMS } from "@/lib/tally";
import lumin8Logo from "@/assets/lumin8-logo.png";

const expectations = [
  { icon: "📄", label: "3–5 pages" },
  { icon: "🔄", label: "2 revision rounds" },
  { icon: "⚡", label: "10 business days" },
  { icon: "⏰", label: "48hr feedback window" },
];

const OnboardingPage = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const loadForm = () => {
      if (window.Tally && formRef.current) {
        window.Tally.loadEmbeds();
        setIsLoaded(true);
      }
    };

    if (window.Tally) {
      loadForm();
    } else {
      const checkInterval = setInterval(() => {
        if (window.Tally) {
          loadForm();
          clearInterval(checkInterval);
        }
      }, 200);
      const timeout = setTimeout(() => clearInterval(checkInterval), 10000);
      return () => {
        clearInterval(checkInterval);
        clearTimeout(timeout);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-4 pt-16 pb-8 text-center">
        <Link
          to="/"
          className="inline-block mb-8 opacity-80 hover:opacity-100 transition-opacity"
        >
          <img src={lumin8Logo} alt="LUMIN8" className="h-8 w-auto mx-auto" />
        </Link>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Let's Build Your Site in 10 Days
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Fill out this onboarding form (15–20 minutes) and we'll start
          drafting your copy on Day 2. The more detail you give now, the
          fewer revisions later.
        </p>
      </div>

      {/* Expectations bar */}
      <div className="max-w-3xl mx-auto px-4 pb-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {expectations.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 bg-muted px-4 py-2 rounded-lg border border-foreground/[0.08]"
            >
              <span className="text-sm">{item.icon}</span>
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tally form embed */}
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <div
          ref={formRef}
          className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <iframe
            data-tally-src={`https://tally.so/embed/${TALLY_FORMS.CLIENT_ONBOARDING}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
            loading="lazy"
            width="100%"
            height="500"
            frameBorder={0}
            title="Lumin8 Starter Onboarding Form"
            style={{ border: "none" }}
          />
        </div>

        {/* Loading state */}
        {!isLoaded && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-muted-foreground text-sm">Loading your onboarding form...</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="max-w-3xl mx-auto px-4 pb-12 text-center">
        <p className="text-muted-foreground/50 text-sm">
          Questions? Email us at{" "}
          <a
            href="mailto:hello@lumin8.agency"
            className="text-primary hover:underline"
          >
            hello@lumin8.agency
          </a>
        </p>
      </div>
    </div>
  );
};

export default OnboardingPage;
