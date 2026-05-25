// src/pages/Events.jsx
import React from 'react';

export default function Events() {
  // Real-world historical milestones (Upcoming arrays intentionally cleared)
  const eventsData = [
    {
      title: "Quantathon 1.0",
      date: "August 18-19, 2023",
      description: "The inaugural 24-hour quantum engineering hackathon driving introductory algorithmic models and circuit design implementations among student cohorts.",
      status: "Past",
    },
    {
      title: "Basics of Quantum Computing & CSI/IEEE Symposium Lectures",
      date: "July 29 - August 28, 2024",
      description: "Prof. Amlan visited the SRMIST-KTR campus to deliver a keynote at the Computer Society India Symposium 2024 (CSIS) hosted by CTech & IEEE. He conducted intensive 8-hour core runtime training sessions for technical vertical faculty and initiated specialized collaborative research tracks.",
      status: "Past",
    },
    {
      title: "Quantathon 2.0",
      date: "October 14-18, 2024",
      description: "Our secondary advanced-tier multi-day hackathon sprint targeting deep localized quantum processing loops, quantum machine learning variants, and optimization frameworks.",
      status: "Past",
    },
    {
      title: "National Level Seminar on Quantum Cryptography and Secure Communication",
      date: "February 26-27, 2025",
      description: "An intensive national gathering addressing post-quantum cryptographic primitives, sub-atomic security distribution, and infrastructure protocols robust against quantum computing decryption frameworks.",
      status: "Past",
    },
    {
      title: "Two Day Conclave on Quantum Computing and its Applications",
      date: "February 27-28, 2025",
      description: "A comprehensive academic and industry-aligned conclave investigating real-world computational integrations, quantum hardware state management, and emerging vertical applications.",
      status: "Past",
    },
    {
      title: "Quantathon 3.0",
      date: "February 9, 2026",
      description: "The third iteration of our signature high-intensity quantum hackathon platform. Teams compete to compile optimal quantum circuits, run algorithmic error-mitigation bakes, and showcase functional deep-tech models.",
      status: "Past",
    }
  ];

  // Dynamic filter channels
  const upcomingEvents = eventsData.filter((e) => e.status === "Upcoming");
  
  // Sort past events from newest to oldest for presentation order
  const pastEvents = eventsData.filter((e) => e.status === "Past").reverse();

  return (
    <section id="events" className="py-20 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-black mb-4 text-white uppercase tracking-tight">
            Workshops & Events
          </h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6"></div>
          <p className="text-base text-amber-100/70 leading-relaxed">
            Tracking active engagements, legacy symposiums, and breakthrough research initiatives organized by the Centre for Quantum Communication and Computing at SRMIST.
          </p>
        </div>

        {/* --- UPCOMING ENGAGEMENTS (Now displays the empty fallback view safely) --- */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-amber-400 mb-10 text-center uppercase tracking-widest drop-shadow-[0_0_10px_rgba(251,191,36,0.2)]">
            // UPCOMING ENGAGEMENTS
          </h3>
          
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-[#0a0904]/70 backdrop-blur-md border border-amber-900/30 rounded-xl shadow-xl overflow-hidden flex flex-col group hover:border-amber-500/40 hover:shadow-amber-500/5 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <div className="p-8 flex-grow">
                    <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-2 font-mono">
                      {event.date}
                    </p>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-200 uppercase tracking-tight">
                      {event.title}
                    </h4>
                    <p className="text-amber-100/70 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  <div className="bg-[#0f0e08]/60 p-4 border-t border-amber-900/20 text-center">
                    <a
                      href="#"
                      className="text-amber-400 font-bold text-xs uppercase tracking-wider hover:text-amber-300 transition-colors flex items-center justify-center gap-1.5 font-mono"
                    >
                      Initialize Registration 
                      <span className="text-sm">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Premium Gold/Obsidian Fallback Node
            <div className="bg-[#0a0904]/40 backdrop-blur-md border border-amber-500/5 rounded-xl p-12 text-center max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amber-500/20"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-500/20"></div>
              <p className="text-amber-100/40 italic font-mono text-sm tracking-wide">
                // NO ACTIVE PENDING TRACKS SCHEDULED AT CURRENT TIME INTERVAL
              </p>
            </div>
          )}
        </div>

        {/* --- ARCHIVED SYMPOSIUMS --- */}
        <div>
          <h3 className="text-2xl font-bold text-amber-100/40 mb-10 text-center uppercase tracking-widest">
            // ARCHIVED HISTORICAL REGISTRY
          </h3>
          
          <div className="bg-[#0a0904]/40 backdrop-blur-md border border-amber-500/10 rounded-xl shadow-xl p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amber-500/30"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-500/30"></div>

            {pastEvents.length > 0 ? (
              <div className="divide-y divide-amber-900/20 space-y-6">
                {pastEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-start md:items-start gap-4 md:gap-8 pb-6 ${
                      index !== 0 ? "pt-6" : ""
                    }`}
                  >
                    <p className="font-bold text-xs text-amber-500 font-mono uppercase tracking-wider w-full md:w-56 mt-1 flex-shrink-0">
                      {event.date}
                    </p>
                    <div className="flex-grow">
                      <h5 className="text-base font-bold text-white uppercase tracking-wide">
                        {event.title}
                      </h5>
                      <p className="text-amber-100/60 text-sm mt-2 leading-relaxed font-medium">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-amber-100/40 italic font-mono text-xs">// EMPTY REGISTRY LAYER</p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}