import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Register.css";
export default function Register() {
  //states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState(false);
  //handleSubmit
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setError(false);
      const res = await axios.post(
        "https://sakthi-blog-application.herokuapp.com/api/auth/register",
        {
          username,
          email,
          password,
        }
      );
      res.data.user && window.location.replace("/login");
    } catch (error) {
      setError(true);
      console.log("Error is:", error);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerform" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your Username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter Your Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter Your Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
        {err && (
          <span
            style={{
              textAlign: "center",
              color: "#afd",
              fontWeight: "bold",
              fontSize: "20px",
              padding: "7px",
            }}
          >
            Something Went Wrong
          </span>
        )}
      </form>
      <button className="LoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}
