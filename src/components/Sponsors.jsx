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
      {/* Heading */}
      <h2 style={{ fontSize: "3rem", marginBottom: "2rem" }}>Our Sponsors</h2>

      {/* Inline CSS for mobile responsiveness */}
      <style>
        {`
          @media (max-width: 600px) {
            .sponsor-logo {
              height: 100px !important;
            }
          }
        `}
      </style>

      {/* Row 1: First 3 Sponsors */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3rem",
          flexWrap: "wrap",
          marginBottom: "3rem",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ backgroundColor: "white", borderRadius: "8px" }}>
            <img
              src="../assets/Stay_Tuned.jpg"
              alt="Stay Tuned"
              className="sponsor-logo"
              style={{ height: "180px" }}
            />
          </div>
          <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>
            Stay Tuned
          </p>
        </div>
      </div>
    </section>
  );
}
