// src/pages/Achievements.jsx
import React from 'react';

export default function Achievements() {
  const studentAchievements = [
    {
      title: "Best Project Award – SRM Research Day 2025",
      description:
        "Our team's project on Quantum Error Correction won the top prize for its innovative approach and significant potential.",
      image: "/achievements/srm_research_day.jpg", 
      imageAlt: "Students receiving best project award at SRM Research Day",
    },
    {
      title: "Winner – HackQuantum 2024",
      description:
        "A team of our students secured first place in the national-level HackQuantum competition, organized in late 2024.",
      image: "/achievements/hackquantum_winners.jpg", 
      imageAlt: "Students celebrating winning HackQuantum competition",
    },
    {
      title: "Finalist – IBM Quantum Challenge",
      description:
        "Recognized as one of the top global teams for solving complex quantum problems using IBM's quantum systems.",
      image: "/achievements/ibm_quantum_challenge.jpg", 
      imageAlt: "IBM Quantum Challenge logo with quantum circuit",
    },
    {
      title: "Published 5+ IEEE & Springer Papers",
      description:
        "Our students have co-authored and published significant research in quantum algorithms and security in leading peer-reviewed journals.",
      image: "/achievements/publication_papers.jpg", 
      imageAlt: "Stack of research papers with a quill pen",
    },
  ];

  const facultyAchievements = [
    {
      title: "Outstanding Researcher Award 2025",
      description:
        "Dr. [Faculty Name] was awarded for their significant contributions to Quantum Machine Learning by the National Science Council.",
      image: "/achievements/outstanding_researcher.jpg", 
      imageAlt: "Gold trophy for outstanding researcher award",
    },
    {
      title: "Research Grant from DST SERB",
      description:
        "Received a substantial grant from the Science and Engineering Research Board to fund pioneering research into quantum sensing technologies.",
      image: "/achievements/dst_serb_grant.jpg", 
      imageAlt: "Official grant document with seals",
    },
    {
      title: "Keynote Speaker at Quantum India Conference",
      description:
        "Invited to deliver the keynote address on the future of quantum computing in India, sharing insights with industry leaders and policymakers.",
      image: "/achievements/keynote_speaker.jpg", 
      imageAlt: "Speaker on stage at a large conference",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-black mb-4 text-white uppercase tracking-tight">
            Achievements & Recognitions
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-amber-100/70 leading-relaxed">
            We celebrate the outstanding accomplishments of our students and
            faculty, who are making significant contributions to the field of
            quantum science.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Column 1: Student Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-8 flex items-center border-b border-amber-900/40 pb-4 uppercase tracking-wide">
              <span className="text-2xl mr-3 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">🏆</span>
              Student Accolades
            </h3>
            
            <div className="space-y-8">
              {studentAchievements.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-[#0a0904]/70 backdrop-blur-md border border-amber-900/30 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:border-amber-500/40 hover:shadow-amber-500/5 group"
                >
                  {item.image && (
                    <div className="overflow-hidden border-b border-amber-900/20">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="w-full h-48 object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h4 className="font-bold text-xl text-white mb-2 group-hover:text-amber-400 transition-colors duration-200">
                      {item.title}
                    </h4>
                    <p className="text-amber-100/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Faculty Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-amber-500 mb-8 flex items-center border-b border-amber-900/40 pb-4 uppercase tracking-wide">
              <span className="text-2xl mr-3 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">⭐</span>
              Faculty Recognitions
            </h3>
            
            <div className="space-y-8">
              {facultyAchievements.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-[#0a0904]/70 backdrop-blur-md border border-amber-900/30 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:border-amber-500/40 hover:shadow-amber-500/5 group"
                >
                  {item.image && (
                    <div className="overflow-hidden border-b border-amber-900/20">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="w-full h-48 object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h4 className="font-bold text-xl text-white mb-2 group-hover:text-amber-400 transition-colors duration-200">
                      {item.title}
                    </h4>
                    <p className="text-amber-100/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}