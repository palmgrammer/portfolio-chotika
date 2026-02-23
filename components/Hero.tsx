'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-100 pt-20"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 items-center gap-12 text-center md:text-left">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-500 text-lg mb-4">
              👋🏻 My name is
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-blue-600 mb-6 leading-tight">
              <span className="inline-block">
                <Typewriter
                  words={['Chotika Bangboon']}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h1>

            {/* <TypeAnimation
              sequence={[
                'Data Analyst',
                1500,
                'Machine Learning Enthusiast',
                1500,
                'Business Intelligence Developer',
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block text-xl md:text-2xl text-gray-700 font-medium mb-6"
            /> */}

            <p className="text-lg text-gray-600 max-w-md mb-8 leading-relaxed">
              I enjoy working with data to understand people, patterns, and
              stories behind the numbers.
            </p>

            <motion.a
              {/* href="https://drive.google.com/file/d/1RwCLKZJoxyRK09WZElDAXmsTS00xMLRf/view?usp=sharing" */}
              href="https://drive.google.com/file/d/1RVv2yAJ3yN56QKQJ8_vFRUB7vC_lf_kn/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Resume
            </motion.a>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
          <div className="relative flex justify-center md:justify-end">
            <Image
              src="/images/palm-profile.png"
              alt="Chotika Bangboon"
              width={500}
              height={600}
              className="object-contain"
              priority
            />

            {/* Gradient fade bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none" />
          </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
