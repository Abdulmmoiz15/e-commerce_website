import React, { useState } from 'react';

const Navbar = () => {
  const [helpDropdown, setHelpDropdown] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom border-gray-300 px-4 py-2">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <span className="text-gray-600 me-3 cursor-pointer" onClick={() => setHelpDropdown(false)}>
              &#9776; All category
            </span>
            <span className="text-gray-600 me-3 cursor-pointer">Hot offers</span>
            <span className="text-gray-600 me-3 cursor-pointer">Gift boxes</span>
            <span className="text-gray-600 me-3 cursor-pointer">Projects</span>
            <span className="text-gray-600 me-3 cursor-pointer">Menu item</span>

            {/* Help Dropdown */}
            <div className="dropdown">
              <span
                className="dropdown-toggle text-gray-600 cursor-pointer"
                role="button"
                onClick={() => setHelpDropdown(!helpDropdown)}
              >
                Help
              </span>
              {helpDropdown && (
                <ul className="dropdown-menu show">
                  <li>
                    <span className="dropdown-item text-gray-600 cursor-pointer">FAQ</span>
                  </li>
                  <li>
                    <span className="dropdown-item text-gray-600 cursor-pointer">Contact Us</span>
                  </li>
                </ul>
              )}
            </div>
          </div>

          <div className="d-flex align-items-center">
            {/* Language Dropdown */}
            <div className="dropdown me-3">
              <span
                className="dropdown-toggle text-gray-600 cursor-pointer"
                role="button"
                onClick={() => setLanguageDropdown(!languageDropdown)}
              >
                English, USD
              </span>
              {languageDropdown && (
                <ul className="dropdown-menu dropdown-menu-end show">
                  <li>
                    <span className="dropdown-item text-gray-600 cursor-pointer">English, USD</span>
                  </li>
                  <li>
                    <span className="dropdown-item text-gray-600 cursor-pointer">Spanish, EUR</span>
                  </li>
                </ul>
              )}
            </div>

            <span className="text-gray-600 cursor-pointer">
              Ship to <span className="inline-block">&#127465;&#127466;</span>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
