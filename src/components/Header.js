import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <input type="text" className="search-bar" placeholder="Search..." />
      <div className="header-icons">
        <span className="notification-icon">🔔</span>
        <div className="user-profile">C</div>
      </div>
    </div>
  );
};

export default Header;
