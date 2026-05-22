// src/pages/Gallery.jsx
import React, { useState, useEffect, useCallback } from 'react';

export default function Gallery() {
  const imageData = [
    {
      src: "./gallery/lab-interior-1.jpg",
      alt: "Wide shot of the quantum computing lab",
      caption: "Our State-of-the-Art Facility",
      category: "Lab Infrastructure",
    },
    {
      src: "./gallery/event-workshop-1.jpg",
      alt: "Students participating in a Qiskit workshop",
      caption: "Hands-on Qiskit Workshop",
      category: "Events & Workshops",
    },
    {
      src: "./gallery/student-collaboration-1.jpg",
      alt: "Students collaborating on a project",
      caption: "Collaborative Research in Action",
      category: "Student Life",
    },
    {
      src: "./gallery/equipment-close-up-1.jpg",
      alt: "Close-up of the Quantum Eraser Kit",
      caption: "Quantum Eraser Demonstration",
      category: "Lab Infrastructure",
    },
    {
      src: "./gallery/guest-lecture-1.jpg",
      alt: "Guest lecture from an industry expert",
      caption: "Industry Expert Guest Lecture",
      category: "Events & Workshops",
    },
    {
      src: "./gallery/award-ceremony-1.jpg",
      alt: "Students receiving an award at a competition",
      caption: "HackQuantum 2024 Winners",
      category: "Achievements",
    },
    {
      src: "./gallery/lab-interior-2.jpg",
      alt: "Another view of the lab's workstations",
      caption: "Dedicated Workstations",
      category: "Lab Infrastructure",
    },
    {
      src: "./gallery/student-presentation-1.jpg",
      alt: "A student presenting their research findings",
      caption: "Student Research Symposium",
      category: "Student Life",
    },
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

  // Memoize navigation to prevent infinite re-registration of keyboard events
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
      <section id="gallery" className="py-20 px-4 min-h-screen">
        <div className="container mx-auto max-w-7xl">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-4 text-white uppercase tracking-tight">
              Moments from Our Lab
            </h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-amber-100/70 leading-relaxed">
              Step inside our world. A collection of photos showcasing our lab's
              infrastructure, vibrant events, and the brilliant minds at work.
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
                {category}
              </button>
            ))}
          </div>

          {/* --- Premium Image Grid --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-[#0a0904]/40 border border-amber-900/30 shadow-xl transition-all duration-300 hover:border-amber-500/40 hover:shadow-amber-500/5" 
                onClick={() => openLightbox(index)}
              >
                <div className="overflow-hidden h-64 w-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Gold Highlight Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300 flex items-end">
                  <div className="p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 w-full">
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 block mb-1 drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]">
                      {image.category}
                    </span>
                    <p className="text-white font-bold text-lg leading-tight">
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
            className="relative max-w-4xl w-full bg-[#0d0c07] border border-amber-500/30 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden animate-fadeIn" 
            onClick={e => e.stopPropagation()}
          >
            {/* Image Viewer Wrapper */}
            <div className="bg-black/40 flex items-center justify-center max-h-[75vh]">
              <img
                src={currentLightboxImage.src}
                alt={currentLightboxImage.alt}
                className="w-auto h-auto max-w-full max-h-[75vh] object-contain" 
              />
            </div>
            
            {/* Context Meta Block */}
            <div className="p-5 bg-[#0a0904] border-t border-amber-900/30 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-1">
                {currentLightboxImage.category}
              </span>
              <h4 className="text-xl font-bold text-amber-100">
                {currentLightboxImage.caption}
              </h4>
            </div>

            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-amber-500 text-black font-bold rounded-full h-9 w-9 flex items-center justify-center shadow-lg hover:bg-amber-400 transition-colors z-10"
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