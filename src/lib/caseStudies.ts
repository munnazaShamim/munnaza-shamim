export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  summary: string;
  challenge: string;
  solution: string;
  features: string[];
  techStack: string[];
  proof: string[];
  imageLabel: string;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'real-time-vehicle-auction-platform',
    title: 'Real-Time Vehicle Auction Platform',
    client: 'Live bidding & auction marketplace',
    summary:
      'A custom-built real-time bidding platform with instant bid updates and three purpose-built role dashboards.',
    challenge:
      "Standard WordPress has no concept of live, concurrent bidding — no real-time state, no role-based dashboard separation, no verification workflow for high-value transactions.",
    solution:
      'Built complete custom auction logic in PHP and MySQL, including real-time bid calculations and role-based permissions. Layered Node.js WebSockets on top of WordPress to push live bid updates instantly, with purpose-built dashboards for Sellers, Dealers, and Admins, and implemented the full visual design — including live animation — pixel-for-pixel from the provided design files.',
    features: [
      'Real-time bid engine, no page reload',
      'Seller / Dealer / Admin dashboards',
      'AI-powered outbound verification calls',
      'AI live chat for instant support',
    ],
    techStack: ['WordPress (custom plugin)', 'PHP', 'MySQL', 'Node.js', 'WebSockets'],
    proof: [
      'Every bid is pushed to all connected users instantly — no refresh, no polling delay',
      'Three separate dashboards (Seller, Dealer, Admin), each with distinct permissions and workflows',
      'Full design system — including live in-page animation — implemented pixel-for-pixel from the agency design',
      'AI-powered verification calls and live chat layered directly into the bidding flow',
    ],
    imageLabel: 'Auction platform — desktop screenshot (1600x1000)',
    featured: true,
  },
  {
    slug: 'commercial-vehicle-marketplace-network',
    title: 'Commercial Vehicle Marketplace Network',
    client: 'Multi-site commercial vehicle trade network',
    summary:
      'A network of production marketplace sites sharing one custom listing, filtering, and search engine built for commercial vehicle trade.',
    challenge:
      "Commercial vehicle inventory doesn't fit generic listing plugins — buyers filter by trade-specific fields, and off-the-shelf search doesn't hold up once inventory and traffic scale across multiple properties.",
    solution:
      'Built custom vehicle listing systems with advanced filtering, sorting, and search tailored to commercial vehicle attributes, backed by custom API integrations, dynamic search modules, and centralized data management dashboards across the network — all delivered as custom-coded WordPress plugins rather than off-the-shelf listing tools.',
    features: [
      'Multi-attribute filtering & sorting',
      'Custom API integrations',
      'Trade-specific search modules',
      'Centralized inventory dashboards',
    ],
    techStack: ['WordPress (custom plugin architecture)', 'PHP', 'MySQL', 'Custom REST APIs'],
    proof: [
      'Multiple production sites sharing one custom listing/search engine, not a page-builder template',
      'Filtering built around real commercial-vehicle trade attributes, not a generic listing plugin schema',
      'One centralized inventory dashboard managing listings across every site in the network',
    ],
    imageLabel: 'Vehicle marketplace network — desktop screenshot (1600x1000)',
    featured: true,
  },
  {
    slug: 'custom-laravel-cms-platforms',
    title: 'Custom Laravel CMS Platforms',
    client: 'Two production CMS builds',
    summary:
      'Two purpose-built CMS platforms on Laravel, built when the content and workflow model outgrew what a generic CMS plugin could do.',
    challenge:
      "Content and workflow requirements that outgrew WordPress's plugin-based approach, needing a structured, purpose-built admin layer.",
    solution:
      'Built custom CMS platforms on Laravel with tailored content models and admin workflows, rather than forcing the requirements into a general-purpose CMS.',
    features: [
      'Custom content modeling',
      'Purpose-built admin workflows',
      'Laravel backend architecture',
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'Custom Admin Panel'],
    proof: [
      'Two production CMS platforms running on content models designed around the actual business workflow',
      'Admin panel built around how the team actually works, instead of a retrofitted generic CMS',
    ],
    imageLabel: 'Laravel CMS platform — screenshot (1600x1000)',
    featured: false,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((study) => study.featured);
}
