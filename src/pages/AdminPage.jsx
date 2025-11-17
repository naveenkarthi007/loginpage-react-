import React from "react";
import "../styles/AdminPage.css";
import { SiTicktick } from "react-icons/si";
function AdminPage() {
  return (
    <div className="admin-container">
      <div className="admin-card">
        <h1 className="admin-title"><SiTicktick />Admin Dashboard</h1>
        <p className="admin-subtitle">Manage everything from one place</p>
        <div className="admin-actions">
          <button className="admin-btn">Users</button>
          <button className="admin-btn">Content</button>
          <button className="admin-btn">Settings</button>
          <button className="admin-btn danger">Logout</button>
        </div>
      </div>
    </div>
  );
}
export default AdminPage;
