// ─── Interfaces ──────────────────────────────────────────────────────────────

export interface OutcomeMetric {
  value: string;
  label: string;
}

export const sectors = [
  "Financial Services",
  "Consumer Products",
  "Energy & Utilities",
  "Travel & Hospitality",
  "Automotive",
  "Health & Life Sciences",
  "Manufacturing",
  "Not-for-Profit",
  "Government & Public Services",
] as const;
export type Sector = (typeof sectors)[number];

export interface Project {
  id: number;
  code: string; // e.g. "26-09" — used as the №-prefixed identifier across ledgers
  slug: string;
  title: string;
  industry: string;
  sector: Sector;           // broad industry group, used by the Archive filter
  description: string;
  category: string;
  image: string;
  tags: string[];
  featured?: boolean;
  term: string;             // e.g. "Fall 2025"
  termShort: string;        // e.g. "F25"
  duration: string;         // e.g. "6 weeks"
  delivered: string;        // short delivery summary for the ledger
  client: string;           // sanitized client descriptor
  course: string;           // course code + level
  team: string;             // team composition string
  status: string;           // "Shipped" | etc.
  brief: string;
  approach: string;
  outcome: string;
  metrics: OutcomeMetric[];
}

export interface CapabilityTrack {
  id: number;
  name: string;             // short label, matches the Archive "Experience" filter
  fullName: string;         // capability title
  area: string;             // experience area: Digital First, Finance, Marketing, Graduate
  course: string;
  level: string;
  leadId?: string;          // teamMembers id of the faculty lead
  leadName?: string;        // name as shown beside the capability
  overview: string;
  descriptionLabel?: string; // heading for the bullet list (defaults to "Description")
  description: string[];
  sampleProjects: string[];
  shipped: number;
  mostRequested?: boolean;
}

export interface PartnerType {
  id: number;
  title: string;
  description: string;
}

export interface ProjectPhase {
  number: string;
  title: string;
  bullets: string[];
  duration: string;
}

export interface Stat {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  sub?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: "director" | "officer" | "coach";
  domain?: string; // e.g. "HCD", "AI", "BI"
  leadTitle?: string; // director lead role, shown in the card header
  joined?: string; // e.g. "Joined 2019"
  avatar: string;
  avatarPosition?: string; // CSS object-position; overrides the default top-anchored crop
  bio?: string;
  profileUrl?: string;
  linkedinUrl?: string;
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tracks", label: "Solutions" },
  { href: "/projects", label: "Archive" },
  { href: "/team", label: "People" },
  { href: "/industry-coaches", label: "Industry Coaches" },
  { href: "/about", label: "Experiential Learning" },
];

// ─── What Happens Next ───────────────────────────────────────────────────────

export const whatHappensNext: string[] = [
  "Lab director reviews and confirms within 5 business days.",
  "Scoping call — problem framing, data, capability match.",
  "Project brief drafted and shared for sign-off.",
  "Student team assembled. Kickoff workshop scheduled.",
  "Semester-long project begins.",
];

// ─── Team Members ─────────────────────────────────────────────────────────────

export const teamMembers: TeamMember[] = [
  // Faculty Leaders
  {
    id: "director-1",
    name: "Dr. Alexander Korogodsky",
    title: "Lab Director · Academic Program Director, MS Business Technology",
    role: "director",
    domain: "HCD · Capstone",
    leadTitle: "Lab Director, and Director for Undergraduate Experiential Learning",
    joined: "Joined 2025",
    avatar: "/team/korogodsky.webp",
    bio: "Leads the graduate arm of the Digital-First Lab and the MS in Business Technology program at Miami. Twenty-plus years pairing applied AI with industry — financial services, logistics, sports analytics — and the architect behind the Miami Method of framing complex business problems for execution-ready delivery.",
    profileUrl: "https://people.miami.edu/profile/d745ec0f1424c88ec80310b4b30645ad",
    linkedinUrl: "https://www.linkedin.com/in/dr-alexander-korogodsky-63776111/",
  },
  {
    id: "director-6",
    name: "Dr. Robert Gregory",
    title: "Managing Director, University of Miami AI Institute",
    role: "director",
    domain: "HCD",
    leadTitle: "Leader for HCD & Product Design",
    joined: "Joined 2026",
    avatar: "/team/robert-gregory.png",
    bio: "Managing Director of the University of Miami AI Institute, contributing to the Lab's HCD & Product Design practice.",
    profileUrl: "https://people.miami.edu/profile/965a1fddc1c93a4a1339e5ac5806a241",
    linkedinUrl: "https://www.linkedin.com/in/robert-wayne-gregory-533539/",
  },
  {
    id: "director-2",
    name: "Dr. Krishna Murphy",
    title: "Lecturer, Business Technology",
    role: "director",
    domain: "BI & Dashboards",
    leadTitle: "Leader for BI",
    joined: "Joined 2026",
    avatar: "/team/murphy.webp",
    bio: "Co-directs the Lab and teaches the foundational digital product and HCD coursework at Miami. Background in product design, decision sciences, and bringing data-driven dashboards into healthcare and consumer operations. Mentors student teams from first interview to final executive demo.",
    profileUrl: "https://people.miami.edu/profile/e2e14a2dfa56d4d5e0c9cca2e5000490",
    linkedinUrl: "https://www.linkedin.com/in/kris-murphy-5477373/",
  },
  {
    id: "director-3",
    name: "Dr. Erotokritos Skordilis",
    title: "Lecturer, Business Technology",
    role: "director",
    domain: "AI Software Engineering",
    leadTitle: "Leader for AI experience",
    joined: "Joined 2026",
    avatar: "/team/skordilis.webp",
    bio: "Lectures in Business Technology at Miami and leads the Lab's AI software engineering work. Pairs applied machine learning and software systems with student teams, taking models and prototypes from research into production-ready delivery.",
    profileUrl: "https://people.miami.edu/profile/b7be952fb190b6a66372000fc95d769f",
    linkedinUrl: "https://www.linkedin.com/in/erotokritos-skordilis/",
  },
  {
    id: "director-4",
    name: "Dr. Leila Pinto-Campillo",
    title: "Lecturer, Finance",
    role: "director",
    domain: "Finance",
    leadTitle: "Leader for Finance experience",
    joined: "Joined 2026",
    avatar: "/team/pinto-campillo.webp",
    bio: "Lectures in Finance at Miami and leads the Lab's finance practice. Brings financial modeling, valuation, and analytics to projects, helping student teams ground digital solutions in sound business and financial reasoning.",
    profileUrl: "https://people.miami.edu/profile/925baf27533cbcc23856599d66910ce7",
  },
  {
    id: "director-5",
    name: "Carlos Erban",
    title: "Lecturer, Marketing",
    role: "director",
    domain: "Digital Marketing",
    leadTitle: "Leader for Digital Marketing experience",
    joined: "Joined 2026",
    avatar: "/team/Carlos.webp",
    bio: "Lectures at Miami and leads the Lab's digital marketing practice, helping student teams turn shipped work into brand, growth, and go-to-market strategy.",
    profileUrl: "https://people.miami.edu/profile/b2a709b79fc8e1f40eb7ba543995e44c",
    linkedinUrl: "https://www.linkedin.com/in/carloserban/",
  },
  // Officers (executive board + heads)
  {
    id: "officer-1",
    name: "Matthew Rodriguez",
    title: "President · Coach",
    role: "officer",
    domain: "Strategy · HCD",
    avatar: "/team/matthew-rodriguez.jpg",
    avatarPosition: "center",
  },
  {
    id: "officer-2",
    name: "Krishen Goswami",
    title: "Head of Partnerships · Coach",
    role: "officer",
    domain: "Partnerships · AI",
    avatar: "/team/krishen-goswami.png",
  },
  {
    id: "officer-3",
    name: "Santiago Stebelski",
    title: "Head of Marketing · Coach",
    role: "officer",
    domain: "Brand · GTM",
    avatar: "/team/santiago-stebelski.jpg",
  },
  {
    id: "officer-4",
    name: "Brunella Meini",
    title: "Treasurer · Compliance · Coach",
    role: "officer",
    domain: "Finance · BI",
    avatar: "/team/brunella-meini.jpg",
  },
  {
    id: "officer-5",
    name: "Tommaso Buoncristiano",
    title: "Head of Delivery · Coach",
    role: "officer",
    domain: "Delivery · AI Engineering",
    avatar: "/team/tommaso.jpg",
  },
  {
    id: "officer-6",
    name: "Lily Belle Kahn",
    title: "Head of Talent & Program · Coach",
    role: "officer",
    domain: "Talent & Program · HCD",
    avatar: "/team/lily.png",
  },
  // Coaches (incl. coordinators)
  {
    id: "coach-0",
    name: "Niki Dave",
    title: "Coach",
    role: "coach",
    domain: "Pedagogy · HCD",
    avatar: "/team/niki-dave.jpg",
  },
  {
    id: "coach-1",
    name: "Sylvie Vu",
    title: "Talent & Programming Coordinator · Coach",
    role: "officer",
    domain: "HCD · Capstone",
    avatar: "/team/sylvie.jpg",
  },
  {
    id: "coach-2",
    name: "Dominika Pindor",
    title: "Marketing Coordinator · Coach",
    role: "officer",
    domain: "Marketing · HCD",
    avatar: "/team/dominika-pindor.png",
  },
  {
    id: "coach-4",
    name: "Taylor Dutil",
    title: "Coach",
    role: "coach",
    domain: "HCD",
    avatar: "/team/taylor-dutil.jpeg",
  },
  {
    id: "coach-5",
    name: "Michelina Hoybach",
    title: "Coach",
    role: "coach",
    domain: "HCD",
    avatar: "/team/michelina-hoybach.png",
  },
  {
    id: "coach-6",
    name: "Rosa Correa",
    title: "Coach",
    role: "coach",
    domain: "HCD",
    avatar: "/team/rosa-correa.jpeg",
  },
  {
    id: "coach-7",
    name: "Kiran Reynolds",
    title: "Coach",
    role: "coach",
    domain: "HCD",
    avatar: "/team/kiran-reynolds.png",
  },
  {
    id: "coach-8",
    name: "Victoria Batts",
    title: "Coach",
    role: "coach",
    avatar: "/team/placeholder.png",
  },
  {
    id: "coach-9",
    name: "Juliette Hana Clausen",
    title: "Coach",
    role: "coach",
    avatar: "/team/placeholder.png",
  },
  {
    id: "coach-10",
    name: "Wil Jay Eckert",
    title: "Coach",
    role: "coach",
    avatar: "/team/placeholder.png",
  },
  {
    id: "coach-11",
    name: "Maddie Suzanne Figgie",
    title: "Coach",
    role: "coach",
    avatar: "/team/placeholder.png",
  },
  {
    id: "coach-12",
    name: "Aanya Mishra",
    title: "Coach",
    role: "coach",
    avatar: "/team/placeholder.png",
  },
  {
    id: "coach-13",
    name: "Anastasia Zagoriy",
    title: "Coach",
    role: "coach",
    avatar: "/team/placeholder.png",
  },
  {
    id: "coach-14",
    name: "Jamie Saeeun Lee",
    title: "Coach",
    role: "coach",
    avatar: "/team/placeholder.png",
  },
  {
    id: "coach-15",
    name: "Ella Froese McHardy",
    title: "Coach",
    role: "coach",
    avatar: "/team/placeholder.png",
  },
  {
    id: "coach-16",
    name: "Daniel James Ausrotas",
    title: "Coach",
    role: "coach",
    avatar: "/team/placeholder.png",
  },
  {
    id: "coach-17",
    name: "Mariana Bernal",
    title: "Coach",
    role: "coach",
    avatar: "/team/placeholder.png",
  },
  {
    id: "coach-18",
    name: "Wheatley Hammond Evarts",
    title: "Coach",
    role: "coach",
    avatar: "/team/placeholder.png",
  },
  {
    id: "coach-19",
    name: "Emilia Sam Fusaro",
    title: "Coach",
    role: "coach",
    avatar: "/team/placeholder.png",
  },
  {
    id: "coach-20",
    name: "Edmund Liew",
    title: "Coach",
    role: "coach",
    avatar: "/team/edmund-liew.jpg",
  },
  {
    id: "coach-21",
    name: "Simi Naomi Sowemimo",
    title: "Coach",
    role: "coach",
    avatar: "/team/placeholder.png",
  },
  {
    id: "coach-22",
    name: "Grisel M De Silva",
    title: "Coach",
    role: "coach",
    avatar: "/team/grisel-de-silva.png",
  },
  {
    id: "coach-23",
    name: "Zidane Habib-Mitchell",
    title: "Coach",
    role: "coach",
    avatar: "/team/zidane-habib-mitchell.jpeg",
    avatarPosition: "center 40%",
  },
  {
    id: "coach-24",
    name: "Thomaz Toshiyuki Honda",
    title: "Coach",
    role: "coach",
    avatar: "/team/placeholder.png",
  },
  {
    id: "coach-25",
    name: "Ron Kazovsky",
    title: "Coach",
    role: "coach",
    avatar: "/team/placeholder.png",
  },
];

// The cohort currently in session. Update this each semester.
export const currentCohort = "Fall 2026";

// ─── Stats ───────────────────────────────────────────────────────────────────

export const stats: Stat[] = [
  { value: 16, suffix: "", label: "Projects shipped", sub: "2025 onward" },
  { value: 6, suffix: "", label: "Capability solutions", sub: "HCD · AI · BI · Finance · Marketing · Capstone" },
  { value: 100, suffix: "%", label: "Free to partners", sub: "No fee, no retainer" },
  { value: 12, suffix: "wk", label: "Average project", sub: "Kickoff → handoff" },
];

// ─── Capability Tracks ───────────────────────────────────────────────────────

export const capabilityTracks: CapabilityTrack[] = [
  {
    id: 1,
    name: "HCD & Product Design",
    fullName: "Digital Product Innovation, Customer Experience Design and Prototyping",
    area: "Digital First",
    course: "BTE 210",
    level: "Undergraduate",
    leadId: "director-1",
    leadName: "Dr. Korogodsky",
    overview:
      "This experience equips learners to turn abstract business ideas into market-ready digital products through strategic business design, human-centered innovation, and rapid prototyping. Participants build skills in market analysis, user experience design, and prototyping to create, test, and refine digital solutions aligned with business strategy, user needs, and technical feasibility.",
    description: [
      "Translates ambiguous business ideas into aligned, testable digital products using strategy, human-centered design, and rapid prototyping.",
      "Develops business models grounded in market analysis, differentiation, SWOT, and value propositions.",
      "Uses HCD to uncover user needs, define value, and prioritize features.",
      "Builds high-fidelity web and mobile prototypes to test assumptions and align stakeholders.",
    ],
    sampleProjects: [
      "Developing mobile app prototypes for young professionals and remote collaboration tools.",
      "Designing high-fidelity digital platforms (websites, iPhone apps) to enhance customer and patient experiences.",
      "Creating user journey maps, personas, and empathy maps across healthcare and financial services.",
      "Conducting SWOT analyses, business plans, and value-based differentiation strategies for new product launches.",
    ],
    shipped: 6,
    mostRequested: true,
  },
  {
    id: 2,
    name: "AI Engineering",
    fullName: "AI & Data Product Engineering for Industry Solutions",
    area: "Digital First",
    course: "BTE 440",
    level: "Undergraduate",
    leadId: "director-3",
    leadName: "Dr. Skordilis",
    overview:
      "This program equips learners to design and deploy production-grade AI systems for real-world business challenges. Participants build expertise in cost-efficient, latency-aware, and accurate AI, with strong attention to governance and risk mitigation, enabling them to translate complex problems into reliable, auditable AI products that deliver measurable value to industry partners.",
    description: [
      "Domain-Grounded Generative AI Systems (RAG-First Design)",
      "Agentic AI for Complex Analytical Workflows",
      "Cost-, Latency-, and Performance-Aware AI Engineering",
      "Model Adaptation via Lightweight Fine-Tuning (LoRA)",
      "Governance, Guardrails, and Risk Mitigation",
      "Evaluation-Driven Development",
      "Full-Stack Delivery & Deployment",
      "Translation of AI Capability into Business and Educational Value",
    ],
    sampleProjects: [
      "Build document-grounded AI assistants for finance, legal, and executive decision support.",
      "Design agent-based and fine-tuned AI systems to automate analysis and generate structured outputs.",
      "Develop cost-transparent, latency-aware AI products with dashboards for enterprise and education",
      "Implement governance-compliant, auditable AI tools with strict numeric grounding, PII filtering, and clear provenance.",
    ],
    shipped: 1,
  },
  {
    id: 3,
    name: "BI & Dashboards",
    fullName: "Data-Driven Decision-Support Dashboards",
    area: "Digital First",
    course: "BUS 150",
    level: "Undergraduate",
    leadId: "director-2",
    leadName: "Dr. Murphy",
    overview:
      "This experience equips learners to design decision-support dashboards using Excel, Power BI, and Tableau. Participants transform complex financial and operational data into actionable insights, enabling faster, more informed decisions. Through real-world applications, learners build dashboards that support scenario analysis, performance monitoring, and forward-looking insights for executives and managers.",
    description: [
      "Interactive decision-support dashboard tailored to executive needs",
      "Financial model for budgeting and forecasting with scenario analysis",
      "Operational efficiency model identifying bottlenecks and improvement levers",
      "Cash-flow model integrating revenue, costs, and working-capital dynamics",
      "Mobile-friendly dashboard for on-the-go decision-making",
    ],
    sampleProjects: [
      "Build sales, inventory, and performance dashboards for retail, hospitality, and consulting firms.",
      "Create financial forecasting and cash-flow tools to support budgeting, liquidity, and funding decisions.",
      "Design operational and scenario-planning dashboards for logistics and healthcare resource allocation.",
      "Develop investment and risk monitoring dashboards with mobile access for executives and clients.",
    ],
    shipped: 2,
  },
  {
    id: 4,
    name: "Finance & Valuation",
    fullName: "Applied Financial Decision Analysis",
    area: "Finance",
    course: "FIN 302",
    level: "Undergraduate",
    leadId: "director-4",
    leadName: "Dr. Pinto-Campillo",
    overview:
      "This experience equips learners to apply foundational finance concepts to real-world corporate, investment, and capital-market decisions. Using Excel, financial statements, market data, and structured assumptions, participants analyze financial performance, forecast cash flows, value investments, and evaluate whether business decisions create or destroy value. Through real-world applications, learners develop financial modeling, analytical judgment, and the ability to communicate evidence-based recommendations to managers, investors, and lenders.",
    description: [
      "Financial statement and ratio analysis assessing profitability, liquidity, leverage, operating performance, and cash-flow strength",
      "Time-value-of-money models incorporating present value, future value, annuities, compounding, and interest-rate conversions",
      "Capital-budgeting and NPV models evaluating investments, projects, and financing decisions",
      "Bond valuation and interest-rate-risk analysis incorporating yield, maturity, and risk-return trade-offs",
      "Excel-based financial models with assumptions, cash-flow forecasts, sensitivity analysis, and executive recommendations",
    ],
    sampleProjects: [
      "Analyze the financial health and performance of a public company against industry peers",
      "Evaluate a major capital investment, technology upgrade, expansion, or new-product launch using NPV and projected cash flows",
      "Develop buy-versus-lease or financing models for major corporate assets",
      "Analyze corporate bonds, debt obligations, interest-rate exposure, and financing structure",
      "Develop valuation models for public companies, real estate, facilities, or other investment opportunities",
    ],
    shipped: 0,
  },
  {
    id: 5,
    name: "Digital Marketing",
    fullName: "Digital Marketing, SEO & AI Search Strategy",
    area: "Marketing",
    course: "MKT 387",
    level: "Undergraduate",
    leadId: "director-5",
    leadName: "Carlos Erban",
    overview:
      "This experience equips learners to analyze and improve an organization's digital visibility, competitive positioning, and content strategy. Using tools such as Semrush and course-approved AI platforms, participants evaluate organic search performance, competitor positioning, keyword opportunities, customer search intent, and emerging AI-search visibility. Learners translate those insights into practical digital-marketing strategies, content recommendations, and implementation priorities that support customer acquisition, engagement, and business growth.",
    description: [
      "SEO current-state assessment covering organic visibility, keyword rankings, ranking pages, on-page factors, and content performance",
      "Competitive and keyword-gap analysis identifying where competitors outperform the organization and where new opportunities exist",
      "Customer search-intent, positioning, and content analysis connecting digital capabilities to meaningful customer value",
      "AI-search visibility assessment examining how brands, products, and expertise appear in AI-generated search and answer environments",
      "Digital content strategy defining priority audiences, keyword clusters, content themes, landing pages, and messaging",
      "Content development and implementation briefs for SEO, marketing, website, and email teams",
    ],
    sampleProjects: [
      "Conduct an SEO and competitive-positioning audit for a company website or digital platform",
      "Identify high-value keyword gaps and develop a prioritized organic-search growth strategy",
      "Assess a company's visibility in AI-driven search and recommend ways to improve AI discoverability",
      "Develop an integrated SEO and content roadmap including new pages, articles, guides, and landing pages",
      "Rewrite website messaging to better communicate customer value and competitive differentiation",
      "Create content briefs, SEO titles, meta descriptions, internal-linking recommendations, and implementation plans for marketing and web teams",
      "Extend priority digital content into targeted email campaigns or nurture communications",
    ],
    shipped: 0,
  },
  {
    id: 6,
    name: "Graduate Capstone",
    fullName: "Client-Centered Capstone Framing, Value Engineering & Execution Readiness",
    area: "Graduate",
    course: "BTE Adv.",
    level: "Graduate (MS)",
    overview:
      "MS in Business Technology students apply the Miami Method to frame complex business problems, align stakeholders, and design execution-ready solutions integrating data, AI, cybersecurity, and fintech.",
    descriptionLabel: "Typical deliverables",
    description: [
      "Problem framing and stakeholder alignment report",
      "Execution-ready proposal with implementation roadmap",
      "Data + AI + digital integration architecture",
      "KPI framework and measurement plan",
      "Final presentation to executive leadership",
    ],
    sampleProjects: [],
    shipped: 7,
  },
];



// ─── Project Phases ──────────────────────────────────────────────────────────

export const projectPhases: ProjectPhase[] = [
  {
    number: "01",
    title: "Needs Assessment",
    duration: "2–3 weeks · Pre-semester",
    bullets: [
      "Structured intake conversation with Lab director",
      "Business problem scoping using the Miami Method",
      "Digital readiness and data availability audit",
      "Capability matching across four solutions",
      "Scope, deliverables, and governance agreement",
    ],
  },
  {
    number: "02",
    title: "Experiential Learning Delivery",
    duration: "5–10 weeks · Semester",
    bullets: [
      "Student team formation matched to project skill needs",
      "Faculty-supervised execution across the semester",
      "Bi-weekly client check-ins and milestone reviews",
      "Prototype or dashboard tested with real data",
      "Final presentation to client leadership",
    ],
  },
  {
    number: "03",
    title: "Post-Experiential Delivery",
    duration: "2–4 weeks · Post-semester",
    bullets: [
      "Implementation-ready documentation package",
      "Handoff session with client technical team",
      "Optional follow-on Lab project",
      "Impact assessment and outcome measurement",
      "Alumni network connection for ongoing advisory",
    ],
  },
];

// ─── Annual Timeline ──────────────────────────────────────────────────────────
// Axis runs August through the following August (13 month-slots, index 0–12).

export interface TimelinePhase {
  monthIndex: number; // index into annualTimelineMonths
  span: number;        // number of consecutive months this phase covers
  label: string;
}

export interface TimelineColumn {
  id: string;
  cohort: "Fall" | "Spring" | "Summer";
  track: "Execution" | "Sourcing";
  group: "Fall semester" | "Spring semester" | "Summer";
  phases: TimelinePhase[];
}

export const annualTimelineMonths = [
  "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
];

export const annualTimelineColumns: TimelineColumn[] = [
  {
    id: "fall-execution",
    cohort: "Fall",
    track: "Execution",
    group: "Fall semester",
    phases: [
      { monthIndex: 0, span: 1, label: "Semester begins" },
      { monthIndex: 1, span: 1, label: "Partner & team onboarding" },
      { monthIndex: 2, span: 2, label: "Term project execution" },
      { monthIndex: 4, span: 1, label: "Final presentations" },
    ],
  },
  {
    id: "spring-sourcing",
    cohort: "Spring",
    track: "Sourcing",
    group: "Fall semester",
    phases: [
      { monthIndex: 1, span: 1, label: "Begin partner selection" },
      { monthIndex: 2, span: 1, label: "Project matching" },
      { monthIndex: 3, span: 1, label: "Scope defined & locked" },
      { monthIndex: 4, span: 1, label: "Agreement in place" },
    ],
  },
  {
    id: "spring-execution",
    cohort: "Spring",
    track: "Execution",
    group: "Spring semester",
    phases: [
      { monthIndex: 5, span: 1, label: "Semester begins" },
      { monthIndex: 6, span: 1, label: "Partner & team onboarding" },
      { monthIndex: 7, span: 2, label: "Term project execution" },
      { monthIndex: 9, span: 1, label: "Final presentations" },
    ],
  },
  {
    id: "summer-sourcing",
    cohort: "Summer",
    track: "Sourcing",
    group: "Spring semester",
    phases: [
      { monthIndex: 6, span: 1, label: "Begin partner selection" },
      { monthIndex: 7, span: 1, label: "Project matching" },
      { monthIndex: 8, span: 1, label: "Scope defined & locked" },
      { monthIndex: 9, span: 1, label: "Agreement in place" },
    ],
  },
  {
    id: "summer-execution",
    cohort: "Summer",
    track: "Execution",
    group: "Summer",
    phases: [
      { monthIndex: 10, span: 1, label: "Partner & team onboarding" },
      { monthIndex: 11, span: 1, label: "Term project execution" },
      { monthIndex: 12, span: 1, label: "Final presentations" },
    ],
  },
];

// ─── Partner Types ───────────────────────────────────────────────────────────

export const partnerTypes: PartnerType[] = [
  {
    id: 1,
    title: "Mid-Market Companies",
    description:
      "Growing businesses that need AI, analytics, or product design capacity but cannot yet justify a full-time hire or agency retainer.",
  },
  {
    id: 2,
    title: "Startups & Scale-Ups",
    description:
      "Early-stage ventures that need production-ready prototypes, validated business models, or data infrastructure built from scratch.",
  },
  {
    id: 3,
    title: "Nonprofits & Civic Organizations",
    description:
      "Mission-driven organizations that need dashboards, digital tools, or AI solutions to stretch limited resources further.",
  },
  {
    id: 4,
    title: "International & South Florida Businesses",
    description:
      "Companies entering the US market or expanding regionally, leveraging the school's global business perspective and Miami's gateway position.",
  },
  {
    id: 5,
    title: "Healthcare & Life Sciences",
    description:
      "Providers and innovators seeking patient experience redesign, operational dashboards, or governance-compliant AI tools.",
  },
  {
    id: 6,
    title: "Fintech & Financial Services",
    description:
      "Firms building document-grounded AI assistants, risk monitoring tools, or KPI dashboards for executive decision support.",
  },
];

// ─── Projects (Real ACE Partnerships) ────────────────────────────────────────

export const projects: Project[] = [
  {
    id: 47,
    code: "26-47",
    slug: "flovara-social-utility-platform",
    title: "Flovara Social Utility Platform",
    industry: "Social Discovery / Consumer Mobile",
    sector: "Consumer Products",
    description:
      "A full-stack technology company that builds web and mobile apps for clients also runs its own product: a location-based social utility that facilitates real-world, in-person connections based on user intent — professional networking, friendship, romantic interest, or shared activities — and directs foot traffic to partner venues. Its value depends on how clearly the conversation with its AI assistant turns into real-world outcomes. Delivering a strengthened experience, with personas, journey maps, and high-fidelity website and iPhone prototypes.",
    category: "HCD",
    image: "/projects/social-discovery.jpg",
    tags: ["Conversational AI UX", "Marketplace Design", "Personas & Journeys"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Web + iPhone prototype · personas",
    client: "Location-based social discovery startup",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Rethink and strengthen the user experience of a dual-sided marketplace — users seeking intent-driven interactions and venues seeking targeted foot traffic — so the interface, flows, and interaction logic support clear articulation of intent, seamless interaction with the AI assistant, and conversion from digital interaction to real-world engagement.",
    approach:
      "Analyzing the product with the Business Model Canvas and a concise competitive scan, then developing core personas based on information provided by the company and validated through stakeholder discussions, with empathy maps, journey maps from the AI assistant through discovery to real-world engagement, and a pain-point and needs analysis. These feed high-fidelity website and iPhone prototypes of roughly 12–15 screens per persona. Experience design and UI/UX prototyping only — no software development, AI model work, data engineering or backend, or production deployment.",
    outcome:
      "High-fidelity website and iPhone prototypes (about 25 screens across the personas) demonstrating how the platform meets each persona's needs, from stating intent to interacting with the AI assistant to discovering people and venues and engaging in the real world. Presented in a workshop-style executive presentation to the company's leadership.",
    metrics: [
      { value: "~25 screens", label: "12–15 per persona" },
      { value: "2 platforms", label: "Website + iPhone app" },
      { value: "UX-only scope", label: "No backend or AI-model work" },
    ],
  },
  {
    id: 46,
    code: "26-46",
    slug: "surgestreams-space-economy-platform",
    title: "SurgeStreams Space-Economy Platform",
    industry: "Aerospace / IT Consulting",
    sector: "Manufacturing",
    description:
      "A space-economy–focused IT consulting and advisory firm helps aerospace OEMs, Tier-1 suppliers, and related organizations modernize legacy systems, gain real-time visibility into complex supply chains, and drive data-driven operations through AI, cloud, and advanced systems integration. It is evolving from a broader IT consulting profile toward a focused space-economy position, but its website still reflects the earlier, general positioning. Delivering a platform concept — website and iPhone app — that communicates its specialized role.",
    category: "HCD",
    image: "/projects/aerospace-supply-chain.jpg",
    tags: ["Brand Repositioning", "B2B Personas", "Platform UX"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Platform concept · positioning",
    client: "IT consulting firm repositioning for aerospace",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Redesign how the firm presents itself digitally, with a platform experience — a modern website and a complementary iPhone app — that clearly communicates its role as a specialized partner in the space economy and frames its capabilities in terms of customer pains, operational challenges, and measurable outcomes, rather than a static brochure site.",
    approach:
      "Analyzing the firm as a digital platform concept within its space-economy positioning, supported by a concise competitive and analog scan, then developing personas based solely on information from the firm and validated through stakeholder discussions — engineering leaders, supply chain managers, program managers, and technology leaders in aerospace and space-economy organizations — with empathy maps, journey maps from discovery to exploring capabilities to engaging with platform concepts, and a pain-point and needs analysis. Experience design and UI/UX prototyping only — no software development, AI model development or integration, data engineering or backend design, or production deployment.",
    outcome:
      "High-fidelity website and iPhone prototypes of roughly 12–15 screens per persona, reflecting the firm's space-economy positioning, platform-oriented interaction concepts, and a clear communication of value propositions and outcomes. Presented to the firm in an executive session covering the platform concept and positioning, personas and journeys, the prototypes, and key design decisions and recommendations for future development.",
    metrics: [
      { value: "4 personas", label: "Engineering · supply chain · program · technology" },
      { value: "12–15 screens", label: "Per persona prototype" },
      { value: "2 platforms", label: "Website + iPhone app" },
    ],
  },
  {
    id: 45,
    code: "26-45",
    slug: "manuka-gathering-event-workspace",
    title: "Manuka / Gathering Event Workspace",
    industry: "Events / Multi-Sided Platform",
    sector: "Travel & Hospitality",
    description:
      "An early-stage event-planning platform is designed for professional event planners, with hosts (such as wedding couples and event organizers) and vendors (such as venues, caterers, and photographers) as secondary users. Planners today manage their work through fragmented tools — email, spreadsheets, and ad hoc systems — which creates inefficiencies and limits clients' and vendors' visibility into planning progress. Delivering a Business Model Canvas, event-lifecycle journey mapping, and a 25+ screen web and iPhone prototype.",
    category: "HCD",
    image: "/projects/event-workspace.jpg",
    tags: ["Multi-Sided Platform", "Workflow UX", "Business Model Canvas"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Web + iPhone prototype · event workflow",
    client: "Event-planning workspace startup",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Define and prototype a multi-sided platform in which planners, vendors, and hosts work within a shared workspace for each event — centralizing communication, task management, timelines, and decision tracking with appropriate visibility controls — positioned as a professional tool for planners, the primary customer, rather than targeting hosts directly.",
    approach:
      "Developing a Business Model Canvas with a concise competitive scan and SWOT analysis, then 1–3 personas (a professional event planner, a host or client, and potentially a vendor) based on provided information and validated through stakeholder engagement, with empathy maps and an end-to-end journey across the event lifecycle: onboarding, defining requirements, vendor coordination, issue management, execution, and post-event wrap-up. Prototypes are built with no-code or visual tools. Experience design and UI/UX prototyping only — no software development, backend or data architecture, production deployment, or integration with live systems.",
    outcome:
      "High-fidelity web and iPhone prototypes of 25+ screens covering the core flows: multi-sided interaction between planners, vendors, and hosts; the event-level workspace; task, timeline, and communication management; and visibility and access control across participants. Presented in an executive-level walkthrough of the business model and positioning, personas and journeys, the prototypes, and key design decisions and feature prioritization. All artifacts transfer to the company at the end of the engagement.",
    metrics: [
      { value: "25+ screens", label: "Web + iPhone prototype" },
      { value: "3 sides", label: "Planners · hosts · vendors" },
      { value: "6 stages", label: "Event lifecycle mapped" },
    ],
  },
  {
    id: 44,
    code: "26-44",
    slug: "enable-talent-access-passport",
    title: "Enable Talent Access Passport",
    industry: "Accessibility Tech / Identity",
    sector: "Not-for-Profit",
    description:
      "A recruitment platform connecting employers with talented professionals with disabilities, within a broader ecosystem of accessibility resources and inclusive user experiences, sees job-ready professionals facing systemic barriers in hiring — inaccessible systems, repeated and intrusive disclosure of disability, and insufficient accommodations. People must repeatedly share sensitive medical and accessibility information across job applications, services, and institutions. Delivering a prototype of a standardized “access passport,” verified once and shared without exposing the underlying documents.",
    category: "HCD",
    image: "/projects/accessibility-technology.jpg",
    tags: ["Privacy-First UX", "Multi-Sided Design", "Accessibility"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Passport prototype · privacy UX",
    client: "Accessibility-focused recruitment platform",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Define and prototype a multi-sided access passport platform that lets users securely submit and verify their information once, then share only their accessibility requirements — without exposing underlying documents — with employers and other institutions, showing how passport creation, verification, and usage would work in practice.",
    approach:
      "Framing the Access Passport as a multi-sided platform within disability-inclusive employment workflows, supported by a concise competitive and analog scan, then developing personas for passport holders (individuals with disabilities), verifiers (medical organizations, NGOs, or authorities), and receivers (employers, service providers, institutions), based on provided information and validated through stakeholder discussion. Empathy maps and end-to-end journeys cover passport creation, verification, and sharing, with a focus on friction around privacy, trust, and usability. Experience design and UI/UX prototyping only — no software development, backend or security architecture, integration with real medical, NGO, or employer systems, or production deployment.",
    outcome:
      "High-fidelity web and iPhone prototypes of 25+ screens covering passport creation and profile setup, verification workflows with external organizations, controlled sharing of accessibility requirements with receivers, and multi-sided interactions across users, verifiers, and receivers. Presented in an executive-style walkthrough of the platform concept and positioning, personas and journeys, the prototypes, and key design decisions and recommendations; all artifacts transfer to the company at the end of the engagement.",
    metrics: [
      { value: "25+ screens", label: "High-fidelity web + iPhone prototype" },
      { value: "3 sides", label: "Holders · verifiers · receivers" },
      { value: "Share once", label: "Requirements, not documents" },
    ],
  },
  {
    id: 43,
    code: "26-43",
    slug: "forex-payments-education-portal",
    title: "Forex Payments Education Portal",
    industry: "Fintech / SMB Financial Services",
    sector: "Financial Services",
    description:
      "A foreign exchange services business helps clients get better FX rates by managing and executing trades on their behalf. Its clients are mostly large multinationals, where FX pricing is often non-transparent, and it is now shifting to small and medium-sized businesses, which frequently get suboptimal rates without knowing the true cost from banks that treat FX as a secondary revenue stream. Delivering a Wix-ready website concept plus a 25+ screen clickable iPhone prototype that educates SMBs on FX pricing.",
    category: "HCD",
    image: "/projects/fx-currency.jpg",
    tags: ["FX Education", "Trust UX", "Multi-Sided Platform"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "FX education portal · trust UX",
    client: "Managed FX service provider",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Design and prototype a Forex Payments Portal that educates SMB owners and financial decision-makers on FX pricing, spreads, and the true cost of transactions, increases transparency, and positions the managed FX service as a trusted partner able to secure better rates than traditional providers — an educational and transactional interface that builds trust and differentiates from traditional banking experiences.",
    approach:
      "Developing a Business Model Canvas with a concise competitive scan of FX and payments platforms, then personas of SMB owners and financial decision-makers informed by stakeholder input and, where possible, interviews with SMB clients, with empathy maps and a journey from awareness through education and evaluation to engagement, covering key decision points, friction, and trust-building moments. Experience design and UI/UX prototyping only — no software development, backend or pricing engines, integration with FX providers, real financial transactions, or production deployment.",
    outcome:
      "A website built in Wix (or an equivalent no-code platform) and structured for potential handoff, plus a clickable high-fidelity iPhone prototype of 25+ screens, covering educational flows that explain FX pricing and spreads, interaction with the FX service offering, and decision-support experiences for evaluating FX options. Presented in an executive-style walkthrough; all artifacts transfer to the founder at the end of the engagement, enabling future handoff to a development team.",
    metrics: [
      { value: "25+ screens", label: "Clickable iPhone prototype" },
      { value: "1 website", label: "Wix-ready concept" },
      { value: "4 stages", label: "Awareness → education → evaluation → engagement" },
    ],
  },
  {
    id: 42,
    code: "26-42",
    slug: "neuroflex-support-platform",
    title: "NeuroFlex Support Platform",
    industry: "Health Tech / Neurodiversity Support",
    sector: "Health & Life Sciences",
    description:
      "A multi-sided support platform needed to let neurodiverse individuals plan goals, track patterns, receive alerts, and coordinate support with family, friends, and educators. Delivering a validated ecosystem concept and high-fidelity app and web prototypes across learner, parent, and professor personas.",
    category: "HCD",
    image: "https://picsum.photos/seed/neuroflex-support/800/500",
    tags: ["HCD", "Health Tech UX", "Multi-Persona Design"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "5 weeks",
    delivered: "App + portal prototype · ecosystem",
    client: "Neurodiversity support platform",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Shape a multi-sided support platform where a neurodiverse individual can plan goals, track patterns, and coordinate support with their circle.",
    approach:
      "Running a five-week HCD engagement with founder workshops, ecosystem and Business Model Canvas mapping, a competitive scan and SWOT, and learner/parent/professor personas; producing prioritized features and high-fidelity iPhone app and web/portal prototypes — no clinical logic, HIPAA implementation, or backend.",
    outcome:
      "A validated platform ecosystem, feature rationale, and prototype covering onboarding, planning, tracking, rewards, supporter interactions, alerts, and role-specific web views.",
    metrics: [
      { value: "5 weeks", label: "HCD engagement" },
      { value: "3 personas", label: "Learner · parent · professor" },
      { value: "1 ecosystem", label: "Validated platform concept" },
    ],
  },
  {
    id: 41,
    code: "26-41",
    slug: "conversational-ai-hospitality-gtm",
    title: "Conversational AI for Hospitality GTM",
    industry: "Hospitality / Conversational AI",
    sector: "Travel & Hospitality",
    description:
      "A serial entrepreneur has built a working conversational AI platform for family-travel environments — COPPA-compliant, kid-safe, and meant to answer repetitive pre-stay questions (pets, pools, amenities, policies, property information) through a conversational booking and FAQ experience. The go-to-market hypothesis is that hotels and resorts are the strongest first target, but it still needs validating, along with how decision-makers should be approached. Delivering a go-to-market playbook alongside guest-facing and hotel-management UX prototypes.",
    category: "HCD",
    image: "/projects/family-resort.jpg",
    tags: ["Go-to-Market", "Conversational AI UX", "Market Validation"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "GTM playbook · guest + operations UX",
    client: "Kid-safe conversational AI company",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Stress-test the target market, sharpen positioning, and create an execution-ready go-to-market playbook — with clear market choices, usable outreach assets, and measurable tests that can be put into practice quickly — while prototyping the guest and hotel-management experiences around the existing conversational AI.",
    approach:
      "Focused market research, a competitive scan, and positioning analysis to identify priority hotel, resort, or family-venue segments, their decision-makers, value propositions, messaging, channels, and likely buyer objections. 1–3 personas — a hotel owner or management decision-maker, a hotel operations or guest-services user, and a family traveler — with empathy maps and end-to-end guest and hotel-manager journeys from pre-stay questions through evaluation, use, and escalation. Excludes managed sales and marketing execution, production software, live integration, and liability-bearing execution.",
    outcome:
      "A go-to-market playbook with outreach sequences, channels, and messaging, prioritized trade shows, and concrete test campaigns with measurable success criteria, plus high-fidelity guest-facing and hotel-management design concepts — conversational flows for FAQs, property information, and booking questions, kid-safe interaction patterns with clear escalation to human support, and the operations-side experience. Non-deployable design artifacts that conceptually integrate with the existing AI platform. Presented in an executive-level walkthrough, with all artifacts transferred to the client.",
    metrics: [
      { value: "1 playbook", label: "Execution-ready go-to-market plan" },
      { value: "2 sides", label: "Guest + hotel-management UX" },
      { value: "1–3 personas", label: "Owner · operations · family traveler" },
    ],
  },
  {
    id: 40,
    code: "26-40",
    slug: "content-repurposing-platform-ux",
    title: "Content Repurposing Platform UX",
    industry: "Content Tech / Creator Tools",
    sector: "Consumer Products",
    description:
      "A B2B content agency that builds content flywheels for companies — podcast shows, YouTube series, and webinar programs — repurposes each long-form asset into shorter segments, posts, short-form videos, and infographics by hand, switching between social platforms, AI tools, and storage tools, and wasting time maintaining a scattered content asset bank. It is building an AI content repurposing platform, but the product exists only in bits and pieces. Delivering updated wireframes and UX, refined marketer personas, and feasible AI-agent and integration improvements.",
    category: "HCD",
    image: "/projects/content-repurposing.jpg",
    tags: ["MVP UX Improvement", "Content Ops", "Agent Workflow"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Updated wireframes · agent improvements",
    client: "B2B content agency building an AI platform",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Take a partial MVP and drive it toward a more coherent, fully usable one for real marketers: a single-tab experience that turns one source asset into many derivative assets, keeps repurposed assets linked back to their source in a centralized content asset bank, and replaces today's multi-tool, multi-tab workflow.",
    approach:
      "Assessing the current MVP — wireframes that need updating, an initial AI agent with “kinks” that does not follow the intended user story end to end, Supabase authentication, and partial Notion and Google Drive integrations — then building marketing-manager personas, empathy maps, and a journey from uploading or locating a source asset through generating derivative assets and attaching them to the source to distributing across channels. Where feasible, fixing the agent's behavior and completing key integrations. Excludes rebuilding the product from scratch, replacing the CTO's technical role, completing every future integration, and ongoing operations.",
    outcome:
      "Updated wireframes and UX, and a high-fidelity prototype of the marketer workflow — upload or locate a source asset, generate derivative assets, keep source and repurposed assets associated, and move toward distribution — reflecting the single-tab experience. Where feasible, improvements to the AI agent workflow and to the Notion and Google Drive integrations, and recommendations for future development. Presented in an executive-style walkthrough, with all artifacts transferred to the company.",
    metrics: [
      { value: "1 MVP", label: "Partial product made cohesive" },
      { value: "1 tab", label: "Replaces the multi-tool workflow" },
      { value: "3 pillars", label: "UX · AI agent · integrations" },
    ],
  },
  {
    id: 39,
    code: "26-39",
    slug: "band-hub-musician-matching",
    title: "Band Hub Musician Matching",
    industry: "Consumer / Hobbyist Community",
    sector: "Consumer Products",
    description:
      "An early-stage concept for adult and senior hobbyist musicians who aren't looking to go pro but want to connect with other players for the joy of playing. Today they rely on open jams, open mics, Bandmix, and Facebook groups, which are noisy, unstructured, and highly manual — and finding a match means aligning genre, playing level, location, availability, personality fit, and goals. Its founder has validated demand and started matching musicians by hand, which doesn't scale. Delivering a platform concept and high-fidelity website and iPhone app prototypes.",
    category: "HCD",
    image: "/projects/musician-matching.jpg",
    tags: ["Marketplace Matching", "Senior-Friendly UX", "Platform Roadmap"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Website + iPhone prototype · matching flows",
    client: "Musician-matching platform startup",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Translate a validated early concept into a clear digital platform that helps adult and senior amateur musicians create profiles, express preferences, discover compatible players, and form groups or jam sessions — with structured flows from onboarding to matching to group formation that can later support AI-enabled matching.",
    approach:
      "Analyzing the platform with the Business Model Canvas and a concise competitive scan of Facebook groups, classifieds, and informal networks, including value propositions and possible monetization such as premium features, events, or subscriptions. Personas — retirees, older adults, and adult amateur musicians — built from the founder's manual matching experience and stakeholder discussions, with empathy maps and a journey from discovery through sign-up, profile, preferences, and matching to forming a group or jam session. Experience design and UI/UX prototyping only; production software, AI model development, backend, and App Store deployment are excluded.",
    outcome:
      "A user-centered website demonstrating basic onboarding, profile creation, and conceptual matchmaking, and a high-fidelity iPhone app prototype that looks close to a real app, built on matching inputs such as instrument, genre, skill level, availability, location, and collaboration goals. A concise documentation package covers personas, journeys, key features, assumptions, and a recommended roadmap, including how a future AI-powered matching engine could fit the designed flows.",
    metrics: [
      { value: "2 surfaces", label: "Website + iPhone app" },
      { value: "6 inputs", label: "Genre · level · location · availability · personality · goals" },
      { value: "Roadmap", label: "Path to AI-powered matching" },
    ],
  },
  {
    id: 38,
    code: "26-38",
    slug: "womens-neurodiversity-needs-analysis",
    title: "Women's Neurodiversity Needs Analysis",
    industry: "Health Research / Digital Product Strategy",
    sector: "Health & Life Sciences",
    description:
      "An early-stage health-tech venture focused on women's neurodiversity and hormonal transitions is targeting the intersection of ADHD and pre-menopause or menopause, where digital solutions appear scarce — general menopause apps and general ADHD apps don't serve the combination. Women facing both turn to communities such as Reddit and Facebook groups to share frustrations and coping strategies. Delivering an independent analysis of those public conversations, translated into prioritized pain points and MVP directions for a likely mobile app.",
    category: "HCD",
    image: "/projects/womens-health-research.jpg",
    tags: ["Needs Analysis", "Qualitative Research", "MVP Direction"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Needs-analysis report · MVP concepts",
    client: "Women's health-tech venture",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Provide an independent, business- and product-oriented analysis of publicly available online conversations to identify, synthesize, and prioritize the pain points of women with both ADHD and pre-menopausal or menopausal symptoms, and translate them into practical MVP directions for a differentiated digital product.",
    approach:
      "Desk-based collection and organization of public online discussions using agreed search terms and platforms, followed by qualitative coding and thematic analysis of posts and comments. Pain points are prioritized through a simple product and business lens — frequency, urgency, impact on well-being, and feasibility for a digital app — and personas, empathy maps, and journeys are built from the synthesized insights, including potential personas for the wider ecosystem such as clinics and health organizations. Excludes production app development, clinical or medical research, medical or treatment claims, non-public data collection, and formal financial modeling.",
    outcome:
      "A structured report covering the target segment definition, search strategy, key themes and pain points, prioritization logic, MVP concepts, risks, assumptions, and recommended next research steps, with lightweight sketches, low-fidelity wireframes, or a simple clickable prototype illustrating key flows depending on time and skills. A presentation clearly connects public user voices to practical product opportunities for an app focused on this comorbidity.",
    metrics: [
      { value: "1 report", label: "Structured needs analysis" },
      { value: "4 criteria", label: "Frequency · urgency · well-being impact · feasibility" },
      { value: "Public data only", label: "No clinical research or claims" },
    ],
  },
  {
    id: 37,
    code: "26-37",
    slug: "veterans-memorial-museum-platform",
    title: "Veterans Memorial Museum Platform",
    industry: "Nonprofit / Digital Heritage",
    sector: "Not-for-Profit",
    description:
      "A not-for-profit tourism association with a charitable fundraising license runs a military museum and veterans' heritage initiative alongside a tourism ecosystem and a social-enterprise model supporting local small businesses. It manages several websites and digital assets at different stages of completion, and its structured killed-in-action soldiers database — a significant historical asset — powers a museum site that was partially broken when a database table was removed and hasn't been repaired for lack of funding. Delivering a new Veterans Memorial Museum platform concept built on that database.",
    category: "HCD",
    image: "/projects/veterans-memorial.jpg",
    tags: ["Digital Heritage", "AI Governance", "Platform Ecosystem"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Museum platform concept · governance roadmap",
    client: "Veterans memorial and tourism nonprofit",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Design a modern, searchable, map-enabled, story-driven museum platform that uses the soldiers database as its anchor — with clear pathways to book museum-related experiences — and connects to the organization's tourism ecosystem through cross-linking and shared discovery, not integration or merging.",
    approach:
      "Analyzing the organization's digital ecosystem as a platform — its tourism, museum, Indigenous tourism, travel, events, and small-business assets — with the museum and database as the pilot experience, and weighing risks around bloat, brittleness, ethics, privacy, and maintainability. Personas span veterans' families, visitors, teachers and students, small-business partners, and staff and volunteers, with journeys emphasizing soldier search, interactive mapping, profile viewing, and guided storytelling, plus a review of current AI and automation uses. Concept design, UX/UI prototyping, lightweight AI-governance recommendations, and a roadmap only; a full rebuild of all sites and complex backend work are excluded.",
    outcome:
      "High-fidelity, web-first prototypes — with an iPhone app prototype if feasible — of searchable soldier profiles, interactive map exploration by origin, branch, conflict, or Indigenous nation, timelines, photos, and narratives, guided chatbot flows (“learn about the museum,” “find a soldier,” “see today's events”), and cross-links to events and tourism content. Presented as a path from a fragmented set of websites and automations toward a coherent, maintainable, ethically governed platform.",
    metrics: [
      { value: "1 anchor", label: "Soldiers database as the museum core" },
      { value: "Cross-linked", label: "Connected to tourism, not merged" },
      { value: "AI governance", label: "Lightweight, maintainable layer" },
    ],
  },
  {
    id: 36,
    code: "26-36",
    slug: "breathing-program-educator-hub",
    title: "Breathing Program Educator Hub",
    industry: "EdTech / Children's Wellness",
    sector: "Health & Life Sciences",
    description:
      "A nonprofit focused on improving children's mental health, emotional regulation, and learning through technology-enabled, science-based interventions — with a track record of competitive funding and real-world deployment in schools, hospitals, and community programs — runs a breathing program for elementary school children, delivered through a train-the-trainer and community model. Its implementation experience shows why evidence-based tools often fail outside the lab. Delivering a handoff-ready educator hub concept with onboarding, resource access, and basic reporting views.",
    category: "HCD",
    image: "/projects/educator-classroom.jpg",
    tags: ["Educator UX", "Information Architecture", "Implementation Design"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Educator hub prototype · handoff docs",
    client: "Children's wellness nonprofit",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Design a simple, human-centered digital platform that serves as a central hub — a “command center” — for training materials, lesson plans, surveys, communication, and basic implementation support, helping busy educators and program stakeholders deliver the breathing program consistently in elementary schools.",
    approach:
      "Analyzing the program as a digital implementation platform within the nonprofit's mission and its lessons from prior deployments, with value propositions for teachers, school coordinators, the organization, funders, and researchers. Personas center on elementary school teachers, school coordinators, and a program team member, with empathy maps and a journey from onboarding through accessing lesson plans and videos, delivering breathing activities, and completing surveys. Experience design and UI/UX prototyping only; production development, secure hosting, backend, school system integrations, and formal outcome evaluation are excluded.",
    outcome:
      "A functional website prototype and a high-fidelity iPhone app prototype demonstrating teacher onboarding, access to lesson plans and instructional videos, supporting documentation, surveys, and basic resource or reporting screens, along with the content structure and information architecture for hosting those materials. Delivered with personas, empathy maps, journeys, a prioritized feature list, design files, and handoff documentation clear enough for the organization's own or contracted developers.",
    metrics: [
      { value: "2 prototypes", label: "Website + high-fidelity iPhone app" },
      { value: "3 personas", label: "Teacher · coordinator · program team" },
      { value: "Handoff-ready", label: "Design files + documentation" },
    ],
  },
  {
    id: 35,
    code: "26-35",
    slug: "tie-boston-ecosystem-platform",
    title: "TiE Boston Ecosystem Platform",
    industry: "Entrepreneurship / Nonprofit Network",
    sector: "Not-for-Profit",
    description:
      "A global nonprofit founded in Silicon Valley about 30 years ago to foster the next generation of founders now has more than 60 chapters worldwide; its Boston chapter is one of the largest and most active. It runs an equity-free, mentorship-driven entrepreneurship ecosystem spanning middle school through adult entrepreneurs — youth programs, a women's pitch competition, an incubator, an angel investor network, events, special interest groups, and New England's largest entrepreneurship convention. Its digital presence is a fragmented set of program sites. Delivering a blueprint for a unified web and mobile presence.",
    category: "HCD",
    image: "/projects/entrepreneur-network.jpg",
    tags: ["Information Architecture", "Ecosystem Design", "Wix-Ready Prototype"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Unified web + mobile blueprint",
    client: "Entrepreneurship network nonprofit",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Rethink and strengthen the chapter's digital presence so it is experienced as a coherent entrepreneurship ecosystem rather than a fragmented set of program sites — a consolidated website and companion mobile app for clear discovery of programs, events, resources, and communities, with stronger visibility for companies, alumni, and success stories.",
    approach:
      "Analyzing the chapter as a digital entrepreneurship ecosystem with the Business Model Canvas and a concise competitive scan of comparable entrepreneurship organizations, accelerators, incubators, and community platforms. Personas cover students, founders, mentors and charter members, investors and sponsors, and the general public, with empathy maps and journeys from discovery through program or event exploration to application, registration, and ongoing participation, plus a review of the current website structure and program sites. Experience design and UI/UX prototyping only; production mobile development, deep integrations, and backend engineering are excluded.",
    outcome:
      "A Wix-ready website concept establishing a consolidated design language and information architecture for the main site and program sites, and a high-fidelity companion mobile app prototype with the same branding — covering flows such as browsing and registering for events, tracking program milestones, viewing curated resources, following success stories, and engaging with mentors. Delivered as a blueprint for future implementation, with personas, journeys, competitive findings, feature priorities, and recommendations for what belongs on the website versus the app.",
    metrics: [
      { value: "1 ecosystem", label: "Unified web + mobile blueprint" },
      { value: "5 audiences", label: "Students · founders · mentors · investors · public" },
      { value: "Wix-ready", label: "Consolidated design language" },
    ],
  },
  {
    id: 34,
    code: "26-34",
    slug: "organizational-knowledge-platform-poc",
    title: "Organizational Knowledge Platform PoC",
    industry: "Enterprise Software / Knowledge Management",
    sector: "Manufacturing",
    description:
      "An organization is exploring a web-based corporate knowledge platform to capture, structure, validate, and reuse expert knowledge that stays trapped in individual experience, project teams, or informal practice — so that when experienced employees leave or rotate off projects, their nuanced procedures, decision paths, and special-case adaptations don't leave with them. It is meant to go beyond a Q&A forum, document repository, or basic wiki. Delivering a quick but working proof of concept.",
    category: "HCD",
    image: "/projects/knowledge-workflows.jpg",
    tags: ["Knowledge Management", "Proof of Concept", "AI-Supported Structuring"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Working web proof of concept",
    client: "Enterprise knowledge management initiative",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Demonstrate how organizational knowledge can move from scattered, informal expertise to an evolving, structured, AI-supported knowledge asset — a multi-sided platform where contributors capture reusable “scripts” for how work is actually done, users search and adapt them, and validators review and approve preferred methods.",
    approach:
      "Framing the platform as a multi-sided knowledge co-creation system for three sides — knowledge contributors, knowledge users, and validators or stewards — and differentiating it from wikis, Q&A forums, intranets, document repositories, and generic AI chatbots. Personas, empathy maps, and a journey from contribution through structuring, validation, reuse, and improvement, plus a structured knowledge model covering entry conditions, required inputs, steps, expected outputs, assumptions, risks, and variants. Excludes enterprise deployment, advanced AI model development, production-grade security, integration with internal systems, and full knowledge-base population.",
    outcome:
      "A proof-of-concept web platform — a lightweight web application, mock-ups, or a clickable prototype — limited to the core workflows: a contributor captures a reusable method, workflow, procedure, or prompt sequence; a user searches for, interprets, applies, and adapts it; a validator reviews, approves or rejects it, manages variants, and identifies a preferred version; and knowledge evolves through updates and alternative branches, with AI-supported assistance turning informal descriptions into structured workflows. Representative use cases include a data-science method and a prompt-engineering procedure, presented in a workshop-style executive session.",
    metrics: [
      { value: "1 PoC", label: "Quick but working proof of concept" },
      { value: "3 roles", label: "Contributors · users · validators" },
      { value: "7 fields", label: "Structured knowledge model" },
    ],
  },
  {
    id: 33,
    code: "26-33",
    slug: "corporate-training-platform-viability",
    title: "Corporate Training Platform Viability",
    industry: "EdTech / Corporate L&D",
    sector: "Consumer Products",
    description:
      "An AI-powered adaptive training and certification platform needed a business-viability check across learners, enterprise buyers, and content providers. Delivering a strategic opportunity assessment recommending whether and how to pursue the platform.",
    category: "HCD",
    image: "https://picsum.photos/seed/corporate-training/800/500",
    tags: ["Business Viability", "GTM Strategy", "EdTech"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Viability assessment · GTM path",
    client: "AI-powered corporate training venture",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Evaluate whether an AI-powered adaptive training and certification platform has a compelling, monetizable value proposition across its three stakeholder groups.",
    approach:
      "Running a business-case-first analysis using a Business Model Canvas, market landscape and competitive scan, stakeholder personas, and a diagnostic-to-readiness journey, covering monetization, feasibility, pricing logic, partnerships, and go-to-market path — no system build.",
    outcome:
      "A strategic opportunity assessment recommending whether and how to pursue the platform, including beachhead market, pilot profile, business model, and adoption risks.",
    metrics: [
      { value: "1 assessment", label: "Go / no-go recommendation" },
      { value: "3 stakeholders", label: "Learners · buyers · providers" },
      { value: "GTM path", label: "Beachhead + pilot profile" },
    ],
  },
  {
    id: 32,
    code: "26-32",
    slug: "getlime-nutrition-grocery-platform",
    title: "GetLime Nutrition & Grocery Platform",
    industry: "Food & Nutrition / Consumer Marketplace",
    sector: "Consumer Products",
    description:
      "A digital platform helps households manage diet and nutrition in a practical, cost-aware way: it learns each household's dietary needs and preferences, matches them to what local grocery stores actually have on offer — especially items on sale — and automatically generates a weekly meal plan and shopping list. The model is primarily B2C, with a B2B2C angle through dietitians and nutritionists who use it with their own clients. The product is in closed beta, focused on UX, UI, retention, sign-ups, and pricing sensitivity. Delivering a multi-sided platform design: a functional website prototype and complete high-fidelity iPhone screens.",
    category: "HCD",
    image: "/projects/grocery-planning.jpg",
    tags: ["Multi-Sided Platform", "Meal Planning UX", "B2B2C"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Website prototype · iPhone screens",
    client: "Nutrition and grocery-planning platform",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Design and prototype the platform as a multi-sided digital product, not a simple app, connecting households seeking cost-aware meal planning, dietitians and nutritionists working with their own clients, and potential partners such as retailers — and learn which features, flows, and value propositions support adoption, retention, sign-ups, and pricing acceptance.",
    approach:
      "Analyzing the product with the Business Model Canvas and a concise competitive scan, then building personas for households, dietitians and nutritionists, and potentially partners, validated through stakeholder discussions and supported by recorded interviews with 4–5 customer contacts where available. Journeys run from household needs and preferences through meal planning and shopping list generation to grocery decisions, plus dietitian journeys if supported. Experience design and UI/UX prototyping only — no production software development, backend systems, grocery data integration, AI model work, or production deployment.",
    outcome:
      "A functional website prototype close enough to production to port into the company's preferred web environment, and a complete set of interconnected high-fidelity iPhone screens — on the order of dozens — that a mobile developer could directly implement, working together as a single platform experience. Delivered with a prioritized feature set, UX/UI choices, and documentation of the flows and design rationale, and presented in a workshop-style executive session.",
    metrics: [
      { value: "3 sides", label: "Households · dietitians · partners" },
      { value: "2 prototypes", label: "Website + iPhone app" },
      { value: "4–5 interviews", label: "Customer contacts, where available" },
    ],
  },
  {
    id: 31,
    code: "26-31",
    slug: "swaddle-childcare-booking-app",
    title: "Swaddle Childcare Booking App",
    industry: "Childcare / Marketplace App",
    sector: "Consumer Products",
    description:
      "An on-demand childcare platform operating in three cities recruits, vets, and trains babysitters and matches them with parents through a mobile app, where parents enter their children's details and booking needs, review sitter profiles, ratings, experience, and rates, then book and pay. The app has been live for about a year, and once parents complete a first booking about 90% return. The opportunity is the next stage: reducing friction and anxiety around the first booking, and designing referral and loyalty mechanisms for both parents and babysitters. Delivering clickable concepts.",
    category: "HCD",
    image: "/projects/childcare-booking.jpg",
    tags: ["Marketplace UX", "Trust & Safety", "Referral & Loyalty"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Clickable concepts · referral and loyalty",
    client: "Childcare booking marketplace",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Research, design, and prototype the next wave of the platform experience: reduce friction and anxiety in the first booking, strengthen trust and safety communication and the clarity of babysitter profiles, and design referral and loyalty concepts that encourage repeat use and growth for parents and for the largely university-based babysitter network.",
    approach:
      "Analyzing the marketplace's current app-centered experience and the website's role as an informational entry point, with a concise competitive and feature scan of comparable childcare and marketplace platforms. Personas for parents (first-time and returning) and babysitters, including university-based caregivers, built from the company's information, platform review, and desk research, with optional short interviews. Empathy maps and a journey from discovery through sign-up, booking details, sitter matching, profile review, confirmation, and payment to repeat use or referral, with particular attention to first-booking trust gaps. Excludes engineering, payment implementation, integration with the existing app, and legal or safety policy design.",
    outcome:
      "High-fidelity, clickable prototypes for the mobile app and relevant website screens showing a lower-friction first-booking flow, stronger trust and safety communication, clearer sitter profiles, parent referral and loyalty concepts, babysitter referral link and incentive concepts, and engagement features for repeat use and community-building. Presented in an executive session covering the first-booking friction points, referral and loyalty concepts, and recommendations for future development; the company receives the prototypes, presentation, and documentation.",
    metrics: [
      { value: "~90%", label: "Return rate after a first booking" },
      { value: "2 sides", label: "Parents + babysitters" },
      { value: "1 funnel", label: "First-booking conversion focus" },
    ],
  },
  {
    id: 30,
    code: "26-30",
    slug: "fierce-media-platform-repositioning",
    title: "Fierce Media Platform Repositioning",
    industry: "Marketing / Social Media Agency",
    sector: "Consumer Products",
    description:
      "A social-media agency needed to move from an outdated brochure site to a platform concept communicating its narrowed positioning across health/wellness and automotive client archetypes. Delivering a modern website and iPhone prototype with archetype-specific pathways.",
    category: "HCD",
    image: "https://picsum.photos/seed/fierce-media/800/500",
    tags: ["Brand Repositioning", "Archetype UX", "Agency Platform"],
    term: "Spring 2027",
    termShort: "S27",
    duration: "6 weeks",
    delivered: "Agency platform concept",
    client: "Social media agency",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "Not Started",
    brief:
      "Move a social-media agency from an outdated brochure site to a platform that communicates its narrowed positioning across two distinct client archetypes.",
    approach:
      "Using existing personas, branding guide, and a competitor scan; mapping distinct client decision journeys balancing visual storytelling with ROI-oriented proof; producing high-fidelity website and iPhone prototypes — no rebrand or ad execution.",
    outcome:
      "A clearer, modern platform experience that attracts better-fit prospects and provides archetype-specific pathways and value signals.",
    metrics: [
      { value: "2 archetypes", label: "Health/wellness + automotive" },
      { value: "1 platform", label: "Repositioned agency site" },
      { value: "ROI-focused", label: "Proof-driven storytelling" },
    ],
  },
  {
    id: 29,
    code: "26-29",
    slug: "casemaster-ai-ux-optimization",
    title: "Case Master AI UX Optimization",
    industry: "EdTech / Career Prep SaaS",
    sector: "Consumer Products",
    description:
      "An EdTech venture building AI-driven interviewing and assessment tools for higher-education institutions and their students has a new product: an AI-proctored case-interview practice platform for product management, strategy, consulting, and other case-heavy roles. It runs timed cases, gives instant structured feedback across dimensions such as hypothesis and framework, data analysis, and communication, and benchmarks students against established frameworks. The assessment capability is well developed, but the user experience grew with rapid product expansion rather than deliberate design. Delivering a documented UX assessment and a clickable redesign of roughly 12–15 screens.",
    category: "HCD",
    image: "/projects/interview-practice.jpg",
    tags: ["UX Audit", "SaaS Redesign", "EdTech"],
    term: "Spring 2027",
    termShort: "S27",
    duration: "6 weeks",
    delivered: "UX assessment · 12–15 redesigned screens",
    client: "AI-proctored interview prep platform",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "Not Started",
    brief:
      "Examine the end-to-end student journey and redesign key screens and interaction patterns so the interface communicates structure, reduces cognitive load during timed assessment, and presents feedback in a way students can act on with confidence — including clear proctoring communication that informs rather than alarms.",
    approach:
      "Hands-on review of the live platform, supported by a concise competitive and analog scan of comparable practice, proctoring, and feedback platforms. Personas for MBA and undergraduate candidates, career services staff, and institutional programme administrators, with empathy maps and a journey from onboarding and case discovery through the timed proctored interview to feedback review and repeat attempts, plus a heuristic and usability evaluation of the current flow. Experience assessment and UI/UX prototyping only — no software development, AI model work, proctoring logic, or production deployment.",
    outcome:
      "A documented UX assessment of the current flow with prioritized recommendations, and mock-ups or a clickable prototype of roughly 12–15 redesigned high-fidelity screens covering case selection, timed interview execution, proctoring communication, and dimension-level feedback with benchmarking against standard frameworks. Presented in an executive walkthrough of the assessment findings, personas and journeys, the redesigned screens, and recommendations for future development.",
    metrics: [
      { value: "12–15 screens", label: "Redesigned in high fidelity" },
      { value: "3 personas", label: "Candidates · career services · administrators" },
      { value: "5 feedback areas", label: "Intro · framework · data · communication · approach" },
    ],
  },
  {
    id: 28,
    code: "26-28",
    slug: "connections-elevator-service-journey",
    title: "Connections Elevator Service Journey",
    industry: "Field Service / Customer Experience",
    sector: "Manufacturing",
    description:
      "A privately owned elevator maintenance, repair, and modernization company serving condominium associations, office buildings, hotels, and other commercial properties takes service calls by phone: a dispatcher registers the request, dispatches a technician, and creates a ticket in Salesforce Field Service Lightning. After hours and on weekends a third-party answering service takes the call without access to that system, so requests are re-entered manually — and once a work order is closed, there is generally no systematic follow-up to confirm the problem was resolved. Delivering a recommended future-state service journey and concept prototypes.",
    category: "HCD",
    image: "/projects/elevator-service.jpg",
    tags: ["Service Journey UX", "Field Service", "Salesforce Fit"],
    term: "Spring 2027",
    termShort: "S27",
    duration: "6 weeks",
    delivered: "Service journey · concept prototype",
    client: "Elevator service and modernization company",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "Not Started",
    brief:
      "Define a simpler, faster, and more accountable customer-service journey — from the moment a customer reports a problem through confirmation that it was resolved — with a simple 24/7 way to request service, accurate capture with less manual entry, clear status communication, automated confirmation of resolution, and early identification of unresolved issues before they become repeat calls.",
    approach:
      "Documenting the current service process and running a concise competitive and cross-industry scan of how leading companies handle service intake and post-service follow-up, evaluating SMS and text, QR codes, web portals, mobile apps, AI, chatbots, and automation, and recommending approaches that fit Salesforce Field Service Lightning. The customer, the dispatcher or service coordinator, and the technician are examined through journey maps from request through dispatch, service, closure, confirmation, and feedback, with focus on after-hours intake and post-service follow-up.",
    outcome:
      "High-fidelity concepts for the most appropriate digital touchpoints — web or mobile interfaces and supporting SMS, QR-code, chatbot, or automated communication flows — covering service-request intake and accurate issue capture, customer updates through the service lifecycle, completion confirmation and satisfaction feedback, and unresolved-issue escalation connected to Salesforce Field Service Lightning. Mock-ups or a clickable concept prototype built with no-code tools, presented in an executive walkthrough with technology priorities and key design decisions.",
    metrics: [
      { value: "3 roles", label: "Customer · dispatcher · technician" },
      { value: "24/7", label: "Service-request intake" },
      { value: "Salesforce fit", label: "Field Service Lightning aligned" },
    ],
  },
  {
    id: 27,
    code: "26-27",
    slug: "redi-financial-analysis-module",
    title: "REDI Financial Analysis Module",
    industry: "PropTech / Commercial Real Estate",
    sector: "Financial Services",
    description:
      "A commercial real-estate decision-intelligence platform needed an integrable module that ingests deal or lease inputs and produces broker-appropriate cash flows and scenario comparisons. Delivering a working web-accessible prototype with a documented Python analysis engine.",
    category: "AI Engineering",
    image: "https://picsum.photos/seed/redi-financial/800/500",
    tags: ["Python Engineering", "Financial Modeling", "Web Prototype"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "8 weeks",
    delivered: "Python module · web prototype",
    client: "Commercial real estate decision-intelligence platform",
    course: "BTE 440 · Undergraduate",
    team: "5 students · 2 coaches",
    status: "In Progress",
    brief:
      "Build an integrable financial-analysis module that turns deal or lease inputs into broker-appropriate cash flows and scenario comparisons.",
    approach:
      "Validating requirements and existing Excel logic, defining a data dictionary and financial model, implementing and unit-testing a Python analysis engine, and building a minimal web UI with human review of inputs — no advanced NLP extraction or production hardening.",
    outcome:
      "A working web-accessible prototype that runs example deals end to end, with organized source code, technical documentation, and interfaces suitable for later platform integration.",
    metrics: [
      { value: "1 engine", label: "Python financial analysis" },
      { value: "End-to-end", label: "Example deals tested" },
      { value: "Human-reviewed", label: "Input verification control" },
    ],
  },
  {
    id: 26,
    code: "26-26",
    slug: "genledgeai-agentic-inventory",
    title: "GenledgeAI Agentic Inventory",
    industry: "Enterprise Software / AI-Native ERP",
    sector: "Manufacturing",
    description:
      "An AI-native ERP platform needed a focused inventory subsystem where agents interpret system state and trigger actions across inventory, purchasing, and warehouse workflows. Delivering a near-production agentic inventory increment integrated with the existing platform.",
    category: "AI Engineering",
    image: "https://picsum.photos/seed/genledgeai/800/500",
    tags: ["Agentic AI", "ERP Integration", "Inventory Automation"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "8 weeks",
    delivered: "Agentic inventory increment",
    client: "AI-native ERP platform",
    course: "BTE 440 · Undergraduate",
    team: "5 students · 2 coaches",
    status: "In Progress",
    brief:
      "Implement a focused increment of an AI-native ERP inventory subsystem where agents interpret state and trigger action across inventory workflows.",
    approach:
      "Onboarding into the existing ERP architecture and agent framework, prioritizing one feasible inventory scenario, defining agent roles, decision logic, data models, and APIs, then building and validating inventory-centric agents with sample scenarios.",
    outcome:
      "A credible near-production agentic inventory increment demonstrating a minimum viable autonomous workflow such as stock monitoring, reorder logic, or purchasing coordination.",
    metrics: [
      { value: "1 increment", label: "Bounded, production-oriented" },
      { value: "Agentic", label: "State interpretation + action" },
      { value: "ERP-integrated", label: "Existing platform + framework" },
    ],
  },
  {
    id: 25,
    code: "26-25",
    slug: "menopause-symptom-trajectory-research-model",
    title: "Menopause Symptom-Trajectory Research Model",
    industry: "Health Research / Predictive Modeling",
    sector: "Health & Life Sciences",
    description:
      "An early-stage biotechnology company developing computational tools in women's neuroendocrine health is building a portfolio of stratification and prediction work. Symptom trajectories across the perimenopause and menopause transition are heterogeneous — some women have mild, short-lived symptoms, others persistent multi-domain burden — and a clinically useful stratification model could identify women who need earlier support. Delivering an interpretable predictive-modeling pilot built on public-use data from a multi-site longitudinal cohort of 3,302 women.",
    category: "AI Engineering",
    image: "/projects/symptom-trajectories.jpg",
    tags: ["Predictive Modeling", "Interpretable ML", "Longitudinal Data"],
    term: "Spring 2027",
    termShort: "S27",
    duration: "7 weeks",
    delivered: "Interpretable model · model card",
    client: "Women's neuroendocrine health biotech",
    course: "BTE 440 · Undergraduate",
    team: "5 students · 2 coaches",
    status: "Not Started",
    brief:
      "Design and prototype an interpretable predictive model that uses public-use cohort data to differentiate clinically meaningful symptom-burden trajectories across the menopause transition, giving the company a reference analysis that can inform future stratification work without exposing its confidential methodology or product IP.",
    approach:
      "Four phases over seven weeks: discovery and requirements, including confirming the IRB pathway and the data-use process with the university; data exploration and model design, with a variable dictionary and missingness map and a transparent definition of trajectory groups; model development, comparing logistic and elastic-net regression and rule-based baselines with gradient-boosted trees using nested cross-validation or a pre-specified split; and testing, refinement, and handover. Interpretability is prioritized over complexity. Excludes participant contact, private patient data, clinically validated or diagnostic tools, and production software.",
    outcome:
      "A working predictive model that differentiates symptom-burden trajectories on held-out public-use data, with reported discrimination, calibration, sensitivity and specificity, subgroup performance, and feature attribution (such as SHAP). Delivered with source code and notebooks, documentation of data sources, assumptions, and missingness handling, a model card covering intended use, limitations, and non-use cases, draft methods and results text suitable for a joint manuscript, and guidance for extending the model with additional data in future work. Research and modeling only — no clinical deployment.",
    metrics: [
      { value: "3,302", label: "Women in the public-use cohort" },
      { value: "3 outcomes", label: "Vasomotor · sleep · mood" },
      { value: "Model card", label: "Plus reproducible code and notebooks" },
    ],
  },
  {
    id: 24,
    code: "26-24",
    slug: "create-music-maker-ai-integration",
    title: "Create Music Maker AI Integration",
    industry: "EdTech / Children's Wellness Tech",
    sector: "Consumer Products",
    description:
      "An existing music-and-AI platform supporting children's emotional regulation and reading skills needed selected engineering contributions within its existing codebase. Delivering reviewed code contributions improving at least one agreed technical area, from audio integration to reading-related logic.",
    category: "AI Engineering",
    image: "https://picsum.photos/seed/create-music-maker/800/500",
    tags: ["Embedded Engineering", "AI/Audio Integration", "EdTech"],
    term: "Spring 2027",
    termShort: "S27",
    duration: "8 weeks",
    delivered: "Reviewed code contributions",
    client: "Children's music and AI wellness platform",
    course: "BTE 440 · Undergraduate",
    team: "5 students · 2 coaches",
    status: "Not Started",
    brief:
      "Contribute selected engineering improvements to an existing music-and-AI platform supporting children's emotional regulation and reading skills.",
    approach:
      "Working under the sponsor's senior developer within the existing codebase and review process, prioritizing feasible contributions, and implementing selected improvements — such as audio integration, two-layer architecture, or rhythm and reading logic — tested in development or staging.",
    outcome:
      "Reviewed code contributions and prototype-level engineering artifacts improving at least one agreed technical area, with architecture documentation and future-development recommendations.",
    metrics: [
      { value: "Embedded team", label: "Inside existing dev process" },
      { value: "1+ technical area", label: "Reviewed contribution" },
      { value: "Staged & tested", label: "Dev/staging validation" },
    ],
  },
  {
    id: 23,
    code: "26-23",
    slug: "toyz-ai-career-development-feature",
    title: "Toyz AI Career Development Feature",
    industry: "EdTech / Career Development Gaming",
    sector: "Consumer Products",
    description:
      "An AI-driven, game-based career-development platform needed a tangible feature enhancement where users demonstrate skills through portfolios and receive AI-supported guidance. Delivering a testable, pilotable feature built over an Agile/Scrum five-week cycle.",
    category: "AI Engineering",
    image: "https://picsum.photos/seed/toyz-career-ai/800/500",
    tags: ["Agile Delivery", "AI Career Platform", "Feature Development"],
    term: "Spring 2027",
    termShort: "S27",
    duration: "5 weeks",
    delivered: "Pilotable feature · documentation",
    client: "Game-based AI career-development platform",
    course: "BTE 440 · Undergraduate",
    team: "5 students · 2 coaches",
    status: "Not Started",
    brief:
      "Design and build a tangible enhancement to an AI-driven, game-based career-development platform's skill-portfolio and guidance experience.",
    approach:
      "Running Agile/Scrum over five weeks, defining one specific feature scope, reviewing the sponsor's existing cloud and database resources, planning data/architecture/backlog, then building, testing, and refining the selected feature with available users.",
    outcome:
      "A testable, pilotable, or potentially releasable feature or module, with technical/product documentation, a user-validation summary, and recommended next steps.",
    metrics: [
      { value: "5 weeks", label: "Agile/Scrum delivery" },
      { value: "1 feature", label: "Testable, pilotable module" },
      { value: "User-validated", label: "Sponsor-pathway testing" },
    ],
  },
  {
    id: 22,
    code: "26-22",
    slug: "analyst-price-target-analytics-dashboard",
    title: "Analyst Price-Target Analytics Dashboard",
    industry: "Financial Services / Investment Analytics",
    sector: "Financial Services",
    description:
      "A specialized financial data company maintains the largest available collection of stock price targets from professional sell-side analysts — the roughly 250 firms that produce such research — going back 23 years, with detailed price-target histories cleaned, parsed, and enriched and made available through Google BigQuery. The data sits in a large, technical, flat table, while investment professionals need clear, decision-supporting insights, narratives, and visualizations, and the company wants practical use cases for agentic AI on top of it. Delivering SQL-driven analysis, a prototype dashboard, and concept-level AI use cases.",
    category: "BI & Dashboards",
    image: "/projects/analyst-research.jpg",
    tags: ["SQL & BigQuery", "Investment Analytics", "Agentic AI Concepts"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "7 weeks",
    delivered: "SQL analysis · prototype dashboard",
    client: "Financial data and analytics company",
    course: "BUS 150 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Analyze a defined subset of the historical analyst price-target and rating dataset, develop clear business-facing insights and visualizations, and package the results into an executive presentation and use-case concepts relevant to institutional investors and wealth managers — showing how analyst price-target data can support investment decision-making.",
    approach:
      "Four phases over seven weeks: discovery and requirements; analysis design, with focused questions about analyst behavior and market outcomes — such as price-target changes versus subsequent returns, rating-change patterns, differences across sectors, and the timing and direction of updates; analytics development with iterative reviews, using SQL in BigQuery, simple statistical analysis, charts, and a prototype dashboard or report book in tools such as Tableau or Power BI; and testing, refinement, and handover. Excludes production software, trading systems, investment advice, and production AI agents.",
    outcome:
      "A coherent business-facing analysis that explains the analytical question, shows the data logic and method, and presents findings, implications, and limitations in terms non-technical wealth management audiences can follow. Delivered with a data analysis notebook, SQL query examples, key charts and tables, a prototype-level dashboard or report book, an executive-style presentation, and a small set of concept-level agentic AI use cases — such as an assistant that answers a wealth manager's plain-English question about analyst track records without SQL.",
    metrics: [
      { value: "23 years", label: "Of analyst price-target history" },
      { value: "~250", label: "Sell-side research firms covered" },
      { value: "Concept-level AI", label: "No production agents" },
    ],
  },
  {
    id: 21,
    code: "26-21",
    slug: "harrington-housing-decision-support",
    title: "Harrington Housing Decision Support",
    industry: "Property Management / Co-Living",
    sector: "Financial Services",
    description:
      "Fragmented tenant, payment, and arrears data needed to become an integrated reporting and decision-support solution for collections, legal, and operations teams. Delivering a cleaned dataset, an integrated data model, and iterative dashboard and report views.",
    category: "BI & Dashboards",
    image: "https://picsum.photos/seed/harrington-housing/800/500",
    tags: ["Data Integration", "Decision Support", "Dashboards"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "5 weeks",
    delivered: "Decision-support dashboard",
    client: "Co-living property management company",
    course: "BUS 150 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Transform fragmented tenant, payment, and arrears data into an integrated reporting and decision-support solution for collections, legal, and operations.",
    approach:
      "Over five weeks, intaking and assessing company-provided datasets, cleaning and standardizing feasible fields, documenting data-quality issues, integrating tenant/payment/arrears/operational information, and building iterative dashboard and report views tested with the sponsor.",
    outcome:
      "A cleaned and organized dataset, an integrated data model, collections reporting for overdue balances and follow-up priorities, and legal/operations views for cases requiring attention.",
    metrics: [
      { value: "5 weeks", label: "Intake to final dashboard" },
      { value: "1 data model", label: "Tenant + payment + arrears" },
      { value: "3 teams served", label: "Collections · legal · operations" },
    ],
  },
  {
    id: 20,
    code: "26-20",
    slug: "neurodiversity-aware-counselling-seo",
    title: "Neurodiversity Aware Counselling SEO",
    industry: "Professional Training / Digital Marketing",
    sector: "Health & Life Sciences",
    description:
      "A Canadian counselling company focused on neurodivergent adults — offering counselling, professional training for counsellors, and workplace neurodiversity training — built around a trademarked, non-pathologizing counselling framework. It is expanding beyond Canada, with the United States a priority market for counsellor training. It already has a functional website and hands-on SEO experience, so the opportunity is a more structured social media and digital marketing strategy, not a site rebuild. Delivering a positioning framework, an SEO and AI-visibility diagnostic, and a channel and campaign strategy.",
    category: "Digital Marketing",
    image: "/projects/social-content-calendar.jpg",
    tags: ["SEO & AI Visibility", "Social Strategy", "Content Strategy"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "12 weeks",
    delivered: "Positioning · SEO diagnostic · social strategy",
    client: "Neurodiversity-focused counselling company",
    course: "MKT 387 · Undergraduate",
    team: "5–6 students · 2 coaches",
    status: "In Progress",
    brief:
      "Use social media to build awareness and interest among counsellors, especially in the United States, for the company's training — with a clear positioning statement and messaging principles, a channel strategy and campaign roadmap suited to a professional B2B audience, and a coherent secondary presence for prospective counselling clients.",
    approach:
      "Working in five stages over twelve weeks: kickoff, positioning, and audience definition; a digital audit with an SEMrush-based SEO diagnostic, on-page review, and a basic AI-discoverability check, plus a channel assessment of LinkedIn, Reddit, Instagram, and others; social strategy and campaign development; nurture, measurement, and refinement, with an optional email nurture concept; and final recommendations. Analysis, strategy, and sample assets only — ongoing posting, paid media management, technical SEO implementation, and legal or clinical claims are out of scope.",
    outcome:
      "A positioning and audience framework, a current-state SEO and AI-visibility diagnostic with prioritized non-technical recommendations, a social media channel strategy with channel roles and publishing cadence, and a campaign and content toolkit — content pillars, sample post copy and creative concepts, a content calendar outline, and a phased roadmap from awareness to training inquiry. Also a KPI framework separating leading indicators from conversion measures and a prioritized implementation roadmap, with an optional email nurture plan if time permits; handed off before U.S. Thanksgiving for the company to implement.",
    metrics: [
      { value: "3 channels", label: "LinkedIn · Reddit · Instagram assessed" },
      { value: "6 deliverables", label: "Plus an optional email nurture plan" },
      { value: "12 weeks", label: "Five working stages" },
    ],
  },
  {
    id: 19,
    code: "26-19",
    slug: "greens4u-digital-marketing-strategy",
    title: "Greens4U Digital Marketing Strategy",
    industry: "Food & Nutrition / DTC E-commerce",
    sector: "Consumer Products",
    description:
      "A founder-led microgreens and nutrition business needed a practical digital path from event and social awareness to online purchasing and repeat engagement. Delivering a funnel diagnostic, social-channel strategy, and a prioritized 3–6 month action roadmap.",
    category: "Digital Marketing",
    image: "https://picsum.photos/seed/greens4u/800/500",
    tags: ["E-commerce Funnel", "Social Strategy", "DTC Marketing"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "DTC funnel strategy · roadmap",
    client: "Founder-led microgreens and nutrition brand",
    course: "MKT 387 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Create a practical digital path from event and social-media awareness to online purchasing, email growth, and repeat engagement for a founder-led DTC brand.",
    approach:
      "Defining priority customer segments and positioning, assessing the site's navigation, trust signals, and checkout flow, prioritizing Instagram and Facebook, and developing content themes, event-conversion tactics, email nurture recommendations, and a prioritized 3–6 month roadmap.",
    outcome:
      "A positioning framework, website and funnel diagnostic, social-channel strategy, campaign/content/event-conversion toolkit, KPI framework, and a 3–6 month action roadmap with sample assets.",
    metrics: [
      { value: "3–6 month", label: "Prioritized roadmap" },
      { value: "2 channels", label: "Instagram + Facebook focus" },
      { value: "Funnel-focused", label: "Event-to-purchase pathway" },
    ],
  },
  {
    id: 18,
    code: "26-18",
    slug: "yachting-platform-seo-aio-strategy",
    title: "Yachting Platform SEO & AIO Strategy",
    industry: "Marine / Data Platform SEO",
    sector: "Travel & Hospitality",
    description:
      "A global yachting data and digital-infrastructure company needed stronger organic-search and AI-search visibility for one priority digital property, connecting proprietary data capabilities to customer search intent. Delivering a full SEO/AI-visibility assessment and content roadmap.",
    category: "Digital Marketing",
    image: "https://picsum.photos/seed/yachting-seo/800/500",
    tags: ["SEO & AIO", "Competitive Analysis", "Content Roadmap"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "SEO/AIO strategy · content briefs",
    client: "Yachting data and digital-infrastructure company",
    course: "MKT 387 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Strengthen organic-search performance, AI-search visibility, and content for one priority property within a global yachting data ecosystem.",
    approach:
      "Selecting one priority digital property, using Semrush for current-state SEO, competitor and keyword-gap analysis, and an AI-visibility assessment; defining priority keyword and topic clusters; drafting selected content and implementation briefs for SEO, marketing, and web teams.",
    outcome:
      "A current-state SEO assessment, competitive and keyword-gap analysis, AI-search visibility assessment, strategic content roadmap, and implementation briefs — production work remains with the company's existing teams.",
    metrics: [
      { value: "Semrush audit", label: "SEO + competitor + AI visibility" },
      { value: "1 property", label: "Priority digital asset" },
      { value: "3 teams briefed", label: "SEO · marketing · web" },
    ],
  },
  {
    id: 17,
    code: "26-17",
    slug: "medtech-financial-model-validation",
    title: "Medtech Financial Model Validation",
    industry: "Health Tech / Financial Modeling",
    sector: "Health & Life Sciences",
    description:
      "A medtech venture's existing financial model needed review and strengthening ahead of funding and investor discussions. Delivering a model review summary covering assumptions, key drivers, sensitivities, and presentation clarity.",
    category: "Finance & Valuation",
    image: "https://picsum.photos/seed/medtech-model-validation/800/500",
    tags: ["Financial Model Review", "Investor Readiness", "Sensitivity Analysis"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "4 weeks",
    delivered: "Financial model review",
    client: "Medtech venture preparing for investor discussions",
    course: "FIN 302 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Review and strengthen an existing financial model supporting a medtech venture's funding and investor discussions.",
    approach:
      "Over four weeks, reviewing model structure, assumptions, formulas, and outputs; examining revenue, COGS, operating expenses, and cash-flow drivers; identifying unsupported or unclear areas; analyzing key drivers and sensitivities; improving labeling, documentation, and summary presentation.",
    outcome:
      "A financial-model review summary with assumptions and formula review, identified gaps and risks, visual summary outputs, and recommendations to improve clarity and usability — validation and improvement of an existing model, not a rebuild.",
    metrics: [
      { value: "4 weeks", label: "Model review engagement" },
      { value: "Sensitivity analysis", label: "Key drivers identified" },
      { value: "Investor-ready", label: "Clarity + presentation upgrade" },
    ],
  },
  {
    id: 16,
    code: "26-16",
    slug: "medtech-three-year-projection-dcf",
    title: "Medtech Three-Year Projection & DCF",
    industry: "Health Tech / Startup Finance",
    sector: "Health & Life Sciences",
    description:
      "A medtech startup preparing for a seed round needed a structured three-year financial projection and a basic DCF valuation using company-provided assumptions. Delivering a full projection model, scenario-based DCF, and sensitivity analysis.",
    category: "Finance & Valuation",
    image: "https://picsum.photos/seed/medtech-dcf/800/500",
    tags: ["Financial Projection", "DCF Valuation", "Startup Finance"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "4 weeks",
    delivered: "3-year projection · DCF model",
    client: "Medtech startup preparing for seed funding",
    course: "FIN 302 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Build a three-year financial projection and a basic DCF valuation model for a medtech startup preparing for a seed round.",
    approach:
      "Within a four-week, roughly 80-hour scope, reviewing and organizing historical financial data, defining revenue/expense/cash-flow categories, building three-year projections, constructing a classroom-based DCF, and testing growth-scenario and sensitivity assumptions.",
    outcome:
      "A three-year projection model, a basic DCF with scenario-based valuation outputs, growth-scenario and sensitivity analysis, and a financial analysis report supporting strategic planning and investor discussions.",
    metrics: [
      { value: "4 weeks", label: "~80-hour engagement" },
      { value: "3-year model", label: "Projection + DCF" },
      { value: "Scenario tested", label: "Growth + sensitivity analysis" },
    ],
  },
  {
    id: 48,
    code: "26-48",
    slug: "manufacturing-operations-data-assessment",
    title: "Manufacturing Operations & Data Assessment",
    industry: "Manufacturing / Industrial Operations",
    sector: "Manufacturing",
    description:
      "A global industrial manufacturer relied on fragmented systems and manual processes for production forecasting, work-order creation, maintenance reporting, and scheduling. The team interviewed key stakeholders, mapped existing workflows, and identified duplicate data entry and reporting inefficiencies. The engagement delivered a process effectiveness assessment, data framework, KPI recommendations, and a roadmap for future operational dashboards.",
    category: "BI & Dashboards",
    image: "https://picsum.photos/seed/walworth-manufacturing/800/500",
    tags: ["Process Assessment", "Data Framework", "KPI Roadmap"],
    term: "Summer 2026",
    termShort: "Su26",
    duration: "8 weeks",
    delivered: "Operational assessment · Dashboard roadmap",
    client: "Global industrial manufacturer",
    course: "BUS 150 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "Shipped",
    brief:
      "Identify opportunities to reduce manual work, improve data visibility, and strengthen decision-making across production, maintenance, and scheduling.",
    approach:
      "Interviewed stakeholders across four operational areas and mapped how information moved between internal systems, spreadsheets, and manually prepared reports. The team documented process gaps, duplicate entry, data dependencies, and opportunities for automation and dashboard development.",
    outcome:
      "Delivered a consolidated operational assessment with process findings, data-source mapping, KPI recommendations, and dashboard concepts presented to company leadership. The work established a foundation for future dashboards and more standardized reporting.",
    metrics: [
      { value: "4 areas", label: "Production · maintenance · scheduling · reporting" },
      { value: "1 roadmap", label: "Future operational dashboards" },
      { value: "KPI framework", label: "Standardized reporting metrics" },
    ],
  },
  {
    id: 10,
    code: "26-15",
    slug: "wildfire-detection-mobile-platform",
    title: "Wildfire Education & Detection Mobile App",
    industry: "Wildfire Detection / Environmental Technology",
    sector: "Government & Public Services",
    description:
      "An embedded IoT company develops systems for wildfire detection and monitoring that combine field-deployed devices with machine learning and computer vision models, including a YOLO-based model, to identify wildfire risks in real time. It wanted a public-facing mobile app that showcases its technology, offers educational and informational value to the general public, and demonstrates on-device wildfire detection.",
    category: "Capstone",
    image: "/projects/wildfire-detection.jpg",
    tags: ["React Native", "Computer Vision", "On-Device Inference"],
    term: "Summer 2026",
    termShort: "Su26",
    duration: "7 weeks",
    delivered: "React Native app · on-device detection",
    client: "Embedded IoT wildfire-detection company",
    course: "BTE Adv. · Graduate",
    team: "4 MS students · 2 coaches",
    status: "Shipped",
    brief:
      "Design and implement a deployable React Native mobile app that surfaces educational content and local wildfire-related news, and integrates the company's existing YOLO computer vision model to analyze camera input on-device and demonstrate wildfire detection.",
    approach:
      "A lightweight, iterative process: discover and align on requirements and a feasible feature subset, then define the app architecture (navigation, state management, modules) and the integration design for content feeds and the camera and YOLO pipeline, identifying key technical risks such as on-device inference performance early. The team then turned an existing no-code-generated React Native UI prototype into a clean, maintainable codebase, implemented the feeds and camera integration with regular check-ins, and tested and hardened before handover.",
    outcome:
      "A deployable React Native app with educational content, local wildfire news consumed from the partner's feeds and APIs (with graceful handling of no-network and failed-fetch states), and a camera “scan” view that runs the pre-trained YOLO model on-device and shows detection results such as bounding boxes, labels, or confidence. Packaged with iOS and Android build configurations, technical documentation, a short user guide, and a final demo to the partner and faculty.",
    metrics: [
      { value: "On-device", label: "YOLO model inference" },
      { value: "4 areas", label: "Home · education · news · camera" },
      { value: "7 weeks", label: "Capstone engagement" },
    ],
  },
  {
    id: 11,
    code: "26-14",
    slug: "validation-decision-intelligence-panel",
    title: "AI Agents & Data Pipeline for Opportunities",
    industry: "AI Data Infrastructure / Entrepreneurship Support",
    sector: "Financial Services",
    description:
      "A digital platform aggregates and curates entrepreneurial opportunities across the U.S. and Canada — grants, accelerators, pro bono programs, conferences, and cloud and service credits — and promises non-obvious matches and step-by-step application guidance. That depends on a high-quality, continuously updated opportunity database, but the data comes from unstructured, inconsistent sources (websites, PDFs, forms, announcements), and manual or basic-scraping ingestion leaves it incomplete, inconsistent, and slow to update. Designed and prototyped AI-driven ingestion pipelines and agents to extract, structure, validate, and enrich it.",
    category: "Capstone",
    image: "/projects/opportunity-data-pipeline.jpg",
    tags: ["AI Agents", "Data Ingestion", "Data Validation"],
    term: "Summer 2026",
    termShort: "Su26",
    duration: "7 weeks",
    delivered: "Ingestion pipelines · AI agent prototypes",
    client: "Entrepreneurial opportunity platform",
    course: "BTE Adv. · Graduate",
    team: "4 MS students · 2 coaches",
    status: "Shipped",
    brief:
      "Design and prototype AI-driven data ingestion pipelines and agent-based systems that extract, structure, validate, and enrich opportunity data from diverse sources — a scalable, reliable foundation for the platform's recommendation engine that reduces manual curation effort while improving accuracy.",
    approach:
      "Four phases over seven weeks: discovery and requirements (current sources, ingestion methods, priority attributes, constraints); data model and architecture design (a standardized opportunity schema and a modular flow from ingestion to extraction, validation, and enrichment, with agent roles for extraction, classification, and enrichment); prototype development with weekly demos; and testing, refinement, and handover. Agent-assisted extraction goes beyond simple scraping, using existing AI APIs and tools rather than building models from scratch.",
    outcome:
      "Prototype pipelines and AI agents that ingest opportunity data from websites, PDFs, and structured and semi-structured forms and produce structured output aligned to a standardized schema — covering eligibility, geography, funding type, deadlines, and requirements. Validation and cleaning routines check completeness and consistency, remove duplicates, and flag low-confidence or ambiguous entries; agents classify opportunities by industry, geography, stage, and use case and enrich them with inferred attributes. Delivered with source code, documentation of schemas, processing logic, and architecture, and integration guidance — a foundation that can be extended into production-grade systems.",
    metrics: [
      { value: "3 source types", label: "Websites · PDFs · forms" },
      { value: "3 agent roles", label: "Extraction · classification · enrichment" },
      { value: "7 weeks", label: "Four-phase engagement" },
    ],
  },
  {
    id: 12,
    code: "26-13",
    slug: "ai-assisted-video-production-workflow",
    title: "AI Video Editing Tools Evaluation",
    industry: "Video Production / Internal Communications",
    sector: "Manufacturing",
    description:
      "A corporate production team's post-production process for internal employee videos takes approximately four business days to finish a 10- to 15-minute video — interviews, multiple camera angles, transcript review, storyline development, and final editing — which makes it hard to publish internal communications quickly and consistently. Evaluated AI-supported editing tools and workflow improvements that could cut turnaround time without sacrificing quality or editorial control.",
    category: "Capstone",
    image: "/projects/video-editing-timeline.jpg",
    tags: ["AI Video Editing", "Tool Evaluation", "Product Proposals"],
    term: "Summer 2026",
    termShort: "Su26",
    duration: "6 weeks",
    delivered: "AI tool evaluation · decision-ready proposals",
    client: "Corporate video production team",
    course: "BTE Adv. · Graduate",
    team: "4 MS students · 2 coaches",
    status: "Shipped",
    brief:
      "Understand which AI editing tools are most useful, how each fits into the existing production process, and whether they can realistically reduce editing time without creating additional workflow challenges — supporting the goal of modernizing internal content production and publishing more employee videos.",
    approach:
      "Research, comparison, proposal development, stakeholder feedback, and limited testing rather than full implementation. The tools in play were Autopod, a paid Adobe Premiere Pro plug-in that automatically cuts to the person speaking; Quickture, which organizes and edits at the level of beats, scenes, and episodes; and Claude, already used to generate storylines from interview transcripts.",
    outcome:
      "A decision-ready package of AI product proposals to help the team decide which tools are worth further testing, investment, or presentation to executive leadership. Each proposal follows the same structure so products can be compared fairly: executive summary, product description, interviews or examples from current users, competitive landscape, business model and long-term cost, implementation and deployment plan, risks and challenges (training, workflow disruption, limitations, data and privacy concerns, adoption barriers), and comparison with other products.",
    metrics: [
      { value: "~4 days", label: "Current post-production time per video" },
      { value: "3 tools", label: "Autopod · Quickture · Claude" },
      { value: "8 sections", label: "In every proposal" },
    ],
  },
  {
    id: 13,
    code: "26-12",
    slug: "microgravity-fluid-behavior-simulation",
    title: "Zero-Gravity Fluid Modeling Roadmap",
    industry: "Aerospace / Engineering Simulation",
    sector: "Manufacturing",
    description:
      "A space-focused engineering company of about 50 staff — roughly 30 engineers, many with 15–30 years at NASA and related organizations — builds services and hardware for challenging industrial and scientific applications in orbit and microgravity. Its work depends on high-fidelity modeling and simulation, and it wants to advance the state of the art in zero-gravity fluid modeling for industrial processes such as sewage processing, grain beds, and aeration. Assessed the current tools, identified the gaps, and defined a future-state vision and roadmap.",
    category: "Capstone",
    image: "/projects/orbital-fluid-modeling.jpg",
    tags: ["Fluid Modeling", "Gap Analysis", "Roadmap"],
    term: "Summer 2026",
    termShort: "Su26",
    duration: "7 weeks",
    delivered: "Gap analysis · roadmap · executive deck",
    client: "Space engineering company",
    course: "BTE Adv. · Graduate",
    team: "4 MS students · 2 coaches",
    status: "Shipped",
    brief:
      "Improve zero-gravity fluid simulation for industrial processes: assess the current state of zero-G and orbital fluid modeling tools, identify where existing models and software fall short in microgravity regimes, define a future-state vision for improved capabilities, and develop an operational roadmap with risks and mitigation strategies.",
    approach:
      "An applied and strategic project rather than pure coding: students acted as digital facilitators and analysts, drawing on the company's experts for deep domain input. Discovery and a current-state assessment (kickoff workshop, literature and tools review) led into a structured gap analysis — physics, numerical, and configuration gaps, including the solver configurations, meshing strategies, and parameter settings that must change from 1-g to zero-G — and use-case prioritization, then a future-state modeling concept and a drafted roadmap. Weekly workshops with the company and weekly faculty checkpoints kept the work aligned.",
    outcome:
      "A final report and executive deck covering the current-state analysis, a detailed gap analysis with prioritized use cases, a future-state vision for improved simulation capabilities (such as a conceptual “zero-G mode”), and a phased operational roadmap with risks and mitigations — plus supporting technical notes on the tools and methods reviewed and example configuration considerations for zero-G vs. 1-g. Presented to the company and academic stakeholders. Full production-grade software implementation was out of scope.",
    metrics: [
      { value: "4 parts", label: "Current state · gaps · future state · roadmap" },
      { value: "~30 engineers", label: "At the partner company" },
      { value: "7 weeks", label: "Graduate capstone" },
    ],
  },
  {
    id: 14,
    code: "26-11",
    slug: "document-intelligence-auto-population-engine",
    title: "AI Document Intelligence & Auto-Population Engine",
    industry: "Fintech / Pet Care Technology",
    sector: "Financial Services",
    description:
      "A fintech and pet-tech platform that helps pet owners plan, save, and manage the lifetime cost of pet care is evolving from a static cost calculator into an adaptive, data-driven financial planning platform. Pet owners already hold rich information in veterinary bills, receipts, vaccination records, health records, and estimates, but it is unstructured, manually entered, and rarely reused — creating onboarding friction, incomplete data, and forecasts that degrade over time. Designed and prototyped an AI-powered document intelligence and auto-population engine.",
    category: "Capstone",
    image: "/projects/pet-health-records.jpg",
    tags: ["OCR", "Document Classification", "Human-in-the-Loop"],
    term: "Summer 2026",
    termShort: "Su26",
    duration: "8 weeks",
    delivered: "Document intelligence prototype · structured records",
    client: "Pet-care fintech platform",
    course: "BTE Adv. · Graduate",
    team: "4 MS students · 2 coaches",
    status: "Shipped",
    brief:
      "Design and prototype an AI-driven document intelligence system that ingests pet-related documents, extracts structured health and financial data, and automatically populates discrete records within a pet profile — a foundational data layer for the platform's future adaptive financial forecasting and planning.",
    approach:
      "Four phases: discovery and requirements (confirming document types, target data fields, and a sandboxed, oversight-controlled environment); data model and architecture design for OCR, document classification, structured extraction, confidence scoring, and human-review routing, kept modular and auditable; prototype development; and testing, refinement, and handover with known limitations documented.",
    outcome:
      "A prototype that ingests invoices, receipts, health records, vaccination records, and estimates; performs OCR, document classification, and structured data extraction; normalizes the results into standardized medical and financial record types; and produces integration-ready structured outputs for pet profile auto-population. It generates confidence scores and surfaces records that need human review, and runs in a sandboxed environment without autonomously triggering financial or operational actions. Delivered with documentation of the extraction logic, output structure, confidence scoring approach, limitations, and integration considerations — a foundation for future forecasting, cost variance analysis, and savings recommendations.",
    metrics: [
      { value: "5 doc types", label: "Invoices · receipts · health and vaccination records · estimates" },
      { value: "4 phases", label: "Discovery · design · prototype · testing" },
      { value: "Human review", label: "Low-confidence records surfaced" },
    ],
  },
  {
    id: 15,
    code: "26-10",
    slug: "automated-loan-screening-platform",
    title: "Automated Loan Screening Platform",
    industry: "Lending / Financial Technology",
    sector: "Financial Services",
    description:
      "A loan origination process was moving from broker-dependent, manual screening toward direct-borrower intake, but preliminary screening took hours and relied on manual review. Built an end-to-end platform combining structured borrower intake, automated rules applied to public county data, and ranked deal evaluation.",
    category: "Capstone",
    image: "https://picsum.photos/seed/capstrat-lending/800/500",
    tags: ["Loan Screening", "Public-Data Integration", "Ranked Dashboard"],
    term: "Summer 2026",
    termShort: "Su26",
    duration: "8 weeks",
    delivered: "Intake portal · automated screening",
    client: "Direct-to-borrower lending platform",
    course: "BTE Adv. · Graduate",
    team: "4 MS students · 2 coaches",
    status: "Shipped",
    brief:
      "Preliminary loan screening took hours and relied on manual review, limiting speed and scalability as the process moved toward direct-borrower intake.",
    approach:
      "Built an end-to-end platform combining structured borrower intake, automated rules applied to public county data, and ranked deal evaluation.",
    outcome:
      "Loan intake portal, automated screening engine, public-data integration, and a ranked dashboard delivered — cutting preliminary screening from roughly 4 hours to minutes.",
    metrics: [
      { value: "~4 hrs → min", label: "Preliminary screening time" },
      { value: "1 portal", label: "Structured borrower intake" },
      { value: "Public data", label: "Automated county-record rules" },
    ],
  },
  {
    id: 1,
    code: "26-09",
    slug: "enterprise-broker-digital-experience",
    title: "Enterprise Broker Digital Experience",
    industry: "Financial Services / Mortgage",
    sector: "Financial Services",
    description:
      "A wholesale mortgage lender runs a broker-centric model in which a small number of large enterprise broker accounts generate a significant share of loan production. Those VIP partners still get the same generic digital interface and fragmented support as smaller brokers, creating operational friction. Designed a VIP-class website and companion mobile app concept that centralizes resources, clarifies ownership, and improves broker engagement.",
    category: "HCD",
    image: "/projects/ad-mortgage-team.jpg",
    tags: ["User Personas", "Journey Mapping", "Competitive Analysis"],
    featured: true,
    term: "Spring 2026",
    termShort: "S26",
    duration: "6 weeks",
    delivered: "Website + mobile app prototypes",
    client: "Wholesale mortgage lender",
    course: "BTE 210 · Undergraduate",
    team: "5 students · 2 coaches",
    status: "Shipped",
    brief:
      "Create a VIP-class digital experience for enterprise broker accounts — a customized website environment and companion mobile app — that centralizes resources, clarifies ownership, and strengthens broker loyalty and engagement. A scalable platform could increase production capacity, with an estimated $100–$250K in additional monthly revenue potential.",
    approach:
      "Loan officers at large broker organizations struggle to identify the right contacts, access accurate information, and navigate onboarding resources, while sales teams manually support and educate large numbers of them. Using user-centered design methods, the team defined 2–3 personas representing different enterprise loan officer roles, built empathy maps and current-state/future-state journey maps to identify the major friction points in broker workflows, and ran a competitive analysis of broker-facing digital platforms, translating the insights into prioritized product features. Insights and deliverables were validated with project stakeholders through coordinator checkpoints and workshops.",
    outcome:
      "Executive-ready website and mobile app prototypes (~25 screens of workflows) illustrating the proposed experience: a dedicated digital environment for each major partner with tailored content and resources, direct access to the correct support teams, and one-click access to critical operational information. Presented to the project stakeholders.",
    metrics: [
      { value: "$100–250K", label: "Estimated monthly revenue potential" },
      { value: "~25 screens", label: "App workflows prototyped" },
      { value: "2–3 personas", label: "Enterprise loan officer roles" },
    ],
  },
  {
    id: 2,
    code: "26-08",
    slug: "athletic-mental-performance-app",
    title: "Athlete Mental Toughness Platform",
    industry: "Digital Health / Sports Performance",
    sector: "Health & Life Sciences",
    description:
      "An AI-powered health and longevity platform helps users understand and improve their biological age, analyzing personal health data to give personalized recommendations across nutrition, exercise, sleep, stress management, and supplementation. A spin-off initiative expands the ecosystem into the athletic community, introducing athletes, coaches, and teams through a focused digital tool. Designed and prototyped the website and mobile app.",
    category: "HCD",
    image: "/projects/myyouthspan.jpg",
    tags: ["Sports Performance", "Mental Toughness", "Freemium"],
    featured: true,
    term: "Spring 2026",
    termShort: "S26",
    duration: "6 weeks",
    delivered: "Website + mobile app prototypes",
    client: "AI-powered health and longevity platform",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "Shipped",
    brief:
      "Design and prototype a digital platform — a website and mobile app for coaches and athletes — that serves as a freemium entry point to the broader health optimization platform, a showcase of its data science capabilities, and a strategic growth channel into the athletic community.",
    approach:
      "Conducted a Business Model Canvas analysis, supported by a short SWOT and competitive assessment, to guide feature design, and used the HCD framework to build solutions around two key personas — coaches and athletes — with persona, empathy, and journey maps guiding the experience design. The work lays groundwork for future integration with health optimization features such as training, nutrition, and supplements. Insights and deliverables were validated with partner stakeholders through coordinator checkpoints and workshops.",
    outcome:
      "Website and mobile app prototypes (~25 screens of workflows) in which coaches register teams and manage player accounts, and athletes complete structured mental toughness self-assessments that automatically generate individual and team-level analytics reports. Presented to the founder.",
    metrics: [
      { value: "2 surfaces", label: "Website + mobile app" },
      { value: "~25 screens", label: "App workflows prototyped" },
      { value: "2 personas", label: "Coaches and athletes" },
    ],
  },
  {
    id: 3,
    code: "26-07",
    slug: "ai-knowledge-management-platform",
    title: "AI Knowledge Management Platform",
    industry: "Technology / Live Events & Venues",
    sector: "Travel & Hospitality",
    description:
      "A global, full-service provider of technology, data, and creative solutions for live environments like venues and major events — founded in 2009, with 5,000+ projects delivered — wants to scale access to AI (LLMs) company-wide while controlling licensing costs. Its AI users split into heavy daily users and a large group of occasional users, for whom full licenses are expensive and inefficient, and public AI use creates confidentiality risk and fragmented knowledge sharing. Built an MVP internal AI knowledge management platform.",
    category: "AI Engineering",
    image: "/projects/knowledge-platform.jpg",
    tags: ["SharePoint Integration", "LLM Search", "Prompt Library"],
    featured: true,
    term: "Spring 2026",
    termShort: "S26",
    duration: "8 weeks",
    delivered: "MVP knowledge platform · architecture docs",
    client: "Global live-venue technology provider",
    course: "BTE 440 · Undergraduate",
    team: "5 students · 2 coaches",
    status: "Shipped",
    brief:
      "Democratize AI access and improve its effectiveness across the organization with a knowledge management platform that supports safe, cost-efficient AI usage — without provisioning full advanced licenses for every user.",
    approach:
      "Students acted as a Digital-First Consulting Team, designing and implementing an internal AI-enabled knowledge management platform on top of the partner's SharePoint repository, with a web-based UI and an LLM API. The platform gives secure, organization-controlled access to AI, with curated prompts and guided workflows for occasional users, a centralized prompt and document repository, protection of confidential information, accumulation of organizational knowledge, and a cost-efficient access model where the company pays only for token usage by occasional users.",
    outcome:
      "An MVP of the platform with a modern web GUI, in which people can load documents into SharePoint so they are known to the LLM, search the repository via the LLM, submit requests through the LLM API with conversation and context tracking, and draw on an expandable library of prompts and strategies. Delivered with design and architecture documentation and a final presentation to executive leadership demonstrating the platform, explaining its architecture, and articulating how it can enable the workforce.",
    metrics: [
      { value: "1 MVP", label: "Web-based knowledge platform" },
      { value: "3 deliverables", label: "MVP · architecture docs · executive presentation" },
      { value: "8 weeks", label: "Kickoff to executive presentation" },
    ],
  },
  {
    id: 4,
    code: "26-06",
    slug: "longevity-performance-dashboard",
    title: "Age-Graded Walking & Longevity Platform",
    industry: "Digital Health / Longevity",
    sector: "Health & Life Sciences",
    description:
      "A digital health and longevity platform measures cardiovascular effort relative to age rather than raw activity volume, built around fast-paced walking as an accessible way to improve VO₂ Max, functional strength, and long-term health. It converts wearable data into age-graded performance insights using World Masters Athletics (WMA) age-grading logic. Designed the website and mobile app concept, with high-fidelity prototypes.",
    category: "HCD",
    image: "/projects/fastwalker.jpg",
    tags: ["Longevity", "Wearable Data", "Age-Graded Performance"],
    term: "Spring 2026",
    termShort: "S26",
    duration: "6 weeks",
    delivered: "Website + mobile app prototypes",
    client: "Digital health and longevity platform",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "Shipped",
    brief:
      "Envision and design a multi-sided digital platform (website and mobile app) that supports age-graded walking performance and longevity tracking — letting users connect wearables, see pace, heart rate, and effort as a normalized age-graded score, and stay engaged through progress tracking and community recognition.",
    approach:
      "Applied human-centered design methods — personas, journey maps, feature prioritization — to translate the health challenge into a clear product concept for two personas: everyday users/walkers and performance-focused longevity enthusiasts. Used the Business Model Canvas to document the future business model and identify digital impact areas, built persona and empathy maps to guide the experience design, and validated insights and deliverables with partner stakeholders through coordinator checkpoints and workshops.",
    outcome:
      "High-fidelity prototypes and interface mockups of the website and mobile app (~25 screens of workflows) demonstrating the user journey, dashboards, and key analytics views, along with the digital product concept, value proposition, and key platform capabilities supporting behavior change and engagement. Presented to the founder. Scoped to product design and prototyping only.",
    metrics: [
      { value: "2 surfaces", label: "Website + mobile app" },
      { value: "~25 screens", label: "App workflows prototyped" },
      { value: "2 personas", label: "Everyday walkers + longevity enthusiasts" },
    ],
  },
  {
    id: 5,
    code: "26-05",
    slug: "talent-agency-workflow-digitization",
    title: "Casting Platform Website & iPhone App",
    industry: "Media & Entertainment / Creative Services",
    sector: "Consumer Products",
    description:
      "Founded in 1996, a commercial casting company has cast over 10,000 commercial campaigns, including Super Bowl ads and major PSAs, across comedy, beauty, drama, kids content, and authentic “real people” casting — sourcing everyone from niche professionals to celebrity athletes. Designed a digital platform concept (website + iPhone app) to modernize its external presence and internal casting workflows.",
    category: "HCD",
    image: "/projects/powerhouse-casting.jpg",
    tags: ["Workflow Automation", "Website Redesign", "iPhone Prototype"],
    term: "Spring 2026",
    termShort: "S26",
    duration: "7 weeks",
    delivered: "Website redesign · iPhone prototype",
    client: "Commercial casting company",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "Shipped",
    brief:
      "Create a clean, credible, and easily maintainable website while introducing structured, system-driven processes to replace manual coordination — with clear presentation of services and projects, content the team can update without technical support, streamlined communication with agents and actors, and structured collection of booking materials.",
    approach:
      "Redesigned the public-facing website for clarity, credibility, and usability, and conceptualized workflow automation for booking, communication, and document collection, with experiences designed for both external users (agents, actors) and internal stakeholders (the casting team). Used the Business Model Canvas to identify digital impact areas and the HCD framework — persona, empathy, and journey maps — to guide the design, and validated insights and deliverables with partner stakeholders through coordinator checkpoints and workshops.",
    outcome:
      "A redesigned website and a high-fidelity iPhone prototype (~25 screens of workflows) showing how agents, actors, and clients interact with the platform and how core workflows extend to mobile, built around standardized requests, time-bound responses, and automated tracking to reduce manual follow-ups. Presented to the founder and executive team. Scoped to design and prototyping only — no software development, advanced data engineering or integrations, or production deployment.",
    metrics: [
      { value: "2 surfaces", label: "Website + iPhone app" },
      { value: "~25 screens", label: "App workflows prototyped" },
      { value: "10,000+", label: "Commercial campaigns cast" },
    ],
  },
  {
    id: 7,
    code: "26-04",
    slug: "event-analytics-bi-suite",
    title: "Event Analytics BI Suite",
    industry: "Technology / Live Events Analytics",
    sector: "Travel & Hospitality",
    description:
      "A global, full-service provider of technology, data, and creative solutions for live environments like venues and major events — founded in 2009, with 5,000+ projects delivered — wanted a default Tableau-based business intelligence and reporting package, built on its existing datasets, to hand to new event clients. Built a prototype BI suite that gives a clear, narrative-driven overview of event performance.",
    category: "BI & Dashboards",
    image: "/projects/event-analytics-bi.jpg",
    tags: ["Tableau", "BigQuery", "KPI Scorecards"],
    term: "Spring 2026",
    termShort: "S26",
    duration: "10 weeks",
    delivered: "Tableau dashboards · KPI scorecards",
    client: "Global live-venue technology provider",
    course: "BUS 150 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "Shipped",
    brief:
      "Develop a Tableau-based BI and reporting suite that can serve as the default dashboard package for new event clients — helping them understand what happened during an event and identify areas for improvement, while staying accessible to non-analyst stakeholders.",
    approach:
      "Students acted as a Digital-First Consulting Team: they accessed historical event data in Google BigQuery, profiled the datasets with a data quality assessment, and translated key business questions into KPIs, calculations, and visualizations. Analysis used the Toulmin method (claims, data, warrants, backing) and addressed crowding patterns, gate and zone performance, queue dynamics vs. throughput and sales, activation engagement, and differences across days or matches. Dashboards follow a narrative flow — overview, deep dive, comparison — with captions that connect findings to recommended actions.",
    outcome:
      "A packaged Tableau workbook with the report set — KPIs and scorecards, interactive filtering with linked dashboards, trend analysis and forecasting, and comparative views — structured around event operations and crowd management, venue utilization and guest experience, concessions and retail performance, and sponsorship and activation effectiveness. Designed to be reusable across events and venues through configuration rather than full customization, and presented to the partner's stakeholders with at least five data-backed recommendations. A prototype BI package, not a production software feature.",
    metrics: [
      { value: "3+ dashboards", label: "Plus a storyboard, built in Tableau" },
      { value: "5+ recommendations", label: "Explicitly informed by data" },
      { value: "10 weeks", label: "Project duration" },
    ],
  },
  {
    id: 8,
    code: "26-03",
    slug: "food-brand-coordination-platform",
    title: "Fresh Popcorn Concession Platform",
    industry: "Food & Beverage / Consumer Brands",
    sector: "Consumer Products",
    description:
      "A heritage popcorn company built around a differentiated heirloom “Tiny” popcorn variety relies on unpopped kernels and limited private-label relationships, which provide stability but limit growth through low margins and weak pricing power. Early tests of fresh-popped concession popcorn at schools and events showed strong customer response and significantly better unit economics. Designed a digital concession and engagement platform — website and iPhone app — to support the shift to an experience-led food brand.",
    category: "HCD",
    image: "/projects/tbm-popcorn.jpg",
    tags: ["Event Discovery", "Brand Storytelling", "Demand Data"],
    term: "Spring 2026",
    termShort: "S26",
    duration: "8 weeks",
    delivered: "Website + iPhone app prototypes",
    client: "Heritage popcorn company",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "Shipped",
    brief:
      "Grow the business without entering another high-risk traditional CPG product launch, by repositioning popcorn as a fresh, experiential product delivered in community and event settings — using a digital-first platform to coordinate concession experiences, test markets, and generate data-driven insights while minimizing upfront operational risk.",
    approach:
      "Translated the strategic opportunity into a clear, testable digital product concept: digital product definition and framing, plus human-centered experience design covering personas, user journeys, and platform features. Used the Business Model Canvas to identify digital impact areas and persona, empathy, and journey maps to guide the design, and validated insights and deliverables with partner stakeholders through coordinator checkpoints and workshops.",
    outcome:
      "High-fidelity website and iPhone app prototypes (~25 screens of workflows) that let schools, community organizations, and event organizers discover, request, and coordinate fresh-popped popcorn experiences; give the brand transparency and storytelling around its heirloom popcorn, quality standards, and heritage; let consumers locate events, interact with the brand, and give feedback; and capture structured data on demand patterns, usage contexts, and customer response. An execution-ready digital product concept presented to the founder — excluding physical operations, food preparation, vendor logistics, payment systems, and supply-chain implementation.",
    metrics: [
      { value: "2 surfaces", label: "Website + iPhone app" },
      { value: "~25 screens", label: "App workflows prototyped" },
      { value: "4 aims", label: "Coordination, storytelling, discovery, data" },
    ],
  },
  {
    id: 9,
    code: "26-02",
    slug: "mobile-dessert-cart-loyalty",
    title: "Mobile Dessert Business App & Website",
    industry: "Food & Beverage / Social Enterprise",
    sector: "Consumer Products",
    description:
      "A veteran-owned mobile dessert business that employs and empowers justice-impacted and formerly incarcerated individuals sells chocolate-dipped ice cream bars from electric pedal carts in busy public areas. Created digital extensions of the business through a branded iPhone app and companion website.",
    category: "HCD",
    image: "/projects/screaming-ice-cream.jpg",
    tags: ["Social Enterprise", "iPhone App", "Website"],
    term: "Fall 2025",
    termShort: "F25",
    duration: "8 weeks",
    delivered: "iPhone app · companion website",
    client: "Veteran-owned social enterprise",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "Shipped",
    brief:
      "Create digital extensions of a veteran-owned mobile dessert business through a branded iPhone app and companion website — strengthening the core cart business with data-driven engagement and building recurring customer relationships beyond tourism.",
    approach:
      "Used the Business Model Canvas to document the future business model and identify digital impact areas. Applied the HCD framework to build 1–2 key personas focused on investor motivations, goals, and pain points, with persona, empathy, and journey maps guiding the design of ~25 app screens and a website. Validated insights and deliverables with stakeholders through coordinator checkpoints and workshops.",
    outcome:
      "A branded iPhone app prototype (~25 screens of workflows) and a companion website that amplifies the company's storytelling and community-oriented mission, presented to the founders.",
    metrics: [
      { value: "~25 screens", label: "iPhone app workflows prototyped" },
      { value: "2 surfaces", label: "iPhone app + companion website" },
      { value: "8 weeks", label: "From concept to prototype" },
    ],
  },
  {
    id: 6,
    code: "26-01",
    slug: "investorbridge-platform",
    title: "InvestorBridge Platform",
    industry: "Financial Services / Alternative Investments",
    sector: "Financial Services",
    description:
      "An SEC-registered investment advisor specializing in structured credit and non-agency residential mortgage-backed securities (RMBS) — 26 securitizations since 2020, totaling $9B+ in securitized assets — serving HNWI and UHNWI investors. Developed InvestorBridge, a digital investor platform with web and mobile components, to differentiate the firm in private credit and securitization markets.",
    category: "HCD",
    image: "/projects/imperial-fund.jpg",
    tags: ["Investor Experience", "HNWI UX", "Structured Credit"],
    term: "Fall 2025",
    termShort: "F25",
    duration: "12 weeks",
    delivered: "Web + mobile investor platform",
    client: "SEC-registered investment advisor",
    course: "BTE Adv. · Graduate",
    team: "5 MS students · 2 coaches",
    status: "Shipped",
    brief:
      "Differentiate the firm's structured credit and wealth management offerings through superior digital experience, by developing InvestorBridge — a digital investor platform with web and mobile components for institutional and accredited investors (HNWI, UHNWI, fund managers, placement agents).",
    approach:
      "Used the Business Model Canvas to document the future business model and identify digital impact areas. Applied the HCD framework to build 1–2 key personas focused on investor motivations, goals, and pain points, with persona, empathy, and journey maps guiding the design of ~25 app screens and a website — enhancing transparency, engagement, and operational efficiency in private credit and securitization. Validated insights and deliverables with stakeholders through coordinator checkpoints and workshops.",
    outcome:
      "InvestorBridge app workflows (~25 screens) and website prototyped around transparency, engagement, and operational efficiency, presented to the firm's executive leadership.",
    metrics: [
      { value: "~25 screens", label: "App workflows prototyped" },
      { value: "2 surfaces", label: "Web + mobile components" },
      { value: "$9B+", label: "Securitized assets" },
    ],
  },
];

// ─── Industry coaches & partners ─────────────────────────────────────────────

export interface IndustryCoach {
  id: string;
  name: string;
  title?: string;        // only set when verified against an official source
  organization?: string; // only set when verified against an official source
  bio: string;
  expertise: string[];
  profileUrl?: string;   // official firm profile, where available
  image?: string;        // official headshot; omit to render the initials placeholder
}

export const industryCoaches: IndustryCoach[] = [
  {
    id: "rohan-agarwal",
    name: "Rohan Agarwal",
    // Title and employer intentionally omitted: his resume lists a different current firm
    // and no official Citrin Cooperman profile could be found. Confirm before publishing.
    bio: "Rohan brings more than 15 years of strategy and transformation experience to MDFL's student teams. He has advised senior executives and private equity sponsors on enterprise transformation and performance improvement, commercial strategy, operating models, and value creation, including post-merger integration. His work spans mid-market to multibillion-dollar organizations, with deep experience in consumer goods and retail. As an industry coach, he helps students structure complex problems and turn analysis into practical recommendations.",
    expertise: [
      "Enterprise transformation",
      "Commercial strategy & operating models",
      "Post-merger integration",
      "Consumer goods & retail",
    ],
    image: "/coaches/rohan-agarwal.jpg",
  },
  {
    id: "kenneth-segal",
    name: "Kenneth “Ken” Segal",
    organization: "Citrin Cooperman",
    // Title omitted: the supplied bio sheet says Managing Director, Management Consulting, while the
    // firm's web profile appears to list a different title. Confirm before adding.
    bio: "Ken has more than three decades of experience in capital markets and investment banking. His work centers on credit, lending, and structured finance, and on strategic financial advisory that helps businesses grow and prepare for lenders, investors, and strategic partners. He has worked across manufacturing, real estate, financial services, hospitality, and other sectors, with a hands-on approach that immerses his team in the client's business. As an industry coach, he shares deep financial-markets experience in practical terms.",
    expertise: [
      "Capital markets & investment banking",
      "Credit, lending & structured finance",
      "Strategic financial advisory",
      "Lender & investor readiness",
    ],
    profileUrl: "https://www.citrincooperman.com/Specialists/Kenneth-Segal",
    image: "/coaches/kenneth-segal.jpg",
  },
  {
    id: "arber-cufe",
    name: "Arber Cufe",
    title: "Director",
    organization: "Citrin Cooperman Advisors LLC",
    bio: "Arber brings nearly 15 years of financial and business advisory experience. He advises owners and management teams on business transformation, strategic growth, and financial and operational decisions, with particular depth in valuation, transaction advisory, and M&A. His work includes financial modeling, forecasting, capital strategy, and operational improvement for middle-market and owner-operated companies. As an industry coach, he helps students connect rigorous financial analysis to the decisions business leaders actually face.",
    expertise: [
      "Valuation & transaction advisory",
      "M&A strategy",
      "Financial modeling & forecasting",
      "Business transformation",
    ],
    profileUrl: "https://www.citrincooperman.com/Specialists/Arber-Cufe",
    image: "/coaches/arber-cufe.jpg",
  },
];

export const citrinPartnership = {
  slug: "citrin-cooperman-partnership",
  title: "MDFL Announces Its First Industry Partnership with Citrin Cooperman",
  summary:
    "Citrin Cooperman joins the Miami Digital-First Lab as its first industry partner, connecting academic learning with industry expertise and introducing three industry coaches for MDFL's student teams.",
  logo: "/partners/citrin-cooperman.webp",
  contact: {
    name: "Jonathan Hughes",
    title: "Partner, Practice Leader, Management Consulting",
    organization: "Citrin Cooperman",
    profileUrl: "https://www.citrincooperman.com/Specialists/Jonathan-Hughes",
  },
};
