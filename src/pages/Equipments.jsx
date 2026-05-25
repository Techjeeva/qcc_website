// src/pages/Equipments.jsx
import React from 'react';

export default function Equipments() {
  const availableEquipment = [
    {
      name: "Quantum Cryptography Analogy Kit",
      image: "./equipments/qcr.png",
      description:
        "A hands-on demonstration kit designed to teach the fundamental principles of Quantum Key Distribution (QKD) in a clear and accessible way.",
      features: [
        "Simulates BB84 protocol using polarized light configurations",
        "Visualizes real-time photon polarization states over optical baselines",
        "Includes independent sender (Alice), receiver (Bob), and eavesdropper (Eve) modules",
      ],
    },
    {
      name: "Quantum Eraser Demonstration Kit",
      image: "./equipments/qek.png",
      description:
        "Explore the fascinating concepts of quantum superposition and the measurement problem with this interactive kit that demonstrates the quantum eraser phenomenon.",
      features: [
        "Demonstrates wave-particle duality via Young's double-slit interference overrides",
        "Explores the structural role of 'which-path' information erasure mechanics",
        "Ideal for advanced physics demonstrations and foundational wave mechanics",
      ],
    },
    {
      name: "Quantum Random Number Generator (QRNG) Kit",
      image: "./equipments/qrng.png",
      description:
        "An advanced Quantum Random Number Generator (QRNG) subsystem leveraging vacuum state fluctuations and single-photon split detection paths to harvest true quantum entropy.",
      features: [
        "Generates true, non-deterministic random bitstreams at up to 100 Mbps rates",
        "Utilizes beam-splitter shot noise extraction and state-of-the-art post-processing modules",
        "Features integrated NIST SP 800-22 real-time randomness verification software",
      ],
    },
    {
      name: "Armos QKD Research Platform",
      image: "./equipments/qkd.png",
      description:
        "A continuous-variable and discrete-variable telecom-band Quantum Key Distribution system engineered to validate phase-encoded security schemas across scalable network grids.",
      features: [
        "Implements full polarization-entangled state and decoy-state BB84 protocols",
        "Operating natively at telecom wavelength metrics (1550nm) for low attenuation loss",
        "Active polarization drift auto-compensation tracking for 24/7 standalone execution",
      ],
    },
    {
      name: "Trops(QRNG)",
      image: "./equipments/tropos.png",
      description:
        "A high-precision optical prototyping bench focused on mapping spatial light modulations, orbital angular momentum (OAM), and topologically protected quantum states.",
      features: [
        "Features micro-programmable liquid-crystal-on-silicon (LCoS) Spatial Light Modulators",
        "Generates, modulates, and diagnostics higher-order optical vortices and knot arrays",
        "Robust cross-talk isolation platform optimized for quantum spatial state multiplexing",
      ],
    },
  ];

  const comingSoonEquipment = {
    name: "New Equipment Coming Soon",
    description:
      "We are actively acquiring new state-of-the-art cryostats, single-photon detector arrays, and diamond NV-center platforms for advanced research in quantum sensing and multi-node simulation. Check back soon for updates!",
  };

  return (
    <section id="equipments" className="py-20 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-black mb-4 text-white uppercase tracking-tight">
            Our Lab Equipment
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-amber-100/70 leading-relaxed">
            From specialized educational kits to advanced research instrumentation platforms, our laboratory is 
            equipped to make complex quantum mechanics tangible and drive scalable deep-tech innovation.
          </p>
        </div>

        {/* Alternating Layout for Available Equipment */}
        <div className="space-y-16">
          {availableEquipment.map((equipment, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#0a0904]/70 backdrop-blur-md border border-amber-900/30 p-8 sm:p-10 rounded-xl shadow-2xl transition-all duration-300 hover:border-amber-500/40 hover:shadow-amber-500/5 group"
            >
              {/* Image Column */}
              <div
                className={`order-1 ${
                  index % 2 !== 0 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="overflow-hidden rounded-lg border border-amber-900/20 shadow-inner bg-black/40">
                  <img
                    src={equipment.image}
                    alt={equipment.name}
                    className="w-full h-auto max-h-80 object-cover object-center transition-transform duration-500 group-hover:scale-102"
                  />
                </div>
              </div>

              {/* Text Content Column */}
              <div
                className={`order-2 ${
                  index % 2 !== 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                {/* Available Accent Badge */}
                <span className="inline-block bg-amber-500/10 border border-amber-500/40 text-amber-400 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md mb-4 shadow-sm">
                  Active Operational
                </span>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-200 tracking-wide">
                  {equipment.name}
                </h3>
                
                <p className="text-amber-100/70 text-sm leading-relaxed mb-6">
                  {equipment.description}
                </p>
                
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                  Key Specifications & Features:
                </h4>
                
                <ul className="space-y-2.5">
                  {equipment.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-amber-100/60">
                      <span className="text-amber-500 font-bold mr-2.5 mt-0.5 select-none">✦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* --- "Coming Soon" Box --- */}
        <div className="mt-20 bg-[#0a0904]/40 backdrop-blur-md border border-dashed border-amber-900/40 text-center p-12 rounded-xl max-w-4xl mx-auto shadow-xl">
          <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4 mx-auto shadow-md">
            <span className="text-xl font-bold text-amber-400">+</span>
          </div>
          <h3 className="text-xl font-black text-white uppercase tracking-wider mb-2">
            {comingSoonEquipment.name}
          </h3>
          <p className="text-amber-100/60 text-sm max-w-xl mx-auto leading-relaxed">
            {comingSoonEquipment.description}
          </p>
        </div>

      </div>
    </section>
  );
}