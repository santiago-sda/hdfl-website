// ─── Interfaces ──────────────────────────────────────────────────────────────

export interface Project {
  id: number;
  title: string;
  industry: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export interface CapabilityTrack {
  id: number;
  symbol: string;
  name: string;
  fullName: string;
  course: string;
  level: string;
  description: string;
  deliverables: string[];
  skills: string[];
  accent: "orange" | "blue" | "green" | "purple";
}

export interface PartnerType {
  id: number;
  title: string;
  description: string;
}

export interface EngagementPhase {
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
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: "director" | "coach";
  avatar: string; // URL — i.pravatar.cc for placeholders, real headshot URLs for prod
  bio?: string;   // optional, shown for directors only
  profileUrl?: string; // optional, links to university profile page
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/tracks", label: "Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

// ─── What Happens Next (shared between ContactForm and contact page sidebar) ──

export const whatHappensNext: string[] = [
  "Lab director reviews your submission and confirms receipt within 5 business days",
  "Scoping call scheduled to discuss problem framing, data availability, and capability match",
  "Project brief prepared and shared for client review and sign-off",
  "Student team assembled and kick-off workshop scheduled",
  "Semester-long engagement begins",
];

// ─── Team Members ─────────────────────────────────────────────────────────────

export const teamMembers: TeamMember[] = [
  // Faculty Leaders
  {
    id: "director-1",
    name: "Dr. Alexander Korogodsky",
    title: "Lab Director · Academic Program Director, MS Business Technology",
    role: "director",
    avatar: "/team/korogodsky.webp",
    profileUrl: "https://people.miami.edu/profile/d745ec0f1424c88ec80310b4b30645ad",
  },
  {
    id: "director-2",
    name: "Dr. Krishna Murphy",
    title: "Lab Director · Lecturer, Business Technology",
    role: "director",
    avatar: "/team/murphy.webp",
    profileUrl: "https://people.miami.edu/profile/e2e14a2dfa56d4d5e0c9cca2e5000490",
  },
  // Coaches
  {
    id: "coach-1",
    name: "Matthew Rodriguez",
    title: "President & Coach",
    role: "coach",
    avatar: "/team/matthew-rodriguez.jpg",
  },
  {
    id: "coach-2",
    name: "Krishen Goswami",
    title: "VP of Operations & Coach",
    role: "coach",
    avatar: "/team/krishen-goswami.png",
  },
  {
    id: "coach-3",
    name: "Niki Dave",
    title: "Director of Training & Coach",
    role: "coach",
    avatar: "/team/niki-dave.jpg",
  },
  {
    id: "coach-4",
    name: "Santiago Stebelski",
    title: "Director of Marketing & Coach",
    role: "coach",
    avatar: "/team/santiago-stebelski.jpg",
  },
  {
    id: "coach-5",
    name: "Brunella Meini",
    title: "Treasurer & Coach",
    role: "coach",
    avatar: "/team/brunella-meini.jpg",
  },
  {
    id: "coach-6",
    name: "Taylor Dutil",
    title: "Coach",
    role: "coach",
    avatar: "/team/taylor.jpg",
  },
  {
    id: "coach-7",
    name: "Sylvie Vu",
    title: "Coach",
    role: "coach",
    avatar: "/team/sylvie.jpg",
  },
  {
    id: "coach-8",
    name: "Tommaso Buoncristiano",
    title: "Coach",
    role: "coach",
    avatar: "/team/tommaso.jpg",
  },
  {
    id: "coach-9",
    name: "Michelina Hoybach",
    title: "Coach",
    role: "coach",
    avatar: "/team/michelina.png",
  },
  {
    id: "coach-10",
    name: "Lily Belle Kahn",
    title: "Coach",
    role: "coach",
    avatar: "/team/lily.png",
  },
];

// ─── Stats ───────────────────────────────────────────────────────────────────

export const stats: Stat[] = [
  { value: 4, suffix: "", label: "Capability Solutions" },
  { value: 9, suffix: "+", label: "Engagements Delivered" },
  { value: 100, suffix: "%", label: "Free to Partner Organizations" },
  { value: 3, suffix: "", label: "Delivery Phases" },
];

// ─── Capability Tracks ───────────────────────────────────────────────────────

export const capabilityTracks: CapabilityTrack[] = [
  {
    id: 1,
    symbol: "★",
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
    accent: "orange",
  },
  {
    id: 2,
    symbol: "◆",
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
    accent: "blue",
  },
  {
    id: 3,
    symbol: "▲",
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
    accent: "green",
  },
  {
    id: 4,
    symbol: "●",
    // NOTE: filter pill value is "Capstone", NOT "Graduate Capstone" — intentional divergence.
    // Do NOT auto-generate filter pills from capabilityTracks[].name.
    name: "Graduate Capstone",
    fullName: "Client-Centered Capstone Framing, Value Engineering & Execution Readiness",
    course: "BTE 210 / Advanced",
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
    accent: "purple",
  },
];

// ─── Engagement Phases ───────────────────────────────────────────────────────

export const engagementPhases: EngagementPhase[] = [
  {
    number: "01",
    title: "Needs Assessment",
    duration: "2–3 weeks · Pre-semester",
    bullets: [
      "Structured intake conversation with Lab director",
      "Business problem scoping using the Miami Method",
      "Digital readiness and data availability audit",
      "Capability matching across four digital tracks",
      "Scope, deliverables, and governance agreement",
    ],
  },
  {
    number: "02",
    title: "Experiential Learning Delivery",
    duration: "5–10 weeks · Semester-long",
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
      "Optional follow-on Lab engagement for next challenge",
      "Impact assessment and outcome measurement",
      "Alumni network connection for ongoing advisory",
    ],
  },
];

// ─── Annual Timeline ──────────────────────────────────────────────────────────

export const annualTimeline = [
  { period: "Jun – Aug", event: "Project applications open for Fall semester" },
  { period: "Sep – Oct", event: "Needs assessment and problem scoping (Phase 01)" },
  { period: "Oct – Dec", event: "Fall semester delivery — 12-week experiential engagement (Phase 02)" },
  { period: "Jan", event: "Post-capstone handoff and Spring semester applications open (Phase 03 + new Phase 01)" },
  { period: "Feb – Apr", event: "Spring semester delivery — 12-week experiential engagement (Phase 02)" },
  { period: "May", event: "Post-capstone handoff for Spring cohort (Phase 03)" },
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
      "Companies entering the US market or expanding regionally, leveraging Herbert's global business perspective and Miami's gateway position.",
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

// ─── Projects (Real ACE Engagements) ─────────────────────────────────────────

export const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise Broker Digital Experience",
    industry: "Financial Services / Mortgage",
    description:
      "VIP enterprise broker accounts at a wholesale mortgage lender experienced the same generic interface as smaller brokers, creating operational friction and an estimated $100–250K/month in unrealized revenue. Delivered user personas, journey maps, and a high-fidelity website and iPhone app prototype.",
    category: "HCD",
    image: "/projects/ad-mortgage.png",
    tags: ["User Personas", "Figma Prototyping", "Journey Mapping"],
    featured: true,
  },
  {
    id: 2,
    title: "Longevity Performance Dashboard",
    industry: "Digital Health / Consumer Wellness",
    description:
      "A digital health startup needed to translate a differentiated longevity concept — converting wearable biometric data into age-normalized performance scores — into a clear, testable digital product. Delivered web and mobile prototypes with a performance dashboard concept.",
    category: "HCD",
    image: "/projects/myyouthspan.png",
    tags: ["Wearable Integration", "Health UX", "Mobile Prototype"],
    featured: true,
  },
  {
    id: 3,
    title: "AI Knowledge Management Platform",
    industry: "Technology / Live Events & Venues",
    description:
      "A global venue technology firm needed to democratize AI access across daily heavy users and a large population of occasional users whose full-license provisioning was cost-prohibitive, while reducing confidentiality risk. Delivered an MVP SharePoint-integrated AI knowledge platform with LLM search and governance.",
    category: "AI Engineering",
    image: "https://picsum.photos/seed/venue-ai/800/500",
    tags: ["RAG Systems", "SharePoint Integration", "LLM Governance"],
    featured: true,
  },
  {
    id: 4,
    title: "Athletic Mental Performance App",
    industry: "Health Tech / Sports Performance",
    description:
      "An AI-powered health optimization platform lacked a targeted channel into athletic communities. Designed a freemium digital entry point to collect mental toughness assessment data and generate individual and team-level reports, with high-fidelity web and mobile prototypes.",
    category: "HCD",
    image: "/projects/fastwalker.png",
    tags: ["Sports UX", "Freemium Model", "Assessment Design"],
  },
  {
    id: 5,
    title: "Talent Agency Workflow Digitization",
    industry: "Media & Entertainment / Creative Services",
    description:
      "A commercial talent casting agency specializing in celebrity athletes and beauty talent operated through manual, fragmented workflows for booking and document collection. Delivered a redesigned website concept and workflow automation framework for booking and agent communication.",
    category: "HCD",
    image: "/projects/powerhouse-casting.png",
    tags: ["Workflow Automation", "Multi-persona UX", "Agency Platform"],
  },
  {
    id: 6,
    title: "InvestorBridge Platform",
    industry: "Financial Services / Alternative Investments",
    description:
      "An SEC-registered private credit investment manager with $9B+ in securitized assets lacked a differentiated digital investor experience. Designed the InvestorBridge platform concept with investor personas, journey maps, and high-fidelity prototypes delivered to GP leadership.",
    category: "Capstone",
    image: "/projects/imperial-fund.png",
    tags: ["Investor Experience", "HNWI UX", "Miami Method"],
  },
  {
    id: 7,
    title: "Event Analytics BI Suite (Australian Open)",
    industry: "Technology / Sports & Live Events Analytics",
    description:
      "The same venue technology firm lacked a standardized BI reporting suite for new event clients. Analyzed BigQuery datasets from the Australian Open 2026 — computer vision, LiDAR, ticketing, and crowd movement — delivering Tableau dashboards presented to the VP and Chief AI Officer.",
    category: "BI & Dashboards",
    image: "https://picsum.photos/seed/ao-analytics/800/500",
    tags: ["Tableau", "BigQuery", "Event Analytics", "KPI Scorecards"],
  },
  {
    id: 8,
    title: "Food Brand Digital Coordination Platform",
    industry: "Food & Beverage / Consumer Brands",
    description:
      "A specialty food brand pivoting to experience-led fresh concession distribution at schools and events had no digital infrastructure to coordinate event logistics or build recurring consumer relationships. Designed a two-sided coordination platform with mobile and web prototypes.",
    category: "HCD",
    image: "/projects/tbm-popcorn.png",
    tags: ["Two-Sided Platform", "Event Logistics", "Consumer UX"],
  },
  {
    id: 9,
    title: "Mobile Dessert Cart Loyalty App",
    industry: "Food & Beverage / Social Enterprise",
    description:
      "A veteran-owned mobile dessert business employing justice-impacted individuals relied entirely on in-person sales with no digital infrastructure. Designed a cart-locator, loyalty rewards, push notifications, and skip-the-line ordering app with a mission storytelling framework.",
    category: "HCD",
    image: "/projects/screaming-ice-cream.png",
    tags: ["Social Enterprise", "Loyalty UX", "Mobile App"],
  },
];
