import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = () => {

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!email){
      alert("Enter Email");
      return;
    }

    if(!emailRegex.test(email)){
      alert("Enter Valid Email");
      return;
    }

    if(!password){
      alert("Enter Password");
      return;
    }

    navigate("/faq");
  };

  return (
    <div className="page">
      <div className="card" style={{maxWidth:"450px"}}>

        <h1 className="title">
          Student Help Desk
        </h1>

        <p className="subtitle">
          Sign In To Continue
        </p>

        <input
          className="input"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          className="glow-btn"
          onClick={handleLogin}
          style={{width:"100%"}}
        >
          Sign In
        </button>

      </div>
    </div>
  );
}

export default Login;