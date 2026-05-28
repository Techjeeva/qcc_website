// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

// --- Integrated Component Grid Sections ---
import Collaborations from "./Collaborations";
import About from "./About";
import QuantumClub from "./QuantumClub";
import Subjects from "./Subjects";
import Equipments from "./Equipments";
import Projects from "./Projects";
import MoUs from "./MoUs";
import IndustrialVisits from "./IndustrialVisits";
import Gallery from "./Gallery";
import Achievements from "./Achievements";
import Events from "./Events";
import Faculty from "./Faculty";
import Contact from "./Contact";
import StatsGrid from "../components/StatsGrid"; 
// --- End Imports ---

export default function Home() {
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden text-white select-none">
      
      {/* --- SEAMLESS HERO ENGINE --- */}
      <section className="w-full min-h-screen flex items-center justify-center text-center p-4 relative z-20 pt-36 pb-12">
        <div className="max-w-4xl px-4 flex flex-col items-center">
          
          <span className="uppercase text-amber-400 text-xs font-black mb-5 block tracking-[0.3em] drop-shadow-[0_0_12px_rgba(251,191,36,0.4)]">
            Center of Excellence
          </span>
          
          <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl mb-6 uppercase tracking-tight max-w-4xl leading-[1.15]">
            Welcome to the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-200 to-amber-400 drop-shadow-[0_2px_15px_rgba(251,191,36,0.3)]">
              Center for quantum communication and computing
            </span> <br />
            <span className="text-xs sm:text-sm lg:text-base tracking-[0.25em] block mt-4 text-amber-100/40 font-mono uppercase">
             SRMIST-KTR
            </span>
          </h1>
          
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-12"></div>

          <p className="text-amber-100/70 text-base sm:text-lg max-w-2xl leading-relaxed font-medium mb-12">
            The Center for Quantum Communication and Computing at SRMIST serves as a world-class hub 
            for investigating next-generation computational paradigms, localized algorithmic 
            frameworks, and secure cryptographic communication channels.
          </p>
  
          <Link
            to="/about" 
            className="text-black bg-amber-500 uppercase py-4 px-12 rounded-full font-black tracking-widest text-xs hover:bg-amber-400 hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Explore Our Research
          </Link>
          
        </div>
      </section>

      {/* --- CONTINUOUS UNBROKEN PAGE LAYERS --- */}
      <div className="relative z-20 space-y-0">
        
        {/* Stats Grid Matrix */}
        {StatsGrid && (
          <section className="border-t border-amber-900/10 py-12 bg-transparent">
            <StatsGrid />
          </section>
        )}

        {/* Collaborations Section */}
        <section id="collaborations" className="border-t border-amber-900/20 py-16 bg-transparent">
          <Collaborations />
        </section>

        {/* About Overview Profile */}
        <section id="about" className="border-t border-amber-900/10 py-16 bg-transparent">
          <About />
        </section>

        {/* Quantum Club Integration */}
        <section id="quantumclub" className="border-t border-amber-900/10 py-16 bg-transparent">
          <QuantumClub />
        </section>

        {/* Curriculum Subjects Module */}
        <section id="subjects" className="border-t border-amber-900/10 py-16 bg-transparent">
          <Subjects />
        </section>

        {/* Lab Equipment Inventory */}
        <section id="equipments" className="border-t border-amber-900/10 py-16 bg-transparent">
          <Equipments />
        </section>

        {/* Active Research Projects */}
        <section id="projects" className="border-t border-amber-900/10 py-16 bg-transparent">
          <Projects />
        </section>

        {/* Memorandums of Understanding (MoUs) */}
        <section id="mous" className="border-t border-amber-900/10 py-16 bg-transparent">
          <MoUs />
        </section>

        {/* Industrial Visits Tracker */}
        <section id="industrial-visits" className="border-t border-amber-900/10 py-16 bg-transparent">
          <IndustrialVisits />
        </section>

        {/* Media Registry Gallery */}
        <section id="gallery" className="border-t border-amber-900/10 py-16 bg-transparent">
          <Gallery />
        </section>

        {/* Achievements Registry */}
        <section id="achievements" className="border-t border-amber-900/10 py-16 bg-transparent">
          <Achievements />
        </section>

        {/* Workshops & Scheduled Events */}
        <section id="events" className="border-t border-amber-900/10 py-16 bg-transparent">
          <Events />
        </section>

        {/* Faculty Executive Core */}
        <section id="faculty" className="border-t border-amber-900/10 py-16 bg-transparent">
          <Faculty />
        </section>
        
        {/* Contact Communications Grid */}
        <section id="contact" className="border-t border-amber-900/10 pt-16 pb-24 bg-transparent">
          <Contact />
        </section>
        
      </div>
    </div>
  );
}