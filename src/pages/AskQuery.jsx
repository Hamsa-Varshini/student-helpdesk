import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function AskQuery(){

  const [query,setQuery] = useState("");

  const navigate = useNavigate();

  const submitQuery = () => {

    if(!query){
      alert("Please Enter Question");
      return;
    }

    alert("Question Submitted Successfully");

    localStorage.setItem("query",query);
  };

  return(
    <div className="page">

      <div className="card">

        <h1 className="title">
          Ask Your Question
        </h1>

        <p className="subtitle">
          Describe your issue
        </p>

        <textarea
          className="textarea"
          placeholder="Example: How can I apply for leave?"
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
        />

        <button
          className="glow-btn"
          onClick={submitQuery}
        >
          Submit Question
        </button>

        <button
          className="glow-btn"
          onClick={()=>navigate("/chat")}
          style={{marginLeft:"15px"}}
        >
          Ask AI Mentor
        </button>

        <button
          className="secondary-btn ask-feedback-link"
          onClick={() => navigate("/feedback")}
        >
          Send Feedback
        </button>

      </div>

    </div>
  );
}

export default AskQuery;