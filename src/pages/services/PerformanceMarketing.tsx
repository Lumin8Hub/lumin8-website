import ServicePageLayout from "@/components/ServicePageLayout";
import { getServiceBySlug } from "@/data/services";

const PerformanceMarketing = () => <ServicePageLayout service={getServiceBySlug("performance-marketing")!} />;

export default PerformanceMarketing;
