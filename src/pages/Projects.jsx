// src/pages/Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projectsData = [
    {
      title: "Quantum Random Number Generator (QRNG)",
      status: "Completed",
    },
    {
      title: "Quantum Key Distribution (QKD) Protocol",
      status: "Completed",
    },
    {
      title: "Quantum Machine Learning for Medical Diagnosis",
      status: "Ongoing",
    },
    {
      title: "Quantum Algorithms for Optimization Problems",
      status: "Ongoing",
    },
    {
      title: "Quantum Neural Networks (QNN)",
      status: "Ongoing",
    },
  ];

  const completedProjects = projectsData.filter((p) => p.status === "Completed");
  const ongoingProjects = projectsData.filter((p) => p.status === "Ongoing");

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-black mb-4 text-white uppercase tracking-tight">
            Research & Development Projects
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-amber-100/70 leading-relaxed">
            Our lab is at the forefront of quantum research, building scalable systems 
            and foundational protocols for the post-quantum world.
          </p>
        </div>

        {/* --- Two Columns Glassmorphism Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#0a0904]/70 backdrop-blur-md border border-amber-900/30 p-8 sm:p-12 rounded-xl shadow-xl">
          
          {/* Ongoing Projects Column */}
          <div className="p-2">
            <h3 className="text-2xl font-bold text-amber-400 mb-6 border-b-2 border-amber-900/40 pb-3 uppercase tracking-wide flex items-center gap-2">
              Ongoing Research
            </h3>
            <ul className="space-y-4">
              {ongoingProjects.map((project, index) => (
                <li key={index} className="flex items-start group">
                  <span className="text-amber-400 mr-3 mt-1 text-xs drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]">●</span>
                  <span className="text-amber-100/90 font-medium group-hover:text-amber-300 transition-colors duration-200">
                    {project.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Completed Projects Column (Emerald & Gold Accents) */}
          <div className="p-2">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6 border-b-2 border-amber-900/40 pb-3 uppercase tracking-wide flex items-center gap-2">
              Completed Projects
            </h3>
            <ul className="space-y-4">
              {completedProjects.map((project, index) => (
                <li key={index} className="flex items-start group">
                  <span className="text-emerald-400 mr-3 font-bold">✓</span>
                  <span className="text-amber-100/90 font-medium group-hover:text-emerald-300 transition-colors duration-200">
                    {project.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* --- Publications Callout Box --- */}
        <div className="mt-16 bg-[#0a0904]/70 backdrop-blur-md border border-amber-900/30 p-8 sm:p-12 rounded-xl shadow-xl text-center">
          <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-wide">
            From Research to Publication
          </h3>
          <p className="text-lg text-amber-100/70 max-w-3xl mx-auto leading-relaxed">
            Our students actively contribute to the scientific community, with
            research originating from these projects frequently being published
            in prestigious <strong className="text-amber-400 font-semibold">IEEE</strong> and <strong className="text-amber-400 font-semibold">Springer</strong> journals.
          </p>
          
          <Link
            to="/achievements" 
            className="mt-8 inline-block bg-amber-500 text-black font-black rounded-full uppercase tracking-wider text-xs px-8 py-3.5 hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            View Achievements
          </Link>
        </div>

      </div>
    </section>
  );
}