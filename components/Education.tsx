'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const education = [
  {
    id: 1,
    institution: 'Naresuan University',
    degree: "Bachelor’s degree - Computer Engineering",
    duration: '2022 - Present',
  },
  {
    id: 2,
    institution: 'Thungsaliamchanupatham School',
    degree: 'Science and Mathematics Program',
    duration: '2019 - 2021',
  },
];

const skills = [
  { name: 'Python', icon: '/skills/01python.svg' },
  { name: 'MySQL', icon: '/skills/2mysql.svg' },
  { name: 'Power BI', icon: '/skills/3powerbi.svg' },
  { name: 'Tableau', icon: '/skills/4tableau.svg' },

  { name: 'Excel', icon: '/skills/5excel.svg' },
  { name: 'Looker', icon: '/skills/6looker.svg' },
  { name: 'Databricks', icon: '/skills/7databricks.svg' },
  { name: 'MariaDB', icon: '/skills/8mariadb.svg' },

  { name: 'HTML', icon: '/skills/9html.svg' },
  { name: 'CSS', icon: '/skills/10css.svg' },
  { name: 'JavaScript', icon: '/skills/11js.svg' },
  { name: 'Node.js', icon: '/skills/12nodejs.svg' },

  { name: 'UiPath', icon: '/skills/13uipath.svg' },
  { name: 'n8n', icon: '/skills/14n8n.svg' },
  { name: 'Figma', icon: '/skills/15figma.svg' },
  { name: 'Canva', icon: '/skills/16canva.svg' },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-32 bg-neutral-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <h2 className="text-5xl font-bold text-black mb-8">
          Education & Skills
        </h2>

        {/* Intro (Full Width) */}
        <p className="text-neutral-600 mb-20 leading-relaxed max-w-3xl">
          I focus on data analysis and enjoy exploring new tools and technologies 
          to discover patterns, trends, and insights. Here’s an overview of my skills.
        </p>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-24 items-start">

          {/* LEFT — TIMELINE */}
          <div className="relative">



            <div className="space-y-16">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-12"
                >

                  {/* Dot */}
                  <div className="absolute left-0 top-2 w-5 h-5 bg-neutral-400 rounded-full"></div>

                  {/* Line (ไม่แสดงในตัวสุดท้าย) */}
                  {index !== education.length - 1 && (
                    <div className="absolute left-[10px] top-7 h-[calc(100%+3rem)] w-[2px] bg-neutral-300"></div>
                  )}

                  <h4 className="text-xl font-semibold text-neutral-900">
                    {edu.institution}
                  </h4>
                  <p className="text-neutral-600 mt-1">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-neutral-500 mt-1">
                    {edu.duration}
                  </p>

                </motion.div>
              ))}
            </div>

          </div>

          {/* RIGHT — SKILLS */}
          <div>
            <div className="
              grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
              gap-x-4
              gap-y-4
            ">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="
                    group
                    w-[80px] h-[80px]
                    bg-white
                    rounded-xl
                    border border-neutral-100
                    hover:border-neutral-400
                    hover:-translate-y-1
                    transition-all duration-300
                    p-3 hover:p-2 transition-all
                    flex items-center justify-center
                  "
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
