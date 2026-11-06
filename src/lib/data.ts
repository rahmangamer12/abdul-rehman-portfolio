export const SITE_URL = "https://abdulrehman-undercraft.vercel.app";

export const profile = {
  name: "Abdul Rehman",
  title: "AI Web Developer & Agentic AI Engineer",
  valueProp:
    "I design, build and ship production web apps, AI agents and online stores, from the first idea to a live URL.",
  location: "Karachi, Pakistan",
  region: "Working with clients in Qatar & the Gulf",
  email: "hello@velcarro.com",
  github: "https://github.com/rahmangamer12",
  linkedin: "https://www.linkedin.com/in/abdulrehman-undercraft/",
  undercraft: "https://undercraftstudio.com",
  velcarro: "https://velcarro.com",
};

export type AiRole = { kind: "worker" | "agent"; job: string };

export type CaseStudy = {
  ai?: AiRole;
  slug: string;
  name: string;
  kicker: string;
  url: string;
  image: string;
  mobile: string;
  summary: string;
  facts: { value: string; label: string }[];
  problem: string;
  built: string[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "autoreview",
    ai: { kind: "worker", job: "Every night it pulls new Google and Facebook reviews and drafts a reply for each one. Nothing is posted until a person approves it." },
    name: "AutoReview AI",
    kicker: "AI SaaS · Review management",
    url: "https://ai-review-writer.vercel.app",
    image: "/work/autoreview.jpg",
    mobile: "/work/autoreview-m.jpg",
    summary:
      "A review-management SaaS that drafts on-brand AI replies a person approves before they go live.",
    facts: [{ value: "1,500+", label: "automated tests" }, { value: "Human-approved", label: "AI replies, never auto-posted" }, { value: "Polar", label: "subscriptions & refunds" }],
    problem:
      "Restaurants, clinics, salons and repair shops get reviews every day, but nobody has time to answer each one well, and slow or angry replies cost them customers.",
    built: [
      "A full SaaS that pulls in reviews, analyses sentiment and drafts on-brand AI replies a person approves before they go live",
      "Multi-model AI with automatic fallback between providers, plus usage limits and credits per plan",
      "Subscriptions and refunds through Polar, database migrations on Neon, and a browser extension",
      "Backed by 1,500+ automated tests",
    ],
    stack: ["Next.js 16", "TypeScript", "Clerk", "Prisma", "Neon Postgres", "Polar", "Claude / Gemini / Groq"],
  },
  {
    slug: "velcarro",
    name: "Velcarro",
    kicker: "My own brand · E-commerce",
    url: "https://velcarro.com",
    image: "/work/velcarro.jpg",
    mobile: "/work/velcarro-m.jpg",
    summary:
      "My own premium online store, built from scratch and running in 12 languages.",
    facts: [{ value: "12", label: "languages" }, { value: "RTL", label: "Arabic & Urdu layouts" }, { value: "Auto", label: "deploys on every push" }],
    problem:
      "I wanted a store that feels premium and works for shoppers anywhere, not a template that only speaks one language.",
    built: [
      "A complete storefront with catalogue, cart, checkout, accounts and an admin panel",
      "12 languages, including right-to-left Arabic and Urdu",
      "Custom domain with email routing, deployed automatically on every push",
    ],
    stack: ["Next.js 16", "React 19", "Tailwind CSS v4", "Clerk", "Supabase", "Vercel"],
  },
  {
    slug: "jawab-desk",
    ai: { kind: "agent", job: "Drafts review replies in the customer's own language when staff ask, and a person approves every reply." },
    name: "Jawab Desk Pro",
    kicker: "Web app · Local businesses in Qatar",
    url: "https://jawab-desk-pro.vercel.app",
    image: "/work/jawab-desk.jpg",
    mobile: "/work/jawab-desk-m.jpg",
    summary:
      "Google-profile and website care for service companies in Qatar, with a client portal and admin.",
    facts: [{ value: "9", label: "built-in languages" }, { value: "Portal + admin", label: "for clients and staff" }, { value: "PDF", label: "monthly reports in AR / UR" }],
    problem:
      "AC and service companies in Qatar lose leads to wrong Google details, unanswered reviews and fake-review attacks, and their customers speak many different languages.",
    built: [
      "A marketing site plus client portal and admin: review replies with approval, a profile health score, website checks and monthly reports",
      "Readable in 9 built-in languages (English, Arabic, Urdu, Hindi, Malayalam and more), with AI translation for any other",
      "PDF reports with Arabic and Urdu fonts, and email sent through my own Rehman Mail API",
    ],
    stack: ["Next.js", "TypeScript", "Neon Postgres", "Better Auth", "Groq", "Vercel"],
  },
  {
    slug: "rehman-mail",
    ai: { kind: "agent", job: "An AI copilot writes and plans campaigns when you ask. Sending and automations then run on their own schedule." },
    name: "Rehman Mail",
    kicker: "SaaS · Email marketing",
    url: "https://rehman-mail.vercel.app",
    image: "/work/rehman-mail.jpg",
    mobile: "/work/rehman-mail-m.jpg",
    summary:
      "An email-marketing SaaS: campaigns, automations and an AI copilot, sending through your own SMTP.",
    facts: [{ value: "5", label: "free AI providers with fallback" }, { value: "Any SMTP", label: "you already own" }, { value: "RTL", label: "Urdu & Arabic templates" }],
    problem:
      "Small teams want Brevo-style campaigns without being locked into one sending provider or paying per contact.",
    built: [
      "Campaigns, audiences, automations, A/B subject tests, signup forms, landing pages and a preference centre",
      "Sends through any SMTP the user owns, with provider limits and a scheduled worker queue",
      "An AI copilot with five free AI providers and automatic fallback, plus RTL Urdu and Arabic templates",
    ],
    stack: ["Next.js 16", "TypeScript", "Neon Postgres", "Better Auth", "Vercel AI SDK", "pg_cron"],
  },
  {
    slug: "siteproof",
    ai: { kind: "agent", job: "Turns a technician's voice note and photos into a signed English and Arabic report, each time one is recorded." },
    name: "SiteProof",
    kicker: "AI app · Field service",
    url: "https://siteproof-app.vercel.app",
    image: "/work/siteproof.jpg",
    mobile: "/work/siteproof-m.jpg",
    summary:
      "A technician speaks in Urdu, Hindi or Malayalam; the client gets a signed English and Arabic report.",
    facts: [{ value: "EN + AR", label: "signed job reports" }, { value: "Voice in", label: "Urdu, Hindi, Malayalam" }, { value: "No database", label: "data stays on the device" }],
    problem:
      "Technicians in the Gulf often speak Urdu, Hindi or Malayalam, but their clients expect a written job report in English and Arabic.",
    built: [
      "The technician records a voice note and adds photos; the app returns a signed job report in English and Arabic",
      "Speech-to-text with Whisper, then a chain of language models with fallback",
      "Private by design: no database, everything stays on the device except the audio being transcribed",
    ],
    stack: ["Next.js", "TypeScript", "Groq Whisper", "Cerebras", "Gemini", "PWA"],
  },
  {
    slug: "dar-al-zahra",
    ai: { kind: "agent", job: "An AI style assistant answers shoppers when they ask." },
    name: "Dar Al Zahra",
    kicker: "Bilingual store · Tailoring house, Qatar",
    url: "https://daralzahra.vercel.app",
    image: "/work/dar-al-zahra.jpg",
    mobile: "/work/dar-al-zahra-m.jpg",
    summary:
      "A bilingual English / Arabic store for a tailoring house in Qatar, with bookings and order tracking.",
    facts: [{ value: "EN / AR", label: "full right-to-left" }, { value: "Bookings", label: "tailoring + order tracking" }, { value: "PWA", label: "installable, push alerts" }],
    problem:
      "A ladies clothing and tailoring house in Al Rayyan needed customers to browse, book tailoring and track orders in Arabic or English.",
    built: [
      "Full English / Arabic store with a one-tap switch and complete right-to-left layout",
      "Tailoring bookings, order tracking by number and phone, and an admin kanban board with WhatsApp templates",
      "Installable PWA with push notifications and an AI style assistant",
    ],
    stack: ["Next.js", "TypeScript", "Neon Postgres", "Drizzle", "Clerk", "PWA"],
  },
];

export type Project = {
  ai?: AiRole;
  name: string;
  url: string;
  image: string;
  blurb: string;
  tags: string[];
  category: "WordPress" | "Web app" | "Store";
};

export const moreProjects: Project[] = [
  {
    name: "Diwan Golconda",
    category: "WordPress",
    url: "https://wordpress-1620210-6758184.cloudwaysapps.com/",
    image: "/work/diwan.jpg",
    blurb: "Bilingual English / Arabic restaurant website for a Hyderabadi restaurant in Qatar.",
    tags: ["WordPress", "Elementor", "Child theme"],
  },
  {
    name: "Momocha Hibachi",
    category: "WordPress",
    url: "https://wordpress-1620210-6757380.cloudwaysapps.com/",
    image: "/work/momocha.jpg",
    blurb: "Restaurant website with online pickup ordering and a live kitchen screen for staff.",
    tags: ["WordPress", "Elementor", "PHP"],
  },
  {
    name: "Renewlo",
    ai: { kind: "agent", job: "Reads imported document lists and answers questions about your renewals when you ask." },
    category: "Web app",
    url: "https://renewlo.vercel.app",
    image: "/work/renewlo.jpg",
    blurb: "Never miss a renewal: health cards, licences, Istimara and contracts in one list, with WhatsApp reminders.",
    tags: ["Next.js", "Neon", "Clerk", "PWA"],
  },
  {
    name: "Rayyan Fragrance",
    category: "Store",
    url: "https://rayyan-fragrance.vercel.app",
    image: "/work/rayyan.jpg",
    blurb: "Perfume store with EasyPaisa / JazzCash checkout, coupons, admin and a 3D product view.",
    tags: ["Next.js 16", "Supabase", "Clerk", "Three.js"],
  },
  {
    name: "Inkora",
    ai: { kind: "agent", job: "Suggests print designs and ideas when a customer asks." },
    category: "Store",
    url: "https://inkorastudio.vercel.app",
    image: "/work/inkora.jpg",
    blurb: "Design your own tee, hoodie, cap or mug with AI ideas and Urdu fonts, printed and delivered in Pakistan.",
    tags: ["Next.js", "Neon", "AI designer"],
  },
  {
    name: "Zayvra",
    category: "Store",
    url: "https://zayvra.vercel.app",
    image: "/work/zayvra.jpg",
    blurb: "Fashion store for stitched and unstitched clothing, shoes and watches, with an advanced admin.",
    tags: ["Next.js", "Neon", "Clerk"],
  },
];

export const services = [
  {
    title: "AI workers for your business",
    body: "An AI worker owns one job, like review replies, email campaigns or support, and does it every day on its own. It follows your rules, and a person approves anything risky before it goes out.",
    points: ["Review replies, campaigns, support", "Runs daily on its own", "Human approves risky steps"],
    logos: ["claude", "gemini", "groq", "mcp"],
  },
  {
    title: "AI agents & automations",
    body: "Assistants, copilots and workflows built with the OpenAI Agents SDK, Claude and MCP: tools that read your data, take actions and hand off to a human when they should.",
    points: ["Custom AI agents & tools", "MCP servers & integrations", "Multi-model fallback"],
    logos: ["claude", "mcp", "gemini", "python"],
  },
  {
    title: "Next.js SaaS & web apps",
    body: "Production apps with auth, billing, dashboards, admin panels and a real database, deployed on Vercel and built to keep running.",
    points: ["Auth, billing & roles", "Postgres / Neon / Supabase", "Tested & monitored"],
    logos: ["nextjs", "typescript", "neon", "vercel"],
  },
  {
    title: "E-commerce stores",
    body: "Fast, good-looking stores with checkout, admin, WhatsApp ordering, local payments and multi-language or Arabic RTL support.",
    points: ["Catalogue, cart & checkout", "EN / AR / UR, full RTL", "Local payment methods"],
    logos: ["react", "supabase", "clerk", "whatsapp"],
  },
  {
    title: "WordPress websites",
    body: "Business and restaurant sites on WordPress with Elementor or Divi, plus a custom child theme so the owner can edit everything.",
    points: ["Elementor & Divi", "Custom child themes", "Owner-editable content"],
    logos: ["wordpress", "elementor", "php", "cloudflare"],
  },
];

export type Skill = { name: string; icon: string; note: string };

export const skillGroups: { label: string; blurb: string; items: Skill[] }[] = [
  {
    label: "Frontend",
    blurb: "Fast, accessible interfaces",
    items: [
      { name: "Next.js", icon: "nextjs", note: "App Router, RSC" },
      { name: "React", icon: "react", note: "React 19" },
      { name: "TypeScript", icon: "typescript", note: "Strict, end to end" },
      { name: "Tailwind CSS", icon: "tailwind", note: "v4 design systems" },
      { name: "Motion", icon: "framer", note: "Animation" },
      { name: "Three.js", icon: "threejs", note: "3D on the web" },
    ],
  },
  {
    label: "Backend & data",
    blurb: "Real databases, real auth",
    items: [
      { name: "Node.js", icon: "node", note: "APIs & workers" },
      { name: "Python", icon: "python", note: "Scripts & AI" },
      { name: "PostgreSQL", icon: "postgres", note: "SQL, cron, queues" },
      { name: "Neon", icon: "neon", note: "Serverless Postgres" },
      { name: "Supabase", icon: "supabase", note: "DB & storage" },
      { name: "Prisma", icon: "prisma", note: "ORM & migrations" },
      { name: "Drizzle", icon: "drizzle", note: "Type-safe SQL" },
    ],
  },
  {
    label: "AI & agents",
    blurb: "Agents that take action",
    items: [
      { name: "OpenAI Agents SDK", icon: "openai", note: "Agents & tools" },
      { name: "Claude", icon: "claude", note: "Anthropic models" },
      { name: "MCP", icon: "mcp", note: "Model Context Protocol" },
      { name: "Gemini", icon: "gemini", note: "Google AI" },
      { name: "Groq", icon: "groq", note: "Fast inference, Whisper" },
    ],
  },
  {
    label: "Auth, payments & ship",
    blurb: "From login to live URL",
    items: [
      { name: "Clerk", icon: "clerk", note: "Auth & users" },
      { name: "Better Auth", icon: "betterauth", note: "Self-hosted auth" },
      { name: "Polar", icon: "polar", note: "Subscriptions" },
      { name: "Vercel", icon: "vercel", note: "Deploys & edge" },
      { name: "GitHub", icon: "github", note: "Git & CI" },
      { name: "Cloudflare", icon: "cloudflare", note: "DNS & email routing" },
    ],
  },
  {
    label: "WordPress",
    blurb: "Sites owners can edit",
    items: [
      { name: "WordPress", icon: "wordpress", note: "Custom child themes" },
      { name: "Elementor", icon: "elementor", note: "Page builder" },
      { name: "Divi", icon: "divi", note: "Theme builder" },
      { name: "PHP", icon: "php", note: "Theme & plugin code" },
    ],
  },
];

export const highlights = {
  pipeline: ["UI", "Database", "Auth", "Payments", "AI", "Deploy"],
};

export const steps = [
  { n: "01", title: "Understand", body: "A short call or chat to learn the business, the users and what success looks like. I write it down as a clear brief." },
  { n: "02", title: "Prototype fast", body: "You see a working version early, on a real URL, so feedback is about the actual product, not a mock-up." },
  { n: "03", title: "Build & test", body: "Production code with types, tests and proper auth and data handling. Nothing invented: real content or clear placeholders." },
  { n: "04", title: "Launch & support", body: "Domain, deploy, analytics and handover, with a guide you can follow. I stay around for fixes and the next feature." },
];
