import React from "react";
import { FiMenu, FiShoppingCart, FiUser } from "react-icons/fi";

const Mobheader = () => {
  return (
    <div className="bg-white shadow-sm p-3 w-100 d-block d-md-none position-fixed top-0 z-10">
      {/* Top Bar */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* Menu and Brand */}
        <div className="d-flex align-items-center">
          <button className="btn btn-light p-2 me-2">
            <FiMenu size={24} />
          </button>
          <div className="h5 m-0 text-primary">Brand</div>
        </div>

        {/* Icons */}
        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-light p-2">
            <FiShoppingCart size={24} />
          </button>
          <button className="btn btn-light p-2">
            <FiUser size={24} />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search"
          className="form-control rounded-pill"
        />
      </div>

      {/* Categories */}
      <div className="d-flex gap-2 overflow-auto">
        <button className="btn btn-outline-primary rounded-pill px-3">
          All category
        </button>
        <button className="btn btn-outline-secondary rounded-pill px-3">
          Gadgets
        </button>
        <button className="btn btn-outline-secondary rounded-pill px-3">
          Clothes
        </button>
        <button className="btn btn-outline-secondary rounded-pill px-3">
          Accessory
        </button>
      </div>
    </div>
  );
};

export default Mobheader;
