import React, { useState } from "react";

const Navbar = () => {
  const [helpDropdown, setHelpDropdown] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom border-gray-300 px-3 py-2">
        <div className="container-fluid">
          {/* Navbar Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Content */}
          <div className="collapse navbar-collapse" id="navbarContent">
            {/* Left Section */}
            <div className="navbar-nav me-auto d-flex align-items-center">
              <span className="nav-link text-gray-600 cursor-pointer">
                &#9776; All category
              </span>
              <span className="nav-link text-gray-600 cursor-pointer">
                Hot offers
              </span>
              <span className="nav-link text-gray-600 cursor-pointer">
                Gift boxes
              </span>
              <span className="nav-link text-gray-600 cursor-pointer">
                Projects
              </span>
              <span className="nav-link text-gray-600 cursor-pointer">
                Menu item
              </span>

              {/* Help Dropdown */}
              <div className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle text-gray-600 cursor-pointer"
                  role="button"
                  id="helpDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded={helpDropdown}
                  onClick={() => setHelpDropdown(!helpDropdown)}
                >
                  Help
                </span>
                <ul
                  className={`dropdown-menu ${
                    helpDropdown ? "show" : ""
                  }`}
                  aria-labelledby="helpDropdown"
                >
                  <li>
                    <span className="dropdown-item text-gray-600 cursor-pointer">
                      FAQ
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item text-gray-600 cursor-pointer">
                      Contact Us
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Section */}
            <div className="navbar-nav ms-auto d-flex align-items-center">
              {/* Language Dropdown */}
              <div className="nav-item dropdown me-3">
                <span
                  className="nav-link dropdown-toggle text-gray-600 cursor-pointer"
                  role="button"
                  id="languageDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded={languageDropdown}
                  onClick={() => setLanguageDropdown(!languageDropdown)}
                >
                  English, USD
                </span>
                <ul
                  className={`dropdown-menu dropdown-menu-end ${
                    languageDropdown ? "show" : ""
                  }`}
                  aria-labelledby="languageDropdown"
                >
                  <li>
                    <span className="dropdown-item text-gray-600 cursor-pointer">
                      English, USD
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item text-gray-600 cursor-pointer">
                      Spanish, EUR
                    </span>
                  </li>
                </ul>
              </div>

              <span className="nav-link text-gray-600 cursor-pointer">
                Ship to <span className="inline-block">&#127465;&#127466;</span>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
