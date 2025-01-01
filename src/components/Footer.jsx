import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>About</h3>
        <p>Best information about our company.</p>
      </div>
      <div>
        <h3>Contact</h3>
        <p>Email: contact@brand.com</p>
      </div>
      <div>
        <h3>Download App</h3>
        <button>App Store</button>
        <button>Google Play</button>
      </div>
    </footer>
  );
}

export default Footer;
