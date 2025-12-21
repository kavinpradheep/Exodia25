import React, { useState, useEffect } from "react";
import eventImage from "../assets/event.png";

export default function Landing() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const launchDate = new Date("2026-01-03T09:00:00").getTime();
    const now = new Date().getTime();
    const difference = launchDate - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="landing"
      style={{
        minHeight: "100vh",
        backgroundColor: "#000F1F",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "2rem",
      }}
    >
      <img
        src={eventImage}
        alt="EXODIA Event"
        className="event-image"
        style={{
          width: "80%",
          maxWidth: "500px",
          margin: "0.5rem 0",
        }}
      />

      <h2 style={{ margin: "0.2rem 0", fontSize: "2rem", textAlign: "center" }}>
        Get Ready for EXODIA'26!
      </h2>
      <p
        style={{
          fontSize: "1rem",
          fontWeight: "500",
          color: "#00D4FF",
          margin: "0.5rem 0 1rem 0",
          textAlign: "center",
        }}
      >
        📅 January 03 2026
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <div
            key={label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                backgroundColor: "#2c2c44",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
              }}
            >
              <h1 style={{ color: "#00D4FF", margin: 0, fontSize: "1.2rem" }}>
                {timeLeft[label] || "00"}
              </h1>
            </div>
            <p style={{ marginTop: "5px", fontSize: "0.9rem" }}>{label}</p>
          </div>
        ))}
      </div>

      <button
        onClick={scrollToAbout}
        style={{
          backgroundColor: "#00D4FF",
          color: "#000F1F",
          padding: "8px 16px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        Register Now
      </button>

      {/* Responsive image fix */}
      <style>
        {`
          @media (max-width: 768px) {
            .event-image {
              width: 90%; /* slightly bigger on mobile */
              max-width: 550px;
            }
          }
        `}
      </style>
    </section>
  );
}
