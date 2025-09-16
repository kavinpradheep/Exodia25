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

      <p style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>
        📧 Email: contact@exodia.com
      </p>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        📞 Phone: +91 6369960824
      </p>

      <div style={{ display: "flex", gap: "1.5rem", fontSize: "1.5rem" }}>
        <a href="#" style={{ textDecoration: "none", color: "#fff" }}>🌐</a>
        <a href="#" style={{ textDecoration: "none", color: "#fff" }}>📸</a>
        <a href="#" style={{ textDecoration: "none", color: "#fff" }}>🔗</a>
      </div>
    </section>
  );
}
