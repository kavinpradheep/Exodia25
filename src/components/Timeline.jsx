import React from "react";
import { FaUser, FaCoffee, FaCogs, FaLaptopCode, FaComments, FaRocket, FaClipboardList } from "react-icons/fa";

const PIXELS_PER_HOUR = 240; 
const MIN_WIDTH = 60; 
const ROW_HEIGHT = 70; 
const GAP = 15; 

// Main timeline events
const events = [
  { name: "Assemble", start: 9.10, end: 9.59, color: "#B22222", icon: <FaUser /> },
  { name: "Refreshment", start: 9.60, end: 10.09, color: "#DAA520", icon: <FaCoffee /> },
  { name: "Paper Presentation", start: 10.10, end: 12.10, color: "#1E90FF", icon: <FaComments /> },
  { name: "Project Presentation", start: 10.10, end: 12.10, color: "#FF4500", icon: <FaComments /> },
  { name: "Lunch", start: 12.11, end: 13.61, color: "#228B22", icon: <FaCoffee /> },
  { name: "Flash Clash", start: 13.62, end: 14.11, color: "#008B8B", icon: <FaUser /> },
  { name: "Soul Sync", start: 13.62, end: 14.11, color: "#DAA520", icon: <FaUser /> },
  { name: "Refreshment", start: 14.12, end: 14.61, color: "#6A0DAD", icon: <FaCoffee /> }, 
  { name: "CodeUp", start: 14.62, end: 15.61, color: "#DAA520", icon: <FaCogs /> },
  { name: "Circuitrix", start: 14.62, end: 15.61, color: "#FF4500", icon: <FaLaptopCode /> },
  { name: "Core Clash", start: 14.62, end: 15.61, color: "#B22222", icon: <FaLaptopCode /> },
  { name: "Valedictory", start: 15.62, end: 16.35, color: "#B22222", icon: <FaUser /> },
];

// Hackathon timeline events
const hackathonEvents = [
  { name: "Assemble & Setups", start: 8.7, end: 9.2, color: "#00FFAA", icon: <FaRocket /> },
  { name: "1st Session", start: 9.21, end: 12.57, color: "#1E90FF", icon: <FaRocket /> },
  { name: "Lunch", start: 12.58, end: 13.58, color: "#228B22", icon: <FaCoffee /> },
  { name: "2nd Session", start: 13.59, end: 19.73, color: "#FF4500", icon: <FaRocket /> },
  { name: "Dinner", start: 19.74, end: 20.7, color: "#DAA520", icon: <FaCoffee /> },
  { name: "3rd Session", start: 20.71, end: 24.2, color: "#6A0DAD", icon: <FaRocket /> },
  { name: "DJ", start: 24.21, end: 24.7, color: "#00CED1", icon: <FaComments /> },
  { name: "4th Session", start: 24.71, end: 31.2, color: "#008B8B", icon: <FaRocket /> },
  { name: "Breakfast", start: 31.21, end: 32.7, color: "#228B22", icon: <FaCoffee /> },
  { name: "5th Session", start: 32.71, end: 37.43, color: "#B22222", icon: <FaRocket /> },
  { name: "Lunch", start: 37.44, end: 38.2, color: "#228B22", icon: <FaCoffee /> },
  { name: "Final", start: 38.21, end: 39.3, color: "#FF4500", icon: <FaRocket /> },
];

function formatHour(hour) {
  const day = Math.floor(hour / 24) + 1; // Day number
  const hourInDay = hour % 24;
  const h = Math.floor(hourInDay);
  const m = Math.round((hourInDay - h) * 60);
  const suffix = h >= 12 ? "PM" : "AM";
  const displayHour = h % 12 === 0 ? 12 : h % 12;
  const displayMin = m === 0 ? "00" : m;
  return `${displayHour}:${displayMin} ${suffix}`;
}


function TimelineGrid({ events, hoursStart = 8, hoursEnd = 17, maxRows }) {
  const rows = [];
  const eventRows = events.map(ev => {
    const rowIndex = rows.findIndex(row => !row.some(e => !(ev.end <= e.start || ev.start >= e.end)));
    if (rowIndex >= 0) {
      rows[rowIndex].push({ start: ev.start, end: ev.end });
      return rowIndex + 1;
    }
    rows.push([{ start: ev.start, end: ev.end }]);
    return rows.length;
  });

  const totalHours = hoursEnd - hoursStart;
  const containerHeight = maxRows * ROW_HEIGHT + (maxRows - 1) * GAP;

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
        overflowY: "visible",
        height: containerHeight,
      }}
    >
      {/* Hours labels */}
      <div style={{ display: "flex", marginBottom: 10, minWidth: `${totalHours * PIXELS_PER_HOUR}px` }}>
        {Array.from({ length: totalHours * 2 }, (_, i) => hoursStart + i * 0.5).map((h, i) => (
          <div
            key={i}
            style={{
              width: PIXELS_PER_HOUR / 2,
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

      {/* Event blocks */}
      <div style={{ position: "relative", minWidth: `${totalHours * PIXELS_PER_HOUR}px`, height: containerHeight }}>
        {events.map((ev, i) => {
          const row = eventRows[i];
          const width = Math.max((ev.end - ev.start) * PIXELS_PER_HOUR, MIN_WIDTH);
          const left = (ev.start - hoursStart) * PIXELS_PER_HOUR;

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                top: (row - 1) * (ROW_HEIGHT + GAP),
                left,
                width,
                height: ROW_HEIGHT,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "4px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  background: ev.color,
                  color: "white",
                  fontWeight: 600,
                  borderRadius: 14,
                  padding: "4px 6px",
                  fontSize: Math.min(12, width / 10),
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <span>{ev.icon}</span> {ev.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Timeline() {
  const calculateMaxRows = eventsList => {
    const rows = [];
    eventsList.forEach(ev => {
      const rowIndex = rows.findIndex(row => !row.some(e => !(ev.end <= e.start || ev.start >= e.end)));
      if (rowIndex >= 0) {
        rows[rowIndex].push({ start: ev.start, end: ev.end });
      } else {
        rows.push([{ start: ev.start, end: ev.end }]);
      }
    });
    return rows.length;
  };

  const maxRows = Math.max(calculateMaxRows(events), calculateMaxRows(hackathonEvents));

  return (
    <section style={{ background: "#000F1F", color: "white", padding: "40px 16px" }}>
      <div style={{ maxWidth: 1150, margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "2.5rem", fontWeight: "bold" }}>
          Event Timeline
        </h2>

        {/*
        <h3 style={{ marginBottom: 16, color: "#00FFAA" }}>Hackathon Timeline</h3>
        <p>📅 January 3 2026</p>
        <TimelineGrid events={hackathonEvents} hoursStart={8} hoursEnd={40.5} maxRows={maxRows - 1} />
        */}

        <h3 style={{ marginBottom: 16, color: "#00D4FF" }}>Main Events</h3>
        <p>📅 January 3 2026</p>
        <TimelineGrid events={events} hoursStart={8.5} hoursEnd={16.5} maxRows={maxRows + 1} />

      </div>
    </section>
  );
}
