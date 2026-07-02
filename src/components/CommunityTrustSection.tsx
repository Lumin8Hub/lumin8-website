import SectionReveal from "./animations/SectionReveal";

// REVIEW: "Most of our new work comes through referral" is a reasonable inference
// from the brief's community-first go-to-market description, not a verified stat —
// confirm this framing is accurate before publishing.
const stats = [
  { value: "50+", label: "Websites built" },
  { value: "$500K+", label: "Ad spend managed" },
  { value: "3", label: "Cities: Toronto, Montreal & NYC" },
];

const CommunityTrustSection = () => (
  <section className="bg-lumin8-off-white py-24 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <SectionReveal>
        <h2 className="section-headline text-lumin8-black mx-auto mb-4">Toronto-based. Community-rooted.</h2>
        <p className="section-subheadline mx-auto text-center text-lumin8-gray-600 mb-12">
          Most of our new work comes through referral — from the businesses, franchises, and community
          organizations we've already worked with across the GTA.
        </p>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading font-bold text-3xl text-lumin8-black">{s.value}</div>
              <div className="text-sm text-lumin8-gray-600 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default CommunityTrustSection;
