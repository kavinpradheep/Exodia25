import React from "react";

export default function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        padding: "6rem 2rem",
        backgroundColor: "#000F1F",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "3rem", marginBottom: "3rem" }}>About Exodia 2k25</h2>

      <p
        style={{
          maxWidth: "900px",
          margin: "0 auto 2rem",
          fontSize: "1.2rem",
          lineHeight: "1.8",
        }}
      >
        <strong>Exodia 2k25</strong> is the flagship two-day technical symposium organized by the{" "}
        <strong>ISTE Student Chapter of Kongu Engineering College (Autonomous), Perundurai, Erode</strong>.
        <br />
        It brings together innovation, creativity, and collaboration through a series of technical and non-technical events, designed to challenge and inspire participants across disciplines.
      </p>

      <p
        style={{
          maxWidth: "900px",
          margin: "0 auto 2rem",
          fontSize: "1.2rem",
          lineHeight: "1.8",
        }}
      >
        With an expected participation of <strong>400+ students</strong>, Exodia 2k25 serves as a platform to showcase talent, exchange knowledge, and build futuristic ideas.
      </p>

      <h3 style={{ fontSize: "2rem", margin: "3rem 0 1.5rem" }}>Event Highlights</h3>
      <ul
        style={{
          maxWidth: "700px",
          margin: "0 auto 2rem",
          textAlign: "left",
          fontSize: "1.1rem",
          lineHeight: "2",
          listStyleType: "disc",
          paddingLeft: "1.5rem",
        }}
      >
        <li style={{ marginBottom: "1rem" }}>
          <strong>Technical Events:</strong> Paper Presentation, ProCoder, Circuitrix, Flash Clash
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <strong>Non-Technical Events:</strong> Soul Sync, IPL Auction, Code Clash
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <strong>30-Hour Hackathon:</strong> A high-energy coding marathon where teams of 4 collaborate to develop innovative solutions for real-world challenges, mentored by experts.
        </li>
      </ul>

      <p
        style={{
          maxWidth: "900px",
          margin: "2rem auto 0",
          fontSize: "1.2rem",
          lineHeight: "1.8",
        }}
      >
        Exodia 2k25 is not just about competitions – it’s about <strong>learning, networking, and creating memories</strong> that last a lifetime.
      </p>
    </section>
  );
}
