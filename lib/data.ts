// ─── Interfaces ──────────────────────────────────────────────────────────────

export interface OutcomeMetric {
  value: string;
  label: string;
}

export interface Project {
  id: number;
  code: string; // e.g. "26-09" — used as the №-prefixed identifier across ledgers
  slug: string;
  title: string;
  industry: string;
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
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tracks", label: "Solutions" },
  { href: "/projects", label: "Archive" },
  { href: "/team", label: "People" },
  { href: "/about", label: "Method" },
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
  },
  {
    id: "director-3",
    name: "Dr. Erotokritos Skordilis",
    title: "Lecturer, Business Technology",
    role: "director",
    domain: "AI Software Engineering",
    leadTitle: "Leader for AI experience,",
    joined: "Joined 2026",
    avatar: "/team/skordilis.webp",
    bio: "Lectures in Business Technology at Miami and leads the Lab's AI software engineering work. Pairs applied machine learning and software systems with student teams, taking models and prototypes from research into production-ready delivery.",
    profileUrl: "https://people.miami.edu/profile/b7be952fb190b6a66372000fc95d769f",
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
    role: "coach",
    domain: "HCD · Capstone",
    avatar: "/team/sylvie.jpg",
  },
  {
    id: "coach-2",
    name: "Dominika Pindor",
    title: "Marketing Coordinator · Coach",
    role: "coach",
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
];

// ─── Stats ───────────────────────────────────────────────────────────────────

export const stats: Stat[] = [
  { value: 15, suffix: "", label: "Projects shipped", sub: "2023 onward" },
  { value: 5, suffix: "", label: "Capability solutions", sub: "HCD · AI · BI · Finance · Capstone" },
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
    shipped: 1,
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
    id: 10,
    code: "26-15",
    slug: "wildfire-detection-mobile-platform",
    title: "Wildfire Detection Mobile Platform",
    industry: "Wildfire Detection / Environmental Technology",
    description:
      "An existing hardware-based wildfire-detection prototype needed to become a maintainable, public-facing mobile experience that keeps working when connectivity is limited. Designed a dual-track React Native architecture pairing on-device computer vision with asynchronous content delivery and local caching.",
    category: "Capstone",
    image: "https://picsum.photos/seed/bayes-wildfire/800/500",
    tags: ["Computer Vision", "React Native", "Offline-First"],
    term: "Summer 2026",
    termShort: "Su26",
    duration: "8 weeks",
    delivered: "React Native app · on-device CV",
    client: "Wildfire-detection technology company",
    course: "BTE Adv. · Graduate",
    team: "4 MS students · 2 coaches",
    status: "Shipped",
    brief:
      "Convert a hardware-based wildfire-detection prototype into a maintainable mobile experience that keeps operating when connectivity is limited.",
    approach:
      "Designed a dual-track mobile architecture using React Native, on-device computer vision, asynchronous content delivery, and local caching — so detection keeps running even when the network doesn't.",
    outcome:
      "Public-facing mobile application architecture with on-device wildfire detection, real-time alerts, dynamic content delivery, and offline capability delivered to the founding team.",
    metrics: [
      { value: "On-device", label: "Computer vision detection" },
      { value: "Offline-first", label: "Local caching architecture" },
      { value: "Real-time", label: "Alert delivery" },
    ],
  },
  {
    id: 11,
    code: "26-14",
    slug: "validation-decision-intelligence-panel",
    title: "Validation Decision Intelligence Panel",
    industry: "Decision Intelligence / AI-Enabled Review",
    description:
      "A decision-intelligence platform for reviewers showed outcomes on opportunity records but not the reasoning, confidence, or evidence behind them. Designed a Validation Decision Intelligence Panel that surfaces confidence assessments, supporting evidence, and decision rationale before a reviewer takes final action.",
    category: "Capstone",
    image: "https://picsum.photos/seed/runwei-decision/800/500",
    tags: ["Decision Intelligence", "Reviewer UX", "Confidence Scoring"],
    term: "Summer 2026",
    termShort: "Su26",
    duration: "8 weeks",
    delivered: "Decision panel · confidence scoring",
    client: "Decision-intelligence review platform",
    course: "BTE Adv. · Graduate",
    team: "4 MS students · 2 coaches",
    status: "Shipped",
    brief:
      "Opportunity records showed outcomes but not the reasoning, confidence, or supporting evidence behind reviewer decisions.",
    approach:
      "Designed a Validation Decision Intelligence Panel to surface confidence assessments, evidence, and decision rationale before final reviewer action.",
    outcome:
      "Decision intelligence panel with confidence scoring, validation evidence, decision rationale, and a reviewer workflow concept delivered to the product team.",
    metrics: [
      { value: "1 panel", label: "Validation decision intelligence UI" },
      { value: "Confidence scoring", label: "Surfaced before final review" },
      { value: "Evidence-backed", label: "Decision rationale" },
    ],
  },
  {
    id: 12,
    code: "26-13",
    slug: "ai-assisted-video-production-workflow",
    title: "AI-Assisted Video Production Workflow",
    industry: "Video Production / Digital Content",
    description:
      "A video production workflow relied on significant manual editing, and the open question was whether AI could cut production time without compromising quality, control, or security. Evaluated and hands-on tested AI-assisted video editing tools — including Descript and Quickture — and redesigned the workflow around what held up.",
    category: "Capstone",
    image: "https://picsum.photos/seed/lennar-video/800/500",
    tags: ["AI Video Editing", "Workflow Redesign", "Tool Evaluation"],
    term: "Summer 2026",
    termShort: "Su26",
    duration: "8 weeks",
    delivered: "AI tool evaluation · workflow redesign",
    client: "Video production company",
    course: "BTE Adv. · Graduate",
    team: "4 MS students · 2 coaches",
    status: "Shipped",
    brief:
      "Determine whether AI-assisted editing could reduce video production time without compromising quality, control, or security.",
    approach:
      "Evaluated and hands-on tested AI-assisted video editing technologies, including Descript and Quickture, and redesigned the potential production workflow around the tools that held up under real use.",
    outcome:
      "AI tool evaluation and a redesigned production workflow — with quality, control, and security tradeoffs documented — delivered to the production team.",
    metrics: [
      { value: "2 tools", label: "Descript · Quickture evaluated" },
      { value: "1 workflow", label: "Redesigned production pipeline" },
      { value: "Hands-on", label: "Head-to-head tool testing" },
    ],
  },
  {
    id: 13,
    code: "26-12",
    slug: "microgravity-fluid-behavior-simulation",
    title: "Microgravity Fluid Behavior Simulation",
    industry: "Aerospace / Engineering Simulation",
    description:
      "An aerospace engineering effort needed to understand how water behaves during storage, transfer, docking, and sloshing in microgravity, and to produce usable evidence for future design. Built and validated an OpenFOAM computational simulation to test fluid behavior and document findings.",
    category: "Capstone",
    image: "https://picsum.photos/seed/spaceocean-microgravity/800/500",
    tags: ["OpenFOAM", "CFD Simulation", "Aerospace Engineering"],
    term: "Summer 2026",
    termShort: "Su26",
    duration: "8 weeks",
    delivered: "OpenFOAM simulation · findings report",
    client: "Aerospace engineering firm",
    course: "BTE Adv. · Graduate",
    team: "4 MS students · 2 coaches",
    status: "Shipped",
    brief:
      "Determine how water behaves during storage, transfer, docking, and sloshing in microgravity and produce usable engineering evidence for future design.",
    approach:
      "Built and validated an OpenFOAM computational simulation, testing fluid behavior under microgravity conditions and documenting findings and future refinement needs.",
    outcome:
      "Validated OpenFOAM simulation of microgravity fluid behavior, with documented findings and a refinement roadmap delivered to the engineering team.",
    metrics: [
      { value: "OpenFOAM", label: "Validated CFD simulation" },
      { value: "4 behaviors", label: "Storage · transfer · docking · sloshing" },
      { value: "Documented", label: "Findings + refinement roadmap" },
    ],
  },
  {
    id: 14,
    code: "26-11",
    slug: "document-intelligence-auto-population-engine",
    title: "AI Document Intelligence & Auto-Population Engine",
    industry: "AI Document Intelligence / Pet-Health Administration",
    description:
      "A document-intensive process required information to be extracted from photographed receipts and populated into structured records by hand. Built a self-checking OCR pipeline across five Python modules covering image correction, dual OCR, confidence analysis, classification, and structured output.",
    category: "Capstone",
    image: "https://picsum.photos/seed/pethsa-ocr/800/500",
    tags: ["OCR Pipeline", "Document Intelligence", "Python"],
    term: "Summer 2026",
    termShort: "Su26",
    duration: "8 weeks",
    delivered: "OCR pipeline · structured output",
    client: "Pet-health administration platform",
    course: "BTE Adv. · Graduate",
    team: "4 MS students · 2 coaches",
    status: "Shipped",
    brief:
      "Manual extraction and entry of receipt information created an opportunity for automated, reliable document processing.",
    approach:
      "Built a self-checking OCR pipeline using five Python modules covering image correction, dual OCR, confidence analysis, classification, and structured output.",
    outcome:
      "AI-powered document intelligence and auto-population engine — OCR pipeline, confidence scoring, document classification, and structured JSON output — delivered to the product team.",
    metrics: [
      { value: "5 modules", label: "Python OCR pipeline" },
      { value: "Dual OCR", label: "Cross-checked for accuracy" },
      { value: "JSON output", label: "Structured, auto-populated records" },
    ],
  },
  {
    id: 15,
    code: "26-10",
    slug: "automated-loan-screening-platform",
    title: "Automated Loan Screening Platform",
    industry: "Lending / Financial Technology",
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
    description:
      "VIP enterprise broker accounts at a wholesale mortgage lender experienced the same generic interface as smaller brokers, creating operational friction and an estimated $100–250K/month in unrealized revenue. Delivered user personas, journey maps, and a high-fidelity website and iPhone app prototype.",
    category: "HCD",
    image: "/projects/ad-mortgage-team.jpg",
    tags: ["User Personas", "Figma Prototyping", "Journey Mapping"],
    featured: true,
    term: "Spring 2026",
    termShort: "S26",
    duration: "6 weeks",
    delivered: "iOS prototype · journey maps",
    client: "Wholesale mortgage lender",
    course: "BTE 210 · Undergraduate",
    team: "5 students · 2 coaches",
    status: "Shipped",
    brief:
      "Build a digital experience that recognises a broker's tier without the broker having to ask.",
    approach:
      "Three weeks of stakeholder and broker interviews surfaced a pattern the firm had never seen mapped: VIP brokers were shadowing junior associates on the lender portal because the faster surface didn't exist. The team rebuilt around it.",
    outcome:
      "Personas, journey maps, an iPhone prototype across 24 screens, and a recommendation for tier-segmented routing — handed off to the lender's internal product org. Now in pilot.",
    metrics: [
      { value: "$100–250K", label: "Estimated monthly friction recovered" },
      { value: "24 screens", label: "Shipped in the hi-fi prototype" },
      { value: "6 weeks", label: "From kickoff to executive demo" },
    ],
  },
  {
    id: 2,
    code: "26-08",
    slug: "longevity-performance-dashboard",
    title: "Longevity Performance Dashboard",
    industry: "Digital Health / Consumer Wellness",
    description:
      "A digital health startup needed to translate a differentiated longevity concept — converting wearable biometric data into age-normalized performance scores — into a clear, testable digital product. Delivered web and mobile prototypes with a performance dashboard concept.",
    category: "HCD",
    image: "/projects/myyouthspan.png",
    tags: ["Wearable Integration", "Health UX", "Mobile Prototype"],
    featured: true,
    term: "Spring 2026",
    termShort: "S26",
    duration: "6 weeks",
    delivered: "Web + mobile prototype",
    client: "Digital health startup",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "Shipped",
    brief:
      "Translate a differentiated longevity concept — biometric data into age-normalized performance scores — into a clear, testable digital product.",
    approach:
      "Mapped how wearable users interpret biometric trends in the wild, drafted score visualizations that hold up to a glance, and prototyped a dashboard that lets the user explore signal vs. noise without a manual.",
    outcome:
      "Hi-fi web and mobile dashboard prototypes plus a concept brief delivered to the founding team to drive their consumer launch.",
    metrics: [
      { value: "32 screens", label: "Across web + mobile prototype" },
      { value: "3 personas", label: "Built from founding-customer interviews" },
      { value: "6 weeks", label: "From kickoff to handoff" },
    ],
  },
  {
    id: 3,
    code: "26-07",
    slug: "ai-knowledge-management-platform",
    title: "AI Knowledge Management Platform",
    industry: "Technology / Live Events & Venues",
    description:
      "A global venue technology firm needed to democratize AI access across daily heavy users and a large population of occasional users whose full-license provisioning was cost-prohibitive, while reducing confidentiality risk. Delivered an MVP SharePoint-integrated AI knowledge platform with LLM search and governance.",
    category: "AI Engineering",
    image: "https://picsum.photos/seed/venue-ai/800/500",
    tags: ["RAG Systems", "SharePoint Integration", "LLM Governance"],
    featured: true,
    term: "Spring 2026",
    termShort: "S26",
    duration: "8 weeks",
    delivered: "SharePoint RAG · LLM governance",
    client: "Global venue technology firm",
    course: "BTE 440 · Undergraduate",
    team: "5 students · 2 coaches",
    status: "Shipped",
    brief:
      "Democratize AI access across daily heavy users and a much larger population of occasional users without full-license overhead — and without leaking confidential documents.",
    approach:
      "Designed a SharePoint-grounded RAG system with role-aware governance, prompt scaffolding, and a thin internal UI so the occasional user could get an answer without learning a new product.",
    outcome:
      "MVP platform deployed inside the partner's tenant, with architecture documentation, prompt library, and a governance framework handed to their internal AI leadership.",
    metrics: [
      { value: "1 MVP", label: "Deployed inside partner tenant" },
      { value: "8 weeks", label: "Kickoff to executive demo" },
      { value: "RAG-first", label: "Architecture pattern" },
    ],
  },
  {
    id: 4,
    code: "26-06",
    slug: "athletic-mental-performance-app",
    title: "Athletic Mental Performance App",
    industry: "Health Tech / Sports Performance",
    description:
      "An AI-powered health optimization platform lacked a targeted channel into athletic communities. Designed a freemium digital entry point to collect mental toughness assessment data and generate individual and team-level reports, with high-fidelity web and mobile prototypes.",
    category: "HCD",
    image: "/projects/fastwalker.png",
    tags: ["Sports UX", "Freemium Model", "Assessment Design"],
    term: "Spring 2026",
    termShort: "S26",
    duration: "6 weeks",
    delivered: "Freemium UX · mental toughness assessments",
    client: "AI health optimization platform",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "Shipped",
    brief:
      "Carve a freemium entry channel into athletic communities for an AI-powered health platform — without diluting the paid offering.",
    approach:
      "Modeled the assessment as the wedge: a mental-toughness diagnostic the athlete can take in five minutes, with team-level rollups that get the coach to invite the rest of the roster.",
    outcome:
      "Hi-fi web and mobile prototypes, individual and team report templates, and a freemium funnel concept delivered to the partner's product team.",
    metrics: [
      { value: "2 surfaces", label: "Web + mobile prototypes" },
      { value: "5 reports", label: "Individual + team templates" },
      { value: "6 weeks", label: "Kickoff to demo" },
    ],
  },
  {
    id: 5,
    code: "26-05",
    slug: "talent-agency-workflow-digitization",
    title: "Talent Agency Workflow Digitization",
    industry: "Media & Entertainment / Creative Services",
    description:
      "A commercial talent casting agency specializing in celebrity athletes and beauty talent operated through manual, fragmented workflows for booking and document collection. Delivered a redesigned website concept and workflow automation framework for booking and agent communication.",
    category: "HCD",
    image: "/projects/powerhouse-casting.png",
    tags: ["Workflow Automation", "Multi-persona UX", "Agency Platform"],
    term: "Spring 2026",
    termShort: "S26",
    duration: "7 weeks",
    delivered: "Web concept · agent automation",
    client: "Commercial talent casting agency",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "Shipped",
    brief:
      "Replace manual, fragmented booking and document workflows at a celebrity-talent casting agency without losing the high-touch relationships agents own.",
    approach:
      "Mapped the live workflow for three personas — agent, talent, client — and designed an automation layer that absorbs the repetitive document chase while leaving the relationship steps in the agent's hands.",
    outcome:
      "Redesigned website concept, multi-persona workflow framework, and an automation roadmap for booking and document collection delivered to the agency.",
    metrics: [
      { value: "3 personas", label: "Agent · talent · client" },
      { value: "1 platform", label: "Workflow + booking concept" },
      { value: "7 weeks", label: "From discovery to handoff" },
    ],
  },
  {
    id: 6,
    code: "26-04",
    slug: "investorbridge-platform",
    title: "InvestorBridge Platform",
    industry: "Financial Services / Alternative Investments",
    description:
      "An SEC-registered private credit investment manager with $9B+ in securitized assets lacked a differentiated digital investor experience. Designed the InvestorBridge platform concept with investor personas, journey maps, and high-fidelity prototypes delivered to GP leadership.",
    category: "HCD",
    image: "/projects/imperial-fund.png",
    tags: ["Investor Experience", "HNWI UX", "Miami Method"],
    term: "Fall 2025",
    termShort: "F25",
    duration: "12 weeks",
    delivered: "HNWI UX · hi-fi prototypes",
    client: "Private credit investment manager",
    course: "BTE Adv. · Graduate",
    team: "5 MS students · 2 coaches",
    status: "Shipped",
    brief:
      "Design a differentiated digital investor experience for an SEC-registered private credit manager with $9B+ in securitized assets and no current digital surface.",
    approach:
      "Used the Miami Method to frame the investor decision journey across three HNWI personas, then prototyped the InvestorBridge platform around the moments where the GP team currently loses time and trust.",
    outcome:
      "Investor personas, journey maps, hi-fi platform prototypes, and an implementation-ready proposal delivered to GP leadership.",
    metrics: [
      { value: "3 personas", label: "HNWI investor types mapped" },
      { value: "1 platform", label: "InvestorBridge concept" },
      { value: "$9B+", label: "Partner AUM context" },
    ],
  },
  {
    id: 7,
    code: "26-03",
    slug: "event-analytics-bi-suite",
    title: "Event Analytics BI Suite — AO 2026",
    industry: "Technology / Sports & Live Events Analytics",
    description:
      "The same venue technology firm lacked a standardized BI reporting suite for new event clients. Analyzed BigQuery datasets from the Australian Open 2026 — computer vision, LiDAR, ticketing, and crowd movement — delivering Tableau dashboards presented to the VP and Chief AI Officer.",
    category: "BI & Dashboards",
    image: "https://picsum.photos/seed/ao-analytics/800/500",
    tags: ["Tableau", "BigQuery", "Event Analytics", "KPI Scorecards"],
    term: "Spring 2026",
    termShort: "S26",
    duration: "10 weeks",
    delivered: "Tableau · BigQuery · KPIs",
    client: "Global venue technology firm",
    course: "BUS 150 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "Shipped",
    brief:
      "Stand up a standardized BI suite for new event clients — using Australian Open 2026 telemetry as the reference build.",
    approach:
      "Pulled computer vision, LiDAR, ticketing, and crowd movement feeds from BigQuery into a clean Tableau model and built an executive layer on top that a non-analyst can read in a glance.",
    outcome:
      "Tableau dashboards plus KPI scorecards presented to the partner's VP and Chief AI Officer, now used as the template for incoming event clients.",
    metrics: [
      { value: "4 feeds", label: "Vision · LiDAR · ticketing · crowd" },
      { value: "1 suite", label: "Reusable across event clients" },
      { value: "10 weeks", label: "From data audit to demo" },
    ],
  },
  {
    id: 8,
    code: "26-02",
    slug: "food-brand-coordination-platform",
    title: "Food Brand Coordination Platform",
    industry: "Food & Beverage / Consumer Brands",
    description:
      "A specialty food brand pivoting to experience-led fresh concession distribution at schools and events had no digital infrastructure to coordinate event logistics or build recurring consumer relationships. Designed a two-sided coordination platform with mobile and web prototypes.",
    category: "HCD",
    image: "/projects/tbm-popcorn.png",
    tags: ["Two-Sided Platform", "Event Logistics", "Consumer UX"],
    term: "Spring 2026",
    termShort: "S26",
    duration: "8 weeks",
    delivered: "Two-sided coordination UX",
    client: "Specialty food brand",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "Shipped",
    brief:
      "Build the digital infrastructure for a specialty food brand pivoting into experience-led fresh concessions at schools and events.",
    approach:
      "Designed a two-sided platform — partner-side event coordination and consumer-side loyalty — and stress-tested it against the live logistics the brand was already running with spreadsheets.",
    outcome:
      "Mobile and web prototypes, an event-coordination flow, and a consumer loyalty loop handed off to the brand's operations and marketing leads.",
    metrics: [
      { value: "2 surfaces", label: "Mobile + web prototypes" },
      { value: "2 sides", label: "Partner + consumer flows" },
      { value: "8 weeks", label: "Kickoff to handoff" },
    ],
  },
  {
    id: 9,
    code: "26-01",
    slug: "mobile-dessert-cart-loyalty",
    title: "Mobile Dessert Cart Loyalty App",
    industry: "Food & Beverage / Social Enterprise",
    description:
      "A veteran-owned mobile dessert business employing justice-impacted individuals relied entirely on in-person sales with no digital infrastructure. Designed a cart-locator, loyalty rewards, push notifications, and skip-the-line ordering app with a mission storytelling framework.",
    category: "HCD",
    image: "/projects/screaming-ice-cream.png",
    tags: ["Social Enterprise", "Loyalty UX", "Mobile App"],
    term: "Fall 2025",
    termShort: "F25",
    duration: "8 weeks",
    delivered: "Cart locator · loyalty UX",
    client: "Veteran-owned social enterprise",
    course: "BTE 210 · Undergraduate",
    team: "4 students · 2 coaches",
    status: "Shipped",
    brief:
      "Give a veteran-owned mobile dessert business — employing justice-impacted individuals — its first digital surface, with mission storytelling baked in.",
    approach:
      "Designed a cart-locator experience first, then layered loyalty rewards, push notifications, and skip-the-line ordering on top so the operational core does the work before the marketing copy does.",
    outcome:
      "Mobile app concept with cart locator, loyalty rewards, push notifications, skip-the-line ordering, and a mission storytelling framework delivered to the founders.",
    metrics: [
      { value: "1 app", label: "Cart-locator core + loyalty UX" },
      { value: "4 features", label: "Locator · loyalty · push · skip-line" },
      { value: "8 weeks", label: "From concept to prototype" },
    ],
  },
];
