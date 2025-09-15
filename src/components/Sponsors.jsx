import React from "react";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      style={{
        minHeight: "80vh",
        padding: "5rem 2rem",
        backgroundColor: "#000F1F",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "3rem", marginBottom: "2rem" }}>Our Sponsors</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
        <img src="/sponsor1.png" alt="Sponsor1" style={{ height: "80px" }} />
        <img src="/sponsor2.png" alt="Sponsor2" style={{ height: "80px" }} />
        <img src="/sponsor3.png" alt="Sponsor3" style={{ height: "80px" }} />
      </div>
    </section>
  );
}
