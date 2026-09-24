import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function QuantumHero() {
  const coreRef = useRef(null);

  useEffect(() => {
    const handleMove = (event) => {
      if (!coreRef.current) return;
      const x = (event.clientX / window.innerWidth - 0.5) * 18;
      const y = (event.clientY / window.innerHeight - 0.5) * -18;
      coreRef.current.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <section className="quantum-hero">
      <div className="quantum-grid" aria-hidden="true" />
      <div className="quantum-stars" aria-hidden="true">
        {Array.from({ length: 28 }, (_, i) => (
          <span key={i} style={{ "--i": i }} />
        ))}
      </div>

      <div className="quantum-hero-content">
        <div className="quantum-eyebrow">
          <span className="status-dot" />
          SRM INSTITUTE OF SCIENCE AND TECHNOLOGY
        </div>

        <div className="quantum-kicker">QUANTUM RESEARCH • SECURE COMMUNICATION</div>

        <h1>
          Quantum
          <span>Communication</span>
          <strong>Lab</strong>
        </h1>

        <p>
          Exploring the next generation of secure communication through
          quantum information, cryptography, entanglement and quantum networks.
        </p>

        <div className="quantum-actions">
          <Link to="/about" className="quantum-btn primary">
            Explore the Lab <span>↗</span>
          </Link>
          <Link to="/projects" className="quantum-btn secondary">
            Research Projects
          </Link>
        </div>

        <div className="quantum-metrics">
          <div><strong>QKD</strong><span>Secure Key Distribution</span></div>
          <div><strong>BB84</strong><span>Quantum Cryptography</span></div>
          <div><strong>QRNG</strong><span>Randomness Research</span></div>
        </div>
      </div>

      <div className="quantum-core-wrap" aria-hidden="true">
        <div className="quantum-core" ref={coreRef}>
          <div className="core-glow" />
          <div className="core-sphere">
            <div className="core-latitude one" />
            <div className="core-latitude two" />
            <div className="core-longitude one" />
            <div className="core-longitude two" />
            <div className="core-dot" />
          </div>

          <div className="orbit orbit-a"><i /></div>
          <div className="orbit orbit-b"><i /></div>
          <div className="orbit orbit-c"><i /></div>

          <div className="photon photon-a" />
          <div className="photon photon-b" />
          <div className="photon photon-c" />

          <div className="node alice"><span>Q1</span><b>ALICE</b></div>
          <div className="node bob"><span>Q2</span><b>BOB</b></div>
        </div>

        <div className="core-caption">
          <span>LIVE QUANTUM CHANNEL</span>
          <b>ENTANGLEMENT LINK ACTIVE</b>
        </div>
      </div>

      <div className="scroll-cue">
        <span>SCROLL TO EXPLORE</span>
        <i />
      </div>
    </section>
  );
}
