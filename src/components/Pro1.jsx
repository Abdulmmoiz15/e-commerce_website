import React from 'react';

const Pro1 = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center my-5">
      <div className="row w-100 p-3">
        {/* Left Section */}
        <div className="col-lg-3 d-flex flex-column align-items-center justify-content-center mb-4 mb-lg-0">
          <div className="position-relative w-100">
            <img
              src="/src/bgpro1.png"
              alt="Room"
              className="img-fluid rounded-start"
              style={{ width: '100%', height: '257px', objectFit: 'cover' }}
            />
            <div className="position-absolute top-50 start-50 translate-middle text-start p-3">
              <h5 className="fw-bold mb-3">Home and <br /> Outdoor</h5>
              <button className="btn btn-light px-4 py-2">Source Now</button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-9 d-flex flex-wrap border border-gray rounded-end p-3">
          {/* Card Items */}
          {[
            { title: 'Soft chairs', price: 'USD 19', image: '/src/headphone.png' },
            { title: 'Sofa & chair', price: 'USD 19', image: '/src/camera.png' },
            { title: 'Kitchen dishes', price: 'USD 19', image: '/src/camera.png' },
            { title: 'Smart watches', price: 'USD 19', image: '/src/camera.png' },
            { title: 'Kitchen mixer', price: 'USD 100', image: '/src/camera.png' },
            { title: 'Blenders', price: 'USD 39', image: '/src/camera.png' },
            { title: 'Home appliance', price: 'USD 19', image: '/src/camera.png' },
            { title: 'Coffee maker', price: 'USD 10', image: '/src/camera.png' },
          ].map((item, index) => (
            <div
              key={index}
              className="col-md-3 col-6 d-flex flex-column border p-2"
              style={{ height: '127px' }}
            >
              <p className="mb-1">{item.title}</p>
              <p className="text-muted small">From <br /> {item.price}</p>
              <img
                src={item.image}
                alt={item.title}
                className="align-self-end mb-2"
                style={{ width: '48px', height: '48px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pro1;
