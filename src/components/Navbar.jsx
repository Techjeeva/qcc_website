// src/components/Navbar.js

import { NavLink } from 'react-router-dom';
import React, { useState } from 'react'; // Removed useEffect if not needed for scroll effects

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

  // Style for the currently active link
  const activeLinkStyle = {
    color: 'white',
    borderBottom: '2px solid #22d3ee', // cyan-400
  };

  // Using the "Frosted Glass" style, ensure z-50 is present
  const headerClasses = `fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-black/30 backdrop-blur-lg border-b border-gray-500/50`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        {/* Logo links to Home */}
        <NavLink to="/" className="flex items-center justify-center">
          <img
            className="h-12 sm:h-16"
            src="./logo/qcc_logo.png" 
            alt="Quantum Computing Lab Logo"
          />
          <span className="ml-3 text-white uppercase font-black hidden sm:block">
            Quantum<br />Computing Lab
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center text-gray-300 font-semibold">
            {navLinks.map((link) => (
              <li key={link.to} className="px-5">
                <NavLink
                  to={link.to}
                  className="py-2 transition-colors duration-300 hover:text-white"
                  // Apply active style conditionally
                  style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <NavLink
          to="/contact"
          className="hidden lg:block border-2 border-cyan-400 text-cyan-400 rounded-full font-bold px-6 py-2 hover:bg-cyan-400 hover:text-indigo-900 transition-all duration-300"
        >
          Contact Us
        </NavLink>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-black/50 backdrop-blur-lg px-4 pt-2 pb-6">
          <ul className="flex flex-col items-center space-y-4 text-gray-300 font-semibold">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                  className="py-2 text-lg hover:text-white"
                  style={({ isActive }) => isActive ? { color: "#22d3ee" } : undefined}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 inline-block bg-cyan-400 text-indigo-900 rounded-full font-bold px-8 py-3"
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