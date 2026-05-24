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

  // FIXED: Converted active status handler into clean, reliable Tailwind class strings
  const getNavLinkClass = ({ isActive }) => {
    return `py-2 transition-all duration-300 tracking-wide text-sm ${
      isActive 
        ? 'text-amber-400 font-black border-b-2 border-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]' 
        : 'text-amber-100/70 font-semibold hover:text-amber-400'
    }`;
  };

  const mobileNavLinkClass = ({ isActive }) => {
    return `py-2 text-lg block transition-colors w-full ${
      isActive 
        ? 'text-amber-400 font-black drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]' 
        : 'text-amber-100/80 font-semibold hover:text-amber-400'
    }`;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#0a0904]/60 backdrop-blur-md border-b border-amber-900/30">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        
        {/* Logo links to Home */}
        <NavLink to="/" className="flex items-center justify-center group">
          <img
            className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            src="./logo/qcc_logo.png" 
            alt="Quantum Computing Lab Logo"
          />
          <span className="ml-3 text-white uppercase font-black hidden sm:block text-xs tracking-wide leading-tight">
            CENTRE FOR<br />
            <span className="text-amber-500">QUANTUM COMMUNICATION AND COMPUTING</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <li key={link.to} className="px-5">
                <NavLink
                  to={link.to}
                  className={getNavLinkClass}
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
          className={({ isActive }) => 
            `hidden lg:block border-2 border-amber-500 rounded-full font-bold px-6 py-2 transition-all duration-300 text-sm tracking-wide ${
              isActive 
                ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.6)]' 
                : 'text-amber-500 hover:bg-amber-500 hover:text-black hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]'
            }`
          }
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
          <ul className="flex flex-col items-center space-y-5">
            {navLinks.map((link) => (
              <li key={link.to} className="w-full text-center">
                <NavLink
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)} 
                  className={mobileNavLinkClass}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="w-full pt-2">
              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  `block rounded-full font-bold px-8 py-3 text-center transition-all ${
                    isActive 
                      ? 'bg-amber-400 text-black shadow-[0_0_25px_rgba(245,158,11,0.6)]' 
                      : 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:bg-amber-400'
                  }`
                }
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