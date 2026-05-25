// src/pages/Subjects.jsx
import React, { useState } from "react";

export default function Subjects() {
  const curriculumSections = [
    {
      groupName: "Foundation Modules",
      items: [
        {
          code: "21MCS020F",
          title: "Quantum Computation", // Preserved exact custom entry 1
          credits: "L: 2 | T: 1 | P: 0 | C: 3",
          description:
            "Explore the fundamentals of qubits, superposition, and entanglement to build and understand powerful quantum circuits, quantum gates, and universal computation models. (Official title: Foundations of Quantum Computing: Physics, Engineering, and Mathematics Computing).",
        },
        {
          code: "21MCS021F",
          title: "Quantum Machine Learning", // Preserved exact custom entry 2
          credits: "L: 3 | T: 0 | P: 0 | C: 3",
          description:
            "Investigate how parameterized quantum circuits and quantum kernels can enhance machine learning pipelines, leading to theoretical performance breakthroughs in pattern recognition, dimensionality reduction, and high-dimensional AI model optimization. (Official title: Survey of Quantum technologies and Applications).",
        },
        {
          code: "21MCS022F",
          title: "Quantum Cryptography", // Preserved exact custom entry 3
          credits: "L: 2 | T: 1 | P: 0 | C: 3",
          description:
            "Learn about secure communication protocols like Quantum Key Distribution (QKD) and post-quantum cryptographic primitives that are mathematically and physically provably secure against eavesdropping vectors. (Official title: Foundations of Quantum Technologies).",
        },
        {
          code: "21MCS023F",
          title: "Basic Programming Lab",
          credits: "L: 1 | T: 0 | P: 4 | C: 3",
          description: "Hands-on structural runtime workspace environment targeting low-level quantum simulation libraries, execution of quantum assembly code, and functional SDK application layouts.",
        },
      ],
    },
    {
      groupName: "Professional Electives - A",
      items: [
        {
          code: "21MCS024E",
          title: "Introduction to Quantum Computation",
          credits: "L: 2 | T: 1 | P: 0 | C: 3",
          description: "Formal introduction covering multi-qubit systems, density matrices, baseline quantum search routines, and algorithmic acceleration foundations.",
        },
        {
          code: "21MCS025E",
          title: "Introduction to Quantum Communication",
          credits: "L: 2 | T: 1 | P: 0 | C: 3",
          description: "Comprehensive tracking of state teleportation mechanics, entanglement purification layers, and secure information routing architectures across distributed hardware networks.",
        },
        {
          code: "21MCS026E",
          title: "Introduction to Quantum Sensing",
          credits: "L: 3 | T: 0 | P: 0 | C: 3",
          description: "High-precision sensing principles utilizing atomic systems, spin-resonance setups, and phase estimation loops to outpace classical baseline detection bounds.",
        },
        {
          code: "21MCS027E",
          title: "Introduction to Quantum Materials",
          credits: "L: 3 | T: 0 | P: 0 | C: 3",
          description: "Exploration of topological insulators, strongly correlated systems, and crystalline lattice configurations essential for manufacturing reliable physical qubit platforms.",
        },
      ],
    },
    {
      groupName: "Professional Electives - B",
      items: [
        {
          code: "21MCS028E",
          title: "Basic Laboratory Course for Quantum Technologies",
          credits: "L: 1 | T: 0 | P: 4 | C: 3",
          description: "Experimental laboratory module detailing physical apparatus alignment, state validation checks, and diagnostic benchmarking of noisy quantum components.",
        },
        {
          code: "21MCS029E",
          title: "Engineering Foundations of Quantum Technologies",
          credits: "L: 2 | T: 1 | P: 0 | C: 3",
          description: "System engineering paradigms encompassing control instrumentation, RF signal mapping, micro-architecture design, and environmental isolation layers.",
        },
        {
          code: "21MCS030E",
          title: "Solid State Physics for Quantum Technologies",
          credits: "L: 3 | T: 0 | P: 0 | C: 3",
          description: "Theoretical frameworks focusing on energy band formations, semiconductor physics, Josephson junctions, and superconducting hardware design matrices.",
        },
        {
          code: "21MCS031E",
          title: "Quantum Optics",
          credits: "L: 3 | T: 0 | P: 0 | C: 3",
          description: "Advanced investigation into quantized electromagnetic fields, single-photon emission pathways, coherent states, and hardware-driven optical computation setups.",
        },
      ],
    },
  ];

  // Flat list mapper for active accordion index control tracking
  const flatSubjects = curriculumSections.flatMap((section) => section.items);
  const [openSubjectCode, setOpenSubjectCode] = useState(flatSubjects[0]?.code || null);

  const handleToggle = (code) => {
    setOpenSubjectCode(openSubjectCode === code ? null : code);
  };

  return (
    <section id="subjects" className="py-20 px-4 min-h-screen relative z-20">
      <div className="container mx-auto max-w-4xl">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-black mb-4 text-white uppercase tracking-tight">
            Curriculum Structure
          </h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6"></div>
          <p className="text-base text-amber-100/70 leading-relaxed">
            Specialized structural course routing framework approved for the Centre of Excellence, yielding a cumulative total of <span className="text-amber-400 font-bold">18 learning credits</span>.
          </p>
        </div>

        {/* --- CURRICULUM SECTIONS --- */}
        <div className="space-y-12">
          {curriculumSections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-4">
              
              {/* Category Header Label */}
              <h3 className="text-xs font-black uppercase tracking-[0.25em] text-amber-400/80 font-mono pl-2">
                // {section.groupName}
              </h3>

              {/* Accordion Container Wrapper */}
              <div className="bg-[#0a0904]/40 backdrop-blur-md border border-amber-500/10 rounded-xl overflow-hidden shadow-2xl">
                {section.items.map((subject) => {
                  const isOpen = openSubjectCode === subject.code;
                  return (
                    <div 
                      key={subject.code} 
                      className="border-b border-amber-900/10 last:border-b-0 transition-colors"
                    >
                      {/* Active Row Header Click Trigger */}
                      <button 
                        onClick={() => handleToggle(subject.code)}
                        className="w-full p-5 flex flex-col sm:flex-row sm:items-center justify-between text-left focus:outline-none group transition-all hover:bg-amber-500/[0.02]"
                      >
                        <div className="flex items-start gap-4">
                          {/* Code Tag Unit */}
                          <div className="mt-0.5 px-2 py-1 rounded bg-amber-500/10 border border-amber-500/20 flex-shrink-0 text-[10px] font-mono font-bold text-amber-400 tracking-wider">
                            {subject.code}
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors tracking-wide uppercase">
                              {subject.title}
                            </h4>
                            <span className="text-[11px] font-mono text-amber-100/40 uppercase tracking-widest block mt-0.5">
                              {subject.credits}
                            </span>
                          </div>
                        </div>
                        
                        {/* Interactive Dynamic Action Chevron */}
                        <div className="flex-shrink-0 ml-auto mt-3 sm:mt-0 pl-14 sm:pl-0">
                          <svg 
                            className={`h-4 w-4 text-amber-400/40 group-hover:text-amber-400 transform transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : 'rotate-0'
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

                      {/* Expandable Meta Panel Drawer */}
                      <div 
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="pl-[72px] pr-6 pb-5">
                          <p className="text-amber-100/60 text-sm leading-relaxed border-l border-amber-500/20 pl-4 font-medium">
                            {subject.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* --- MANDATORY REQUIREMENT DISCLOSURE PLATE --- */}
        <div className="mt-12 bg-[#0a0904]/20 border border-amber-500/5 rounded-xl p-5 relative overflow-hidden max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/40"></div>
          <p className="text-amber-100/40 font-mono text-xs leading-relaxed tracking-wide uppercase pl-2">
            * Elective Selection Constraint Matrix: Completion dictates fulfilling either (i) two tracks from Professional Elective-A series, or (ii) one track from Professional Elective-A paired with one track from Professional Elective-B series.
          </p>
        </div>

      </div>
    </section>
  );
}