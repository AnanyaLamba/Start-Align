import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">TaskMe</h2>
      <ul className="sidebar-menu">
        <li>Dashboard</li>
        <li className="active">Tasks</li>
        <li>Completed</li>
        <li>In Progress</li>
        <li>To Do</li>
        <li>Team</li>
        <li>Trash</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
