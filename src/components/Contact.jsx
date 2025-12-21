import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        minHeight: "70vh",
        padding: "4rem 2rem",
        backgroundColor: "#000F1F",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#fff",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "2.8rem",
          marginBottom: "3rem",
          fontWeight: "bold",
          borderBottom: "3px solid #00D4FF",
          paddingBottom: "0.5rem",
          letterSpacing: "1px",
        }}
      >
        Contact Us
      </h2>

      {/* Email & Instagram */}
      <div
        style={{
          marginBottom: "3rem",
          fontSize: "1.2rem",
          lineHeight: "1.8",
        }}
      >
        <p>
          📧 Email:{" "}
          <a
            href="mailto:istestudentschapterkec@gmail.com"
            style={{
              color: "#00D4FF",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
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
              textDecoration: "none",
              fontWeight: "bold",
            }}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
          >
            @iste_kec_
          </a>
        </p>
      </div>

      {/* Contact Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            backgroundColor: "#0a1a2f",
            padding: "1.5rem",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 212, 255, 0.15)",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          <h3 style={{ color: "#00D4FF", marginBottom: "0.5rem" }}>
            Bharath. N. K
          </h3>
          <p style={{ margin: "0.3rem 0" }}>Chairperson</p>
          <p style={{ margin: "0.3rem 0" }}>📧 bharathnk.22aim@kongu.edu</p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            backgroundColor: "#0a1a2f",
            padding: "1.5rem",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 212, 255, 0.15)",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          <h3 style={{ color: "#00D4FF", marginBottom: "0.5rem" }}>Sharni. K</h3>
          <p style={{ margin: "0.3rem 0" }}>Secretary</p>
          <p style={{ margin: "0.3rem 0" }}>📞 7708042415</p>
        </div>

        {/* Card 3 */}
        <div
          style={{
            backgroundColor: "#0a1a2f",
            padding: "1.5rem",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 212, 255, 0.15)",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          <h3 style={{ color: "#00D4FF", marginBottom: "0.5rem" }}>
            Abhinaya P S
          </h3>
          <p style={{ margin: "0.3rem 0" }}>Treasurer</p>
          <p style={{ margin: "0.3rem 0" }}>📞 8667235579</p>
        </div>

        {/* Card 4 */}
        <div
          style={{
            backgroundColor: "#0a1a2f",
            padding: "1.5rem",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 212, 255, 0.15)",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          <h3 style={{ color: "#00D4FF", marginBottom: "0.5rem" }}>
            Kavin Pradheep S T
          </h3>
          <p style={{ margin: "0.3rem 0" }}>Dept Coordinator<br/>(Developer)<br/></p>
          <p style={{ margin: "0.3rem 0" }}>📞 6369960824</p>
        </div>
      </div>
    </section>
  );
}
