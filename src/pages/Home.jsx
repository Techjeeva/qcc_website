import React from "react";
import { Link } from "react-router-dom";
import QuantumHero from "../components/QuantumHero";
import "../components/QuantumHero.css";
import Equipments from "./Equipments";
import Subjects from "./Subjects";
import Contact from "./Contact";
import Collaborations from "./Collaborations";

export default function Home() {
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden text-white">
      <QuantumHero />

      <div className="relative z-20 space-y-0">
        <section className="quantum-intro">
          <div className="quantum-section-label">01 / THE LAB</div>
          <h2>Where information<br /><span>becomes quantum.</span></h2>
          <p>
            Quantum Communication Lab is focused on exploring secure quantum
            information transfer, quantum cryptography, quantum random
            processes and emerging quantum-network technologies.
          </p>
          <Link to="/about" className="quantum-text-link">Discover the laboratory ↗</Link>
        </section>

        <section className="border-t border-cyan-400/10 py-16 bg-transparent"><Collaborations /></section>
        <section className="border-t border-cyan-400/10 py-16 bg-transparent"><Equipments /></section>
        <section className="border-t border-cyan-400/10 py-16 bg-transparent"><Subjects /></section>
        <section className="border-t border-cyan-400/10 pt-16 pb-24 bg-transparent"><Contact /></section>
      </div>
    </div>
  );
}
