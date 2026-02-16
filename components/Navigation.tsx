'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Linkedin } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education & Skills', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-md'
            : 'bg-gray-100'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <div className="text-2xl font-bold">
              <span className="text-blue-600">Chotika</span>
              <span className="text-gray-900"> B.</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-sm font-medium group"
                >
                  <span
                    className={`transition-colors ${
                      activeSection === item.href.substring(1)
                        ? 'text-blue-600'
                        : 'text-gray-700 group-hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </span>

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              ))}

              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/chotikabangboon-7031b8279/"
                target="_blank"
                className="bg-black text-white p-2 rounded-md hover:opacity-80 transition"
              >
                <Linkedin size={16} />
              </a>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-800"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-20 left-0 right-0 bg-white shadow-md md:hidden">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left font-medium ${
                  activeSection === item.href.substring(1)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
