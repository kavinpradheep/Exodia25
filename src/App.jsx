import React from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import Sponsors from "./components/Sponsors";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Events from "./components/EventsRegistration";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      style={{
        scrollBehavior: "smooth",
        overflowY: "scroll",
        height: "100vh",
        WebkitOverflowScrolling: "touch", // ✅ momentum scrolling
      }}
    >
      {/* Sections */}
      <section id="landing">
        <Landing />
      </section>
      <section id="about">
        <About />
      </section>
      {/* Sponsors Section 
      <section id="sponsors">
        <Sponsors />
      </section>*/}
      <section id="events">
        <Events />
      </section>
      <section id="timeline">
        <Timeline />
      </section>
      <section id="contact">
        <Contact />
      </section>

      {/* ✅ Navbar */}
      <Navbar />
    </div>
  );
}

export default App;
