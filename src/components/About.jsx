import React from "react";
import { FaLaptopCode, FaUsers, FaClock, FaTrophy } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "4rem 2rem",
        background: "#000F1F",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2.8rem", marginBottom: "2rem" }}>About Exodia 2k26</h2>

     {/* 🔥 Cash Prize Highlight */}
      <div
        style={{
          background: "linear-gradient(90deg, #FFD700, #FF9900)",
          color: "#000",
          padding: "1rem 2rem",
          borderRadius: "16px",
          fontSize: "1.6rem",
          fontWeight: "bold",
          margin: "0 auto 2rem auto",
          maxWidth: "600px",
          boxShadow: "0 4px 15px rgba(255, 215, 0, 0.6)",
          transform: "scale(1.05)",
        }}
      >
        🏆 Cash Prizes Worth <span style={{ color: "#B22222" }}>Around ₹25,000</span> to Grab!
      </div>


      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
          maxWidth: "1100px",
          margin: "0 auto",
          alignItems: "flex-start",
        }}
      >
        {/* Left Column: Text */}
        <div style={{ flex: "1 1 450px", textAlign: "left" }}>
          <p style={{ fontSize: "1.15rem", lineHeight: "1.6", marginBottom: "1rem" }}>
            <strong>Exodia 2k25</strong> is the flagship technical symposium organized by the{" "}
            <strong>ISTE Student Chapter of Kongu Engineering College</strong>. It brings together
            innovation, creativity, and collaboration through a series of technical and non-technical events.
          </p>

          <p style={{ fontSize: "1.15rem", lineHeight: "1.6", marginBottom: "1rem" }}>
            Expected participation: <strong>400+ students</strong>. A platform to showcase talent, exchange knowledge, and build futuristic ideas.
          </p>

          <p style={{ fontSize: "1.15rem", lineHeight: "1.6" }}>
            Not just competitions – it's about <strong>learning, networking, and creating memories</strong> that last a lifetime.
          </p>
        </div>

        {/* Right Column: Event Highlights */}
        <div style={{ flex: "1 1 350px", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          <div
            style={{
              background: "#00FFAA",
              padding: "1.2rem",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
              color: "#000",
            }}
          >
            <FaClock size={28} color="#000" />
            <div>
              <strong>30-Hour Hackathon:</strong> Teams of 4 collaborate on real-world challenges with expert mentorship.
            </div>
          </div>

          <div
            style={{
              background: "#001933",
              padding: "1.2rem",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
            }}
          >
            <FaLaptopCode size={28} color="#00D4FF" />
            <div>
              <strong>Technical Events:</strong> Paper Presentation, ProCoder, Circuitrix, Core Clash
            </div>
          </div>

          <div
            style={{
              background: "#001933",
              padding: "1.2rem",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
            }}
          >
            <FaUsers size={28} color="#FFAA00" />
            <div>
              <strong>Non-Technical Events:</strong> Flash Clash, IPL Auction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
