import ServicePageLayout from "@/components/ServicePageLayout";
import { getServiceBySlug } from "@/data/services";

const BrandingContent = () => <ServicePageLayout service={getServiceBySlug("branding-content")!} />;

export default BrandingContent;
