'use client';

import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-8">

        {/* ===== Top Section ===== */}
        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* Left */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Chotika
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Data enthusiast passionate about transforming data into 
              meaningful insights and impactful solutions.
            </p>
          </div>

          {/* Middle - Navigation */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#about" className="hover:text-blue-600 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-600 transition">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right - Social */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ y: -3 }}
                href="https://linkedin.com"
                target="_blank"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                <Linkedin size={18} />
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href="https://github.com"
                target="_blank"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                <Github size={18} />
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href="mailto:chotikabangboon2003@gmail.com"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </div>

        </div>

        {/* ===== Bottom Section ===== */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Chotika. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
