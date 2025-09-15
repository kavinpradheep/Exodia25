import React, { useState, useEffect } from "react";
import eventImage from "../assets/event.png";

export default function Landing() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const launchDate = new Date("2025-09-25T09:00:00").getTime();
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
        justifyContent: "center",
      }}
    >
      <img
        src={eventImage}
        alt="EXODIA Event"
        style={{ width: "400px", marginBottom: "2rem" }}
      />
      <h2 style={{ marginBottom: "2rem" }}>Game Starts Soon!!!</h2>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <div
            key={label}
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
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
              <h1 style={{ color: "#00D4FF", margin: 0 }}>
                {timeLeft[label] || "00"}
              </h1>
            </div>
            <p style={{ marginTop: "5px" }}>{label}</p>
          </div>
        ))}
      </div>

      <a
        href="#about"
        style={{
          backgroundColor: "#00D4FF",
          color: "#000F1F",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        Register Now
      </a>
    </section>
  );
}
