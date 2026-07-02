export type InsightCategory = "AI & Marketing" | "Franchise Growth" | "Web & Brand" | "Toronto Business";

export interface InsightArticle {
  slug: string;
  title: string;
  category: InsightCategory;
  excerpt: string;
  author: "Dan" | "Dorit";
  date: string;
  relatedCaseSlug?: string;
  /** Filled in during the Phase 8 content pass — array of paragraphs/section blocks. */
  body?: string[];
}

// REVIEW: publish dates are placeholders — confirm the actual launch cadence before going live.
export const insights: InsightArticle[] = [
  {
    slug: "how-ai-accelerated-agency-works",
    title: "How an AI-Accelerated Agency Actually Works",
    category: "AI & Marketing",
    excerpt:
      "We get asked this constantly: how fast is fast, and what's the catch? Here's the honest walkthrough of the Lumin8 Build System — no jargon, no hype.",
    author: "Dan",
    date: "2026-05-21",
    relatedCaseSlug: "/how-we-work",
  },
  {
    slug: "what-a-franchise-learns-from-owning-one",
    title: "What a Franchise Teaches You From the Inside",
    category: "Franchise Growth",
    excerpt:
      "Before we marketed franchises, we owned one. Here's what that changes about how we advise franchisors and franchisees today.",
    author: "Dorit",
    date: "2026-05-28",
    relatedCaseSlug: "/franchise",
  },
  {
    slug: "earth-song-build-11-days",
    title: "The Earth Song Build: 11 Days From First Contact to Ticket Sales",
    category: "Web & Brand",
    excerpt:
      "A real build log — how a ceremonial festival retreat went from a fragmented social presence to live ticket sales in under two weeks.",
    author: "Dan",
    date: "2026-06-04",
    relatedCaseSlug: "/work/earth-song",
  },
  {
    slug: "why-we-transfer-full-ownership",
    title: "Why We Transfer Full Ownership of Every Website We Build",
    category: "Web & Brand",
    excerpt:
      "No lock-in is a policy, not a slogan. Here's why we hand clients the keys — and what that actually looks like in practice.",
    author: "Dan",
    date: "2026-06-11",
    relatedCaseSlug: "/work/jillian-rodak",
  },
  {
    slug: "ai-imagery-ethics-where-we-draw-the-line",
    title: "AI Imagery Ethics: Where We Draw the Line",
    category: "AI & Marketing",
    excerpt:
      "AI-generated visuals are a real part of our toolkit. Here's the rule we never break: never passed off as real people, venues, or events.",
    author: "Dorit",
    date: "2026-06-18",
  },
  {
    slug: "build-my-business-contest-lessons",
    title: "The Build My Business Contest: What 13 Applications Taught Us",
    category: "Toronto Business",
    excerpt:
      "We only had one website to give away. So we built preview sites for the other 12 applicants anyway. Here's why — and what we learned.",
    author: "Dorit",
    date: "2026-06-25",
  },
];
