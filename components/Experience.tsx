'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Briefcase, Calendar, MapPin, X, Layers } from 'lucide-react';


export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (selectedCompany) {
      // Lock background scroll
      html.classList.add("modal-open");
      body.classList.add("modal-open");

      // Prevent layout shift when scrollbar disappears
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      html.classList.remove("modal-open");
      body.classList.remove("modal-open");
      body.style.paddingRight = "";
    }

    return () => {
      html.classList.remove("modal-open");
      body.classList.remove("modal-open");
      body.style.paddingRight = "";
    };
  }, [selectedCompany]);

  useEffect(() => {
    if (!selectedCompany) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCompany(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCompany]);

  return (
    <section id="experience" className="py-32 bg-gray-100" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ===== Section Title ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Internship <span className="text-blue-600">Experience</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My journey of learning and growing through real-world work experiences.
            <br />
            Click on each card to see the projects I've worked on.
          </p>
        </motion.div>

        {/* ===== Timeline ===== */}
        <div className="relative mt-20">

          {/* Center Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-gray-300 h-full" />

          <div className="space-y-32">

            {/* ================= DELTA ================= */}
            <div className="grid grid-cols-2 items-center">

              {/* LEFT (Date) */}
              <div className="flex justify-end pr-16">
                <div className="flex items-center gap-2 border border-blue-200 text-blue-600 px-4 py-2 rounded-lg bg-white shadow-sm text-sm">
                  <Calendar size={16} />
                  July - December 2025
                </div>
              </div>

              {/* RIGHT (Card) */}
              <div className="relative pl-16">
                {/* Timeline Icon */}
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center 
                  shadow-lg border-4 border-white z-10">
                    <Briefcase size={20} className="text-white" />
                </div>

                <div
                  onClick={() => setSelectedCompany('delta')}
                  className="bg-white p-5 rounded-3xl shadow-lg hover:shadow-2xl transition cursor-pointer max-w-xl"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src="/logo/delta.svg"
                      alt="Delta Electronics"
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <h3 className="font-bold text-lg">
                        Delta Electronics (Thailand) Public Co., Ltd.
                      </h3>
                      <p className="text-blue-600 font-semibold mt-1">
                        Digital Solution Intern
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                    Explored and implemented digital solutions to support HR digital transformation through workflow automation,
                    while organizing workshops to equip employees with digital tools and supporting application testing.
                  </p>

                  <p className="mt-4 text-blue-600 font-semibold hover:underline">
                    What I did? →
                  </p>
                </div>
              </div>
            </div>


            {/* ================= MFEC ================= */}
            <div className="grid grid-cols-2 items-center">

              {/* LEFT (Card) */}
              <div className="relative pr-16 flex justify-end">
                {/* Timeline Icon */}
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 
                  w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center 
                  shadow-lg border-4 border-white z-10">
                    <Briefcase size={20} className="text-white" />
                </div>

                <div
                  onClick={() => setSelectedCompany('mfec')}
                  className="bg-white p-5 rounded-3xl shadow-lg hover:shadow-2xl transition cursor-pointer max-w-xl"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src="/logo/mfec.svg"
                      alt="MFEC"
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <h3 className="font-bold text-lg">
                        MFEC Public Company Limited
                      </h3>
                      <p className="text-blue-600 font-semibold mt-1">
                        Data Science Intern
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                    Supported data pipelines and automated reporting using Python and Bash to deliver client-ready data.
                  </p>

                  <p className="mt-4 text-blue-600 font-semibold hover:underline">
                    What I did? →
                  </p>
                </div>
              </div>

              {/* RIGHT (Date) */}
              <div className="flex justify-start pl-16">
                <div className="flex items-center gap-2 border border-blue-200 text-blue-600 px-4 py-2 rounded-lg bg-white shadow-sm text-sm">
                  <Calendar size={16} />
                  April - June 2025
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selectedCompany && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCompany(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-10 relative"
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCompany(null)}
                className="absolute top-6 right-6 text-gray-500 hover:text-black"
              >
                <X size={24} />
              </button>

              {selectedCompany === 'delta' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Delta Electronics (Thailand) Public Company Limited
                  </h2>
                <div className="flex flex-wrap gap-6 text-blue-600 text-sm font-medium mb-6">
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} />
                    Digital Solution Intern
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    July - December 2025
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    Bangkok, Thailand
                  </div>
                </div>

                <hr className="mb-6" />

                {/* Responsibilities */}
                <div className="flex items-center gap-2 font-semibold mb-4">
                  <Layers size={18} className="text-blue-600" />
                  Key Responsibilities & Achievements
                </div>

                <ul className="list-disc pl-6 space-y-3 text-gray-700 text-sm leading-relaxed">
                  <li><strong>RPA Project (UiPath):</strong> Engineered and deployed automated workflows for HR processes including Talent Acquisition (Offer Letters), C&B (Travel Insurance), and Expat Visa processing, significantly reducing manual workload.</li>
                  <li><strong>Predictive Analytics POC:</strong> Implemented Machine Learning models for Talent Development to analyze historical data and forecast employee trends using Python and SQL.</li>
                  <li><strong>Lucky Draw System:</strong> Architected a real-time web application using Firebase and GitHub to support 20,000+ users for the New Year event, ensuring high availability and engagement.</li>
                  <li><strong>ChatGPT Workshop:</strong> Co-conducted a global workshop 'Writing Effective Prompts for HR Professionals' for teams in China, India, and Slovakia.</li>
                  <li><strong>Microsoft Planner Training:</strong> Organized and facilitated training for 120+ employees to drive digital tool adoption and enhance cross-functional collaboration.</li>
                  <li><strong>Application Testing:</strong> Performed rigorous Manual and UAT testing for both Mobile App and Web Admin Portal to ensure system quality.</li>
                  <li><strong>Artwork & Media:</strong> Designed visual assets to support internal communication and user engagement for digital initiatives.</li>
                </ul>

                {/* ===== Gallery ===== */}
                <div className="mt-10">
                  <h3 className="font-semibold text-lg mb-6">Activity Gallery</h3>

                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { src: '/images/work1.png', title: 'ChatGPT Workshop' },
                      { src: '/images/work2.png', title: 'Microsoft Planner Training' },
                      { src: '/images/work3.png', title: 'Application Testing' },
                      { src: '/images/work4.png', title: 'RPA Automation' },
                      { src: '/images/work5.png', title: 'Lucky Draw System' },
                    ].map((item, index) => (
                      <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="h-50 w-full object-cover"
                        />
                        <div className="p-4 text-sm font-medium text-gray-700">
                          {item.title}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
                </div>
              )}

              {selectedCompany === 'mfec' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    MFEC Public Company Limited
                  </h2>
                <div className="flex flex-wrap gap-6 text-blue-600 text-sm font-medium mb-6">
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} />
                    Data Science Intern
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    April - June 2025
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    Bangkok, Thailand
                  </div>
                </div>

                <hr className="mb-6" />

                {/* Responsibilities */}
                <div className="flex items-center gap-2 font-semibold mb-4">
                  <Layers size={18} className="text-blue-600" />
                  Key Responsibilities & Achievements
                </div>

                <ul className="list-disc pl-6 space-y-3 text-gray-700 text-sm leading-relaxed">
                  <li><strong>Supported Data Engineering Operations:</strong> Assisted the Data Engineering team in executing and monitoring register and data ingestion pipelines to ensure reliable data flow and system stability.</li>
                  <li><strong>Automation Development (Python, Bash, SQL):</strong> Designed and implemented automation scripts to extract, transform, and generate structured reports from raw log files, significantly reducing manual processing time.</li>
                  <li><strong>Log Data Processing & Analysis:</strong> Processed large-scale system log files to identify key operational metrics and prepare client-ready analytical reports.</li>
                  <li><strong>Report Preparation & Client Delivery:</strong> Generated accurate, well-structured data reports to support client deliverables and operational insights.</li>
                </ul>

                {/* ===== Gallery ===== */}
                <div className="mt-10">
                  <h3 className="font-semibold text-lg mb-6">Activity Gallery</h3>

                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { src: '/images/mfec011.png', title: 'Internship Card' },
                      { src: '/images/mfec012.png', title: 'Planning meeting' },
                      { src: '/images/mfec013.png', title: 'My mentor and my workspace  ' },
                    ].map((item, index) => (
                      <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="h-50 w-full object-cover"
                        />
                        <div className="p-4 text-sm font-medium text-gray-700">
                          {item.title}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
                </div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
