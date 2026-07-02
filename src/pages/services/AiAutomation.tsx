import ServicePageLayout from "@/components/ServicePageLayout";
import { getServiceBySlug } from "@/data/services";

const AiAutomation = () => <ServicePageLayout service={getServiceBySlug("ai-automation")!} />;

export default AiAutomation;
