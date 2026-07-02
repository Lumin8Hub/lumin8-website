import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import SectionReveal from "@/components/animations/SectionReveal";

const sections = [
  { heading: "Agreement to Terms", body: "By using this website or engaging Lumin8 for services, you agree to these terms." },
  { heading: "Services", body: "Lumin8 provides web design, development, marketing, and related digital services under individually scoped engagement agreements." },
  { heading: "Ownership & Intellectual Property", body: "Upon full payment, clients receive full ownership of the deliverables built for them, as detailed in their engagement agreement." },
  { heading: "Payment Terms", body: "Payment terms are set out per engagement and confirmed in writing before work begins." },
  { heading: "Limitation of Liability", body: "Lumin8's liability is limited as set out in individual client agreements." },
  { heading: "Governing Law", body: "These terms are governed by the laws of the Province of Ontario, Canada." },
];

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo title="Terms & Conditions" description="Lumin8's terms and conditions of service." path="/terms" />
      <Navbar />
      {/* REVIEW: legal copy below is placeholder structure only — needs review by counsel before launch */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <SectionReveal>
            <h1 className="section-headline text-foreground mb-4">Terms &amp; Conditions</h1>
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

export default Terms;
