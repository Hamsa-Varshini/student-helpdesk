import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../App.css";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState(location.state?.email || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      alert("Enter Name");
      return;
    }

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

    if (!confirmPassword) {
      alert("Confirm Password");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Signup successful! Please sign in to continue.");
    navigate("/");
  };

  return (
    <div className="page">
      <div className="auth-container">
        <div className="card auth-card">
          <h1 className="title">Create Account</h1>
          <p className="subtitle">Please fill in the required fields to sign up.</p>

          <input
            className="input"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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

          <input
            className="input"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            className="glow-btn full-width-btn"
            onClick={handleSignUp}
          >
            Create Account
          </button>

          <button
            type="button"
            className="link-button back-link"
            onClick={() => navigate("/")}
          >
            Back to sign in
          </button>
        </div>

        <div className="auth-side">
          <div className="auth-side-content">
            <h2 className="auth-side-title">Join the learning experience</h2>
            <p className="auth-side-copy">
              Create your account now to access the full platform, connect with mentors, and explore your next course.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
