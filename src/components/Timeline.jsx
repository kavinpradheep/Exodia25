import React from "react";
import { FaUser, FaCoffee, FaCogs, FaLaptopCode, FaComments } from "react-icons/fa";

const HOURS_START = 8;
const HOURS_END = 15; // extended till 3pm
const hours = Array.from({ length: HOURS_END - HOURS_START + 1 }, (_, i) => HOURS_START + i);

const ROW_HEIGHT = 64;
const GAP = 10;

const day1Events = [
  { name: "Inauguration", start: 8, end: 9, color: "#B22222", icon: <FaUser /> },
  { name: "Workshop A", start: 9, end: 11, color: "#6A0DAD", icon: <FaCogs /> },
  { name: "Panel Discussion", start: 10, end: 11, color: "#1E90FF", icon: <FaComments /> },
  { name: "Coding Challenge", start: 11, end: 13, color: "#008B8B", icon: <FaLaptopCode /> },
  { name: "Lunch", start: 13, end: 14, color: "#DAA520", icon: <FaCoffee /> },
];

const day2Events = [
  { name: "Inauguration", start: 8, end: 9, color: "#B22222", icon: <FaUser /> },
  { name: "Tech Quiz", start: 9, end: 10, color: "#1E90FF", icon: <FaComments /> },
  { name: "Hackathon Start", start: 10, end: 13, color: "#008B8B", icon: <FaLaptopCode /> },
  { name: "Networking", start: 11, end: 12, color: "#6A0DAD", icon: <FaCogs /> },
  { name: "Lunch", start: 13, end: 14, color: "#DAA520", icon: <FaCoffee /> },
];

function DayTimeline({ title, events }) {
  const rows = 3;
  const gridHeight = rows * ROW_HEIGHT + (rows - 1) * GAP;

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${hours.length}, 120px)`, // fixed width per hour (scrollable on mobile)
    gridTemplateRows: `repeat(${rows}, ${ROW_HEIGHT}px)`,
    gap: `${GAP}px`,
    position: "relative",
    minWidth: `${hours.length * 120}px`, // ensures scroll width
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
        overflowX: "auto", // enable scroll
      }}
    >
      <div style={{ color: "#00D4FF", fontWeight: 700, marginBottom: 12, fontSize: 16 }}>
        {title}
      </div>

      {/* Hours labels (scrollable too) */}
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
            {h}:00
          </div>
        ))}
      </div>

      {/* Events Grid */}
      <div style={{ position: "relative", minWidth: `${hours.length * 120}px` }}>
        {/* Vertical lines */}
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
            const colStart = ev.start - HOURS_START + 1;
            const colEnd = Math.max(ev.end - HOURS_START + 1, colStart + 1);
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
    <section id="timeline" style={{ background: "#00111b", color: "white", padding: "40px 16px" }}>
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
