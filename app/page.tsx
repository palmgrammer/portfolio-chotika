'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Activities from '@/components/Activities';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Activities />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
