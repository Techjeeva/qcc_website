// src/pages/Events.jsx
import React from 'react';

export default function Events() {
  // Chronologically balanced event data for May 2026
  const eventsData = [
    {
      title: "Advanced Workshop on Quantum Error Correction",
      date: "November 22, 2025",
      description:
        "A deep-dive workshop for graduate students and researchers focusing on the latest techniques to build fault-tolerant quantum systems.",
      status: "Past",
    },
    {
      title: "Quantum Hackathon 2026",
      date: "January 15-17, 2026",
      description:
        "Join us for our annual 48-hour hackathon. Form teams, solve challenging quantum problems, and win exciting prizes. Open to all students.",
      status: "Past",
    },
    {
      title: "Guest Lecture: Dr. A. S. Kumar, IBM Quantum",
      date: "September 5, 2025",
      description:
        "Dr. Kumar shared invaluable insights from his pioneering work at IBM's quantum research division.",
      status: "Past",
    },
    {
      title: "Quantum Bootcamp 2025 – Hands-on with Qiskit",
      date: "August 18-22, 2025",
      description:
        "An immersive week-long bootcamp where students learned to build and run quantum circuits using IBM's Qiskit framework.",
      status: "Past",
    },
    {
      title: "Student Innovation Challenge",
      date: "July 2025",
      description:
        "Students presented novel quantum solutions to real-world problems.",
      status: "Past",
    },
    {
      title: "Quantum Research Symposium 2025",
      date: "June 2025",
      description:
        "A collaborative event with IIT Madras, showcasing the latest research.",
      status: "Past",
    },
    {
      title: "International Conference on Post-Quantum Cryptography (ICPQC)",
      date: "August 12-14, 2026",
      description:
        "Bringing global cryptographic pioneers together at SRMIST to deliberate secure network models robust against quantum vulnerabilities.",
      status: "Upcoming",
    },
    {
      title: "Autumn Immersion: Hybrid Quantum-Classical AI Models",
      date: "October 05, 2026",
      description:
        "A practical exploratory session introducing undergraduate students to variational quantum eigensolvers and modern QNN optimization frameworks.",
      status: "Upcoming",
    }
  ];

  const upcomingEvents = eventsData.filter((e) => e.status === "Upcoming");
  const pastEvents = eventsData.filter((e) => e.status === "Past");

  return (
    <section id="events" className="py-20 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-black mb-4 text-white uppercase tracking-tight">
            Workshops & Events
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-amber-100/70 leading-relaxed">
            We host a variety of premium events to foster learning, collaboration, and
            high-impact innovation within the quantum computing community.
          </p>
        </div>

        {/* --- UPCOMING EVENTS SECTION --- */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-amber-400 mb-10 text-center uppercase tracking-widest drop-shadow-[0_0_10px_rgba(251,191,36,0.2)]">
            Upcoming Engagements
          </h3>
          
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-[#0a0904]/70 backdrop-blur-md border border-amber-900/30 rounded-xl shadow-xl overflow-hidden flex flex-col group hover:border-amber-500/40 hover:shadow-amber-500/5 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <div className="p-8 flex-grow">
                    <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
                      {event.date}
                    </p>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-200">
                      {event.title}
                    </h4>
                    <p className="text-amber-100/70 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  
                  {/* Card Action Footer */}
                  <div className="bg-[#0f0e08]/60 p-4 border-t border-amber-900/20 text-center">
                    <a
                      href="#"
                      className="text-amber-400 font-bold text-xs uppercase tracking-wider hover:text-amber-300 transition-colors flex items-center justify-center gap-1.5"
                    >
                      Learn More & Register 
                      <span className="text-sm">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-amber-100/40 italic">No upcoming events scheduled at this moment.</p>
          )}
        </div>

        {/* --- PAST EVENTS SECTION --- */}
        <div>
          <h3 className="text-2xl font-bold text-amber-100/50 mb-10 text-center uppercase tracking-widest">
            Archived Symposiums
          </h3>
          
          <div className="bg-[#0a0904]/70 backdrop-blur-md border border-amber-900/30 rounded-xl shadow-xl p-8 sm:p-10">
            {pastEvents.length > 0 ? (
              <ul className="divide-y divide-amber-900/20 space-y-6">
                {pastEvents.map((event, index) => (
                  <li
                    key={index}
                    className={`flex flex-col sm:flex-row items-start sm:items-center pb-6 ${
                      index !== 0 ? "pt-6" : ""
                    }`}
                  >
                    <p className="font-bold text-xs text-amber-500/60 uppercase tracking-wider w-full sm:w-48 mb-2 sm:mb-0 flex-shrink-0">
                      {event.date}
                    </p>
                    <div className="flex-grow">
                      <h5 className="text-lg font-bold text-amber-100 group-hover:text-amber-400 transition-colors">
                        {event.title}
                      </h5>
                      <p className="text-amber-100/50 text-sm mt-1 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-amber-100/40 italic">No historical records available.</p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}