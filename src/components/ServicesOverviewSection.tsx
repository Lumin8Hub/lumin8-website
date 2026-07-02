import SectionReveal from "./animations/SectionReveal";
import TierTable from "./TierTable";

const ServicesOverviewSection = () => (
  <section className="bg-lumin8-off-white py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionReveal className="text-center">
        <h2 className="section-headline text-lumin8-black mx-auto">Three ways to turn the lights on.</h2>
        <p className="section-subheadline mx-auto text-center text-lumin8-gray-600">
          Every engagement is led by principals — project-based or retained, scoped to where your business is
          today.
        </p>
      </SectionReveal>

      <TierTable className="mt-16" theme="light" />
    </div>
  </section>
);

export default ServicesOverviewSection;
