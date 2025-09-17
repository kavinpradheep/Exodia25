import { useState } from "react";

export default function EventsRegistration() {
  const [activeCard, setActiveCard] = useState(null);

  // Helper to check if mobile view
  const isMobile = () => window.innerWidth <= 768;

  // Reusable card renderer
  const renderEventCard = (event, key, isHackathon = false) => (
    <div
      key={key}
      className={`event-card ${activeCard === event.name ? "active" : ""}`}
      onClick={() => {
        if (isMobile()) {
          setActiveCard(activeCard === event.name ? null : event.name);
        }
      }}
    >
      {/* --- Front --- */}
      <div className="event-front">
        <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{event.icon}</div>
        <h4>{event.name}</h4>
        <p style={{ fontSize: "0.9rem", color: "#aaa" }}>{event.description}</p>

        {isHackathon ? (
          <>
            <p><strong>Fee:</strong> {event.fee}</p>
            <p><strong>Duration:</strong> {event.duration}</p>
          </>
        ) : (
          <p style={{ color: "#888", marginTop: "1rem" }}>
            {isMobile() ? "Click to view details" : "Hover to view details"}
          </p>
        )}
      </div>

      {/* --- Back --- */}
      <div className="event-back">
        <div className="rules">
          <p><strong>Description:</strong> {event.description}</p>
          <p><strong>Per Team:</strong> {event.participants}</p>
          {event.rules && (
            <ul>
              {event.rules.map((rule, i) => (
                <li key={i}>{rule}</li>
              ))}
            </ul>
          )}
        </div>
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="register-btn"
        >
          Register
        </a>
      </div>
    </div>
  );

  return (
    <section
      id="events"
      style={{
        minHeight: "100vh",
        padding: "5rem 2rem",
        backgroundColor: "#000F1F",
        textAlign: "center",
        color: "white",
      }}
    >
      <style>
        {`
          .event-card {
            background-color: #001a33;
            border-radius: 10px;
            width: 280px;
            height: 360px;
            overflow: hidden;
            position: relative;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 6px rgba(0,0,0,0.5);
            cursor: pointer;
          }
          .event-card:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 15px rgba(0,0,0,0.7);
          }
          .event-front, .event-back {
            position: absolute;
            inset: 0;
            padding: 1rem;
            transition: opacity 0.3s ease;
          }
          .event-front { opacity: 1; }
          .event-card:hover .event-front { opacity: 0; }
          .event-back {
            opacity: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 0.85rem;
          }
          .event-card:hover .event-back { opacity: 1; }
          .event-card.active .event-back {
            opacity: 1;
            display: flex;
            position: relative;
          }
          .rules {
            flex: 1;
            overflow-y: auto;
            margin: 0.5rem 0;
            padding-right: 5px;
            font-size: 0.85rem;
            text-align: left;
            color: #ddd;
          }
          .rules::-webkit-scrollbar { width: 6px; }
          .rules::-webkit-scrollbar-thumb {
            background: #00d4ff;
            border-radius: 3px;
          }
          .register-btn {
            background-color: #FFD700;
            color: #000F1F;
            padding: 8px 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            margin-top: 1rem;
            align-self: center;
            text-decoration: none;
            display: inline-block;
          }
          @media (max-width: 768px) {
            .event-card { height: auto; }
            .event-front, .event-back {
              position: relative;
              opacity: 1 !important;
            }
            .event-back { display: none; }
            .event-card.active .event-back { display: flex; }
          }
        `}
      </style>

      <h2 style={{ fontSize: "3rem", marginBottom: "2rem" }}>Events</h2>

      {/* --- Technical Events --- */}
      <div style={{ marginBottom: "4rem" }}>
        <h3 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#00D4FF" }}>
          Technical Events
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
          {renderEventCard({
            name: "Paper Presentation",
            description: "Paper Presentation has three Categories (Software, Circuit, Core) - Each Category has Three Prizes.",
            participants: "2-3 members",
            icon: "📄",
            link: "https://forms.gle/49y1bZuhyirdb5Dj9",
            rules: [
              "Time limit: 5 minutes per team.",
              "Q&A for 2 minutes after presentation.",
              "Bring your own Laptops.",
              "Fees : Team of 2 - ₹120, Team of 3 - ₹180"
            ]
          }, "paper")}

          {renderEventCard({
            name: "ProCoder",
            description: "Coding competition to test problem-solving & logic.",
            participants: "Individual",
            icon: "💻",
            link: "https://forms.gle/FpM9W7hwSPwmTM987",
            rules: [
              "No plagiarism allowed.",
              "Internet access is restricted.",
              "Multiple rounds including debugging & logic building.",
              "Fees : ₹60"
            ]
          }, "procoder")}

          {renderEventCard({
            name: "Circuitrix",
            description: "Circuit debugging and electronics challenge.",
            participants: "2 members",
            icon: "🔌",
            link: "#",
            rules: [
              "Online Simulation.",
              "Bring your own Laptop's.",
              "Evaluation based on accuracy & speed.",
              "Fees : ₹120"
            ]
          }, "circuitrix")}

          {renderEventCard({
            name: "Core Clash",
            description: "Design a 2D & 3D model in AutoCAD based on department domain.",
            participants: "Individual",
            icon: "📐",
            link: "https://forms.gle/nFuovFt4YtzS8Bwg7",
            rules: [
              "Theme will be announced on the spot.",
              "No pre-made templates allowed.",
              "Judging based on creativity & accuracy.",
              "Fees : ₹60"
            ]
          }, "coreclash")}
        </div>
      </div>

      {/* --- Non-Technical Events --- */}
      <div style={{ marginBottom: "4rem" }}>
        <h3 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#FFD700" }}>
          Non-Technical Events
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
          {renderEventCard({
            name: "Flash Clash",
            description: "Fast-paced quiz on technical & general knowledge.",
            participants: "2 members",
            icon: "❓",
            link: "#",
            rules: [
              "Prelims (written), followed by buzzer rounds.",
              "Negative marking in finals.",
              "No gadgets allowed.",
              "Fees : ₹60 per person"
            ]
          }, "flashclash")}

          {renderEventCard({
            name: "IPL Auction",
            description: "Strategy event where teams act as franchise owners and bid for players.",
            participants: "2-3 members",
            icon: "📱",
            link: "https://forms.gle/C4PqSgPh8r4MgcTB8",
            rules: [
              "Virtual budget will be provided.",
              "No exceeding the team size.",
              "Auctioneer’s decision is final.",
              "Fees : ₹60 per person"
            ]
          }, "iplauction")}
        </div>
      </div>

      {/* --- Hackathon --- */}
      <div>
        <h3 style={{ fontSize: "2.5rem", marginBottom: "1.5rem", color: "#00FFAA" }}>
          Hackathon
        </h3>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
          {renderEventCard({
            name: "Hackathon 30-Hour Challenge",
            fee: "₹100 per team",
            description: "Collaborate, code, and innovate in a 30-hour hackathon.",
            participants: "4 members per team",
            duration: "30 hours",
            icon: "🚀",
            link: "#",
            rules: [
              "Teams Will be Sortlisted for Finale, based on their Workflow, Idealogy, Tech Stack.",
              "Internships will be provided for the Best performing individuals.",
              "Join the Whatsapp group while Registration."
            ]
          }, "hackathon", true)}
        </div>
      </div>
    </section>
  );
}
