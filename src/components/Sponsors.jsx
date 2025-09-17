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
              src="../assets/Vanitha_Photography.png"
              alt="Vanitha Photography"
              className="sponsor-logo"
              style={{ height: "180px" }}
            />
          </div>
          <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>
            Vanitha Photography
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <img
            src="../assets/CelebrateX_Events.png"
            alt="CelebrateX Events"
            className="sponsor-logo"
            style={{ height: "180px", borderRadius: "8px" }}
          />
          <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>
            CelebrateX Events
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <img
            src="../assets/ATTI.png"
            alt="ATTI"
            className="sponsor-logo"
            style={{ height: "180px", borderRadius: "8px" }}
          />
          <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>ATTI</p>
        </div>
      </div>

      {/* Row 2: Sponsor 4 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img
            src="../assets/imagivite.jpg"
            alt="Imagivite"
            className="sponsor-logo"
            style={{ height: "140px", borderRadius: "8px" }}
          />
          <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>Imagivite</p>
        </div>
      </div>
    </section>
  );
}
