import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CaseStudyCTA from '@/components/CaseStudyCTA';
import CaseStudyGallery from '@/components/CaseStudyGallery';
import { getCaseStudy } from '@/lib/caseStudies';
import LeftArrow from '@/lib/icons/ArrowLeft';

const SLUG = 'vps-server-management-hardening';

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="mt-8">
      <div className="aspect-video w-full rounded-2xl border border-border overflow-hidden relative bg-secondaryBackground">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" />
      </div>
      <figcaption className="text-xs text-mutedText mt-3 text-center">{caption}</figcaption>
    </figure>
  );
}

export function generateMetadata(): Metadata {
  const study = getCaseStudy(SLUG);
  if (!study) return {};

  const title = `${study.title} | Case Study | Munnaza Shamim`;

  return {
    title,
    description: study.summary,
    alternates: { canonical: `/case-studies/${SLUG}` },
    openGraph: { type: 'article', title, description: study.summary },
  };
}

const firstHour = [
  {
    step: '01',
    title: 'A named sudo user, and root stops logging in',
    body: 'Root is for the box, not for me. Every session after this one runs as a named user with sudo, so there is an audit trail and one less obvious username for anyone to guess at.',
  },
  {
    step: '02',
    title: 'Key in, password out',
    body: 'My public key goes in, then PasswordAuthentication and PermitRootLogin come out of sshd_config and logins get restricted to that single user. I keep a second SSH session open while sshd restarts. Trusting that your config was right is how people lock themselves out of their own server.',
  },
  {
    step: '03',
    title: 'UFW, default deny',
    body: 'Deny everything inbound, allow outbound, then open OpenSSH, 80 and 443. That is the whole list. Anything else that needs to talk to the server talks to it over localhost.',
  },
  {
    step: '04',
    title: 'Fail2Ban on the logs that matter',
    body: 'Jails for SSH and Nginx, with a ban threshold that catches repeat knocking without punishing someone who fat-fingered a key once. The bans show up in the daily report, so I can see what the box is being hit with.',
  },
  {
    step: '05',
    title: 'Patching, time and swap',
    body: 'Unattended-upgrades on for security updates, timezone and NTP set so the logs make sense later, and a swap file if the box is small enough that one bad PHP request could take it down.',
  },
  {
    step: '06',
    title: 'Nginx and TLS',
    body: "A server block per domain, Let's Encrypt certificates issued and auto-renewal actually tested rather than assumed. A renewal you have never watched run is a renewal you should expect to fail.",
  },
];

const ports = [
  { port: '22', service: 'SSH', exposure: 'Public, key only', tone: 'accent' as const },
  { port: '80', service: 'HTTP', exposure: 'Public, redirects to 443', tone: 'accent' as const },
  { port: '443', service: 'HTTPS (Nginx)', exposure: 'Public, TLS', tone: 'accent' as const },
  { port: '3306', service: 'MySQL', exposure: 'Bound to 127.0.0.1', tone: 'muted' as const },
  { port: 'app ports', service: 'Node.js / PM2', exposure: 'Bound to 127.0.0.1', tone: 'muted' as const },
  { port: 'everything else', service: '—', exposure: 'Denied by UFW', tone: 'muted' as const },
];

const stacks = [
  {
    name: 'WordPress',
    line: 'PHP-FPM, isolated per site',
    points: [
      'Its own system user and its own PHP-FPM pool',
      'One site cannot read another site’s files',
      'PHP execution denied inside upload directories',
    ],
  },
  {
    name: 'Node.js',
    line: 'PM2, never public',
    points: [
      'Bound to localhost, proxied through Nginx',
      'Restarted on crash, restored after reboot by systemd',
      'No application port is ever open at the firewall',
    ],
  },
  {
    name: 'Laravel',
    line: 'Supervised workers',
    points: [
      'Queue workers and scheduler run as managed services',
      '.env permissions tightened, storage writable by the app user only',
      'Config, route and view caches rebuilt on deploy',
    ],
  },
];

const pipeline = [
  {
    label: 'One command',
    title: 'Deploy to staging',
    body: 'Pull, install, migrate, clear and rebuild caches, restart the workers, then test the Nginx config and only reload if it passes. Nothing is typed by hand at deploy time.',
  },
  {
    label: 'Gate',
    title: 'QA verification',
    body: 'Staging is isolated by user, database and domain, but runs the same stack as production. Changes get checked against a real server rather than someone’s laptop.',
  },
  {
    label: 'One command',
    title: 'Promote to live',
    body: 'A second command pushes exactly the build that was signed off. Production never receives anything that has not already run on staging.',
  },
];

const dailyReport = [
  'Disk and inode usage',
  'Memory and load average',
  'Nginx, PHP-FPM, MySQL & queue worker status',
  'Pending package updates',
  'Certificate expiry dates',
  'Recent Fail2Ban bans',
];

export default function VPSManagementCaseStudy() {
  const study = getCaseStudy(SLUG);
  if (!study) notFound();

  const gallery = study.gallery ?? [];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: study.title,
    description: study.summary,
    author: { '@type': 'Person', name: 'Munnaza Shamim' },
    keywords: study.techStack.join(', '),
  };

  return (
    <main className="min-h-screen pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/case-studies" className="group inline-flex items-center gap-1.5 text-primaryAccent text-sm font-semibold hover:underline">
            <LeftArrow size={16} className="transition-transform duration-200 group-hover:-translate-x-1" />
            All case studies
          </Link>

          <div className="mt-4 mb-14 relative rounded-3xl border border-border overflow-hidden">
            <Image
              src="/vps-management.webp"
              alt="Virtual private server infrastructure, showing root access control, isolated environments and storage layers"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/92 to-background/55" />
            <div className="relative px-6 py-12 md:px-12 md:py-16">
              <div className="flex flex-wrap gap-2 mb-4">
                {study.categories.map((category) => (
                  <span
                    key={category}
                    className="text-xs bg-secondaryBackground/80 backdrop-blur-sm text-primaryAccent px-3 py-1 rounded-full border border-primaryAccent/30"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <div className="text-primaryAccent text-sm font-semibold mb-2">{study.client}</div>
              <h1 className="text-3xl md:text-5xl font-bold mb-5 max-w-3xl leading-tight">
                {study.title}
              </h1>
              <p className="text-lg md:text-xl text-secondaryText max-w-2xl">{study.summary}</p>
            </div>
          </div>

          <div className="mb-16 max-w-3xl">
            <div className="text-xs uppercase tracking-wider text-mutedText mb-3">The problem</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
              A Fresh VPS Is a Liability Until Somebody Makes It Otherwise
            </h2>
            {study.challenge.split('\n\n').map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-secondaryText mb-4 last:mb-0 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mb-16 border-l-2 border-primaryAccent/40 pl-6 md:pl-8 max-w-3xl">
            <div className="text-xs uppercase tracking-wider text-mutedText mb-3">How I work</div>
            <p className="text-xl md:text-2xl font-semibold leading-snug mb-5">
              A server is not something you set up. It is something you keep.
            </p>
            {study.solution.split('\n\n').map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-secondaryText mb-4 last:mb-0 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {gallery.length > 0 && <CaseStudyGallery gallery={gallery} />}

          <div className="mb-14">
            <h2 className="text-2xl font-bold mb-2">The First Hour on a New Box</h2>
            <p className="text-secondaryText mb-8 max-w-2xl">
              Every server gets the same opening sequence, and the order is deliberate. A box is at
              its most exposed between the moment the IP goes live and the moment the firewall comes
              up.
            </p>

            <ol className="relative border-l border-border ml-3 space-y-8">
              {firstHour.map((item) => (
                <li key={item.step} className="relative pl-8">
                  <span className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-secondaryBackground border border-primaryAccent/40 flex items-center justify-center text-[10px] font-bold text-primaryAccent">
                    {item.step}
                  </span>
                  <h3 className="font-bold mb-1.5">{item.title}</h3>
                  <p className="text-sm text-secondaryText max-w-2xl">{item.body}</p>
                </li>
              ))}
            </ol>

            <Figure
              src="/vps-hardened-stack.webp"
              alt="Hardened VPS stack: Ubuntu LTS base, UFW firewall, Fail2Ban, SSH key-only access and Nginx with SSL"
              caption="Five layers, bottom to top. Every one of them is configured by hand and checked again on the maintenance pass."
            />
          </div>

          <div className="mb-14">
            <h2 className="text-2xl font-bold mb-2">The Only Way In Is a Key</h2>
            <p className="text-secondaryText mb-2 max-w-2xl">
              Password authentication is the single biggest thing wrong with a default VPS. Leave it
              on and the server spends the rest of its life being guessed at. Turning it off does not
              make the guessing stop, it makes it pointless, because there is nothing on the other
              side of the attempt to get right.
            </p>
            <p className="text-secondaryText max-w-2xl">
              Root login goes too. Logins are restricted to one named user holding one key, which
              also means the auth log tells me who did what instead of showing an endless column of
              root.
            </p>

            <Figure
              src="/vps-passwordless-ssh.webp"
              alt="SSH key authentication into a VPS with PasswordAuthentication set to no and root login disabled"
              caption="PasswordAuthentication no. PermitRootLogin no. The key path is the only path left."
            />
          </div>

          <div className="mb-14">
            <h2 className="text-2xl font-bold mb-2">What Is Actually Listening</h2>
            <p className="text-secondaryText mb-6 max-w-2xl">
              The shortest way to describe a server&apos;s attack surface is to list what can reach it
              from outside. On these boxes, that list is three lines long.
            </p>

            <div className="bg-cardBackground rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-border text-xs uppercase tracking-wider text-mutedText">
                <span>Port</span>
                <span>Service</span>
                <span>Exposure</span>
              </div>
              {ports.map((row) => (
                <div
                  key={row.port}
                  className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-border last:border-b-0 items-center"
                >
                  <span
                    className={`font-mono text-sm font-semibold ${
                      row.tone === 'accent' ? 'text-primaryAccent' : 'text-mutedText'
                    }`}
                  >
                    {row.port}
                  </span>
                  <span className="text-sm text-primaryText">{row.service}</span>
                  <span className="text-sm text-secondaryText">{row.exposure}</span>
                </div>
              ))}
            </div>

            <Figure
              src="/vps-firewall-fail2ban.webp"
              alt="UFW firewall with only ports 22, 80 and 443 open, blocking incoming traffic, with Fail2Ban banning repeat offenders"
              caption="Three doors open, everything else sealed, and Fail2Ban banning whatever keeps trying the handle."
            />
          </div>

          <div className="mb-14">
            <h2 className="text-2xl font-bold mb-2">Three Stacks, One Server, No Shared Blast Radius</h2>
            <p className="text-secondaryText mb-6 max-w-2xl">
              Running WordPress, Node and Laravel on one box is easy to do badly. One shared user, one
              PHP pool, everything owned by www-data, and one outdated plugin reads every other
              site&apos;s credentials. So none of them share anything.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stacks.map((stack) => (
                <div key={stack.name} className="card-hover bg-cardBackground rounded-2xl p-6">
                  <h3 className="font-bold text-lg">{stack.name}</h3>
                  <div className="text-xs text-primaryAccent font-semibold mb-4">{stack.line}</div>
                  <ul className="space-y-2.5">
                    {stack.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-secondaryText">
                        <span className="text-primaryAccent mt-0.5">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <Figure
              src="/vps-multi-environment.webp"
              alt="WordPress with PHP-FPM, Node.js with PM2 and Laravel with a queue worker running isolated behind one Nginx reverse proxy with SSL"
              caption="One public entry point, three isolated environments behind it. Nothing shares a user, a pool or a database."
            />
          </div>

          <div className="mb-14">
            <h2 className="text-2xl font-bold mb-2">Staging, Then Live. Never Straight to Live.</h2>
            <p className="text-secondaryText mb-6 max-w-2xl">
              Deploy time is when mistakes cost the most, so it is the last place anything should be
              improvised. Two commands cover the whole path, with a verification step between them.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pipeline.map((stage, index) => (
                <div
                  key={stage.title}
                  className={`relative bg-cardBackground rounded-2xl p-6 border ${
                    index === 1 ? 'border-ctaAccent/30' : 'border-primaryAccent/30'
                  }`}
                >
                  <span
                    className={`inline-block text-[11px] font-semibold uppercase tracking-wider mb-2 ${
                      index === 1 ? 'text-ctaAccent' : 'text-primaryAccent'
                    }`}
                  >
                    {stage.label}
                  </span>
                  <h3 className="font-bold mb-2">{stage.title}</h3>
                  <p className="text-sm text-secondaryText">{stage.body}</p>
                </div>
              ))}
            </div>

            <Figure
              src="/vps-deploy-pipeline.webp"
              alt="Deployment pipeline from a git push through a build step to a live production server"
              caption="Push, build, verify, promote. The only thing that ever reaches production is a build that already ran on staging."
            />
          </div>

          <div className="mb-14">
            <h2 className="text-2xl font-bold mb-2">The Server Reports On Itself</h2>
            <p className="text-secondaryText mb-6 max-w-2xl">
              A VPS rarely dies dramatically. It dies because a log file filled the disk, or a
              certificate quietly expired, or a queue worker stopped three weeks ago and nobody
              noticed. A scheduled routine sends me a summary every day, and I would rather read a
              boring report each morning than hear from a client that something has been down since
              Tuesday.
            </p>

            <div className="bg-secondaryBackground rounded-2xl border border-border p-8">
              <div className="text-xs uppercase tracking-wider text-mutedText mb-5">
                Daily health report
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
                {dailyReport.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primaryAccent shrink-0" />
                    <span className="text-sm text-secondaryText">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Figure
              src="/vps-maintenance-loop.webp"
              alt="Continuous VPS maintenance cycle: security patching, automated backups, log rotation and uptime monitoring"
              caption="Patch, back up, rotate, watch. It is not glamorous work, and it is the reason these boxes stay boring."
            />
          </div>

          <div className="mb-14">
            <h2 className="text-2xl font-bold mb-6">What This Covers</h2>
            <div className="flex flex-wrap gap-2">
              {study.features.map((feature) => (
                <span
                  key={feature}
                  className="text-sm bg-secondaryBackground text-secondaryText px-4 py-2 rounded-full border border-border"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-14">
            <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {study.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm bg-cardBackground text-primaryText px-4 py-2 rounded-full border border-primaryAccent/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-16 bg-secondaryBackground p-8 rounded-2xl border border-border">
            <h2 className="text-2xl font-bold mb-6">How It Holds Up</h2>
            <ul className="space-y-3">
              {study.proof.map((point) => (
                <li key={point} className="flex items-start gap-3 text-secondaryText">
                  <span className="text-primaryAccent font-bold mt-0.5">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <CaseStudyCTA text="If you are paying for a VPS and hoping nothing goes wrong with it, that is not a plan. I set these servers up properly and keep them that way, whether the code on them is mine or somebody else's." />
        </div>
      </div>
    </main>
  );
}
