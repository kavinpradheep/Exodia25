import React from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import Sponsors from "./components/Sponsors";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Events from "./components/EventsRegistration";

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
      {/* Each section snaps */}
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
      <nav
        className="floating-nav"
        style={{
          position: "fixed",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(0, 15, 31, 0.65)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          padding: "0.7rem 2.2rem",
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
          borderRadius: "9999px",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
          zIndex: 100,
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        {[
          { id: "landing", label: "Home" },
          { id: "about", label: "About" },
          { id: "sponsors", label: "Sponsors" },
          { id: "events", label: "Events" },
          { id: "timeline", label: "Timeline" },
          { id: "contact", label: "Contact" },
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "500",
              transition: "all 0.25s ease-in-out",
              padding: "0.3rem 0.6rem",
              borderRadius: "8px",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#00D4FF";
              e.target.style.transform = "scale(1.15)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "white";
              e.target.style.transform = "scale(1)";
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Inline CSS for responsiveness */}
      <style>
        {`
          @media (max-width: 768px) {
            .floating-nav {
              bottom: 12px;
              padding: 0.5rem 1rem;
              gap: 1rem;
            }
            .floating-nav a {
              font-size: 0.8rem !important;
              padding: 0.2rem 0.4rem !important;
            }
          }

          @media (max-width: 480px) {
            .floating-nav {
              gap: 0.6rem;
              padding: 0.4rem 0.8rem;
            }
            .floating-nav a {
              font-size: 0.7rem !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;
