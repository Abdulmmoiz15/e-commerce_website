import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Brand</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className="nav">
        <span>All Categories</span>
        <span>Offers</span>
        <span>Projects</span>
        <span>Menu Item</span>
      </div>
    </header>
  );
}

export default Header;
