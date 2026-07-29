'use client';

import { motion } from 'framer-motion';
import { Gauge, Mail } from 'lucide-react';
import { WhatsappIcon } from '@/lib/icons/BrandIcons';
import { zoomIn, revealViewport, reveal } from '@/lib/animations';
import { getWhatsAppLink, EMAIL } from '@/lib/socialLinks';

const AUDIT_WHATSAPP_MESSAGE =
  "Hi Munnaza, could you take a quick look at my site? Here's the URL: ";

const AUDIT_EMAIL_LINK = `mailto:${EMAIL}?subject=${encodeURIComponent(
  'Free site check'
)}&body=${encodeURIComponent("Hi Munnaza,\n\nCould you take a look at my site?\n\nURL: ")}`;

export default function FreeAudit() {
  return (
    <section id="free-audit" className="py-20 bg-secondaryBackground">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          transition={reveal()}
        >
          <div className="relative bg-cardBackground rounded-2xl border border-ctaAccent/30 p-8 md:p-12 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-ctaAccent rounded-full opacity-[0.07] blur-2xl" />

            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ctaAccent mb-4">
                  <Gauge className="w-4 h-4" />
                  Free, no call required
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Not ready to start a project? Start with your URL.
                </h2>
                <p className="text-secondaryText max-w-xl">
                  Send me a link to your site and I&apos;ll reply with three concrete things
                  slowing it down and what fixing them would involve. No sales pitch and no
                  obligation. If nothing is wrong, I&apos;ll tell you that too.
                </p>
              </div>

              <div className="flex flex-col gap-3 md:w-64 shrink-0">
                <a
                  href={getWhatsAppLink(AUDIT_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hover-cta inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ctaAccent text-background font-semibold rounded-lg hover:bg-ctaAccentHover transition-colors"
                >
                  <WhatsappIcon className="w-5 h-5" />
                  Send your URL
                </a>
                <a
                  href={AUDIT_EMAIL_LINK}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-border text-primaryText font-semibold rounded-lg hover:bg-secondaryBackground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Or email it
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
