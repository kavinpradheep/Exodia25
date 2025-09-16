import React from "react";
import { FaUser, FaCoffee, FaCogs, FaLaptopCode, FaComments, FaRocket } from "react-icons/fa";

const HOURS_START = 8;
const HOURS_END = 18; // extended to fit last event
const hours = Array.from({ length: HOURS_END - HOURS_START + 1 }, (_, i) => HOURS_START + i);

const ROW_HEIGHT = 64;
const GAP = 10;

const events = [
  { name: "Inaugural", start: 9, end: 9.75, color: "#B22222", icon: <FaUser /> },
  { name: "Instruction & Refreshments", start: 9.75, end: 10.25, color: "#6A0DAD", icon: <FaCoffee /> },
  { name: "Paper Presentation", start: 10.5, end: 12.333, color: "#1E90FF", icon: <FaComments /> },
  { name: "Flash Clash", start: 13.5, end: 14.25, color: "#008B8B", icon: <FaLaptopCode /> },
  { name: "ProCoder", start: 14.5, end: 16.25, color: "#DAA520", icon: <FaCogs /> },
  { name: "Circuitrix", start: 14.5, end: 16.25, color: "#FF4500", icon: <FaLaptopCode /> },
  { name: "Core Clash", start: 12.5, end: 14.25, color: "#B22222", icon: <FaLaptopCode /> },
  { name: "Soul Sync", start: 14.5, end: 16, color: "#6A0DAD", icon: <FaComments /> },
  { name: "IPL Auction", start: 16.25, end: 17.25, color: "#008B8B", icon: <FaLaptopCode /> },
  { name: "Valedictory", start: 17, end: 18, color: "#DAA520", icon: <FaUser /> },
  { name: "Hackathon 30-Hour Challenge", start: 9.75, end: 10.25, color: "#00FFAA", icon: <FaRocket /> },
];

function formatHour(hour) {
  const h = Math.floor(hour);
  const suffix = h >= 12 ? "PM" : "AM";
  const displayHour = h % 12 === 0 ? 12 : h % 12;
  return `${displayHour}:00 ${suffix}`;
}

function TimelineGrid({ events }) {
  const rows = 4; // last row reserved for hackathon
  const gridHeight = rows * ROW_HEIGHT + (rows - 1) * GAP;

  // Array to track events in each row
  const rowAssignments = Array(rows - 1).fill(null).map(() => []);

  // Assign each event to first available row (except hackathon)
  const eventRows = events.map(ev => {
    if (ev.name.includes("Hackathon")) return rows; // last row

    for (let r = 0; r < rows - 1; r++) {
      const overlap = rowAssignments[r].some(e => !(ev.end <= e.start || ev.start >= e.end));
      if (!overlap) {
        rowAssignments[r].push(ev);
        return r + 1;
      }
    }
    return 1; // fallback if all rows overlap (rare)
  });

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
      {/* Hours labels */}
      <div style={{ display: "flex", marginBottom: 10, minWidth: `${hours.length * 120}px` }}>
        {hours.map(h => (
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

      {/* Grid lines */}
      <div style={{ position: "relative", minWidth: `${hours.length * 120}px` }}>
        {hours.map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${i * 120}px`,
              top: 0,
              width: 0,
              height: `${gridHeight}px`,
              borderLeft: "1px solid rgba(0,212,255,0.06)",
              pointerEvents: "none",
            }}
          />
        ))}

        {/* Event blocks */}
        <div style={gridStyle}>
          {events.map((ev, i) => {
            const colStart = Math.floor(ev.start) - HOURS_START + 1;
            const colEnd = Math.ceil(ev.end) - HOURS_START + 1;
            const row = eventRows[i];

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
          style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "2.5rem", fontWeight: "bold" }}
        >
          Event Timeline
        </h2>
        <TimelineGrid events={events} />
      </div>
    </section>
  );
}
