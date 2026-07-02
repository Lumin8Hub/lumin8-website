import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import WorkIndex from "./pages/work/WorkIndex.tsx";
import EarthSong from "./pages/work/EarthSong.tsx";
import UnapologeticallyJewish from "./pages/work/UnapologeticallyJewish.tsx";
import Sportball from "./pages/work/Sportball.tsx";
import JillianRodak from "./pages/work/JillianRodak.tsx";
import YogenFruz from "./pages/work/YogenFruz.tsx";
import ServicesHub from "./pages/services/ServicesHub.tsx";
import Websites from "./pages/services/Websites.tsx";
import PerformanceMarketing from "./pages/services/PerformanceMarketing.tsx";
import BrandingContent from "./pages/services/BrandingContent.tsx";
import AiAutomation from "./pages/services/AiAutomation.tsx";
import FractionalCmo from "./pages/services/FractionalCmo.tsx";
import Franchise from "./pages/Franchise.tsx";
import HowWeWork from "./pages/HowWeWork.tsx";
import About from "./pages/About.tsx";
import InsightsHub from "./pages/insights/InsightsHub.tsx";
import InsightArticle from "./pages/insights/InsightArticle.tsx";
import Contact from "./pages/Contact.tsx";
import Terms from "./pages/Terms.tsx";
import Privacy from "./pages/Privacy.tsx";

const queryClient = new QueryClient();

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={baseUrl}>
        <Routes>
          <Route path="/" element={<Index />} />

          <Route path="/services" element={<ServicesHub />} />
          <Route path="/services/websites" element={<Websites />} />
          <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
          <Route path="/services/branding-content" element={<BrandingContent />} />
          <Route path="/services/ai-automation" element={<AiAutomation />} />
          <Route path="/services/fractional-cmo" element={<FractionalCmo />} />

          <Route path="/franchise" element={<Franchise />} />

          <Route path="/work" element={<WorkIndex />} />
          <Route path="/work/earth-song" element={<EarthSong />} />
          <Route path="/work/unapologetically-jewish" element={<UnapologeticallyJewish />} />
          <Route path="/work/sportball" element={<Sportball />} />
          <Route path="/work/jillian-rodak" element={<JillianRodak />} />
          <Route path="/work/yogen-fruz" element={<YogenFruz />} />

          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/about" element={<About />} />

          <Route path="/insights" element={<InsightsHub />} />
          <Route path="/insights/:slug" element={<InsightArticle />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />

          {/* Legacy URL redirects */}
          <Route path="/portfolio" element={<Navigate to="/work" replace />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
