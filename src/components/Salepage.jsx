import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Salepage = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-01-06") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
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
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card p-4 border">
            <h2 className="h4 text-start">Deals and Offers</h2>
            <p className="text-muted text-start">Hygiene Equipments</p>
            <div className="d-flex justify-content-start py-3">
              <div className="d-flex flex-column align-items-center bg-light p-2 rounded mx-2">
                <span className="h5 font-weight-bold">{timeLeft.days}</span>
                <span className="text-muted">Days</span>
              </div>
              <div className="d-flex flex-column align-items-center bg-light p-2 rounded mx-2">
                <span className="h5 font-weight-bold">{timeLeft.hours}</span>
                <span className="text-muted">Hour</span>
              </div>
              <div className="d-flex flex-column align-items-center bg-light p-2 rounded mx-2">
                <span className="h5 font-weight-bold">{timeLeft.minutes}</span>
                <span className="text-muted">Min</span>
              </div>
              <div className="d-flex flex-column align-items-center bg-light p-2 rounded mx-2">
                <span className="h5 font-weight-bold">{timeLeft.seconds}</span>
                <span className="text-muted">Sec</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="row">
            {/* Product 1 */}
            <div className="col-6 col-md-3 mb-4">
              <div className="card text-center">
                <img src="/src/watch.png" alt="Smartwatches" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} />
                <div className="card-body">
                  <p className="card-text">Smart watches</p>
                  <span className="badge bg-danger text-white">-25%</span>
                </div>
              </div>
            </div>
            {/* Product 2 */}
            <div className="col-6 col-md-3 mb-4">
              <div className="card text-center">
                <img src="/src/laptop.png" alt="Laptops" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} />
                <div className="card-body">
                  <p className="card-text">Laptops</p>
                  <span className="badge bg-danger text-white">-15%</span>
                </div>
              </div>
            </div>
            {/* Product 3 */}
            <div className="col-6 col-md-3 mb-4">
              <div className="card text-center">
                <img src="/src/camera.png" alt="GoPro cameras" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} />
                <div className="card-body">
                  <p className="card-text">GoPro cameras</p>
                  <span className="badge bg-danger text-white">-40%</span>
                </div>
              </div>
            </div>
            {/* Product 4 */}
            <div className="col-6 col-md-3 mb-4 d-none d-md-block">
              <div className="card text-center">
                <img src="/src/headphone.png" alt="Headphones" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} />
                <div className="card-body">
                  <p className="card-text">Headphones</p>
                  <span className="badge bg-danger text-white">-25%</span>
                </div>
              </div>
            </div>
            {/* Product 5 */}
            <div className="col-6 col-md-3 mb-4 d-none d-md-block">
              <div className="card text-center">
                <img src="/src/canon.png" alt="Canon cameras" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} />
                <div className="card-body">
                  <p className="card-text">Canon cameras</p>
                  <span className="badge bg-danger text-white">-25%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salepage;
