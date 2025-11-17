import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
function LoginPage() {
  const [role, setRole] = useState("user");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = () => {
    if (role === "user" && password === "user1234") {
      navigate("/user");
    } else if (role === "admin" && password === "admin4321") {
      navigate("/admin");
    } else {
      alert("Incorrect Password");
    }
  };
  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Login</h2>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="input"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <input
          type="password"
          placeholder="Enter Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}
export default LoginPage;
