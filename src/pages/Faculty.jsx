// src/pages/Faculty.jsx
import React from "react";

export default function Faculty() {
  const teamMembers = [
    {
      name: "Dr. Pushpalatha M",
      title: "Professor and Associate Chairperson",
      role: "Head",
      specialization: "Quantum Computing, Wireless Networks, Internet of Things and Data Analytics, Edge Computing",
      image: "./faculty/Pushpalatha.png", 
      email: "pushpalm@srmist.edu.in", 
    },
    {
      name: "Dr. Gayathri M",
      title: "Lab Coordinator & Associate Professor",
      role: "Coordinator",
      specialization: "Quantum Computing, Wireless Networks, Edge Computing",
      department: "Dept. of Computing Technologies",
      image: "./faculty/Gayathri.png", 
      email: "gayathrm2@srmist.edu.in",
    },
    {
      name: "Mr. D. Jeevanandam",
      title: "Lab Programmer",
      role: "Programmer",
      department: "Dept. of Computing Technologies",
      image: "./faculty/Jeevanandam.jpg", 
      email: "jeevanad@srmist.edu.in", 
    },
    {
      name: "Dr. Thilagavathy R",
      title: "Associate Professor",
      role: "Faculty",
      specialization: "Quantum Computing",
      image: "./faculty/Thilagavathy.png", 
      email: "thilagavathy.r@example.com", 
    },
    {
      name: "Dr. Raghavendra V",
      title: "Assistant Professor",
      role: "Faculty",
      specialization: "Quantum Algorithms",
      image: "./faculty/Raghavendra.png", 
      email: "raghavendra.v@example.com", 
    },
    {
      name: "Dr. Nalini S",
      title: "Assistant Professor",
      role: "Faculty",
      specialization: "Quantum Cryptography",
      image: "./faculty/Nalini.png", 
      email: "nalini.s@example.com", 
    },
    {
      name: "Dr. Manju A",
      title: "Assistant Professor",
      role: "Faculty",
      specialization: "Quantum Communication",
      image: "./faculty/Manju.png", 
      email: "manju.a@example.com", 
    },
  ];

  // Filtering logic
  const head = teamMembers.find((member) => member.role === "Head");
  const coordinator = teamMembers.find((member) => member.role === "Coordinator");
  const programmer = teamMembers.find((member) => member.role === "Programmer");
  const facultyStaff = teamMembers.filter(
    (member) => !["Head", "Coordinator", "Programmer"].includes(member.role)
  );

  // Reusable card component
  const MemberCard = ({ member, isLeadership = false }) => (
    <div
      className={`bg-[#0a0904]/70 backdrop-blur-md border border-amber-900/30 rounded-xl shadow-xl p-6 text-center transform transition-all duration-300 hover:scale-[1.03] hover:border-amber-500/40 hover:shadow-amber-500/5 h-full flex flex-col justify-between ${
        isLeadership ? "max-w-sm mx-auto" : ""
      }`}
    >
      <div>
        <div className="relative inline-block mb-5">
          <img
            src={member.image}
            alt={member.name}
            className="w-36 h-36 rounded-xl mx-auto object-cover border-4 border-amber-500/20 shadow-lg group-hover:border-amber-500/40 transition-colors"
          />
          {isLeadership && (
             <div className="absolute -top-2 -right-2 bg-amber-500 text-black text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow-md">
               {member.role}
             </div>
          )}
        </div>
        <h3 className="text-xl font-bold text-white mb-1 tracking-wide">{member.name}</h3>
        <p className="text-amber-400 text-sm font-bold mb-3 uppercase tracking-tight">
          {member.title}
        </p>
        <p className="text-amber-100/70 text-sm leading-relaxed mb-4">
          {member.specialization || member.department}
        </p>
      </div>
      {member.email && (
        <div className="border-t border-amber-900/20 pt-3 mt-2">
          <a
            href={`mailto:${member.email}`}
            className="text-amber-500/80 text-xs hover:text-amber-300 transition-colors break-all block font-mono"
          >
            {member.email}
          </a>
        </div>
      )}
    </div>
  );

  return (
    <section id="faculty" className="py-20 px-4 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-black mb-4 text-white uppercase tracking-tight">
            Our Research Team
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-amber-100/70 leading-relaxed">
            A diverse group of quantum computing experts dedicated to pioneering global research 
            and deep-tech education.
          </p>
        </div>

        {/* --- ROW 1: HEAD OF LAB --- */}
        {head && (
          <div className="mb-24">
            <h3 className="text-xl font-bold text-amber-400 mb-8 text-center uppercase tracking-widest drop-shadow-[0_0_8px_rgba(251,191,36,0.2)]">
              Head of the Laboratory
            </h3>
            <MemberCard member={head} isLeadership={true} />
          </div>
        )}

        {/* --- ROW 2: COORDINATOR --- */}
        {coordinator && (
          <div className="mb-24">
            <h3 className="text-xl font-bold text-amber-100/50 mb-8 text-center uppercase tracking-widest">
              Lab Coordinator
            </h3>
            <MemberCard member={coordinator} isLeadership={true} />
          </div>
        )}

        {/* --- ROW 3: FACULTY & STAFF GRID --- */}
        {facultyStaff.length > 0 && (
          <div className="mb-24">
            <h3 className="text-2xl font-bold text-white mb-12 text-center uppercase tracking-wide">
              Faculty & Research Staff
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {facultyStaff.map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* --- ROW 4: PROGRAMMER --- */}
        {programmer && (
          <div className="max-w-sm mx-auto pt-16 border-t border-amber-900/20">
            <h3 className="text-xl font-bold text-amber-100/40 mb-8 text-center uppercase tracking-widest">
              Technical Support
            </h3>
            <MemberCard member={programmer} isLeadership={false} />
          </div>
        )}

      </div>
    </section>
  );
}