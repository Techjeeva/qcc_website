// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

// --- Sub-components included on the Home page ---
import Achievements from "./Achievements";
import Equipments from "./Equipments";
import Subjects from "./Subjects";
import IndustrialVisits from "./IndustrialVisits";
import Contact from "./Contact";
import Collaborations from "./Collaborations";
import StatsGrid from "../components/StatsGrid"; // Re-verified import mapping
// --- End Imports ---

export default function Home() {
  return (
    // Outer page wrapper inheriting the global background context uniformly
    <div className="w-full min-h-screen relative overflow-x-hidden text-white select-none">
      
      {/* --- SEAMLESS HERO ENGINE --- */}
      <section className="w-full min-h-screen flex items-center justify-center text-center p-4 relative z-20 pt-36 pb-12">
        <div className="max-w-4xl px-4 flex flex-col items-center">
          
          {/* Top Tag Component */}
          <span className="uppercase text-amber-400 text-xs font-black mb-5 block tracking-[0.3em] drop-shadow-[0_0_12px_rgba(251,191,36,0.4)]">
            Center of Excellence
          </span>
          
          {/* Main Integrated Heading */}
          <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl mb-6 uppercase tracking-tight max-w-4xl leading-[1.15]">
            Welcome to the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-200 to-amber-400 drop-shadow-[0_2px_15px_rgba(251,191,36,0.3)]">
              Center for quantum communication and computing
            </span> <br />
            <span className="text-xs sm:text-sm lg:text-base tracking-[0.25em] block mt-4 text-amber-100/40 font-mono uppercase">
             SRMIST-KTR
            </span>
          </h1>
          
          {/* Accent Line Separator */}
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-12"></div>

          {/* Core Lab Description (Fixed missing word 'Center') */}
          <p className="text-amber-100/70 text-base sm:text-lg max-w-2xl leading-relaxed font-medium mb-12">
            The Center for Quantum Communication and Computing at SRMIST serves as a world-class hub 
            for investigating next-generation computational paradigms, localized algorithmic 
            frameworks, and secure cryptographic communication channels.
          </p>
  
          {/* --- Pure Metallic Solid CTA Button --- */}
          <Link
            to="/about" 
            className="text-black bg-amber-500 uppercase py-4 px-12 rounded-full font-black tracking-widest text-xs hover:bg-amber-400 hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Explore Our Research
          </Link>
          
        </div>
      </section>
      {/* --- End Hero Section --- */}


      {/* --- CONTINUOUS UNBROKEN PAGE LAYERS --- */}
      {/* Every section wrapper here uses pure transparency to preserve the parent element's background */}
      <div className="relative z-20 space-y-0">
        
        {/* Collaborations Segment Plate */}
        <section id="collaborations" className="border-t border-amber-900/20 py-16 bg-transparent">
          <Collaborations />
        </section>
        
        {/* Achievements Segment Plate 
        <section id="achievements" className="border-t border-amber-900/10 py-16 bg-transparent">
          <Achievements />
        </section>
        */}
        {/* Equipment Inventory Segment Plate */}
        <section id="equipments" className="border-t border-amber-900/10 py-16 bg-transparent">
          <Equipments />
        </section>

        {/* Curriculum & Research Segment Plate */}
        <section id="subjects" className="border-t border-amber-900/10 py-16 bg-transparent">
          <Subjects />
        </section>
        
        {/* Industrial Visits Tracker Segment Plate 
        <section id="industrial-visits" className="border-t border-amber-900/10 py-16 bg-transparent">
          <IndustrialVisits />
        </section>
        */}
        {/* Contact Communications Form Grid */}
        <section id="contact" className="border-t border-amber-900/10 pt-16 pb-24 bg-transparent">
          <Contact />
        </section>
        
      </div>
      {/* --- End Continuous Layers --- */}
    </div>
  );
}