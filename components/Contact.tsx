'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Send, MapPin } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:chotikabangboon2003@gmail.com',
      handle: 'chotikabangboon2003@gmail.com',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/chotika-bangboon',
      handle: '/chotika-bangboon',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-6 bg-gray-50"
    >
      {/* ===== Container ===== */}
      <div className="max-w-6xl mx-auto">

        {/* ===== Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Let's <span className="text-blue-600">Connect</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            I’m always open to discussing new opportunities, collaborations,
            or simply connecting over data and technology.
          </p>
        </motion.div>

        {/* ===== Content Grid ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* ===== LEFT - Contact Info ===== */}
          <div className="space-y-6">

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
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition flex items-center gap-5"
                >
                  <div className="bg-blue-600 
                    w-12 h-12 
                    md:w-14 md:h-14
                    flex items-center justify-center 
                    rounded-xl
                    text-white 
                    shrink-0">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {link.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {link.handle}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            <div className="bg-white p-6 rounded-2xl shadow-sm flex items-center gap-4">
              <MapPin size={18} className="text-blue-600" />
              <span className="text-gray-600 text-sm">
                Based in Bangkok, Thailand
              </span>
            </div>

          </div>


          {/* ===== RIGHT - Form ===== */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md">

              <h3 className="text-xl font-bold mb-8 text-center">
                Send Me a Message
              </h3>

              <form
                action="https://formspree.io/f/mreaqonp"
                method="POST"
                className="space-y-5"
              >
                <input type="text" name="_gotcha" className="hidden" />
                <input type="hidden" name="_subject" value="New Portfolio Message" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition"
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition resize-none"
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold shadow-sm hover:shadow-md transition flex items-center justify-center gap-2"
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
