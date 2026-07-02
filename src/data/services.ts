export interface ServiceCaseRef {
  name: string;
  blurb: string;
  /** Only set when a full /work/{slug} case study page exists to link to. */
  slug?: string;
}

export interface ServiceGridSection {
  heading: string;
  items: { title: string; description: string }[];
}

export interface ServiceTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface ServiceNote {
  heading: string;
  body: string;
}

export interface ServiceData {
  slug: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSub: string;
  priceSignal: string;
  intro?: { heading?: string; paragraphs: string[] };
  gridSections: ServiceGridSection[];
  proof?: { heading: string; body: string };
  showProcess?: boolean;
  personas?: { title: string; description: string }[];
  featuredCases?: ServiceCaseRef[];
  testimonial?: ServiceTestimonial;
  notes?: ServiceNote[];
  howItConnects?: { heading: string; body: string };
  upgradeLine: string;
  upgradeLinks: { label: string; href: string }[];
  ctaText: string;
}

// REVIEW: which case studies are featured on each service page (and the specific
// blurb angle chosen for each) is an editorial judgment call — confirm these are
// the strongest proof points per service before launch.
export const services: ServiceData[] = [
  {
    slug: "websites",
    navLabel: "Websites & Digital Platforms",
    metaTitle: "Custom Website Development — Toronto",
    metaDescription:
      "Custom-designed, conversion-built websites and digital platforms, fully owned by you. From $5,000. Toronto-based, AI-accelerated, human-refined.",
    heroHeadline: "Websites that work as hard as you do.",
    heroSub: "Custom-designed, conversion-built, fully owned by you.",
    priceSignal: "From $5,000",
    intro: {
      paragraphs: [
        "Building a website is easy now. Building one that positions your business, converts visitors, and actually integrates with how you operate — that's the part templates and page builders skip.",
        "That's the gap between a site that looks fine and a site that works. We build the second kind.",
      ],
    },
    gridSections: [
      {
        heading: "What We Build",
        items: [
          { title: "Marketing sites & rebrands", description: "Custom-designed sites built to position and convert, not just exist." },
          { title: "E-commerce", description: "Shopify, WooCommerce, and Stripe-powered stores built to sell." },
          { title: "Event & ticketing platforms", description: "Stripe checkout, waivers, and MailerLite integration for live events." },
          { title: "Membership & community platforms", description: "Gated content, member accounts, and community tools." },
          { title: "Migrations & rescues", description: "Webflow-to-WordPress moves and legacy CMS rescues, done cleanly." },
        ],
      },
    ],
    proof: {
      heading: "Built in the environment that fits your team",
      body: "Stripe, Supabase, HubSpot, MailerLite, Brevo, Zapier, ManyChat — we integrate with the tools you already run on. We build in React + Vite or WordPress/Elementor, whichever fits your team, not our preferences.",
    },
    showProcess: true,
    featuredCases: [
      { name: "Earth Song Festival", blurb: "Full-stack ticketing platform, live in 11 days.", slug: "/work/earth-song" },
      { name: "ChaiTech / OJSN", blurb: "Institutional WordPress rebuild off a locked Webflow site." },
      { name: "Unapologetically Jewish", blurb: "Donations, e-commerce, and mobilization in one platform.", slug: "/work/unapologetically-jewish" },
    ],
    testimonial: {
      quote: "Lumin8 delivered a beautiful, professional website that perfectly captures our brand. The process was seamless and fast.",
      author: "Shannon Leroux",
      role: "Earth Song Festival, Founder",
    },
    upgradeLine: "Many website clients continue into performance marketing and content once the site is live.",
    upgradeLinks: [
      { label: "Performance Marketing", href: "/services/performance-marketing" },
      { label: "Branding & Creative Content", href: "/services/branding-content" },
    ],
    ctaText: "Start Your Build",
  },
  {
    slug: "performance-marketing",
    navLabel: "Performance Marketing",
    metaTitle: "Performance Marketing Agency — Toronto",
    metaDescription:
      "Paid media, content, and analytics run by senior strategists — with reporting you'll actually read. Retainers from $3,000/month.",
    heroHeadline: "Marketing that proves itself.",
    heroSub: "Paid media, content, and analytics run by senior strategists — with reporting you'll actually read.",
    priceSignal: "Retainers from $3,000/month",
    gridSections: [
      {
        heading: "What's Included",
        items: [
          { title: "Paid media strategy & management", description: "Google, Meta, TikTok, and GroundTruth campaigns run by senior strategists." },
          { title: "Content & email", description: "Ongoing content production and email marketing on MailerLite/Brevo-class tooling." },
          { title: "SEO & analytics", description: "Search visibility and the tracking to know what's actually working." },
          { title: "Custom reporting dashboards", description: "React dashboards built for your business — not a generic export." },
        ],
      },
    ],
    proof: {
      heading: "Proof, not promises",
      body: "Sportball: $150K+ annual ad spend managed, with cost-per-registration brought from $30+ to under $10 — a 60%+ reduction in CAC. Yogen Früz: an ongoing analytics dashboard spanning Google, Meta, TikTok, and GroundTruth. $500K+ in ad spend managed across our client roster.",
    },
    notes: [
      {
        heading: "How Retainers Work",
        body: "Monthly cadence, quarterly reviews, no long lock-ins — we keep the account because the numbers keep earning it.",
      },
    ],
    featuredCases: [
      { name: "Sportball", blurb: "60%+ CAC reduction across 20+ franchise locations.", slug: "/work/sportball" },
      { name: "Yogen Früz", blurb: "Ongoing analytics dashboard across Google, Meta, TikTok & GroundTruth.", slug: "/work/yogen-fruz" },
    ],
    testimonial: {
      quote:
        "Dan's leadership in our full rebranding was transformative for Sportball. He developed a multi-functional website and crafted a strategy that enabled our franchisees across North America to benefit from professional brand assets and best practices in paid advertising and local marketing.",
      author: "Head of Marketing",
      role: "Sportball",
    },
    upgradeLine: "Performance retainer clients often add brand and content work, or a fractional CMO to direct it all.",
    upgradeLinks: [
      { label: "Branding & Creative Content", href: "/services/branding-content" },
      { label: "Fractional CMO & Strategy", href: "/services/fractional-cmo" },
    ],
    ctaText: "Book a Strategy Conversation",
  },
  {
    slug: "branding-content",
    navLabel: "Branding & Creative Content",
    metaTitle: "Branding Agency & Social Content — Toronto",
    metaDescription:
      "Brand systems, identity, and platform-native content production — with AI-assisted creative and clear ethical guardrails.",
    heroHeadline: "A brand people recognize. Content people actually watch.",
    heroSub: "Positioning, identity, and platform-native content production — built with the same taste as everything else we ship.",
    priceSignal: "Custom engagements",
    gridSections: [
      {
        heading: "Brand Systems",
        items: [
          { title: "Positioning & identity", description: "The strategic groundwork before a single asset gets designed." },
          { title: "Design systems & guidelines", description: "Documented systems your team — or the next agency — can actually follow." },
          { title: "Startup brand kits", description: "A full identity for founders building from zero." },
          { title: "Post-acquisition rebrands", description: "Unifying a brand after a merger or acquisition — Sportball is our anchor case." },
        ],
      },
      {
        heading: "Content & Social",
        items: [
          { title: "Instagram grid systems", description: "Platform-native visual systems built to be produced repeatably." },
          { title: "TikTok & Facebook content", description: "Short-form and platform-specific production, not one-size-fits-all posts." },
          { title: "Multi-platform campaigns", description: "Our Roaring Twenties Night campaign ran coordinated across platforms." },
          { title: "Community management", description: "Available as an add-on to any content engagement." },
        ],
      },
      {
        heading: "AI-Assisted Creative — and the Line We Don't Cross",
        items: [
          { title: "AI video & imagery", description: "Kling video, AI imagery, and Remotion/3D motion in the production toolkit." },
          {
            title: "Stylized and illustrative only",
            description: "AI visuals are never passed off as real people, places, or events. We say this loudly because it's a differentiator, not fine print.",
          },
        ],
      },
    ],
    notes: [
      {
        heading: "Typography Is a Craft Signal",
        body: "We have never shipped a default font. Every brand gets a considered typographic system, not whatever came pre-loaded.",
      },
    ],
    featuredCases: [
      { name: "Sportball", blurb: "Full brand system built to unify 20+ franchise locations.", slug: "/work/sportball" },
      { name: "Yogen Früz", blurb: "AR filter for the Netflix Unicorn Academy collaboration — verified sales lift.", slug: "/work/yogen-fruz" },
      { name: "Unapologetically Jewish", blurb: "A brutalist-inspired design range built to match a bold, unapologetic voice.", slug: "/work/unapologetically-jewish" },
    ],
    upgradeLine: "Brand and content engagements pair naturally with an ongoing performance marketing retainer.",
    upgradeLinks: [{ label: "Performance Marketing", href: "/services/performance-marketing" }],
    ctaText: "Start With a Brand Conversation",
  },
  {
    slug: "ai-automation",
    navLabel: "AI, Automation & Custom Apps",
    metaTitle: "AI Automation Agency & Custom Dashboards — Toronto",
    metaDescription:
      "Custom apps, dashboards, and automations that remove the boring parts of your business. From $5,000. We sell what we use daily.",
    heroHeadline: "We don't just use AI. We build with it.",
    heroSub: "Custom tools, dashboards, and automations that remove the boring parts of your business.",
    priceSignal: "From $5,000",
    intro: {
      paragraphs: [
        "The agency runs on its own AI systems — the same Lumin8 Build System that ships client sites in days, not months. We sell what we use daily.",
      ],
    },
    gridSections: [
      {
        heading: "What We Build",
        items: [
          { title: "Custom apps & dashboards", description: "React + Supabase builds tailored to how your business actually runs." },
          { title: "AI workflow builds", description: "Automations that remove repetitive work from your team's day." },
          { title: "B2B sales automation", description: "LinkedIn Sales Navigator + La Growth Machine outbound systems, built as a one-time engagement." },
          { title: "CRM & marketing automation", description: "HubSpot, Zapier, and ManyChat, connected and actually maintained." },
        ],
      },
    ],
    notes: [
      {
        heading: "Honest Scoping",
        body: "Fixed-scope discovery comes first. We don't sell open-ended \"AI transformation\" retainers on hype.",
      },
    ],
    featuredCases: [
      { name: "Yogen Früz", blurb: "Ongoing analytics dashboard across four ad platforms.", slug: "/work/yogen-fruz" },
      { name: "Garage Door Beasts", blurb: "A productized B2B outbound automation system." },
      { name: "Precedent AI", blurb: "Website for a legal-AI consultancy — credibility in the professional AI space." },
    ],
    upgradeLine: "Custom app and automation clients are often already running a Grow or Partner-level engagement with us.",
    upgradeLinks: [{ label: "How We Work", href: "/how-we-work" }],
    ctaText: "Book a Scoping Call",
  },
  {
    slug: "fractional-cmo",
    navLabel: "Fractional CMO & Strategy",
    metaTitle: "Fractional CMO Services — Toronto",
    metaDescription:
      "Marketing leadership as a service — strategy, budget allocation, vendor management, and board-level reporting from principals with 30 years combined experience.",
    heroHeadline: "CMO thinking. Without the CMO salary.",
    heroSub: "Marketing leadership as a service, delivered by principals — not a junior account team.",
    priceSignal: "Custom engagements",
    gridSections: [
      {
        heading: "What It Looks Like",
        items: [
          { title: "Strategy & positioning", description: "The direction-setting work most in-house teams don't have time for." },
          { title: "Budget allocation", description: "Deciding where marketing dollars actually belong." },
          { title: "Agency & vendor management", description: "One accountable point of contact instead of vendor sprawl." },
          { title: "Team coaching", description: "Leveling up an existing in-house team, not replacing it." },
          { title: "Board-level reporting", description: "Reporting built for the people who need to trust the numbers." },
        ],
      },
    ],
    personas: [
      { title: "The founder doing marketing off the side of their desk", description: "You need a real marketing brain, not another task on your plate." },
      { title: "The company between marketing hires", description: "Keep momentum while you find (or decide you don't need) a full-time CMO." },
      { title: "The franchise or multi-location brand", description: "Central strategic direction across a network that needs consistency." },
    ],
    howItConnects: {
      heading: "How It Connects",
      body: "The fractional CMO engagement often directs the Grow retainer and Partner-level builds — one team, no vendor sprawl.",
    },
    upgradeLine: "Fractional CMO engagements are the connective tissue across every other service we offer.",
    upgradeLinks: [{ label: "Franchise Marketing", href: "/franchise" }],
    ctaText: "Book a Leadership Conversation",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
