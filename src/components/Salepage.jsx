import React, { useState, useEffect } from "react";

const Salepage = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-01-06") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-md-4 bg-white border p-4 rounded shadow-sm">
          <h2 className="h5 font-weight-bold">Deals and Offers</h2>
          <p className="text-muted">Hygiene Equipments</p>
          <div className="d-flex justify-content-between mt-3">
            {["Days", "Hour", "Min", "Sec"].map((label, index) => {
              const values = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds];
              return (
                <div key={label} className="text-center bg-light p-2 rounded">
                  <div className="h4 font-weight-bold">{values[index]}</div>
                  <small className="text-muted">{label}</small>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="row mt-4 g-3">
        {[
          { name: "Smart watches", discount: "-25%", image: "/src/watch.png" },
          { name: "Laptops", discount: "-15%", image: "/src/laptop.png" },
          { name: "GoPro cameras", discount: "-40%", image: "/src/camera.png" },
          { name: "Headphones", discount: "-25%", image: "/src/headphone.png" },
          { name: "Canon cameras", discount: "-25%", image: "/src/canon.png" },
        ].map((item) => (
          <div key={item.name} className="col-6 col-md-3 col-lg-2">
            <div className="card border text-center h-100 shadow-sm">
              <img src={item.image} alt={item.name} className="card-img-top p-3" />
              <div className="card-body">
                <p className="card-text mb-1">{item.name}</p>
                <span className="badge bg-danger text-white">{item.discount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Salepage;
