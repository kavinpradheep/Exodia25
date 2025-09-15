import React from "react";

export default function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        padding: "5rem 2rem",
        backgroundColor: "#000F1F",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "3rem", marginBottom: "2rem" }}>About Exodia</h2>
      <p style={{ maxWidth: "800px", margin: "0 auto" }}>
        Exodia is a 2-day mega tech event featuring workshops, hackathons,
        and competitions designed to inspire creativity and innovation.
      </p>
    </section>
  );
}
