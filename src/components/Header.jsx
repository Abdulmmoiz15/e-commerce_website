import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/products/${category}?q=${searchQuery}`);
  };

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
      <div className="container-fluid px-4">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img
            src="/src/logo-colored.png"
            alt="Logo"
            className="d-inline-block align-text-top"
            style={{ height: '40px' }}
          />
        </a>

        {/* Search Bar */}
        <form className="d-flex flex-grow-1 mx-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="form-select me-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All categories</option>
            <option value="automobiles">Automobiles</option>
            <option value="clothes">Clothes and Wear</option>
            <option value="home">Home Interiors</option>
            <option value="tech">Computer and Tech</option>
            <option value="sports">Sports and Outdoor</option>
            <option value="electronics">Electronics</option>
            <option value="mobile">Mobile and Accessories</option>
          </select>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSearch}
          >
            Search
          </button>
        </form>

        {/* Profile and Navigation Links */}
        <div className="d-flex gap-3">
          <a href="/profile" className="nav-link text-dark">
            Profile
          </a>
          <a href="/messages" className="nav-link text-dark">
            Message
          </a>
          <a href="/orders" className="nav-link text-dark">
            Orders
          </a>
          <a href="/cart" className="nav-link text-dark">
            My Cart
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
