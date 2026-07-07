export interface BlogCode {
  language: string;
  snippet: string;
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  code?: BlogCode;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  intro: string;
  sections: BlogSection[];
  takeaways: string[];
  relatedCaseStudy?: { slug: string; label: string };
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'core-web-vitals-2026-lcp-inp-cls',
    title: 'Core Web Vitals in 2026: What Actually Moves LCP, INP, and CLS',
    excerpt:
      'A practical breakdown of the fixes that move the needle on Core Web Vitals, versus the ones that just look good in an audit.',
    category: 'Performance',
    readTime: '5 min read',
    publishDate: '2026-01-12',
    intro:
      "Most Core Web Vitals advice stops at plugin recommendations and generic checklists. In practice, the fixes that actually move LCP, INP, and CLS on a production site are architectural — how your data is fetched, how many times it's fetched, and what runs before the browser paints anything. This is what I've found actually works, based on real production sites I've audited and fixed.",
    sections: [
      {
        heading: "LCP is a data-fetching problem before it's an image problem",
        paragraphs: [
          "The default advice for Largest Contentful Paint is always about the hero image: compress it, lazy-load below the fold, serve WebP. That's real, but it's rarely the biggest lever on a site that's actually slow. The biggest lever is usually how long the server takes to have something to paint in the first place.",
          "On one Next.js site I inherited — a flooring retailer's e-commerce catalog — the front end was already built and deployed on Vercel, but it was pulling from a CMS API with no caching layer at all. The same product and blog endpoints were being fetched independently, sometimes more than once on a single page. Every request re-hit an already-slow backend before the page could render anything. The fix wasn't image compression — it was introducing a centralized caching layer so products, blogs, and site-wide data stopped being re-fetched on every page load. That single architectural change took Lighthouse Performance from a struggling score to 97 mobile / 99 desktop, because the bottleneck was never the image — it was the round trip before the image could even be requested.",
        ],
        code: {
          language: 'TypeScript — Next.js',
          snippet: `// lib/api.ts — one cached fetch, shared by every page that needs products
export async function getProducts() {
  const res = await fetch(process.env.CMS_API_URL + '/products', {
    // Cache and reuse across pages for 10 minutes instead of
    // re-hitting the slow CMS API on every render.
    next: { revalidate: 600 },
  });
  if (!res.ok) throw new Error('CMS API responded ' + res.status);
  return res.json();
}`,
        },
      },
      {
        heading: 'INP replaced FID for a reason — and most sites still optimize for the wrong metric',
        paragraphs: [
          "Interaction to Next Paint replaced First Input Delay because FID only measured the delay before a browser could start responding to input — it said nothing about how long the actual response took. INP measures the full interaction: input, processing, and paint. A site can have a perfect FID and still feel sluggish every time someone clicks a filter or opens a menu.",
          'In practice, INP problems come from the same place every time: too much JavaScript running on the main thread during an interaction, usually from client components that didn\'t need to be client components. On a rendering-heavy Next.js app, the fix is almost always pushing more of the tree back to server components and keeping "use client" scoped to the smallest interactive island possible, not the whole page.',
        ],
      },
      {
        heading: 'CLS mistakes that keep coming back',
        paragraphs: [
          'Cumulative Layout Shift almost always comes down to three repeat offenders: images and embeds without explicit width/height (or a fill-mode image without a properly sized container), web fonts swapping in after a FOUC, and content injected above existing content after the initial render — think cookie banners, personalization widgets, or lazily-loaded ad slots that push everything down.',
          "The fix that's easy to skip is reserving space for anything that loads asynchronously, even if you don't know its exact final size yet — a skeleton with a fixed aspect ratio beats letting the DOM jump when the real content arrives.",
        ],
      },
      {
        heading: 'What actually held up in production',
        paragraphs: [
          "On the Nexus Clinic rebuild — migrating an aesthetic clinic's site from traditional WordPress to headless WordPress with a Next.js front end — the combination of server-rendered pages, a secured API layer, and a full technical optimization pass landed 0.8s Largest Contentful Paint and 30ms Total Blocking Time on desktop, with 95+ Performance on mobile and 100 on desktop. None of that came from a single silver-bullet setting. It came from treating rendering strategy, data fetching, and JavaScript weight as one system instead of three separate audits.",
        ],
      },
    ],
    takeaways: [
      'LCP is usually a data-fetching and caching problem before it becomes an image problem.',
      'INP tracks the full interaction — audit main-thread JavaScript, not just input delay.',
      'CLS fixes mean reserving space for anything async, not just adding image dimensions.',
      'Treat Core Web Vitals as one system: rendering strategy, caching, and JS weight together.',
    ],
    relatedCaseStudy: { slug: 'nexus-clinic-headless-wordpress-nextjs', label: 'Read the full Nexus Clinic case study' },
  },
  {
    id: 2,
    slug: 'wordpress-to-nextjs-migration-seo',
    title: 'WordPress to Next.js Migration Without Losing SEO Rankings',
    excerpt:
      "How to plan a framework migration so three years of search rankings don't disappear on launch day.",
    category: 'SEO',
    readTime: '5 min read',
    publishDate: '2026-02-18',
    intro:
      'A framework migration is one of the few times a client can lose years of organic rankings in a single deploy. The technical work of rebuilding the front end in Next.js is the easy half. The half that actually protects rankings is everything around the migration — the API boundary, the redirect map, and structured data parity.',
    sections: [
      {
        heading: "Keep WordPress — just stop rendering with it",
        paragraphs: [
          'The instinct with these migrations is often "replace WordPress." That throws away a content workflow the editorial team already knows, for no SEO benefit. The better pattern — the one I used rebuilding Nexus Clinic\'s site — is headless: WordPress stays exactly where the team already works, and Next.js takes over rendering, routing, and SEO control entirely. Content editors keep their workflow. The front end gets server-rendered pages, fine-grained meta control, and a Lighthouse profile that traditional WordPress themes can\'t match.',
        ],
      },
      {
        heading: 'Lock down the WordPress REST API before you expose anything',
        paragraphs: [
          'The part that gets skipped under deadline pressure is securing the boundary between the two systems. If the WordPress REST API is reachable directly from the browser, you\'ve exposed your entire content backend and handed anyone a way to hit your database indirectly. On the Nexus Clinic migration, the WordPress API is never exposed directly to the browser — it\'s consumed only on the backend, so the public-facing surface is entirely the Next.js layer I control.',
        ],
      },
      {
        heading: 'The redirect map is the actual SEO deliverable',
        paragraphs: [
          "Before a single line of Next.js gets deployed to production, every existing URL needs a 1:1 mapping to its new location, with proper 301s — not blanket redirects to a homepage, which reads to Google as a wholesale loss of the old page's relevance. Canonical tags, sitemap.xml, and robots.txt all need to go live in the same deploy as the redirects, not as a follow-up task a week later. Search engines re-crawl fast; a gap of even a few days with broken canonicals or a stale sitemap is enough to cost rankings you spent years building.",
        ],
        code: {
          language: 'TypeScript — next.config.ts',
          snippet: `// next.config.ts — the 301 map ships in the same deploy as the new site
const nextConfig = {
  async redirects() {
    return [
      // 1:1 mapping for every old WordPress URL —
      // never a blanket redirect to the homepage
      { source: '/2023/:month/:slug', destination: '/blog/:slug', permanent: true },
      { source: '/service/:slug', destination: '/treatments/:slug', permanent: true },
    ];
  },
};
export default nextConfig;`,
        },
      },
      {
        heading: 'Structured data parity, not structured data improvement',
        paragraphs: [
          "If the old WordPress theme was emitting schema markup — Article, Product, LocalBusiness, whatever fit the content — the new Next.js templates need to emit the same schema types with the same data, verified in Rich Results Test before launch, not after. Improving structured data is a good follow-up project. Losing it on migration day is not recoverable quickly.",
        ],
      },
      {
        heading: "Measure the thing you're actually trying to protect",
        paragraphs: [
          'Lighthouse and PageSpeed scores are necessary but they\'re not the success metric — indexed page count and ranking position for existing target keywords are. On Nexus Clinic, alongside the near-perfect Lighthouse scores (100 SEO / 100 Best Practices on both mobile and desktop), the actual validation was Search Console showing the same pages indexed post-launch with no ranking cliff — because the redirect and structured data work happened before launch, not after.',
        ],
      },
    ],
    takeaways: [
      'Go headless, not full replacement — keep the CMS workflow, replace only the rendering layer.',
      'Never expose the WordPress REST API directly to the browser; consume it server-side only.',
      'Ship the full 301 redirect map, canonicals, and sitemap in the same deploy as the migration.',
      'Verify structured data parity before launch — track indexed pages and rankings, not just Lighthouse scores.',
    ],
    relatedCaseStudy: { slug: 'nexus-clinic-headless-wordpress-nextjs', label: 'Read the full Nexus Clinic case study' },
  },
  {
    id: 3,
    slug: 'woocommerce-checkout-speed-conversions',
    title: 'Why WooCommerce Checkout Speed Kills Conversions',
    excerpt:
      'Where WooCommerce stores actually lose speed at checkout, and the fixes that hold up under real traffic.',
    category: 'WordPress',
    readTime: '4 min read',
    publishDate: '2026-03-22',
    intro:
      "Checkout is the one page on an e-commerce site where speed has a direct, measurable line to revenue — every extra second of load time at checkout is a customer re-reading their card details instead of clicking pay. Most WooCommerce slowness at checkout traces back to a small set of causes, and almost none of them are the theme.",
    sections: [
      {
        heading: 'Plugin stacking is the default failure mode',
        paragraphs: [
          "WooCommerce checkout pages typically load a stack of plugins simultaneously: a page builder's own JS/CSS bundle, multiple payment gateway scripts (often all of them, even the ones a given customer won't use), a cart-abandonment plugin, a reviews widget, and marketing pixels — all render-blocking, all on the one page where speed matters most. The fix isn't disabling features — it's conditionally loading gateway scripts only for the gateway the customer selects, and moving every non-essential script off the checkout template entirely.",
        ],
        code: {
          language: 'PHP — WordPress',
          snippet: `// functions.php — stop loading every payment SDK on every page
add_action('wp_enqueue_scripts', function () {
    if (!is_checkout()) {
        // Gateways enqueue their SDKs site-wide by default:
        // strip them everywhere except checkout itself.
        wp_dequeue_script('woocommerce_stripe');
        wp_dequeue_script('ppcp-smart-button');
    }
}, 99);`,
        },
      },
      {
        heading: 'Every cart update is a database write, and most plugins don\'t batch them',
        paragraphs: [
          'WooCommerce recalculates cart totals, shipping, and tax on essentially every field change, and by default that means a synchronous PHP call back to MySQL. On a low-traffic store this is invisible. Under real checkout traffic — especially with several third-party plugins each hooking into the same cart-update actions — this compounds into checkout pages that visibly stall on interaction, which is exactly where INP-style responsiveness problems become conversion problems.',
        ],
      },
      {
        heading: "Off-the-shelf listing and checkout logic doesn't hold up at scale",
        paragraphs: [
          "This is the same lesson I've applied building custom listing and search systems for a commercial vehicle marketplace network — off-the-shelf plugin logic is built for the general case, not your actual traffic pattern or data shape. Once volume or complexity passes a certain point, custom-coded plugin logic against the database directly — rather than relying on a generic plugin's assumptions — is what keeps checkout fast instead of degrading as the catalog and order volume grow.",
        ],
      },
      {
        heading: 'The checklist that actually holds up under load',
        paragraphs: [
          'Object caching (Redis or Memcached) so repeated cart/session lookups don\'t hit MySQL every time. A dedicated PHP-FPM and MySQL configuration tuned for checkout\'s write-heavy pattern, not just read caching. Conditional script loading so a customer only downloads the payment gateway SDK for the gateway they picked. And load testing checkout specifically — not the homepage — because checkout is where synchronous writes and third-party scripts collide hardest.',
        ],
      },
    ],
    takeaways: [
      'Checkout page weight is usually plugin stacking, not the theme — audit what loads on that template specifically.',
      'Cart recalculation is a database write on nearly every interaction; batch and cache it.',
      'Custom logic against the database beats generic plugin assumptions once traffic or catalog complexity scales.',
      'Load test checkout specifically — its failure pattern is different from a homepage or product page.',
    ],
    relatedCaseStudy: {
      slug: 'commercial-vehicle-marketplace-network',
      label: 'Read the commercial vehicle marketplace case study',
    },
  },
  {
    id: 4,
    slug: 'real-time-features-wordpress-websockets',
    title: 'Real-Time Features on WordPress: WebSockets Without a Full Rebuild',
    excerpt:
      'Adding live bidding, live chat, or live dashboards to a WordPress site without replacing the CMS underneath it.',
    category: 'Architecture',
    readTime: '5 min read',
    publishDate: '2026-04-09',
    intro:
      "WordPress has no native concept of real-time state — no live updates, no concurrent session awareness, nothing built for a feature like live bidding or a live dashboard. The usual response is to say WordPress can't do it and reach for a full rebuild on another stack. That's rarely necessary. I've built this exact capability directly on top of WordPress, and the pattern holds for most real-time features a WordPress-based business needs.",
    sections: [
      {
        heading: "The core split: WordPress owns state, Node.js owns the wire",
        paragraphs: [
          "The architecture that worked when I built a real-time vehicle auction platform was keeping WordPress as the system of record — a custom-coded plugin handling bid calculations, role-based permissions, and auction state entirely in server-side PHP and MySQL, not a page builder or an off-the-shelf auction plugin — while layering Node.js WebSockets on top purely as the real-time transport. WordPress never tries to hold an open connection or manage live state itself. It stays doing what it's good at: authenticated data, permissions, and persistence.",
        ],
      },
      {
        heading: 'Authenticated, scoped rooms — not a public broadcast',
        paragraphs: [
          "The mistake that's easy to make with WebSockets is treating every event as something to broadcast site-wide. On the auction platform, every listing gets its own authenticated WebSocket room, and bid updates are pushed only to logged-in users actually watching that specific listing — not blasted to every connected client. Bidding activity and bid details are gated entirely behind login; there's no anonymous visibility into live auction data at all. That distinction matters both for performance — you're not pushing irrelevant events to thousands of idle connections — and for the access control a live-bidding business actually needs.",
        ],
        code: {
          language: 'JavaScript — Node.js + Socket.IO',
          snippet: `// Every auction gets its own authenticated room — never a site-wide broadcast
io.use(async (socket, next) => {
  // Validate the WordPress session before any room can be joined
  const user = await verifyWpSession(socket.handshake.auth.token);
  if (!user) return next(new Error('unauthorized'));
  socket.data.user = user;
  next();
});

io.on('connection', (socket) => {
  socket.on('watch', (auctionId) => {
    socket.join('auction:' + auctionId);
  });
});

// When WordPress confirms a bid, only that auction's watchers hear it
function broadcastBid(auctionId, bid) {
  io.to('auction:' + auctionId).emit('bid:update', bid);
}`,
        },
      },
      {
        heading: 'Role-based dashboards need their own access model, not a WordPress role tweak',
        paragraphs: [
          "Adding real-time features usually comes with a need for multiple, differently-scoped views of the same live data. The auction platform needed three: Seller, Dealer, and Admin, each showing only the data and actions relevant to that role — and every new registration is manually verified by an admin before dashboard access is granted at all. That's a deliberate access-control layer built on top of WordPress's role system, not a default WordPress capability, because a live financial transaction between multiple parties needs stricter guarantees than a typical WordPress permission structure gives you out of the box.",
        ],
      },
      {
        heading: "Real-time doesn't replace your notification system — it runs alongside it",
        paragraphs: [
          'Live WebSocket updates handle "what\'s happening right now," but a transaction lifecycle still needs a durable record — which is what a full transactional email system is for. On the auction platform, transactional emails fire at every stage: new registration to both the user and admin, a new vehicle listed for auction to the seller and admin, and an auction completed to the seller, admin, and the winning bidder. Layered on top of that is authenticated, admin-verified live chat and AI-powered outbound verification calls for high-value transactions — because a live bidding system handling real money needs more than a WebSocket connection; it needs a verification and audit trail around it.',
        ],
      },
    ],
    takeaways: [
      "Keep WordPress as the system of record; add Node.js WebSockets purely as the real-time transport layer.",
      'Scope every real-time event to an authenticated room — never broadcast live data site-wide.',
      'Role-based dashboards for multi-party transactions need a deliberate access layer, not a default WordPress role.',
      'Real-time updates complement a transactional email and verification system — they don\'t replace it.',
    ],
    relatedCaseStudy: {
      slug: 'real-time-vehicle-auction-platform',
      label: 'Read the full real-time auction platform case study',
    },
  },
  {
    id: 5,
    slug: 'database-optimization-high-traffic-wordpress',
    title: 'Database Optimization for High-Traffic WordPress Sites',
    excerpt: 'Query-level and schema fixes that matter more than another caching plugin.',
    category: 'Performance',
    readTime: '4 min read',
    publishDate: '2026-05-14',
    intro:
      "Caching plugins are the first thing every WordPress performance guide reaches for, and they help — but they mask a slow database instead of fixing it. Once a site has real catalog size or traffic, the schema and query patterns underneath WordPress's defaults start to matter more than which cache plugin is installed.",
    sections: [
      {
        heading: "postmeta is the first thing to stop trusting at scale",
        paragraphs: [
          "WordPress stores custom field data in a single wp_postmeta table as loosely-typed key/value rows. That's fine for a blog. It falls apart for anything with real filtering needs — a large product or listing catalog querying by several attributes at once turns into a chain of JOINs against an EAV-style table that was never indexed for that access pattern. When I built the vehicle listing systems for a commercial vehicle marketplace network, filtering and search had to be built around custom database logic — dedicated tables and indexes matched to the actual trade-specific attributes buyers filter by — rather than relying on postmeta lookups through a generic listing plugin.",
        ],
      },
      {
        heading: 'Index what you actually query, not what feels important',
        paragraphs: [
          "The most common database issue I find on high-traffic WordPress sites isn't a missing index — it's an index that doesn't match the actual WHERE clause and sort order a query uses. Adding an index to a column queried alone does nothing if every real query filters on that column combined with two others and then sorts by a fourth. Profiling actual slow queries (via the MySQL slow query log, not guesswork) and indexing for the combination that's really running is what closes the gap a generic caching plugin can't.",
        ],
        code: {
          language: 'SQL — MySQL',
          snippet: `-- The real query filters on three columns and sorts by a fourth:
EXPLAIN SELECT * FROM vehicle_listings
WHERE make = 'MAN' AND category = 'tractor-unit' AND status = 'active'
ORDER BY listed_at DESC LIMIT 24;

-- So the index must match that exact combination --
-- an index on make alone does nothing for this query:
CREATE INDEX idx_listings_filter_sort
ON vehicle_listings (make, category, status, listed_at);`,
        },
      },
      {
        heading: 'Centralize data access when multiple properties share one dataset',
        paragraphs: [
          "When several sites or dashboards read from the same underlying inventory — as with a multi-site marketplace network — the fix isn't replicating query logic across each property. It's a centralized inventory data layer that every site and dashboard reads through, so an index or query optimization made once benefits every consumer instead of needing to be repeated per site.",
        ],
      },
      {
        heading: 'Caching still matters — just as the second layer, not the first fix',
        paragraphs: [
          "Object caching (Redis/Memcached) for repeated queries and full-page caching for anonymous traffic are still worth having. But they're a mitigation layer on top of a database that's already reasonably efficient — not a substitute for fixing the schema and query patterns underneath. A caching plugin on top of an unindexed, EAV-heavy query pattern just delays when the slowness shows up; it doesn't remove it.",
        ],
      },
    ],
    takeaways: [
      "Move high-filter-cardinality data out of wp_postmeta into dedicated, indexed tables at real catalog scale.",
      'Index to match actual query patterns from the slow query log, not assumptions about important columns.',
      'Centralize data access across multi-site setups so query fixes apply everywhere at once.',
      'Treat object and page caching as a second layer on top of a healthy schema, not a fix for one.',
    ],
    relatedCaseStudy: {
      slug: 'commercial-vehicle-marketplace-network',
      label: 'Read the commercial vehicle marketplace case study',
    },
  },
  {
    id: 6,
    slug: 'nextjs-isr-vs-ssg-vs-ssr',
    title: 'Next.js ISR vs SSG vs SSR: Choosing the Right Rendering Strategy',
    excerpt:
      'A decision framework for picking a rendering strategy per route, instead of defaulting to one for the whole app.',
    category: 'Architecture',
    readTime: '4 min read',
    publishDate: '2026-06-20',
    intro:
      'The most common Next.js mistake I see isn\'t picking the wrong rendering strategy — it\'s picking one strategy for the entire app instead of choosing per route. Static generation, server-side rendering, and incremental static regeneration solve different problems, and a real production app usually needs all three.',
    sections: [
      {
        heading: "SSG: for content that changes on your schedule, not the user's",
        paragraphs: [
          "Static Site Generation is the right default for marketing pages, documentation, and anything where the content changes when you deploy, not when a user visits. It's the fastest possible response — there's no render happening at request time at all — but it means a content update requires a rebuild, which is the wrong tradeoff for anything backed by a CMS that non-developers update regularly.",
        ],
      },
      {
        heading: 'SSR: for anything personalized, authenticated, or genuinely real-time',
        paragraphs: [
          "Server-side rendering earns its cost — a render on every request — when the page genuinely can't be the same for two visitors: authenticated dashboards, personalized content, or pages whose data changes faster than any reasonable cache window. On the Nexus Clinic rebuild, the front end is server-rendered specifically for the SEO control that comes with it — full control over meta tags and structured data per request, generated from live headless WordPress content — while the secured API boundary keeps that per-request render fast rather than a source of latency.",
        ],
      },
      {
        heading: "ISR: the default for CMS-backed content at scale",
        paragraphs: [
          "Incremental Static Regeneration is what most CMS-backed marketing and content sites should actually run on: pages are served statically fast, but revalidate in the background on an interval or on-demand when content changes, so editors don't need a rebuild to see updates go live. It's the strategy that gives you SSG's speed with SSG's biggest weakness — staleness — removed.",
        ],
        code: {
          language: 'TypeScript — Next.js',
          snippet: `// app/blog/[slug]/page.tsx — choose the strategy per route
export const revalidate = 3600; // ISR: served static, refreshed in the background

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}`,
        },
      },
      {
        heading: "Where caching architecture matters more than the rendering label",
        paragraphs: [
          "On the flooring retailer rebuild, the site was already using a reasonable rendering strategy on Vercel — the actual problem was that every page was independently re-fetching the same CMS API data, with no caching layer coordinating any of it. Introducing a centralized cache for products, blogs, and site data mattered more than the SSG/SSR/ISR label on any individual route, because uncached data fetching inside any rendering strategy will still be slow. Rendering strategy and data-fetching architecture are two separate decisions — you need to get both right, not just one.",
        ],
      },
    ],
    takeaways: [
      'Choose rendering strategy per route, not once for the whole application.',
      'SSG for content that changes on deploy, not on user visit.',
      'SSR for authenticated, personalized, or genuinely real-time pages — not as a default.',
      'ISR is the right fit for most CMS-backed content; pair any strategy with a real caching layer for fetched data.',
    ],
    relatedCaseStudy: {
      slug: 'furnishings-my-nextjs-api-caching',
      label: 'Read the API caching & Core Web Vitals case study',
    },
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogCategories(): string[] {
  return Array.from(new Set(blogPosts.map((post) => post.category)));
}
