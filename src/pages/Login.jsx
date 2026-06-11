import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "./Login.css";
import heroImage from "../assets/image.png";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      alert("Enter Email");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Enter Valid Email");
      return;
    }

    if (!password) {
      alert("Enter Password");
      return;
    }

    navigate("/welcome");
  };

  return (
    <div className="page">
      <div className="auth-container">
        <div className="card auth-card">

          <h1 className="title">
            SAMAGAMA
          </h1>

          <p className="subtitle">
            Sign In To Continue
          </p>

        <input
          className="input"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="glow-btn full-width-btn"
          onClick={handleLogin}
        >
          Sign In
        </button>

        <div className="auth-footer">
          <p className="auth-footer-text">
            Have you not signed in yet?{' '}
            <button
              type="button"
              className="link-button"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </button>
          </p>
        </div>

        </div>

        <div className="auth-side">
          <img className="login-side-image" src={heroImage} alt="Login illustration" />
        </div>
      </div>
    </div>
  );
}

export default Login;
