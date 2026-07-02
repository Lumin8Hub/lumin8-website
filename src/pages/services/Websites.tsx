import ServicePageLayout from "@/components/ServicePageLayout";
import { getServiceBySlug } from "@/data/services";

const Websites = () => <ServicePageLayout service={getServiceBySlug("websites")!} />;

export default Websites;
