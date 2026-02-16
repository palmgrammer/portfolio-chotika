'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:chotika@example.com',
      handle: 'chotikabangboon2003@gmail.com',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com',
      handle: '/chotika-bangboon',
    },
  ];

  return (
    <section id="contact" className="py-32 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* ===== Section Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Let's <span className="text-blue-600">Connect</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            I’m always open to discussing new opportunities, collaborations,
            or simply connecting over data and technology.
          </p>
        </motion.div>

        {/* ===== Contact Content ===== */}
        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-16 items-start">  

          {/* ===== LEFT SIDE - Contact Info ===== */}
          <div className="space-y-8">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition group flex items-start gap-6"
                >
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-105 transition">
                    <Icon size={26} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {link.name}
                    </h3>
                    <p className="text-gray-600 group-hover:text-blue-600 transition">
                      {link.handle}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Location */}
            <div className="bg-white p-6 rounded-3xl shadow-sm flex items-center gap-4">
              <MapPin size={20} className="text-blue-600" />
              <span className="text-gray-600 font-medium">
                Based in Bangkok, Thailand
              </span>
            </div>
          </div>


          {/* ===== RIGHT SIDE - Contact Form ===== */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white rounded-3xl p-12 shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-10">
                Send Me a Message
              </h3>

              <form
                action="https://formspree.io/f/mreaqonp"
                method="POST"
                className="space-y-6"
              >
                <input type="text" name="_gotcha" className="hidden" />
                <input type="hidden" name="_subject" value="New Portfolio Message" />

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition"
                />

                <textarea
                  name="message"
                  rows={6}
                  placeholder="Write your message here..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition resize-none"
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full font-semibold shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
