import React from "react";

const HOURS_START = 8;
const HOURS_END = 14; 
const hours = Array.from({ length: HOURS_END - HOURS_START + 1 }, (_, i) => HOURS_START + i);

const ROW_HEIGHT = 54;
const GAP = 8;

const day1Events = [
  { name: "Inauguration", start: 8, end: 9 },
  { name: "Workshop A", start: 9, end: 11 },
  { name: "Panel Discussion", start: 10, end: 11 },
  { name: "Coding Challenge", start: 11, end: 13 },
  { name: "Lunch", start: 13, end: 14 },
];

const day2Events = [
  { name: "Inauguration", start: 8, end: 9 },
  { name: "Tech Quiz", start: 9, end: 10 },
  { name: "Hackathon Start", start: 10, end: 13 },
  { name: "Networking", start: 11, end: 12 },
  { name: "Lunch", start: 13, end: 14 },
];

function DayTimeline({ title, events }) {
  const rows = events.length;
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${hours.length}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, ${ROW_HEIGHT}px)`,
    gap: `${GAP}px`,
    position: "relative",
  };

  const gridHeight = rows * ROW_HEIGHT + (rows - 1) * GAP;

  return (
    <div
      style={{
        border: "1px solid rgba(0,212,255,0.15)",
        borderRadius: 20,
        padding: 16,   // 🔹 minimized padding
        marginBottom: 24,
        background: "rgba(5,18,30,0.35)",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.15)",
      }}
    >
      <div style={{ color: "#00D4FF", fontWeight: 700, marginBottom: 10, fontSize: 15 }}>
        {title}
      </div>

      {/* Hours labels */}
      <div style={{ display: "flex", marginBottom: 8 }}>
        {hours.map((h) => (
          <div
            key={h}
            style={{
              flex: 1,
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

      <div style={{ position: "relative" }}>
        {/* vertical lines */}
        {hours.map((_, i) => {
          const leftPercent = (i / hours.length) * 100;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${leftPercent}%`,
                top: 0,
                width: 0,
                height: `${gridHeight}px`,
                borderLeft: "1px solid rgba(0,212,255,0.06)",
                pointerEvents: "none",
              }}
            />
          );
        })}

        {/* events */}
        <div style={gridStyle}>
          {events.map((ev, rowIndex) => {
            const colStart = ev.start - HOURS_START + 1;
            const colEnd = Math.max(ev.end - HOURS_START + 1, colStart + 1);
            return (
              <div
                key={rowIndex}
                style={{
                  gridColumn: `${colStart} / ${colEnd}`,
                  gridRow: `${rowIndex + 1}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "4px 10px",   // 🔹 tighter padding
                    background: "linear-gradient(180deg, #001A33 0%, #002639 100%)",
                    border: "1px solid rgba(0,212,255,0.2)",
                    color: "white",
                    fontWeight: 600,
                    borderRadius: 16,   // 🔹 more rounded
                    boxShadow: "0 3px 8px rgba(0, 0, 0, 0.3)",
                    textAlign: "center",
                    fontSize: 12,
                  }}
                >
                  {ev.name}
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
    <section style={{ background: "#00111b", color: "white", padding: "36px 16px" }}>
      <div style={{ maxWidth: 1050, margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#00D4FF",
            fontSize: 20,
            letterSpacing: 2,
            marginBottom: 24,
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
