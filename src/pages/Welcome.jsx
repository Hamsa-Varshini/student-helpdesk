import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Overview",
      text: "What the internship is, who it's for, and how the selection process works.",
      icon: "O",
      color: "#059669",
      onClick: () => navigate("/overview"),
    },
    {
      title: "FAQ",
      text: "The questions candidates ask most often: NOC, dates, stipend, certificates, answered.",
      icon: "?",
      color: "#f59e0b",
      onClick: () => navigate("/faq"),
    },
    {
      title: "Query support",
      text: "Type a question in plain English. Our AI answers from the same material.",
      icon: "AI",
      color: "#2563eb",
      onClick: () => navigate("/ask"),
    },
    {
      title: "ViBe",
      text: "Explore updates, announcements and intern life.",
      icon: "V",
      color: "#7c3aed",
      onClick: () =>
        window.open(
          "https://vibe.vicharanashala.ai/auth",
          "_blank"
        ),
    },
  ];

  return (
    <div className="welcome-page">
      <main className="welcome-main">

        <h1 className="welcome-heading">Welcome to Samagama!</h1>

        <p className="welcome-copy">
          Almost every question we get has been asked before, usually by someone
          else, fifteen minutes earlier. Take a look here first.
        </p>

        <div className="welcome-divider" />

        <section className="welcome-cards">
          {cards.map((card) => (
            <button
              key={card.title}
              onClick={card.onClick}
              className="welcome-card"
            >
              <span
                className="welcome-card-icon"
                style={{ background: card.color }}
              >
                {card.icon}
              </span>

              <span className="welcome-card-content">
                <span className="welcome-card-title">{card.title}</span>
                <span className="welcome-card-text">{card.text}</span>
              </span>

              <span className="welcome-card-arrow">&gt;</span>
            </button>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Welcome;
