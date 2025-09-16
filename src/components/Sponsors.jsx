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
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ✅ Heading stays at top */}
      <h2 style={{ fontSize: "3rem", marginBottom: "2rem" }}>Our Sponsors</h2>

      {/* ✅ Sponsors centered in remaining space */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {/* ✅ Sponsor 1 */}
        <div style={{ textAlign: "center" }}>
          <img
            src="../assets/CelebrateX_Events.png"
            alt="CelebrateX Events"
            style={{ height: "180px" }}
          />
          <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>CelebrateX Events</p>
        </div>

        {/* ✅ Sponsor 2 */}
        <div style={{ textAlign: "center" }}>
          <img
            src="../assets/Vanitha_Photography.png"
            alt="Vanitha Photography"
            style={{ height: "180px" }}
          />
          <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>Vanitha Photography</p>
        </div>

        {/* ✅ Sponsor 3 */}
        <div style={{ textAlign: "center" }}>
          <img
            src="../assets/CelebrateX_Events.png"
            alt="CelebrateX Events"
            style={{ height: "180px" }}
          />
          <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>CelebrateX Events</p>
        </div>
      </div>
    </section>
  );
}
