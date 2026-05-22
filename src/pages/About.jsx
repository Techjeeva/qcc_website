// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const focusAreas = [
    {
      title: "Quantum Algorithms",
      description: "Developing and analyzing novel algorithms to solve complex optimization, simulation, and machine learning problems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 0l-3-3m3 3l-3 4m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Quantum Machine Learning",
      description: "Exploring the intersection of quantum computing and AI to create more powerful and efficient learning models.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      title: "Quantum Cryptography",
      description: "Researching secure communication protocols, including QKD, to safeguard information in the post-quantum era.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Quantum Error Correction",
      description: "Investigating fault-tolerant quantum computing by designing codes to protect qubits from noise and decoherence.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l5.5-5.5a8.034 8.034 0 011.59-1.03m5.422-3.322a8.003 8.003 0 01-1.59 1.03l5.5 5.5c1.5-3.033 1.83-6.356.88-9.417z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Main About Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 bg-[#0a0904]/70 backdrop-blur-md border border-amber-900/30 p-8 rounded-xl shadow-xl">
          <div className="order-2 lg:order-1">
            <img 
              src="images/qc_lab_photo.jpg" 
              alt="Quantum Computing Laboratory interior" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover border-2 border-amber-900/20"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold mb-4 text-white uppercase tracking-tight">
              About Our Lab
            </h2>
            <div className="h-1 w-16 bg-amber-500 mb-6 rounded-full"></div>
            <p className="text-lg text-amber-100/80 mb-4 leading-relaxed">
              The <strong className="text-amber-400 font-bold">SRMIST Qkrishi Centre of Excellence in Quantum Information and Computing (SQ|QuIC)</strong> was established in partnership with <strong className="text-amber-400 font-bold">Qkrishi Quantum Private Limited</strong>.
            </p>
            <p className="text-amber-100/70 mb-6 leading-relaxed">
              Officially inaugurated on <strong className="text-amber-400">September 9, 2022</strong>, the center is led by Dr. M. Pushpalatha, Professor & Head of the Department of Computing Technologies. As an early adopter of quantum technology in India, SRMIST has integrated specialized elective courses like "Quantum Computation" and "Quantum Machine Learning" into its undergraduate curriculum.
            </p>
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="bg-[#0a0904]/70 backdrop-blur-md border border-amber-900/30 p-8 rounded-xl shadow-xl mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Vision Section */}
            <div className="p-4 rounded-lg bg-amber-950/20 border border-amber-900/10">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-400 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Our Vision</h3>
              </div>
              <p className="text-amber-100/70 leading-relaxed">
                To revolutionize computations by using quantum algorithms to solve intractable problems and help achieve quantum supremacy.
              </p>
            </div>
            {/* Mission Section */}
            <div className="p-4 rounded-lg bg-amber-950/20 border border-amber-900/10">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-400 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V4m0 16v-2M12 12l-2-2m2 2l2-2m2 2l-2-2m-2 2l2 2" />
                </svg>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Our Mission</h3>
              </div>
              <p className="text-amber-100/70 leading-relaxed">
                To seed, nurture, and scale up research and development activities, contributing to a robust quantum ecosystem.
              </p>
            </div>
          </div>
        </div>
        
        {/* Focus Areas Section */}
        <div className="bg-[#0a0904]/70 backdrop-blur-md border border-amber-900/30 p-8 rounded-xl shadow-xl mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center uppercase tracking-wide">Our Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-amber-950/20 transition-colors duration-300">
                <div className="flex-shrink-0 text-amber-400 bg-amber-950/60 border border-amber-500/20 p-3 rounded-xl shadow-[0_0_10px_rgba(251,191,36,0.1)]">
                  {area.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-amber-400 mb-1">{area.title}</h4>
                  <p className="text-amber-100/70 text-sm leading-relaxed">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Meet the Head Section */}
        <div className="bg-[#0a0904]/70 backdrop-blur-md border border-amber-900/30 p-8 rounded-xl shadow-xl mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 text-center">
              <img
                src="./faculty/Pushpalatha.png" 
                alt="Dr. M. Pushpalatha"
                className="rounded-lg shadow-lg w-full max-w-xs mx-auto object-cover border-4 border-amber-500/30 shadow-amber-500/5"
              />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-wide">A Word from the Head</h3>
              <blockquote className="border-l-4 border-amber-500 pl-4 italic text-lg text-amber-100/80 mb-6 leading-relaxed">
                "Our lab is not just a facility; it's a launchpad for the next generation of quantum pioneers. We are committed to building a strong foundation in quantum education and research, empowering our students to tackle the world's most complex challenges."
              </blockquote>
              <p className="text-white font-bold text-lg tracking-wide">Dr. M. Pushpalatha</p>
              <p className="text-amber-500 text-sm font-medium">Professor & Head, Dept. of Computing Technologies</p>
            </div>
          </div>
        </div>

        {/* Get Involved (Call to Action) */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-10 text-center uppercase tracking-wide">Get Involved</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CTA 1: For Students */}
            <Link to="/projects" className="block p-6 bg-[#0a0904]/40 border border-amber-900/20 rounded-xl shadow-lg hover:shadow-amber-500/10 hover:border-amber-500/40 hover:scale-105 transition-all duration-300 group">
              <h4 className="text-2xl font-bold text-amber-400 mb-3 group-hover:text-amber-300 transition-colors">For Students</h4>
              <p className="text-amber-100/70 text-sm leading-relaxed">Explore our ongoing research projects or join the Quantum Club to start your journey.</p>
            </Link>
            {/* CTA 2: For Industry */}
            <Link to="/collaborations" className="block p-6 bg-[#0a0904]/40 border border-amber-900/20 rounded-xl shadow-lg hover:shadow-amber-500/10 hover:border-amber-500/40 hover:scale-105 transition-all duration-300 group">
              <h4 className="text-2xl font-bold text-amber-400 mb-3 group-hover:text-amber-300 transition-colors">For Industry</h4>
              <p className="text-amber-100/70 text-sm leading-relaxed">Partner with us to explore quantum solutions for your business. See our MoUs and contact us.</p>
            </Link>
            {/* CTA 3: For Academics */}
            <Link to="/faculty" className="block p-6 bg-[#0a0904]/40 border border-amber-900/20 rounded-xl shadow-lg hover:shadow-amber-500/10 hover:border-amber-500/40 hover:scale-105 transition-all duration-300 group">
              <h4 className="text-2xl font-bold text-amber-400 mb-3 group-hover:text-amber-300 transition-colors">For Academics</h4>
              <p className="text-amber-100/70 text-sm leading-relaxed">We welcome collaboration. Connect with our faculty to discuss potential research partnerships.</p>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}