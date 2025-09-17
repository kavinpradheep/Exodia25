import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        minHeight: "60vh",
        padding: "5rem 2rem",
        backgroundColor: "#000F1F",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <h2 style={{ fontSize: "3rem", marginBottom: "2rem", fontWeight: "bold" }}>
        Contact Us
      </h2>

      {/* General Mail */}
      <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
        📧 Email: istestudentschapterkec@gmail.com
      </p>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        📞 For Queries, Contact:
      </p>

      {/* Contacts List */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          fontSize: "1.2rem",
          textAlign: "left",
        }}
      >
        <p>
          <strong>Sharni. K</strong> – Secretary <br />
          📞 7708042415
        </p>
        <p>
          <strong>Tamilarasi. P</strong> – Executive Head <br />
          📞 9790615149
        </p>
        <p>
          <strong>Kavin Pradheep S T</strong> – Dept Coordinator (Developer) <br />
          📞 6369960824
        </p>
      </div>

      {/* Social Links */}
      <div style={{ display: "flex", gap: "1.5rem", fontSize: "1.5rem", marginTop: "2rem" }}>
        <a href="#" style={{ textDecoration: "none", color: "#fff" }}>🌐</a>
        <a href="#" style={{ textDecoration: "none", color: "#fff" }}>📸</a>
        <a href="#" style={{ textDecoration: "none", color: "#fff" }}>🔗</a>
      </div>
    </section>
  );
}
