  'use client';

  import { motion, useInView } from 'framer-motion';
  import { useRef } from 'react';
  import { Download } from 'lucide-react';

  export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
      <section id="about" className="py-20 md:py-28 bg-gray-50" ref={ref}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center text-4xl md:text-5xl font-bold mb-4"
          >
            About Me
          </motion.h2>

          {/* Main Grid */}
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >

              {/* Big Heading with Correct S alignment */}
              <div className="relative mb-10">
                <span className="
                  absolute
                  -top-10
                  -left-0
                  md:-left-4
                  text-[80px]
                  md:text-[170px]
                  font-bold
                  text-gray-200
                  leading-none
                  pointer-events-none
                ">
                  S
                </span>

                <h3 className="relative text-3xl md:text-4xl font-bold leading-snug pl-12 md:pl-28">
                  olve With <span className="text-blue-600">Logic</span>,<br />
                  peak With <span className="text-blue-600">Design.</span>
                </h3>
              </div>

              {/* Paragraph */}
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
                I am passionate about the intersection of logic and creativity.
                My goal is to craft digital experiences that are not only visually
                stunning but also practical and user-centric. With diverse
                experience, I bring a holistic perspective covering both User
                Experience and Visual Design.
              </p>

              {/* Resume Button */}
              <a
                href="https://drive.google.com/file/d/1RwCLKZJoxyRK09WZElDAXmsTS00xMLRf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
              >
                <Download size={18} />
                RESUME
              </a>
            </motion.div>
            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative group w-[320px] h-[420px] md:w-[520px] md:h-[620px] flex items-center justify-center overflow-visible">

                {/* Ripple Circles */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

                  {[
                    { size: 300, border: 5 },  // หนาสุด (วงใน)
                    { size: 340, border: 4 },
                    { size: 380, border: 3 },
                    { size: 420, border: 2.5},
                    { size: 460, border: 2 },
                    { size: 500, border: 1 },
                  ].map((circle, index) => (
                    <div
                      key={index}
                      className="
                        absolute
                        rounded-full
                        border-blue-500
                        opacity-0
                        scale-75
                        transition-all
                        duration-500
                        ease-out
                        group-hover:opacity-100
                        group-hover:scale-100
                      "
                      style={{
                        width: circle.size,
                        height: circle.size,
                        borderWidth: circle.border,
                        borderStyle: 'solid',
                      }}
                    />
                  ))}

                </div>

                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="
                    relative
                    w-[260px] h-[380px]       /* mobile */
                    sm:w-[300px] sm:h-[440px]
                    md:w-[360px] md:h-[520px] /* desktop */
                    mx-auto
                  "
                >
                  {/* Grayscale */}
                  <img
                    src="/images/mono-about.png"
                    alt="Profile grayscale"
                    className="
                      absolute inset-0
                      w-full h-full
                      object-cover
                      rounded-[3rem] md:rounded-[5rem]
                      transition-opacity duration-500
                      group-hover:opacity-0
                    "
                  />

                  {/* Color */}
                  <img
                    src="/images/color-about.png"
                    alt="Profile color"
                    className="
                      w-full h-full
                      object-cover
                      rounded-[3rem] md:rounded-[5rem]
                    "
                  />
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>
    );
  }
