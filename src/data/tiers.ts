// REVIEW: the representative-services list per tier is a judgment call distilling
// the architecture doc's service assignments into short bullets — confirm the
// framing (especially Launch including AI/automation builds) before launch.
export interface Tier {
  name: "Launch" | "Grow" | "Partner";
  framing: string;
  promise: string;
  services: string[];
  priceSignal: string;
  href: string;
}

export const tiers: Tier[] = [
  {
    name: "Launch",
    framing: "Fixed-scope projects that get you live, fast.",
    promise: "A custom website or application, strategically built and fully yours.",
    services: ["Custom websites & rebuilds", "E-commerce & ticketing platforms", "Brand systems", "AI & automation builds"],
    priceSignal: "Projects from $5,000",
    href: "/services/websites",
  },
  {
    name: "Grow",
    framing: "Monthly marketing partnership that compounds.",
    promise: "Paid media, content, and analytics run by senior strategists — with reporting you'll actually read.",
    services: ["Paid media management", "Content & email", "SEO & analytics", "Custom reporting dashboards"],
    priceSignal: "Retainers from $3,000/month",
    href: "/services/performance-marketing",
  },
  {
    name: "Partner",
    framing: "Embedded strategic team for multi-location and complex brands.",
    promise: "Marketing leadership, franchise programs, and cross-functional direction — one team, no vendor sprawl.",
    services: ["Fractional CMO leadership", "Franchise network programs", "Embedded strategic teams", "Board-level reporting"],
    priceSignal: "Custom engagements",
    href: "/services/fractional-cmo",
  },
];
