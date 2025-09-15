import React from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import Sponsors from "./components/Sponsors";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Events from "./components/EventsRegistration";

function App() {
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <Landing />
      <About />
      <Sponsors />
      <Events />
      <Timeline />
      <Contact />

      {/* Bottom Navbar */}
            {/* Bottom Floating Navbar */}
      <nav
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#000F1F",
          color: "white",
          padding: "0.75rem 2rem",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          borderRadius: "9999px", // full rounded like Mac dock
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          zIndex: 50,
          border: "1px solid #00D4FF",
        }}
      >
        <a href="#landing" style={{ color: "white", textDecoration: "none" }}>Home</a>
        <a href="#about" style={{ color: "white", textDecoration: "none" }}>About</a>
        <a href="#sponsors" style={{ color: "white", textDecoration: "none" }}>Sponsors</a>
        <a href="#events" style={{ color: "white", textDecoration: "none" }}>Events</a>
        <a href="#timeline" style={{ color: "white", textDecoration: "none" }}>Timeline</a>
        <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
      </nav>

    </div>
  );
}

export default App;
