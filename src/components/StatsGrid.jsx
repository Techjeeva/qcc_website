// src/components/StatsGrid.jsx
import React from 'react';

export default function StatsGrid() {
  const stats = [
    { label: "Active MoUs", value: "06+" },
    { label: "Internship Offers", value: "15+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Students Placed", value: "25+" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="bg-[#0a0904]/70 backdrop-blur-md border border-amber-900/30 p-6 rounded-xl shadow-xl text-center transform transition-all duration-300 hover:scale-[1.03] hover:border-amber-500/40 hover:shadow-amber-500/5"
        >
          {/* Glowing Luxury Gold Number */}
          <div className="text-4xl md:text-5xl font-black mb-2 text-amber-400 tracking-tight drop-shadow-[0_0_12px_rgba(245,158,11,0.25)]">
            {stat.value}
          </div>
          
          {/* Muted Metallic Label */}
          <div className="text-[10px] md:text-xs font-black uppercase tracking-widest text-amber-100/50 leading-tight">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}