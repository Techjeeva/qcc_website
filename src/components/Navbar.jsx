// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define navigation links for the router
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/events', label: 'Events' },
    { to: '/faculty', label: 'Faculty' },
    { to: '/quantumclub', label: 'QuantumClub' },
  ];

  // --- Updated Active Style for Gold Theme ---
  const activeLinkStyle = {
    color: '#fbbf24', // amber-400 (Brilliant Gold)
    borderBottom: '2px solid #fbbf24',
  };

  // --- Updated Header to Warm Black-Gold Glassmorphism ---
  const headerClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#0a0904]/60 backdrop-blur-md border-b border-amber-900/30`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        
        {/* Logo links to Home */}
        <NavLink to="/" className="flex items-center justify-center group">
          <img
            className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            src="./logo/qcc_logo.png" 
            alt="Quantum Computing Lab Logo"
          />
          <span className="ml-3 text-white uppercase font-black hidden sm:block text-sm tracking-wide leading-tight">
            CENTRE FOR<br />
            <span className="text-amber-500">QUANTUM COMMUNICATION AND COMPUTING</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center text-amber-100/70 font-semibold text-sm tracking-wide">
            {navLinks.map((link) => (
              <li key={link.to} className="px-5">
                <NavLink
                  to={link.to}
                  className="py-2 transition-colors duration-300 hover:text-amber-400"
                  style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* --- Gold Contact Button --- */}
        <NavLink
          to="/contact"
          className="hidden lg:block border-2 border-amber-500 text-amber-500 rounded-full font-bold px-6 py-2 hover:bg-amber-500 hover:text-black hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all duration-300 text-sm tracking-wide"
        >
          Contact Us
        </NavLink>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-amber-400 hover:text-amber-300 focus:outline-none transition-colors"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* --- Mobile Menu (Gold Theme) --- */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-[#0a0904]/95 backdrop-blur-xl px-4 pt-4 pb-8 border-b border-amber-900/40">
          <ul className="flex flex-col items-center space-y-5 text-amber-100/80 font-semibold">
            {navLinks.map((link) => (
              <li key={link.to} className="w-full text-center">
                <NavLink
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)} 
                  className="py-2 text-lg block hover:text-amber-400 transition-colors"
                  style={({ isActive }) => isActive ? { color: "#fbbf24" } : undefined}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="w-full pt-2">
              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block bg-amber-500 text-black rounded-full font-bold px-8 py-3 text-center shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:bg-amber-400 transition-all"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}