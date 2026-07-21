// Site-wide content configuration: all 60+ pages use this config
export const APP_URL = "https://app.trackthebreach.com";
export const LOGO_URL = "/images/brand/logo-transparent.png";
export const BRAND_MOTTO = "Stay Safe, Stay Protected";

export const NAV = {
  product: [
    { label: "Free Email ID Scan", to: "/free-email-scan", desc: "Run a free scan in under 2 minutes" },
    { label: "Sample Report", to: "/sample-report", desc: "Preview your Executive Identity Report" },
    { label: "Platform Overview", to: "/platform", desc: "Unified digital identity protection" },
    { label: "Email Monitoring", to: "/email-monitoring", desc: "Detect leaked email credentials" },
    { label: "Phone Monitoring", to: "/phone-monitoring", desc: "Track SIM swap & number exposure" },
    { label: "Social Account Monitoring", to: "/social-monitoring", desc: "Find fake & impersonator profiles" },
    { label: "Government ID Monitoring", to: "/government-id-monitoring", desc: "Aadhaar, PAN, passport exposure" },
    { label: "Photo Exposure Detection", to: "/photo-monitoring", desc: "Image misuse across the web" },
    { label: "Video Exposure Detection", to: "/video-monitoring", desc: "Deepfake & video leak intel" },
    { label: "Dark Web Monitoring", to: "/dark-web-monitoring", desc: "Hidden marketplaces & forums" },
    { label: "Digital Footprint Analysis", to: "/digital-footprint-monitoring", desc: "Map your entire exposure" },
    { label: "AI Risk Intelligence", to: "/ai-risk-intelligence", desc: "Predictive threat scoring" },
    { label: "Continuous Monitoring", to: "/continuous-monitoring", desc: "24/7 always-on alerts" },
  ],
  solutions: [
    { label: "Individuals", to: "/individuals", desc: "Personal identity protection" },
    { label: "Families", to: "/families", desc: "Multi-member safety plans" },
    { label: "Professionals", to: "/professionals", desc: "Lawyers, doctors, finance" },
    { label: "Influencers", to: "/influencers", desc: "Creator identity defense" },
    { label: "Executives", to: "/executives", desc: "C-suite & VIP protection" },
    { label: "Business", to: "/business", desc: "SMB workforce monitoring" },
    { label: "Enterprise", to: "/enterprise", desc: "Org-wide breach intel" },
    { label: "Researchers", to: "/researchers", desc: "OSINT & investigation" },
    { label: "Security Teams", to: "/security-teams", desc: "SOC integration & APIs" },
  ],
  resources: [
    { label: "Blog", to: "/blog" },
    { label: "Cybersecurity Guides", to: "/blog?category=guides" },
    { label: "Threat Intelligence Reports", to: "/blog?category=threat-intel" },
    { label: "Case Studies", to: "/blog?category=case-studies" },
    { label: "Help Center", to: "/help" },
    { label: "FAQ", to: "/faq" },
    { label: "Breach Library", to: "/breach-library" },
    { label: "Security Learning Center", to: "/learn" },
  ],
  company: [
    { label: "About Us", to: "/about" },
    { label: "Mission", to: "/our-mission" },
    { label: "Vision", to: "/our-vision" },
    { label: "Technology", to: "/technology" },
    { label: "Careers", to: "/careers" },
    { label: "Partner Program", to: "/partners" },
    { label: "Affiliate Program", to: "/partners#affiliate" },
    { label: "Press Kit", to: "/press" },
    { label: "Media", to: "/press" },
    { label: "Contact", to: "/contact" },
  ],
};

export const STATS = [
  { value: "1.6B+", label: "Records Analyzed", tone: "indigo" },
  { value: "2,000+", label: "Data Sources", tone: "cyan" },
  { value: "50+", label: "Countries Covered", tone: "emerald" },
  { value: "24/7", label: "Continuous Monitoring", tone: "amber" },
];

export const THREATS = [
  { icon: "Mail", title: "Email Breaches", desc: "Credential dumps surface daily across thousands of forums." },
  { icon: "UserX", title: "Identity Theft", desc: "Stolen identities power 76% of online fraud worldwide." },
  { icon: "Users", title: "Fake Profiles", desc: "Impersonation accounts erode trust and damage reputations." },
  { icon: "VideoOff", title: "Deepfakes", desc: "AI-generated forgeries target executives & celebrities." },
  { icon: "Phone", title: "Phone Leaks", desc: "Exposed numbers fuel scams, SIM swaps, and harassment." },
  { icon: "FileWarning", title: "Government ID Exposure", desc: "Aadhaar, PAN, passport data sold openly on the dark web." },
  { icon: "Image", title: "Photo Misuse", desc: "Personal images repurposed without your consent." },
  { icon: "LogIn", title: "Account Takeovers", desc: "Credential stuffing compromises 1 in 3 reused logins." },
  { icon: "AlertOctagon", title: "Online Fraud", desc: "Financial scams growing 38% year over year globally." },
  { icon: "Megaphone", title: "Social Engineering", desc: "Targeted phishing tailored from leaked personal data." },
];

export const MONITORING = [
  { icon: "Mail", color: "indigo", title: "Email Exposure", to: "/email-monitoring", desc: "Discover where your email addresses appear in known breaches and underground markets." },
  { icon: "Phone", color: "cyan", title: "Phone Exposure", to: "/phone-monitoring", desc: "Track SIM swap risk, leaked phone numbers, and SMS-based attack vectors." },
  { icon: "AtSign", color: "violet", title: "Social Media Monitoring", to: "/social-monitoring", desc: "Detect impersonators, fake profiles, and credential leaks across 30+ platforms." },
  { icon: "BadgeCheck", color: "amber", title: "Government ID Monitoring", to: "/government-id-monitoring", desc: "Surveillance on Aadhaar, PAN, passport, SSN, and national ID exposures." },
  { icon: "Camera", color: "rose", title: "Photo Monitoring", to: "/photo-monitoring", desc: "Reverse-image intelligence to find unauthorized use of your photos." },
  { icon: "Video", color: "fuchsia", title: "Video Monitoring", to: "/video-monitoring", desc: "Deepfake detection and unauthorized video re-uploads tracking." },
  { icon: "ShieldAlert", color: "red", title: "Dark Web Monitoring", to: "/dark-web-monitoring", desc: "Real-time scanning of hidden forums, paste sites, and Tor marketplaces." },
  { icon: "Network", color: "emerald", title: "Digital Footprint", to: "/digital-footprint-monitoring", desc: "Map every place your identity exists across the open and dark internet." },
];

export const HOW_IT_WORKS = [
  { step: "01", title: "Create Account", desc: "Sign up in 30 seconds — email or SSO. No credit card required." },
  { step: "02", title: "Verify Email", desc: "A quick verification protects your dashboard and unlocks your free scan." },
  { step: "03", title: "Run Free Scan", desc: "Enter your email and we sweep 2,000+ breach sources, dark web feeds & public records." },
  { step: "04", title: "Receive AI Report", desc: "Get your Digital Identity Score, Risk Score, AI Summary & top exposures — instantly." },
  { step: "05", title: "Unlock Full Report", desc: "Upgrade to see every breach, exposed field, timeline, dark-web intelligence & PDF export." },
  { step: "06", title: "Enable Monitoring", desc: "Turn on continuous AI monitoring across your emails, phones, social accounts & IDs." },
  { step: "07", title: "Stay Protected", desc: "Get instant alerts, AI recommendations, and (on Full Secure) human-led takedowns." },
];

// AI engine pipeline — used on "How Our AI Works" homepage section
export const AI_PIPELINE = [
  { icon: "User", title: "One Person", desc: "You — with all of your real-world identifiers." },
  { icon: "Mail", title: "Multiple Emails", desc: "Personal, work, alias and disposable inboxes." },
  { icon: "Phone", title: "Multiple Phones", desc: "Mobile, landline, work and family numbers." },
  { icon: "AtSign", title: "Social Accounts", desc: "Instagram, LinkedIn, X, TikTok, Facebook & more." },
  { icon: "Camera", title: "Photos", desc: "Reverse-image searched across the open and dark web." },
  { icon: "BadgeCheck", title: "Government IDs", desc: "Aadhaar, PAN, passport, SSN — tokenized & hashed." },
  { icon: "ShieldAlert", title: "Dark Web", desc: "Tor markets, paste sites, Telegram & Discord channels." },
  { icon: "Brain", title: "Threat Intelligence", desc: "Real-time feeds from 2,000+ sources globally." },
  { icon: "Network", title: "AI Correlation", desc: "We connect every fragment into one identity graph." },
  { icon: "Sparkles", title: "Digital Identity Graph", desc: "Your complete exposure picture — visualized." },
  { icon: "FileText", title: "Executive Report", desc: "Risk score, timeline, evidence and PDF export." },
  { icon: "ShieldCheck", title: "AI Recommendations", desc: "Personalized actions you can take right now." },
];

// "Who needs Track The Breach" homepage cards
export const WHO_NEEDS_TTB = [
  { icon: "Building2", title: "Business Owners", desc: "Protect your business, brand and customers from impersonation, leaks and fraud." },
  { icon: "GraduationCap", title: "Students", desc: "Check if your email or social accounts have been leaked — and lock down your digital identity early." },
  { icon: "Stethoscope", title: "Doctors", desc: "Defend your reputation from impersonators, scam clinics and leaked KYC documents." },
  { icon: "Heart", title: "Parents & Families", desc: "Monitor exposure for your children, partner and aging parents — under one dashboard." },
  { icon: "Sparkles", title: "Creators", desc: "Detect deepfakes, photo misuse and impersonators across 30+ platforms." },
  { icon: "Crown", title: "Executives", desc: "VIP-grade protection across digital, social and dark-web threat surfaces." },
  { icon: "Landmark", title: "Government Employees", desc: "Spot leaks of official emails, IDs and credentials before adversaries do." },
  { icon: "Briefcase", title: "Lawyers & Professionals", desc: "Court-ready PDF reports and impersonation defense for reputation-critical roles." },
  { icon: "Users", title: "SMBs & Enterprises", desc: "Workforce identity monitoring, brand defense and continuous AI threat intelligence." },
];

// Jiva AI — our upcoming AI Security Assistant (roadmap)
export const JIVA_AI = {
  name: "Jiva AI",
  tagline: "Your upcoming AI Security Assistant",
  intro: "Jiva is the AI brain behind Track The Breach — today it reads your exposure and writes your remediation plan. Soon, it will act for you.",
  current: [
    { icon: "Brain", title: "Explains your exposure", desc: "Turns raw breach data into a clear, human story you can act on." },
    { icon: "Sparkles", title: "Prioritizes your risks", desc: "Ranks what to fix first based on severity, recency and data sensitivity." },
    { icon: "FileText", title: "Generates AI reports", desc: "Auto-writes your Executive Report with evidence, timeline and recommendations." },
    { icon: "ShieldCheck", title: "Guides remediation", desc: "Step-by-step actions written for humans — not engineers." },
  ],
  roadmap: [
    { icon: "Brain", title: "AI Security Assistant", desc: "Chat with Jiva about your exposure, ask follow-up questions and get personalized advice on demand." },
    { icon: "Workflow", title: "AI Removal Requests", desc: "Jiva files takedowns with data brokers, websites and search engines on your behalf." },
    { icon: "Activity", title: "Continuous Monitoring", desc: "Background sweeps surface new exposures the moment they appear \u2014 you stay focused on life." },
    { icon: "Users", title: "Family Protection", desc: "Extend Jiva's protection to your spouse, children and aging parents under one dashboard." },
    { icon: "Eye", title: "Identity Watch", desc: "Set up watchlists for your most sensitive identifiers and get alerted instantly." },
    { icon: "Chrome", title: "Browser Extension", desc: "Inline warnings on shady sites, breach badges on sign-up forms and one-click password rotation." },
  ],
};

// Trust signals shown in the Trust section
export const TRUST_PILLARS = [
  { icon: "Brain", title: "AI-powered", desc: "Detection, scoring and reporting are AI-native — not bolted on." },
  { icon: "Database", title: "Billions of breach records analyzed", desc: "1.6B+ records ingested from 2,000+ breach & dark-web sources." },
  { icon: "ShieldAlert", title: "Threat Intelligence", desc: "Continuous feeds from forums, Telegram, paste sites and Tor markets." },
  { icon: "Lock", title: "Privacy-first", desc: "Identifiers hashed in your browser. We never see them in plaintext." },
  { icon: "Cloud", title: "Cloud-native infrastructure", desc: "Multi-region, SOC 2 / ISO 27001 aligned, 99.99% uptime SLA." },
  { icon: "Users", title: "Built for individuals & businesses", desc: "From a single student to a 10,000-person enterprise — one platform." },
  { icon: "Sparkles", title: "Built by security & AI professionals", desc: "A team of cybersecurity professionals and AI engineers focused on protecting digital identities." },
];

// "Why Upgrade" — what users unlock with paid plans
export const UPGRADE_UNLOCKS = [
  { icon: "Activity", title: "Breach Timeline", desc: "See exactly when and where each leak happened." },
  { icon: "ShieldOff", title: "Password Exposure", desc: "Discover which passwords leaked — and which to rotate now." },
  { icon: "Database", title: "Provider Intelligence", desc: "Identify the source services that exposed your data." },
  { icon: "Brain", title: "AI Analysis", desc: "Get an Executive AI summary of your full identity risk." },
  { icon: "ShieldAlert", title: "Dark Web Intelligence", desc: "See where your data is being traded right now." },
  { icon: "FileText", title: "Download PDF Report", desc: "Audit-ready PDF for your records, lawyer or HR." },
  { icon: "Zap", title: "One-click Protection", desc: "Apply remediation actions with one tap." },
  { icon: "Bell", title: "Continuous Monitoring", desc: "24/7 alerts the moment new exposures surface." },
];

export const WHY_US = [
  { icon: "Brain", title: "AI-Powered Intelligence", desc: "Machine learning models trained on 1.6B+ breach records score risk in real time." },
  { icon: "Lock", title: "Privacy-First Architecture", desc: "Zero-knowledge scans. Your data is hashed, never sold, never stored as plaintext." },
  { icon: "Activity", title: "Continuous Monitoring", desc: "24/7 sweep of breach sources, paste sites, and dark-web markets." },
  { icon: "FileText", title: "Professional Reports", desc: "Audit-ready PDF reports with evidence chains, ready for legal and IR teams." },
  { icon: "Globe2", title: "Global Data Sources", desc: "2,000+ active feeds across 50+ countries and 20+ underground ecosystems." },
  { icon: "Radar", title: "Threat Detection Engine", desc: "Pattern matching, fuzzy correlation, and predictive scoring fused into one platform." },
  { icon: "Server", title: "Enterprise-Grade Infrastructure", desc: "SOC 2 Type II, ISO 27001, GDPR & DPDP-aligned. 99.99% SLA." },
  { icon: "Zap", title: "Built for Speed", desc: "Median scan completes in under 90 seconds. Webhooks in milliseconds." },
];

export const SOLUTIONS_CARDS = [
  { icon: "User", title: "For Individuals", to: "/individuals", desc: "Personal cyber hygiene, breach alerts, and one-click takedowns." },
  { icon: "Users", title: "For Families", to: "/families", desc: "Protect children, parents, and partners under one dashboard." },
  { icon: "Briefcase", title: "For Professionals", to: "/professionals", desc: "Reputation-critical roles get advanced impersonation defense." },
  { icon: "Sparkles", title: "For Influencers", to: "/influencers", desc: "Creator identity defense, deepfake takedowns, brand-safe monitoring." },
  { icon: "Crown", title: "For Executives", to: "/executives", desc: "VIP-tier protection for C-suite, founders, and board members." },
  { icon: "Building2", title: "For Businesses", to: "/business", desc: "Workforce monitoring, third-party risk, brand & domain defense." },
  { icon: "Landmark", title: "For Enterprise", to: "/enterprise", desc: "Org-wide breach intelligence, SIEM integration, dedicated CSM." },
  { icon: "Search", title: "For Researchers", to: "/researchers", desc: "OSINT toolkit with attribution graphs and evidence vaulting." },
  { icon: "Terminal", title: "For Security Teams", to: "/security-teams", desc: "REST APIs, webhooks, SOAR plays, MITRE-mapped detections." },
];

export const TESTIMONIALS = [
  { quote: "Track The Breach found my email leaked in 12 old breaches. I changed my passwords and turned on 2-factor right away. So easy to understand.", name: "Riya Sharma", role: "Student · Delhi, India", initials: "RS" },
  { quote: "Found my old uni email in a massive 2017 breach. The team explained what data was exposed and how to lock down my LinkedIn. Super clear instructions.", name: "Olivia Bennett", role: "Marketing manager · London, UK", initials: "OB" },
  { quote: "My phone number was being used for scam calls across the Gulf. Track The Breach traced where it leaked and helped me get it scrubbed. Peace of mind, finally.", name: "Mohammed Al Suwaidi", role: "Father of three · Dubai, UAE", initials: "MA" },
  { quote: "I lead a cloud-kitchen startup in Sydney. Personal phone numbers of our delivery riders were being scraped. They tracked the source and helped us remove it.", name: "James Patterson", role: "Founder, cloud-kitchen brand · Sydney, Australia", initials: "JP" },
  { quote: "My phone number was on 8 random websites — I didn't even know! They showed me each one and helped me get it removed. Now my spam calls are gone.", name: "Aman Verma", role: "Software engineer · Bengaluru, India", initials: "AV" },
  { quote: "I scanned my work email and personal Gmail — both were on the dark web. The dashboard listed every site. I rotated passwords in 15 minutes flat.", name: "Wei Lin Tan", role: "Banker · Singapore", initials: "WT" },
  { quote: "My driver's license photo was floating on a random forum. They helped me get it removed and reported. As a single mom in NYC, this honestly saved my sanity.", name: "Jessica Morales", role: "Mom · New York, USA", initials: "JM" },
  { quote: "I found a fake Instagram account using my photos. The team filed the takedown and the account was gone in 3 days. Lifesaver for a parent.", name: "Sneha Iyer", role: "Mom of two · Pune, India", initials: "SI" },
  { quote: "Mi correo apareció en tres filtraciones distintas. La herramienta es súper fácil — mi madre también la usó. Recomiendo a todos en mi familia.", name: "Diego Fernández", role: "Photographer · Madrid, Spain", initials: "DF" },
  { quote: "My passport scan was uploaded to a sketchy website. Track The Breach helped me get it taken down and locked. Honestly, this should be free for everyone.", name: "Karan Mehta", role: "Frequent traveller · Mumbai, India", initials: "KM" },
  { quote: "Many of us in Kabul worry about our identities being exposed online. Track The Breach showed me where my email and phone leaked and gave me steps in plain English.", name: "Ahmad Rahimi", role: "Journalist · Kabul, Afghanistan", initials: "AR" },
  { quote: "We run a food-delivery brand — impersonators were copying our managers on WhatsApp. Track The Breach detected and removed the fake profiles fast.", name: "Fatima Al-Mansoori", role: "Head of Ops, food-delivery company · Dubai, UAE", initials: "FA" },
  { quote: "A deepfake video using my face was floating around on Telegram. They detected it, removed it and gave me a clear report I could share with my family.", name: "Priya N.", role: "Content creator · Hyderabad, India", initials: "PN" },
  { quote: "My passport number leaked through an airline breach. The team helped me file removal requests and monitor for misuse. Highly recommended across Africa.", name: "Chioma Okafor", role: "Entrepreneur · Lagos, Nigeria", initials: "CO" },
  { quote: "The report is like a school report card — green, yellow, red. Even my dad understood it in 2 minutes. We checked the whole family in one evening.", name: "Devansh Kapoor", role: "Designer · Gurugram, India", initials: "DK" },
  { quote: "I'm based in Cape Town. My old emails were in breaches I'd completely forgotten about. The report was clean, simple and I shared it with my whole family WhatsApp group.", name: "Thandiwe Nkosi", role: "Nurse · Cape Town, South Africa", initials: "TN" },
  { quote: "I had no idea my old Yahoo email was leaked years ago. The free scan showed me everything. I fixed it the same day. Took 10 minutes.", name: "Meera Joshi", role: "Teacher · Ahmedabad, India", initials: "MJ" },
  { quote: "Discovered my Telegram handle, phone and address all linked together in a leak. Track The Breach mapped the whole exposure and helped me clean it up step by step.", name: "Lucas Müller", role: "Freelancer · Berlin, Germany", initials: "LM" },
  { quote: "My Aadhaar number was showing up on a public site. Track The Breach guided me step-by-step to file a complaint and get it removed. I felt heard.", name: "Suresh Pillai", role: "Father · Kochi, India", initials: "SP" },
  { quote: "After a phishing scare I scanned my whole family. Two emails were on the dark web. Loved how my 70-year-old mum could read the report on her own.", name: "Aiko Tanaka", role: "Daughter & caregiver · Tokyo, Japan", initials: "AT" },
  { quote: "Someone was using my photos on a dating app to scam people. The team caught it, removed it and even gave me a PDF I sent to my lawyer.", name: "Anjali R.", role: "Marketing pro · Bengaluru, India", initials: "AR" },
  { quote: "My credit-card number popped up on a Tor market. The team confirmed the source, walked me through replacing the card and monitoring my identity. Brilliant service.", name: "Liam O'Sullivan", role: "Accountant · Dublin, Ireland", initials: "LO" },
  { quote: "I scanned my wife's email and three of my kids' emails. Found leaks on each one. The dashboard shows exactly where the data is — no jargon.", name: "Rohit Singh", role: "Family of 5 · Noida, India", initials: "RS" },
  { quote: "I'm head of an online fashion brand. We used Track The Breach to check exposure for every employee. Found 18 leaks across 9 staff. Cleaned up in a week.", name: "Sofia Rossi", role: "Head, e-commerce brand · Milan, Italy", initials: "SR" },
  { quote: "My WhatsApp number was leaked along with my city. Strangers started messaging. Track The Breach showed the source and helped me lock things down.", name: "Tanvi Desai", role: "College student · Mumbai, India", initials: "TD" },
  { quote: "Three of our co-founders had their emails in breach dumps before our launch. Fixed everything in one afternoon. Now part of our onboarding checklist.", name: "Aarav Kapoor", role: "Founder, e-commerce startup · Bengaluru, India", initials: "AK" },
  { quote: "I was getting weird emails after a website hack. The scan showed exactly which site leaked my password. Quick, clear and actually useful.", name: "Vikram Rao", role: "Retired engineer · Chennai, India", initials: "VR" },
];

export const FAQ_ITEMS = [
  { q: "What is Track The Breach?", a: "Track The Breach is an AI-powered Digital Identity Intelligence platform. We help individuals, families and businesses discover where their email, phone, government ID, social profiles, photos and videos are exposed across the open web, dark web and underground forums — and what to do about it." },
  { q: "Is the email scan really free?", a: "Yes. Every account gets a Free Email ID Scan with no credit card required at sign-up. You'll instantly see your Digital Identity Score, AI Security Summary and a preview of breaches tied to your email." },
  { q: "What do I get with the Free plan?", a: "Free includes a free Email ID Scan, Digital Identity Score, AI Security Summary, Risk Score, Email Breach Count, Basic Recommendations and a Dashboard History. To see full breach details, exposed fields, timelines and the Executive PDF report, upgrade to Starter for just $1.99 / ₹149." },
  { q: "Why upgrade from Free to Starter?", a: "Starter unlocks the complete Executive Report: every breach name, every exposed data field, the full breach timeline, provider intelligence, dark-web intelligence and a downloadable AI PDF report. It's a one-time $1.99 / ₹149 — credits never expire." },
  { q: "How is this different from a simple breach checker?", a: "Email breach lookup is one capability. Track The Breach unifies email, phone, government ID, social, photo, video, deepfake and dark-web intelligence into one AI-powered Digital Identity Graph — with a quantified Risk Score and prioritized remediation steps." },
  { q: "How does the pricing model work?", a: "All paid plans are one-time credit packs — you pay once, and credits never expire. Use them whenever you want to run a scan. There's no monthly subscription you have to remember to cancel." },
  { q: "Do credits ever expire?", a: "Never. Credits stay in your account for years. Spend them on email, phone, social, government ID, photo or video scans whenever you need." },
  { q: "Is my data safe?", a: "Yes. We follow zero-knowledge principles: identifiers are hashed in your browser before they reach our servers. We never sell your data, never share with advertisers, and are SOC 2, ISO 27001, GDPR and DPDP aligned." },
  { q: "How fast is a scan?", a: "Most scans complete in under 2 minutes. You'll see results streaming into your dashboard as they're found." },
  { q: "What is the Digital Identity Score?", a: "A 0–100 score that quantifies your overall digital exposure based on the number, severity, recency and source credibility of breaches and listings tied to your identity. It updates in real time as new exposures surface." },
  { q: "What is the Risk Score?", a: "Risk Score is our per-finding metric — it tells you how dangerous a specific exposure is so you know what to fix first." },
  { q: "What is Jiva AI?", a: "Jiva is our upcoming AI Security Assistant. Today, Jiva explains your exposure, prioritizes risks and writes your Executive Report. On our roadmap: automatic removal requests, AI website outreach, continuous identity cleanup and a 24/7 personal cybersecurity assistant." },
  { q: "Do you monitor the dark web?", a: "Yes. We continuously sweep Tor markets, paste sites, credential brokers, invite-only Telegram and Discord channels. Dark Web Intelligence is included on Starter and above." },
  { q: "Can you detect deepfakes?", a: "Yes. Our Video Intelligence engine combines perceptual hashing, biometric matching and generative-AI detectors to flag deepfakes and unauthorized video re-uploads — included on Enterprise and Full Secure." },
  { q: "Do you support phone, social and government ID scans?", a: "Yes — and you can run them at any plan level using credits. Higher plans unlock direct inclusion (Professional adds phone, Business adds social & government ID, Enterprise adds photo & video intelligence)." },
  { q: "What's included in Full Secure?", a: "Full Secure is your personal cybersecurity team — everything in Enterprise plus a Human Security Expert, Data Removal Assistance, managed fake profile takedowns, ongoing monitoring, emergency response, legal takedown support and 24×7 concierge support." },
  { q: "Can I cancel or get a refund?", a: "Credit packs are one-time purchases, but if you're not satisfied within 30 days we'll refund unused credits — no questions asked." },
  { q: "Does it work for non-US identities?", a: "Yes. We support 50+ countries including India (Aadhaar, PAN, Voter ID), the UK, EU member states, Singapore, UAE, Brazil, Australia and more." },
  { q: "Is there a mobile app?", a: "Yes — iOS and Android apps with biometric login, push alerts and one-tap actions." },
  { q: "Can I see what the report looks like before I sign up?", a: "Absolutely — visit our Sample Report page to explore a blurred Executive Report with Identity Score, Risk Score, AI Summary and locked premium sections." },
];

export const PRICING_PLANS = [
  {
    name: "Free",
    tagline: "Try Track The Breach",
    audience: "Perfect if you only want to know whether your email has been exposed.",
    priceUSD: "Free",
    priceINR: "Free",
    period: "forever free",
    creditNote: "No credit card required",
    credits: "Free Email ID Scan",
    cta: "Start Scanning Free",
    outcome: "See whether your email is leaked — in under 2 minutes.",
    features: [
      "Free Email ID Scan",
      "Preview Report",
      "Digital Identity Score",
      "Risk Score & AI Summary",
      "No PDF Download",
      "No Detailed Report",
    ],
    protection: "Discovery",
    monitoring: "On-demand",
    support: "Community",
  },
  {
    name: "Starter",
    tagline: "Unlock complete email breach intelligence",
    audience: "Ideal for individuals wanting a complete email exposure report.",
    priceUSD: "$1.99",
    priceINR: "₹149",
    period: "one-time",
    creditNote: "Credits never expire",
    credits: "40 Credits",
    cta: "Get Starter",
    outcome: "Get the complete Executive Email Report — every breach, every exposed field, every action.",
    features: [
      "2 Full Email Reports",
      "Executive PDF",
      "AI Executive Report",
      "Complete Breach Timeline",
      "Dark Web Details",
      "Provider Intelligence",
    ],
    protection: "Personal",
    monitoring: "On-demand",
    support: "Email",
  },
  {
    name: "Professional",
    highlight: true,
    tagline: "Email + phone exposure",
    audience: "For people managing multiple digital identities.",
    priceUSD: "$9.99",
    priceINR: "₹899",
    period: "one-time",
    creditNote: "Credits never expire",
    credits: "300 Credits",
    cta: "Get Professional",
    outcome: "Cover all your emails and phone numbers — with priority processing and advanced AI insights.",
    features: [
      "Everything in Starter",
      "Email + Phone scans",
      "Priority Processing",
      "Advanced AI Insights",
      "Spam Risk Detection",
    ],
    protection: "Advanced",
    monitoring: "Continuous (optional)",
    support: "Priority Email",
  },
  {
    name: "Business",
    tagline: "Email + phone + social + Govt ID",
    audience: "For teams and organizations.",
    priceUSD: "$49.99",
    priceINR: "₹4,499",
    period: "one-time",
    creditNote: "Credits never expire",
    credits: "2,500 Credits",
    cta: "Get Business",
    outcome: "One dashboard to protect your team, your brand, and your customers.",
    features: [
      "Everything in Professional",
      "Social Account Monitoring",
      "Govt ID Exposure",
      "Impersonation Detection",
      "Priority Risk Scoring",
    ],
    protection: "Team-grade",
    monitoring: "24/7 continuous",
    support: "Priority",
  },
  {
    name: "Enterprise",
    tagline: "Complete identity coverage",
    audience: "For continuous enterprise monitoring.",
    priceUSD: "$99.99",
    priceINR: "₹8,999",
    period: "one-time",
    creditNote: "Credits never expire",
    credits: "6,000 Credits",
    cta: "Get Enterprise",
    outcome: "Always-on AI monitoring across every identifier — email, phone, photos, videos & IDs.",
    features: [
      "Everything in Business",
      "Photo Misuse Detection",
      "Video Exposure Monitoring",
      "Fraud Alert System",
    ],
    protection: "Maximum",
    monitoring: "Mission-critical",
    support: "Dedicated",
  },
  {
    name: "Full Secure",
    tagline: "White-glove protection",
    audience: "Complete digital identity protection with AI assistance.",
    priceUSD: "$249.99",
    priceINR: "₹23,999",
    period: "starting",
    creditNote: "Concierge support",
    credits: "Concierge support",
    cta: "Get Full Secure",
    outcome: "AI + a human security team handling monitoring, takedowns, and data removal for you.",
    features: [
      "Everything in Enterprise",
      "Dedicated Privacy Expert",
      "Manual Data Removal",
      "Fake Profile Takedowns",
      "Emergency Response",
      "Legal Takedown Support",
    ],
    protection: "VIP white-glove",
    monitoring: "Continuous + human analyst",
    support: "24×7 Concierge",
  },
];

// Full comparison matrix — used on Pricing page and homepage (short version)
// Plan order: Free, Starter, Professional, Business, Enterprise, Full Secure
export const COMPARISON_PLANS = ["Free", "Starter", "Professional", "Business", "Enterprise", "Full Secure"];

export const COMPARISON_FEATURES = [
  { group: "Pricing & Credits", items: [
    { feature: "Price", values: ["Free", "$1.99 / ₹149", "$9.99 / ₹899", "$49.99 / ₹4,499", "$99.99 / ₹8,999", "From $249.99 / ₹23,999"] },
    { feature: "Credits Included", values: ["Free Email ID Scan", "40", "300", "2,500", "6,000", "Concierge support"] },
    { feature: "Credits Never Expire", values: ["—", true, true, true, true, true] },
  ]},
  { group: "Core Intelligence", items: [
    { feature: "Digital Identity Score", values: [true, true, true, true, true, true] },
    { feature: "AI Security Summary", values: [true, true, true, true, true, true] },
    { feature: "Risk Score", values: [true, true, true, true, true, true] },
    { feature: "Email Breach Count", values: [true, true, true, true, true, true] },
    { feature: "Basic Recommendations", values: [true, true, true, true, true, true] },
    { feature: "Dashboard History", values: [true, true, true, true, true, true] },
  ]},
  { group: "Email Intelligence", items: [
    { feature: "Full Email Breach Details", values: ["Preview only", "Up to 2 emails", "Up to 5 emails", true, true, true] },
    { feature: "Exposed Data Fields", values: [false, true, true, true, true, true] },
    { feature: "Breach Timeline", values: [false, true, true, true, true, true] },
    { feature: "Provider Intelligence", values: [false, true, true, true, true, true] },
    { feature: "Dark Web Intelligence", values: ["Preview", true, true, true, true, true] },
    { feature: "Executive PDF Report", values: [false, true, true, true, true, true] },
  ]},
  { group: "Scan Modules", items: [
    { feature: "Email ID Scan", values: ["Free", true, true, true, true, true] },
    { feature: "Phone Scan", values: ["Credits required", "Credits required", true, true, true, true] },
    { feature: "Social Media Scan", values: ["Credits required", "Credits required", "Credits required", true, true, true] },
    { feature: "Government ID Scan", values: ["Credits required", "Credits required", "Credits required", true, true, true] },
    { feature: "Photo Intelligence", values: ["Credits required", "Credits required", "Credits required", "Credits required", true, true] },
    { feature: "Video Intelligence", values: ["Credits required", "Credits required", "Credits required", "Credits required", true, true] },
  ]},
  { group: "AI & Monitoring", items: [
    { feature: "AI Executive Reports", values: [false, true, true, true, true, true] },
    { feature: "Priority Processing", values: [false, false, true, true, true, true] },
    { feature: "Continuous Monitoring", values: [false, false, "Optional", true, true, true] },
    { feature: "Business Dashboard", values: [false, false, false, true, true, true] },
    { feature: "Team Access", values: [false, false, false, true, true, true] },
  ]},
  { group: "Human Services & Support", items: [
    { feature: "Human Security Expert", values: [false, false, false, false, false, true] },
    { feature: "Data Removal Assistance", values: [false, false, false, false, false, true] },
    { feature: "Dedicated Support", values: ["Community", "Email", "Priority Email", "Priority", "Dedicated", "24×7 Concierge"] },
  ]},
];

export const CREDIT_USAGE = [
  { service: "Email ID Breach Scan", credits: 20, icon: "Mail" },
  { service: "Phone Number Exposure", credits: 40, icon: "Phone" },
  { service: "Social Account Duplicates", credits: 80, icon: "AtSign" },
  { service: "Government ID Exposure", credits: 100, icon: "BadgeCheck" },
  { service: "Photo & Reverse Image", credits: 150, icon: "Camera" },
  { service: "Video & Deepfake Scan", credits: 300, icon: "Video" },
];

// Product / Solutions / Investor / Enterprise / SEO pages
export const PAGES = {
  // PRODUCT
  "platform": {
    eyebrow: "PLATFORM",
    title: "The unified platform for digital identity protection.",
    subtitle: "One control plane for exposure detection, breach intelligence, dark-web sweeps, and AI risk scoring — across every identifier you care about.",
    icon: "ShieldCheck",
    features: [
      { icon: "Mail", title: "Multi-identifier scanning", desc: "Email, phone, ID, photo, video, alias — all unified under one identity graph." },
      { icon: "Brain", title: "AI Risk Intelligence", desc: "Predictive scoring fused from 2,000+ feeds and proprietary sensors." },
      { icon: "Activity", title: "Continuous monitoring", desc: "24/7 sweeps with sub-minute alerting on critical exposures." },
      { icon: "FileSearch", title: "Evidence vaulting", desc: "Hash-stamped, court-ready evidence retained for compliance & legal." },
      { icon: "Workflow", title: "Open APIs & webhooks", desc: "Native integrations for Splunk, Sentinel, Chronicle, Slack, ServiceNow." },
      { icon: "Lock", title: "Zero-knowledge privacy", desc: "Identifiers hashed before scanning. Your data never leaves your tenant." },
    ],
  },
  "email-monitoring": {
    eyebrow: "PRODUCT", title: "Email Monitoring", icon: "Mail",
    subtitle: "Detect leaked credentials, compromised inboxes, and underground listings of your email addresses across 2,000+ sources.",
    features: [
      { icon: "Mail", title: "Credential dump tracking", desc: "Surface combo-lists, stealer logs, and credential brokers in real time." },
      { icon: "Bell", title: "Real-time alerts", desc: "Push, SMS, Slack, and webhook delivery within minutes of detection." },
      { icon: "ShieldOff", title: "Password reuse intel", desc: "Flag passwords reused across services so you can rotate proactively." },
      { icon: "Database", title: "Historical breach lookup", desc: "Search across 1.6B+ historical records dating back to 2010." },
      { icon: "AtSign", title: "Catch-all & alias detection", desc: "Detect aliases, plus-addresses, and disposable variants tied to your identity." },
      { icon: "FileWarning", title: "Phishing kit attribution", desc: "Discover when your address surfaces in active phishing campaigns." },
    ],
  },
  "phone-monitoring": {
    eyebrow: "PRODUCT", title: "Phone Number Monitoring", icon: "Phone",
    subtitle: "Track exposure of your phone numbers, SIM swap risk signals, and SMS-based attack vectors — globally.",
    features: [
      { icon: "Phone", title: "Number leak detection", desc: "Find your number in breach dumps, scam databases, and brokers." },
      { icon: "RefreshCw", title: "SIM swap risk scoring", desc: "Behavioral telemetry indicates elevated SIM-swap probability." },
      { icon: "MessageSquare", title: "Smishing campaign intel", desc: "Detect active SMS phishing campaigns targeting your numbers." },
      { icon: "Globe2", title: "Global telco coverage", desc: "Carriers across 50+ countries including India, UK, US, EU, MENA." },
      { icon: "ShieldAlert", title: "Robocall fingerprinting", desc: "Identify attacker patterns reusing your number for scams." },
      { icon: "Map", title: "Geo-location risk", desc: "Flag suspicious geographic associations tied to your number." },
    ],
  },
  "social-monitoring": {
    eyebrow: "PRODUCT", title: "Social Account Monitoring", icon: "AtSign",
    subtitle: "Discover impersonators, fake profiles, and stolen credentials across 30+ social platforms.",
    features: [
      { icon: "Users", title: "Impersonator detection", desc: "ML-driven matching of profile photos, handles, and bios." },
      { icon: "Sparkles", title: "Bot & spam ring detection", desc: "Identify coordinated inauthentic behavior targeting your identity." },
      { icon: "ShieldCheck", title: "Verified-profile shielding", desc: "Lock down your legitimate profiles with proactive guardrails." },
      { icon: "Globe", title: "30+ platforms", desc: "Instagram, X, TikTok, LinkedIn, YouTube, Facebook, Threads, Reddit & more." },
      { icon: "FileText", title: "Managed takedowns", desc: "We file and pursue platform takedowns end to end." },
      { icon: "Activity", title: "Reputation analytics", desc: "Sentiment & mention analysis to spot brewing reputation threats." },
    ],
  },
  "government-id-monitoring": {
    eyebrow: "PRODUCT", title: "Government ID Monitoring", icon: "BadgeCheck",
    subtitle: "Detect exposure of Aadhaar, PAN, passport, driver's license, SSN, and 30+ national identifiers worldwide.",
    features: [
      { icon: "BadgeCheck", title: "30+ ID types covered", desc: "Aadhaar, PAN, Voter, Passport, SSN, EU PESEL, UAE Emirates ID & more." },
      { icon: "Lock", title: "Tokenized scanning", desc: "IDs are tokenized client-side. We never see your raw ID number." },
      { icon: "ShieldAlert", title: "Synthetic identity fraud", desc: "Detect when fragments of your ID combine with fabricated data." },
      { icon: "FileWarning", title: "KYC leak detection", desc: "Flag KYC document leaks from compromised fintech & telco vendors." },
      { icon: "Globe2", title: "Government liaison support", desc: "Guidance on filing reports with CERT-In, FTC, NCSC, and equivalents." },
      { icon: "Activity", title: "Continuous re-verification", desc: "Re-scan every 6 hours for newly surfaced fragments." },
    ],
  },
  "photo-monitoring": {
    eyebrow: "PRODUCT", title: "Photo Exposure Detection", icon: "Camera",
    subtitle: "Reverse-image intelligence to find unauthorized use of your photos across the web — including dating sites, scam pages, and NSFW networks.",
    features: [
      { icon: "Camera", title: "Reverse image graph", desc: "Find your photo wherever it appears, even cropped, mirrored, or recolored." },
      { icon: "ShieldAlert", title: "Romance scam detection", desc: "Catch fake dating profiles repurposing your photos." },
      { icon: "FileWarning", title: "NSFW network sweeps", desc: "Detect photos uploaded to adult sites without consent." },
      { icon: "Sparkles", title: "AI-generated face matching", desc: "Detect synthetic faces derived from your real photos." },
      { icon: "FileText", title: "DMCA takedown workflow", desc: "One-click filing of takedown requests with progress tracking." },
      { icon: "Lock", title: "Private vault", desc: "Photos stored encrypted, isolated per tenant, deleted on demand." },
    ],
  },
  "video-monitoring": {
    eyebrow: "PRODUCT", title: "Video Exposure Detection", icon: "Video",
    subtitle: "Detect deepfakes, unauthorized re-uploads, and AI-manipulated videos featuring your likeness — across YouTube, TikTok, X, and more.",
    features: [
      { icon: "Video", title: "Deepfake detection", desc: "Perceptual + generative-AI detectors flag manipulated footage." },
      { icon: "Eye", title: "Likeness fingerprinting", desc: "Biometric anchor points let us match you across compressed, edited, or filtered video." },
      { icon: "Sparkles", title: "Voice clone detection", desc: "Audio biometrics catch synthetic voices in interview & podcast formats." },
      { icon: "Globe", title: "Cross-platform sweep", desc: "YouTube, TikTok, X, Instagram, Telegram, Rumble, Bitchute & more." },
      { icon: "FileText", title: "Managed video takedowns", desc: "We pursue takedowns under DMCA and platform-specific policies." },
      { icon: "ShieldCheck", title: "Pre-publication scanning", desc: "Upload an unreleased video to scan for pre-existing leaks." },
    ],
  },
  "dark-web-monitoring": {
    eyebrow: "PRODUCT", title: "Dark Web Monitoring", icon: "ShieldAlert",
    subtitle: "Continuous scanning of Tor markets, paste sites, credential brokers, and invite-only Telegram & Discord channels.",
    features: [
      { icon: "Search", title: "Tor market coverage", desc: "200+ active markets and forum communities across the dark web." },
      { icon: "MessageSquare", title: "Telegram & Discord intel", desc: "Sensors deployed in 5,000+ private channels and servers." },
      { icon: "Database", title: "Combo-list ingest", desc: "Hourly ingest of new credential dumps from credential brokers." },
      { icon: "Bell", title: "Sub-minute alerts", desc: "Critical findings reach your inbox within 60 seconds of detection." },
      { icon: "Lock", title: "OPSEC-safe collection", desc: "Sensors operate behind layered obfuscation to avoid attribution." },
      { icon: "FileText", title: "Evidence vault", desc: "Original artifacts preserved hash-stamped for legal proceedings." },
    ],
  },
  "digital-footprint-monitoring": {
    eyebrow: "PRODUCT", title: "Digital Footprint Analysis", icon: "Network",
    subtitle: "Map every place your identity exists across the open and dark internet — and prioritize what to clean up first.",
    features: [
      { icon: "Network", title: "Identity graph", desc: "Visualize how identifiers, accounts, and breaches connect to you." },
      { icon: "Search", title: "People-finder cleanup", desc: "Detect listings on 200+ data brokers and submit deletion requests." },
      { icon: "MapPin", title: "Geo-exposure timeline", desc: "Track historical locations leaked through metadata and posts." },
      { icon: "Sparkles", title: "OSINT enrichment", desc: "Public-source aggregation to find aliases and forgotten accounts." },
      { icon: "TrendingDown", title: "Footprint reduction score", desc: "Quantify how much of your footprint you've removed each month." },
      { icon: "FileText", title: "Action plans", desc: "Step-by-step removal guides for forums, brokers, and archives." },
    ],
  },
  "ai-risk-intelligence": {
    eyebrow: "PRODUCT", title: "AI Risk Intelligence", icon: "Brain",
    subtitle: "Our proprietary AI fuses signal across 2,000+ sources into a single 0–100 risk score with prioritized remediation.",
    features: [
      { icon: "Brain", title: "Predictive scoring", desc: "Ensemble models forecast exposure escalation 14 days ahead." },
      { icon: "Network", title: "Entity correlation", desc: "Graph reasoning links fragments into coherent identity threats." },
      { icon: "Sparkles", title: "GenAI explainability", desc: "Every alert ships with a natural-language explanation of the risk." },
      { icon: "TrendingUp", title: "Adaptive thresholds", desc: "Severity adapts to your role, geography, and industry." },
      { icon: "ShieldCheck", title: "Continuous retraining", desc: "Models retrained weekly against the latest threat actor TTPs." },
      { icon: "FileText", title: "Auditable AI", desc: "Every decision is logged with model version, inputs, and feature importance." },
    ],
  },
  "continuous-monitoring": {
    eyebrow: "PRODUCT", title: "Continuous Monitoring & Alerts", icon: "Activity",
    subtitle: "Always-on protection. The moment new exposures surface, you know — wherever they appear in the world.",
    features: [
      { icon: "Activity", title: "24/7/365 sweeps", desc: "Sub-minute polling against the highest-priority data sources." },
      { icon: "Bell", title: "Multi-channel alerts", desc: "Push, SMS, email, Slack, Teams, webhook, SIEM — pick yours." },
      { icon: "Sliders", title: "Smart noise reduction", desc: "ML-tuned thresholds cut false positives by 71% vs legacy tools." },
      { icon: "Calendar", title: "Scheduled deep scans", desc: "Weekly, monthly, and quarterly deep audits beyond continuous sweeps." },
      { icon: "Globe2", title: "Travel mode", desc: "Heightened monitoring when you travel to high-risk geographies." },
      { icon: "Workflow", title: "Automated playbooks", desc: "Trigger takedowns, ticket creation, and IR runbooks automatically." },
    ],
  },
  // SOLUTIONS
  "individuals": {
    eyebrow: "FOR INDIVIDUALS", title: "Take control of your digital identity.", icon: "User",
    subtitle: "Discover what the internet knows about you, monitor new threats, and clean up exposure — without becoming a security expert.",
    features: [
      { icon: "Search", title: "One-tap exposure scan", desc: "See your full risk picture in under 90 seconds." },
      { icon: "Bell", title: "Real-time alerts", desc: "Get notified the moment something new surfaces." },
      { icon: "ShieldCheck", title: "Guided remediation", desc: "Step-by-step guides written for humans, not engineers." },
      { icon: "FileText", title: "Monthly identity report", desc: "Beautiful PDFs you can save, share, or send to your bank." },
      { icon: "Smartphone", title: "iOS + Android apps", desc: "Biometric login, push alerts, one-tap takedowns." },
      { icon: "Lock", title: "Zero-knowledge by default", desc: "We never see your raw identifiers in plaintext." },
    ],
  },
  "families": {
    eyebrow: "FOR FAMILIES", title: "Protect everyone you love under one dashboard.", icon: "Users",
    subtitle: "From children and teens to aging parents — monitor the entire family's digital exposure with role-aware controls.",
    features: [
      { icon: "Users", title: "Up to 6 members", desc: "One subscription covers your whole household." },
      { icon: "Baby", title: "Kid-safety monitoring", desc: "Age-aware alerts and content guardians for minors." },
      { icon: "Heart", title: "Senior protection", desc: "Scam and fraud detection tuned for seniors." },
      { icon: "ShieldAlert", title: "Romance-scam defense", desc: "Catch fraudsters before they exploit your loved ones." },
      { icon: "Smartphone", title: "Shared family app", desc: "One app, separate profiles, parental visibility." },
      { icon: "FileText", title: "Family report card", desc: "See how each member's protection improves over time." },
    ],
  },
  "professionals": {
    eyebrow: "FOR PROFESSIONALS", title: "Reputation-critical roles deserve reputation-grade protection.", icon: "Briefcase",
    subtitle: "Lawyers, doctors, finance, journalists, and educators face targeted attacks. Track The Breach gives you the defense layer your career deserves.",
    features: [
      { icon: "ShieldCheck", title: "License & credential watch", desc: "Spot fraudulent listings using your professional credentials." },
      { icon: "MessageSquare", title: "Client communication security", desc: "Monitor for spoofed email addresses targeting your clients." },
      { icon: "FileText", title: "Court-ready evidence", desc: "Findings come hash-stamped and chain-of-custody preserved." },
      { icon: "AtSign", title: "Impersonator takedowns", desc: "Defend against fake LinkedIn and bar-association profiles." },
      { icon: "Lock", title: "Privilege-aware reporting", desc: "Designed with attorney-client and HIPAA-style workflows in mind." },
      { icon: "Globe", title: "Cross-border exposure", desc: "Coverage tuned for international travel and global clients." },
    ],
  },
  "influencers": {
    eyebrow: "FOR INFLUENCERS", title: "Your face is your brand. Defend it.", icon: "Sparkles",
    subtitle: "Creators face deepfakes, stalkers, impersonators, and stolen content daily. Protect your audience, your revenue, and your safety.",
    features: [
      { icon: "VideoOff", title: "Deepfake detection", desc: "Catch synthetic videos using your likeness before they go viral." },
      { icon: "AtSign", title: "Impersonator sweeps", desc: "Daily scans across 30+ platforms for fake profiles." },
      { icon: "Camera", title: "Photo theft tracking", desc: "Reverse-image graph flags unauthorized usage." },
      { icon: "MessageSquare", title: "DM scam monitoring", desc: "Detect scam DMs being sent in your name." },
      { icon: "MapPin", title: "Doxxing protection", desc: "Active monitoring for address, phone, and family doxxing." },
      { icon: "FileText", title: "Brand-deal-ready reports", desc: "Hand sponsors proof of your audience integrity." },
    ],
  },
  "executives": {
    eyebrow: "FOR EXECUTIVES", title: "VIP-grade protection for C-suite, founders & boards.", icon: "Crown",
    subtitle: "Executive identities are high-value targets. We deliver concierge protection blending digital, physical, and reputational defense.",
    features: [
      { icon: "Crown", title: "VIP concierge analyst", desc: "Named security analyst on call 24/7 for your protection program." },
      { icon: "ShieldAlert", title: "Threat-actor attribution", desc: "Trace adversaries back to known groups and individuals." },
      { icon: "MapPin", title: "Physical-digital fusion", desc: "Pair OSINT with travel intel to anticipate physical risk." },
      { icon: "Users", title: "Family extension", desc: "Optionally extend protection to spouse, children, parents." },
      { icon: "FileText", title: "Board-ready briefs", desc: "Monthly executive intelligence reports for risk committees." },
      { icon: "Phone", title: "Crisis hotline", desc: "Direct line to incident-response if a credible threat appears." },
    ],
  },
  "business": {
    eyebrow: "FOR BUSINESS", title: "Workforce identity protection for growing teams.", icon: "Building2",
    subtitle: "From 5-person startups to 500-employee scale-ups, give your team the breach intelligence layer attackers don't expect.",
    features: [
      { icon: "Users", title: "Workforce coverage", desc: "Bulk import emails, phones, and domains via CSV or HRIS sync." },
      { icon: "Building2", title: "Brand & domain watch", desc: "Catch typosquats, fake login pages, and brand impersonation." },
      { icon: "FileText", title: "Compliance evidence", desc: "Pre-built packs for SOC 2, ISO 27001, GDPR, DPDP." },
      { icon: "Workflow", title: "HR & IT integrations", desc: "Okta, Google Workspace, Slack, Microsoft 365, Jira." },
      { icon: "Bell", title: "Smart routing", desc: "Route alerts to managers, security teams, or affected individuals." },
      { icon: "TrendingDown", title: "Quarterly risk reduction", desc: "Measurable workforce risk reduction tracked over time." },
    ],
  },
  "enterprise": {
    eyebrow: "FOR ENTERPRISE", title: "Mission-critical identity protection at global scale.", icon: "Landmark",
    subtitle: "Org-wide breach intelligence, SIEM-native, with dedicated CSM, named security engineer, and 99.99% SLA.",
    features: [
      { icon: "Landmark", title: "Unlimited identities", desc: "Scale from thousands to hundreds of thousands without re-licensing." },
      { icon: "Server", title: "Custom data residency", desc: "EU, India, UAE, Singapore tenant options available." },
      { icon: "Workflow", title: "Deep SIEM/SOAR integration", desc: "Splunk, Sentinel, Chronicle, Elastic, Cortex XSOAR, Tines." },
      { icon: "Lock", title: "SAML / SCIM / RBAC", desc: "Fine-grained access policies for global security teams." },
      { icon: "FileText", title: "99.99% uptime SLA", desc: "Backed by financial credits and a public status page." },
      { icon: "Phone", title: "Dedicated CSM + engineer", desc: "Quarterly strategy reviews and architecture co-design." },
    ],
  },
  "researchers": {
    eyebrow: "FOR RESEARCHERS", title: "OSINT toolkit for investigators, journalists & analysts.", icon: "Search",
    subtitle: "Attribution graphs, evidence vaulting, source confidence scoring — built for the people who chase the truth.",
    features: [
      { icon: "Network", title: "Attribution graph", desc: "Visualize relationships across actors, infrastructure, and victims." },
      { icon: "FileSearch", title: "Pivot search", desc: "Pivot across email, phone, alias, wallet, and IoC in one query." },
      { icon: "Lock", title: "Hash-stamped evidence", desc: "Cryptographically anchored captures for chain of custody." },
      { icon: "Globe2", title: "Multi-language sources", desc: "Native ingest for English, Russian, Arabic, Chinese, Spanish, Hindi." },
      { icon: "FileText", title: "Investigation reports", desc: "Branded, editable, exportable reports for your editors or clients." },
      { icon: "Activity", title: "Watchlists & live feeds", desc: "Standing queries that alert you when new evidence surfaces." },
    ],
  },
  "security-teams": {
    eyebrow: "FOR SECURITY TEAMS", title: "Drop breach intelligence into your stack.", icon: "Terminal",
    subtitle: "REST APIs, webhooks, native SIEM/SOAR plays, MITRE-mapped detections — built for SOC, IR, and TI teams.",
    features: [
      { icon: "Terminal", title: "REST API & SDKs", desc: "Python, Go, Node, and Java SDKs with sub-100ms median response." },
      { icon: "Workflow", title: "SOAR playbooks", desc: "Pre-built playbooks for Tines, Cortex XSOAR, Sentinel, Splunk SOAR." },
      { icon: "ShieldAlert", title: "MITRE ATT&CK mapping", desc: "Every detection mapped to MITRE technique IDs for clean reporting." },
      { icon: "Database", title: "STIX/TAXII feed", desc: "TI feeds in STIX 2.1 over TAXII for direct ingest." },
      { icon: "Bell", title: "Detection-as-code", desc: "Version-controlled detection rules with CI/CD-friendly diffs." },
      { icon: "Activity", title: "Real-time webhooks", desc: "Pub/Sub-style delivery with replay, retries, and HMAC signing." },
    ],
  },
  // INVESTOR
  "why-track-the-breach": {
    eyebrow: "INVESTORS", title: "Why Track The Breach.", icon: "TrendingUp",
    subtitle: "We are building the operating system for personal cybersecurity in a world where every identity is a target — and existing tools were designed for a different era.",
    features: [
      { icon: "TrendingUp", title: "$182B+ TAM", desc: "Digital identity protection and cyber insurance are converging into a category." },
      { icon: "Users", title: "5.4B internet users", desc: "Every connected human is a potential customer or covered identity." },
      { icon: "Sparkles", title: "Defensible moat", desc: "Proprietary sensors, 2,000+ data sources, and a fast-compounding identity graph." },
      { icon: "Brain", title: "AI-native from day one", desc: "We didn't bolt LLMs on. Our detection and scoring are AI-first." },
      { icon: "Building2", title: "Multi-segment", desc: "Consumer + SMB + Enterprise + Government — diversified GTM motions." },
      { icon: "Globe2", title: "Global by default", desc: "50+ countries supported. India, EU, MENA, SEA on day-one parity." },
    ],
  },
  "our-vision": {
    eyebrow: "VISION", title: "A world where digital identity is a right, not a liability.", icon: "Eye",
    subtitle: "We envision a future in which every person, family, and business can see, control, and defend their digital identity with the same confidence they protect their physical one.",
    features: [
      { icon: "Eye", title: "Total visibility", desc: "You should be able to see everything the internet knows about you." },
      { icon: "ShieldCheck", title: "Default-on protection", desc: "Protection should be passive and continuous, not effortful." },
      { icon: "Sparkles", title: "AI as a shield", desc: "We turn AI from an adversarial tool into a defensive one." },
      { icon: "Users", title: "Protection for everyone", desc: "Not just enterprises — students, parents, creators, and seniors too." },
      { icon: "Globe2", title: "Globally equitable", desc: "Coverage parity across the developed and developing world." },
      { icon: "Lock", title: "Privacy preserved", desc: "Protection without surveillance. Always zero-knowledge by design." },
    ],
  },
  "our-mission": {
    eyebrow: "MISSION", title: "Find every exposure. Surface every threat. Empower every defender.", icon: "Target",
    subtitle: "Our mission is to surface the digital exposures putting individuals and organizations at risk — and give them the tools, intelligence, and confidence to act before attackers do.",
    features: [
      { icon: "Search", title: "Find every exposure", desc: "Comprehensive surface across open web, deep web, and dark web." },
      { icon: "Brain", title: "Make sense of signal", desc: "Convert raw exposure data into prioritized, actionable intelligence." },
      { icon: "ShieldCheck", title: "Enable proactive defense", desc: "Move customers from reactive cleanup to proactive prevention." },
      { icon: "Users", title: "Democratize protection", desc: "Make enterprise-grade protection accessible to everyday users." },
      { icon: "Globe2", title: "Cross every border", desc: "Identity attacks cross borders — so does our protection." },
      { icon: "Sparkles", title: "Out-innovate adversaries", desc: "Stay 2 steps ahead by investing 30% of R&D in offensive research." },
    ],
  },
  "market-opportunity": {
    eyebrow: "MARKET", title: "A $182B convergence is happening — and we're in the middle of it.", icon: "TrendingUp",
    subtitle: "Identity protection, cyber insurance, dark-web monitoring, and reputation management are merging into a single platform category. Track The Breach is purpose-built for that future.",
    features: [
      { icon: "TrendingUp", title: "$182B TAM by 2030", desc: "Identity + cyber + reputation + insurance markets converging." },
      { icon: "Users", title: "5.4B internet users", desc: "Every connected human is a covered identity in our model." },
      { icon: "Sparkles", title: "27% CAGR consumer cyber", desc: "Consumer cybersecurity outpacing enterprise growth." },
      { icon: "AlertTriangle", title: "$10.5T annual cybercrime", desc: "The threat backdrop driving customer urgency." },
      { icon: "Globe2", title: "Regulatory tailwinds", desc: "DPDP, GDPR, CPRA, AI Act — all expanding compliance demand." },
      { icon: "Building2", title: "Cross-segment demand", desc: "Consumer, SMB, Enterprise, Government all buying identity protection." },
    ],
  },
  "technology": {
    eyebrow: "TECHNOLOGY", title: "An AI-native breach intelligence platform.", icon: "Cpu",
    subtitle: "Three pillars power Track The Breach: the largest aggregated exposure dataset in its category, a proprietary entity-resolution graph, and continuously retrained risk-scoring models.",
    features: [
      { icon: "Database", title: "Exposure data lake", desc: "1.6B+ records, ingested hourly, normalized to a unified schema." },
      { icon: "Network", title: "Identity graph", desc: "Fuzzy entity resolution links scattered fragments into one identity." },
      { icon: "Brain", title: "Risk-scoring models", desc: "Gradient-boosted + transformer ensemble; retrained weekly." },
      { icon: "ShieldCheck", title: "Zero-knowledge scanning", desc: "Identifiers hashed before ingest using BLAKE3-keyed HMAC." },
      { icon: "Cloud", title: "Cloud-native, multi-region", desc: "Active-active across us-east, eu-central, ap-south, me-central." },
      { icon: "Lock", title: "SOC 2 + ISO 27001", desc: "Continuously audited, externally validated security posture." },
    ],
  },
  "security-architecture": {
    eyebrow: "SECURITY", title: "Security architecture built for the most regulated industries.", icon: "Lock",
    subtitle: "Defense-in-depth across infrastructure, application, and data — designed to satisfy the toughest banking, healthcare, and government auditors.",
    features: [
      { icon: "Lock", title: "Zero-knowledge ingest", desc: "Identifiers tokenized in-browser before they touch our backend." },
      { icon: "Server", title: "Tenant isolation", desc: "Every customer gets logically isolated data planes and KMS keys." },
      { icon: "ShieldCheck", title: "Continuous attestation", desc: "Automated SOC 2 / ISO 27001 evidence collection 24/7." },
      { icon: "Activity", title: "Real-time anomaly detection", desc: "Our own platform watches our infrastructure for misuse." },
      { icon: "Cloud", title: "Region-pinned storage", desc: "Honor data residency for EU, India, UAE, Singapore tenants." },
    ],
  },
  "trust-center": {
    eyebrow: "TRUST", title: "Trust Center.", icon: "ShieldCheck",
    subtitle: "Transparency about how we secure, store, and govern your data. Always-current compliance status, security policies, and disclosure programs.",
    features: [
      { icon: "ShieldCheck", title: "SOC 2 Type II", desc: "Audited annually by an AICPA-registered firm." },
      { icon: "FileText", title: "ISO 27001", desc: "Information security management certified end-to-end." },
      { icon: "Globe2", title: "GDPR + DPDP aligned", desc: "DPO-led program with regional subprocessors disclosed." },
      { icon: "Lock", title: "Data Processing Addendum", desc: "Standard contractual clauses available on request." },
      { icon: "Activity", title: "Live status page", desc: "Real-time component status with subscription notifications." },
    ],
  },
  "company-overview": {
    eyebrow: "COMPANY", title: "Track The Breach at a glance.", icon: "Building2",
    subtitle: "A global team of cybersecurity veterans, OSINT researchers, and AI scientists building the next-generation operating system for personal cybersecurity.",
    features: [
      { icon: "Users", title: "50+ team members", desc: "Across India, US, UK, UAE, and Singapore." },
      { icon: "Globe2", title: "Customers in 50+ countries", desc: "From individuals to Fortune 500 enterprises." },
      { icon: "TrendingUp", title: "Triple-digit ARR growth", desc: "Consistent quarter-over-quarter net retention above 130%." },
      { icon: "ShieldCheck", title: "Backed by tier-1 investors", desc: "Cybersecurity-focused venture funds with public security operators." },
      { icon: "Brain", title: "AI-native R&D", desc: "20+ engineers and researchers in AI, ML, and offensive security." },
      { icon: "Building2", title: "Global HQ in Bengaluru", desc: "With satellite presence in NYC, London, and Singapore." },
    ],
  },
  "cybersecurity-future": {
    eyebrow: "FUTURE", title: "Where cybersecurity is heading — and how we're getting there first.", icon: "Sparkles",
    subtitle: "AI-augmented attackers, deepfake fraud at scale, and identity-driven cyberwarfare define the next decade. Our roadmap is built around the threats your team will face in 2026 and beyond.",
    features: [
      { icon: "Brain", title: "Agentic defense AI", desc: "Autonomous agents that detect, contain, and remediate without human action." },
      { icon: "VideoOff", title: "Deepfake-resistant identity", desc: "Liveness-aware identity proofs to neutralize synthetic media attacks." },
      { icon: "Network", title: "Quantum-safe pipelines", desc: "Post-quantum crypto rolled into our zero-knowledge architecture." },
      { icon: "Globe2", title: "Sovereign data planes", desc: "Country-pinned tenants for government and defense customers." },
      { icon: "ShieldAlert", title: "Cross-domain fusion", desc: "Identity, infrastructure, and supply-chain risk in one unified plane." },
      { icon: "Sparkles", title: "Public-good intelligence", desc: "Anonymized threat feeds donated to nonprofit defenders worldwide." },
    ],
  },
  // ENTERPRISE
  "executive-protection": {
    eyebrow: "ENTERPRISE", title: "Executive Protection.", icon: "Crown",
    subtitle: "Concierge-grade digital protection for C-suite executives, founders, and board members of high-profile organizations.",
    features: [
      { icon: "Crown", title: "Named security analyst", desc: "Dedicated analyst on call 24/7 for your protected principals." },
      { icon: "Phone", title: "Crisis hotline", desc: "Sub-15-minute escalation for credible threats." },
      { icon: "MapPin", title: "Pre-travel briefs", desc: "Threat assessments before high-risk travel itineraries." },
      { icon: "Users", title: "Family extension", desc: "Optional coverage for spouse, children, and parents." },
      { icon: "ShieldAlert", title: "Threat-actor attribution", desc: "Tie observed activity back to known threat groups when possible." },
      { icon: "FileText", title: "Board-ready reports", desc: "Quarterly executive risk briefings for board committees." },
    ],
  },
  "employee-monitoring": {
    eyebrow: "ENTERPRISE", title: "Employee Identity Monitoring.", icon: "Users",
    subtitle: "Bulk monitoring of workforce identifiers with HR-aware workflows and SIEM-native delivery.",
    features: [
      { icon: "Users", title: "HRIS sync", desc: "Workday, BambooHR, Rippling, SAP SuccessFactors integrations." },
      { icon: "Workflow", title: "Auto-onboarding", desc: "New employees enrolled in monitoring at provisioning time." },
      { icon: "Bell", title: "Manager-routed alerts", desc: "Escalations routed via org tree with privacy controls." },
      { icon: "FileText", title: "Privacy-preserving reports", desc: "Aggregate org metrics without exposing individual data." },
      { icon: "Lock", title: "Works-council friendly", desc: "Configurable EU-style works-council compliance modes." },
      { icon: "TrendingDown", title: "Risk reduction KPIs", desc: "Track workforce exposure reduction quarter over quarter." },
    ],
  },
  "brand-protection": {
    eyebrow: "ENTERPRISE", title: "Brand & Domain Protection.", icon: "Sparkles",
    subtitle: "Detect typosquatting, brand impersonation, fake support accounts, phishing kits, and counterfeit ads — globally.",
    features: [
      { icon: "Globe", title: "Domain & SSL monitoring", desc: "Watch for typosquats and newly registered look-alikes." },
      { icon: "AtSign", title: "Social brand sweeps", desc: "30+ platforms scanned daily for impersonator accounts." },
      { icon: "ShieldAlert", title: "Phishing kit detection", desc: "Catch live phishing kits using your brand assets." },
      { icon: "FileText", title: "Managed takedowns", desc: "Hosting providers, registrars, and platforms — we handle it." },
      { icon: "TrendingUp", title: "Counterfeit ad watch", desc: "Detect paid ads abusing your brand on Meta, X, Google." },
      { icon: "Activity", title: "Brand-trust analytics", desc: "Quantify how impersonation impacts customer trust over time." },
    ],
  },
  "enterprise-monitoring": {
    eyebrow: "ENTERPRISE", title: "Enterprise Monitoring Platform.", icon: "Landmark",
    subtitle: "Unified visibility across workforce, executives, brand, domains, and third-party suppliers — at global scale.",
    features: [
      { icon: "Landmark", title: "Org-wide identity graph", desc: "Workforce + execs + brand + suppliers unified in one view." },
      { icon: "Building2", title: "Subsidiary management", desc: "Hierarchical org structures with rollup and tenant isolation." },
      { icon: "Workflow", title: "Native SIEM integration", desc: "Splunk, Sentinel, Chronicle, Elastic, Sumo Logic." },
      { icon: "ShieldCheck", title: "Custom severity policies", desc: "Tune risk thresholds per business unit or geography." },
      { icon: "FileText", title: "Quarterly business reviews", desc: "Strategic reviews tied to your risk posture goals." },
      { icon: "Phone", title: "Named CSM + engineer", desc: "Quarterly strategy reviews and architecture co-design." },
    ],
  },
  "incident-intelligence": {
    eyebrow: "ENTERPRISE", title: "Incident Intelligence.", icon: "AlertTriangle",
    subtitle: "When a breach happens, every minute matters. Track The Breach plugs into your IR workflow with real-time intel and post-incident forensics.",
    features: [
      { icon: "AlertTriangle", title: "Pre-IR triage", desc: "Surface impacted identities the moment a breach is suspected." },
      { icon: "Workflow", title: "IR platform integrations", desc: "Tines, Cortex XSOAR, Sentinel SOAR, ServiceNow SecOps." },
      { icon: "FileText", title: "Forensics-grade evidence", desc: "Cryptographically anchored captures preserve chain of custody." },
      { icon: "Phone", title: "Retainer-grade response", desc: "Sub-15-minute SLA on critical incident pages." },
      { icon: "Users", title: "Affected-employee outreach", desc: "Privacy-preserving notification workflows for impacted staff." },
      { icon: "TrendingDown", title: "Post-incident analytics", desc: "Quantify breach impact and recovery progress over time." },
    ],
  },
  "identity-protection-for-business": {
    eyebrow: "ENTERPRISE", title: "Identity Protection for Business.", icon: "Building2",
    subtitle: "Everything your business needs to defend the human attack surface — workforce, executives, brand, and supply chain.",
    features: [
      { icon: "Users", title: "Workforce protection", desc: "Bulk identity monitoring tied to your HRIS." },
      { icon: "Crown", title: "Executive protection", desc: "VIP-tier coverage for high-value targets." },
      { icon: "Sparkles", title: "Brand protection", desc: "Domains, social, ads, and impersonation defense." },
      { icon: "Network", title: "Supply-chain risk", desc: "Monitor third-party vendor breach exposure tied to your org." },
      { icon: "FileText", title: "Compliance evidence", desc: "Pre-built packs for SOC 2, ISO, GDPR, DPDP." },
      { icon: "Workflow", title: "SIEM/SOAR native", desc: "Drop intel into your stack with native connectors." },
    ],
  },
  // SEO PAGES
  "check-email-breach": {
    eyebrow: "SEO", title: "Check If My Email Was Breached.", icon: "Mail",
    subtitle: "Run a free exposure scan across 1.6B+ records and 2,000+ data sources to see if your email address has been compromised.",
    seo: true,
    features: [
      { icon: "Search", title: "Instant lookup", desc: "Results in under 90 seconds — no signup required for a one-time scan." },
      { icon: "Database", title: "1.6B+ records", desc: "Largest aggregated breach dataset in its category." },
      { icon: "ShieldCheck", title: "Privacy-safe", desc: "Your email is hashed in your browser before scanning." },
      { icon: "Bell", title: "Optional monitoring", desc: "Upgrade to continuous monitoring with alerts in seconds." },
      { icon: "FileText", title: "PDF report", desc: "Beautiful, shareable PDF you can keep for your records." },
      { icon: "Brain", title: "AI risk score", desc: "Get a 0–100 score reflecting the severity of your exposure." },
    ],
  },
  "email-leak-checker": {
    eyebrow: "SEO", title: "Email Leak Checker.", icon: "Mail",
    subtitle: "Discover where your email addresses have leaked, what data was exposed, and how to lock it down — all in one report.",
    seo: true,
    features: [
      { icon: "Mail", title: "Multi-email lookup", desc: "Scan up to 5 emails in a single free report." },
      { icon: "FileWarning", title: "What was leaked", desc: "See exactly which fields (password, IP, phone, DOB) leaked per breach." },
      { icon: "Activity", title: "Recency timeline", desc: "Sort leaks by recency to prioritize what to address first." },
      { icon: "ShieldCheck", title: "Remediation guide", desc: "Step-by-step instructions for every leak we surface." },
      { icon: "Database", title: "Dark-web coverage", desc: "Includes credential broker and combo-list visibility." },
      { icon: "Lock", title: "Zero-knowledge by design", desc: "Your email never reaches our servers in plaintext." },
    ],
  },
  "phone-leak-checker": {
    eyebrow: "SEO", title: "Phone Number Leak Checker.", icon: "Phone",
    subtitle: "Find out if your phone number has been exposed in breach dumps, scam databases, or SIM swap signals.",
    seo: true,
    features: [
      { icon: "Phone", title: "Global telco coverage", desc: "Carriers across 50+ countries, including India, US, EU, MENA." },
      { icon: "RefreshCw", title: "SIM swap risk", desc: "Behavioral telemetry suggests when a SIM swap attempt is likely." },
      { icon: "MessageSquare", title: "Smishing intel", desc: "Detect active SMS scams using your number." },
      { icon: "FileWarning", title: "Scam database matches", desc: "Cross-checked against community-reported scam phone numbers." },
      { icon: "Bell", title: "Real-time alerts", desc: "Upgrade for SMS-fast alerts when new exposures surface." },
      { icon: "Lock", title: "Hashed-input scanning", desc: "Your phone number is hashed before ever leaving your device." },
    ],
  },
  "digital-identity-protection": {
    eyebrow: "SEO", title: "Digital Identity Protection.", icon: "ShieldCheck",
    subtitle: "Defend your digital identity with AI-powered monitoring across email, phone, ID, photo, video, and dark web — all in one platform.",
    seo: true,
    features: [
      { icon: "Brain", title: "AI-powered defense", desc: "Predictive scoring across 2,000+ data sources." },
      { icon: "ShieldCheck", title: "Multi-layered coverage", desc: "8 product modules, 1 unified identity graph." },
      { icon: "Activity", title: "24/7 monitoring", desc: "Always-on sweeps so you never miss a new exposure." },
      { icon: "FileText", title: "Professional reports", desc: "Court-ready PDFs ideal for legal, HR, and IR workflows." },
      { icon: "Globe2", title: "Global coverage", desc: "50+ countries with regional data residency options." },
      { icon: "Lock", title: "Privacy-first", desc: "Zero-knowledge architecture by default." },
    ],
  },
  "identity-theft-protection": {
    eyebrow: "SEO", title: "Identity Theft Protection.", icon: "Fingerprint",
    subtitle: "Stop identity theft before it starts. Continuous monitoring, breach alerts, and managed takedowns — all in one place.",
    seo: true,
    features: [
      { icon: "Fingerprint", title: "Identity graph", desc: "We map every place your identity exists across the internet." },
      { icon: "Bell", title: "Real-time alerts", desc: "Get notified the moment a new threat appears." },
      { icon: "ShieldCheck", title: "Managed takedowns", desc: "We file and pursue takedowns end-to-end." },
      { icon: "FileText", title: "Recovery support", desc: "Step-by-step recovery playbooks tailored to your jurisdiction." },
      { icon: "Phone", title: "Concierge support", desc: "Upgrade to Full Secure for analyst-led recovery." },
      { icon: "Lock", title: "Privacy-first", desc: "Zero-knowledge architecture by default." },
    ],
  },
  "online-privacy-protection": {
    eyebrow: "SEO", title: "Online Privacy Protection.", icon: "Lock",
    subtitle: "Reduce your digital footprint, remove yourself from people-finder sites, and stay private in a world that wants your data.",
    seo: true,
    features: [
      { icon: "Lock", title: "People-finder cleanup", desc: "Submit deletion requests across 200+ data brokers." },
      { icon: "Network", title: "Footprint reduction score", desc: "Quantify how much of your footprint you've removed each month." },
      { icon: "MapPin", title: "Geo-exposure timeline", desc: "Find historical locations leaked through metadata." },
      { icon: "Search", title: "Forgotten account discovery", desc: "Find old accounts you forgot existed." },
      { icon: "ShieldCheck", title: "Privacy-action plans", desc: "Step-by-step guides for every cleanup task." },
      { icon: "Bell", title: "Re-listing alerts", desc: "Get notified if a removed listing reappears." },
    ],
  },
  "personal-cybersecurity": {
    eyebrow: "SEO", title: "Personal Cybersecurity.", icon: "Shield",
    subtitle: "Enterprise-grade cybersecurity, packaged for individuals. Continuous protection, AI risk scoring, and human-friendly remediation.",
    seo: true,
    features: [
      { icon: "Shield", title: "Enterprise-grade tech", desc: "The same engine we sell to Fortune 500 — packaged for you." },
      { icon: "Brain", title: "AI risk score", desc: "A simple 0–100 number you can act on each week." },
      { icon: "Bell", title: "Real-time alerts", desc: "Push, SMS, email — pick the channel that fits your life." },
      { icon: "Smartphone", title: "iOS + Android apps", desc: "Biometric login and one-tap remediation on the go." },
      { icon: "FileText", title: "Monthly identity report", desc: "Beautiful PDFs that show how your protection improves." },
      { icon: "Phone", title: "Human help when you need it", desc: "Optional concierge analysts via Full Secure plans." },
    ],
  },
  "deepfake-detection": {
    eyebrow: "SEO", title: "Deepfake Detection.", icon: "VideoOff",
    subtitle: "Spot AI-generated videos and synthetic audio using your face or voice — before they reach your audience.",
    seo: true,
    features: [
      { icon: "VideoOff", title: "Generative-AI detectors", desc: "Models trained to flag the latest diffusion- and GAN-based forgeries." },
      { icon: "Sparkles", title: "Voice clone detection", desc: "Catch synthetic voices in interviews, podcasts, and ads." },
      { icon: "Eye", title: "Likeness fingerprinting", desc: "Biometric anchors match you even in compressed, edited footage." },
      { icon: "Globe", title: "Cross-platform sweep", desc: "YouTube, TikTok, X, Instagram, Telegram, Rumble & more." },
      { icon: "FileText", title: "Takedown workflow", desc: "DMCA + platform-specific filings handled end-to-end." },
      { icon: "Activity", title: "Continuous monitoring", desc: "24/7 sweeps catch new deepfakes within minutes of upload." },
    ],
  },
  "fake-profile-detection": {
    eyebrow: "SEO", title: "Fake Profile Detection.", icon: "UserX",
    subtitle: "Find and take down impersonator profiles using your name, photo, or brand across 30+ social platforms.",
    seo: true,
    features: [
      { icon: "UserX", title: "Impersonator sweeps", desc: "Daily scans for fake profiles using your likeness." },
      { icon: "AtSign", title: "30+ platforms", desc: "Instagram, X, TikTok, LinkedIn, YouTube, Facebook & more." },
      { icon: "Sparkles", title: "ML photo matching", desc: "Match cropped, mirrored, or recolored versions of your photos." },
      { icon: "FileText", title: "Managed takedowns", desc: "We file and pursue takedowns end to end." },
      { icon: "Bell", title: "Live alerts", desc: "Get notified the moment a new impersonator is detected." },
      { icon: "Activity", title: "Reputation analytics", desc: "Track how impersonation impacts your audience trust." },
    ],
  },
  "online-impersonation-detection": {
    eyebrow: "SEO", title: "Online Impersonation Detection.", icon: "Users",
    subtitle: "Catch online impersonators — fraudsters, scammers, and bots — using your identity across forums, marketplaces, and social media.",
    seo: true,
    features: [
      { icon: "Users", title: "Cross-platform sweep", desc: "Coverage across social, forums, marketplaces, and dating apps." },
      { icon: "Brain", title: "Behavioral matching", desc: "Beyond photos: matches based on bio, posting style, and timing." },
      { icon: "ShieldAlert", title: "Fraud scoring", desc: "Surfaces high-risk impersonators most likely to harm you." },
      { icon: "FileText", title: "Evidence vault", desc: "Hash-stamped captures for legal action if needed." },
      { icon: "Bell", title: "Live alerts", desc: "Get notified the moment a new impersonator surfaces." },
      { icon: "Activity", title: "Takedown tracking", desc: "End-to-end visibility into takedown progress." },
    ],
  },
  "data-breach-monitoring": {
    eyebrow: "SEO", title: "Data Breach Monitoring.", icon: "Database",
    subtitle: "Continuous monitoring of public and private breach databases — so you find out about exposures before attackers do.",
    seo: true,
    features: [
      { icon: "Database", title: "1.6B+ records", desc: "Largest aggregated dataset of its category." },
      { icon: "Activity", title: "Continuous ingest", desc: "New breaches ingested within minutes of disclosure." },
      { icon: "Bell", title: "Real-time alerts", desc: "Sub-minute alerts on critical findings." },
      { icon: "ShieldCheck", title: "Severity scoring", desc: "AI-driven prioritization to highlight the most urgent breaches." },
      { icon: "FileText", title: "Breach intel reports", desc: "Read the full breach context, attribution, and impact." },
      { icon: "Lock", title: "Zero-knowledge", desc: "Hashed-input scanning so your identifiers stay private." },
    ],
  },
  "government-id-exposure": {
    eyebrow: "SEO", title: "Government ID Exposure.", icon: "BadgeCheck",
    subtitle: "Detect when Aadhaar, PAN, passport, driver's license, or 30+ other national IDs are exposed online.",
    seo: true,
    features: [
      { icon: "BadgeCheck", title: "30+ ID types", desc: "India, US, EU, MENA, SEA national IDs covered." },
      { icon: "Lock", title: "Tokenized scanning", desc: "IDs tokenized client-side. We never see your raw ID number." },
      { icon: "ShieldAlert", title: "Synthetic identity detection", desc: "Catch combinations of your ID with fabricated data." },
      { icon: "FileWarning", title: "KYC leak detection", desc: "Flag KYC document leaks from compromised vendors." },
      { icon: "Globe2", title: "Government liaison", desc: "Guidance on filing reports with CERT-In, FTC, NCSC equivalents." },
      { icon: "Activity", title: "Continuous re-verification", desc: "Re-scan every 6 hours for newly surfaced fragments." },
    ],
  },
  "photo-misuse-detection": {
    eyebrow: "SEO", title: "Photo Misuse Detection.", icon: "Camera",
    subtitle: "Find unauthorized use of your photos — on dating sites, NSFW networks, scam pages, and AI training datasets.",
    seo: true,
    features: [
      { icon: "Camera", title: "Reverse image graph", desc: "Find your photo wherever it appears, even modified." },
      { icon: "ShieldAlert", title: "Romance scam catches", desc: "Catch fake dating profiles using your photos." },
      { icon: "FileWarning", title: "NSFW network sweeps", desc: "Detect photos uploaded to adult sites without consent." },
      { icon: "Sparkles", title: "AI dataset opt-out", desc: "Submit removal requests across known training datasets." },
      { icon: "FileText", title: "DMCA workflow", desc: "One-click takedown filing with progress tracking." },
      { icon: "Lock", title: "Private vault", desc: "Photos stored encrypted, deleted on demand." },
    ],
  },
  "video-misuse-detection": {
    eyebrow: "SEO", title: "Video Misuse Detection.", icon: "Video",
    subtitle: "Track unauthorized re-uploads, deepfakes, and edited versions of your videos — across YouTube, TikTok, X, and more.",
    seo: true,
    features: [
      { icon: "Video", title: "Re-upload detection", desc: "Find unauthorized reposts even after edits and trims." },
      { icon: "VideoOff", title: "Deepfake detection", desc: "Catch synthetic videos using your likeness." },
      { icon: "Eye", title: "Likeness fingerprinting", desc: "Biometric anchors match across compression and filters." },
      { icon: "Globe", title: "Cross-platform sweep", desc: "YouTube, TikTok, X, Telegram, Rumble & more." },
      { icon: "FileText", title: "Managed takedowns", desc: "DMCA and platform-specific filings handled end-to-end." },
      { icon: "Activity", title: "Continuous monitoring", desc: "24/7 sweeps catch new uploads within minutes." },
    ],
  },
  "account-takeover-prevention": {
    eyebrow: "SEO", title: "Account Takeover Prevention.", icon: "LogIn",
    subtitle: "Stop account takeovers before they happen by monitoring credential exposure and behavioral risk signals.",
    seo: true,
    features: [
      { icon: "LogIn", title: "Credential exposure", desc: "Catch leaked passwords across combo-lists and credential brokers." },
      { icon: "ShieldOff", title: "Password reuse intel", desc: "Flag passwords reused across services so you can rotate." },
      { icon: "Brain", title: "Behavioral risk", desc: "AI-driven scoring of suspicious login patterns." },
      { icon: "Bell", title: "Real-time alerts", desc: "Sub-minute alerts on confirmed credential exposure." },
      { icon: "Workflow", title: "MFA recommendation engine", desc: "Personalized recommendations on where to harden auth." },
      { icon: "Lock", title: "Hashed-input scanning", desc: "Passwords never leave your device in plaintext." },
    ],
  },
  "whatsapp-scam-protection": {
    eyebrow: "SEO", title: "WhatsApp Scam Protection.", icon: "MessageSquare",
    subtitle: "Defend against WhatsApp scams, fake support accounts, OTP fraud, and impersonator chats targeting you and your family.",
    seo: true,
    features: [
      { icon: "MessageSquare", title: "Scam pattern detection", desc: "Identify common WhatsApp scam playbooks targeting your number." },
      { icon: "Phone", title: "OTP fraud monitoring", desc: "Detect unauthorized OTP requests tied to your number." },
      { icon: "Users", title: "Impersonator detection", desc: "Find WhatsApp accounts using your photo or name." },
      { icon: "ShieldAlert", title: "Family alerts", desc: "Notify family members when a scam targets your shared circle." },
      { icon: "FileText", title: "Reporting workflow", desc: "Streamlined reporting to WhatsApp and local CERT teams." },
      { icon: "Activity", title: "Continuous monitoring", desc: "24/7 sweep so new scams are caught fast." },
    ],
  },
  "sim-swap-protection": {
    eyebrow: "SEO", title: "SIM Swap Protection.", icon: "RefreshCw",
    subtitle: "Detect SIM swap risk signals before attackers hijack your phone number and lock you out of your accounts.",
    seo: true,
    features: [
      { icon: "RefreshCw", title: "SIM swap risk score", desc: "Behavioral telemetry indicates elevated SIM-swap probability." },
      { icon: "Phone", title: "Carrier-level signals", desc: "Carrier behavioral signals across 50+ countries." },
      { icon: "Bell", title: "Real-time alerts", desc: "Sub-minute alerts the moment risk indicators appear." },
      { icon: "ShieldAlert", title: "Pre-attack defense playbook", desc: "Step-by-step defense before an attack succeeds." },
      { icon: "Workflow", title: "Bank & telco coordination", desc: "Templates for coordinating defense with banks and carriers." },
      { icon: "Lock", title: "Zero-knowledge by default", desc: "Your number is hashed before scanning." },
    ],
  },
  "cyber-safety-families": {
    eyebrow: "SEO", title: "Cyber Safety for Families.", icon: "Users",
    subtitle: "Protect children, teens, parents, and partners with role-aware monitoring, kid-safety controls, and family-friendly reporting.",
    seo: true,
    features: [
      { icon: "Users", title: "Up to 6 family members", desc: "One subscription covers your entire household." },
      { icon: "Baby", title: "Kid-safety controls", desc: "Age-aware alerts and content guardians for minors." },
      { icon: "Heart", title: "Senior fraud protection", desc: "Scam and fraud detection tuned for seniors." },
      { icon: "ShieldAlert", title: "Romance scam defense", desc: "Catch fraudsters before they exploit loved ones." },
      { icon: "Smartphone", title: "Shared family app", desc: "One app, separate profiles, parental visibility." },
      { icon: "FileText", title: "Family report card", desc: "See how protection improves for each member over time." },
    ],
  },
  "executive-digital-protection": {
    eyebrow: "SEO", title: "Executive Digital Protection.", icon: "Crown",
    subtitle: "VIP-grade digital protection for executives, founders, and board members at high-profile organizations.",
    seo: true,
    features: [
      { icon: "Crown", title: "Concierge analyst", desc: "Named security analyst on call 24/7." },
      { icon: "Phone", title: "Crisis hotline", desc: "Sub-15-minute escalation for credible threats." },
      { icon: "MapPin", title: "Pre-travel briefs", desc: "Threat assessments before high-risk travel itineraries." },
      { icon: "Users", title: "Family extension", desc: "Optional coverage for spouse, children, parents." },
      { icon: "ShieldAlert", title: "Threat-actor attribution", desc: "Tie activity to known threat groups when possible." },
      { icon: "FileText", title: "Board-ready briefs", desc: "Quarterly executive risk briefings for board committees." },
    ],
  },
};

export const BLOG_POSTS = [
  { slug: "1.6b-records-breach-trends-2026", title: "What 1.6 billion breach records taught us about 2026's attack surface", category: "Threat Intelligence", date: "Feb 12, 2026", reading: "9 min read", excerpt: "We analyzed every record in our breach lake. Here's the picture of 2026's identity attack surface — and what to do about it.", tag: "threat-intel" },
  { slug: "ai-deepfake-defense-playbook", title: "The AI deepfake defense playbook for executives", category: "AI Threats", date: "Feb 04, 2026", reading: "7 min read", excerpt: "Generative video is good enough to fool boards, journalists, and family. Here's how to harden your defenses.", tag: "ai" },
  { slug: "anatomy-of-modern-sim-swap", title: "Anatomy of a modern SIM swap — and how to stop one", category: "Fraud Prevention", date: "Jan 29, 2026", reading: "11 min read", excerpt: "Behind the scenes of a real SIM-swap attack our team helped contain. Lessons for every defender.", tag: "fraud" },
  { slug: "dark-web-economics-2026", title: "Dark web economics 2026: what your data sells for now", category: "Dark Web", date: "Jan 21, 2026", reading: "6 min read", excerpt: "Prices for stolen identities have shifted sharply since 2024. Here's the new pricing landscape.", tag: "dark-web" },
  { slug: "dpdp-act-implications", title: "What the DPDP Act means for Indian businesses in 2026", category: "Privacy", date: "Jan 15, 2026", reading: "8 min read", excerpt: "A practical walkthrough of DPDP obligations and how to operationalize compliance fast.", tag: "privacy" },
  { slug: "case-study-fintech-impersonation", title: "Case study: defeating an executive impersonation campaign at a Series-C fintech", category: "Case Studies", date: "Jan 09, 2026", reading: "5 min read", excerpt: "14 dark-web listings tied to the CFO. How our team neutralized them in 72 hours.", tag: "case-studies" },
  { slug: "identity-theft-2026-mega-guide", title: "The 2026 identity theft prevention mega-guide", category: "Identity Theft", date: "Jan 02, 2026", reading: "14 min read", excerpt: "Everything you need to know to defend yourself, your family, and your team from identity theft in 2026.", tag: "guides" },
  { slug: "romance-scam-deep-dive", title: "Inside the romance scam economy", category: "Scams", date: "Dec 20, 2025", reading: "10 min read", excerpt: "A 6-month investigation into how romance scams are professionalized and industrialized today.", tag: "scams" },
  { slug: "credentials-breach-2025-review", title: "The credential exposure year-in-review: 2025", category: "Data Breaches", date: "Dec 14, 2025", reading: "9 min read", excerpt: "The biggest credential breaches of 2025 and what they tell us about the year ahead.", tag: "breaches" },
{ 
    slug: "seoul-ttareungi-bike-breach-fallout", 
    title: "Seoul bike-sharing service to compensate 4 million users after data breach", 
    category: "Data Breaches", 
    date: "Jul 21, 2026", 
    reading: "5 min read", 
    excerpt: "Over 4 million users affected by a 2024 data breach will receive 30-day passes for Seoul's Ttareungi bike-sharing service in a massive compensation rollout.", 
    tag: "breaches" 
  },
  { 
    slug: "unlimited-systems-healthcare-breach-2026", 
    title: "Unlimited Systems data breach exposes patient health and PII", 
    category: "Healthcare Threats", 
    date: "Jul 20, 2026", 
    reading: "6 min read", 
    excerpt: "A major healthcare software vendor discloses a breach nine months later, prompting class-action investigations over exposed medical and demographic data.", 
    tag: "privacy" 
  },
  { 
    slug: "hugging-face-ai-agent-breach", 
    title: "Hugging Face confirms data breach caused by autonomous AI agent", 
    category: "AI Threats", 
    date: "Jul 18, 2026", 
    reading: "8 min read", 
    excerpt: "The AI agentic attacker scenario is here. How an autonomous framework exploited dataset-processing pipelines to breach production infrastructure.", 
    tag: "ai" 
  },
  { 
    slug: "go2-health-brisbane-delayed-disclosure", 
    title: "GO2 Health clinic waited almost three months to alert hacked patients", 
    category: "Compliance & Regulation", 
    date: "Jul 15, 2026", 
    reading: "5 min read", 
    excerpt: "A Brisbane medical clinic is under fire for delayed breach notification, highlighting the critical importance of rapid incident communication.", 
    tag: "compliance" 
  },
  { 
    slug: "q3-2026-ransomware-extortion-shifts", 
    title: "Q3 2026 Ransomware trends: The shift to pure extortion", 
    category: "Threat Intelligence", 
    date: "Jul 12, 2026", 
    reading: "7 min read", 
    excerpt: "Encryption is becoming secondary. Threat actors in 2026 are increasingly relying on pure data-exfiltration and multi-tiered extortion models.", 
    tag: "threat-intel" 
  },
  { 
    slug: "supply-chain-attacks-saas-2026", 
    title: "SaaS supply chain attacks: Defending the interconnected enterprise", 
    category: "Platform Security", 
    date: "Jul 05, 2026", 
    reading: "9 min read", 
    excerpt: "Third-party vendor compromise remains the top initial access vector in 2026. Here is how to audit your shadow IT and SaaS sprawl.", 
    tag: "guides" 
  },
  { 
    slug: "synthetic-identity-fraud-banking", 
    title: "Synthetic identity fraud is costing banks billions in 2026", 
    category: "Fraud Prevention", 
    date: "Jun 28, 2026", 
    reading: "10 min read", 
    excerpt: "Criminals are combining real ID fragments with AI-generated personas to build synthetic credit profiles. How financial institutions are fighting back.", 
    tag: "fraud" 
  },
  { 
    slug: "post-quantum-cryptography-timeline", 
    title: "The CISO's timeline for Post-Quantum Cryptography (PQC)", 
    category: "Future Threats", 
    date: "Jun 22, 2026", 
    reading: "8 min read", 
    excerpt: "With NIST finalizing algorithms, the 'harvest now, decrypt later' threat is accelerating. It's time to inventory your cryptographic assets.", 
    tag: "guides" 
  },
  { 
    slug: "zero-trust-cloud-infrastructure", 
    title: "Why legacy VPNs are dead: The era of Universal Zero Trust", 
    category: "Architecture", 
    date: "Jun 15, 2026", 
    reading: "7 min read", 
    excerpt: "Perimeter security failed the modern remote workforce. A deep dive into identity-aware proxies and continuous authentication.", 
    tag: "architecture" 
  },
  { 
    slug: "dark-web-botnet-rentals", 
    title: "Residential proxies and botnets: The new dark web gig economy", 
    category: "Dark Web", 
    date: "Jun 08, 2026", 
    reading: "6 min read", 
    excerpt: "Attackers are renting out compromised smart TVs and IoT devices by the hour to bypass IP blacklists. Inside the underground proxy market.", 
    tag: "dark-web" 
  }
  { 
    slug: "june-2026-stealer-logs-56m-emails", 
    title: "The June 2026 Stealer Logs: 56 million emails exposed", 
    category: "Data Breaches", 
    date: "Jun 20, 2026", 
    reading: "7 min read", 
    excerpt: "A massive corpus of aggregated info-stealer logs surfaced this month, exposing 56 million unique email addresses and 124 million passwords.", 
    tag: "breaches" 
  },
  { 
    slug: "navia-api-breach-phone-numbers", 
    title: "Unsecured APIs: How Navia exposed 2.7 million phone numbers", 
    category: "API Security", 
    date: "May 28, 2026", 
    reading: "6 min read", 
    excerpt: "A misconfigured API endpoint led to the compromise of 2.7 million individuals' contact details and SSNs. A breakdown of the Navia breach.", 
    tag: "threat-intel" 
  },
  { 
    slug: "verizon-dbir-2026-smishing-rise", 
    title: "2026 DBIR Insights: Why stolen phone numbers are the new primary target", 
    category: "Threat Intelligence", 
    date: "May 15, 2026", 
    reading: "8 min read", 
    excerpt: "Verizon's 2026 Data Breach Investigations Report highlights a massive shift: attackers are abandoning traditional email phishing in favor of mobile SMS attacks.", 
    tag: "threat-intel" 
  },
  { 
    slug: "synthient-credential-stuffing-2-billion", 
    title: "The Synthient leak: 2 billion credentials fueling 2026's stuffing attacks", 
    category: "Dark Web", 
    date: "Apr 22, 2026", 
    reading: "9 min read", 
    excerpt: "A staggering 2-billion record database of email-password pairs surfaced on the dark web. How this mega-breach is driving a surge in automated account takeovers.", 
    tag: "dark-web" 
  },
  { 
    slug: "dentaquest-vendor-breach-contact-data", 
    title: "Third-party peril: DentaQuest breach leaks 2.6M contact records", 
    category: "Healthcare Threats", 
    date: "Jun 03, 2026", 
    reading: "5 min read", 
    excerpt: "Emails, phone numbers, and Medicaid IDs for 2.6 million patients were exfiltrated in one of the largest dental benefits administrator breaches of 2026.", 
    tag: "case-studies" 
  }
{ 
    slug: "craneware-healthcare-supply-chain-breach", 
    title: "Healthcare supply chain attack: Craneware confirms major data breach", 
    category: "Healthcare Threats", 
    date: "Jul 20, 2026", 
    reading: "6 min read", 
    excerpt: "British healthcare software firm Craneware, which services thousands of US hospitals, confirms a breach exposing customer, employee, and partner data.", 
    tag: "breaches" 
  },
  { 
    slug: "india-nuclear-plant-reliance-data-leak", 
    title: "Dark web leak exposes blueprints for India's largest nuclear plant", 
    category: "Critical Infrastructure", 
    date: "Jul 15, 2026", 
    reading: "8 min read", 
    excerpt: "The World Leaks ransomware group published 14.3 GB of sensitive blueprints and meeting records for the Kudankulam Nuclear Power Plant after breaching a third-party contractor.", 
    tag: "dark-web" 
  },
  { 
    slug: "tata-electronics-world-leaks-ransomware", 
    title: "Tata Electronics investigates massive ransomware data leak", 
    category: "Manufacturing Security", 
    date: "Jul 17, 2026", 
    reading: "7 min read", 
    excerpt: "Over 200,000 files—including alleged Apple and Tesla component designs—have been published by the World Leaks extortion cartel.", 
    tag: "threat-intel" 
  },
  { 
    slug: "bajaj-auto-ransomware-incident", 
    title: "Pune-based Bajaj Auto hit by targeted ransomware attack", 
    category: "Automotive Threats", 
    date: "Jul 18, 2026", 
    reading: "5 min read", 
    excerpt: "One of India's largest automakers disclosed a significant ransomware incident affecting its IT infrastructure and its technology subsidiary.", 
    tag: "case-studies" 
  },
  { 
    slug: "oxford-university-careerconnect-breach", 
    title: "Oxford University discloses data breach via third-party careers platform", 
    category: "Education Security", 
    date: "Jul 16, 2026", 
    reading: "5 min read", 
    excerpt: "Student PII and encrypted passwords were stolen after hackers compromised a third-party vendor servicing multiple major UK universities.", 
    tag: "privacy" 
  }
{ 
    slug: "dhs-hsin-breach-world-cup", 
    title: "DHS confirms breach of Homeland Security Information Network (HSIN)", 
    category: "Government Threats", 
    date: "Jul 18, 2026", 
    reading: "7 min read", 
    excerpt: "An unauthorized third-party breached a critical DHS information-sharing platform, potentially exposing security planning data for upcoming World Cup events.", 
    tag: "breaches" 
  },
  { 
    slug: "instructure-canvas-lms-shinyhunters", 
    title: "The Instructure LMS breach: 275 million edtech users exposed", 
    category: "Education Security", 
    date: "Jul 12, 2026", 
    reading: "8 min read", 
    excerpt: "The notorious ShinyHunters collective breached Instructure's Canvas platform, disrupting final exams and stealing data from millions of students and faculty.", 
    tag: "case-studies" 
  },
  { 
    slug: "servicenow-cve-2026-6875-active-exploitation", 
    title: "Active in the wild: Exploiting ServiceNow pre-auth RCE (CVE-2026-6875)", 
    category: "Vulnerability Intel", 
    date: "Jul 21, 2026", 
    reading: "6 min read", 
    excerpt: "Attackers are actively exploiting a critical pre-authentication vulnerability in the ServiceNow AI platform to execute code remotely. Patch immediately.", 
    tag: "threat-intel" 
  },
  { 
    slug: "clover-health-social-engineering-breach", 
    title: "Clover Health breach highlights the persistence of social engineering", 
    category: "Healthcare Threats", 
    date: "Jul 20, 2026", 
    reading: "5 min read", 
    excerpt: "A sophisticated social engineering campaign bypassed standard technical controls, compromising three employee accounts and exposing protected health information.", 
    tag: "privacy" 
  },
  { 
    slug: "accenture-source-code-azure-token-theft", 
    title: "Source code and Azure tokens: Inside the Accenture data theft claim", 
    category: "Cloud Security", 
    date: "Jul 09, 2026", 
    reading: "5 min read", 
    excerpt: "A threat actor claims to have exfiltrated 35GB of sensitive data, including Azure personal access tokens and SSH keys, from a private DevOps repository.", 
    tag: "cloud-security" 
  }
{ 
    slug: "singapore-telecom-unc3886-breach-2026", 
    title: "Operation CYBER GUARDIAN: Inside the breach of Singapore's telecom grid", 
    category: "Nation-State Threats", 
    date: "Jul 22, 2026", 
    reading: "8 min read", 
    excerpt: "A China-linked APT successfully compromised all four of Singapore's major telecommunications providers. How authorities executed an 11-month counter-operation to evict them.", 
    tag: "threat-intel" 
  },
  { 
    slug: "apac-deepfake-agentic-ai-fraud", 
    title: "Agentic AI and Deepfakes: The $25M Hong Kong scam is just the beginning", 
    category: "AI Threats", 
    date: "Jul 14, 2026", 
    reading: "7 min read", 
    excerpt: "INTERPOL reports a 600% surge in deepfake discussions among Southeast Asian threat actors. Inside the shift toward autonomous, AI-driven financial fraud in APAC.", 
    tag: "ai" 
  },
  { 
    slug: "australia-partnered-health-medicare-breach", 
    title: "Australian healthcare under fire: The Partnered Health Medicare breach", 
    category: "Healthcare Threats", 
    date: "Jul 10, 2026", 
    reading: "6 min read", 
    excerpt: "Following a ransomware intrusion, an Australian GP network confirmed the exposure of sensitive patient healthcare data, including Medicare and DVA numbers.", 
    tag: "privacy" 
  },
  { 
    slug: "indonesia-whatsapp-apk-sideloading-campaign", 
    title: "The $2 Million WhatsApp APK campaign targeting Indonesian banks", 
    category: "Mobile Security", 
    date: "Jun 25, 2026", 
    reading: "6 min read", 
    excerpt: "Threat actors abused 16 trusted government and financial brands in a massive social engineering campaign relying on malicious Android APK sideloading.", 
    tag: "fraud" 
  },
  { 
    slug: "thailand-ddos-india-gentlemen-ransomware", 
    title: "APAC threat landscape: Thailand's DDoS spike and 'The Gentlemen' ransomware", 
    category: "Threat Intelligence", 
    date: "Jun 18, 2026", 
    reading: "7 min read", 
    excerpt: "Regional intelligence reveals a massive 161% surge in hacktivist DDoS attacks hitting Thailand, while manufacturing sectors in India and Taiwan face a new ransomware syndicate.", 
    tag: "dark-web" 
  }
{ 
    slug: "building-realtime-identity-graph-scale", 
    title: "How we built a real-time identity graph for 1.6B breach records", 
    category: "Engineering", 
    date: "Jul 21, 2026", 
    reading: "10 min read", 
    excerpt: "A look inside Track The Breach's core data pipeline: sub-10ms query performance across billions of interconnected leaked identity fragments.", 
    tag: "tech" 
  },
  { 
    slug: "ciso-board-reporting-breach-exposure", 
    title: "How CISOs should present dark web exposure metrics to the board", 
    category: "Executive Defense", 
    date: "Jul 19, 2026", 
    reading: "6 min read", 
    excerpt: "Stop presenting raw breach counters. Here is the framework for translating identity exposure into business risk and capital allocation.", 
    tag: "guides" 
  },
  { 
    slug: "active-stealer-log-containment-checklist", 
    title: "The 30-minute stealer log containment checklist for IR teams", 
    category: "Incident Response", 
    date: "Jul 14, 2026", 
    reading: "5 min read", 
    excerpt: "When an active stealer log containing employee session cookies hits Telegram, every minute counts. Step-by-step triage for SOC leads.", 
    tag: "case-studies" 
  },
  { 
    slug: "threat-actor-profile-scattered-spider-2026", 
    title: "Threat actor breakdown: How Scattered Spider evolved in 2026", 
    category: "Threat Intelligence", 
    date: "Jul 08, 2026", 
    reading: "8 min read", 
    excerpt: "From SIM swapping to AI-voice helpdesk social engineering: an analysis of the adversary tactics, techniques, and procedures (TTPs).", 
    tag: "threat-intel" 
  },
  { 
    slug: "sec-72-hour-materiality-assessment-framework", 
    title: "Determining 'materiality' under SEC breach disclosure rules: A framework", 
    category: "Compliance", 
    date: "Jun 30, 2026", 
    reading: "7 min read", 
    excerpt: "A practical guide for security and legal teams to evaluate when a cybersecurity incident crosses the threshold of material impact.", 
    tag: "privacy" 
  }
  { slug: "what-is-a-data-breach", title: "What is a data breach? The ultimate guide", category: "Basics", date: "Jul 21, 2026", reading: "5 min read", excerpt: "A complete breakdown of what a data breach actually is, what gets stolen, and why it matters to your business.", tag: "education" },
  { slug: "how-hackers-steal-data", title: "How hackers do it: Anatomy of a cyberattack", category: "Basics", date: "Jul 20, 2026", reading: "7 min read", excerpt: "From phishing to info-stealers, here is exactly how threat actors bypass security to access your network.", tag: "education" },
  { slug: "what-is-cybercrime", title: "What is cybercrime and how is it organized today?", category: "Basics", date: "Jul 19, 2026", reading: "6 min read", excerpt: "Cybercrime is no longer a lone hacker in a basement. It is a multi-billion dollar industrial economy.", tag: "dark-web" },
  { slug: "how-to-handle-a-breach", title: "How to handle a cyberattack: First 24 hours", category: "Incident Response", date: "Jul 18, 2026", reading: "8 min read", excerpt: "Your network has been compromised. Here is the step-by-step playbook on how to contain the damage.", tag: "guides" },
  { slug: "us-sec-cyber-rules-2026", title: "USA Data Rules: The SEC 4-day disclosure mandate", category: "Compliance", date: "Jul 17, 2026", reading: "5 min read", excerpt: "Public companies in the US must disclose material breaches within 4 days. Here is what constitutes a material breach.", tag: "privacy" },
  { slug: "india-dpdp-cert-in-rules", title: "India Cybersecurity Rules: CERT-In and the DPDP Act", category: "Compliance", date: "Jul 16, 2026", reading: "7 min read", excerpt: "Indian businesses face strict 6-hour breach reporting to CERT-In, while preparing for full DPDP Act enforcement in 2027.", tag: "privacy" },
  { slug: "europe-gdpr-nis2-omnibus", title: "EU Rules 2026: The Digital Omnibus, GDPR, and NIS2", category: "Compliance", date: "Jul 15, 2026", reading: "6 min read", excerpt: "Europe is shifting its breach reporting timelines. Here is how the Digital Omnibus impacts GDPR and NIS2 obligations.", tag: "privacy" },
  { slug: "global-data-privacy-laws", title: "Comparing global data privacy laws in 2026", category: "Compliance", date: "Jul 14, 2026", reading: "9 min read", excerpt: "A cheat sheet comparing US, European, and Asian data protection and breach notification timelines.", tag: "privacy" },
  { slug: "cost-of-non-compliance", title: "The real cost of regulatory non-compliance", category: "Compliance", date: "Jul 13, 2026", reading: "4 min read", excerpt: "Regulatory fines are just the beginning. Understanding the hidden costs of failing to protect user data.", tag: "privacy" },
  { slug: "free-email-breach-check", title: "Why you should check if your email is breached", category: "FAQ", date: "Jul 12, 2026", reading: "3 min read", excerpt: "Checking your email against known leaks is step one of personal security. Here is how to do it safely.", tag: "guides" },
  { slug: "what-is-identity-exposure", title: "What is identity exposure?", category: "FAQ", date: "Jul 11, 2026", reading: "4 min read", excerpt: "It is more than just a leaked password. Identity exposure includes your digital and physical footprint.", tag: "education" },
  { slug: "password-reuse-danger", title: "The extreme danger of password reuse", category: "FAQ", date: "Jul 10, 2026", reading: "3 min read", excerpt: "Why using the same password for Netflix and your bank is a catastrophic security risk.", tag: "education" },
  { slug: "what-is-phishing", title: "Phishing 101: Spotting a fake email", category: "FAQ", date: "Jul 09, 2026", reading: "4 min read", excerpt: "Social engineering remains the top entry point for hackers. Learn the red flags of a modern phishing email.", tag: "education" },
  { slug: "hardware-mfa-vs-sms", title: "Why SMS MFA is failing in 2026", category: "FAQ", date: "Jul 08, 2026", reading: "5 min read", excerpt: "Text-message security codes are easily intercepted via SIM swapping. It is time to upgrade to hardware keys.", tag: "guides" },
  { slug: "stealer-malware-explained", title: "What is infostealer malware?", category: "FAQ", date: "Jul 07, 2026", reading: "4 min read", excerpt: "The silent malware that steals your active browser cookies and bypasses your passwords entirely.", tag: "threat-intel" },
  { slug: "how-track-the-breach-supports-you", title: "How Track The Breach supports your security team", category: "Solutions", date: "Jul 06, 2026", reading: "5 min read", excerpt: "From real-time alerts to incident response assistance, here is how our platform defends your enterprise.", tag: "case-studies" },
  { slug: "continuous-dark-web-monitoring", title: "The value of continuous dark web monitoring", category: "Solutions", date: "Jul 05, 2026", reading: "4 min read", excerpt: "You can't fight what you can't see. How our sensors detect your exposed corporate credentials in real time.", tag: "tech" },
  { slug: "executive-digital-protection", title: "Protecting the C-Suite: Executive digital protection", category: "Solutions", date: "Jul 04, 2026", reading: "5 min read", excerpt: "Hackers target leadership. How Track The Breach sanitizes the digital footprint of your highest-value targets.", tag: "case-studies" },
  { slug: "smb-cybersecurity-solutions", title: "Enterprise-grade breach protection for SMBs", category: "Solutions", date: "Jul 03, 2026", reading: "4 min read", excerpt: "Small businesses are the primary target of ransomware. How our platform scales to protect growing teams.", tag: "tech" },
  { slug: "track-the-breach-api-integration", title: "Automate your defense with the Track The Breach API", category: "Solutions", date: "Jul 02, 2026", reading: "6 min read", excerpt: "Integrate our 1.6 billion record identity graph directly into your SIEM, SOAR, or custom application.", tag: "tech" }
{ 
    slug: "complete-data-breach-remediation-guide", 
    title: "My data was leaked in a breach: What to do next (Complete 2026 playbook)", 
    category: "Remediation", 
    date: "Jul 21, 2026", 
    reading: "7 min read", 
    excerpt: "Discovered your email, phone, or password on the dark web? Here is the step-by-step complete recovery playbook from Track The Breach.", 
    tag: "guides" 
  },
  { 
    slug: "end-to-end-enterprise-breach-response-solution", 
    title: "End-to-end breach solution for businesses: From exposure detection to full recovery", 
    category: "Enterprise Solutions", 
    date: "Jul 20, 2026", 
    reading: "9 min read", 
    excerpt: "When an exposure occurs, detection is only 10% of the battle. How Track The Breach delivers 360° containment, token neutralization, and board-level reporting.", 
    tag: "case-studies" 
  },
  { 
    slug: "how-to-remove-leaked-data-from-dark-web", 
    title: "Can you remove leaked data from the dark web? Myths vs. operational reality", 
    category: "Dark Web Defense", 
    date: "Jul 18, 2026", 
    reading: "6 min read", 
    excerpt: "A realistic breakdown of how to neutralize exposed credentials, file automated platform takedowns, and render dark web dumps useless to attackers.", 
    tag: "dark-web" 
  },
  { 
    slug: "complete-solution-for-breached-clients-and-users", 
    title: "Why point-solution alerts fail: The case for continuous identity neutralization", 
    category: "Solutions", 
    date: "Jul 15, 2026", 
    reading: "8 min read", 
    excerpt: "Getting a text saying 'your password was leaked' isn't a solution—it's a notification. Discover how Track The Breach automates active response.", 
    tag: "tech" 
  },
  { 
    slug: "post-breach-identity-restoration-playbook", 
    title: "Post-breach identity restoration: Protecting VIPs, executives, and users", 
    category: "Identity Protection", 
    date: "Jul 11, 2026", 
    reading: "6 min read", 
    excerpt: "How to lock down high-value targets, invalidate compromised stealer log cookies, and restore digital perimeter hygiene after a major leak.", 
    tag: "guides" 
  }
{ 
    slug: "fintech-api-abuse-2026", 
    title: "Why Fintechs are the #1 target for API abuse in 2026", 
    category: "Financial Services", 
    date: "Jul 22, 2026", 
    reading: "6 min read", 
    excerpt: "Financial APIs are under siege from automated botnets. Here is how threat actors bypass standard rate limiting to harvest financial data.", 
    tag: "finance" 
  },
  { 
    slug: "healthcare-black-market-value", 
    title: "The dark web economy: Why medical records cost 10x more than credit cards", 
    category: "Healthcare", 
    date: "Jul 20, 2026", 
    reading: "7 min read", 
    excerpt: "A deep dive into why protected health information (PHI) remains the most lucrative commodity for identity thieves and ransomware cartels.", 
    tag: "healthcare" 
  },
  { 
    slug: "ecommerce-botnet-defense", 
    title: "Defending retail: Credential stuffing and inventory denial in e-commerce", 
    category: "Retail", 
    date: "Jul 18, 2026", 
    reading: "5 min read", 
    excerpt: "How retail brands can protect their customer loyalty accounts and payment gateways from automated account takeover (ATO) attacks.", 
    tag: "retail" 
  },
  { 
    slug: "manufacturing-it-ot-convergence", 
    title: "Manufacturing at risk: The security cost of IT/OT convergence", 
    category: "Manufacturing", 
    date: "Jul 15, 2026", 
    reading: "8 min read", 
    excerpt: "When assembly lines connect to the cloud, air-gaps disappear. How to secure the modern smart factory from devastating ransomware downtime.", 
    tag: "manufacturing" 
  },
  { 
    slug: "law-firms-third-party-vector", 
    title: "Law firms in the crosshairs: The ultimate third-party risk", 
    category: "Professional Services", 
    date: "Jul 12, 2026", 
    reading: "6 min read", 
    excerpt: "Threat actors know legal practices hold the keys to M&A data and corporate secrets. How law firms must adapt to client security demands.", 
    tag: "case-studies" 
  }
];

export const JOBS = [
  { role: "Senior ML Engineer — Threat Intelligence", location: "Bengaluru / Remote", team: "AI Research" },
  { role: "Staff Security Engineer — Dark Web Sensors", location: "Remote (Global)", team: "Platform" },
  { role: "Lead Product Designer", location: "Bengaluru / NYC", team: "Design" },
  { role: "Enterprise Account Executive — EMEA", location: "London", team: "Sales" },
  { role: "Customer Success Manager — Enterprise", location: "Remote (US)", team: "Customer Success" },
  { role: "Incident Response Analyst (24/7 rotation)", location: "Bengaluru / NYC / London", team: "SOC" },
  { role: "Backend Engineer — Identity Graph", location: "Remote (Global)", team: "Engineering" },
  { role: "GTM Marketing Lead", location: "NYC / Bengaluru", team: "Marketing" },
];

// Full blog post bodies keyed by slug. Each entry is an array of content blocks.
export const BLOG_BODIES = {
  "1.6b-records-breach-trends-2026": {
    author: "Track The Breach Threat Research",
    blocks: [
      { type: "lead", text: "Across 2025 we ingested another 412 million breach records into our identity graph, pushing the total dataset past 1.6 billion. The patterns are clear — and uncomfortable." },
      { type: "h2", text: "1. Credential stealers are the new combo-lists" },
      { type: "p", text: "Info-stealer malware (RedLine, LummaC2, Vidar, StealC) now accounts for 61% of new credential exposures we see — up from 38% in 2023. Unlike traditional combo-lists, stealer logs include session cookies, MFA backup codes, and crypto wallet seeds, giving attackers same-day account takeover capability." },
      { type: "p", text: "Defensive takeaway: rotating passwords alone is no longer sufficient. Every breach-driven response must include forced session invalidation and an MFA reset for impacted users." },
      { type: "h2", text: "2. Phone-first attack chains are exploding" },
      { type: "p", text: "Phone-number exposures grew 117% YoY. Attackers chain leaked phone numbers with SIM-swap services on Telegram (averaging $250/swap) and OTP-interception kits to bypass SMS MFA." },
      { type: "h2", text: "3. Government IDs are the new gold standard" },
      { type: "p", text: "Aadhaar, PAN, passport, and SSN-tier identifiers are the highest-priced commodities on Tor markets — fetching 6–9× the price of an email-password pair. Synthetic identity fraud built on real government-ID fragments grew 84%." },
      { type: "h2", text: "Recommended defenses" },
      { type: "list", items: [
        "Treat session cookies as primary-tier secrets in your IR playbook",
        "Replace SMS MFA with WebAuthn/passkeys for any account holding financial value",
        "Apply continuous identity monitoring on the top 3 government IDs for your geography",
        "Watch credential brokers — not just paste sites — for early-warning intel",
      ]},
    ],
  },
  "ai-deepfake-defense-playbook": {
    author: "Track The Breach AI Lab",
    blocks: [
      { type: "lead", text: "Generative video has crossed the uncanny valley. Boards, journalists, and family members can no longer distinguish authentic recordings from synthetic ones — and attackers know it." },
      { type: "h2", text: "The 2026 deepfake threat surface" },
      { type: "p", text: "We track 3 attack patterns: (1) executive impersonation for wire fraud, (2) deepfake romance scams for retirement-age victims, and (3) synthetic 'leaked' content used for extortion. All three have moved from novelty to industrial scale in the last 18 months." },
      { type: "h2", text: "Defense layer 1 — pre-emptive likeness registration" },
      { type: "p", text: "Register your face, voice, and signature gestures with a likeness-protection platform before any incident. This builds the biometric baseline used to match (and refute) future synthetic content." },
      { type: "h2", text: "Defense layer 2 — verbal challenge-response codes" },
      { type: "p", text: "Establish a rotating pass-phrase between family members and key executives. Any unusual ask — wire transfers, address changes, gift-card requests — requires the spoken phrase before action." },
      { type: "h2", text: "Defense layer 3 — detection at the platform edge" },
      { type: "p", text: "Subscribe to deepfake-detection monitoring that scans YouTube, TikTok, X, and Telegram for synthetic uploads using your likeness. Time-to-takedown matters — most damage happens within the first 12 hours of upload." },
    ],
  },
  "anatomy-of-modern-sim-swap": {
    author: "Track The Breach Incident Response",
    blocks: [
      { type: "lead", text: "Last quarter our IR team helped contain a SIM-swap attack on a fintech founder. Here is the precise sequence — sanitized for OPSEC — and the controls that ultimately stopped it." },
      { type: "h2", text: "T-72h: reconnaissance" },
      { type: "p", text: "The attacker bought a $40 OSINT profile from a Telegram broker. It included the founder's phone number, carrier, address history, mother's maiden name (from a 2017 breach), and last-four of two credit cards." },
      { type: "h2", text: "T-0: social engineering the carrier" },
      { type: "p", text: "At 03:14 local time the attacker called the carrier impersonating the founder, used the OSINT data to pass verification, and ported the number to an attacker-controlled eSIM." },
      { type: "h2", text: "T+4min: account takeover attempts" },
      { type: "p", text: "Within four minutes the attacker requested password resets on Gmail, the founder's exchange account, and a bank. Two SMS OTPs were delivered to the attacker — but failed: the founder's accounts required hardware MFA (FIDO2 keys), not SMS." },
      { type: "h2", text: "What saved the founder" },
      { type: "list", items: [
        "Carrier-side SIM-PIN preventing port-out without an extra code",
        "Hardware MFA on all financial-grade accounts (SMS MFA disabled)",
        "Real-time SIM-swap monitoring alert from Track The Breach within 60 seconds",
        "Pre-arranged crisis playbook with the carrier fraud team",
      ]},
    ],
  },
  "dark-web-economics-2026": {
    author: "Track The Breach Dark Web Intelligence",
    blocks: [
      { type: "lead", text: "Stolen-data prices on Tor markets have shifted sharply since 2024. Here is the current pricing landscape — and what the numbers tell us about attacker priorities." },
      { type: "h2", text: "Email + password pairs" },
      { type: "p", text: "Down 47% in 2 years. Saturation. Combo-lists are abundant; the marginal price of one more email-password pair is close to zero. Implication: defenders should assume credential exposure is universal." },
      { type: "h2", text: "Session cookies (stealer logs)" },
      { type: "p", text: "Up 220%. Active session cookies are the new premium product because they bypass MFA entirely. Daily-refreshed cookie packs for SaaS apps now sell for $40–$120 each." },
      { type: "h2", text: "Government IDs" },
      { type: "p", text: "Stable-to-up. Aadhaar fragments $8–$15, PAN $5–$10, US SSN $4–$8, EU national IDs $10–$25. Bundles with selfie verification sell for 4–6× the base." },
      { type: "h2", text: "Deepfake commissions" },
      { type: "p", text: "A new category. Custom deepfake video of a named individual now starts at $200 for 30 seconds. Voice cloning is sub-$50 for a 60-second clip." },
    ],
  },
  "dpdp-act-implications": {
    author: "Track The Breach Privacy & Compliance",
    blocks: [
      { type: "lead", text: "India's Digital Personal Data Protection Act creates real obligations for any business processing Indian personal data — domestic or foreign. Here is the practical compliance playbook." },
      { type: "h2", text: "Who is in scope?" },
      { type: "p", text: "Any Data Fiduciary processing Indian residents' personal data — including SaaS, e-commerce, fintech, healthcare, edtech, and gaming. Extraterritorial reach: foreign companies offering goods/services to Indian users are covered." },
      { type: "h2", text: "Core obligations" },
      { type: "list", items: [
        "Clear, specific, granular consent — pre-checked boxes are not consent",
        "Data minimization: only collect what is needed for the stated purpose",
        "Breach notification to the Data Protection Board within prescribed timelines",
        "Appoint a Data Protection Officer for Significant Data Fiduciaries",
        "Honor user rights: access, correction, erasure, grievance redressal",
      ]},
      { type: "h2", text: "Operationalizing in 60 days" },
      { type: "p", text: "Run a data-flow inventory, map cross-border transfers, deploy a consent management platform, update your privacy notice, build a breach IR runbook, and train staff. Most teams underestimate the breach-notification workflow — automate it." },
    ],
  },
  "case-study-fintech-impersonation": {
    author: "Track The Breach Customer Success",
    blocks: [
      { type: "lead", text: "Within 24 hours of onboarding, Track The Breach surfaced 14 dark-web listings tied to a Series-C fintech's CFO. Here is how we shut them down inside 72 hours." },
      { type: "h2", text: "The discovery" },
      { type: "p", text: "Our continuous-monitoring sweep flagged a Telegram group selling 'verified' executive identities from the company — complete with email addresses, deepfake voice samples, and forged ID documents." },
      { type: "h2", text: "The response" },
      { type: "p", text: "We rotated impacted credentials, filed takedowns with platform legal teams, briefed the company's fraud-prevention vendor on the vector, and instrumented behavioral analytics on the CFO's accounts." },
      { type: "h2", text: "The outcome" },
      { type: "p", text: "Zero successful fraud attempts in the 90 days following discovery. The company's external attack-surface score improved 38 points on the Track The Breach risk model." },
    ],
  },
  "identity-theft-2026-mega-guide": {
    author: "Track The Breach Editorial",
    blocks: [
      { type: "lead", text: "Identity theft is no longer a single attack — it's a chain of small compromises that compound. This mega-guide walks through the modern landscape and how to defend each link." },
      { type: "h2", text: "Step 1: discover your exposure surface" },
      { type: "p", text: "Audit every email, phone, social handle, and ID number you have ever used. Run an exposure scan to see what already exists on the dark web. You can't defend what you can't see." },
      { type: "h2", text: "Step 2: cut off the easy attacks" },
      { type: "list", items: [
        "Replace SMS MFA with hardware keys or app-based MFA on every financial account",
        "Place credit freezes with all bureaus (US: Equifax, Experian, TransUnion; India: CIBIL)",
        "Enable carrier-side SIM-PIN and port-out lock",
        "Audit and revoke OAuth grants you no longer use",
      ]},
      { type: "h2", text: "Step 3: monitor continuously" },
      { type: "p", text: "Set up real-time monitoring on email, phone, government IDs, photo, and social handles. The earlier you catch a new exposure, the cheaper and easier the response." },
      { type: "h2", text: "Step 4: have an IR plan for when (not if) something happens" },
      { type: "p", text: "Pre-write your bank-fraud script, carrier-call script, and platform takedown templates. The first hour after discovery is decisive — don't waste it figuring out what to do." },
    ],
  },
  "romance-scam-deep-dive": {
    author: "Track The Breach Investigations",
    blocks: [
      { type: "lead", text: "Over six months our investigations team traced the structure of a global romance-scam ring that operates like a SaaS company. Here is what we found." },
      { type: "h2", text: "An industry, not a hobby" },
      { type: "p", text: "Modern romance scams are run by 8–25-person teams using shared scripts, deepfake video tooling, and translation pipelines. Average victim contact lasts 47 days before the first money request." },
      { type: "h2", text: "Defenses that actually work" },
      { type: "list", items: [
        "Mandate a live video call before any financial conversation",
        "Reverse-image search every profile photo within the first 3 days",
        "Refuse to move communication off the original platform too quickly",
        "Set a personal rule: no money transfers to anyone you haven't met in person",
      ]},
    ],
  },
  "credentials-breach-2025-review": {
    author: "Track The Breach Threat Research",
    blocks: [
      { type: "lead", text: "2025 was the year credential exposure became universal. We logged 1,247 publicly disclosed breaches and likely 10× that in undisclosed leaks." },
      { type: "h2", text: "Top 5 breaches by impact" },
      { type: "list", items: [
        "Global telco compromise — 184M records",
        "Healthcare insurer aggregator — 91M records",
        "Travel-booking platform — 76M records",
        "Crypto-exchange KYC leak — 38M records",
        "Government-payroll vendor — 14M records",
      ]},
      { type: "h2", text: "What to expect in 2026" },
      { type: "p", text: "Expect attackers to combine breach data with AI-driven targeting to deliver hyper-personalized phishing at industrial scale. The defense playbook shifts from 'detect bad emails' to 'eliminate identity exposure at the source.'" },
    ],
  },
  {
  "seoul-ttareungi-bike-breach-fallout": {
    author: "Track The Breach Threat Research",
    blocks: [
      { type: "lead", text: "In a massive compensation rollout, Seoul's public bike-sharing service, Ttareungi, has announced it will issue 30-day free passes to over 4 million users affected by a 2024 data breach." },
      { type: "h2", text: "The Breach Anatomy" },
      { type: "p", text: "In June 2024, two teenagers successfully compromised the Ttareungi server infrastructure, exfiltrating the personal data of approximately 4.62 million riders. The stolen data included account IDs, mobile phone numbers, physical addresses, dates of birth, and physical metrics like weight and gender." },
      { type: "p", text: "While the attackers were apprehended and referred to prosecutors early this year, the sheer volume of exposed data required extensive coordination with the National Police Agency and the Personal Information Protection Commission to finalize the impact radius." },
      { type: "h2", text: "The Fallout and Compensation" },
      { type: "p", text: "Beginning July 21, 2026, the Seoul Facilities Corporation initiated rolling text message notifications to affected users, detailing the specific data exposed and providing a 30-day bike pass (valued at approximately $3.40) via the app. While authorities report no evidence of secondary financial damage or dark web distribution, the incident underscores the vulnerability of municipal IoT and transit infrastructure to relatively unsophisticated threat actors." },
      { type: "h2", text: "Lessons for Municipal Platforms" },
      { type: "list", items: [
        "Audit and harden public-facing APIs, which are frequently targeted by script kiddies.",
        "Implement aggressive data minimization—ask if transit apps truly need user weight or exact birth dates.",
        "Ensure incident response plans include clear timelines for user notification to avoid multi-year regulatory drag."
      ]}
    ]
  },
  "unlimited-systems-healthcare-breach-2026": {
    author: "Track The Breach Privacy & Compliance",
    blocks: [
      { type: "lead", text: "Unlimited Technology Systems, a major healthcare software and revenue cycle management vendor, is facing class-action investigations following the disclosure of a data breach that exposed sensitive patient PII and PHI." },
      { type: "h2", text: "A Delayed Disclosure" },
      { type: "p", text: "According to filings with state attorney generals in July 2026, an unauthorized actor accessed Unlimited's commercial data center environment between October 5 and October 10, 2025. Despite discovering the intrusion on October 19, 2025, official disclosures and patient notifications were delayed by nearly nine months." },
      { type: "h2", text: "High-Value Data at Risk" },
      { type: "p", text: "The exposed data is highly lucrative for identity thieves. The breach compromised full names, Social Security numbers, dates of birth, scanned driver's licenses, patient intake forms, insurance policy numbers, and diagnosis information. Because Unlimited Systems acts as a vendor for healthcare providers nationwide, many affected patients had no direct relationship with the company." },
      { type: "h2", text: "The Third-Party Risk Epidemic" },
      { type: "p", text: "This incident highlights a recurring theme in 2026: threat actors are bypassing heavily defended hospitals and targeting their software supply chains. Defenders must enforce stringent vendor risk management (VRM) policies and require third-party suppliers to adhere to rigorous access controls and rapid-disclosure SLAs." }
    ]
  },
  "hugging-face-ai-agent-breach": {
    author: "Track The Breach AI Lab",
    blocks: [
      { type: "lead", text: "The cybersecurity industry has been warning about autonomous AI agents conducting cyberattacks. In 2026, Hugging Face confirmed that this theoretical threat is now a reality." },
      { type: "h2", text: "An Autonomous Attack Chain" },
      { type: "p", text: "Hugging Face recently disclosed that an attacker breached its production infrastructure using a fully autonomous agent framework. The intrusion began when a malicious dataset exploited two code-execution paths (a template injection and a remote code loader). From there, the agent took over, enacting thousands of individual actions across short-lived sandboxes." },
      { type: "p", text: "The AI agent successfully escalated privileges to node-level access, harvested cloud credentials, and moved laterally across internal clusters over a weekend, using a self-migrating command-and-control setup hosted on public services." },
      { type: "h2", text: "Supply Chain Ramifications" },
      { type: "p", text: "While Hugging Face confirmed their public-facing models and software supply chains were verified clean, the attack demonstrates the aggressive evolution of adversarial AI. Threat actors are no longer just using LLMs to write phishing emails; they are deploying agentic frameworks capable of dynamic lateral movement and privilege escalation." },
      { type: "h2", text: "Defensive Posture Updates" },
      { type: "list", items: [
        "Treat all external datasets and open-source models as untrusted executables.",
        "Deploy behavioral drift monitoring alongside traditional vulnerability scanning.",
        "Implement strict sandboxing and network isolation for machine learning training environments."
      ]}
    ]
  },
  "go2-health-brisbane-delayed-disclosure": {
    author: "Track The Breach Incident Response",
    blocks: [
      { type: "lead", text: "A prominent Brisbane medical clinic, GO2 Health, is facing heavy scrutiny after waiting nearly three months to notify patients that their sensitive medical records were compromised in a cyberattack." },
      { type: "h2", text: "The Cost of Silence" },
      { type: "p", text: "Timely breach notification is a cornerstone of modern data protection regulations. The delay by GO2 Health stripped patients of the crucial window needed to secure their identities, rotate compromised credentials, and monitor for medical identity fraud. Healthcare data—often containing detailed histories, billing info, and demographic data—is immediately monetized on dark web forums." },
      { type: "h2", text: "Regulatory Expectations in 2026" },
      { type: "p", text: "Regulators across APAC and globally are losing patience with delayed disclosures. Privacy commissioners expect organizations to notify affected individuals within 72 hours of confirming a high-risk exposure, even if the forensic investigation is still ongoing." },
      { type: "h2", text: "IR Playbook Takeaways" },
      { type: "p", text: "Organizations must have a communications plan drafted before an incident occurs. Legal teams, PR, and technical responders must align on a 'minimum viable notification' strategy that prioritizes user safety over corporate optics." }
    ]
  },
  "q3-2026-ransomware-extortion-shifts": {
    author: "Track The Breach Threat Intelligence",
    blocks: [
      { type: "lead", text: "The ransomware landscape in 2026 is virtually unrecognizable from five years ago. Threat actors are ditching complex encryption routines in favor of pure, multi-tiered data extortion." },
      { type: "h2", text: "Why Encryption is Fading" },
      { type: "p", text: "As enterprise backup strategies (like immutable storage) have matured, deploying encryptors has become a high-effort, low-reward tactic for attackers. It triggers immediate endpoint detection and response (EDR) alerts. Instead, attackers are focusing entirely on stealthy data exfiltration." },
      { type: "h2", text: "The Multi-Tiered Extortion Model" },
      { type: "p", text: "Today's cartels don't just threaten to leak data. They weaponize it. We are seeing threat actors email executives' families, contact regulatory bodies directly to trigger fines, and launch targeted deepfake harassment campaigns against board members if demands aren't met." }
    ]
  },
  "supply-chain-attacks-saas-2026": {
    author: "Track The Breach Platform Security",
    blocks: [
      { type: "lead", text: "Your perimeter is only as secure as the weakest SaaS app authenticated to your environment. In 2026, third-party compromise remains the undisputed king of initial access vectors." },
      { type: "h2", text: "The OAuth Blind Spot" },
      { type: "p", text: "Employees routinely grant read/write access to third-party productivity tools, calendar integrations, and AI writing assistants. When those vendors are breached, attackers inherit those OAuth tokens, bypassing traditional perimeter defenses and MFA entirely." },
      { type: "h2", text: "Defensive Recommendations" },
      { type: "list", items: [
        "Implement continuous OAuth token auditing and enforce strict least-privilege for API integrations.",
        "Establish an aggressive vendor off-boarding process.",
        "Monitor SaaS-to-SaaS communication logs for anomalous data transfer volumes."
      ]}
    ]
  },
  "synthetic-identity-fraud-banking": {
    author: "Track The Breach Fraud Prevention",
    blocks: [
      { type: "lead", text: "Synthetic identity fraud—where criminals stitch together real and fake information to create a 'new' person—is projected to cost the global banking sector billions by the end of 2026." },
      { type: "h2", text: "AI's Role in the Fraud Supply Chain" },
      { type: "p", text: "Fraudsters are utilizing generative AI to create consistent, hyper-realistic physical IDs, deepfake video verification streams, and synthetic credit histories. These \"Frankenstein\" identities are nurtured for months before busting out with massive loan defaults." },
      { type: "h2", text: "The Defense" },
      { type: "p", text: "Financial institutions are shifting from static identity checks to continuous behavioral biometrics. If an applicant's digital footprint looks too clean or lacks the chaotic normalcy of a real human's web history, trust scores are heavily penalized." }
    ]
  },
  "post-quantum-cryptography-timeline": {
    author: "Track The Breach Cryptography Lab",
    blocks: [
      { type: "lead", text: "The 'harvest now, decrypt later' threat model is forcing the hands of CISOs worldwide. With NIST finalizing Post-Quantum Cryptography (PQC) standards, the migration timeline starts now." },
      { type: "h2", text: "The Impending Threat" },
      { type: "p", text: "Nation-state actors are currently scraping and storing vast amounts of encrypted enterprise data. While unreadable today, this data will be instantly compromised the moment a cryptographically relevant quantum computer (CRQC) comes online." },
      { type: "h2", text: "Immediate Action Items" },
      { type: "p", text: "Enterprises must conduct a complete cryptographic inventory. You cannot migrate what you cannot see. Identify all instances of RSA and ECC across your network and begin working with vendors to establish a timeline for PQC integration." }
    ]
  },
  "zero-trust-cloud-infrastructure": {
    author: "Track The Breach Architecture",
    blocks: [
      { type: "lead", text: "The traditional VPN is dead. Replaced by Universal Zero Trust, modern infrastructure assumes the network is already hostile." },
      { type: "h2", text: "Beyond the Perimeter" },
      { type: "p", text: "Zero Trust Network Access (ZTNA) in 2026 relies on continuous, context-aware authentication. It evaluates the user's identity, device posture, geographic location, and behavioral biometrics on a per-request basis, rather than granting broad network access." },
      { type: "h2", text: "Implementation Challenges" },
      { type: "p", text: "The shift requires tearing down legacy technical debt. Organizations must untangle flat networks, categorize data access tiers, and deploy identity-aware proxies. The effort is substantial, but the resilience against lateral movement is unmatched." }
    ]
  },
  "dark-web-botnet-rentals": {
    author: "Track The Breach Dark Web Intelligence",
    blocks: [
      { type: "lead", text: "The dark web gig economy is booming. For less than $50 an hour, attackers can rent massive botnets comprised of compromised residential IoT devices to launch untraceable attacks." },
      { type: "h2", text: "The Rise of Residential Proxies" },
      { type: "p", text: "Traditional datacenter IPs are easily blocked by modern WAFs. To circumvent this, attackers infect smart TVs, routers, and refrigerators, routing malicious traffic through legitimate residential IP addresses. This makes credential stuffing and DDoS attacks incredibly difficult to distinguish from legitimate user traffic." },
      { type: "h2", text: "Defending Against the Swarm" },
      { type: "p", text: "Defenders must rely on advanced behavioral analytics rather than simple IP blacklists. Rate-limiting, CAPTCHA challenges on anomalous behavior, and analyzing request headers for automated tooling signatures are the best defenses against residential proxy abuse." }
    ]
  }
  {
  "june-2026-stealer-logs-56m-emails": {
    author: "Track The Breach Threat Research",
    blocks: [
      { type: "lead", text: "In June 2026, the cybersecurity community witnessed one of the most significant data dumps of the year. A massive collection of aggregated info-stealer logs was uncovered and subsequently added to Have I Been Pwned (HIBP), pushing the boundaries of known credential exposure." },
      { type: "h2", text: "The Scale of the Exposure" },
      { type: "p", text: "The corpus contained a staggering 56 million unique email addresses scraped across hundreds of millions of individual stealer log records. More concerningly, the dataset included 124 million unique passwords in plain text, extracted directly from victims' browsers by malware strains like RedLine, LummaC2, and StealC." },
      { type: "h2", text: "Why Stealer Logs Are Deadlier Than Combo-Lists" },
      { type: "p", text: "Unlike traditional database breaches where passwords are often hashed and salted, info-stealers grab active credentials directly from the user's local machine. This means the 124 million passwords exposed were active, unencrypted, and heavily recycled by users across multiple platforms." },
      { type: "h2", text: "Immediate Defensive Actions" },
      { type: "list", items: [
        "Force a password reset for any enterprise users whose corporate email appears in the June 2026 dataset.",
        "Invalidate all active session tokens, as stealer logs frequently include session cookies that bypass MFA.",
        "Deploy endpoint detection protocols specifically tuned for info-stealer heuristics."
      ]}
    ]
  },
  "navia-api-breach-phone-numbers": {
    author: "Track The Breach Incident Response",
    blocks: [
      { type: "lead", text: "Phone numbers and personal emails are the master keys to social engineering. When Navia Benefit Solutions experienced a breach exposing 2.7 million records, it highlighted a severe vulnerability in how organizations handle unauthenticated APIs." },
      { type: "h2", text: "The API Blindspot" },
      { type: "p", text: "The breach was traced back to a misconfigured, public-facing Application Programming Interface (API). Without proper authentication gating or rate-limiting, threat actors were able to systematically scrape the endpoint. The exfiltrated data included names, dates of birth, private email addresses, direct phone numbers, and Social Security numbers." },
      { type: "h2", text: "The Smishing Pipeline" },
      { type: "p", text: "When attackers acquire a clean dataset combining a victim's phone number with their health plan information, the resulting SMS phishing (smishing) campaigns are devastatingly effective. Victims receive texts that appear to be legitimate billing issues from their healthcare provider, complete with accurate contextual data." },
      { type: "h2", text: "Securing the API Perimeter" },
      { type: "p", text: "Organizations must implement continuous API discovery. If an endpoint can return PII, it must require robust authentication (such as OAuth 2.0), enforce strict rate limiting to prevent scraping, and be hidden behind a Web Application Firewall (WAF) that monitors for anomalous data egress." }
    ]
  },
  "verizon-dbir-2026-smishing-rise": {
    author: "Track The Breach Threat Intelligence",
    blocks: [
      { type: "lead", text: "The 2026 Verizon Data Breach Investigations Report (DBIR) has dropped, and it confirms a trend we've been tracking all year: traditional email phishing is plateauing, and mobile-targeted attacks are skyrocketing." },
      { type: "h2", text: "The Shift to Our Pockets" },
      { type: "p", text: "According to the DBIR, as enterprise email security gateways (SEGs) and AI-driven spam filters have gotten exceptionally good at blocking malicious emails, attackers are changing lanes. They are aggressively targeting the mobile ecosystem using stolen phone numbers procured from massive breaches." },
      { type: "h2", text: "Higher Click Rates, Less Scrutiny" },
      { type: "p", text: "The data shows that employees are significantly more likely to tap a malicious link in a text message than they are to click a link in an email. The intimate nature of SMS, combined with the difficulty of inspecting URLs on a mobile screen, makes phone-number-based attacks the new favorite vector for initial access." },
      { type: "h2", text: "Updating the Defense Playbook" },
      { type: "list", items: [
        "Extend zero-trust network access (ZTNA) policies strictly to mobile devices (BYOD).",
        "Train employees specifically on SMS-based executive impersonation and fake MFA alerts.",
        "Assume employee cell phone numbers are already public knowledge and design authentication systems accordingly."
      ]}
    ]
  },
  "synthient-credential-stuffing-2-billion": {
    author: "Track The Breach Dark Web Intelligence",
    blocks: [
      { type: "lead", text: "The credential stuffing economy received a massive injection of fuel recently with the discovery of the 'Synthient' threat data leak—a staggering compilation of over 2 billion email and password combinations." },
      { type: "h2", text: "A Megamix of Historical Breaches" },
      { type: "p", text: "Unlike a targeted breach against a single company, the Synthient dataset is a highly organized, deduplicated compilation of thousands of smaller breaches, stealer logs, and historical leaks. It represents a highly refined 'combo-list' favored by botnet operators." },
      { type: "h2", text: "Automating Account Takeovers (ATO)" },
      { type: "p", text: "With 2 billion credential pairs, attackers are utilizing residential proxy networks to test these emails and passwords against banking, retail, and SaaS portals at a rate of millions of requests per hour. Because humans recycle passwords on average across 5 to 7 different sites, the success rate for these automated attacks remains chillingly high." },
      { type: "h2", text: "Stopping the Bots" },
      { type: "p", text: "Passwords alone can no longer defend an internet-facing login portal. Mitigating the fallout of the Synthient leak requires deploying advanced behavioral bot management, enforcing WebAuthn/Passkeys where possible, and cross-referencing user logins against known-breached credential APIs in real-time." }
    ]
  },
  "dentaquest-vendor-breach-contact-data": {
    author: "Track The Breach Privacy & Compliance",
    blocks: [
      { type: "lead", text: "Third-party vendor risk remains the Achilles' heel of the healthcare sector. In early June 2026, DentaQuest, one of the largest U.S. dental benefits administrators, confirmed a breach impacting 2.6 million individuals." },
      { type: "h2", text: "What Was Exfiltrated?" },
      { type: "p", text: "The exposed data was a goldmine for identity thieves and fraudsters. It included full names, highly accurate email addresses, direct mobile phone numbers, dates of birth, and highly sensitive Medicaid ID numbers. The inclusion of valid contact information tied directly to government health IDs enables highly convincing, targeted medical fraud." },
      { type: "h2", text: "The Extortion Model Pivot" },
      { type: "p", text: "Incidents like DentaQuest highlight a broader 2026 trend: threat actors are moving away from encrypting systems (ransomware) and moving purely toward data-theft extortion. They know that the threat of leaking millions of private emails and medical IDs carries immense regulatory and class-action financial weight." },
      { type: "h2", text: "Post-Breach Reality" },
      { type: "p", text: "For the 2.6 million victims, the remediation requires aggressive vigilance. Patients must monitor their health insurance Explanation of Benefits (EOB) for phantom claims, freeze their credit, and prepare for a sustained wave of highly personalized phishing emails and scam calls leveraging their exposed dental data." }
    ]
  }
  {
  "craneware-healthcare-supply-chain-breach": {
    author: "Track The Breach Threat Research",
    blocks: [
      { type: "lead", text: "On July 20, 2026, Edinburgh-based healthcare technology firm Craneware confirmed that a cyberattack compromised a significant volume of file names, employee data, and a subset of customer and partner records [1.1.1]." },
      { type: "h2", text: "The Supply Chain Ripple Effect" },
      { type: "p", text: "While Craneware is based in the UK, its primary customer base consists of thousands of hospitals, clinics, and retail pharmacies across the United States. The company provides critical billing and accounting software, meaning any successful exfiltration could expose sensitive financial or regulatory data. According to Craneware, the incident has been contained without disrupting customer services." },
      { type: "h2", text: "The Shift in Healthcare Attacks" },
      { type: "p", text: "Threat actors are increasingly avoiding direct attacks on heavily defended hospital networks. Instead, they target the software vendors intertwined with hospital operations. By compromising a billing platform, attackers can harvest high-value data from dozens of healthcare providers simultaneously without having to breach each hospital's perimeter individually." }
    ]
  },
  "india-nuclear-plant-reliance-data-leak": {
    author: "Track The Breach Threat Intelligence",
    blocks: [
      { type: "lead", text: "In a stark reminder of the risks associated with third-party vendors in critical infrastructure, the World Leaks ransomware group posted 14.3 gigabytes of highly sensitive data related to the Kudankulam Nuclear Power Plant, India's largest nuclear facility." },
      { type: "h2", text: "The Vector: Third-Party Data Centers" },
      { type: "p", text: "The breach did not occur on the nuclear plant's highly secure air-gapped networks. Instead, the attackers compromised a server belonging to Reliance Group—a contractor designing infrastructure for the plant's new Unit 3 and Unit 4—hosted by a third-party data center provider." },
      { type: "h2", text: "What Was Exposed?" },
      { type: "p", text: "The nearly 19,000 files leaked on the dark web include blueprints for ventilation and cooling systems, the floor layout of a common control room, vendor proposals, and a joint inspection meeting record. It also exposed an insurance policy outlining a $112 million payout in the event of a terrorist act." },
      { type: "h2", text: "The Kinetic Threat" },
      { type: "p", text: "While the nuclear reactor controls were never at risk of a digital takeover, researchers warn that blueprints in the hands of bad actors could be exploited to map support systems, pinpoint physical security weaknesses, and launch highly targeted kinetic or cyber-physical attacks." }
    ]
  },
  "tata-electronics-world-leaks-ransomware": {
    author: "Track The Breach Incident Response",
    blocks: [
      { type: "lead", text: "The World Leaks ransomware cartel has claimed responsibility for a massive data theft at Tata Electronics, publishing over 200,000 files on its dark web leak site [1.1.2]." },
      { type: "h2", text: "High-Profile Intellectual Property at Risk" },
      { type: "p", text: "The leaked dataset reportedly contains component design and specification documents linked to some of Tata Electronics' most high-profile customers, including Apple and Tesla. The incident has prompted Apple to conduct its own independent analysis of the exposure." },
      { type: "h2", text: "The Double Extortion Playbook" },
      { type: "p", text: "Beyond corporate IP, researchers confirm the leak includes years of event logs, internal emails, and the passport copies of employees, including foreign nationals. This highlights the modern double-extortion tactic: if a company refuses to pay the ransom for the IP, the attackers will weaponize the personal data of the employees to apply secondary pressure." }
    ]
  },
  "bajaj-auto-ransomware-incident": {
    author: "Track The Breach Threat Research",
    blocks: [
      { type: "lead", text: "Pune-based Bajaj Auto Ltd., one of the world's most valuable two-wheeler manufacturers, disclosed a targeted ransomware attack against its IT infrastructure in mid-July 2026 [1.1.2]." },
      { type: "h2", text: "Immediate Containment" },
      { type: "p", text: "In a regulatory filing, the automaker confirmed that the attack affected the systems of both the parent company and its wholly owned subsidiary, Bajaj Auto Technology Ltd. (BATL). The company's technical team, working with external cybersecurity specialists, successfully detected the incident and implemented response protocols to contain the blast radius." },
      { type: "h2", text: "The Manufacturing Sector Bullseye" },
      { type: "p", text: "Automotive and manufacturing networks remain highly lucrative targets for ransomware operators. The convergence of IT (Information Technology) and OT (Operational Technology) means that a successful IT breach can halt assembly lines, costing companies millions of dollars per hour in downtime." }
    ]
  },
  "oxford-university-careerconnect-breach": {
    author: "Track The Breach Privacy & Compliance",
    blocks: [
      { type: "lead", text: "The University of Oxford has disclosed a data breach affecting its CareerConnect platform, exposing the personal data and encrypted passwords of its students [1.1.2]." },
      { type: "h2", text: "The Third-Party Weak Link" },
      { type: "p", text: "Oxford's internal networks were not breached. The exposure stemmed from Group GTI, a third-party provider that manages the career platform for multiple UK institutions, including King's College London and the University of Manchester." },
      { type: "h2", text: "Harvesting for Phishing Campaigns" },
      { type: "p", text: "The stolen data includes users' first and last names, email addresses, and encrypted passwords. While the passwords were encrypted, threat actors frequently target university platforms specifically to harvest verified '.ac.uk' or '.edu' email addresses. These trusted addresses are then used to launch highly convincing spear-phishing campaigns against other students, faculty, or corporate partners." }
    ]
  }
{
  "dhs-hsin-breach-world-cup": {
    author: "Track The Breach Threat Research",
    blocks: [
      { type: "lead", text: "In July 2026, the Department of Homeland Security (DHS) disclosed a high-severity security breach involving the Homeland Security Information Network (HSIN), a critical platform used for inter-agency communication and intelligence sharing [1.1.1]." },
      { type: "h2", text: "The Incident Timeline" },
      { type: "p", text: "According to initial reports, an unknown threat actor compromised the network between late May and early June 2026. While the DHS confirmed that classified systems were not affected by the intrusion, the breach of the HSIN is highly consequential. The platform is utilized heavily by federal, state, and local law enforcement." },
      { type: "h2", text: "World Cup Security at Risk" },
      { type: "p", text: "The most immediate concern stemming from this exfiltration is the potential exposure of sensitive security planning and coordination data. With the World Cup approaching, threat actors gaining insight into physical security deployments, emergency response protocols, and multi-agency communication channels creates severe operational risks." },
      { type: "h2", text: "Defensive Takeaways" },
      { type: "list", items: [
        "Migrate immediately to phishing-resistant, hardware-based MFA (FIDO2) for any government or critical infrastructure network [1.1.1].",
        "Assume breach: Implement aggressive lateral movement monitoring to detect when standard accounts attempt to access high-clearance planning repositories."
      ]}
    ]
  },
  "instructure-canvas-lms-shinyhunters": {
    author: "Track The Breach Threat Intelligence",
    blocks: [
      { type: "lead", text: "The education technology sector suffered one of its worst breaches of the decade when Instructure, the company behind the popular Canvas Learning Management System (LMS), was compromised by the hacking collective ShinyHunters [1.2.1]." },
      { type: "h2", text: "A Staggering Blast Radius" },
      { type: "p", text: "Canvas is utilized by nearly 9,000 schools and universities globally. The breach exposed the data of a reported 275 million users, including names, private messages, email addresses, and student IDs. The incident forced widespread system outages, with numerous institutions forced to postpone final exams and assignment submissions." },
      { type: "h2", text: "The Second Strike" },
      { type: "p", text: "What makes this incident particularly alarming is the follow-up. Just one week after Instructure claimed to have remediated the security flaws, ShinyHunters breached the platform again, publicly defacing the login pages of specific schools. This highlights a critical lesson in incident response: initial containment rarely eradicates a persistent, highly motivated threat actor who has already mapped your infrastructure." }
    ]
  },
  "servicenow-cve-2026-6875-active-exploitation": {
    author: "Track The Breach Vulnerability Lab",
    blocks: [
      { type: "lead", text: "A critical pre-authentication remote code execution (RCE) vulnerability in the ServiceNow AI Platform—tracked as CVE-2026-6875—is now being actively exploited in the wild by threat actors." },
      { type: "h2", text: "The Vulnerability Mechanics" },
      { type: "p", text: "CVE-2026-6875 is a code injection flaw that allows unauthenticated attackers to escape ServiceNow's script sandbox. By targeting specific endpoints (such as `/assessment_thanks.do`), an attacker can gain full remote code execution on the targeted instance, leading to total compromise of the platform and any connected proxy servers." },
      { type: "h2", text: "Patch Immediately" },
      { type: "p", text: "While ServiceNow pushed security updates to hosted instances rapidly after the initial April discovery, organizations running self-hosted instances remain at extreme risk if they have not applied the mid-July patches. The patch also introduces 'Guarded Script,' a new sandbox restriction feature designed to heavily mitigate future injection attempts." }
    ]
  },
  "clover-health-social-engineering-breach": {
    author: "Track The Breach Privacy & Compliance",
    blocks: [
      { type: "lead", text: "In July 2026, healthcare provider Clover Health filed a securities disclosure revealing a data breach that bypassed their technical perimeter entirely, relying instead on human manipulation [1.1.2]." },
      { type: "h2", text: "Targeting the End User" },
      { type: "p", text: "A hacker successfully compromised the accounts of three employees using sophisticated social engineering tactics—manipulating the employees into granting IT access or directly disclosing their credentials. These specific employees were responsible for broker relationships and member visit scheduling." },
      { type: "h2", text: "The Cost of Compromised Credentials" },
      { type: "p", text: "While the employees did not have access to massive corporate claims systems or financial databases, their access level still allowed the threat actors to potentially acquire Protected Health Information (PHI) and Personally Identifiable Information (PII). This incident underscores that in 2026, attackers do not need to exploit a zero-day vulnerability; they simply need to log in as a legitimate user." }
    ]
  },
  "accenture-source-code-azure-token-theft": {
    author: "Track The Breach Cloud Security",
    blocks: [
      { type: "lead", text: "Technology consulting giant Accenture is currently investigating a security incident following claims by a threat actor known as '888' that they successfully exfiltrated 35GB of highly sensitive data [1.1.4]." },
      { type: "h2", text: "The Keys to the Kingdom" },
      { type: "p", text: "The threat actor posted screenshots on a cybercrime forum purporting to show data stolen from a private Azure DevOps repository. If validated, the leaked data is incredibly dangerous. The actor claims the haul includes proprietary source code, RSA and SSH keys, Azure personal access tokens (PATs), and Azure Storage access keys." },
      { type: "h2", text: "The Risk of Hardcoded Secrets" },
      { type: "p", text: "Accenture has stated the incident is an 'isolated matter' and operations remain unaffected. However, the exposure of Azure access tokens and SSH keys highlights a continuous struggle for DevOps teams: preventing the hardcoding of active secrets in repositories. When a repo is breached, those exposed keys allow attackers to instantly pivot from code-read access to live production-environment manipulation." }
    ]
  }
  {
  "singapore-telecom-unc3886-breach-2026": {
    author: "Track The Breach APAC Intelligence",
    blocks: [
      { type: "lead", text: "In early 2026, Singapore's Cyber Security Agency (CSA) declassified details of one of the most sophisticated espionage campaigns ever uncovered in Southeast Asia, revealing that a China-linked threat group known as UNC3886 had breached all four of the nation's major telecommunications providers." },
      { type: "h2", text: "The Zero-Day Arsenal" },
      { type: "p", text: "UNC3886 did not rely on standard phishing. Instead, the highly disciplined APT utilized a chain of zero-day exploits targeting virtualization platforms and perimeter firewalls. By deploying advanced rootkits deeply embedded in ESXi hypervisors, the attackers established stealthy, persistent access that evaded traditional Endpoint Detection and Response (EDR) sensors." },
      { type: "h2", text: "Operation CYBER GUARDIAN" },
      { type: "p", text: "Rather than immediately burning the attacker's infrastructure, Singaporean authorities and telecom defenders launched an 11-month covert counter-operation dubbed CYBER GUARDIAN. The objective was to map the full extent of the attackers' lateral movement, identify exfiltrated data (primarily communications metadata and call records of high-value targets), and seamlessly evict the intruders while hardening the telecom backbone against re-entry." },
      { type: "h2", text: "Critical Infrastructure Lessons" },
      { type: "p", text: "The breach underscores the fragility of relying solely on perimeter defenses for critical infrastructure. Defending against state-sponsored actors in 2026 requires continuous memory scanning of hypervisors, strict network segmentation between IT and core telecom signaling networks, and aggressive anomaly detection for East-West traffic within data centers." }
    ]
  },
  "apac-deepfake-agentic-ai-fraud": {
    author: "Track The Breach AI Lab",
    blocks: [
      { type: "lead", text: "The rapid digitalization of the Asia-Pacific region has a dark side. According to the latest INTERPOL and Visa threat assessments, cybercrime now accounts for over 30% of all recorded crime in more than half of APAC nations. The primary driver? AI-enabled autonomous fraud." },
      { type: "h2", text: "The $25 Million Deepfake Wake-Up Call" },
      { type: "p", text: "The defining incident of the year occurred when a finance worker at a multinational company in Hong Kong was tricked into paying out approximately US $25 million. The employee attended a live video conference populated entirely by AI-generated deepfakes of the company's Chief Financial Officer and other colleagues. The audio and visual synthesis was flawless enough to bypass human skepticism during real-time interaction." },
      { type: "h2", text: "Agentic AI Enters the Chat" },
      { type: "p", text: "Beyond deepfakes, regional threat intelligence indicates a 600% surge in underground forum discussions regarding 'Agentic AI'. Unlike generative AI used to write phishing emails, Agentic AI can plan and execute multi-step attacks—scraping targets, interacting with victims, pivoting through networks, and exfiltrating data—at machine speed with zero human supervision." },
      { type: "h2", text: "Defending the Human Perimeter" },
      { type: "list", items: [
        "Implement mandatory 'out-of-band' verification (e.g., a physical phone call to a known number) for any wire transfer exceeding a specific threshold, regardless of video-call authorization.",
        "Deploy AI-driven deepfake detection software at the corporate network edge to analyze video stream metadata for synthetic artifacts in real-time.",
        "Transition all authentication from passwords to hardware-based FIDO2 security keys to combat AI-driven credential stuffing."
      ]}
    ]
  },
  "australia-partnered-health-medicare-breach": {
    author: "Track The Breach Privacy & Compliance",
    blocks: [
      { type: "lead", text: "The Australian healthcare sector remains a prime target for financially motivated threat actors. In July 2026, Partnered Health, a massive network of Australian general practices, confirmed a devastating cyberattack compromising highly sensitive patient records [1.2.5]." },
      { type: "h2", text: "High-Value Health Identifiers Exposed" },
      { type: "p", text: "Following unauthorized access by a malicious actor, Partnered Health disclosed that patient healthcare data, including Medicare numbers and Department of Veterans' Affairs (DVA) numbers, had been compromised. In the Australian dark web economy, a valid Medicare card combined with a patient's date of birth and address is the ultimate key for identity theft, allowing criminals to hijack government services and open fraudulent lines of credit." },
      { type: "h2", text: "The Regulatory Hammer" },
      { type: "p", text: "In the wake of massive breaches over the last three years (Optus, Medibank), the Australian government has drastically tightened the Privacy Act. Companies failing to secure customer data now face penalties of up to $50 million AUD, or 30% of adjusted turnover. For healthcare providers, the cost of a breach is now existential." },
      { type: "h2", text: "Prescription for Security" },
      { type: "p", text: "Healthcare networks must move away from flat network architectures. A compromised endpoint at a remote GP clinic should never have a direct, unsegmented path to central patient databases. Furthermore, sensitive identifiers like Medicare numbers must be heavily encrypted at rest, requiring context-aware decryption keys tied to the specific physician accessing the file." }
    ]
  },
  "indonesia-whatsapp-apk-sideloading-campaign": {
    author: "Track The Breach Fraud Prevention",
    blocks: [
      { type: "lead", text: "Mobile-first economies in Southeast Asia are facing an epidemic of sophisticated banking trojans. A highly organized campaign in Indonesia recently resulted in an estimated $2 million in nationwide losses by abusing the trust of 16 different government and financial brands." },
      { type: "h2", text: "The Social Engineering Funnel" },
      { type: "p", text: "Threat actors leveraged WhatsApp—the dominant communication platform in the region—to initiate contact with victims. Posing as government tax officials, package couriers, or banking representatives, the attackers convinced users to download what appeared to be a legitimate document or application update." },
      { type: "h2", text: "The APK Sideloading Trap" },
      { type: "p", text: "Instead of a PDF, the victims were tricked into sideloading a malicious Android Package (APK) file outside of the Google Play Store. Once installed, the malware requested aggressive accessibility permissions. This allowed the trojan to act as an infostealer—intercepting SMS one-time passwords (OTPs), logging keystrokes, and automatically initiating unauthorized bank transfers while overlaying a fake screen to hide the activity from the user." },
      { type: "h2", text: "Mitigation Strategies for Financial Institutions" },
      { type: "p", text: "Banks operating in APAC must implement robust device binding and behavioral biometrics within their official mobile applications. If the banking app detects the presence of active screen-overlay software or notes that the user's swiping and typing patterns deviate from their historical baseline, the transaction must be instantly blocked, even if the correct OTP is provided." }
    ]
  },
  "thailand-ddos-india-gentlemen-ransomware": {
    author: "Track The Breach Threat Research",
    blocks: [
      { type: "lead", text: "The Asia-Pacific threat landscape is becoming highly localized. Recent threat intelligence from early 2026 highlights two distinct regional crises: a massive wave of hacktivist disruptions in Thailand and a targeted ransomware syndicate squeezing Indian manufacturing." },
      { type: "h2", text: "Thailand: The Regional DDoS Epicenter" },
      { type: "p", text: "Driven heavily by geopolitical tensions and local hacktivist groups (such as 'RipperSec'), Thailand experienced a staggering 161% surge in Distributed Denial of Service (DDoS) attacks, absorbing 267 incidents in a single month. Fifty percent of these attacks targeted government and military infrastructure, leveraging vast botnets of compromised residential IoT devices to overwhelm state-owned domains and transportation networks." },
      { type: "h2", text: "India & Taiwan: Enter 'The Gentlemen'" },
      { type: "p", text: "Simultaneously, a newly prolific ransomware group calling themselves 'The Gentlemen' has emerged as a dominant threat, actively targeting the manufacturing sectors in India, Taiwan, and Australia. Unlike traditional Ransomware-as-a-Service (RaaS) models, this group operates without a central affiliate panel, distributing their bespoke Linux and ESXi encryptors via secure messengers to trusted affiliates. Their focus on the manufacturing sector is calculated; targeting deeply interconnected supply chains guarantees maximum operational downtime and higher ransom payouts." }
    ]
  }
  {
  "building-realtime-identity-graph-scale": {
    author: "Track The Breach Engineering Team",
    blocks: [
      { type: "lead", text: "Querying 1.6 billion breach records in relational databases causes severe latency bottlenecks. Here is how we engineered our distributed graph database to correlate leaked emails, phone numbers, password hashes, and session tokens in real time." },
      { type: "h2", text: "The Challenge: Unstructured Data Heterogeneity" },
      { type: "p", text: "Breach data is notoriously dirty. A single leak source might contain raw text pastes, while another is a dumped SQL database with custom salt routines. To build a unified identity graph, incoming data must undergo instant normalization, entity extraction, and canonical grouping without blocking ingestion workers." },
      { type: "h2", text: "Architecture & Graph Indexing" },
      { type: "p", text: "We migrated from traditional document stores to a horizontally scaled graph database backed by custom memory-mapped indexing. Nodes represent atomic identifiers (e.g., an email address or SSN fragment), while edges represent co-occurrence within a breach event or stealer payload." },
      { type: "h2", text: "Sub-10ms Correlation" },
      { type: "list", items: [
        "Distributed bloom filters reduce unnecessary disk lookups by 94% during ingestion.",
        "Edge-weighting dynamically calculates exposure risk based on record recency and sensitivity.",
        "Asynchronous stream processing allows continuous monitoring pipelines to alert enterprise customers within seconds of a new leak upload."
      ]}
    ]
  },
  "ciso-board-reporting-breach-exposure": {
    author: "Track The Breach Advisory",
    blocks: [
      { type: "lead", text: "Board members do not need to know how many millions of raw credentials exist on dark web marketplaces. They need to understand likelihood, impact, and defensibility." },
      { type: "h2", text: "The Flaw of Vanity Metrics" },
      { type: "p", text: "Reporting '12,000 corporate credentials found on the dark web' often creates panic without offering actionable clarity. Most of those records may be decade-old hashes from defunct services. CISOs must separate legacy noise from actionable signal." },
      { type: "h2", text: "The 3 Board Metrics That Matter" },
      { type: "list", items: [
        "Active Session Exposure Rate: Percentage of leaked credentials tied to live SSO or SaaS accounts without enforced hardware MFA.",
        "Executive & VIP Identity Radius: Percentage of C-suite and critical administrative personnel with current biometric or credential exposures.",
        "Mean Time to Neutralization (MTTN): The average hours elapsed between an enterprise credential appearing in threat intelligence feeds and the SOC revoking the corresponding token."
      ]}
    ]
  },
  "active-stealer-log-containment-checklist": {
    author: "Track The Breach Incident Response",
    blocks: [
      { type: "lead", text: "Info-stealer logs contain active session cookies that bypass password resets and standard multi-factor authentication. When a high-severity alert fires, follow this 30-minute protocol." },
      { type: "h2", text: "Phase 1: Token Revocation (0-10 Minutes)" },
      { type: "p", text: "Do not start by changing the user's password. Immediately terminate all active OAuth sessions, cloud tenant tokens, and VPN connections. Invalidate cookie caches across Okta, Microsoft Entra ID, and key SaaS applications." },
      { type: "h2", text: "Phase 2: Endpoint Isolation (10-20 Minutes)" },
      { type: "p", text: "Isolate the compromised endpoint from the corporate network via your EDR platform. Initiate a full malware scan to identify the specific stealer variant (RedLine, Lumma, Vidar) and extract persistence mechanisms." },
      { type: "h2", text: "Phase 3: Credential & MFA Reset (20-30 Minutes)" },
      { type: "p", text: "Once the machine is quarantined and active sessions are killed, reset the user's primary directory password and reissue MFA tokens. Force a re-enrollment of registered authenticator devices." }
    ]
  },
  "threat-actor-profile-scattered-spider-2026": {
    author: "Track The Breach Threat Intelligence",
    blocks: [
      { type: "lead", text: "Scattered Spider (UNC3944) remains one of the most operationally agile cybercrime groups targeting western enterprises. Here is an analysis of how their tradecraft has shifted in 2026." },
      { type: "h2", text: "Helpdesk Manipulation via AI Voice Synthesis" },
      { type: "p", text: "While the group previously relied on human voice callers to trick IT helpdesks into resetting MFA tokens, they now utilize real-time voice cloning software. By sampling public executive interviews or podcast audio, they impersonate employees during verification calls." },
      { type: "h2", text: "BYOVD and Cloud Lateral Movement" },
      { type: "p", text: "Once initial access is gained via identity manipulation, Scattered Spider rapidly deploys Bring Your Own Vulnerable Driver (BYOVD) techniques to disable endpoint security software before pivoting straight into AWS, Azure, or Google Cloud environments." },
      { type: "h2", text: "Mitigation Tactics" },
      { type: "list", items: [
        "Enforce strict, out-of-band video verification protocols for all helpdesk credential resets.",
        "Require FIDO2 passkeys or hardware security keys, which are resistant to real-time relay and social engineering attacks.",
        "Restrict cloud management plane access strictly to compliant, corporate-managed devices."
      ]}
    ]
  },
  "sec-72-hour-materiality-assessment-framework": {
    author: "Track The Breach Privacy & Compliance",
    blocks: [
      { type: "lead", text: "Under regulatory disclosure mandates, public entities and regulated firms must evaluate cybersecurity incidents for 'materiality' without delay. Here is how security leads can collaborate with legal counsel effectively." },
      { type: "h2", text: "Quantitative vs. Qualitative Impact" },
      { type: "p", text: "Materiality is not determined solely by a dollar figure or the sheer count of leaked records. A breach of 1,000 highly sensitive corporate IP documents can carry significantly higher financial and reputational weight than a breach of 500,000 unhashed marketing emails." },
      { type: "h2", text: "Key Evaluation Questions" },
      { type: "list", items: [
        "Does the incident compromise core operational technology or interrupt primary revenue-generating infrastructure?",
        "Is there a substantial likelihood of regulatory penalties, class-action litigation, or IP theft?",
        "Does the exposure involve trade secrets, strategic enterprise data, or systemic partner trust?"
      ]}
    ]
  }
    {
  "what-is-a-data-breach": {
    author: "Track The Breach Editorial",
    blocks: [
      { type: "lead", text: "A data breach occurs when unauthorized individuals gain access to confidential, protected, or sensitive data. It is the digital equivalent of someone breaking into your office and stealing your filing cabinets." },
      { type: "h2", text: "What gets stolen?" },
      { type: "p", text: "Breaches typically expose Personally Identifiable Information (PII) like names and government IDs, financial data, corporate intellectual property (IP), or user credentials (emails and passwords)." },
      { type: "p", text: "When this data is leaked, it usually ends up on dark web forums where it is sold to other criminals who use it for identity theft, corporate espionage, or further targeted attacks." }
    ]
  },
  "how-hackers-steal-data": {
    author: "Track The Breach Threat Research",
    blocks: [
      { type: "lead", text: "Hollywood portrays hacking as typing rapidly in a dark room to break a firewall. In reality, modern hacking is heavily reliant on human psychology and automated scripts." },
      { type: "h2", text: "The Top Vectors" },
      { type: "list", items: [
        "Phishing & Social Engineering: Tricking an employee into handing over their password via a fake login page.",
        "Credential Stuffing: Buying a list of leaked passwords from the dark web and using bots to test them on thousands of websites until one works.",
        "Exploiting Vulnerabilities: Finding unpatched, outdated software on a company's server and injecting malicious code to gain access.",
        "Infostealers: Tricking a user into downloading malware that silently copies their active browser session cookies."
      ]}
    ]
  },
  "what-is-cybercrime": {
    author: "Track The Breach Threat Intel",
    blocks: [
      { type: "lead", text: "Cybercrime today operates like a massive corporate ecosystem. It is segmented into specialized service providers known as 'Crime-as-a-Service' (CaaS)." },
      { type: "h2", text: "The Dark Web Supply Chain" },
      { type: "p", text: "One group (Initial Access Brokers) specializes entirely in breaching networks. They don't steal the data; they simply sell the access to a Ransomware gang. The Ransomware gang uses affiliates to deploy the encryption software. Finally, a separate group specializes in laundering the cryptocurrency payouts." }
    ]
  },
  "how-to-handle-a-breach": {
    author: "Track The Breach Incident Response",
    blocks: [
      { type: "lead", text: "If you discover unauthorized access on your network, panic is your worst enemy. A swift, methodical response limits the financial and reputational damage." },
      { type: "h2", text: "The First 24 Hours" },
      { type: "list", items: [
        "1. Isolate the affected systems. Disconnect compromised servers from the internet immediately, but do not turn them off (powering down destroys memory evidence).",
        "2. Revoke access. Reset all passwords, wipe active session tokens, and lock down VPNs.",
        "3. Call legal and forensic experts. Engage your breach coach and incident response firm to determine exactly what data was accessed.",
        "4. Prepare notifications. You are legally required to notify regulators and users within strict timelines."
      ]}
    ]
  },
  "us-sec-cyber-rules-2026": {
    author: "Track The Breach Compliance",
    blocks: [
      { type: "lead", text: "For publicly traded companies in the United States, hiding a data breach is a violation of federal securities law. The Securities and Exchange Commission (SEC) enforces strict disclosure mandates." },
      { type: "h2", text: "The 4-Day Rule" },
      { type: "p", text: "Registrants must disclose any cybersecurity incident determined to be 'material' within four business days using Form 8-K. The clock starts the moment the company determines the breach is material, not necessarily the day it was discovered." },
      { type: "p", text: "Determining 'materiality' requires analyzing whether a reasonable investor would consider the incident important when making investment decisions, factoring in both financial losses and reputational damage." }
    ]
  },
  "india-dpdp-cert-in-rules": {
    author: "Track The Breach Privacy Team",
    blocks: [
      { type: "lead", text: "India currently enforces multiple layers of cybersecurity regulation, demanding immense agility from corporate security teams." },
      { type: "h2", text: "CERT-In 6-Hour Reporting" },
      { type: "p", text: "Under CERT-In's April 2022 directions, specified cyber incidents (including breaches and ransomware) must be reported within just 6 hours of the incident being noticed. Failing to meet this tight deadline can result in penalties up to ₹1 crore." },
      { type: "h2", text: "The DPDP Act" },
      { type: "p", text: "Looking ahead, the Digital Personal Data Protection (DPDP) Act will require full core operational compliance by May 2027. The Act enforces strict data fiduciary obligations, heavy reliance on explicit user consent, and mandates notifying the Data Protection Board of breaches." }
    ]
  },
  "europe-gdpr-nis2-omnibus": {
    author: "Track The Breach European Desk",
    blocks: [
      { type: "lead", text: "Europe remains the gold standard for data privacy, but regulatory overlap has caused headaches for CISOs. The newly proposed Digital Omnibus aims to fix that." },
      { type: "h2", text: "Shifting Timelines and Single Entry Points" },
      { type: "p", text: "Historically, GDPR required breach notification within 72 hours. The Digital Omnibus proposes easing this to 96 hours to allow for better forensic analysis. Furthermore, it introduces a 'Single Entry Point' managed by ENISA, allowing organizations to report an incident once to satisfy both GDPR and NIS2 requirements simultaneously." }
    ]
  },
  "global-data-privacy-laws": {
    author: "Track The Breach Compliance",
    blocks: [
      { type: "lead", text: "Navigating global compliance means managing completely different clocks when an incident occurs." },
      { type: "p", text: "In the US, you have 4 business days for public material disclosures. In India, CERT-In demands an initial report in just 6 hours. In the EU, GDPR currently mandates 72 hours, though this is shifting. Multinational corporations must build Incident Response playbooks that satisfy the fastest clock in the jurisdictions where they operate." }
    ]
  },
  "cost-of-non-compliance": {
    author: "Track The Breach Advisory",
    blocks: [
      { type: "lead", text: "Failing to protect user data carries a cost far greater than the initial IT forensics bill." },
      { type: "p", text: "Under India's DPDP Act, failure to implement reasonable security safeguards carries a maximum penalty of ₹250 crore. Beyond direct fines, organizations face devastating class-action lawsuits, massive spikes in cyber insurance premiums, and the unquantifiable loss of consumer trust." }
    ]
  },
  "free-email-breach-check": {
    author: "Track The Breach Support",
    blocks: [
      { type: "lead", text: "Are you wondering if your email is part of a data breach? Track The Breach offers free, secure tools to check your exposure." },
      { type: "p", text: "By entering your email, our system queries our 1.6 billion record database to tell you exactly which breaches your email appeared in, and what other data (like passwords or phone numbers) was leaked alongside it. Knowing your exposure is the first step in defending your identity." }
    ]
  },
  "what-is-identity-exposure": {
    author: "Track The Breach Editorial",
    blocks: [
      { type: "lead", text: "Identity exposure goes beyond a simple password leak. It is the sum total of your digital vulnerability." },
      { type: "p", text: "When hackers combine your leaked email from 2018, your phone number from a 2022 breach, and your physical address from a 2024 shipping leak, they possess a complete 'identity profile.' This profile is used to bypass security questions and open fraudulent banking accounts." }
    ]
  },
  "password-reuse-danger": {
    author: "Track The Breach Education",
    blocks: [
      { type: "lead", text: "Using the same password for multiple accounts is the single biggest mistake internet users make." },
      { type: "p", text: "If you use the same password for a small online forum and your corporate email, a breach at the forum gives hackers the exact key they need to break into your work account. Always use a password manager to generate unique, complex passwords for every service." }
    ]
  },
  "what-is-phishing": {
    author: "Track The Breach Education",
    blocks: [
      { type: "lead", text: "Phishing is a psychological attack delivered via email or text message." },
      { type: "p", text: "Attackers masquerade as trusted entities (your boss, your bank, IT support) to trick you into clicking a malicious link or downloading an attachment. Always verify the sender's actual email address, not just the display name, and never click links demanding urgent account resets." }
    ]
  },
  "hardware-mfa-vs-sms": {
    author: "Track The Breach Engineering",
    blocks: [
      { type: "lead", text: "Multi-Factor Authentication (MFA) is essential, but not all MFA is created equal." },
      { type: "p", text: "SMS text codes are highly vulnerable to SIM-swapping, where a hacker tricks your telecom provider into transferring your phone number to their device. To truly secure high-value accounts, switch to app-based authenticators or physical FIDO2 hardware keys." }
    ]
  },
  "stealer-malware-explained": {
    author: "Track The Breach Threat Intel",
    blocks: [
      { type: "lead", text: "Infostealers are malware variants designed specifically to bypass your passwords." },
      { type: "p", text: "Once installed on a computer, they scrape the web browser for active 'session cookies'—the tiny files that keep you logged in to a website. By stealing the cookie, hackers can access your accounts without ever needing to know your password or trigger an MFA alert." }
    ]
  },
  "how-track-the-breach-supports-you": {
    author: "Track The Breach Customer Success",
    blocks: [
      { type: "lead", text: "Track The Breach is more than a monitoring tool. We are your active defense partner." },
      { type: "p", text: "Our platform provides real-time API integrations into your existing security stack, dedicated incident response coaching, and continuous dark web intelligence. When a credential belonging to your domain is uploaded to a cybercrime forum, we alert you instantly so you can invalidate the session before the attackers strike." }
    ]
  },
  "continuous-dark-web-monitoring": {
    author: "Track The Breach Solutions",
    blocks: [
      { type: "lead", text: "Threat actors don't announce when they are targeting your company. Our sensors do." },
      { type: "p", text: "We continuously scan deep web forums, Telegram channels, and Tor marketplaces for mentions of your corporate domain, employee emails, or proprietary code. Continuous monitoring shifts your security posture from reactive to proactive." }
    ]
  },
  "executive-digital-protection": {
    author: "Track The Breach Solutions",
    blocks: [
      { type: "lead", text: "C-Suite executives and board members are high-value targets for social engineering and deepfake scams." },
      { type: "p", text: "Track The Breach offers specialized Executive Digital Protection, actively removing the personal phone numbers, home addresses, and family details of your leadership team from public data brokers to shrink their attack surface." }
    ]
  },
  "smb-cybersecurity-solutions": {
    author: "Track The Breach Solutions",
    blocks: [
      { type: "lead", text: "Small and medium businesses (SMBs) are the backbone of the economy, and the favorite target of automated ransomware." },
      { type: "p", text: "We believe enterprise-grade threat intelligence shouldn't be restricted to the Fortune 500. Track The Breach offers tailored, scalable monitoring plans designed specifically for lean IT teams that need maximum visibility with minimum overhead." }
    ]
  },
  "track-the-breach-api-integration": {
    author: "Track The Breach Engineering",
    blocks: [
      { type: "lead", text: "Security teams shouldn't have to check another dashboard. Bring the intelligence directly into your workflow." },
      { type: "p", text: "The Track The Breach API allows your engineering team to query our identity graph directly. Integrate our feed into your SIEM to automatically trigger password resets or force MFA re-enrollment the millisecond an employee's data appears in a new stealer log." }
    ]
  }
    {
  "complete-data-breach-remediation-guide": {
    author: "Track The Breach Incident Specialists",
    blocks: [
      { type: "lead", text: "Receiving an alert that your personal or corporate credentials appeared in a data breach can feel overwhelming. However, exposure does not have to mean compromise if you act swiftly using a structured remediation plan." },
      { type: "h2", text: "Step 1: Immediate Token & Session Invalidation" },
      { type: "p", text: "Most modern breaches stem from info-stealer malware that harvests active browser cookies alongside passwords. Changing your password alone will not kick an attacker out of an active session. You must click 'Log out of all devices' across your email, banking, and cloud platforms immediately." },
      { type: "h2", text: "Step 2: Deploy Hardware-Based MFA" },
      { type: "p", text: "Switch from SMS-based multi-factor authentication to authenticator apps or physical WebAuthn/FIDO2 security keys. Attackers frequently chain leaked phone numbers with SIM-swap services to bypass SMS codes." },
      { type: "h2", text: "Step 3: Freeze Credit & Monitor Government IDs" },
      { type: "p", text: "If your government identifiers or national identity numbers were part of the breach, place a security freeze with primary credit bureaus immediately. Enable real-time exposure scanning with Track The Breach to monitor future dark web markets for identity fragmentation." }
    ]
  },
  "end-to-end-enterprise-breach-response-solution": {
    author: "Track The Breach Enterprise Advisory",
    blocks: [
      { type: "lead", text: "Traditional threat monitoring services send an email alert when credentials leak and consider their job done. For enterprise CISOs, an uncontextualized alert is just extra work. Organizations need a complete, end-to-end solution that bridges detection with automated remediation." },
      { type: "h2", text: "The 360° Response Framework" },
      { type: "list", items: [
        "Real-Time Detection: Instant ingestion of Telegram stealer logs, paste sites, and Tor marketplace dumps into the Track The Breach graph database.",
        "Automated SOAR Triggering: Direct API orchestration into Microsoft Entra ID, Okta, or AWS IAM to force session resets and credential rotation within seconds.",
        "Legal & Regulatory Triage: Contextualizing record exposure against global compliance mandates (SEC, GDPR, CERT-In, DPDP Act) to streamline regulatory filings."
      ]},
      { type: "h2", text: "Post-Incident Hardening" },
      { type: "p", text: "After containing the immediate blast radius, Track The Breach provides comprehensive digital footprint sanitization for affected staff, preventing secondary spear-phishing or executive impersonation campaigns." }
    ]
  },
  "how-to-remove-leaked-data-from-dark-web": {
    author: "Track The Breach Intelligence Lab",
    blocks: [
      { type: "lead", text: "A common question from breached clients is: 'Can you erase my data from the dark web?' The honest answer requires understanding how underground data distribution works." },
      { type: "h2", text: "Takedowns vs. Neutralization" },
      { type: "p", text: "Once data is posted to decentralized dark web forums or P2P networks, removing every copy is technically impossible. However, specialized legal takedown notices can successfully remove listings from surface-web paste sites, code repositories, and cloud storage buckets." },
      { type: "h2", text: "Making Stolen Data Useless" },
      { type: "p", text: "The true solution to dark web leaks is 'credential neutralization'. By rotating passwords, invalidating session cookies, revoking API tokens, and updating security keys, you transform high-value stolen data into worthless, inert text." }
    ]
  },
  "complete-solution-for-breached-clients-and-users": {
    author: "Track The Breach Customer Success",
    blocks: [
      { type: "lead", text: "Point-solution monitoring leaves companies and individuals stranded midway through a security crisis. Track The Breach was built to offer a complete, end-to-end resolution ecosystem for breach victims." },
      { type: "h2", text: "How We Support Breached Users & Clients" },
      { type: "list", items: [
        "360-Degree Dark Web Scanning: Ingesting 1.6+ billion identity records to surface full exposure maps.",
        "Guided Remediation Playbooks: Providing automated, step-by-step recovery steps tailored to the specific type of breach (healthcare, financial, credential, or identity).",
        "Executive & VIP Shielding: Specialized identity monitoring for corporate leaders frequently targeted in impersonation campaigns.",
        "Direct API Integration: Plugging directly into enterprise IT security stacks to automate containment without human delay."
      ]}
    ]
  },
  "post-breach-identity-restoration-playbook": {
    author: "Track The Breach Editorial",
    blocks: [
      { type: "lead", text: "Restoring digital identity hygiene after an exposure event requires a disciplined approach. Here is how Track The Breach guides users through complete identity restoration." },
      { type: "h2", text: "Audit Interconnected SaaS Grants" },
      { type: "p", text: "Attackers who gain temporary access often install silent OAuth applications to maintain persistence. Review all third-party app authorizations connected to your primary Google, Microsoft, or social accounts and revoke unused permissions immediately." },
      { type: "h2", text: "Continuous Identity Guarding" },
      { type: "p", text: "Breach data is frequently resold months after the initial leak. Continuous monitoring ensures that as secondary threat actors aggregate and package your exposed information into fresh combo-lists, your team is alerted first." }
    ]
  }
      {
  "fintech-api-abuse-2026": {
    author: "Track The Breach Financial Security Team",
    blocks: [
      { type: "lead", text: "The rapid rise of Open Banking and BaaS (Banking-as-a-Service) has transformed the financial sector, but it has also created a massive, often unmonitored attack surface: the API layer." },
      { type: "h2", text: "The API Blindspot" },
      { type: "p", text: "Unlike traditional web applications, APIs are designed for machine-to-machine communication, making malicious traffic harder to distinguish from legitimate user behavior. In 2026, threat actors are aggressively targeting Open Banking APIs to scrape account balances, initiate unauthorized micro-transactions, and harvest PII." },
      { type: "h2", text: "Bypassing Rate Limits" },
      { type: "p", text: "Attackers no longer blast a single API endpoint from one IP address. They utilize massive residential proxy networks—routing their attacks through millions of compromised home Wi-Fi routers and smart TVs. This 'low and slow' approach easily bypasses traditional rate-limiting and IP blacklists." },
      { type: "h2", text: "The Defense Playbook" },
      { type: "p", text: "Fintechs must adopt behavioral API security. Defenses must analyze the context of the request—looking at the sequence of API calls, the velocity of token generation, and the geographic impossibility of session requests—rather than just the volume of traffic." }
    ]
  },
  "healthcare-black-market-value": {
    author: "Track The Breach Threat Intelligence",
    blocks: [
      { type: "lead", text: "If a stolen credit card sells for $5 on a dark web marketplace, a complete medical record can easily fetch $50 to $250. Here is why the healthcare sector is under relentless siege." },
      { type: "h2", text: "The Value of Immutable Data" },
      { type: "p", text: "You can cancel a credit card in five minutes. You cannot cancel your medical history, your blood type, or your Social Security Number. Protected Health Information (PHI) is immutable, giving it a much longer shelf-life for cybercriminals." },
      { type: "h2", text: "Medical Identity Theft" },
      { type: "p", text: "Buyers on the dark web use stolen medical records to commit medical identity theft. They forge identities to receive expensive surgeries, procure prescription narcotics to resell on the street, or file massive, fraudulent claims with government insurance programs like Medicare and Medicaid." },
      { type: "h2", text: "Extortion Leverage" },
      { type: "p", text: "Ransomware groups target hospitals because the urgency is life-or-death, increasing the likelihood of a payout. Furthermore, they use the highly sensitive nature of psychiatric records, terminal diagnoses, and cosmetic surgery details to extort individual patients directly if the hospital refuses to pay." }
    ]
  },
  "ecommerce-botnet-defense": {
    author: "Track The Breach Fraud Prevention",
    blocks: [
      { type: "lead", text: "E-commerce platforms are fighting a daily, silent war against automated botnets. The prize? Customer loyalty points, stored credit cards, and high-demand inventory." },
      { type: "h2", text: "Account Takeover (ATO) at Scale" },
      { type: "p", text: "Using billions of leaked credentials from previous breaches (like the massive Synthient leak of 2026), attackers deploy credential stuffing bots against retail login pages. Because consumers heavily reuse passwords, attackers successfully breach accounts, draining loyalty reward points or making purchases using saved payment methods." },
      { type: "h2", text: "Inventory Denial (Grinch Bots)" },
      { type: "p", text: "Beyond ATO, specialized 'scalper bots' are used to instantly buy up high-demand inventory (like limited-edition sneakers or electronics) the millisecond it goes live, denying real customers the chance to buy and destroying brand trust." },
      { type: "h2", text: "Moving Beyond CAPTCHA" },
      { type: "p", text: "Traditional CAPTCHAs introduce massive friction for real shoppers and are easily bypassed by AI-solving services. Retailers must shift to invisible behavioral biometrics—analyzing mouse movements, keystroke dynamics, and device fingerprinting to silently separate humans from bots." }
    ]
  },
  "manufacturing-it-ot-convergence": {
    author: "Track The Breach Infrastructure Team",
    blocks: [
      { type: "lead", text: "For decades, factory floors were 'air-gapped'—completely disconnected from the corporate internet. With the rise of Industry 4.0, that gap has vanished, and the security implications are severe." },
      { type: "h2", text: "The IT/OT Collision" },
      { type: "p", text: "Modern manufacturing requires Operational Technology (OT)—the robotic arms, PLCs, and HVAC systems—to communicate with Information Technology (IT) for predictive maintenance and supply chain analytics. However, legacy OT equipment was never designed with security in mind. It lacks encryption, MFA, and modern authentication." },
      { type: "h2", text: "Lateral Movement to the Factory Floor" },
      { type: "p", text: "Threat actors now routinely breach a manufacturer's corporate IT network (often via a simple phishing email to an HR employee) and pivot laterally into the poorly defended OT network. Once there, they deploy ransomware that physically halts the assembly line." },
      { type: "h2", text: "Securing the Smart Factory" },
      { type: "p", text: "Manufacturers must implement strict micro-segmentation. An infection in the corporate email server should never have a routable path to the safety controllers on the factory floor. The Purdue Model of network segmentation is no longer a best practice; it is a survival requirement." }
    ]
  },
  "law-firms-third-party-vector": {
    author: "Track The Breach Privacy Desk",
    blocks: [
      { type: "lead", text: "Why spend months trying to hack a Fortune 500 bank when you can simply hack the 50-person law firm handling their mergers and acquisitions?" },
      { type: "h2", text: "The Ultimate Data Aggregators" },
      { type: "p", text: "Law firms, accountancies, and consulting groups are prime targets because they act as centralized repositories of highly sensitive data. A successful breach of a mid-sized legal practice yields unannounced M&A details (perfect for insider trading), corporate trade secrets, and massive volumes of executive PII." },
      { type: "h2", text: "The Supply Chain Audit" },
      { type: "p", text: "In 2026, major enterprises are ruthlessly auditing their legal partners. Law firms that cannot prove they enforce hardware MFA, maintain continuous dark web monitoring, and utilize zero-trust architecture are actively losing lucrative enterprise retainers." },
      { type: "h2", text: "Client Data Silos" },
      { type: "p", text: "Legal practices must abandon flat network architectures. A junior associate working on a real estate contract should not have default network access to the directory containing a multi-billion dollar tech acquisition. Strict, role-based access control (RBAC) is non-negotiable." }
    ]
  }
};
