// src/pages/Subjects.jsx
import React, { useState } from "react";

export default function Subjects() {
  const subjectsData = [
    {
      title: "Quantum Computation",
      description:
        "Explore the fundamentals of qubits, superposition, and entanglement to build and understand powerful quantum circuits, quantum gates, and universal computation models.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-amber-400 group-hover:text-amber-300 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m0 0l-2-1m2 1V2M4 7l2 1M4 7l2-1M4 7v2.5M12 21.5v-2.5M12 18l-2 1m2-1l2 1m-2-1v-2.5"
          />
        </svg>
      ),
    },
    {
      title: "Quantum Machine Learning",
      description:
        "Investigate how parameterized quantum circuits and quantum kernels can enhance machine learning pipelines, leading to theoretical performance breakthroughs in pattern recognition, dimensionality reduction, and high-dimensional AI model optimization.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-amber-400 group-hover:text-amber-300 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V4m0 16v-2M12 12l-2-2m2 2l2-2m2 2l-2-2m-2 2l2 2"
          />
        </svg>
      ),
    },
    {
      title: "Quantum Cryptography",
      description:
        "Learn about secure communication protocols like Quantum Key Distribution (QKD) and post-quantum cryptographic primitives that are mathematically and physically provably secure against eavesdropping vectors.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-amber-400 group-hover:text-amber-300 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l5.5-5.5a8.034 8.034 0 011.59-1.03m5.422-3.322a8.003 8.003 0 01-1.59 1.03l5.5 5.5c1.5-3.033 1.83-6.356.88-9.417z"
          />
        </svg>
      ),
    },
    {
      title: "Elective: Quantum Communication & Networks",
      description:
        "An advanced study into quantum teleportation, entanglement swapping, quantum repeaters, and the critical engineering protocols required to deploy a distributed, global scale quantum internet framework.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-amber-400 group-hover:text-amber-300 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Elective: Variational Quantum Algorithms",
      description:
        "Focuses on practical NISQ-era algorithms including Variational Quantum Eigensolvers (VQE) and Quantum Approximate Optimization Algorithms (QAOA) tailored for commercial chemistry and optimization tracks.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-amber-400 group-hover:text-amber-300 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 3.055A9.003 9.003 0 1020.945 13H11V3.055z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          />
        </svg>
      ),
    },
    {
      title: "Elective: Fault-Tolerant Architecture",
      description:
        "Analyze surface codes, color codes, and error mitigation procedures designed to isolate processing nodes from physical environmental decoherence, driving progress toward large-scale logical qubit processors.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-amber-400 group-hover:text-amber-300 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      title: "More Advanced Modules Coming Soon",
      description:
        "Our academic roadmap dynamically scales each term to integrate groundbreaking developments across physical hardware platforms and quantum error mitigation protocols.",
      status: "coming-soon",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);
  const handleToggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="subjects" className="py-20 px-4 min-h-screen">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-black mb-4 text-white uppercase tracking-tight">
            Core Subjects & Electives
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-amber-100/70 leading-relaxed">
            Our specialized curriculum provides a comprehensive modern understanding of 
            theoretical foundations and active hands-on development paradigms.
          </p>
        </div>

        {/* --- Accordion Gold Glassmorphism Box --- */}
        <div className="max-w-3xl mx-auto bg-[#0a0904]/70 backdrop-blur-md border border-amber-900/30 rounded-xl shadow-2xl overflow-hidden">
          {subjectsData.map((subject, index) => (
            <div 
              key={index} 
              className="border-b border-amber-900/20 last:border-b-0 transition-colors"
            >
              {subject.status === "coming-soon" ? (
                
                /* Coming Soon Row Layout */
                <div className="p-6 flex items-center opacity-40 select-none bg-black/10">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/5 border border-amber-500/20 flex-shrink-0 flex items-center justify-center mr-5 shadow-inner">
                    <span className="text-xl font-bold text-amber-400">+</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-amber-100/60 uppercase tracking-wide">
                      {subject.title}
                    </h3>
                  </div>
                </div>
              ) : (
                
                /* Interactive Accordion Row Layout */
                <>
                  <button 
                    onClick={() => handleToggle(index)}
                    className="w-full p-6 flex items-center justify-between text-left focus:outline-none group transition-all hover:bg-amber-500/[0.02]"
                  >
                    <div className="flex items-center mr-4">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex-shrink-0 flex items-center justify-center mr-5 group-hover:border-amber-500/60 transition-all shadow-md">
                        {subject.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors tracking-wide">
                        {subject.title}
                      </h3>
                    </div>
                    
                    {/* Animated Chevron Arrow */}
                    <div className="flex-shrink-0 ml-2">
                      <svg 
                        className={`h-5 w-5 text-amber-400/60 group-hover:text-amber-400 transform transition-transform duration-300 ${
                          openIndex === index ? 'rotate-180' : 'rotate-0'
                        }`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Collapsible content with dynamic height transition */}
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-21 pr-8 pb-6">
                      <p className="text-amber-100/70 text-sm leading-relaxed border-l-2 border-amber-500/20 pl-4">
                        {subject.description}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}