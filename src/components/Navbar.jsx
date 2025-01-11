import React, { useState } from 'react';

const Navbar = () => {
    const [helpDropdown, setHelpDropdown] = useState(false);
    const [languageDropdown, setLanguageDropdown] = useState(false);

    return (
        <nav className="d-none d-md-flex justify-content-between align-items-center p-3 bg-white border-bottom">
            <div className="d-flex align-items-center gap-3">
                <span className="text-secondary cursor-pointer">&#9776; All category</span>
                <span className="text-secondary cursor-pointer">Hot offers</span>
                <span className="text-secondary cursor-pointer">Gift boxes</span>
                <span className="text-secondary cursor-pointer">Projects</span>
                <span className="text-secondary cursor-pointer">Menu item</span>
                <div className="dropdown">
                    <span
                        className="text-secondary cursor-pointer dropdown-toggle"
                        role="button"
                        onClick={() => setHelpDropdown(!helpDropdown)}
                        data-bs-toggle="dropdown"
                        aria-expanded={helpDropdown}
                    >
                        Help
                    </span>
                    {helpDropdown && (
                        <ul className="dropdown-menu show">
                            <li><span className="dropdown-item cursor-pointer">FAQ</span></li>
                            <li><span className="dropdown-item cursor-pointer">Contact Us</span></li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="d-flex align-items-center gap-3">
                <div className="dropdown">
                    <span
                        className="text-secondary cursor-pointer dropdown-toggle"
                        role="button"
                        onClick={() => setLanguageDropdown(!languageDropdown)}
                        data-bs-toggle="dropdown"
                        aria-expanded={languageDropdown}
                    >
                        English, USD
                    </span>
                    {languageDropdown && (
                        <ul className="dropdown-menu show">
                            <li><span className="dropdown-item cursor-pointer">English, USD</span></li>
                            <li><span className="dropdown-item cursor-pointer">Spanish, EUR</span></li>
                        </ul>
                    )}
                </div>
                <span className="text-secondary cursor-pointer">
                    Ship to <span className="flag-icon flag-icon-us"></span>
                </span>
            </div>
        </nav>
    );
};

export default Navbar;
