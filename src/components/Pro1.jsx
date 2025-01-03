import React from "react";

const Pro1 = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Left Section */}
        <div className="col-12 col-lg-3 mb-4 mb-lg-0">
          <div className="position-relative w-100">
            <img
              src="/src/bgpro1.png"
              alt="Room"
              className="img-fluid rounded"
              style={{ width: "100%", height: "257px", objectFit: "cover" }}
            />
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
              <h5 className="fw-bold mb-3">Home and <br /> Outdoor</h5>
              <button className="btn btn-light px-4 py-2">Source Now</button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-12 col-lg-9">
          <div className="row g-3">
            {/* Card Items */}
            {[
              { title: "Soft chairs", price: "USD 19", image: "/src/headphone.png" },
              { title: "Sofa & chair", price: "USD 19", image: "/src/camera.png" },
              { title: "Kitchen dishes", price: "USD 19", image: "/src/camera.png" },
              { title: "Smart watches", price: "USD 19", image: "/src/camera.png" },
              { title: "Kitchen mixer", price: "USD 100", image: "/src/camera.png" },
              { title: "Blenders", price: "USD 39", image: "/src/camera.png" },
              { title: "Home appliance", price: "USD 19", image: "/src/camera.png" },
              { title: "Coffee maker", price: "USD 10", image: "/src/camera.png" },
            ].map((item, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-3">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <p className="mb-2 fw-bold">{item.title}</p>
                    <p className="text-muted small mb-2">From <br /> {item.price}</p>
                    <div className="d-flex justify-content-center">
                      <div
                        style={{
                          width: "100%",
                          height: "150px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="img-fluid"
                          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pro1;
