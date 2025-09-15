import React from "react";
import {
  FaHome,
  FaInfoCircle,
  FaHandshake,
  FaCalendarAlt,
  FaStream,
  FaEnvelope,
} from "react-icons/fa";

import Landing from "./components/Landing";
import About from "./components/About";
import Sponsors from "./components/Sponsors";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Events from "./components/EventsRegistration";

function App() {
  const navItems = [
    { id: "landing", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaInfoCircle /> },
    { id: "sponsors", label: "Sponsors", icon: <FaHandshake /> },
    { id: "events", label: "Events", icon: <FaCalendarAlt /> },
    { id: "timeline", label: "Timeline", icon: <FaStream /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

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

      {/* Floating Navbar */}
      <nav className="floating-nav">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            title={item.label}
            className="nav-icon"
          >
            {item.icon}
          </a>
        ))}
      </nav>

      {/* Inline CSS */}
      <style>
        {`
          .floating-nav {
            position: fixed;
            bottom: 24px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 15, 31, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            padding: 0.6rem 1.6rem;
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            border-radius: 9999px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
            z-index: 100;
            border: 1px solid rgba(255, 255, 255, 0.15);
          }

          .nav-icon {
            color: #00D4FF;
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease-in-out;
            padding: 0.5rem;
            border-radius: 50%;
          }

          .nav-icon:hover {
            color: #ffffff;
            transform: scale(1.2);
            text-shadow: 0 0 12px #00D4FF;
          }

          @media (max-width: 768px) {
            .floating-nav {
              bottom: 12px;
              padding: 0.5rem 1rem;
              gap: 1rem;
            }
            .nav-icon {
              font-size: 1.3rem !important;
            }
          }

          @media (max-width: 480px) {
            .floating-nav {
              gap: 0.8rem;
              padding: 0.4rem 0.8rem;
            }
            .nav-icon {
              font-size: 1.2rem !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;
