import { useState } from "react";

export default function EventsRegistration() {
  const [selectedDay, setSelectedDay] = useState("day1");

  // 🎯 Events structured by days (with rules from PDF)
  const events = {
    day1: {
      technical: [
        {
          name: "Paper Presentation",
          fee: "₹100",
          description: "Presentation of research papers or innovative technical ideas.",
          participants: "2-3 members",
          duration: "10 mins",
          icon: "📄",
          rules: [
            "Papers must be original.",
            "Time limit: 10 minutes per team.",
            "Q&A for 2 minutes after presentation.",
            "Bring your own PPT/Materials."
          ]
        },
        {
          name: "ProCoder",
          fee: "₹100",
          description: "Coding competition to test problem-solving & logic.",
          participants: "1-2 members",
          duration: "1 hour",
          icon: "💻",
          rules: [
            "No plagiarism allowed.",
            "Internet access is restricted.",
            "Multiple rounds including debugging & logic building."
          ]
        },
        {
          name: "Circuitrix",
          fee: "₹100",
          description: "Circuit debugging and electronics challenge.",
          participants: "1-2 members",
          duration: "2 hours",
          icon: "🔌",
          rules: [
            "Tools & components will be provided.",
            "No calculators or mobile phones allowed.",
            "Evaluation based on accuracy & speed."
          ]
        }
      ],
      nontechnical: [
        {
          name: "Code Clash",
          fee: "₹150",
          description: "Design a 2D model in AutoCAD based on department domain.",
          participants: "Individual",
          duration: "1.45 hours",
          icon: "📐",
          rules: [
            "Theme will be announced on the spot.",
            "No pre-made templates allowed.",
            "Judging based on creativity & accuracy."
          ]
        }
      ]
    },
    day2: {
      technical: [
        {
          name: "Flash Clash",
          fee: "₹100",
          description: "Fast-paced quiz on technical & general knowledge.",
          participants: "Team or individual",
          duration: "45 mins",
          icon: "❓",
          rules: [
            "Prelims (written), followed by buzzer rounds.",
            "Negative marking in finals.",
            "No gadgets allowed."
          ]
        }
      ],
      nontechnical: [
        {
          name: "Soul Sync",
          fee: "₹150",
          description: "Fun creativity + coordination event with surprise tasks.",
          participants: "2-5 members",
          duration: "1.5 hours",
          icon: "🎭",
          rules: [
            "Tasks will be revealed on spot.",
            "Judging based on creativity & coordination.",
            "Decision of judges will be final."
          ]
        },
        {
          name: "IPL Auction",
          fee: "₹100",
          description: "Strategy event where teams act as franchise owners and bid for players.",
          participants: "3-4 members",
          duration: "1 hour",
          icon: "📱",
          rules: [
            "Virtual budget will be provided.",
            "No exceeding the team size.",
            "Auctioneer’s decision is final."
          ]
        }
      ]
    }
  };

  const hackathonEvent = {
    name: "Hackathon 30-Hour Challenge",
    fee: "₹300 per team",
    description: "Collaborate, code, and innovate in a 30-hour hackathon.",
    participants: "4 members per team",
    duration: "30 hours",
    icon: "🚀",
    rules: [
      "Teams must consist of 4 members.",
      "Original ideas only (no plagiarism).",
      "Coding duration: 30 hours continuously.",
      "Final presentation to judges is mandatory."
    ]
  };

  const currentDayEvents = events[selectedDay];

  return (
    <section
      id="events"
      style={{
        minHeight: "100vh",
        padding: "5rem 2rem",
        backgroundColor: "#000F1F",
        textAlign: "center",
        color: "white"
      }}
    >
      {/* --- CSS for Event Cards --- */}
      <style>
        {`
          .event-card {
            background-color: #001a33;
            border-radius: 10px;
            width: 280px;
            height: 340px;
            overflow: hidden;
            position: relative;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 6px rgba(0,0,0,0.5);
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
          .rules {
            flex: 1;
            overflow-y: auto;
            margin: 0.5rem 0;
            padding-right: 5px;
            font-size: 0.85rem;
            text-align: left;
            color: #ddd;
          }
          .rules::-webkit-scrollbar {
            width: 6px;
          }
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
          }
        `}
      </style>

      <h2 style={{ fontSize: "3rem", marginBottom: "2rem" }}>Events</h2>

      {/* --- Day Toggle --- */}
      <div style={{ marginBottom: "3rem" }}>
        <button
          onClick={() => setSelectedDay("day1")}
          style={{
            backgroundColor: selectedDay === "day1" ? "#00D4FF" : "#1E293B",
            color: "#000F1F",
            padding: "10px 20px",
            marginRight: "1rem",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Day 1
        </button>
        <button
          onClick={() => setSelectedDay("day2")}
          style={{
            backgroundColor: selectedDay === "day2" ? "#FFD700" : "#1E293B",
            color: "#000F1F",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Day 2
        </button>
      </div>

      {/* --- Technical Events --- */}
      <div style={{ marginBottom: "4rem" }}>
        <h3 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#00D4FF" }}>
          Technical Events
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
          {currentDayEvents.technical.map((event, index) => (
            <div key={index} className="event-card">
              {/* Front */}
              <div className="event-front">
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{event.icon}</div>
                <h4>{event.name}</h4>
                <p style={{ fontSize: "0.9rem", color: "#aaa" }}>{event.description}</p>
                <p><strong>Fee:</strong> {event.fee}</p>
                <p><strong>Duration:</strong> {event.duration}</p>
              </div>
              {/* Back */}
              <div className="event-back">
                <div className="rules">
                  <p><strong>Description:</strong> {event.description}</p>
                  <p><strong>Max Count:</strong> {event.participants}</p>
                  {event.rules && (
                    <ul>
                      {event.rules.map((rule, i) => (
                        <li key={i}>{rule}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <button className="register-btn">Register</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Non-Technical Events --- */}
      <div style={{ marginBottom: "4rem" }}>
        <h3 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#FFD700" }}>
          Non-Technical Events
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
          {currentDayEvents.nontechnical.map((event, index) => (
            <div key={index} className="event-card">
              {/* Front */}
              <div className="event-front">
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{event.icon}</div>
                <h4>{event.name}</h4>
                <p style={{ fontSize: "0.9rem", color: "#aaa" }}>{event.description}</p>
                <p><strong>Fee:</strong> {event.fee}</p>
                <p><strong>Duration:</strong> {event.duration}</p>
              </div>
              {/* Back */}
              <div className="event-back">
                <div className="rules">
                  <p><strong>Description:</strong> {event.description}</p>
                  <p><strong>Max Count:</strong> {event.participants}</p>
                  {event.rules && (
                    <ul>
                      {event.rules.map((rule, i) => (
                        <li key={i}>{rule}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <button className="register-btn">Register</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Hackathon --- */}
      <div>
        <h3 style={{ fontSize: "2.5rem", marginBottom: "1.5rem", color: "#00FFAA" }}>
          Hackathon
        </h3>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
          <div className="event-card" style={{ width: "300px", height: "360px" }}>
            {/* Front */}
            <div className="event-front">
              <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{hackathonEvent.icon}</div>
              <h4>{hackathonEvent.name}</h4>
              <p style={{ fontSize: "0.9rem", color: "#aaa" }}>{hackathonEvent.description}</p>
              <p><strong>Fee:</strong> {hackathonEvent.fee}</p>
              <p><strong>Duration:</strong> {hackathonEvent.duration}</p>
            </div>
            {/* Back */}
            <div className="event-back">
              <div className="rules">
                <p><strong>Description:</strong> {hackathonEvent.description}</p>
                <p><strong>Max Count:</strong> {hackathonEvent.participants}</p>
                <ul>
                  {hackathonEvent.rules.map((rule, i) => (
                    <li key={i}>{rule}</li>
                  ))}
                </ul>
              </div>
              <button className="register-btn">Register</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
