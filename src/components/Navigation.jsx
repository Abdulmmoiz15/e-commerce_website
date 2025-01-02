import React from "react";
import "../styles/Navigation.css";

const Navigation = () => {
  const menuItems = [
    "All Categories",
    "Hot Offers",
    "Gift Boxes",
    "Projects",
    "Menu Item",
  ];

  return (
    <div className="navigation">
      <ul className="navigation-list">
        {menuItems.map((item, index) => (
          <li key={index} className="navigation-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
