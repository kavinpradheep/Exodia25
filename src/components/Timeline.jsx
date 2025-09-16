import React from "react";
import { FaUser, FaCoffee, FaCogs, FaLaptopCode, FaComments } from "react-icons/fa";

const HOURS_START = 8;
const HOURS_END = 17; // up to 5 PM
const hours = Array.from({ length: HOURS_END - HOURS_START + 1 }, (_, i) => HOURS_START + i);

const ROW_HEIGHT = 64;
const GAP = 10;

/* 🟢 DAY 1 TIMELINE */
const day1Events = [
  { name: "Inaugural", start: 9, end: 9.75, color: "#B22222", icon: <FaUser /> }, // 9:00 – 9:45
  { name: "Instruction & Refreshments", start: 9.75, end: 10.25, color: "#6A0DAD", icon: <FaCoffee /> }, // 9:45 – 10:15
  { name: "Paper Presentation", start: 10.5, end: 12.333, color: "#1E90FF", icon: <FaComments /> }, // 10:30 – 12:20
  { name: "Flash Clash", start: 13.5, end: 14.25, color: "#008B8B", icon: <FaLaptopCode /> }, // 1:30 – 2:15
  { name: "ProCoder", start: 14.5, end: 16.25, color: "#DAA520", icon: <FaCogs /> }, // 2:30 – 4:15
  { name: "Circuitrix", start: 14.5, end: 16.25, color: "#FF4500", icon: <FaLaptopCode /> }, // 2:30 – 4:15
];

/* 🟢 DAY 2 TIMELINE */
const day2Events = [
  { name: "Core Clash", start: 9, end: 10.75, color: "#B22222", icon: <FaLaptopCode /> }, // 9:00 – 10:45
  { name: "Soul Sync", start: 11, end: 12.5, color: "#6A0DAD", icon: <FaComments /> }, // 11:00 – 12:30
  { name: "IPL Auction", start: 13.5, end: 14.5, color: "#008B8B", icon: <FaLaptopCode /> }, // 1:30 – 2:30
  { name: "Valedictory", start: 15, end: 16, color: "#DAA520", icon: <FaUser /> }, // 3:00 – 4:00
];

/* 🕒 Format hours to 12hr clock */
function formatHour(hour) {
  let h = Math.floor(hour);
  let suffix = h >= 12 ? "PM" : "AM";
  let displayHour = h % 12 === 0 ? 12 : h % 12;
  return `${displayHour}:00 ${suffix}`;
}

function DayTimeline({ title, events }) {
  const rows = 3;
  const gridHeight = rows * ROW_HEIGHT + (rows - 1) * GAP;

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${hours.length}, 120px)`,
    gridTemplateRows: `repeat(${rows}, ${ROW_HEIGHT}px)`,
    gap: `${GAP}px`,
    position: "relative",
    minWidth: `${hours.length * 120}px`,
  };

  return (
    <div
      style={{
        border: "1px solid rgba(0,212,255,0.15)",
        borderRadius: 20,
        padding: 16,
        marginBottom: 28,
        background: "rgba(5,18,30,0.45)",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.2)",
        overflowX: "auto",
      }}
    >
      <div style={{ color: "#00D4FF", fontWeight: 700, marginBottom: 12, fontSize: 16 }}>
        {title}
      </div>

      {/* Hours labels in 12hr format */}
      <div style={{ display: "flex", marginBottom: 10, minWidth: `${hours.length * 120}px` }}>
        {hours.map((h) => (
          <div
            key={h}
            style={{
              width: 120,
              textAlign: "center",
              color: "rgba(0,212,255,0.85)",
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            {formatHour(h)}
          </div>
        ))}
      </div>

      {/* Events Grid */}
      <div style={{ position: "relative", minWidth: `${hours.length * 120}px` }}>
        {hours.map((_, i) => {
          const left = i * 120;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${left}px`,
                top: 0,
                width: 0,
                height: `${gridHeight}px`,
                borderLeft: "1px solid rgba(0,212,255,0.06)",
                pointerEvents: "none",
              }}
            />
          );
        })}

        <div style={gridStyle}>
          {events.map((ev, i) => {
            const colStart = Math.floor(ev.start) - HOURS_START + 1;
            const colEnd = Math.ceil(ev.end) - HOURS_START + 1;
            const row = (i % 3) + 1;

            return (
              <div
                key={i}
                style={{
                  gridColumn: `${colStart} / ${colEnd}`,
                  gridRow: `${row}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    background: ev.color,
                    color: "white",
                    fontWeight: 600,
                    borderRadius: 14,
                    padding: "6px 10px",
                    fontSize: 12,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>{ev.icon}</span> {ev.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="timeline" style={{ background: "#000F1F", color: "white", padding: "40px 16px" }}>
      <div style={{ maxWidth: 1150, margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#00D4FF",
            fontSize: 22,
            letterSpacing: 2,
            marginBottom: 28,
          }}
        >
          EVENT TIMELINE
        </h2>

        <DayTimeline title="DAY 1" events={day1Events} />
        <DayTimeline title="DAY 2" events={day2Events} />
      </div>
    </section>
  );
}
