// src/App.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

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
import Collaborations from "./pages/Collaborations";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/quantum_bg_video.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="fixed inset-0 bg-black/60 z-10"></div>

        {/* Scroll to top on route change */}
        <ScrollToTop />

        {/* Navbar */}
        <div className="relative z-30">
          <Navbar />
        </div>

        {/* Main Content */}
        <main className="flex-grow relative z-20 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
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

        {/* Footer */}
        <div className="relative z-30">
          <Footer />
        </div>

      </div>
    </Router>
  );
}

export default App;