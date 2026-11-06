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

export type CaseStudy = {
  slug: string;
  name: string;
  kicker: string;
  url: string;
  image: string;
  problem: string;
  built: string[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "autoreview",
    name: "AutoReview AI",
    kicker: "AI SaaS · Review management",
    url: "https://ai-review-writer.vercel.app",
    image: "/work/autoreview.jpg",
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
    name: "Jawab Desk Pro",
    kicker: "Web app · Local businesses in Qatar",
    url: "https://jawab-desk-pro.vercel.app",
    image: "/work/jawab-desk.jpg",
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
    name: "Rehman Mail",
    kicker: "SaaS · Email marketing",
    url: "https://rehman-mail.vercel.app",
    image: "/work/rehman-mail.jpg",
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
    name: "SiteProof",
    kicker: "AI app · Field service",
    url: "https://siteproof-app.vercel.app",
    image: "/work/siteproof.jpg",
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
    name: "Dar Al Zahra",
    kicker: "Bilingual store · Tailoring house, Qatar",
    url: "https://daralzahra.vercel.app",
    image: "/work/dar-al-zahra.jpg",
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
  name: string;
  url: string;
  image: string;
  blurb: string;
  tags: string[];
};

export const moreProjects: Project[] = [
  {
    name: "Renewlo",
    url: "https://renewlo.vercel.app",
    image: "/work/renewlo.jpg",
    blurb: "Never miss a renewal: health cards, licences, Istimara and contracts in one list, with WhatsApp reminders.",
    tags: ["Next.js", "Neon", "Clerk", "PWA"],
  },
  {
    name: "Gap Atlas 2026",
    url: "https://gap-atlas-3d.vercel.app",
    image: "/work/gap-atlas.jpg",
    blurb: "64 real unsolved problems found and checked by a 303-agent AI research run, on an interactive 3D globe.",
    tags: ["React", "Three.js", "AI agents"],
  },
  {
    name: "Tarjuman",
    url: "https://tarjuman-web.vercel.app",
    image: "/work/tarjuman.jpg",
    blurb: "My own translator for Arabic, Farsi and Urdu chats: Android app, Chrome extension and web app.",
    tags: ["Kotlin", "Chrome extension", "AI"],
  },
  {
    name: "Rayyan Fragrance",
    url: "https://rayyan-fragrance.vercel.app",
    image: "/work/rayyan.jpg",
    blurb: "Perfume store with EasyPaisa / JazzCash checkout, coupons, admin and a 3D product view.",
    tags: ["Next.js 16", "Supabase", "Clerk", "Three.js"],
  },
  {
    name: "Inkora",
    url: "https://inkorastudio.vercel.app",
    image: "/work/inkora.jpg",
    blurb: "Design your own tee, hoodie, cap or mug with AI ideas and Urdu fonts, printed and delivered in Pakistan.",
    tags: ["Next.js", "Neon", "AI designer"],
  },
  {
    name: "Zayvra",
    url: "https://zayvra.vercel.app",
    image: "/work/zayvra.jpg",
    blurb: "Fashion store for stitched and unstitched clothing, shoes and watches, with an advanced admin.",
    tags: ["Next.js", "Neon", "Clerk"],
  },
  {
    name: "K TECH Printing",
    url: "https://ktechprinting.vercel.app",
    image: "/work/ktech.jpg",
    blurb: "Thermal paper and POS supplies store with product variants and WhatsApp ordering.",
    tags: ["Next.js", "Neon", "E-commerce"],
  },
  {
    name: "AD Online Store",
    url: "https://ad-online-store.vercel.app",
    image: "/work/ad-store.jpg",
    blurb: "Personalised gifts store: mugs, tees, keychains and frames made with your name or photo.",
    tags: ["Next.js", "E-commerce"],
  },
  {
    name: "MS Customize",
    url: "https://ms-customize.vercel.app",
    image: "/work/ms-customize.jpg",
    blurb: "Custom gifts collection store with dark and light themes and WhatsApp checkout.",
    tags: ["Next.js", "E-commerce"],
  },
  {
    name: "Diwan Golconda",
    url: "https://wordpress-1620210-6758184.cloudwaysapps.com/",
    image: "/work/diwan.jpg",
    blurb: "Bilingual English / Arabic restaurant website for a Hyderabadi restaurant in Qatar.",
    tags: ["WordPress", "Elementor", "Child theme"],
  },
  {
    name: "Momocha Hibachi",
    url: "https://wordpress-1620210-6757380.cloudwaysapps.com/",
    image: "/work/momocha.jpg",
    blurb: "Restaurant website with online pickup ordering and a live kitchen screen for staff.",
    tags: ["WordPress", "Elementor", "PHP"],
  },
];

export const services = [
  {
    title: "AI agents & automations",
    body: "Assistants, copilots and workflows built with the OpenAI Agents SDK, Claude and MCP: tools that read your data, take actions and hand off to a human when they should.",
    points: ["Custom AI agents & tools", "MCP servers & integrations", "Multi-model fallback"],
  },
  {
    title: "Next.js SaaS & web apps",
    body: "Production apps with auth, billing, dashboards, admin panels and a real database, deployed on Vercel and built to keep running.",
    points: ["Auth, billing & roles", "Postgres / Neon / Supabase", "Tested & monitored"],
  },
  {
    title: "E-commerce stores",
    body: "Fast, good-looking stores with checkout, admin, WhatsApp ordering, local payments and multi-language or Arabic RTL support.",
    points: ["Catalogue, cart & checkout", "EN / AR / UR, full RTL", "Local payment methods"],
  },
  {
    title: "WordPress websites",
    body: "Business and restaurant sites on WordPress with Elementor or Divi, plus a custom child theme so the owner can edit everything.",
    points: ["Elementor & Divi", "Custom child themes", "Owner-editable content"],
  },
];

export const stackGroups = [
  { label: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion"] },
  { label: "Backend & data", items: ["Node.js", "Python", "Prisma", "Postgres / Neon", "Supabase", "Drizzle"] },
  { label: "AI", items: ["OpenAI Agents SDK", "Claude", "MCP", "Gemini", "Groq", "Whisper"] },
  { label: "Auth & payments", items: ["Clerk", "Better Auth", "Polar"] },
  { label: "Ship & CMS", items: ["Vercel", "GitHub", "WordPress", "Elementor", "Divi"] },
];

export const steps = [
  { n: "01", title: "Understand", body: "A short call or chat to learn the business, the users and what success looks like. I write it down as a clear brief." },
  { n: "02", title: "Prototype fast", body: "You see a working version early, on a real URL, so feedback is about the actual product, not a mock-up." },
  { n: "03", title: "Build & test", body: "Production code with types, tests and proper auth and data handling. Nothing invented: real content or clear placeholders." },
  { n: "04", title: "Launch & support", body: "Domain, deploy, analytics and handover, with a guide you can follow. I stay around for fixes and the next feature." },
];
