import React, { useState } from "react";

const Main = () => {
  const [selected, setSelected] = useState("Automobiles");

  const handleSelect = (option) => {
    setSelected(option);
  };

  return (
    <div className="container my-5">
      <div className="row g-4">
        {/* Sidebar */}
        <div className="col-12 col-md-3">
          <ul className="list-group">
            {[
              "Automobiles",
              "Clothes and wear",
              "Home interiors",
              "Computer and tech",
              "Tools, equipments",
              "Sports and outdoor",
              "Animal and pets",
              "Machinery tools",
              "More category",
            ].map((option) => (
              <li
                key={option}
                className={`list-group-item ${
                  selected === option ? "active fw-bold" : ""
                }`}
                onClick={() => handleSelect(option)}
                role="button"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-12 col-md-6 position-relative">
          <img
            src="src/Main.png" // Replace with your desired image link
            alt="Electronics"
            className="img-fluid rounded shadow w-100"
          />
          <div className="position-absolute top-50 start-50 translate-middle text-center text-white px-4">
            <h2 className="display-6 fw-light">Latest trending</h2>
            <h1 className="display-5 fw-bold">Electronic items</h1>
            <button className="btn btn-primary mt-3">Learn more</button>
          </div>
        </div>

        {/* Actions */}
        <div className="col-12 col-md-3">
          <div className="card mb-4">
            <div className="card-body text-center">
              <p className="text-muted mb-1">Hi, user</p>
              <p className="text-secondary">Let’s get started</p>
              <button className="btn btn-primary w-100 mb-2">Join now</button>
              <button className="btn btn-outline-secondary w-100">
                Log in
              </button>
            </div>
          </div>
          <div className="card bg-warning text-white mb-4 text-center">
            <div className="card-body">
              <p className="mb-0">Get US $10 off</p>
              <p>with a new supplier</p>
            </div>
          </div>
          <div className="card bg-info text-white text-center">
            <div className="card-body">
              <p className="mb-0">Send quotes with</p>
              <p>supplier preferences</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
