'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    // Form submission logic would go here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Let's Build Something Amazing
            </motion.h2>
            <motion.p 
              className="text-xl text-secondaryText max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to elevate your digital presence? Get in touch for a consultation.
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
                  className="btn-hover w-full px-8 py-4 bg-primaryAccent text-background font-semibold rounded-lg hover:bg-[#1fb9d0] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
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
                    I'm available for international projects and consulting. Let's discuss how we can help your business grow.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-primaryAccent flex items-center justify-center text-background mr-4 flex-shrink-0">
                      📧
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-secondaryText">contact@munnaza.dev</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-primaryAccent flex items-center justify-center text-background mr-4 flex-shrink-0">
                      🌍
                    </div>
                    <div>
                      <div className="font-semibold">Location</div>
                      <div className="text-secondaryText">Lahore, Pakistan (Remote)</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-primaryAccent flex items-center justify-center text-background mr-4 flex-shrink-0">
                      🕐
                    </div>
                    <div>
                      <div className="font-semibold">Working Hours</div>
                      <div className="text-secondaryText">Mon-Fri: 9AM - 6PM (GMT+5)</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    {['LinkedIn', 'GitHub', 'Twitter'].map((platform, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        className="w-12 h-12 rounded-full bg-cardBackground border border-border flex items-center justify-center hover:bg-primaryAccent hover:text-background transition-colors"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {platform.charAt(0)}
                      </motion.a>
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