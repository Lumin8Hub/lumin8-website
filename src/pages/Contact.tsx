import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import SectionReveal from "@/components/animations/SectionReveal";
import { openContactForm } from "@/lib/tally";

const needOptions = ["Website", "Marketing", "Brand & Content", "AI & Automation", "Franchise", "Not sure"];
const budgetOptions = ["Under $5K", "$5K–$15K", "$3K+/month retainer", "$10K+/month partnership"];

const needParamMap: Record<string, string> = {
  website: "Website",
  marketing: "Marketing",
  brand: "Brand & Content",
  ai: "AI & Automation",
  franchise: "Franchise",
};

const inputClass =
  "w-full rounded-lg border border-foreground/15 bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-lumin8-gray-400 focus:outline-none focus:ring-2 focus:ring-primary";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    need: "",
    budget: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const needParam = searchParams.get("need");
    if (needParam && needParamMap[needParam]) {
      setFields((f) => ({ ...f, need: needParamMap[needParam] }));
    }
  }, [searchParams]);

  const handleChange = (key: keyof typeof fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openContactForm(fields);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Contact"
        description="Tell us what you're building — we'll come back within one business day with real thoughts, not a sales script."
        path="/contact"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-12 px-6 relative overflow-hidden">
        <div className="blob blob-lavender w-36 h-36 top-16 -right-10 opacity-25 blur-[50px]" />
        <div className="max-w-2xl mx-auto text-center">
          <SectionReveal>
            <h1 className="section-headline text-foreground mx-auto mb-4">Think we're a good fit?</h1>
            <p className="section-subheadline mx-auto text-center">
              Tell us what you're building — we'll come back within one business day with real thoughts, not a
              sales script.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Form */}
      <section className="px-6 pb-16">
        <div className="max-w-2xl mx-auto">
          {/* REVIEW: confirm Tally form ID + HubSpot Meetings embed URL before launch */}
          {submitted ? (
            <SectionReveal>
              <div className="rounded-2xl border border-primary/30 bg-primary/[0.06] p-10 text-center">
                <h2 className="font-heading font-bold text-xl text-foreground mb-2">Got it — thank you.</h2>
                <p className="text-lumin8-gray-400">
                  If a popup didn't open, email us directly at{" "}
                  <a href="mailto:hello@lumin8.agency" className="text-primary hover:underline">
                    hello@lumin8.agency
                  </a>
                  .
                </p>
              </div>
            </SectionReveal>
          ) : (
            <SectionReveal>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                      Name
                    </label>
                    <input id="name" required value={fields.name} onChange={handleChange("name")} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground/80 mb-2">
                      Company
                    </label>
                    <input id="company" required value={fields.company} onChange={handleChange("company")} className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                      Email
                    </label>
                    <input id="email" type="email" required value={fields.email} onChange={handleChange("email")} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-2">
                      Phone <span className="text-lumin8-gray-400">(optional)</span>
                    </label>
                    <input id="phone" type="tel" value={fields.phone} onChange={handleChange("phone")} className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="need" className="block text-sm font-medium text-foreground/80 mb-2">
                      What do you need?
                    </label>
                    <select id="need" required value={fields.need} onChange={handleChange("need")} className={inputClass}>
                      <option value="" disabled>
                        Select one
                      </option>
                      {needOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-foreground/80 mb-2">
                      Budget range
                    </label>
                    <select id="budget" required value={fields.budget} onChange={handleChange("budget")} className={inputClass}>
                      <option value="" disabled>
                        Select one
                      </option>
                      {budgetOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={fields.message}
                    onChange={handleChange("message")}
                    className={inputClass}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-heading font-bold px-8 py-4 rounded-full hover:scale-[1.01] transition-transform"
                >
                  Send It
                </button>
              </form>
            </SectionReveal>
          )}
        </div>
      </section>

      {/* Alternative paths */}
      <section className="px-6 py-16 bg-lumin8-off-white">
        <div className="max-w-2xl mx-auto text-center">
          <SectionReveal>
            <h2 className="text-xl font-heading font-bold text-lumin8-black mb-6">Other ways to reach us</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              {/* REVIEW: confirm HubSpot Meetings embed URL */}
              <a href="#" className="text-primary hover:underline font-semibold">
                Book a call directly
              </a>
              <a href="mailto:hello@lumin8.agency" className="text-lumin8-gray-600 hover:text-lumin8-black transition-colors">
                hello@lumin8.agency
              </a>
              <div className="flex gap-4">
                <a href="https://linkedin.com/company/lumin8-digital-agency" target="_blank" rel="noopener noreferrer" className="text-lumin8-gray-600 hover:text-lumin8-black transition-colors">
                  LinkedIn
                </a>
                <a href="https://instagram.com/lumin8.agency" target="_blank" rel="noopener noreferrer" className="text-lumin8-gray-600 hover:text-lumin8-black transition-colors">
                  Instagram
                </a>
                <a href="https://facebook.com/lumin8digitalagency" target="_blank" rel="noopener noreferrer" className="text-lumin8-gray-600 hover:text-lumin8-black transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Reassurance strip */}
      <section className="px-6 py-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-xs text-lumin8-gray-400 uppercase tracking-wider">
            No discovery-call gauntlet &middot; No obligation &middot; Full ownership of everything we build
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
