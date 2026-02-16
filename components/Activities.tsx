'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Certificate } from 'crypto';
import { video } from 'framer-motion/client';

const activities = [
  {
    id: 1,
    title: 'Databricks Data Engineer Bootcamp',
    organizer: 'gosoft & depa',
    description:
      'Joined the bootcamp to learn Data Engineering techniques on the Databricks platform.',
    category: 'DATA ENGINEER',
    image: '/images/dataengineer.png', // card cover
    details: {
      overview: `I participated in the Gosoft Tech Bootcamp 2026 – Databricks: Data Engineer, a 3-day intensive program organized by Gosoft (Thailand) in collaboration with depa and Trainocate Thailand.

The bootcamp brought together over 100 selected participants (from more than 1,000 applicants) with the shared goal of upskilling toward a professional Data Engineer role. The program focused on hands-on learning using the Databricks Platform, covering modern data engineering concepts from foundational architecture to production-ready deployment.

Throughout the bootcamp, participants learned to design and build data pipelines, implement data ingestion and transformation processes, and deploy scalable data workloads using Lakeflow Connect and Lakeflow Jobs. The program emphasized real-world enterprise environments and concluded with a final assessment and certification from Gosoft Academy and its technology partners.`,

      takeaways: [
        'Built end-to-end Data Engineering workflows on the Databricks Platform.',
        'Designed and deployed scalable data pipelines aligned with Modern Data Platform principles.',
        'Gained hands-on experience in data ingestion, transformation, orchestration, and job automation.',
        'Learned production-ready deployment strategies for enterprise-level data workloads.',
        'Strengthened problem-solving skills through real-world workshops and system design challenges.',
      ],
      gallery: [
        '/images/data01.jpg',
        '/images/data02.jpg',
      ],
      certificate: [
        '/cert/cert-databricks.svg',
      ],
    },
  },

  {
    id: 2,
    title: 'Data Scientist Training Course',
    organizer: 'depa & DayDev',
    description:
      'An intensive 10-day course covering Data Analytics, Machine Learning, and Cloud Computing. ',
    category: 'DATA SCIENCE',
    image: '/images/data science.png', // card cover
    details: {
      overview: `I participated in the Data Science Excellence Initiative organized by the Digital Economy Promotion Agency (depa) and managed by Daydev Co., Ltd.
      
    This intensive 10-day (60-hour) live online program was designed to prepare final-year students and recent graduates for careers in Data Science and AI.

    The curriculum combined lectures and hands-on workshops covering Data Analytics, Programming, Machine Learning, Deep Learning, Database Systems, Cloud Computing, Data Governance, and Data Visualization. The program concluded with the IT Specialist: Data Analytics Certification exam and included a structured Job Matching process with industry partners to support career placement in Data Science and AI-related roles.`,
      
      takeaways: [
        'Strengthened end-to-end Data Science skills - from data preparation and statistical analysis to machine learning model development and deployment.',
        'Gained practical experience in performance optimization, database architecture, and scalable data system design.',
        'Applied advanced statistical techniques, multivariate analysis, and time series modeling to real-world datasets.',
        'Developed interactive dashboards and data storytelling solutions using modern visualization tools.',
        'Built foundational knowledge in Data Governance, data security, and ethical AI practices.',

      ],
      certificate: [
        '/cert/cert-depa.svg',
        '/cert/cert-daydev.svg',
        '/cert/IT-Specialist.jpg',
      ],
    },
  },

  {
    id: 3,
    title: 'SPEAK SMART, SEIZE CHANCES',
    organizer: 'Kru Green Nithivat & LIVE LIFE CLUB',
    description:
      'A workshop on public speaking, storytelling, and confident self-presentation.',
    category: 'SOFT SKILLS',
    image: '/images/public speaking.png', // card cover
    details: {
      overview: `I participated in the LIVE LIFE CLUB – “SPEAK SMART, SEIZE CHANCES” workshop held at Glowfish Sathorn, organized for readers of LIVE TO LIFE and Thai Life Insurance customers.

The session was led by Kru Green (Nitiwat Tantipatsiri), a professional communication coach from The Modern Melody Studio. The workshop focused on enhancing communication skills and personal presence, equipping participants with practical techniques to speak confidently, build credibility, and create opportunities through effective communication.

The program combined theory and interactive practice, including real-life speaking simulations and personalized feedback. It also introduced a structured 21-Day Speaking Practice Challenge, designed to help participants continuously develop their communication skills beyond the workshop.`,

    
      takeaways: [
        'Developed confident and structured public speaking techniques.',
        'Learned active listening skills to improve mutual understanding across different generations.',
        'Strengthened personal branding through voice control, body language, and professional presence.',
        'Practiced real-world communication scenarios with direct coaching and feedback.',
        'Built a sustainable improvement plan through a 21-day speaking development framework.',
      ],
      galleries: [
        '/images/speaking01.png',
        '/images/speaking02.png',
        '/images/speaking03.png',
      ],
    },
  },

  {
    id: 4,
    title: 'NCSA CTF Boot Camp 2024',
    organizer: 'NCSA (สกมช.)',
    description:
      'Participated in cybersecurity training and Capture The Flag (CTF) challenges.',
    category: 'CYBERSECURITY',
    image: '/images/ncsa.png', // card cover
    details: {
      overview: `I participated in the NCSA CTF Boot Camp 2024, organized by the National Cyber Security Agency (NCSA), held on 14–15 September 2024.

This intensive boot camp was designed to enhance cybersecurity awareness and provide career guidance in the field of Cybersecurity through a hands-on Capture The Flag (CTF) format. The program gathered 100 students from secondary to university levels and combined foundational lectures with practical challenges across multiple cybersecurity domains.

The training covered Web Application Security, Digital Forensics, Pwnable & Reverse Engineering, Network Security, Mobile Security, and Programming. The camp concluded with a competitive CTF challenge and a career orientation session in cybersecurity.`,

      takeaways: [
        'Strengthened foundational knowledge in multiple cybersecurity domains through hands-on CTF challenges.',
        'Developed practical skills in vulnerability analysis, exploitation techniques, and security problem-solving.',
        'Improved analytical thinking under time-constrained competitive environments.',
        'Gained exposure to real-world cybersecurity attack and defense scenarios.',
        'Enhanced understanding of cybersecurity career pathways and industry expectations.',
        'Earned an E-Certificate and competition recognition from the program.',
      ],
      galleries: [
        '/images/NCSA-01.jpg',
        '/images/NCSA-02.jpg',
        '/images/NCSA-03.jpg'
      ],
      certificate: [
        '/cert/certncsa.jpg'
      ],
    },
  },
];

export default function Activities() {
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    if (selected) {
      document.documentElement.classList.add('modal-open');
      document.body.classList.add('modal-open');
    } else {
      document.documentElement.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
    }


    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [selected]);

  useEffect(() => {
  if (!selected) return;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setSelected(null);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [selected]);


  return (
    <section id="activities" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Activities & <span className="text-blue-600">Workshops</span>
          </h2>
          <p className="text-gray-600 mt-6 text-lg">
            Exploring new horizons through workshops, bootcamps, and hands-on experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelected(item)}
              className="group bg-white rounded-3xl shadow-md 
                        hover:shadow-2xl hover:-translate-y-2 
                        transition-all duration-500 ease-out 
                        cursor-pointer overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col">
                <h3 className="font-bold text-lg">{item.title}</h3>

                <p className="text-sm text-gray-500 mt-1">
                  • {item.organizer}
                </p>

                <p className="text-gray-600 mt-3 text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                <p className="text-blue-600 font-semibold mt-4 text-sm">
                  More Details →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">

            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-50 bg-white/90 p-2 rounded-full shadow hover:bg-white transition"
            >
              <X size={20} />
            </button>

            {/* Hero Image */}
            <div className="relative h-[300px] md:h-[420px] overflow-hidden rounded-t-3xl">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-cover rounded-t-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 to-transparent rounded-t-3xl" />
              <div className="absolute bottom-6 left-8 text-white">
                <span className="bg-blue-500 px-3 py-1 text-xs rounded-full">
                  {selected.category}
                </span>
                <h3 className="text-3xl font-bold mt-3">
                  {selected.title}
                </h3>
                <p className="opacity-90">{selected.organizer}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-10 pb-16">
              <h4 className="text-xl font-bold mb-4">About the Activity</h4>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {selected.details.overview}
              </p>

              <h4 className="text-xl font-bold mt-10 mb-4">Key Takeaways</h4>
              <ul className="space-y-2">
                {selected.details.takeaways.map((item: string, i: number) => (
                  <li key={i} className="flex gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
              
              {/* Video */}
              {selected.id === 3 && (
                <div className="mt-12">
                  <h4 className="text-xl font-bold mb-4">Overview of Activity</h4>

                  <a
                    href="https://www.facebook.com/reel/4335935766687450"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block rounded-xl overflow-hidden shadow-lg group"
                  >
                    <img
                      src="/images/speak-cover.png"   // ← รูป cover ของกิจกรรม
                      alt="SPEAK SMART Workshop"
                      className="w-full h-[320px] object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <div className="bg-white p-4 rounded-full shadow-xl text-2xl">
                        ▶
                      </div>
                    </div>
                  </a>

                  <p className="text-sm text-gray-500 mt-3 text-center">
                    Click to watch the video on Facebook
                  </p>
                </div>
              )}
              
              {/* Gallery */}
              {selected.details.gallery && (
                <>
                  <h4 className="text-xl font-bold mt-10 mb-4">
                    Activity Gallery
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selected.details.gallery.map((img: string, i: number) => (
                      <div key={i} className="relative aspect-[16/9] rounded-xl overflow-hidden">
                        <Image
                          src={img}
                          alt="gallery"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Gallery - kru green */}
              {selected.details.galleries && (
                <>
                  <h4 className="text-xl font-bold mt-10 mb-4">
                    Activity Gallery
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {selected.details.galleries.map((img: string, i: number) => (
                      <div key={i} className="relative aspect-[16/9] rounded-xl overflow-hidden">
                        <Image
                          src={img}
                          alt="galleries"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Certificate */}
              {selected.details.certificate && (
                <>
                  <h4 className="text-xl font-bold mt-10 mb-4">
                    Certificate
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {selected.details.certificate.map((img: string, i: number) => (
                      <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                        <Image
                          src={img}
                          alt="certificate"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
            {/* ✅ Scroll Fade Effect (ย้ายมาไว้ตรงนี้) */}
            {/* <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent rounded-b-3xl" /> */}
          </div>
        </div>
      )}
    </section>
  );
}
