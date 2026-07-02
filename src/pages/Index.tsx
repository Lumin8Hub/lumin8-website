import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import DifferenceSection from "@/components/DifferenceSection";
import ServicesOverviewSection from "@/components/ServicesOverviewSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FranchiseStrip from "@/components/FranchiseStrip";
import TestimonialsSection from "@/components/TestimonialsSection";
import CommunityTrustSection from "@/components/CommunityTrustSection";
import InsightsTeaser from "@/components/InsightsTeaser";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Seo
        title="Lumin8 — Toronto Digital Marketing & Web Design Agency"
        description="Lumin8 is a Toronto digital agency that builds websites, brands, and marketing engines — with senior strategy and AI-accelerated delivery that moves at the speed your business actually needs."
        path="/"
        jsonLd={[organizationSchema, localBusinessSchema]}
      />
      <Navbar />
      <Hero />
      <SocialProofBar />
      <DifferenceSection />
      <ServicesOverviewSection />
      <CaseStudiesSection />
      <FranchiseStrip />
      <TestimonialsSection />
      <CommunityTrustSection />
      <InsightsTeaser />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
