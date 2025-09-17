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
      {/* Heading */}
      <h2
        style={{
          fontSize: "3rem",
          marginBottom: "3rem",
          fontWeight: "bold",
          borderBottom: "2px solid #00D4FF",
          display: "inline-block",
          paddingBottom: "0.5rem",
        }}
      >
        Contact Us
      </h2>

      {/* Email & Instagram */}
      <div style={{ marginBottom: "3rem", fontSize: "1.2rem", lineHeight: "1.8" }}>
        <p>
          📧 Email:{" "}
          <a
            href="mailto:istestudentschapterkec@gmail.com"
            style={{
              color: "#00D4FF",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            istestudentschapterkec@gmail.com
          </a>
        </p>
        <p>
          📸 Instagram:{" "}
          <a
            href="https://www.instagram.com/iste_kec_?igsh=MXJiNTF5cWNvdWZjdA=="
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#00D4FF",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            @iste_kec_
          </a>
        </p>
      </div>

      {/* Contacts List */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          fontSize: "1.2rem",
          textAlign: "left",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <p>
          <strong>Bharath. N. K</strong> – Chairperson <br />
          📧 Email: bharathnk.22aim@kongu.edu
        </p>
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
    </section>
  );
}
