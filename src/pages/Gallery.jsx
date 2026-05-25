// src/pages/Gallery.jsx
import React, { useState, useEffect, useCallback } from 'react';

export default function Gallery() {
  // Quantitatively structured collection: 7 Infrastructure, 5 Student Life, 8 Workshops, 7 Achievements
  const imageData = [
    // --- LAB INFRASTRUCTURE (7 items) ---
    {
      src: "/gallery/Lab Photos/qcclab.jpg",
      alt: "Wide shot of the quantum computing lab workstations",
      caption: "Our State-of-the-Art Research Facility",
      category: "Lab Infrastructure",
    },
    {
      src: "/gallery/Lab Photos/qcclab1.jpg",
      alt: "Close-up of the Quantum Eraser development kit setup",
      caption: "Quantum Eraser Demonstration Array",
      category: "Lab Infrastructure",
    },
    {
      src: "/gallery/Lab Photos/qcclab2.jpg",
      alt: "Another view of the lab's dedicated computation racks",
      caption: "Dedicated High-Performance Workstations",
      category: "Lab Infrastructure",
    },
    {
      src: "/gallery/Lab Photos/qcclab3.jpg",
      alt: "Laser alignment on topological quantum optics testbed",
      caption: "Topological Phase Alignment Bench",
      category: "Lab Infrastructure",
    },
    {
      src: "/gallery/Lab Photos/qcclab4.jpg",
      alt: "Cryogenic vacuum cooling pump control instrumentation",
      caption: "Superconductive Temperature Controller",
      category: "Lab Infrastructure",
    },
    {
      src: "/gallery/Lab Photos/qcclab5.jpg",
      alt: "Close look at localized quantum key distribution system modules",
      caption: "QKD Peripheral Distribution Node",
      category: "Lab Infrastructure",
    },
    {
      src: "/gallery/Lab Photos/qcclab6.jpg",
      alt: "Classical-Quantum hybrid processing server arrays",
      caption: "Co-Processing Simulation Mainframe",
      category: "Lab Infrastructure",
    },
    

    // --- STUDENT LIFE (5 items) ---
    {
      src: "/gallery/student-collaboration-1.jpg",
      alt: "Students collaborating on a quantum circuit block layout",
      caption: "Collaborative Research in Action",
      category: "Student Life",
    },
    {
      src: "/gallery/student-presentation-1.jpg",
      alt: "A student presenting their algorithmic research findings",
      caption: "Student Research Symposium Presentation",
      category: "Student Life",
    },
    {
      src: "/gallery/peer-review-1.jpg",
      alt: "Scholars analyzing quantum circuit compilation errors on monitor",
      caption: "Circuit Optimization Peer Analysis",
      category: "Student Life",
    },
    {
      src: "/gallery/lab-discussion-1.jpg",
      alt: "Group brainstorm around blackboard regarding quantum mechanics",
      caption: "Weekly Algorithmic Framework Ideation",
      category: "Student Life",
    },
    {
      src: "/gallery/breakroom-talk-1.jpg",
      alt: "Informal post-graduate technical discussion inside the research center",
      caption: "Interdisciplinary Scholar Networking",
      category: "Student Life",
    },

    // --- EVENTS & WORKSHOPS (8 items) ---
    {
      src: "/gallery/event-workshop-1.jpg",
      alt: "Students participating in a hands-on Qiskit workshop",
      caption: "Hands-on Qiskit Software Boot Camp",
      category: "Events & Workshops",
    },
    {
      src: "/gallery/guest-lecture-1.jpg",
      alt: "Guest lecture presentation from an international industry expert",
      caption: "Industry Expert General Guest Lecture",
      category: "Events & Workshops",
    },
    {
      src: "/gallery/conclave-panel-1.jpg",
      alt: "Panelists speaking at the Quantum Applications Conclave",
      caption: "Two-Day Conclave Research Panel",
      category: "Events & Workshops",
    },
    {
      src: "/gallery/cryptography-seminar-1.jpg",
      alt: "Audience watching technical presentation on secure quantum keys",
      caption: "National Seminar on Quantum Cryptography",
      category: "Events & Workshops",
    },
    {
      src: "/gallery/prof-amlan-talk-1.jpg",
      alt: "Professor Amlan delivering core lecture to vertical faculty members",
      caption: "Prof. Amlan Core Technical Lecture Series",
      category: "Events & Workshops",
    },
    {
      src: "/gallery/ieee-symposium-1.jpg",
      alt: "Group photograph from Computer Society India Symposium event",
      caption: "CSI / IEEE Computer Society Symposium",
      category: "Events & Workshops",
    },
    {
      src: "/gallery/hackathon-kickoff-1.jpg",
      alt: "Organizers addressing students at the opening of Quantathon",
      caption: "Quantathon Main Arena Kickoff Session",
      category: "Events & Workshops",
    },
    {
      src: "/gallery/virtual-webinar-1.jpg",
      alt: "Live streaming session with global network security engineers",
      caption: "International Post-Quantum Cryptography Sync",
      category: "Events & Workshops",
    },

    // --- ACHIEVEMENTS (7 items) ---
    {
      src: "/gallery/award-ceremony-1.jpg",
      alt: "Students receiving an award shield at a tech competition",
      caption: "Quantathon 1.0 Championship Winners",
      category: "Achievements",
    },
    {
      src: "/gallery/award-ceremony-2.jpg",
      alt: "Team holding cash prize cheque at Quantathon 2.0 finale",
      caption: "Quantathon 2.0 Grand Finale Winners",
      category: "Achievements",
    },
    {
      src: "/gallery/patent-filing-1.jpg",
      alt: "Certificate displaying a breakthrough research publication recognition",
      caption: "High-Impact Cryptographic Patent Filing",
      category: "Achievements",
    },
    {
      src: "/gallery/grant-approval-1.jpg",
      alt: "Faculty members posing with institutional funding grant notification",
      caption: "National Research Funding Endowment Award",
      category: "Achievements",
    },
    {
      src: "/gallery/ieee-best-paper-1.jpg",
      alt: "Researcher accepting best paper presentation certificate at summit",
      caption: "IEEE Best Research Paper Distinction",
      category: "Achievements",
    },
    {
      src: "/gallery/global-hack-win-1.jpg",
      alt: "SRMIST students holding international hackathon trophies",
      caption: "Global Quantum Hackathon Laurels",
      category: "Achievements",
    },
    {
      src: "/gallery/quantathon-3-winners.jpg",
      alt: "Winning team celebrating at Quantathon 3.0 award stage",
      caption: "Quantathon 3.0 Core Category Champions",
      category: "Achievements",
    }
  ];

  const categories = ['All', ...new Set(imageData.map(img => img.category))];
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const filteredImages = activeCategory === 'All'
    ? imageData
    : imageData.filter(img => img.category === activeCategory);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImageIndex(0);
  };

  const navigateLightbox = useCallback((direction) => {
    setSelectedImageIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) {
        return filteredImages.length - 1;
      } else if (newIndex >= filteredImages.length) {
        return 0;
      }
      return newIndex;
    });
  }, [filteredImages.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!lightboxOpen) return;

      if (event.key === 'ArrowLeft') {
        navigateLightbox(-1);
      } else if (event.key === 'ArrowRight') {
        navigateLightbox(1);
      } else if (event.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, navigateLightbox]);

  const currentLightboxImage = filteredImages[selectedImageIndex];

  return (
    <>
      <section id="gallery" className="py-20 px-4 min-h-screen relative z-20">
        <div className="container mx-auto max-w-7xl">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-4 text-white uppercase tracking-tight">
              Moments from Our Lab
            </h2>
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6"></div>
            <p className="text-base text-amber-100/70 leading-relaxed">
              Step inside our world. A premium repository showcasing our laboratory's 
              infrastructure, student-led breakthroughs, and active technical workshops.
            </p>
          </div>

          {/* --- Gold Filter Buttons --- */}
          <div className="flex justify-center flex-wrap gap-3 mb-16">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)] border border-amber-400' 
                    : 'bg-[#0a0904]/50 text-amber-100/70 hover:bg-amber-950/30 hover:text-amber-400 border border-amber-900/30' 
                }`}
              >
                {category === 'All' ? '// Show All' : category}
              </button>
            ))}
          </div>

          {/* --- Premium Image Grid --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-[#0a0904]/40 border border-amber-900/30 shadow-xl transition-all duration-300 hover:border-amber-500/40 hover:shadow-amber-500/5 h-64" 
                onClick={() => openLightbox(index)}
              >
                <div className="w-full h-full bg-black/40">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 brightness-90 contrast-[1.02]"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%2334230b' stroke-width='1'><rect width='22' height='22' x='1' y='1' rx='2'/><path d='m22 13-3.296-3.296a1 1 0 0 0-1.408 0L13.5 13.5m0 0-3.296-3.296a1 1 0 0 0-1.408 0L4 14'/><circle cx='8' cy='8' r='1'/></svg>";
                    }}
                  />
                </div>
                {/* Gold Highlight Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050402]/95 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex items-end">
                  <div className="p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 w-full">
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 block mb-1 drop-shadow-[0_0_5px_rgba(251,191,36,0.5)] font-mono">
                      // {image.category}
                    </span>
                    <p className="text-white font-bold text-base leading-tight uppercase tracking-wide">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Gold & Black Lightbox Modal --- */}
      {lightboxOpen && currentLightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 transition-all"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#0d0c07] border border-amber-500/30 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden" 
            onClick={e => e.stopPropagation()}
          >
            {/* Image Viewer Wrapper */}
            <div className="bg-black/40 flex items-center justify-center max-h-[70vh]">
              <img
                src={currentLightboxImage.src}
                alt={currentLightboxImage.alt}
                className="w-auto h-auto max-w-full max-h-[70vh] object-contain p-2" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%2334230b' stroke-width='1'><rect width='22' height='22' x='1' y='1' rx='2'/><path d='m22 13-3.296-3.296a1 1 0 0 0-1.408 0L13.5 13.5m0 0-3.296-3.296a1 1 0 0 0-1.408 0L4 14'/><circle cx='8' cy='8' r='1'/></svg>";
                }}
              />
            </div>
            
            {/* Context Meta Block */}
            <div className="p-5 bg-[#0a0904] border-t border-amber-900/30 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-1 font-mono">
                // {currentLightboxImage.category}
              </span>
              <h4 className="text-lg font-bold text-amber-100 uppercase tracking-wide">
                {currentLightboxImage.caption}
              </h4>
            </div>

            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-amber-500 text-black font-black rounded-full h-9 w-9 flex items-center justify-center shadow-lg hover:bg-amber-400 transition-colors z-10 font-mono text-sm"
              aria-label="Close image view"
            >
              ✕
            </button>
            
            {/* Navigation Arrows */}
            <button
              onClick={() => navigateLightbox(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 border border-amber-900/30 text-amber-400 p-2.5 rounded-full hover:bg-amber-500 hover:text-black transition-all hidden sm:block shadow-xl"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            
            <button
              onClick={() => navigateLightbox(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 border border-amber-900/30 text-amber-400 p-2.5 rounded-full hover:bg-amber-500 hover:text-black transition-all hidden sm:block shadow-xl"
              aria-label="Next image"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}