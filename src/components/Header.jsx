import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      {/* Brand Section */}
      <div className="logo">
        <img
         src="/logo.png" // Replace with your brand icon
          alt="Brand Logo"
          className="logo-icon"
        />
        <span className="brand-text">Brand</span>
      </div>

      {/* Search Bar Section */}
      <div className="search-bar">
        <input type="text" placeholder="Search" className="search-input" />
        <select className="category-select">
          <option value="all">All category</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
        </select>
        <button className="search-button">Search</button>
      </div>

      {/* Profile/Navigation Section */}
      <div className="nav-icons">
        <span>Profile</span>
        <span>Message</span>
        <span>Orders</span>
        <span>My cart</span>
      </div>
    </header>
  );
}

export default Header;
