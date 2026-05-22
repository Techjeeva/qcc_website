// src/pages/Collaborations.jsx
import React from 'react';
import StatsGrid from '../components/StatsGrid'; // Assuming you save the above as a component
import MoUs from './MoUs';

export default function Collaborations() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Impact & Outcomes</h2>
          <p className="text-lg text-indigo-200">Quantifying our success in industry and research.</p>
        </div>

        {/* --- THE NUMBERS BOXES --- */}
        <StatsGrid />
        <MoUs /> {/* Include the MoUs section here, or you can choose to place it elsewhere based on your design preference */}
      </div>
    </section>
  );
}