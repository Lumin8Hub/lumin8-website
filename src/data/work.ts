export interface FeaturedCase {
  slug: string;
  company: string;
  story: string;
  metric: string;
  accentColor: string;
  glowColor: string;
  tags: string[];
  services: string[];
  verticals: string[];
}

export interface GalleryProject {
  name: string;
  description: string;
  tags: string[];
  services: string[];
  verticals: string[];
  url?: string;
}

export const featuredCases: FeaturedCase[] = [
  {
    slug: "sportball",
    company: "Sportball",
    story: "Full-funnel rebrand, multi-location CMS, and performance marketing for a 20+ location children's sports franchise.",
    metric: "60%+ CAC reduction",
    accentColor: "#00A3E0",
    glowColor: "rgba(0,163,224,0.15)",
    tags: ["Rebrand", "Franchise", "CMS", "Performance Marketing"],
    services: ["Web", "Brand", "Performance"],
    verticals: ["Franchise"],
  },
  {
    slug: "earth-song",
    company: "Earth Song Festival",
    story: "Nature-inspired website and brand identity for a ceremonial festival retreat.",
    metric: "11 days to live ticket sales",
    accentColor: "#2D5016",
    glowColor: "rgba(45,80,22,0.15)",
    tags: ["Festival", "Ticketing", "React", "Supabase", "MailerLite"],
    services: ["Web", "Brand"],
    verticals: ["Events"],
  },
  {
    slug: "jillian-rodak",
    company: "Jillian Rodak",
    story: "Personal brand website and full ownership transfer for a career coach launching her own practice.",
    metric: "3 clients booked in week one",
    accentColor: "#C07D2B",
    glowColor: "rgba(192,125,43,0.15)",
    tags: ["Personal Brand", "Solopreneur", "Full Ownership"],
    services: ["Web", "Brand"],
    verticals: ["Professional Services"],
  },
  {
    slug: "unapologetically-jewish",
    company: "Unapologetically Jewish",
    story: "Bold community platform with e-commerce and donation integration.",
    metric: "5x engagement increase",
    accentColor: "#DC2626",
    glowColor: "rgba(220,38,38,0.15)",
    tags: ["Nonprofit", "Activism", "E-Commerce", "Donations"],
    services: ["Web", "Brand"],
    verticals: ["Community"],
  },
  {
    slug: "yogen-fruz",
    company: "Yogen Früz",
    story: "AR filter for the Netflix Unicorn Academy collaboration and an ongoing analytics dashboard across four ad platforms.",
    metric: "Verified sales lift",
    accentColor: "#EC008C",
    glowColor: "rgba(236,0,140,0.15)",
    tags: ["Franchise", "AI/Automation", "Dashboards", "Creative"],
    services: ["Performance", "AI/Automation", "Brand"],
    verticals: ["Franchise"],
  },
];

export const galleryProjects: GalleryProject[] = [
  {
    name: "Precedent AI",
    description: "Website for a legal-AI consultancy, built to read as credible in the professional AI space.",
    tags: ["Website", "AI"],
    services: ["Web", "AI/Automation"],
    verticals: ["Professional Services"],
  },
  {
    name: "ChaiTech / OJSN",
    description: "Institutional WordPress rebuild off a locked Webflow site.",
    tags: ["WordPress", "Migration"],
    services: ["Web"],
    verticals: ["Community"],
  },
  {
    name: "Garage Door Beasts",
    description: "A productized B2B outbound automation system built on LinkedIn Sales Navigator and La Growth Machine.",
    tags: ["B2B", "Automation"],
    services: ["AI/Automation"],
    verticals: ["Trades"],
  },
  {
    name: "Modelly",
    description: "Website and brand presence for an emerging creative platform.",
    tags: ["Website", "Brand"],
    services: ["Web", "Brand"],
    verticals: ["Professional Services"],
  },
  {
    name: "Art Restart",
    description: "A regulatory-aware website built within Ontario psychotherapy scope requirements.",
    tags: ["Website", "Compliance"],
    services: ["Web"],
    verticals: ["Wellness"],
  },
  {
    name: "ACS Landscape Construction",
    description: "A trades-focused website built to generate and qualify local leads.",
    tags: ["Website", "Local SEO"],
    services: ["Web", "Performance"],
    verticals: ["Trades"],
  },
  {
    name: "Gifts From Yoga",
    description: "E-commerce presence for a wellness-focused product line.",
    tags: ["E-Commerce", "Wellness"],
    services: ["Web"],
    verticals: ["Wellness"],
  },
  {
    name: "Mirallor",
    description: "Brand and web presence for an emerging product brand.",
    tags: ["Website", "Brand"],
    services: ["Web", "Brand"],
    verticals: ["Professional Services"],
  },
  {
    name: "Still Life Retreat / Roaring Twenties",
    description: "Multi-platform campaign and event site for a themed community gathering.",
    tags: ["Campaign", "Events"],
    services: ["Brand", "Performance"],
    verticals: ["Events", "Community"],
  },
];

// REVIEW: add PartyWithMe to galleryProjects once that site is live.
export const serviceFilters = ["Web", "Brand", "Performance", "AI/Automation"] as const;
export const verticalFilters = ["Franchise", "Events", "Professional Services", "Community", "Trades", "Wellness"] as const;
