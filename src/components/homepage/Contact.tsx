'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/BrandIcons';
import SocialLink from '@/components/SocialLink';
import { socialLinks, PHONE_DISPLAY, PHONE_LINK, EMAIL, EMAIL_LINK, WHATSAPP_URL, getWhatsAppLink } from '@/lib/socialLinks';

const iconBadgeMotion = {
  whileHover: { scale: 1.12, rotate: 8 },
  transition: { type: 'spring' as const, stiffness: 400, damping: 12 },
};

export default function Contact() {
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const composed = `Hi Munnaza, I'm ${formData.name} (${formData.email}).\n\n${formData.message}`;
    window.open(getWhatsAppLink(composed), '_blank', 'noopener,noreferrer');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Let&apos;s Scope the Work
            </motion.h2>
            <motion.p
              className="text-xl text-secondaryText max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Tell me what you&apos;re building or what&apos;s slow, and I&apos;ll tell you honestly whether it&apos;s a quick fix or a real rebuild.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isMounted ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-secondaryText mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-cardBackground border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primaryAccent focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-secondaryText mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-cardBackground border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primaryAccent focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-secondaryText mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-cardBackground border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primaryAccent focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="btn-hover-cta w-full px-8 py-4 bg-ctaAccent text-background font-semibold rounded-lg hover:bg-ctaAccentHover transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send via WhatsApp
                </motion.button>
                <p className="text-sm text-secondaryText text-center">
                  Opens WhatsApp with your message ready to send — or email me directly at{' '}
                  <a href={EMAIL_LINK} className="text-primaryAccentLight underline underline-offset-2 hover:text-primaryAccent">
                    {EMAIL}
                  </a>
                </p>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isMounted ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                  <p className="text-secondaryText mb-6">
                    Available for projects across Europe, the UK, UAE, and North America — full builds, performance audits, or ongoing support. Working hours aligned with Central European Time (Lahore is just 3–4 hours ahead of Berlin), so same-day replies are the norm.
                  </p>
                </div>

                <div className="space-y-4">
                  <motion.a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start group"
                    whileHover={{ x: 4 }}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-full bg-primaryAccent flex items-center justify-center text-background mr-4 flex-shrink-0"
                      {...iconBadgeMotion}
                    >
                      <WhatsappIcon className="w-4 h-4" />
                    </motion.div>
                    <div>
                      <div className="font-semibold group-hover:text-primaryAccent transition-colors">WhatsApp</div>
                      <div className="text-secondaryText">{PHONE_DISPLAY}</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href={PHONE_LINK}
                    className="flex items-start group"
                    whileHover={{ x: 4 }}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-full bg-primaryAccent flex items-center justify-center text-background mr-4 flex-shrink-0"
                      {...iconBadgeMotion}
                    >
                      <Phone className="w-4 h-4" />
                    </motion.div>
                    <div>
                      <div className="font-semibold group-hover:text-primaryAccent transition-colors">Phone</div>
                      <div className="text-secondaryText">{PHONE_DISPLAY}</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href={EMAIL_LINK}
                    className="flex items-start group"
                    whileHover={{ x: 4 }}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-full bg-primaryAccent flex items-center justify-center text-background mr-4 flex-shrink-0"
                      {...iconBadgeMotion}
                    >
                      <Mail className="w-4 h-4" />
                    </motion.div>
                    <div>
                      <div className="font-semibold group-hover:text-primaryAccent transition-colors">Email</div>
                      <div className="text-secondaryText">{EMAIL}</div>
                    </div>
                  </motion.a>

                  <div className="flex items-start">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-primaryAccent flex items-center justify-center text-background mr-4 flex-shrink-0"
                      {...iconBadgeMotion}
                    >
                      <MapPin className="w-4 h-4" />
                    </motion.div>
                    <div>
                      <div className="font-semibold">Location</div>
                      <div className="text-secondaryText">Lahore, Pakistan (Remote)</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <SocialLink key={social.label} {...social} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}