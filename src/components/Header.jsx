import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [ismob, setIsmob] = useState(false);
  const Togglemenu = () => {
    setIsmob(!ismob);
  };
  const [category, setCategory] = useState('');
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/products/${category}`);
  };

  return (
    <header className="d-none d-md-flex justify-content-between align-items-center p-3 bg-white border-bottom">
      {/* Logo */}
      <div className="d-flex align-items-center">
        <img src="/src/logo-colored.png" alt="Logo" className="img-fluid" style={{ height: '40px' }} />
      </div>

      {/* Search Bar */}
      <div className="d-flex align-items-center">
        <input
          type="text"
          placeholder="Search"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="form-control border-end-0 rounded-start"
          style={{ maxWidth: '300px' }}
        />
        <select className="form-select border-start-0 border-end-0">
          <option value="all">All category</option>
          <option value="automobiles">Automobiles</option>
          <option value="clothes">Clothes and wear</option>
          <option value="home">Home interiors</option>
          <option value="tech">Computer and tech</option>
          <option value="sports">Sports and outdoor</option>
          <option value="electronics">Electronics</option>
          <option value="mobile">Mobile and Accessories</option>
          {/* Add more categories here if needed */}
        </select>
        <button className="btn btn-primary rounded-end" onClick={handleSearch}>Search</button>
      </div>

      {/* Navigation Links */}
      <div className="d-flex flex-wrap align-items-center gap-4 me-3">
  <span className="text-muted cursor-pointer mb-2 mb-md-0">Profile</span>
  <span className="text-muted cursor-pointer mb-2 mb-md-0">Message</span>
  <span className="text-muted cursor-pointer mb-2 mb-md-0">Orders</span>
  <span className="text-muted cursor-pointer mb-2 mb-md-0">My cart</span>
</div>

    </header>
  );
};

export default Header;
