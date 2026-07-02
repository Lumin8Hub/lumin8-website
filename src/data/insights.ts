export type InsightCategory = "AI & Marketing" | "Franchise Growth" | "Web & Brand" | "Toronto Business";

export interface InsightBodySection {
  heading?: string;
  paragraphs: string[];
}

export interface InsightArticle {
  slug: string;
  title: string;
  category: InsightCategory;
  excerpt: string;
  author: "Dan" | "Dorit";
  date: string;
  relatedCaseSlug?: string;
  body: InsightBodySection[];
}

// REVIEW: publish dates are placeholders — confirm the actual launch cadence before going live.
// REVIEW: all 6 articles below need principal sign-off before publishing.
// REVIEW: the Dan/Dorit byline split (3 articles each) is an editorial judgment
// call based on each principal's stated focus areas, not a confirmed assignment.
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
    body: [
      {
        paragraphs: [
          "People ask us this in almost every first call: if AI is doing so much of the work, what exactly are we paying for? It's a fair question, and it deserves a straight answer instead of a marketing paragraph.",
          "So here's the honest version of how the Lumin8 Build System actually works — what AI does, what a human does, and why that division of labor is the whole point.",
        ],
      },
      {
        heading: "What AI actually does",
        paragraphs: [
          "AI accelerates production. Once we know what a project needs — the positioning, the structure, the tone, the technical requirements — AI helps turn that direction into a working first draft fast. Copy gets drafted. Code gets scaffolded. Layouts get built out. Work that used to take days of manual production now takes hours.",
          "That's the entire scope of what AI does here. It doesn't decide what a client's brand should sound like. It doesn't choose a positioning strategy. It doesn't review its own work and declare it done.",
        ],
      },
      {
        heading: "What stays human",
        paragraphs: [
          "Research, strategy, and creative direction happen before any AI tool touches a project. A senior strategist has to understand a business, its audience, and its goals well enough to write the brief that guides everything after it. That's not a step AI can skip for us, and it's not one we'd want it to.",
          "And after the draft comes back, a principal reviews it — not a junior account coordinator, not an algorithm checking a box. Every word, every layout decision, every piece of code gets a human pass before it ships. If something reads generic, sounds off-brand, or just isn't good enough, it gets sent back and redone.",
        ],
      },
      {
        heading: "Why speed doesn't mean sloppy",
        paragraphs: [
          "The instinct is to assume fast and careful are opposites. In a traditional agency model, that's often true — speed usually means someone skipped a step. But when the production bottleneck is AI-accelerated instead of headcount-constrained, the time we save on drafting gets reinvested into review, not cut from the schedule.",
          "That's the tagline we hold ourselves to internally, and it's not a slogan: no AI slop, ever. If a deliverable wouldn't meet our standard coming from a human designer or copywriter with 30 years of experience, it doesn't ship — regardless of how it was produced.",
        ],
      },
      {
        heading: "What this looked like on a real project",
        paragraphs: [
          "Earth Song Festival is the clearest example we have. From first contact to live ticket sales was 11 days — a timeline that would be aggressive for a traditional build even before you factor in a custom Stripe ticketing integration and a full brand identity. That speed came from AI compressing the production timeline, not from cutting corners on strategy or review.",
        ],
      },
      {
        heading: "What it means for you",
        paragraphs: [
          "If you're evaluating whether an AI-accelerated build is right for your project, the question to ask isn't \"is AI involved?\" — it's \"who's reviewing the output, and against what standard?\" That's the part that actually determines whether you get something fast and good, or just fast.",
        ],
      },
    ],
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
    body: [
      {
        paragraphs: [
          "Most of the franchise marketing advice you'll find online comes from people who have only ever seen a franchise from the outside — as a vendor, a consultant, or an agency partner brought in to fix a specific problem. We've been on the other side of that relationship. Dan and I owned and operated a franchise location ourselves, before Lumin8 existed in its current form.",
          "That experience changes what we notice when we work with franchisors and franchisees today. Here's what it taught us.",
        ],
      },
      {
        heading: "Brand consistency isn't a design problem",
        paragraphs: [
          "When you're running a location day to day, \"brand consistency\" stops being an abstract governance goal and becomes a practical question: does the marketing material the franchisor sent us actually work for our neighborhood, our customers, our week? A lot of brand guidelines get built by people who never have to answer that question themselves. Ours are built by people who did.",
        ],
      },
      {
        heading: "Franchisees don't want more oversight. They want better tools.",
        paragraphs: [
          "There's a common assumption in franchise marketing that franchisee inconsistency is a compliance problem to be solved with more approval layers. From the inside, it usually looks different: franchisees who go off-brand are often doing it because the tools and templates they were given don't fit their actual local reality, and they've had to improvise.",
          "The fix isn't more oversight. It's building systems flexible enough that following the brand is the easiest option, not the most restrictive one. That's the thinking behind what we call the Franchisee Agency Model — standardized enough to protect the brand, personalized enough that franchisees actually want to use it.",
        ],
      },
      {
        heading: "ROI questions hit differently at the location level",
        paragraphs: [
          "A franchisor might look at network-wide ad spend and ask if it's working in aggregate. A franchisee looks at their own P&L and asks if it's working for them, this month. Both questions are legitimate, and a marketing program that can only answer one of them is going to lose trust with the audience it can't speak to.",
          "On Sportball, this meant building a system that let us report results in a way that made sense at the network level and the individual location level — because a location's owner needed to see themselves in the numbers, not just trust that the aggregate was moving in the right direction.",
        ],
      },
      {
        heading: "Growth plateaus are usually a systems problem, not an effort problem",
        paragraphs: [
          "What gets a franchise network to its first 10 or 15 locations rarely scales cleanly to 30 or 50. The systems that felt like reasonable overhead at a smaller size — manual approvals, one-off creative requests, ad hoc reporting — start to buckle. Most of the plateaus we've seen aren't a sign that a network has stopped trying. They're a sign that the systems built for an earlier size haven't caught up to the current one.",
        ],
      },
      {
        heading: "The credential that actually matters",
        paragraphs: [
          "We don't lead with \"we've owned a franchise\" because it's a nice story. We lead with it because it's the reason we notice things that a purely external agency partner often misses — and it's why franchisors and franchisees have trusted us with the parts of the relationship that are hardest to get right.",
        ],
      },
    ],
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
    body: [
      {
        paragraphs: [
          "\"11 days\" is the number we lead with on the Earth Song Festival case study, and it's the one people ask us to explain the most. So here's the actual build log — what happened, in what order, and why the timeline held.",
        ],
      },
      {
        heading: "The starting point",
        paragraphs: [
          "Earth Song Festival had a growing community and a strong sense of what the brand felt like, but no cohesive digital home — just fragmented social media profiles and a basic landing page. They needed a real website with ticketing built in, and they needed it fast enough to start selling tickets while the timeline still made sense for the event.",
        ],
      },
      {
        heading: "Days 1–2: brief and direction",
        paragraphs: [
          "The first two days were entirely strategic — understanding the festival's mission, its target audience, and the existing brand materials, and mapping the information architecture before any design work started. This is the step that determines whether the rest of the timeline holds. Skip it, and you end up rebuilding pages that were never right in the first place.",
        ],
      },
      {
        heading: "Days 3–5: content, design, and build in parallel",
        paragraphs: [
          "Copy and design moved together rather than in sequence — AI-drafted content refined by a human writer, while the visual identity took shape around a forest green, gold, and warm cream palette that felt grounded rather than generic. The build itself was a custom React site, not a template, which meant the ticketing integration could be built into the architecture from the start instead of bolted on afterward.",
        ],
      },
      {
        heading: "Days 6–9: ticketing, review, and revision",
        paragraphs: [
          "This is where the Stripe-powered ticketing system got wired in — tiered pricing, early-bird rates, and the waiver and email-capture flow the festival needed for attendee communication. Earth Song's team reviewed the build and gave feedback across two structured revision rounds, which is enough to catch real issues without turning into an open-ended back-and-forth.",
        ],
      },
      {
        heading: "Days 10–11: launch",
        paragraphs: [
          "The site went live with full SEO setup and analytics in place, and ticket sales opened the same day. From the first conversation to that moment: 11 days.",
        ],
      },
      {
        heading: "What made it possible",
        paragraphs: [
          "Nothing about this timeline required cutting a step. It required not wasting time between steps — no waiting on lengthy discovery phases, no idle days between revision rounds, and a build process fast enough that the team's feedback could be incorporated same-day instead of queued for the following week.",
          "That's the actual argument for AI-accelerated production: not that it skips the work, but that it collapses the dead time around the work.",
        ],
      },
    ],
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
    body: [
      {
        paragraphs: [
          "A lot of agencies build websites that clients can look at but can't touch — where every text change, every new testimonial, every small update means opening a ticket and waiting. We build the opposite way on purpose, and it's worth explaining why.",
        ],
      },
      {
        heading: "The business logic most agencies follow",
        paragraphs: [
          "Keeping a client dependent on you for basic updates is, from a pure revenue standpoint, a reasonable retention strategy. It guarantees a stream of small maintenance requests and makes switching agencies feel riskier than it should. We understand the incentive. We just don't think it's a good way to build trust, and we don't think it's necessary anymore.",
        ],
      },
      {
        heading: "What full ownership actually means",
        paragraphs: [
          "When we say a client owns what we build, we mean the literal codebase — not a license, not a hosted account we control, not a CMS that only we know how to administer. The site's files, the domain, the analytics access, and a walkthrough of how to make changes independently, all transferred at handoff.",
          "For clients using our AI-powered editing environment, that includes training on how to describe a change in plain language and have it implemented — the same tooling we use internally, handed over rather than kept behind an agency wall.",
        ],
      },
      {
        heading: "The Jillian Rodak example",
        paragraphs: [
          "Jillian Rodak's site is the clearest proof of what this looks like in practice. After launch, we walked her through the ownership transfer — the codebase, the AI editing environment, a single training session. Within one week, she had independently added a testimonial section, built a mobile-friendly carousel, and booked three consultations. She wasn't waiting on us for any of it, because she didn't need to.",
        ],
      },
      {
        heading: "Why this doesn't cost us the relationship",
        paragraphs: [
          "The obvious worry is that handing over full ownership means clients disappear after launch. In practice, it's done the opposite. Clients who feel confident and unblocked are more likely to come back for the next project — a rebrand, a marketing retainer, a new campaign — because the relationship isn't built on quiet dependency. It's built on the fact that the work was good enough to want more of it.",
          "That's the actual upgrade path we care about: not a client who's stuck with us, but one who chooses to keep working with us.",
        ],
      },
      {
        heading: "What this means if you're evaluating an agency",
        paragraphs: [
          "Ask any agency you're considering a direct question before you sign anything: if we stopped working together tomorrow, what would you be able to do with what you've built? If the honest answer involves needing that agency's permission, their login, or their proprietary platform, that's worth knowing upfront.",
        ],
      },
    ],
  },
  {
    slug: "ai-imagery-ethics-where-we-draw-the-line",
    title: "AI Imagery Ethics: Where We Draw the Line",
    category: "AI & Marketing",
    excerpt:
      "AI-generated visuals are a real part of our toolkit. Here's the rule we never break: never passed off as real people, venues, or events.",
    author: "Dorit",
    date: "2026-06-18",
    body: [
      {
        paragraphs: [
          "AI-generated imagery is a legitimate part of how we produce creative work now — video, illustration, stylized visuals for campaigns that don't have the budget or timeline for a full photo or video shoot. We're not precious about using it. But we hold one line firmly, and we think it's worth stating in public rather than leaving it as an internal policy.",
        ],
      },
      {
        heading: "The rule",
        paragraphs: [
          "AI-generated visuals are never presented as documentary. Not of real people, not of real venues, not of real events — ours or a client's. If an image or video is AI-generated, it's used in a way that reads as stylized or illustrative, not as a photograph or recording of something that actually happened.",
        ],
      },
      {
        heading: "Why this matters more as the technology gets better",
        paragraphs: [
          "A few years ago, this was a low-stakes rule because AI imagery was easy to spot. That's no longer true. As the output gets more convincing, the line between \"illustrative\" and \"deceptive\" depends entirely on how something is presented and labeled — not on how it was made. That puts more responsibility on us, not less.",
          "A stylized AI illustration used to represent a mood or an idea is honest. The same image passed off as a photo from a real event, or a real testimonial from a person who doesn't exist, is not — regardless of how good the tooling is.",
        ],
      },
      {
        heading: "What this looks like in practice",
        paragraphs: [
          "It means we don't generate fake \"customer photos\" for a testimonial. It means an AI-assisted campaign visual gets art-directed and labeled in a way that's honest about what it is. It also connects to a related rule we hold just as firmly: stock photography, while acceptable for launch-stage placeholder imagery, should never be used in a way that implies a large team or a physical presence we don't have. A two-person agency shouldn't look, in its marketing, like a twenty-person one.",
        ],
      },
      {
        heading: "Regulatory compliance is part of the same conversation",
        paragraphs: [
          "This same principle — build the guardrail in early, not as a fix after the fact — is how we approach regulatory and legal compliance more broadly. On the Art Restart project, that meant embedding Ontario psychotherapy scope-of-practice rules into every piece of copy and creative from the start, not reviewing for compliance after the fact. On campaign-related work, it means understanding election finance rules before a single asset gets built. Ethics and compliance work the same way: they belong at the beginning of a project, not the end.",
        ],
      },
      {
        heading: "The honest version of \"AI-powered\"",
        paragraphs: [
          "We say we're AI-accelerated and human-refined, and this is the part of that claim with real teeth. Anyone can say they use AI responsibly. The test is whether you can point to the specific line you won't cross, and whether you're willing to say it in public before a client asks. We'd rather be specific about it now than vague about it later.",
        ],
      },
    ],
  },
  {
    slug: "build-my-business-contest-lessons",
    title: "The Build My Business Contest: What 13 Applications Taught Us",
    category: "Toronto Business",
    excerpt:
      "We only had one website to give away. So we built preview sites for the other 12 applicants anyway. Here's why — and what we learned.",
    author: "Dorit",
    date: "2026-06-25",
    body: [
      {
        paragraphs: [
          "Earlier this year, we ran a small contest through Everything Jewish Toronto and the Toronto Jewish Women United community: one free website, awarded to the small business or non-profit we felt could benefit most and make the best case study. Thirteen businesses applied. We could only pick one winner. What we did with the other twelve is the part of this story I actually want to tell.",
        ],
      },
      {
        heading: "The winner",
        paragraphs: [
          "Esther Warner of The Balloon Artist won the contest, and her project became exactly the kind of case study we'd hoped for — a real small business getting a real, strategically built website at no cost, with nothing to prove except that the work itself was good.",
        ],
      },
      {
        heading: "What we did about the other twelve",
        paragraphs: [
          "Here's the part that wasn't required by the contest rules: we built preview websites for all twelve non-winning applicants anyway, and offered them at an exclusive rate available only to contest applicants. Nobody asked us to do this. We did it because we'd already done the strategic thinking for each of their businesses to properly evaluate the applications, and it felt wrong to let that work go to waste just because we could only give one site away for free.",
        ],
      },
      {
        heading: "Why this only works with an AI-accelerated build system",
        paragraphs: [
          "This kind of proof-over-promise approach — showing a business owner their actual website before asking them to commit to anything — would not have been economically possible under a traditional agency model. Building twelve real, functioning preview sites on spec, on the chance that some of them convert, only makes sense when the production cost per site is low enough to absorb the ones that don't. That's a direct, practical consequence of the same AI-accelerated production model we use for every paying client.",
        ],
      },
      {
        heading: "What thirteen applications taught us",
        paragraphs: [
          "A few things became clear reading through thirteen real applications from small businesses and non-profits in our own community. First: most of them didn't need convincing that a good website mattered — they needed someone to make the process feel possible on their timeline and budget. Second: the businesses that stood out weren't the ones with the biggest ambitions on paper, but the ones with the clearest sense of who their customer actually was. And third: showing someone a finished website of their own business is a far more persuasive sales conversation than describing what one could look like.",
        ],
      },
      {
        heading: "Why we're telling this story publicly",
        paragraphs: [
          "We didn't run this contest as a funnel-building exercise, and we're not telling this story as one either. But it's a genuine, unscripted example of how we actually operate: we do the work first, in public, in front of the community that will refer us the next client. That's not a tagline. It's just been true every time we've tried it.",
        ],
      },
    ],
  },
];
