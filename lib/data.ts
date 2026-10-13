// ─── Interfaces ──────────────────────────────────────────────────────────────

export interface OutcomeMetric {
  value: string;
  label: string;
}

export const sectors = [
  "Aerospace, Marine & Industrial",
  "Consumer & Hospitality",
  "Education & Training",
  "Financial Services & Fintech",
  "Food & Beverage",
  "Health & Life Sciences",
  "Media, Events & Entertainment",
  "Nonprofit & Community",
  "Real Estate & Property",
  "Technology & Software",
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
  name: string;
  fullName: string;
  course: string;
  level: string;
  description: string;
  deliverables: string[];
  skills: string[];
  shipped: number;
  mostRequested?: boolean;
  examples?: string[]; // representative engagement types, shown alongside deliverables/skills
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
    fullName: "Digital Product Innovation & CX Design",
    course: "BTE 210",
    level: "Undergraduate",
    description:
      "Translate ambiguous business ideas into market-ready digital products through human-centered design, rapid prototyping, and business strategy.",
    deliverables: [
      "2–3 user personas with empathy and journey maps",
      "High-fidelity web and mobile prototypes (~25 screens)",
      "Business Model Canvas",
      "SWOT analysis and go-to-market strategy",
      "Executive presentation to client leadership",
    ],
    skills: [
      "Mobile app prototyping",
      "UX / HCD",
      "SWOT & value proposition",
      "High-fidelity Figma",
      "Market analysis",
      "Go-to-market strategy",
    ],
    shipped: 6,
    mostRequested: true,
  },
  {
    id: 2,
    name: "AI Engineering",
    fullName: "AI & Data Product Engineering for Industry Solutions",
    course: "BTE 440",
    level: "Undergraduate",
    description:
      "Design and deploy production-grade AI systems — RAG-first design, agentic workflows, lightweight fine-tuning (LoRA) — with governance, PII filtering, and full-stack delivery.",
    deliverables: [
      "MVP AI assistant or automated analytical pipeline",
      "Architecture documentation and governance framework",
      "Prompt library and guided workflows",
      "ROI analysis and cost-transparency model",
      "Executive demonstration to client AI leadership",
    ],
    skills: [
      "RAG systems",
      "Agentic AI",
      "LoRA fine-tuning",
      "Governance & guardrails",
      "Full-stack deployment",
      "Finance, legal, logistics AI",
    ],
    shipped: 1,
  },
  {
    id: 3,
    name: "BI & Dashboards",
    fullName: "Data-Driven Decision Support Dashboards",
    course: "BUS 150",
    level: "Undergraduate",
    description:
      "Build interactive executive dashboards in Excel, Power BI, and Tableau that transform financial and operational data into actionable insight.",
    deliverables: [
      "Interactive Power BI or Tableau dashboard suite",
      "KPI scorecards and interactive filters",
      "Scenario-planning and cash-flow models",
      "Trend analysis and data-backed recommendations",
      "Executive presentation with live dashboard demo",
    ],
    skills: [
      "Power BI",
      "Tableau",
      "Excel modeling",
      "Scenario analysis",
      "Cash-flow dashboards",
      "Operational KPIs",
    ],
    shipped: 2,
  },
  {
    id: 4,
    name: "Finance & Valuation",
    fullName: "Applied Finance, Valuation & Market Strategy",
    course: "FIN 302",
    level: "Undergraduate",
    description:
      "Step into the role of financial analysts to value companies, assets, and investment decisions — applying financial-statement analysis, valuation modeling, portfolio theory, and capital-structure strategy to produce evidence-based recommendations for managers, investors, lenders, and boards.",
    deliverables: [
      "Financial-statement & ratio analysis with peer benchmarking",
      "NPV / DCF investment case with forecasted cash flows",
      "Optimal portfolio & efficient-frontier construction",
      "Bond and options valuation & strategy modeling",
      "Corporate valuation and capital-structure recommendation",
    ],
    skills: [
      "Financial-statement analysis",
      "DCF & corporate valuation",
      "Capital budgeting / NPV",
      "Portfolio theory (MPT / CAPM)",
      "Bond & options modeling",
      "WACC & capital structure",
      "Excel financial modeling",
    ],
    shipped: 0,
  },
  {
    id: 5,
    name: "Graduate Capstone",
    fullName: "Client-Centered Capstone Framing, Value Engineering & Execution Readiness",
    course: "BTE Adv.",
    level: "Graduate (MS)",
    description:
      "MS in Business Technology students apply the Miami Method to frame complex business problems, align stakeholders, and design execution-ready solutions integrating data, AI, cybersecurity, and fintech.",
    deliverables: [
      "Problem framing and stakeholder alignment report",
      "Execution-ready proposal with implementation roadmap",
      "Data + AI + digital integration architecture",
      "KPI framework and measurement plan",
      "Final presentation to executive leadership",
    ],
    skills: [
      "Miami Method",
      "Stakeholder alignment",
      "Execution-ready proposals",
      "AI + data + digital",
      "Supply chain AI",
      "Sports analytics",
      "KPI frameworks",
    ],
    shipped: 7,
  },
  {
    id: 6,
    name: "Digital Marketing",
    fullName: "Digital Marketing Strategy and SEO/SEM Optimization Experience",
    course: "MKT 387",
    level: "Undergraduate",
    description:
      "Students work directly with a company on a real digital marketing challenge — assessing its digital presence, audience, and competitive position, using tools like Semrush to analyze SEO and AI/search visibility, and developing an actionable strategy backed by campaign concepts, content recommendations, and measurable KPIs.",
    deliverables: [
      "Audience and positioning framework (segments, personas, value proposition, messaging)",
      "Digital audit — website, SEO, competitors, social, and AI/search visibility",
      "Content strategy and campaign concepts with sample assets",
      "Customer journey mapping and measurement/KPI framework",
      "Prioritized 3–6 month implementation roadmap",
    ],
    skills: [
      "SEO / SEM & Semrush",
      "Competitive & market analysis",
      "Audience segmentation",
      "Content & campaign strategy",
      "Customer journey mapping",
      "Marketing analytics & KPIs",
    ],
    shipped: 0,
    examples: [
      "Market research and opportunity analysis",
      "Competitive and industry analysis",
      "Customer research and audience segmentation",
      "Go-to-market strategy development",
      "Marketing strategy and campaign planning",
      "Brand positioning and messaging strategy",
      "Customer acquisition and retention strategy",
      "Product or service positioning",
      "New market or geographic expansion analysis",
      "Digital marketing and channel strategy",
      "Customer journey and engagement analysis",
      "Marketing performance analysis and recommendations",
      "Growth strategy and opportunity prioritization",
      "New product or service launch strategy",
      "Strategic recommendations to address a defined marketing or business challenge",
    ],
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
    sector: "Consumer & Hospitality",
    description:
      "A location-based social utility using conversational AI needed a redesigned path from stated intent to relevant people, venues, and real-world engagement. Delivering personas, journey maps, and high-fidelity web and iPhone prototypes limited to UX/UI, with no backend or AI-model work in scope.",
    category: "HCD",
    image: "https://picsum.photos/seed/flovara-social/800/500",
    tags: ["Conversational AI UX", "Mobile Prototyping", "Personas & Journeys"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Web + iPhone prototype · personas",
    client: "Location-based social discovery startup",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Redesign a dual-sided, location-based social utility so conversational AI moves users from stated intent to relevant people, venues, and real engagement.",
    approach:
      "Building a Business Model Canvas and competitive scan, then developing intent-driven personas, empathy maps, and journeys, translating them into high-fidelity website and iPhone prototypes (roughly 12–15 screens per persona) — UX/UI only, with no backend, AI-model, or deployment work.",
    outcome:
      "Validated product framing plus high-fidelity web and iPhone experience concepts clarifying user intent, AI interaction, discovery, and conversion to in-person engagement.",
    metrics: [
      { value: "12–15 screens", label: "Per persona prototype" },
      { value: "2 platforms", label: "Web + iPhone" },
      { value: "UX-only scope", label: "No backend or AI-model work" },
    ],
  },
  {
    id: 46,
    code: "26-46",
    slug: "surgestreams-space-economy-platform",
    title: "SurgeStreams Space-Economy Platform",
    industry: "Aerospace / IT Consulting",
    sector: "Aerospace, Marine & Industrial",
    description:
      "An IT consulting firm needed to reposition as a specialized space-economy partner rather than a generalist vendor. Delivering a modern platform concept centered on aerospace engineering and supply-chain pain points, with personas across engineering, supply-chain, program, and technology leadership.",
    category: "HCD",
    image: "https://picsum.photos/seed/surgestreams-space/800/500",
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
      "Reposition a generalist IT consulting firm as a specialized space-economy partner through a platform experience built around aerospace and supply-chain outcomes.",
    approach:
      "Building platform framing with a competitive and analog scan, developing personas across engineering, supply-chain, program, and technology leaders, mapping empathy and journeys, and producing website and iPhone prototypes (~12–15 screens per persona) — no engineering, AI integration, backend, or deployment.",
    outcome:
      "A coherent digital positioning, information architecture, and prototype clarifying the firm's specialized value proposition and customer outcomes.",
    metrics: [
      { value: "4 personas", label: "Engineering · supply-chain · program · tech" },
      { value: "12–15 screens", label: "Per persona prototype" },
      { value: "1 platform", label: "Repositioning concept" },
    ],
  },
  {
    id: 45,
    code: "26-45",
    slug: "manuka-gathering-event-workspace",
    title: "Manuka / Gathering Event Workspace",
    industry: "Events / Multi-Sided Platform",
    sector: "Media, Events & Entertainment",
    description:
      "A multi-sided event-planning workspace needed to connect professional planners, hosts, and vendors around tasks, timelines, communications, and controlled visibility. Delivering a Business Model Canvas, event-lifecycle journey mapping, and a 25+ screen web and iPhone prototype.",
    category: "HCD",
    image: "https://picsum.photos/seed/manuka-gathering/800/500",
    tags: ["Multi-Sided Platform", "Event UX", "Clickable Prototype"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Web + iPhone prototype · event workflow",
    client: "Event-planning workspace startup",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Define a planner-led, multi-sided event-planning workspace connecting planners, hosts, and vendors around a shared, controlled-visibility workflow.",
    approach:
      "Building a Business Model Canvas, competitive scan, and SWOT; developing 1–3 personas and an end-to-end event-lifecycle journey with pain-point analysis; producing 25+ screen web and iPhone prototypes using visual/no-code tools, with no production build or integrations.",
    outcome:
      "An economically grounded platform concept and clickable prototype showing planner-orchestrated collaboration, event workspaces, stakeholder visibility, and coordinated execution.",
    metrics: [
      { value: "25+ screens", label: "Web + iPhone prototype" },
      { value: "3 sides", label: "Planners · hosts · vendors" },
      { value: "1 concept", label: "Economically grounded platform" },
    ],
  },
  {
    id: 44,
    code: "26-44",
    slug: "enable-talent-access-passport",
    title: "Enable Talent Access Passport",
    industry: "Accessibility Tech / Identity",
    sector: "Technology & Software",
    description:
      "A privacy-conscious 'access passport' concept needed to let people with disabilities verify information once and share accessibility requirements without exposing underlying documents. Delivering a multi-sided prototype for passport holders, verifiers, and receivers with a 25+ screen high-fidelity flow.",
    category: "HCD",
    image: "https://picsum.photos/seed/enable-talent-passport/800/500",
    tags: ["Privacy-First UX", "Multi-Sided Design", "Accessibility"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Passport prototype · privacy UX",
    client: "Accessibility-focused identity verification startup",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Prototype a privacy-conscious access passport letting people with disabilities verify information once without exposing underlying documents.",
    approach:
      "Framing the multi-sided experience for passport holders, verifiers, and receivers; building a competitive/analog scan and privacy- and trust-centered personas, empathy maps, and journeys; producing a 25+ screen web and iPhone prototype with no real sensitive data, security architecture, or integrations.",
    outcome:
      "A high-fidelity concept demonstrating passport creation, external verification, controlled disclosure, and reuse across employment and service contexts.",
    metrics: [
      { value: "25+ screens", label: "High-fidelity prototype" },
      { value: "3 sides", label: "Holders · verifiers · receivers" },
      { value: "Privacy-first", label: "No real sensitive data used" },
    ],
  },
  {
    id: 43,
    code: "26-43",
    slug: "forex-payments-education-portal",
    title: "Forex Payments Education Portal",
    industry: "Fintech / SMB Financial Services",
    sector: "Financial Services & Fintech",
    description:
      "A managed FX service needed an educational, trust-building portal to help SMB decision-makers understand spreads and transaction costs before engaging. Delivering a Wix-ready website concept plus a 25+ screen clickable iPhone prototype.",
    category: "HCD",
    image: "https://picsum.photos/seed/forex-payments/800/500",
    tags: ["Fintech Education UX", "Trust-Building Journey", "SMB Personas"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "FX education portal · trust UX",
    client: "Managed FX service provider",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Design an educational FX portal that helps SMB decision-makers understand pricing and engage a managed FX service with greater trust.",
    approach:
      "Building a Business Model Canvas and competitive scan; developing SMB-owner and finance-decision-maker personas and a trust-focused journey from awareness through education, evaluation, and engagement; producing a Wix-ready website plus a 25+ screen clickable iPhone prototype — no pricing engine, transactions, or provider integration.",
    outcome:
      "A handoff-ready experience blueprint that explains FX pricing clearly, supports option evaluation, and positions the sponsor's managed solution against traditional providers.",
    metrics: [
      { value: "25+ screens", label: "Clickable iPhone prototype" },
      { value: "1 site", label: "Wix-ready website concept" },
      { value: "Trust-focused", label: "Awareness-to-engagement journey" },
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
    sector: "Consumer & Hospitality",
    description:
      "A kid-safe conversational AI needed to find its strongest hospitality use case and a matching guest and hotel-management experience. Delivering a go-to-market playbook alongside guest-facing and operations-side UX prototypes.",
    category: "HCD",
    image: "https://picsum.photos/seed/conv-ai-hospitality/800/500",
    tags: ["GTM Strategy", "Conversational AI UX", "Hospitality"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "GTM playbook · guest/ops UX",
    client: "Kid-safe conversational AI company",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Validate where a kid-safe conversational AI creates the strongest hospitality value and design the guest and management experiences around it.",
    approach:
      "Combining market research, a competitive scan, and segment/buyer prioritization with positioning and outreach assets; building 1–3 buyer/user personas and guest/hotel-manager journeys; producing non-deployable UX prototypes aligned with the existing AI — no commercialization or live integration.",
    outcome:
      "An execution-ready go-to-market playbook with measurable test concepts, plus guest-facing and operations-side prototypes for FAQs, bookings, escalation, and workflow fit.",
    metrics: [
      { value: "1 playbook", label: "Execution-ready GTM plan" },
      { value: "2 sides", label: "Guest + hotel-operations UX" },
      { value: "1–3 personas", label: "Buyer/user segments" },
    ],
  },
  {
    id: 40,
    code: "26-40",
    slug: "content-repurposing-platform-ux",
    title: "Content Repurposing Platform UX",
    industry: "Content Tech / Creator Tools",
    sector: "Technology & Software",
    description:
      "A partial AI-powered MVP that turns long-form content into multi-channel derivative assets needed reduced tab-switching and fragmented storage. Delivering updated wireframes, refined marketer personas, and feasible AI-agent and integration improvements.",
    category: "HCD",
    image: "https://picsum.photos/seed/content-repurposing/800/500",
    tags: ["MVP UX Improvement", "Content Ops", "Agent Workflow"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "MVP UX refresh · agent workflow",
    client: "AI-powered content platform",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Improve a partial AI-powered MVP that turns long-form content into multi-channel assets while reducing fragmented, tab-heavy workflows.",
    approach:
      "Assessing the current MVP, refining marketer personas and the end-to-end journey, updating wireframes, and improving source-to-derivative asset association and single-tab UX, with feasible AI-agent and Notion/Google Drive integration improvements — no full rebuild.",
    outcome:
      "A more coherent and usable MVP experience with updated UX, content-bank logic, improved agent workflow where feasible, and handoff recommendations.",
    metrics: [
      { value: "1 MVP", label: "UX + workflow overhaul" },
      { value: "Single-tab", label: "Reduced fragmentation" },
      { value: "Agent-ready", label: "Feasible integration improvements" },
    ],
  },
  {
    id: 39,
    code: "26-39",
    slug: "band-hub-musician-matching",
    title: "Band Hub Musician Matching",
    industry: "Consumer / Hobbyist Community",
    sector: "Consumer & Hospitality",
    description:
      "Adult and senior hobbyist musicians lacked a way to find compatible players and form groups beyond informal networks and classifieds. Delivering a matching-platform concept and high-fidelity website and iPhone app spanning onboarding through group formation.",
    category: "HCD",
    image: "https://picsum.photos/seed/band-hub/800/500",
    tags: ["Matching Platform", "Community UX", "Mobile Prototype"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Matching platform prototype",
    client: "Musician-matching platform startup",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Design a matching platform for adult and senior hobbyist musicians to find compatible players and form groups based on shared goals and availability.",
    approach:
      "Building a Business Model Canvas and a scan of Facebook groups, classifieds, and informal networks; developing personas grounded in manual matching experience and an onboarding-to-group-formation journey; producing a user-centered website and high-fidelity iPhone app with a future AI-matching roadmap.",
    outcome:
      "A clear platform value model, website and mobile prototype, and documentation showing onboarding, profile creation, compatibility inputs, matching, and group formation.",
    metrics: [
      { value: "1 platform", label: "Matching concept + prototype" },
      { value: "2 surfaces", label: "Website + iPhone app" },
      { value: "Roadmap", label: "Future AI-matching path" },
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
      "Unmet needs at the intersection of ADHD and pre-menopause/menopause needed translating from public online discourse into a differentiated digital-product direction. Delivering a structured needs-analysis report connecting public conversations to prioritized pain points and MVP direction.",
    category: "HCD",
    image: "https://picsum.photos/seed/womens-neurodiversity/800/500",
    tags: ["Needs Analysis", "Qualitative Research", "MVP Direction"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Needs-analysis report · MVP direction",
    client: "Women's health research initiative",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Identify unmet needs at the intersection of ADHD and menopause and translate public online voices into a differentiated digital-product direction.",
    approach:
      "Conducting desk-based collection of public conversations, qualitative coding, and thematic analysis; prioritizing pain points by frequency, urgency, well-being impact, and feasibility; developing personas, journeys, and MVP concepts — excluding clinical research, treatment claims, or a full product build.",
    outcome:
      "A structured needs-analysis report connecting public discourse to prioritized pain points, segment definition, evidence-based MVP opportunities, and recommended next research steps.",
    metrics: [
      { value: "1 report", label: "Structured needs analysis" },
      { value: "Evidence-based", label: "Public-discourse research" },
      { value: "MVP direction", label: "Not a polished app" },
    ],
  },
  {
    id: 37,
    code: "26-37",
    slug: "veterans-memorial-museum-platform",
    title: "Veterans Memorial Museum Platform",
    industry: "Nonprofit / Digital Heritage",
    sector: "Nonprofit & Community",
    description:
      "A dedicated Veterans Memorial Museum needed a searchable, map-enabled, story-driven platform anchored in a KIA database, connected to a partner site through cross-linking rather than integration. Delivering a maintainable museum platform concept with search, mapping, and storytelling.",
    category: "HCD",
    image: "https://picsum.photos/seed/veterans-museum/800/500",
    tags: ["Digital Heritage", "Search & Mapping UX", "Nonprofit"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Museum platform concept · search UX",
    client: "Veterans memorial nonprofit",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Create a searchable, map-enabled, story-driven Veterans Memorial Museum platform connected to a partner site through cross-linking, not integration.",
    approach:
      "Mapping the broader ecosystem while designing the museum as the anchor; building personas across families, visitors, educators, staff, and communities; mapping journeys for search, mapping, storytelling, and visitation; producing a high-fidelity web-first prototype with lightweight AI-governance recommendations.",
    outcome:
      "A maintainable museum platform concept with searchable profiles, maps, timelines, stories, guided-assistant flows, cross-links, and a governance roadmap.",
    metrics: [
      { value: "1 platform", label: "Web-first museum concept" },
      { value: "5 personas", label: "Families · visitors · educators · staff · community" },
      { value: "Cross-linked", label: "Not merged with partner site" },
    ],
  },
  {
    id: 36,
    code: "26-36",
    slug: "breathing-program-educator-hub",
    title: "Breathing Program Educator Hub",
    industry: "EdTech / Children's Wellness",
    sector: "Education & Training",
    description:
      "A children's breathing program needed an educator-friendly digital hub centralizing training materials, lesson plans, videos, and communication. Delivering a developer-handoff-ready concept with onboarding, resource access, and basic reporting views.",
    category: "HCD",
    image: "https://picsum.photos/seed/breathing-program/800/500",
    tags: ["EdTech UX", "Educator Tools", "Program Hub"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Educator hub prototype",
    client: "Children's wellness education program",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Design an educator-friendly digital hub for a children's breathing program, centralizing training, lesson plans, and delivery support.",
    approach:
      "Building implementation-informed framing with teacher, coordinator, and program-team personas and an onboarding-through-delivery journey; developing information architecture and prioritized features; producing a functional website prototype and high-fidelity iPhone prototype.",
    outcome:
      "A developer-handoff-ready hub concept with clear teacher onboarding, resource access, lesson delivery support, surveys, and basic reporting views.",
    metrics: [
      { value: "1 hub", label: "Educator-facing concept" },
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
    sector: "Nonprofit & Community",
    description:
      "A fragmented set of entrepreneurship program sites needed unifying into a coherent digital ecosystem serving students, founders, mentors, investors, and sponsors. Delivering a blueprint for a unified web and mobile presence.",
    category: "HCD",
    image: "https://picsum.photos/seed/tie-boston/800/500",
    tags: ["Ecosystem UX", "Information Architecture", "Nonprofit Network"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Ecosystem blueprint · unified IA",
    client: "Entrepreneurship network organization",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Unify a fragmented set of entrepreneurship program sites into one coherent digital ecosystem for students, founders, mentors, and investors.",
    approach:
      "Building a Business Model Canvas and competitive scan; developing stakeholder personas and discovery-to-engagement journeys; producing a consolidated information architecture and design language across a Wix-ready website and high-fidelity companion mobile prototype.",
    outcome:
      "A blueprint for a unified presence that improves program, event, resource, company, alumni, and community discovery across web and mobile.",
    metrics: [
      { value: "1 ecosystem", label: "Unified web + mobile blueprint" },
      { value: "6 stakeholders", label: "Students to sponsors" },
      { value: "Consolidated IA", label: "Across all program sites" },
    ],
  },
  {
    id: 34,
    code: "26-34",
    slug: "organizational-knowledge-platform-poc",
    title: "Organizational Knowledge Platform PoC",
    industry: "Enterprise Software / Knowledge Management",
    sector: "Technology & Software",
    description:
      "An organization needed a working proof of concept for capturing, structuring, validating, and reusing tacit organizational knowledge as workflows and decision paths. Delivering a lightweight web proof of concept demonstrating capture, search, review, and versioning.",
    category: "HCD",
    image: "https://picsum.photos/seed/knowledge-platform/800/500",
    tags: ["Knowledge Management", "Proof of Concept", "AI-Supported Search"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Knowledge platform proof of concept",
    client: "Enterprise knowledge management initiative",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Build a proof of concept for capturing, structuring, validating, and reusing tacit organizational knowledge as workflows and decision paths.",
    approach:
      "Framing a three-sided system for contributors, users, and validators/stewards; defining a structured knowledge model and contribution-to-validation-to-reuse journeys; designing and implementing a lightweight web proof of concept with sample scenarios — no enterprise deployment.",
    outcome:
      "A minimal working proof of concept demonstrating structured knowledge capture, AI-supported organization, trusted validation, retrieval, and evolving versions.",
    metrics: [
      { value: "1 PoC", label: "Working, not just mockups" },
      { value: "3 roles", label: "Contributors · users · validators" },
      { value: "AI-supported", label: "Organization + retrieval" },
    ],
  },
  {
    id: 33,
    code: "26-33",
    slug: "corporate-training-platform-viability",
    title: "Corporate Training Platform Viability",
    industry: "EdTech / Corporate L&D",
    sector: "Education & Training",
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
    sector: "Food & Beverage",
    description:
      "A multi-sided nutrition and grocery-planning platform needed to connect households, dietitians, and partners around dietary needs, budgets, and meal plans. Delivering a near-production web blueprint and developer-ready mobile prototype.",
    category: "HCD",
    image: "https://picsum.photos/seed/getlime/800/500",
    tags: ["Multi-Sided Marketplace", "Nutrition UX", "B2B2C"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Web + mobile blueprint · B2B2C",
    client: "Nutrition and grocery-planning platform",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Design a multi-sided nutrition and grocery-planning platform connecting households, dietitians, and partners around meal plans and shopping lists.",
    approach:
      "Building a Business Model Canvas, competitive scan, and stakeholder validation with optional customer interviews; developing household and dietitian personas and meal-planning/B2B2C journeys; producing a functional website prototype and complete high-fidelity iPhone screens.",
    outcome:
      "A near-production web blueprint and developer-ready mobile prototype with prioritized features and evidence relevant to adoption, retention, and pricing acceptance.",
    metrics: [
      { value: "1 blueprint", label: "Near-production web design" },
      { value: "2 sides", label: "B2C household + B2B2C dietitian" },
      { value: "Developer-ready", label: "Complete iPhone screens" },
    ],
  },
  {
    id: 31,
    code: "26-31",
    slug: "swaddle-childcare-booking-app",
    title: "Swaddle Childcare Booking App",
    industry: "Childcare / Marketplace App",
    sector: "Consumer & Hospitality",
    description:
      "An app-centered childcare marketplace needed to reduce anxiety and friction in a family's first booking while building referral and loyalty mechanisms. Delivering clickable concepts focused on trust, first-booking conversion, and repeat engagement.",
    category: "HCD",
    image: "https://picsum.photos/seed/swaddle/800/500",
    tags: ["Marketplace UX", "Trust & Safety", "Referral Design"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Booking app prototype · trust UX",
    client: "Childcare booking marketplace",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Reduce anxiety and friction in the first childcare booking while designing referral and loyalty mechanisms for parents and babysitters.",
    approach:
      "Building a current-state and competitive feature scan; developing parent and babysitter personas focused on the first-booking funnel, trust, safety, referrals, and loyalty; producing high-fidelity app and website prototypes — no engineering or payments.",
    outcome:
      "Clickable concepts that strengthen trust communication, sitter-profile clarity, first-booking conversion, repeat use, and referrals on both sides of the marketplace.",
    metrics: [
      { value: "1 funnel", label: "First-booking conversion focus" },
      { value: "2 sides", label: "Parent + babysitter referrals" },
      { value: "Trust-first", label: "Safety & profile clarity" },
    ],
  },
  {
    id: 30,
    code: "26-30",
    slug: "fierce-media-platform-repositioning",
    title: "Fierce Media Platform Repositioning",
    industry: "Marketing / Social Media Agency",
    sector: "Media, Events & Entertainment",
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
    sector: "Education & Training",
    description:
      "An AI-proctored case-interview practice platform needed a clearer, more actionable UX around timed assessment, integrity rules, scoring, and feedback. Delivering a documented UX assessment and a clickable redesign of roughly 12–15 screens.",
    category: "HCD",
    image: "https://picsum.photos/seed/casemaster-ai/800/500",
    tags: ["UX Audit", "SaaS Redesign", "EdTech"],
    term: "Spring 2027",
    termShort: "S27",
    duration: "6 weeks",
    delivered: "UX audit · redesigned prototype",
    client: "AI-proctored interview prep platform",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "Not Started",
    brief:
      "Optimize the end-to-end UX of an AI-proctored case-interview practice platform so assessment, scoring, and feedback are clearer and more actionable.",
    approach:
      "Conducting a hands-on platform review and competitive/analog scan; building personas for candidates, career services, and administrators and an onboarding-to-repeat-attempt journey; running a heuristic/usability assessment and redesigning ~12–15 high-fidelity screens.",
    outcome:
      "A documented UX assessment and clickable redesign improving case discovery, timed interview execution, proctoring communication, and benchmarking against established frameworks.",
    metrics: [
      { value: "12–15 screens", label: "Redesigned high-fidelity" },
      { value: "3 personas", label: "Candidates · career services · admins" },
      { value: "Existing SaaS", label: "Redesign, not new concept" },
    ],
  },
  {
    id: 28,
    code: "26-28",
    slug: "connections-elevator-service-journey",
    title: "Connections Elevator Service Journey",
    industry: "Field Service / Customer Experience",
    sector: "Aerospace, Marine & Industrial",
    description:
      "A field-service company needed the full customer-service journey redesigned, from request through dispatch, status updates, and resolution. Delivering a recommended future-state service journey and concept prototype fit to a Salesforce Field Service Lightning environment.",
    category: "HCD",
    image: "https://picsum.photos/seed/connections-elevator/800/500",
    tags: ["Service Journey UX", "Field Service", "Salesforce Fit"],
    term: "Spring 2027",
    termShort: "S27",
    duration: "6 weeks",
    delivered: "Service journey redesign · prototype",
    client: "Elevator and field-service company",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "Not Started",
    brief:
      "Redesign the full customer-service journey — from request through dispatch, status communication, and resolution — for a field-service company.",
    approach:
      "Documenting the current process and running a cross-industry competitive/technology scan evaluating SMS, QR, portals, apps, AI, and automation; mapping customer, dispatcher, and technician journeys; prototyping digital touchpoints fit to the sponsor's Salesforce environment.",
    outcome:
      "A recommended future-state service journey and concept prototype supporting 24/7 intake, accurate capture, lifecycle updates, confirmation, and reduced manual entry.",
    metrics: [
      { value: "3 roles", label: "Customer · dispatcher · technician" },
      { value: "24/7 intake", label: "Recommended service model" },
      { value: "Salesforce-fit", label: "Field Service Lightning aligned" },
    ],
  },
  {
    id: 27,
    code: "26-27",
    slug: "redi-financial-analysis-module",
    title: "REDI Financial Analysis Module",
    industry: "PropTech / Commercial Real Estate",
    sector: "Real Estate & Property",
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
    sector: "Technology & Software",
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
      "A women's-health research initiative needed an interpretable predictive-modeling pilot to differentiate meaningful menopause symptom-burden trajectories using public longitudinal research data. Delivering a working, interpretable reference model with documented discrimination, calibration, and limitations.",
    category: "AI Engineering",
    image: "https://picsum.photos/seed/menopause-research/800/500",
    tags: ["Predictive Modeling", "Health Research", "Interpretable ML"],
    term: "Spring 2027",
    termShort: "S27",
    duration: "8 weeks",
    delivered: "Predictive research model",
    client: "Menopause-focused health research program",
    course: "BTE 440 · Undergraduate",
    team: "5 students · 2 coaches",
    status: "Not Started",
    brief:
      "Build an interpretable predictive-modeling pilot to differentiate clinically meaningful menopause symptom-burden trajectories from longitudinal research data.",
    approach:
      "Confirming the university IRB pathway and public research data-use process, building a variable dictionary and missingness map, defining trajectory groups, comparing interpretable baselines against gradient-boosted models, and evaluating calibration, subgroup performance, and feature attribution.",
    outcome:
      "A working, interpretable reference model on held-out research data, with documented discrimination, calibration, subgroup performance, and a reproducibility package — research and predictive-modeling scope only, with no clinical validation or diagnosis.",
    metrics: [
      { value: "IRB-reviewed", label: "University research pathway" },
      { value: "Interpretable model", label: "Documented calibration + limits" },
      { value: "Reproducible", label: "Code, notebooks, model card" },
    ],
  },
  {
    id: 24,
    code: "26-24",
    slug: "create-music-maker-ai-integration",
    title: "Create Music Maker AI Integration",
    industry: "EdTech / Children's Wellness Tech",
    sector: "Education & Training",
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
    sector: "Education & Training",
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
    sector: "Financial Services & Fintech",
    description:
      "An investment analytics platform needed a technically complex dataset of historical analyst price-targets translated into investor-facing insights, dashboards, and future AI use-case concepts. Delivering SQL-driven analysis, a prototype dashboard, and concept-level agentic-AI recommendations.",
    category: "BI & Dashboards",
    image: "https://picsum.photos/seed/analyst-price-target/800/500",
    tags: ["BigQuery & SQL", "Investment Analytics", "Concept AI"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "5 weeks",
    delivered: "Investment dashboard · AI concepts",
    client: "Investment analytics platform",
    course: "BUS 150 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Translate a technically complex analyst price-target dataset into investment-facing insights, dashboards, and future agentic-AI use-case concepts.",
    approach:
      "Reviewing the data schema and limitations, defining focused questions about analyst behavior and market outcomes, developing SQL queries and statistical analysis, and building charts, a notebook, and a prototype dashboard — with concept-level-only AI recommendations and no production agents or trading systems.",
    outcome:
      "A business-facing analysis with documented SQL logic, findings and limitations, a prototype dashboard, an executive presentation, and a small set of practical agentic-AI concepts relevant to wealth managers and institutional investors.",
    metrics: [
      { value: "SQL + BigQuery", label: "Core analysis stack" },
      { value: "1 dashboard", label: "Prototype + report book" },
      { value: "Concept-level AI", label: "No production agents" },
    ],
  },
  {
    id: 21,
    code: "26-21",
    slug: "harrington-housing-decision-support",
    title: "Harrington Housing Decision Support",
    industry: "Property Management / Co-Living",
    sector: "Real Estate & Property",
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
    sector: "Education & Training",
    description:
      "A counsellor-training organization needed a structured social and digital-marketing strategy to build training awareness among U.S. counsellors, alongside a coherent secondary presence for prospective clients. Delivering a positioning framework, SEO/AI-visibility diagnostic, and a prioritized social-channel strategy.",
    category: "Digital Marketing",
    image: "https://picsum.photos/seed/neurodiversity-counselling/800/500",
    tags: ["SEO & AI Visibility", "Social Strategy", "Content Strategy"],
    term: "Fall 2026",
    termShort: "F26",
    duration: "6 weeks",
    delivered: "Marketing strategy · SEO diagnostic",
    client: "Neurodiversity-focused counsellor training organization",
    course: "MKT 387 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "In Progress",
    brief:
      "Build a structured social and digital-marketing strategy that grows U.S. counsellor-training awareness while maintaining a coherent secondary audience presence.",
    approach:
      "Clarifying positioning, priority audiences, and objections; auditing the website, on-page SEO, and AI discoverability using Semrush and approved tools; defining channel roles across LinkedIn, Reddit, and Instagram; developing content pillars, campaign concepts, sample assets, and a KPI-backed implementation roadmap.",
    outcome:
      "A positioning and audience framework, current-state SEO/AI-visibility diagnostic, prioritized social-channel strategy, campaign and content toolkit, KPI framework, and prioritized implementation roadmap.",
    metrics: [
      { value: "Semrush audit", label: "SEO + AI visibility" },
      { value: "3 channels", label: "LinkedIn · Reddit · Instagram" },
      { value: "KPI roadmap", label: "Prioritized rollout plan" },
    ],
  },
  {
    id: 19,
    code: "26-19",
    slug: "greens4u-digital-marketing-strategy",
    title: "Greens4U Digital Marketing Strategy",
    industry: "Food & Nutrition / DTC E-commerce",
    sector: "Food & Beverage",
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
    sector: "Aerospace, Marine & Industrial",
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
    sector: "Aerospace, Marine & Industrial",
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
    sector: "Aerospace, Marine & Industrial",
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
    sector: "Technology & Software",
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
    sector: "Media, Events & Entertainment",
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
    sector: "Aerospace, Marine & Industrial",
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
    sector: "Health & Life Sciences",
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
    sector: "Financial Services & Fintech",
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
    sector: "Financial Services & Fintech",
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
    sector: "Technology & Software",
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
    sector: "Media, Events & Entertainment",
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
    sector: "Media, Events & Entertainment",
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
    sector: "Food & Beverage",
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
    sector: "Food & Beverage",
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
    sector: "Financial Services & Fintech",
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
