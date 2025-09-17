import React from "react";

export default function Contact() {
  const contacts = [
    {
      name: "Bharath. N. K",
      role: "Chairperson",
      email: "bharathnk.22aim@kongu.edu",
    },
    {
      name: "Sharni. K",
      role: "Secretary",
      phone: "7708042415",
    },
    {
      name: "Tamilarasi. P",
      role: "Executive Head",
      phone: "9790615149",
    },
    {
      name: "Kavin Pradheep S T",
      role: "Dept Coordinator (Developer)",
      phone: "6369960824",
    },
  ];

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
          gridTemplateColumns: "repeat(2, 1fr)", // 2 cards per row on desktop
          gap: "1.5rem",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {contacts.map((contact, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#0a1a2f",
              padding: "1.5rem",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 212, 255, 0.15)",
              transition: "transform 0.3s ease",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "160px",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <h3 style={{ color: "#00D4FF", marginBottom: "0.5rem" }}>{contact.name}</h3>
            <p style={{ margin: "0.3rem 0" }}>{contact.role}</p>
            {contact.email && <p style={{ margin: "0.3rem 0" }}>📧 {contact.email}</p>}
            {contact.phone && <p style={{ margin: "0.3rem 0" }}>📞 {contact.phone}</p>}
          </div>
        ))}
      </div>

      {/* Responsive Fix */}
      <style>
        {`
          @media (max-width: 768px) {
            #contact > div {
              grid-template-columns: 1fr; // 1 card per row on mobile
            }
          }
        `}
      </style>
    </section>
  );
}
