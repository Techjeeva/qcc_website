// src/pages/MoUs.jsx
import React from 'react';

export default function MoUs() {
  const partnersData = [
    { name: "Artificial Brain", logo: "./mou/1.png" },
    { name: "C-DAC", logo: "./mou/5.png" },
    { name: "BosonQ Psi", logo: "./mou/4.png" },
    //{ name: "Qkrishi", logo: "./mou/6.png" },
    { name: "Bhumi ITech", logo: "./mou/3.png" },
    { name: "QNu Labs", logo: "./mou/7.png" },
    { name: "Qrace", logo: "./mou/2.png" },
  ];

  return (
    <section id="mous" className="py-20 px-4 min-h-screen flex items-center">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-black mb-4 text-white uppercase tracking-tight">
            Strategic Partnerships & MoUs
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-amber-100/70 leading-relaxed">
            We collaborate with leading global organizations, industrial pioneers, and deep-tech research 
            institutes to accelerate the deployment of scalable quantum architectures.
          </p>
        </div>

        {/* --- Gold Glassmorphism Logo Showcase Box --- */}
        <div className="bg-[#0a0904]/70 backdrop-blur-md border border-amber-900/30 p-10 sm:p-16 rounded-xl shadow-2xl relative overflow-hidden group">
          
          {/* Subtle decorative inner corner borders */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-500/20 rounded-tl-lg"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-500/20 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-500/20 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-500/20 rounded-br-lg"></div>

          {/* Logo Flex Matrix */}
          <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-16 gap-y-12">
            {partnersData.map((partner, index) => (
              <div 
                key={index} 
                className="transition-all duration-300 transform hover:scale-105 flex justify-center items-center group/logo"
                title={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-10 sm:h-12 w-auto object-contain filter brightness-0 invert opacity-40 group-hover/logo:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          
        </div>
        
      </div>
    </section>
  );
}