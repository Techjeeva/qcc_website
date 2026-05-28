// src/App.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Utility to scroll up on page change

// Import all your page components
import Home from "./pages/Home";
import About from "./pages/About";
import MoUs from "./pages/MoUs";
import Subjects from "./pages/Subjects";
import Equipments from "./pages/Equipments";
import Projects from "./pages/Projects";
import IndustrialVisits from "./pages/IndustrialVisits";
import Gallery from "./pages/Gallery";
import Achievements from "./pages/Achievements";
import Events from "./pages/Events";
import Faculty from "./pages/Faculty";
import Contact from "./pages/Contact";
import QuantumClub from "./pages/QuantumClub";
import Collaborations from './pages/Collaborations';
import "./App.css"; // Your global styles

function App() {
  return (
    <Router> {/* Enable routing */}
      <div className="flex flex-col min-h-screen relative"> {/* Base layout */}
        
        {/* --- Global Background Elements --- */}
        <video
          autoPlay loop muted playsInline
          src="./quantum_bg_video.mp4" // Path relative to the 'public' folder
          className="fixed top-0 left-0 w-full h-full object-cover z-0" // Fixed position, lowest layer
          title="Abstract quantum background video"
        ></video>
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-10"></div> {/* Overlay */}
        {/* --- End Global Background Elements --- */}

        <ScrollToTop /> {/* Scrolls viewport to top on route change */}
        
        <Navbar />      {/* Always visible Navbar (Ensure it has z-index > 10) */}
        {/* --- Main Content Area --- */}
        {/* Pages rendered here based on URL */}
        <main className="flex-grow relative z-20 pt-20"> {/* pt-20 to offset fixed Navbar height */}
          <Routes> {/* The router's content switcher */}
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mous" element={<MoUs />} />
            <Route path="/quantumclub" element={<QuantumClub />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/equipments" element={<Equipments />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/industrial-visits" element={<IndustrialVisits />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/events" element={<Events />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/collaborations" element={<Collaborations />} />
            
          </Routes>
        </main>
        {/* --- End Main Content Area --- */}

        <Footer />      {/* Always visible Footer (Ensure it has z-index > 10) */}
      </div>
    </Router>
  );
}

export default App;