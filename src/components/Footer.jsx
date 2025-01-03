import React from 'react';
import {
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaGooglePlay,
  FaApple,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light py-5 border-top">
      <div className="container">
        {/* Newsletter Section */}
        <div className="text-center bg-white p-4 rounded shadow-sm mb-5">
          <h2 className="h5">Subscribe to Our Newsletter</h2>
          <p className="text-muted">
            Get daily updates on upcoming offers from suppliers worldwide.
          </p>
          <div className="d-flex justify-content-center mt-3">
            <input
              type="email"
              className="form-control w-auto me-2"
              placeholder="Enter your email"
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="row">
          {/* Brand Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <img
              src="/src/logo-colored.png"
              alt="Logo"
              className="img-fluid mb-3"
              style={{ maxWidth: '150px' }}
            />
            <p className="text-muted">
              Best information about the company goes here. Currently, we are
              using lorem ipsum.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-primary fs-4" />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="text-info fs-4" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin className="text-primary fs-4" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-danger fs-4" />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube className="text-danger fs-4" />
              </a>
            </div>
          </div>

          {/* About Section */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">About</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">About Us</a></li>
              <li><a href="#" className="text-muted">Find Store</a></li>
              <li><a href="#" className="text-muted">Categories</a></li>
              <li><a href="#" className="text-muted">Blogs</a></li>
            </ul>
          </div>

          {/* Partnership Section */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Partnership</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">About Us</a></li>
              <li><a href="#" className="text-muted">Find Store</a></li>
              <li><a href="#" className="text-muted">Categories</a></li>
              <li><a href="#" className="text-muted">Blogs</a></li>
            </ul>
          </div>

          {/* Information Section */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Information</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">Help Center</a></li>
              <li><a href="#" className="text-muted">Money Refund</a></li>
              <li><a href="#" className="text-muted">Shipping</a></li>
              <li><a href="#" className="text-muted">Contact Us</a></li>
            </ul>
          </div>

          {/* User Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">For Users</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">Login</a></li>
              <li><a href="#" className="text-muted">Register</a></li>
              <li><a href="#" className="text-muted">Settings</a></li>
              <li><a href="#" className="text-muted">My Orders</a></li>
            </ul>
            <div className="mt-4 d-flex gap-2">
              {/* Google Play Button */}
              <button className="btn btn-dark d-flex align-items-center">
                <FaGooglePlay className="me-2" />
                <span className="text-white small">Get it on Google Play</span>
              </button>
              {/* App Store Button */}
              <button className="btn btn-dark d-flex align-items-center">
                <FaApple className="me-2" />
                <span className="text-white small">Download from App Store</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
