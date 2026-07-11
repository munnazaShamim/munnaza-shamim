import type { Metadata } from 'next';
import Link from 'next/link';
import { EMAIL, EMAIL_LINK } from '@/lib/socialLinks';
import LeftArrow from '@/lib/icons/ArrowLeft';

export const metadata: Metadata = {
  title: 'Privacy Policy | Munnaza Shamim',
  description:
    'How this portfolio site handles personal data. GDPR-conscious by design: no tracking cookies, no analytics profiling, and contact data used only to reply to you.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
};

const sections = [
  {
    heading: 'Who I am',
    body: 'This website is the professional portfolio of Munnaza Shamim, a full-stack developer based in Lahore, Pakistan, working with clients across Europe, the UK, UAE, and North America. For anything related to this policy, contact me directly at the email address below.',
  },
  {
    heading: 'What data this site collects',
    body: 'This site does not set tracking cookies, does not run advertising pixels, and does not build visitor profiles. If you reach out through the contact options (WhatsApp, email, or phone), I receive only what you choose to send me: your name, your contact details, and your message.',
  },
  {
    heading: 'How your data is used',
    body: 'Contact information is used for exactly one purpose: responding to your enquiry and, if we work together, communicating about the project. It is never sold, shared with third parties for marketing, or added to a mailing list without your explicit consent.',
  },
  {
    heading: 'Hosting & technical data',
    body: 'The site is hosted on Vercel, which may process standard server logs (IP address, browser type, requested pages) for security and operational purposes, as described in Vercel’s own privacy policy. Messages sent via WhatsApp are handled under WhatsApp’s (Meta’s) privacy terms; email is handled by the respective email provider.',
  },
  {
    heading: 'Your rights (GDPR)',
    body: 'If you are in the European Union, the EEA, or the UK, you have the right to access, correct, or request deletion of any personal data I hold about you, and the right to object to its processing. Since the only personal data I hold is correspondence you sent me, a single email is enough to have it corrected or deleted.',
  },
  {
    heading: 'Data retention',
    body: 'Project-related correspondence is kept for as long as needed to deliver and support the work, and for reasonable record-keeping afterwards. Enquiries that do not lead to a project are deleted on request or after they are no longer relevant.',
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="group inline-flex items-center gap-1.5 text-primaryAccent text-sm font-semibold hover:underline">
            <LeftArrow size={16} className="transition-transform duration-200 group-hover:-translate-x-1" />
            Back to home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">Privacy Policy</h1>
          <p className="text-secondaryText text-lg mb-12">
            The short version: no tracking cookies, no analytics profiling, and anything you send me is used only to reply to you.
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-bold mb-3">{section.heading}</h2>
                <p className="text-secondaryText">{section.body}</p>
              </div>
            ))}

            <div>
              <h2 className="text-xl font-bold mb-3">Contact</h2>
              <p className="text-secondaryText">
                Questions about this policy or your data:{' '}
                <a href={EMAIL_LINK} className="text-primaryAccent hover:underline">
                  {EMAIL}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
