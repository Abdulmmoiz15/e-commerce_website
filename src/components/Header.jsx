import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/products/${category}?q=${searchQuery}`);
  };

  return (
    <header className="bg-white border-bottom shadow-sm">
      <div className="container-fluid">
        <div className="row align-items-center py-2">
          {/* Logo Section */}
          <div className="col-6 col-md-2">
            <a href="/" className="d-flex align-items-center text-decoration-none">
              <img
                src="/src/logo-colored.png"
                alt="Brand Logo"
                style={{ height: '40px', marginRight: '10px' }}
              />
              <span className="fs-5 text-primary fw-bold d-none d-md-inline">Brand</span>
            </a>
          </div>

          {/* Search Bar Section */}
          <div className="col-12 col-md-6 d-flex align-items-center mt-2 mt-md-0">
            <input
              type="text"
              className="form-control border-primary me-2"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              className="form-select border-primary me-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All category</option>
              <option value="automobiles">Automobiles</option>
              <option value="clothes">Clothes and Wear</option>
              <option value="home">Home Interiors</option>
              <option value="tech">Computer and Tech</option>
              <option value="sports">Sports and Outdoor</option>
              <option value="electronics">Electronics</option>
              <option value="mobile">Mobile and Accessories</option>
            </select>
            <button
              className="btn btn-primary"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          {/* Navigation Links Section */}
          <div className="col-6 col-md-4 text-end mt-2 mt-md-0">
            <div className="d-flex justify-content-end gap-3">
              <a href="/profile" className="text-decoration-none text-muted">
                <i className="bi bi-person fs-5 me-1"></i> <span className="d-none d-sm-inline">Profile</span>
              </a>
              <a href="/messages" className="text-decoration-none text-muted">
                <i className="bi bi-chat fs-5 me-1"></i> <span className="d-none d-sm-inline">Message</span>
              </a>
              <a href="/orders" className="text-decoration-none text-muted">
                <i className="bi bi-heart fs-5 me-1"></i> <span className="d-none d-sm-inline">Orders</span>
              </a>
              <a href="/cart" className="text-decoration-none text-muted">
                <i className="bi bi-cart fs-5 me-1"></i> <span className="d-none d-sm-inline">My cart</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
