import React from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import Sponsors from "./components/Sponsors";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Events from "./components/EventsRegistration";
import Navbar from "./components/Navbar"; // ✅ Import navbar

function App() {
  return (
    <div
      style={{
        scrollBehavior: "smooth",
        scrollSnapType: "y mandatory",
        overflowY: "scroll",
        height: "100vh",
      }}
    >
      {/* Sections */}
      <section id="landing" style={{ scrollSnapAlign: "start" }}>
        <Landing />
      </section>
      <section id="about" style={{ scrollSnapAlign: "start" }}>
        <About />
      </section>
      <section id="sponsors" style={{ scrollSnapAlign: "start" }}>
        <Sponsors />
      </section>
      <section id="events" style={{ scrollSnapAlign: "start" }}>
        <Events />
      </section>
      <section id="timeline" style={{ scrollSnapAlign: "start" }}>
        <Timeline />
      </section>
      <section id="contact" style={{ scrollSnapAlign: "start" }}>
        <Contact />
      </section>

      {/* ✅ Navbar separated */}
      <Navbar />
    </div>
  );
}

export default App;
