import React from "react";
import "../styles/UserPage.css";
import { SiTicktick } from "react-icons/si";
function UserPage() {
  return (
    <div className="user-container">
      <div className="user-card">
        <h1 className="user-title"><SiTicktick />User Dashboard</h1>
        <p className="user-subtitle">Welcome to your personal dashboard</p>
        <div className="user-actions">
          <button className="user-btn">Profile</button>
          <button className="user-btn">My Activity</button>
          <button className="user-btn">Notifications</button>
          <button className="user-btn danger">Logout</button>
        </div>
      </div>
    </div>
  );
}
export default UserPage;
