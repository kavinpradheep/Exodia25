import { useState } from "react";

export default function EventsRegistration() {
  const [selectedCategory, setSelectedCategory] = useState("tech");

  const techEvents = {
    day1: [
      {
        name: "Paper Presentation",
        fee: "₹100",
        description: "Present your research and innovative ideas",
        category: "Technical",
        participants: "1-2 members",
        duration: "15 mins",
        icon: "📄"
      },
      {
        name: "Coding Challenge",
        fee: "₹150",
        description: "Test your programming skills across multiple languages",
        category: "Technical",
        participants: "Individual",
        duration: "3 hours",
        icon: "💻"
      }
    ],
    day2: [
      {
        name: "Tech Quiz",
        fee: "₹100",
        description: "Test your knowledge across various technical domains",
        category: "Technical",
        participants: "2-3 members",
        duration: "1.5 hours",
        icon: "❓"
      },
      {
        name: "Cultural Showcase",
        fee: "₹100",
        description: "Display your artistic talents and creativity",
        category: "Cultural",
        participants: "Individual/Team",
        duration: "Varies",
        icon: "🎭"
      },
      {
        name: "Gaming Tournament",
        fee: "₹200",
        description: "Compete in popular esports titles",
        category: "Gaming",
        participants: "Individual/Team",
        duration: "4 hours",
        icon: "🎮"
      }
    ]
  };

  const nonTechEvents = {
    day1: [
      {
        name: "Escape Room",
        fee: "₹200",
        description: "Solve puzzles and escape within the time limit",
        category: "Non-Technical",
        participants: "4-6 members",
        duration: "45 mins",
        icon: "🔐"
      },
      {
        name: "Treasure Hunt",
        fee: "₹150",
        description: "Adventure-based problem solving across campus",
        category: "Non-Technical",
        participants: "3-4 members",
        duration: "2 hours",
        icon: "🗡️"
      },
      {
        name: "IPL Auction",
        fee: "₹100",
        description: "Build your dream cricket team through strategic bidding",
        category: "Non-Technical",
        participants: "8-12 teams",
        duration: "2 hours",
        icon: "📱"
      }
    ],
    day2: [
      {
        name: "Escape Room",
        fee: "₹200",
        description: "Solve puzzles and escape within the time limit",
        category: "Non-Technical",
        participants: "4-6 members",
        duration: "45 mins",
        icon: "🔐"
      },
      {
        name: "Treasure Hunt",
        fee: "₹150",
        description: "Adventure-based problem solving across campus",
        category: "Non-Technical",
        participants: "3-4 members",
        duration: "2 hours",
        icon: "🗡️"
      },
      {
        name: "IPL Auction",
        fee: "₹100",
        description: "Build your dream cricket team through strategic bidding",
        category: "Non-Technical",
        participants: "8-12 teams",
        duration: "2 hours",
        icon: "📱"
      }
    ]
  };

  const currentEvents = selectedCategory === "tech" ? techEvents : nonTechEvents;

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
      <h2 style={{ fontSize: "3rem", marginBottom: "2rem" }}>Events</h2>

      {/* Category Toggle */}
      <div style={{ marginBottom: "3rem" }}>
        <button
          onClick={() => setSelectedCategory("tech")}
          style={{
            backgroundColor: selectedCategory === "tech" ? "#00D4FF" : "#1E293B",
            color: "#000F1F",
            padding: "10px 20px",
            marginRight: "1rem",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Technical
        </button>
        <button
          onClick={() => setSelectedCategory("nontech")}
          style={{
            backgroundColor:
              selectedCategory === "nontech" ? "#FFD700" : "#1E293B",
            color: "#000F1F",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Non-Technical
        </button>
      </div>

      {/* Day 1 */}
      <div style={{ marginBottom: "4rem" }}>
        <h3 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Day 1</h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem"
          }}
        >
          {currentEvents.day1.map((event, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#001A33",
                padding: "1.5rem",
                borderRadius: "10px",
                width: "250px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.5)",
                textAlign: "center"
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                {event.icon}
              </div>
              <h4 style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
                {event.name}
              </h4>
              <p style={{ fontSize: "0.9rem", color: "#aaa" }}>
                {event.description}
              </p>
              <p style={{ margin: "0.5rem 0", fontSize: "0.85rem" }}>
                <strong>Fee:</strong> {event.fee}
              </p>
              <p style={{ fontSize: "0.85rem" }}>
                <strong>Duration:</strong> {event.duration}
              </p>
              <button
                style={{
                  backgroundColor: "#00D4FF",
                  color: "#000F1F",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  marginTop: "1rem"
                }}
              >
                Register
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Day 2 */}
      <div>
        <h3 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Day 2</h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem"
          }}
        >
          {currentEvents.day2.map((event, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#001A33",
                padding: "1.5rem",
                borderRadius: "10px",
                width: "250px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.5)",
                textAlign: "center"
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                {event.icon}
              </div>
              <h4 style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
                {event.name}
              </h4>
              <p style={{ fontSize: "0.9rem", color: "#aaa" }}>
                {event.description}
              </p>
              <p style={{ margin: "0.5rem 0", fontSize: "0.85rem" }}>
                <strong>Fee:</strong> {event.fee}
              </p>
              <p style={{ fontSize: "0.85rem" }}>
                <strong>Duration:</strong> {event.duration}
              </p>
              <button
                style={{
                  backgroundColor: "#FFD700",
                  color: "#000F1F",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  marginTop: "1rem"
                }}
              >
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
