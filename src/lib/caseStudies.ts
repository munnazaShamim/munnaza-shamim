export interface CaseStudyImage {
  src: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  summary: string;
  categories: string[];
  challenge: string;
  solution: string;
  features: string[];
  techStack: string[];
  proof: string[];
  imageLabel: string;
  gallery?: CaseStudyImage[];
  featured: boolean;
  /** Public production URL, omitted for anonymous client work or projects deployed by others. */
  liveUrl?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'real-time-vehicle-auction-platform',
    title: 'Real-Time Vehicle Auction Platform',
    client: 'Live bidding & auction marketplace for a German client',
    summary:
      'A custom-built real-time bidding platform with instant, authenticated bid updates, three purpose-built role dashboards, and a full transactional email system tying the whole auction lifecycle together.',
    categories: ['Live Bidding & Real-Time'],
    challenge:
      "Standard WordPress has no concept of live, concurrent bidding. There is no real-time state, no per-listing access control, no role-based dashboard separation, and no notification workflow for a multi-party, high-value transaction. The client needed all of this built from scratch on top of WordPress, matched pixel-for-pixel to a design delivered as an XD file, including the live in-page bidding animation.",
    solution:
      'Built the entire auction engine as custom PHP and MySQL logic inside a custom-coded WordPress plugin: bid calculations, role-based permissions, and auction state are all handled server-side, not through a page builder or an off-the-shelf auction plugin. Layered Node.js WebSockets on top so every active auction gets its own authenticated room, and bid updates are pushed only to the logged-in users actually watching that listing rather than broadcast site-wide. Built three separate dashboards (Seller, Dealer, and Admin), each scoped to just the data and actions relevant to that role, with every new registration manually verified by an admin before dashboard access is granted. Wired a full transactional email system into every step of the auction lifecycle, and added an authenticated, admin-verified live chat plus AI-powered outbound verification calls for high-value transactions. The full visual design, including the live bidding animation, was implemented exactly as delivered in the client\'s XD files.',
    features: [
      'Real-time bid engine with no page reload',
      'Per-auction WebSocket rooms, authenticated & scoped per client',
      'Seller, Dealer, and Admin dashboards with admin-verified access',
      'Full auction-lifecycle transactional email system',
      'Authenticated live chat (registered, verified users only)',
      'AI-powered outbound verification calls',
    ],
    techStack: ['WordPress (custom plugin)', 'PHP', 'MySQL', 'Node.js', 'WebSockets'],
    proof: [
      'Every bid is pushed live over WebSockets, with no refresh and no polling, scoped to an authenticated room per auction rather than a public broadcast',
      'Three role-based dashboards (Seller, Dealer, Admin), each showing only the data and actions relevant to that role, with every account manually verified by an admin before dashboard access',
      'Bidding activity and bid details are gated entirely behind login, with no anonymous visibility',
      'Transactional emails fire at every stage of the workflow: new registration (user + admin), new vehicle listed for auction (seller + admin), and auction completed (seller, admin, and the highest bidder)',
      'Authenticated, admin-verified live chat and AI-powered outbound verification calls layered directly into the bidding flow',
      "Full design system, including the live in-page bidding animation, implemented pixel-for-pixel from the client's XD files",
    ],
    imageLabel: 'Auction platform, desktop screenshot (1600x1000)',
    gallery: [
      { src: '/autoauction-hompage.png', label: 'Homepage: live auction listings' },
      { src: '/autoauciton-hompage2.png', label: 'Homepage: featured auctions' },
      { src: '/autoauction-homepage3.png', label: 'Homepage: how bidding works' },
      { src: '/autoauction-vehical-listing.png', label: 'Vehicle listing page' },
      { src: '/autoauction-vehical-detail-page.png', label: 'Vehicle detail page: live bidding' },
      { src: '/autoauction-seller-dashboard.png', label: 'Seller dashboard' },
      { src: '/autoauction-dealer-dashboard.png', label: 'Dealer dashboard' },
      { src: '/autoauciton-admin-dahsboard.png', label: 'Admin dashboard' },
    ],
    featured: true,
  },
  {
    slug: 'commercial-vehicle-marketplace-network',
    title: 'Commercial Vehicle Marketplace Network',
    client: 'Multi-site commercial vehicle trade network for a German client',
    summary:
      'A network of production marketplace sites sharing one custom listing, filtering, and search engine built for commercial vehicle trade, and each site is also engineered with its own SEO-friendly technical foundation.',
    categories: ['Marketplace & Listings', 'SEO & Performance'],
    challenge:
      "Commercial vehicle inventory doesn't fit generic listing plugins. Buyers filter by trade-specific fields, and off-the-shelf search doesn't hold up once inventory and traffic scale across multiple properties. Running several sites off shared catalog logic also risks duplicate-content and technical SEO problems if the sites aren't built deliberately to rank independently.",
    solution:
      'Built custom vehicle listing systems with advanced filtering, sorting, and search tailored to commercial vehicle attributes, backed by custom API integrations, dynamic search modules, and centralized data management dashboards across the network, all delivered as custom-coded WordPress plugins rather than off-the-shelf listing tools. Every site was also built with its own SEO-friendly technical foundation (clean URL structures, schema and meta markup, and fast page-load performance) so each property could rank and convert organic traffic independently instead of competing with the rest of the network.',
    features: [
      'Multi-attribute filtering & sorting',
      'Custom API integrations',
      'Trade-specific search modules',
      'Centralized inventory dashboards',
      'SEO-friendly technical foundation (clean URLs, schema markup, fast page loads)',
    ],
    techStack: ['WordPress (custom plugin architecture)', 'PHP', 'MySQL', 'Custom REST APIs'],
    proof: [
      'Multiple production sites sharing one custom listing/search engine, not a page-builder template',
      'Filtering built around real commercial-vehicle trade attributes, not a generic listing plugin schema',
      'One centralized inventory dashboard managing listings across every site in the network',
      'Each site built with its own SEO-friendly technical foundation (clean URLs, schema and meta markup, fast page loads) to rank and convert independently rather than duplicate content across properties',
    ],
    imageLabel: 'Vehicle marketplace network, desktop screenshot (1600x1000)',
    gallery: [
      { src: '/commercial-vehicle-marketplace-network1.png', label: 'Network site: truck (LKW) sales landing page' },
      { src: '/commercial-vehicle-marketplace-network2.png', label: 'Network site: car (PKW) sales landing page' },
      { src: '/commercial-vehicle-marketplace-network3.png', label: 'Network site: live vehicle listing & inventory' },
      { src: '/commercial-vehicle-marketplace-network4.png', label: 'Network site: vision, mission & expertise section' },
      { src: '/commercial-vehicle-marketplace-network5.webp', label: 'Sister site on the same platform: home improvement services' },
    ],
    featured: true,
  },
  {
    slug: 'nexus-clinic-headless-wordpress-nextjs',
    title: 'Nexus Clinic: WordPress to Next.js Migration',
    client: 'Nexus Clinic, aesthetic & medical clinic, Kuala Lumpur, Malaysia',
    summary:
      'Migrated an aesthetic-clinic site from traditional WordPress to a headless WordPress + Next.js architecture, landing near-perfect Lighthouse scores on both mobile and desktop.',
    categories: ['Performance', 'Core Web Vitals', 'Deployment & Infrastructure'],
    challenge:
      "The client's site was running on traditional WordPress and wanted to move to React for stronger SEO control and faster pages, without losing the WordPress content-editing workflow the team already relied on. Beyond the migration itself, the project needed someone to own the full deployment pipeline and server security end to end, not just hand off code.",
    solution:
      'Rebuilt the entire front end in Next.js for server-rendering and fine-grained SEO control, while keeping WordPress as a headless CMS on the backend so content stays fully editable for the team. Secured the connection between the two by locking down the WordPress API so it is never exposed directly to the browser, and carried out full technical optimization across the site, resulting in near-perfect Lighthouse scores on both mobile and desktop. I also owned the full deployment pipeline: pushing code from GitHub straight to the production VPS, hardening and securing the VPS itself, and routing all traffic through Cloudflare.',
    features: [
      'Headless WordPress backend, Next.js front end',
      'Secured WordPress API, never exposed directly to the browser',
      'Server-rendered pages built for SEO',
      'Full technical performance optimization pass',
      'GitHub-to-VPS deployment pipeline, fully self-managed',
      'VPS hardening & security, traffic routed through Cloudflare',
    ],
    techStack: [
      'Next.js',
      'React',
      'WordPress (headless CMS)',
      'Secured WordPress REST API',
      'Node.js',
      'GitHub',
      'VPS',
      'Cloudflare',
    ],
    proof: [
      'Mobile Lighthouse: 95 Performance, 97 Accessibility, 100 Best Practices, 100 SEO',
      'Desktop Lighthouse: 100 Performance, 97 Accessibility, 100 Best Practices, 100 SEO',
      'Desktop Core Web Vitals: 0.5s First Contentful Paint, 0.8s Largest Contentful Paint, 30ms Total Blocking Time, 0.01 Cumulative Layout Shift',
      'WordPress API secured and only ever consumed on the backend, never exposed directly to the client',
      'Full deployment pipeline self-managed from GitHub to VPS, with the VPS hardened and traffic secured through Cloudflare',
    ],
    imageLabel: 'Nexus Clinic homepage, desktop screenshot (1600x1000)',
    gallery: [
      { src: '/nexus.webp', label: 'Homepage: hero section' },
      { src: '/nexus-service-pages.webp', label: 'Botox treatment service page' },
      { src: '/nexus-full.webp', label: 'Full page design' },
    ],
    featured: true,
    liveUrl: 'https://www.nexus-clinic.com/',
  },
  {
    slug: 'custom-laravel-blog-cms-secure-api',
    title: 'Custom Laravel CMS: Secure Blog Publishing & API',
    client: 'Dr. Soma Plastic Surgery, plastic surgery clinic, Malaysia (built at DaikiMedia)',
    summary:
      'A custom Laravel CMS for blog authoring and publishing, serving content to the live site through a secure custom API, with two-factor OTP-gated admin login.',
    categories: ['Custom CMS', 'Performance'],
    challenge:
      "The team needed a way to write and publish blog content without touching the live site's codebase, served through an API rather than a shared database. Since this was a fully custom, single-purpose admin panel rather than a hardened, widely-used platform like WordPress, admin access itself needed to be locked down deliberately rather than relying on a plugin ecosystem's existing security track record.",
    solution:
      "Built a complete CMS in Laravel for authoring and publishing blog content, with a secure custom API that the live site fetches and renders content from. Gated the admin login behind two-factor authentication (email and password plus a one-time OTP code) so the CMS can't be reached from anywhere with credentials alone. The consuming frontend was also optimized specifically for Largest Contentful Paint, so pulling content from the CMS API doesn't cost the site its load speed.",
    features: [
      'Custom blog authoring & publishing CMS, built in Laravel',
      'Secure custom API, live site fetches and renders CMS content',
      'Two-factor (OTP) gated admin login',
      'Frontend optimized specifically for Largest Contentful Paint',
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'Custom REST API', 'OTP-based Two-Factor Authentication'],
    proof: [
      'Admin login gated behind email and password plus a one-time OTP code, so the CMS cannot be reached with credentials alone',
      'Blog content is authored in the CMS and served to the live site entirely through a custom-built API, not a shared database',
      'Live site running on this CMS scores 91 Performance, 85 Accessibility, 100 Best Practices, 100 SEO on desktop, and 95 Performance, 85 Accessibility, 100 Best Practices, 100 SEO on mobile in PageSpeed Insights',
    ],
    imageLabel: 'Custom CMS, secure OTP-gated admin login (1600x1000)',
    gallery: [
      { src: '/soma-cms-interface.png', label: 'CMS: secure OTP-gated admin login' },
      { src: '/soma-aesthetic-clinic.webp', label: 'Live site homepage: content served from the CMS API' },
    ],
    featured: true,
    liveUrl: 'https://drsomaplasticsurgery.com/',
  },
  {
    slug: 'furnishings-my-nextjs-api-caching',
    title: 'Vinyl & Carpet Flooring Retailer: API Caching & Core Web Vitals Fix',
    client: 'Vinyl & carpet flooring retailer, Malaysia',
    summary:
      'Fixed an already-built Next.js site that was extremely slow and felt sluggish to browse, by replacing scattered, repeated API calls with a centralized caching layer, which smoothed out scrolling and page-to-page navigation while landing near-perfect Lighthouse scores on mobile and desktop.',
    categories: ['Performance', 'Core Web Vitals'],
    challenge:
      'The site was already built in Next.js on Vercel, pulling content from a CMS API built by another developer, but it was extremely slow. The same API endpoints were being fetched independently on multiple pages, sometimes multiple times on a single page, with no single caching layer controlling any of it. Every page load re-hit an already-slow backend API directly, compounding load time on top of a slow server, and browsing the site felt heavy, with scrolling and moving between pages stalling while components waited on the same data to come back again.',
    solution:
      'Introduced a centralized caching layer across the site, so products, blogs, and general site data all now go through cached fetches instead of every page independently re-calling the CMS API. That cut both the number of API calls and the time spent waiting on the slow backend, taking load time and Largest Contentful Paint down sharply on both mobile and desktop. With components no longer re-fetching the same data on every render, scrolling and navigating through product and blog pages became smooth and immediate instead of stalling. The whole site felt faster to move through overall, not only quicker on first paint.',
    features: [
      'Centralized caching layer for products, blogs & site-wide data',
      'Eliminated duplicate, uncached API calls across pages',
      'Next.js data fetching optimized, deployed on Vercel',
      'LCP and load-time optimization across mobile & desktop',
      'Smooth, uninterrupted scrolling and page-to-page navigation',
    ],
    techStack: ['Next.js', 'React', 'Vercel', 'Headless CMS API (third-party)'],
    proof: [
      'Mobile Lighthouse: 97 Performance, 96 Accessibility, 100 Best Practices, 100 SEO',
      'Desktop Lighthouse: 99 Performance, 96 Accessibility, 96 Best Practices, 100 SEO',
      'Repeated, uncached API calls scattered across pages replaced with a single centralized caching layer for products, blogs, and site data',
      'Scrolling and browsing across product and blog pages no longer stalls on repeat API calls, and the site now moves as fast as it loads',
    ],
    imageLabel: 'Flooring retailer, desktop Lighthouse audit (1600x1000)',
    gallery: [
      { src: '/furnishing-hero.webp', label: 'Homepage: hero section' },
      { src: '/furnishing-lcp-desktop.png', label: 'Desktop Lighthouse audit after caching' },
      { src: '/furnishing-lcp.png', label: 'Mobile Lighthouse audit after caching' },
    ],
    featured: true,
    liveUrl: 'https://www.furnishings.com.my/',
  },
  {
    slug: 'daikimedia-core-web-vitals-optimization',
    title: 'DaikiMedia: Core Web Vitals & Performance Optimization',
    client: 'DaikiMedia, growth marketing agency (the agency\'s own site)',
    summary:
      'Fixed a mobile Performance score stuck at 46 on DaikiMedia\'s own marketing site, taking it to 95 on mobile and a perfect 100 on desktop with a full-stack optimization pass.',
    categories: ['Performance', 'Core Web Vitals'],
    challenge:
      "DaikiMedia's own marketing site, the agency's primary lead-generation asset, was scoring just 46 for mobile Performance in Google PageSpeed Insights, despite Accessibility, Best Practices, and SEO all already sitting in the 90s. The site looked fine on paper but was slow for the real visitors it needed to convert.",
    solution:
      "Rather than chasing a single metric, ran a full performance pass across every layer contributing to the slow mobile load: optimized and lazy-loaded images, removed render-blocking JS and CSS, tightened font loading, trimmed unnecessary third-party scripts, and improved caching across the site. The site is a Next.js and React app shipped as a static export to the live host, so the fixes landed directly in the exported build rather than depending on server-side tuning.",
    features: [
      'Image optimization & lazy-loading across the site',
      'Removed render-blocking JS and CSS',
      'Optimized font loading & trimmed third-party scripts',
      'Caching improvements across pages',
      'Next.js static export (SSG) build shipped to production',
    ],
    techStack: ['Next.js', 'React', 'Static Export (SSG)'],
    proof: [
      'Mobile Lighthouse Performance: 46 → 95 after optimization, with Accessibility 96, Best Practices 100, and SEO 92 held steady',
      'Desktop Lighthouse: 100 Performance, 93 Accessibility, 100 Best Practices, 92 SEO',
      'Fixed at the build level, since the site ships as a static Next.js export rather than a server-rendered app tuned after the fact',
    ],
    imageLabel: 'DaikiMedia, desktop Lighthouse audit after optimization (1600x1000)',
    gallery: [
      { src: '/daikimedia-core-web-vital-destop.png', label: 'Desktop Lighthouse audit after optimization (100 Performance)' },
      { src: '/daikimedia-before-core-web-vital.png', label: 'Mobile Lighthouse audit before optimization (46 Performance)' },
      { src: '/daikimedia.after-core-web-vital.png', label: 'Mobile Lighthouse audit after optimization (95 Performance)' },
    ],
    featured: true,
    liveUrl: 'https://www.daikimedia.com/',
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((study) => study.featured);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(caseStudies.flatMap((study) => study.categories)));
}
