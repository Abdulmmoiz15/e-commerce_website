import React from "react";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Category</h3>
      <ul>
        <li>Mobile Accessories</li>
        <li>Electronics</li>
        <li>Home</li>
        <li>Office</li>
      </ul>
      <h3>Brands</h3>
      <ul>
        <li>Samsung</li>
        <li>Apple</li>
        <li>GoPro</li>
      </ul>
      <h3>Features</h3>
      <ul>
        <li>4 GB RAM</li>
        <li>Super Power</li>
        <li>Large Memory</li>
      </ul>
      <h3>Price Range</h3>
      <input type="number" placeholder="Min" />
      <input type="number" placeholder="Max" />
      <button>Apply</button>
    </aside>
  );
}

export default Sidebar;
