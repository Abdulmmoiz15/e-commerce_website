import React from 'react';

const Pro2 = () => {
  return (
    <div className="container my-5">
      <div className="row mx-auto my-4">
        {/* Left Section */}
        <div className="col-12 col-lg-6 mb-4 mb-lg-0 d-flex flex-column align-items-center justify-content-center position-relative">
          <div className="w-100 h-50 rounded-3 d-flex align-items-center justify-content-center position-relative">
            <img
              src="/src/Electronics.png"
              alt="Room"
              className="rounded-3"
              style={{
                width: '295px',
                height: '257px',
                objectFit: 'contain',
              }}
            />
          </div>
          <div
            className="position-absolute d-flex flex-column gap-3 left-50 p-4 mb-5"
            style={{ left: '40%' }}
          >
            <span className="h4 fw-bold">
              Consumer <br /> Electronics and <br /> Gadgets
            </span>
            <button className="btn btn-light">Source Now</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-12 col-lg-6">
          <div className="d-flex flex-wrap border border-light rounded-3">
            {[
              { name: "Soft chairs", price: "USD 19", image: "/src/headphone.png" },
              { name: "Sofa & chair", price: "USD 19", image: "/src/camera.png" },
              { name: "Kitchen dishes", price: "USD 19", image: "/src/camera.png" },
              { name: "Smart watches", price: "USD 19", image: "/src/camera.png" },
              { name: "Kitchen mixer", price: "USD 100", image: "/src/camera.png" },
              { name: "Blenders", price: "USD 39", image: "/src/camera.png" },
              { name: "Home appliance", price: "USD 19", image: "/src/camera.png" },
              { name: "Coffee maker", price: "USD 10", image: "/src/camera.png" },
            ].map((item, index) => (
              <div
                key={index}
                className="d-flex flex-column border border-light p-3"
                style={{ width: '224px', height: '127px' }}
              >
                <p className="mt-2">{item.name}</p>
                <p className="text-muted small">From <br /> {item.price}</p>
                <div
                  className="ms-auto mb-2"
                  style={{
                    height: '50px',
                    width: '50px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-fit-contain"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pro2;
