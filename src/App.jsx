// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Import all page components
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
import "./App.css";

function App() {
  const repoName = window.location.hostname.includes("https://techjeeva.github.io/qcc_website/")
    ? `/${window.location.pathname.split("/")[1]}`
    : "";

  return (
    <Router basename={repoName}>
      <div className="flex flex-col min-h-screen relative text-white bg-black">
        
        {/* --- Global Background Elements --- */}
        <video
          autoPlay loop muted playsInline
          src="/quantum_bg_video.mp4" 
          className="fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
          title="Abstract quantum background video"
        ></video>
        <div className="fixed top-0 left-0 w-full h-full bg-[#050503]/80 z-10 pointer-events-none"></div>

        <ScrollToTop />
        <Navbar /> 
        
        {/* --- Main Content Area --- */}
        <main className="flex-grow relative z-20 pt-20"> 
          <Routes> 
            {/* Standard landing setup */}
            <Route path="/" element={<Home />} />
            
            {/* Fallback support in case a link explicitly goes to /home */}
            <Route path="/home" element={<Navigate to="/" replace />} />
            
            {/* Standalone sub-page routing mapping */}
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
            
            {/* Direct broken routing paths home safely */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer /> 
      </div>
    </Router>
  );
}

export default App;