import React from 'react';
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGooglePlay, FaApple } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-5 bg-light">
      <div className="container">
        {/* Newsletter Section */}
        <div className="text-center bg-white p-4 rounded shadow-sm mb-4">
          <h2 className="h5 mb-2">Subscribe to our Newsletter</h2>
          <p className="text-muted mb-3">Get daily news on upcoming offers from many suppliers worldwide.</p>
          <div className="d-flex justify-content-center">
            <input
              type="email"
              placeholder="Email"
              className="form-control w-auto me-2"
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <img src="/src/logo-colored.png" alt="Logo" className="img-fluid mb-3" style={{ height: '50px' }} />
            <p className="text-muted">Best information about the company goes here but now lorem ipsum is.</p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" aria-label="Facebook" className="text-muted fs-4"><FaFacebook /></a>
              <a href="#" aria-label="Twitter" className="text-muted fs-4"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn" className="text-muted fs-4"><FaLinkedin /></a>
              <a href="#" aria-label="Instagram" className="text-muted fs-4"><FaInstagram /></a>
              <a href="#" aria-label="YouTube" className="text-muted fs-4"><FaYoutube /></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3">About</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">About Us</a></li>
              <li><a href="#" className="text-muted">Find Store</a></li>
              <li><a href="#" className="text-muted">Categories</a></li>
              <li><a href="#" className="text-muted">Blogs</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3">Partnership</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">About Us</a></li>
              <li><a href="#" className="text-muted">Find Store</a></li>
              <li><a href="#" className="text-muted">Categories</a></li>
              <li><a href="#" className="text-muted">Blogs</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3">Information</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">Help Center</a></li>
              <li><a href="#" className="text-muted">Money Refund</a></li>
              <li><a href="#" className="text-muted">Shipping</a></li>
              <li><a href="#" className="text-muted">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3">For Users</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">Login</a></li>
              <li><a href="#" className="text-muted">Register</a></li>
              <li><a href="#" className="text-muted">Settings</a></li>
              <li><a href="#" className="text-muted">My Orders</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">Mobile Apps</h5>
            <div className="d-flex flex-column gap-2">
              <button className="btn btn-dark d-flex align-items-center justify-content-between px-3">
                <FaGooglePlay className="me-2" />
                <span>Get it on Google Play</span>
              </button>
              <button className="btn btn-dark d-flex align-items-center justify-content-between px-3">
                <FaApple className="me-2" />
                <span>Download from App Store</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
