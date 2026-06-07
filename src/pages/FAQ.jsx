import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FAQ() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Internship",
      question: "What is the Vicharanashala Internship?",
      answer:
        "The Vicharanashala Internship is an Applied AI and Open Source Software Engineering internship program.",
    },
    {
      category: "Internship",
      question: "What is VINS?",
      answer:
        "VINS is the online internship track offered through Vicharanashala.",
    },
    {
      category: "NOC",
      question: "Who can sign the NOC?",
      answer:
        "Your HOD, Program Chair, or an authorized college faculty member can sign the NOC.",
    },
    {
      category: "NOC",
      question: "When do I submit the NOC?",
      answer:
        "Submit the NOC before your internship start date through the student portal.",
    },
    {
      category: "Certificate",
      question: "Will I receive a certificate?",
      answer:
        "Yes, eligible interns receive a completion certificate after successfully completing the internship.",
    },
    {
      category: "ViBe",
      question: "How do I log in to ViBe?",
      answer:
        "Use the same email address that you registered with during the internship application process.",
    },
    {
      category: "Team Formation",
      question: "Is team formation compulsory?",
      answer:
        "Yes, team formation is mandatory for Phase 2 project work.",
    },
    {
      category: "Attendance",
      question: "How many hours should I work daily?",
      answer:
        "Typically 4–6 hours per day depending on project requirements and learning activities.",
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase()) ||
      faq.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background:
          "linear-gradient(135deg,#0f172a,#111827,#1e1b4b)",
        color: "white",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h1 style={{ fontSize: "42px" }}>
          Student Help Desk
        </h1>

        <button
          onClick={() =>
            window.open(
              "https://vibe.vicharanashala.ai/student/login?redirect=%2Fstudent%2Fcourse-registration%2F6a055c4c79eef782c2548389",
              "_blank"
            )
          }
          style={{
            padding: "12px 25px",
            border: "none",
            borderRadius: "12px",
            background:
              "linear-gradient(135deg,#8b5cf6,#7c3aed)",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Vibe Course
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search FAQ (NOC, Internship, Certificate...)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "15px",
          fontSize: "16px",
          borderRadius: "12px",
          border: "1px solid #374151",
          background: "#1f2937",
          color: "white",
          marginBottom: "25px",
        }}
      />

      {/* FAQ List */}
      {filteredFaqs.length > 0 ? (
        filteredFaqs.map((faq, index) => (
          <div
            key={index}
            style={{
              background: "#1f2937",
              marginBottom: "15px",
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid #374151",
            }}
          >
            <div
              onClick={() =>
                setOpenIndex(
                  openIndex === index ? null : index
                )
              }
              style={{
                padding: "18px",
                cursor: "pointer",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{faq.question}</span>
              <span>
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <div
                style={{
                  padding: "18px",
                  borderTop: "1px solid #374151",
                  color: "#d1d5db",
                }}
              >
                <p>
                  <strong>Category:</strong>{" "}
                  {faq.category}
                </p>

                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))
      ) : (
        <div
          style={{
            background: "#1f2937",
            padding: "30px",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          <h2>No FAQ Found</h2>

          <p>
            We couldn't find a matching answer.
            Please ask your question directly.
          </p>

          <button
            onClick={() => navigate("/ask")}
            style={{
              marginTop: "20px",
              padding: "12px 24px",
              border: "none",
              borderRadius: "10px",
              background:
                "linear-gradient(135deg,#8b5cf6,#7c3aed)",
              color: "white",
              cursor: "pointer",
            }}
          >
            Ask Your Question
          </button>
        </div>
      )}

      {/* Bottom Button */}
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <button
          onClick={() => navigate("/ask")}
          style={{
            padding: "15px 35px",
            fontSize: "18px",
            border: "none",
            borderRadius: "12px",
            background:
              "linear-gradient(135deg,#8b5cf6,#7c3aed)",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Ask New Question →
        </button>
      </div>
    </div>
  );
}

export default FAQ;