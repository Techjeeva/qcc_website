// src/pages/QuantumClub.jsx
import React from 'react';

const clubContacts = [
  { name: "Tanishq Kumar", role: "President", email: "priya.s@student.srmist.edu.in" },
  { name: "Shashanka shekhar sharma", role: "Vice President", email: "arjun.v@student.srmist.edu.in" },
  { name: "Lakshya Malik", role: "Vice President", email: "bob.w@example.com" },
];

export default function QuantumClub() {
  return (
    <section id="quantum-club" className="py-20 px-4 min-h-screen">
      <div className="container mx-auto max-w-5xl">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-black mb-4 text-white uppercase tracking-tight">
            SRMIST Quantum Communication and Computing Club
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-amber-100/70 leading-relaxed">
            Exploring the frontiers of quantum technology, together. Join fellow students passionate about the future of computation.
          </p>
        </div>

        {/* Main Content Sections using Gold Glassmorphism */}
        <div className="space-y-12">

          {/* About the Club */}
          <div className="bg-[#0a0904]/70 backdrop-blur-md border border-amber-900/30 p-8 sm:p-10 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-amber-400 mb-6 flex items-center uppercase tracking-wide">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3 text-amber-500 drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Our Mission
            </h3>
            <p className="text-amber-100/70 text-lg leading-relaxed">
              The SRMIST Quantum Communication and Computing Club aims to foster a collaborative environment for students to learn about, discuss, and experiment with quantum information science. We strive to demystify quantum concepts and explore their potential applications through hands-on activities and engaging discussions.
            </p>
          </div>

          {/* Club Activities */}
          <div className="bg-[#0a0904]/70 backdrop-blur-md border border-amber-900/30 p-8 sm:p-10 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-amber-400 mb-6 flex items-center uppercase tracking-wide">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3 text-amber-500 drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
              What We Do
            </h3>
            <ul className="space-y-4 text-amber-100/70 text-base list-none pl-1">
              <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">✦</span><span><strong className="text-white font-semibold">Workshops:</strong> Hands-on sessions using Qiskit, Cirq, and other quantum SDKs.</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">✦</span><span><strong className="text-white font-semibold">Guest Talks:</strong> Inviting researchers and industry experts to share insights.</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">✦</span><span><strong className="text-white font-semibold">Study Groups:</strong> Collaborative learning on topics like quantum algorithms and cryptography.</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">✦</span><span><strong className="text-white font-semibold">Projects:</strong> Opportunities to work on small quantum computing projects.</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">✦</span><span><strong className="text-white font-semibold">Hackathons & Competitions:</strong> Participating in internal and external quantum challenges.</span></li>
            </ul>
          </div>

          {/* How to Join */}
          <div className="bg-[#0a0904]/70 backdrop-blur-md border border-amber-900/30 p-8 sm:p-10 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-amber-400 mb-6 flex items-center uppercase tracking-wide">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3 text-amber-500 drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Become a Member
            </h3>
            <p className="text-amber-100/70 text-lg mb-6 leading-relaxed">
              Interested in joining the quantum revolution? Membership is open to all SRMIST students with a curiosity for quantum communication and computing. No prior experience is required, just enthusiasm to learn!
            </p>
            
            <a
              href="#" 
              className="inline-block bg-amber-500 text-black font-black rounded-full uppercase tracking-wider text-xs px-8 py-3.5 hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Sign Up Here
            </a>
          </div>

          {/* Contact / Leadership */}
          <div className="bg-[#0a0904]/70 backdrop-blur-md border border-amber-900/30 p-8 sm:p-10 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-amber-400 mb-8 flex items-center uppercase tracking-wide">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3 text-amber-500 drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Contact Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clubContacts.map((contact, index) => (
                <div key={index} className="p-5 rounded-lg bg-black/30 border border-amber-900/10 text-center flex flex-col justify-between">
                  <div>
                    <p className="text-white font-bold text-lg mb-1">{contact.name}</p>
                    <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">{contact.role}</p>
                  </div>
                  <a 
                    href={`mailto:${contact.email}`} 
                    className="text-amber-100/60 text-xs hover:text-amber-300 transition-colors break-all font-mono border-t border-amber-900/20 pt-3 mt-1"
                  >
                    {contact.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}