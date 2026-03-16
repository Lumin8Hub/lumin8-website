import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/animations/SectionReveal";

const ContestRules = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // noindex meta tag
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    const title = document.title;
    document.title = "Official Contest Rules | Build My Business | Lumin8";

    const desc = document.createElement("meta");
    desc.name = "description";
    desc.content =
      "Official rules for the Lumin8 Build My Business Website Contest. One small business or non-profit in Ontario will win a complete Starter website package valued at $750.";
    document.head.appendChild(desc);

    return () => {
      document.head.removeChild(meta);
      document.head.removeChild(desc);
      document.title = title;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <SectionReveal>
            <Link
              to="/#contest"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-heading font-semibold text-sm mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Contest
            </Link>
          </SectionReveal>

          {/* Header */}
          <SectionReveal>
            <p className="font-mono text-primary text-xs tracking-widest uppercase mb-4">
              Official Contest Rules
            </p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-tight mb-3">
              Build My Business
              <br />
              <span className="text-primary">Website Contest</span>
            </h1>
            <p className="text-muted-foreground text-sm mb-8">
              Sponsored by 9188819 Canada Inc., operating as Lumin8
            </p>
          </SectionReveal>

          {/* Important notice */}
          <SectionReveal>
            <div className="border border-primary/20 bg-primary/5 rounded-xl p-6 mb-12">
              <p className="text-sm text-foreground/90 leading-relaxed font-semibold">
                IMPORTANT: PLEASE READ THESE OFFICIAL CONTEST RULES (THE
                &ldquo;RULES&rdquo;) CAREFULLY BEFORE ENTERING. BY SUBMITTING
                AN ENTRY, YOU AGREE TO BE BOUND BY THESE RULES AND THE
                DECISIONS OF THE SPONSOR, WHICH ARE FINAL AND BINDING IN ALL
                RESPECTS. NO PURCHASE NECESSARY. ENTRY INTO THIS CONTEST
                CONSTITUTES ACCEPTANCE OF THESE RULES.
              </p>
            </div>
          </SectionReveal>

          {/* Rules body */}
          <div className="space-y-10 text-foreground/80 text-[0.9375rem] leading-relaxed">
            <RuleSection num={1} title="Sponsor">
              <p>
                This Contest is sponsored and administered by 9188819 Canada
                Inc., operating as Lumin8, with its principal place of business
                in Toronto, Ontario, Canada (the &ldquo;Sponsor&rdquo;).
              </p>
            </RuleSection>

            <RuleSection num={2} title="Eligibility">
              <p>
                The Contest is open to legal residents of Ontario, Canada, who
                are the age of majority (18 years of age or older) at the time
                of entry. Entrants must be the authorized owner, operator, or
                representative of a small business or registered non-profit
                organization operating in Ontario.
              </p>
              <p className="mt-3">
                The following persons are <strong>NOT</strong> eligible to
                enter:
              </p>
              <ol type="a" className="list-[lower-alpha] pl-6 mt-2 space-y-2">
                <li>
                  Employees, officers, directors, agents, and representatives of
                  the Sponsor, and their respective parent companies,
                  subsidiaries, affiliates, advertising and promotional
                  agencies, and any other entity involved in the development or
                  administration of this Contest;
                </li>
                <li>
                  Members of the immediate family (defined as spouse, parent,
                  child, sibling, and their respective spouses, regardless of
                  where they reside) and persons living in the same household
                  (whether related or not) of any of the foregoing individuals;
                </li>
                <li>
                  Any business or non-profit that is currently a client of
                  Lumin8 or has been a client of Lumin8 within the twelve (12)
                  months preceding the Contest start date.
                </li>
              </ol>
            </RuleSection>

            <RuleSection num={3} title="Contest Period">
              <p>
                The Contest begins on the date announced by the Sponsor on its
                website and official social media channels (the &ldquo;Contest
                Start Date&rdquo;) and ends fourteen (14) calendar days later at
                11:59 p.m. Eastern Time (the &ldquo;Contest End Date&rdquo;).
                The Contest Start Date and Contest End Date are collectively
                referred to as the &ldquo;Contest Period.&rdquo; Entries
                submitted before or after the Contest Period will not be
                accepted. The Sponsor&rsquo;s computer systems shall be the
                official clock for all purposes of this Contest.
              </p>
            </RuleSection>

            <RuleSection num={4} title="No Purchase Necessary">
              <p>
                No purchase is necessary to enter or win this Contest. A
                purchase will not increase your chances of winning. Where
                prohibited by law, this Contest is void.
              </p>
            </RuleSection>

            <RuleSection num={5} title="How to Enter">
              <p>
                To enter the Contest, eligible entrants must complete all
                required fields on the official Contest entry form (the
                &ldquo;Entry Form&rdquo;) available at lumin8.agency during the
                Contest Period. The Entry Form requires the following
                information:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>
                  First and last name of the business owner or authorized
                  representative
                </li>
                <li>Email address</li>
                <li>Business name</li>
                <li>Phone number</li>
                <li>Current website address (if applicable)</li>
                <li>A written description of the entrant&rsquo;s business</li>
                <li>
                  A written explanation of why the entrant needs a website
                </li>
                <li>
                  A written explanation of how the project would help the
                  entrant&rsquo;s community or customers
                </li>
                <li>How the entrant heard about the Contest</li>
                <li>
                  Acknowledgment and agreement to these Official Contest Rules,
                  including consent to be featured as a case study
                </li>
              </ul>
              <p className="mt-3">
                All entries must be received during the Contest Period. Limit one
                (1) entry per person and per business or organization. Multiple
                entries from the same person, business, or organization will be
                disqualified. All entries become the property of the Sponsor and
                will not be returned.
              </p>
            </RuleSection>

            <RuleSection num={6} title="Winner Selection — Skill-Based Judging">
              <p>
                This is a skill-based contest.{" "}
                <strong>The winner will NOT be selected by random draw.</strong>{" "}
                Within fourteen (14) calendar days following the Contest End
                Date, all eligible entries will be evaluated and judged by the
                Sponsor or a panel of judges appointed by the Sponsor in the
                Sponsor&rsquo;s sole and absolute discretion. Entries will be
                evaluated based on the following criteria:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>
                  <strong>Case study potential</strong> — the extent to which
                  the project would produce a compelling and demonstrative case
                  study for Lumin8&rsquo;s portfolio (weighted at the
                  Sponsor&rsquo;s discretion)
                </li>
                <li>
                  <strong>Community impact</strong> — the potential for the
                  website to benefit the entrant&rsquo;s community, customers,
                  or constituents
                </li>
                <li>
                  <strong>Business need</strong> — the clarity and urgency of
                  the entrant&rsquo;s need for a professional website
                </li>
                <li>
                  <strong>Project feasibility</strong> — the Sponsor&rsquo;s
                  assessment of whether the project can be successfully delivered
                  within the scope of the Prize
                </li>
              </ul>
              <p className="mt-3">
                The Sponsor retains sole and absolute discretion in evaluating
                all entries and selecting the winner. The Sponsor&rsquo;s
                decision is final and binding and is not subject to appeal,
                challenge, or review. The Sponsor is under no obligation to
                provide reasons for its decision or to disclose scores,
                rankings, or evaluations of any entry.
              </p>
            </RuleSection>

            <RuleSection num={7} title="Skill-Testing Question">
              <p>
                Before being declared a winner, the selected entrant must
                correctly answer, without assistance of any kind (mechanical or
                otherwise), a time-limited mathematical skill-testing question
                administered by the Sponsor by email or telephone. Failure to
                correctly answer the skill-testing question will result in
                disqualification and the Sponsor may, in its sole discretion,
                select an alternate winner from the remaining eligible entries.
              </p>
            </RuleSection>

            <RuleSection num={8} title="Winner Notification and Verification">
              <p>
                The selected entrant will be notified by email and/or telephone
                using the contact information provided in the Entry Form. The
                selected entrant must respond to the notification within five
                (5) business days of the date of notification. Failure to
                respond within this period will result in forfeiture of the
                Prize and the Sponsor may, in its sole discretion, select an
                alternate winner.
              </p>
              <p className="mt-3">
                Prior to being declared the winner and receiving the Prize, the
                selected entrant must:
              </p>
              <ol type="a" className="list-[lower-alpha] pl-6 mt-2 space-y-2">
                <li>Correctly answer the skill-testing question;</li>
                <li>
                  Sign and return a Winner Release Form and any other
                  documentation required by the Sponsor, including without
                  limitation a liability release, publicity consent, and case
                  study participation agreement;
                </li>
                <li>
                  Provide proof of identity, age, Ontario residency, and
                  business or non-profit status satisfactory to the Sponsor.
                </li>
              </ol>
              <p className="mt-3">
                If the selected entrant fails to comply with any of the
                foregoing requirements, or is found to be ineligible, or has
                violated any of these Rules, the selected entrant will be
                disqualified and the Sponsor may, in its sole discretion, select
                an alternate winner.
              </p>
            </RuleSection>

            <RuleSection num={9} title="Prize">
              <p>
                There is one (1) Prize available to be won. The Prize consists
                of a Lumin8 Starter Website package with an approximate retail
                value of <strong>$750.00 CAD</strong>, which includes:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>
                  A custom-built, static React website of three (3) to five (5)
                  pages, as determined by the Sponsor
                </li>
                <li>Mobile-responsive design</li>
                <li>
                  AI-drafted website copy, refined by Lumin8&rsquo;s team
                </li>
                <li>
                  Hosting via GitHub Pages (free hosting; no ongoing hosting fees
                  payable by the winner)
                </li>
                <li>
                  Up to two (2) rounds of revisions following initial delivery of
                  the website
                </li>
                <li>
                  Delivery within ten (10) business days of the project kickoff
                  date, subject to the winner&rsquo;s timely cooperation
                </li>
              </ul>
              <p className="mt-4">
                The Prize does <strong>NOT</strong> include, and the Sponsor is
                not responsible for providing:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Domain name registration or domain transfer fees</li>
                <li>
                  Custom DNS configuration or domain mapping beyond standard
                  GitHub Pages setup
                </li>
                <li>Email hosting or email account setup</li>
                <li>
                  E-commerce functionality, payment processing, or online
                  booking/scheduling systems
                </li>
                <li>
                  Search engine optimization (SEO) services beyond basic on-page
                  metadata
                </li>
                <li>
                  Ongoing maintenance, updates, or content changes after project
                  completion
                </li>
                <li>
                  Custom photography, videography, or licensed stock imagery (the
                  Sponsor may use royalty-free stock images at its discretion)
                </li>
                <li>Third-party software, plugin, or API integrations</li>
                <li>
                  Social media setup, management, or advertising
                </li>
                <li>Google Business Profile setup or management</li>
                <li>Logo design or full brand identity development</li>
                <li>
                  Any services, features, or deliverables not expressly listed
                  above as included in the Prize
                </li>
              </ul>
              <p className="mt-4">
                The Prize must be accepted as awarded and is not transferable,
                assignable, or convertible to cash. No substitution of the Prize
                is permitted except at the Sponsor&rsquo;s sole discretion. The
                Sponsor reserves the right to substitute the Prize or any
                component thereof with one of equal or greater value if the
                Prize or any component thereof becomes unavailable for any
                reason.
              </p>
              <p className="mt-3">
                The winner is solely responsible for any and all costs, fees,
                taxes (if applicable), and expenses associated with the Prize
                that are not expressly included above, including without
                limitation domain name registration, email hosting, and any
                ongoing costs associated with maintaining the website after
                project completion.
              </p>
            </RuleSection>

            <RuleSection num={10} title="Scope of Work and Creative Control">
              <p>
                The Sponsor shall have sole and absolute discretion over all
                aspects of the website design, development, and content
                creation, including without limitation the visual design, layout,
                colour palette, typography, imagery, copy, page structure, and
                technical implementation. While the Sponsor will make reasonable
                efforts to incorporate the winner&rsquo;s input and preferences,
                the Sponsor&rsquo;s creative and technical decisions are final.
              </p>
              <p className="mt-3">
                The scope of the Prize is limited to the deliverables expressly
                described in Section 9. Any requests for additional features,
                pages, functionality, or services beyond the stated scope are
                not included and may be offered by the Sponsor as a separate
                paid engagement at the Sponsor&rsquo;s standard rates.
              </p>
              <p className="mt-3">
                The two (2) rounds of revisions included in the Prize are
                limited to minor design and copy adjustments. The Sponsor
                reserves the right to determine, in its sole discretion, what
                constitutes a &ldquo;revision&rdquo; versus a scope change.
                Requests that the Sponsor determines to be out of scope will not
                be included in the Prize.
              </p>
            </RuleSection>

            <RuleSection
              num={11}
              title="Case Study, Publicity, and Content Rights"
            >
              <p>
                By entering this Contest, each entrant acknowledges and agrees to
                the following:
              </p>
              <ol type="a" className="list-[lower-alpha] pl-6 mt-3 space-y-3">
                <li>
                  The Sponsor may document, record, photograph, film,
                  screenshot, and otherwise capture the entire process of
                  working with the winner, including without limitation all
                  communications (email, phone, video call, messaging, and
                  in-person), project meetings, design concepts, drafts,
                  revisions, feedback, and the final delivered website
                  (collectively, the &ldquo;Project Content&rdquo;).
                </li>
                <li>
                  The Sponsor is granted a perpetual, irrevocable, worldwide,
                  royalty-free, fully paid-up, non-exclusive licence to use,
                  reproduce, modify, adapt, publish, display, distribute, and
                  create derivative works from the Project Content and the
                  winner&rsquo;s name, business name, likeness, photograph,
                  voice, testimonial, biographical information, and entry
                  materials (collectively, &ldquo;Publicity Materials&rdquo;) in
                  any and all media now known or hereafter developed, for any
                  purpose, including without limitation case studies, portfolio
                  presentations, website content, social media posts, blog
                  articles, advertising, marketing materials, behind-the-scenes
                  content, educational materials, conference presentations, and
                  sales collateral.
                </li>
                <li>
                  The winner will make themselves reasonably available for
                  interviews, testimonials, photographs, and video recordings in
                  connection with the case study and promotional activities, at
                  times mutually agreed upon.
                </li>
                <li>
                  The Sponsor is under no obligation to seek the winner&rsquo;s
                  prior approval before publishing any Publicity Materials, and
                  the winner waives any right of approval, any claims for
                  compensation, and any right to inspect or approve the use of
                  the Publicity Materials.
                </li>
                <li>
                  The rights granted in this Section survive the completion of
                  the Prize and the termination of any relationship between the
                  winner and the Sponsor.
                </li>
                <li>
                  All entrants, including non-winning entrants, grant the
                  Sponsor the right to use their entry materials (including
                  business descriptions and responses to Entry Form questions)
                  for internal evaluation, marketing research, and aggregate
                  data analysis, provided that the Sponsor will not publicly
                  identify non-winning entrants by name without their separate
                  consent.
                </li>
              </ol>
            </RuleSection>

            <RuleSection num={12} title="Intellectual Property">
              <p>
                All intellectual property rights in the website and all materials
                created by the Sponsor in connection with the Prize, including
                without limitation the website design, code, copy, graphics, and
                any other creative materials (the &ldquo;Work Product&rdquo;),
                shall be owned exclusively by the Sponsor until the project is
                fully completed and delivered to the winner. Upon completion and
                delivery, the Sponsor grants the winner a non-exclusive,
                non-transferable licence to use the Work Product for the
                winner&rsquo;s business purposes. The Sponsor retains the right
                to use the Work Product for its own portfolio, marketing, and
                promotional purposes in perpetuity.
              </p>
              <p className="mt-3">
                The winner acknowledges that the website will be hosted on the
                Sponsor&rsquo;s GitHub organization account, and the Sponsor
                retains administrative control over the repository. The Sponsor
                will provide the winner with reasonable access to the website
                files upon request.
              </p>
            </RuleSection>

            <RuleSection
              num={13}
              title="Project Timeline and Winner's Obligations"
            >
              <p>
                The ten (10) business day delivery timeline commences on the
                date of the official project kickoff, which shall occur after the
                winner has been verified, has signed all required documentation,
                and has provided all reasonably requested information and
                materials (the &ldquo;Kickoff Date&rdquo;). The delivery
                timeline is contingent upon the winner&rsquo;s timely
                cooperation, including responding to requests for information,
                providing feedback on drafts, and attending scheduled meetings.
              </p>
              <p className="mt-3">
                If the winner fails to respond to communications or provide
                requested materials within five (5) business days of any request
                by the Sponsor, the Sponsor reserves the right to proceed with
                the project based on available information, extend the timeline,
                or, in extreme cases of non-cooperation, cancel the Prize
                entirely, without any obligation to provide a replacement prize
                or compensation.
              </p>
            </RuleSection>

            <RuleSection num={14} title="Privacy and Personal Information">
              <p>
                By entering the Contest, each entrant consents to the collection,
                use, and disclosure of their personal information by the Sponsor
                for the purposes of administering the Contest, including
                verifying eligibility, contacting entrants, selecting the
                winner, and delivering the Prize. The winner&rsquo;s name and
                general business information may be published by the Sponsor in
                connection with the Contest results and the case study.
              </p>
              <p className="mt-3">
                Personal information collected in connection with this Contest
                will be handled in accordance with applicable Canadian privacy
                legislation, including the Personal Information Protection and
                Electronic Documents Act (PIPEDA). The Sponsor will not sell
                entrants&rsquo; personal information to third parties. However,
                the Sponsor may share personal information with its service
                providers and agents as necessary to administer the Contest and
                deliver the Prize.
              </p>
              <p className="mt-3">
                By entering, the entrant provides express consent to receive
                communications from the Sponsor related to the Contest. The
                entrant may separately opt-in to receive marketing
                communications from the Sponsor; however, such opt-in is not
                required to enter or win the Contest.
              </p>
            </RuleSection>

            <RuleSection
              num={15}
              title="Limitation of Liability and Indemnification"
            >
              <p>
                By entering the Contest, each entrant agrees to release,
                discharge, indemnify, and hold harmless the Sponsor and its
                directors, officers, employees, agents, representatives,
                successors, and assigns (the &ldquo;Released Parties&rdquo;)
                from and against any and all claims, damages, losses, costs,
                expenses, and liabilities (including reasonable legal fees)
                arising out of or in connection with:
              </p>
              <ol type="a" className="list-[lower-alpha] pl-6 mt-2 space-y-2">
                <li>
                  The entrant&rsquo;s participation in the Contest or
                  acceptance, use, or misuse of the Prize;
                </li>
                <li>Any breach of these Rules by the entrant;</li>
                <li>
                  Any injury, loss, or damage of any kind arising from or in
                  connection with the Prize or participation in any
                  Contest-related activity;
                </li>
                <li>
                  Any claims by third parties arising from or related to the
                  entrant&rsquo;s entry or the content of the entrant&rsquo;s
                  entry materials;
                </li>
                <li>
                  The use of the Publicity Materials by the Sponsor as
                  contemplated by these Rules.
                </li>
              </ol>
              <p className="mt-3">
                The Sponsor is not responsible for: (i) late, lost, delayed,
                damaged, misdirected, incomplete, illegible, or unintelligible
                entries; (ii) any failure of the website, server, network, or
                other electronic or technical malfunctions; (iii) any
                typographical or other error in the printing, offering, or
                administration of the Contest or in the announcement of the
                Prize; or (iv) any combination of the above.
              </p>
              <p className="mt-3 text-xs text-foreground/60 font-semibold uppercase tracking-wide">
                IN NO EVENT SHALL THE RELEASED PARTIES BE LIABLE FOR ANY
                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR
                EXEMPLARY DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE
                CONTEST OR THE PRIZE, REGARDLESS OF THE CAUSE OF ACTION OR THE
                THEORY OF LIABILITY, EVEN IF THE RELEASED PARTIES HAVE BEEN
                ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE RELEASED
                PARTIES&rsquo; TOTAL AGGREGATE LIABILITY IN CONNECTION WITH THE
                CONTEST AND THE PRIZE SHALL NOT EXCEED THE APPROXIMATE RETAIL
                VALUE OF THE PRIZE ($750.00 CAD).
              </p>
            </RuleSection>

            <RuleSection num={16} title="General Conditions">
              <p>
                The Sponsor reserves the right, in its sole and absolute
                discretion, to cancel, suspend, modify, or terminate the
                Contest, in whole or in part, at any time and for any reason,
                including without limitation if fraud, technical failures, human
                error, or any other factor beyond the Sponsor&rsquo;s reasonable
                control impairs the integrity or proper functioning of the
                Contest. In such event, the Sponsor may, in its sole discretion,
                select the winner from among all eligible entries received prior
                to such cancellation, suspension, modification, or termination.
              </p>
              <p className="mt-3">
                The Sponsor reserves the right, in its sole discretion, to
                disqualify any entrant who: (i) tampers or attempts to tamper
                with the entry process or the operation of the Contest; (ii)
                violates these Rules; (iii) acts in a disruptive manner or with
                intent to annoy, abuse, threaten, or harass any other person; or
                (iv) attempts to undermine the legitimate operation of the
                Contest.
              </p>
              <p className="mt-3">
                The Sponsor&rsquo;s failure to enforce any provision of these
                Rules shall not constitute a waiver of that provision.
              </p>
            </RuleSection>

            <RuleSection
              num={17}
              title="Entrant Representations and Warranties"
            >
              <p>
                By entering the Contest, each entrant represents and warrants
                that:
              </p>
              <ol type="a" className="list-[lower-alpha] pl-6 mt-2 space-y-2">
                <li>
                  All information provided in the Entry Form is true, accurate,
                  and complete;
                </li>
                <li>
                  The entrant is authorized to enter the Contest on behalf of
                  the business or organization identified in the entry;
                </li>
                <li>
                  The entry materials do not infringe upon any third
                  party&rsquo;s intellectual property rights, privacy rights, or
                  any other rights;
                </li>
                <li>
                  The entrant has read, understood, and agreed to be bound by
                  these Rules.
                </li>
              </ol>
            </RuleSection>

            <RuleSection num={18} title="Governing Law and Disputes">
              <p>
                This Contest is governed by and shall be construed in accordance
                with the laws of the Province of Ontario and the federal laws of
                Canada applicable therein, without regard to conflict of law
                principles. Any dispute arising out of or in connection with
                this Contest shall be resolved exclusively by the courts of
                competent jurisdiction located in Toronto, Ontario, and each
                entrant hereby irrevocably submits to the exclusive jurisdiction
                of such courts.
              </p>
            </RuleSection>

            <RuleSection num={19} title="Odds of Winning">
              <p>
                There is one (1) Prize available. The odds of winning depend on
                the number and quality of eligible entries received during the
                Contest Period. As this is a skill-based contest judged on the
                criteria described in Section 6, the odds of winning cannot be
                determined in advance.
              </p>
            </RuleSection>

            <RuleSection num={20} title="Winner Announcement">
              <p>
                The winner&rsquo;s name and business name will be announced on
                the Sponsor&rsquo;s website and social media channels within
                thirty (30) days of the Contest End Date, subject to
                verification and compliance with these Rules. For the name of
                the winner, you may also send a request with a self-addressed
                stamped envelope to the Sponsor at the address provided on
                lumin8.agency.
              </p>
            </RuleSection>

            <RuleSection num={21} title="Severability">
              <p>
                If any provision of these Rules is found to be invalid, illegal,
                or unenforceable, the remaining provisions shall continue in
                full force and effect.
              </p>
            </RuleSection>

            <RuleSection num={22} title="Entire Agreement">
              <p>
                These Rules constitute the entire agreement between each entrant
                and the Sponsor with respect to the Contest and supersede all
                prior or contemporaneous communications, representations, or
                agreements, whether oral or written.
              </p>
            </RuleSection>
          </div>

          {/* Last updated & back link */}
          <SectionReveal>
            <div className="mt-16 pt-8 border-t border-foreground/10">
              <p className="text-xs text-muted-foreground italic mb-6">
                Last updated: March 2026
              </p>
              <Link
                to="/#contest"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-heading font-semibold text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Contest
              </Link>
            </div>
          </SectionReveal>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const RuleSection = ({
  num,
  title,
  children,
}: {
  num: number;
  title: string;
  children: React.ReactNode;
}) => (
  <SectionReveal>
    <div>
      <h2 className="font-heading text-lg font-bold text-foreground mb-3">
        <span className="text-primary mr-2">{num}.</span>
        {title}
      </h2>
      {children}
    </div>
  </SectionReveal>
);

export default ContestRules;
