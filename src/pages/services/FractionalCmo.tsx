import ServicePageLayout from "@/components/ServicePageLayout";
import { getServiceBySlug } from "@/data/services";

const FractionalCmo = () => <ServicePageLayout service={getServiceBySlug("fractional-cmo")!} />;

export default FractionalCmo;
