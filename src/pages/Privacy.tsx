import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import SectionReveal from "@/components/animations/SectionReveal";

const sections = [
  { heading: "Information We Collect", body: "We collect information you provide directly, such as your name, email, and message, when you fill out a form on this site." },
  { heading: "How We Use Information", body: "We use the information you provide to respond to inquiries, deliver services, and — with your consent — send occasional updates." },
  { heading: "Third-Party Services", body: "This site uses third-party form and CRM tools to process inquiries. Your information is handled according to those providers' own privacy practices." },
  { heading: "Data Retention", body: "We retain contact information for as long as needed to respond to your inquiry or deliver services, or as required by law." },
  { heading: "Your Rights", body: "You may request access to, correction of, or deletion of your personal information at any time by emailing hello@lumin8.agency." },
  { heading: "Contact", body: "Questions about this policy can be directed to hello@lumin8.agency." },
];

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo title="Privacy Policy" description="Lumin8's privacy policy." path="/privacy" />
      <Navbar />
      {/* REVIEW: legal copy below is placeholder structure only — needs review by counsel before launch */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <SectionReveal>
            <h1 className="section-headline text-foreground mb-4">Privacy Policy</h1>
            <p className="text-sm text-lumin8-gray-400 mb-12">Last updated: July 2026</p>
            <div className="space-y-8">
              {sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="font-heading font-bold text-lg text-foreground mb-2">{s.heading}</h2>
                  <p className="text-lumin8-gray-400 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Privacy;
