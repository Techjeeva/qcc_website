// src/pages/IndustrialVisits.jsx
import React from 'react';

export default function IndustrialVisits() {
  const visitLocations = [
    {
      name: "IBM Quantum Research Center",
      type: "Research Lab",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    },
    {
      name: "TCS Innovation Lab",
      type: "Industrial Visit",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
    },
    {
      name: "ISRO Propulsion Complex",
      type: "Government Research",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg",
    },
    {
      name: "IIT Madras Quantum Hub",
      type: "Academic Collaboration",
      logo: "https://via.placeholder.com/150x80/0a0904/fbbf24?text=IIT+Madras", 
    },
    {
      name: "Google Quantum AI Lab",
      type: "Tech Visit",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Microsoft Quantum",
      type: "Industry Lead",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
  ];

  return (
    <section id="industrial-visits" className="py-20 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-black mb-4 text-white uppercase tracking-tight">
            Industrial & Research Visits
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-amber-100/70 leading-relaxed">
            Bridging the gap between theory and practice. Our students regularly visit 
            world-class facilities to witness the practical implementation of 
            Quantum Information Science.
          </p>
        </div>

        {/* --- Premium Glass Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visitLocations.map((location, index) => (
            <div
              key={index}
              className="bg-[#0a0904]/70 backdrop-blur-md border border-amber-900/30 p-8 rounded-xl shadow-xl flex flex-col items-center justify-center text-center group hover:border-amber-500/40 hover:shadow-amber-500/5 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Logo Container with Dark Gold Treatment */}
              <div className="bg-black/40 border border-amber-900/10 p-4 rounded-lg mb-6 w-full flex justify-center items-center h-24 shadow-inner">
                <img
                  src={location.logo}
                  alt={`${location.name} logo`}
                  className="h-10 w-auto object-contain filter invert brightness-90 contrast-200 grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 group-hover:invert-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-500" 
                />
              </div>

              {/* Tag Accent */}
              <span className="text-[10px] uppercase tracking-widest text-amber-400 font-black mb-2 block drop-shadow-[0_0_5px_rgba(245,158,11,0.3)]">
                {location.type}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold text-amber-100 group-hover:text-white transition-colors duration-200">
                {location.name}
              </h3>
            </div>
          ))}
        </div>

        {/* --- Bottom Premium Callout --- */}
        <div className="mt-20 p-8 bg-[#0a0904]/40 backdrop-blur-md border border-amber-500/20 rounded-xl text-center max-w-4xl mx-auto shadow-xl">
          <p className="text-amber-100/80 font-medium italic text-base leading-relaxed">
            "These visits provide our students with an unparalleled perspective on how 
            quantum algorithms are moving seamlessly from the whiteboard to real-world deployment frameworks."
          </p>
        </div>

      </div>
    </section>
  );
}