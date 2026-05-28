// src/components/Footer.jsx
import { NavLink } from "react-router-dom";

export default function Footer() {
  const partnerLogos = [
    { src: "./logo/srm_logo.png", alt: "SRMIST Logo", href: "https://www.srmist.edu.in/" },
    { src: "./logo/soc_logo.png", alt: "SCHOOL OF COMPUTING Logo", href: "https://www.srmist.edu.in/college/college-of-engineering-technology/" },
    { src: "./logo/ctech_logo.png", alt: "DEPT. OF COMPUTING TECHNOLOGIES Logo", href: "https://www.srmist.edu.in/department/department-of-computing-technologies/" },
  ];

  return (
    // Changed bg-gray-900 to a deep gold-tinted black with glassmorphism
    <footer id="footer" className="bg-[#0a0904]/95 backdrop-blur-xl border-t border-amber-900/40 relative z-30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Lab Identity */}
          <div className="lg:col-span-4">
            <NavLink to="/" className="flex items-center mb-6 group">
              <img
                className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
                src="./logo/cqcc_logo2.png" 
                alt="Quantum Computing Lab Logo"
              />
              <span className="ml-4 text-white font-black text-xl leading-tight">
                CENTER FOR<br />
                <span className="text-amber-500">QUANTUM COMMUNICATION AND COMPUTING</span>
              </span>
            </NavLink>
            
            <p className="text-sm text-amber-100/60 mb-8 leading-relaxed max-w-sm">
              Pushing the boundaries of computational science at 
              SRMIST, Kattankulathur, Tamil Nadu – 603203.
            </p>

            {/* --- Partner Logos Section --- */}
            <div className="flex items-center gap-6">
              {partnerLogos.map((logo, index) => (
                <a
                  key={index}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block opacity-60 hover:opacity-100 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-10 w-auto object-contain brightness-125 grayscale hover:grayscale-0" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="lg:col-span-2">
            <h3 className="text-md font-bold text-amber-500 uppercase tracking-widest mb-6">Explore</h3>
            <ul className="space-y-3 text-amber-100/70">
              <li><NavLink to="/about" className="hover:text-amber-400 transition-colors">About Us</NavLink></li>
              <li><NavLink to="/faculty" className="hover:text-amber-400 transition-colors">Faculty</NavLink></li>
              <li><NavLink to="/gallery" className="hover:text-amber-400 transition-colors">Gallery</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-amber-400 transition-colors">Contact</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Academics */}
          <div className="lg:col-span-3">
            <h3 className="text-md font-bold text-amber-500 uppercase tracking-widest mb-6">Research</h3>
            <ul className="space-y-3 text-amber-100/70">
              <li><NavLink to="/subjects" className="hover:text-amber-400 transition-colors">Core Subjects</NavLink></li>
              <li><NavLink to="/equipments" className="hover:text-amber-400 transition-colors">Lab Equipment</NavLink></li>
              <li><NavLink to="/projects" className="hover:text-amber-400 transition-colors">R&D Projects</NavLink></li>
            </ul>
          </div>

          {/* Column 4: Activities */}
          <div className="lg:col-span-3">
            <h3 className="text-md font-bold text-amber-500 uppercase tracking-widest mb-6">Ecosystem</h3>
            <ul className="space-y-3 text-amber-100/70">
              <li><NavLink to="/events" className="hover:text-amber-400 transition-colors">Events</NavLink></li>
              <li><NavLink to="/achievements" className="hover:text-amber-400 transition-colors">Achievements</NavLink></li>
              <li><NavLink to="/industrial-visits" className="hover:text-amber-400 transition-colors">Industrial Visits</NavLink></li>
              <li><NavLink to="/collaborations" className="hover:text-amber-400 transition-colors">Our Partners (MoUs)</NavLink></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Media */}
        <div className="mt-16 pt-8 border-t border-amber-900/30 flex flex-col sm:flex-row justify-between items-center text-xs tracking-wide text-amber-100/40">
          <p className="mb-4 sm:mb-0">
            © {new Date().getFullYear()} Center for Quantum Communication and Computing – SRMIST. <span className="hidden sm:inline">|</span> <span className="text-amber-500/50">ADVANCING THE FUTURE.</span>
          </p>
          
          <div className="flex space-x-6">
            <a href="#" aria-label="LinkedIn" className="hover:text-amber-400 transition-all transform hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-amber-400 transition-all transform hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}