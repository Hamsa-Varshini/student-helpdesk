import { useState } from "react";
import "../App.css";

function Chat(){

  const [message,setMessage] = useState("");
  const [response,setResponse] = useState("");
  const [file,setFile] = useState(null);

  const sendMessage = () => {

    if(!message && !file){
      alert("Enter Question Or Upload File");
      return;
    }

    setResponse(
      "AI Response for: " + message
    );
  };

  return(
    <div className="page">

      <div className="card">

        <h1 className="title">
          Student AI Mentor
        </h1>

        <textarea
          className="textarea"
          placeholder="Ask anything..."
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
        />

        <br /><br />

        <input
          type="file"
          onChange={(e)=>
            setFile(e.target.files[0])
          }
        />

        <br />

        <button
          className="glow-btn"
          onClick={sendMessage}
        >
          Send
        </button>

        <div
          style={{
            marginTop:"30px",
            padding:"20px",
            background:"#fffaf3",
            border:"1px solid #e5ded2",
            borderRadius:"15px",
            color:"#111827"
          }}
        >
          <h2>AI Response</h2>

          <p>{response}</p>

          {file &&
            <p>
              Uploaded File:
              {" "}
              {file.name}
            </p>
          }
        </div>

      </div>

    </div>
  );
}

export default Chat;
