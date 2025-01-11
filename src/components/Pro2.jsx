import React from 'react';

const Pro2 = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        {/* Left Section */}
        <div className="col-lg-4 d-none d-md-block">
          <div className="position-relative">
            <img
              src="/src/Electronics.png"
              alt="Room"
              className="img-fluid rounded-start"
              style={{ width: '100%', height: '257px', objectFit: 'cover' }}
            />
            <div className="position-absolute top-50 start-50 translate-middle text-center">
              <h4 className="fw-bold text-white">Consumer <br /> Electronics and <br /> Gadgets</h4>
              <button className="btn btn-light mt-3">Source Now</button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-8">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            {[ 
              { title: 'Soft chairs', price: 'USD 19', imgSrc: '/src/softchair.png' },
              { title: 'Sofa & chair', price: 'USD 19', imgSrc: '/src/sofaandchair.png' },
              { title: 'Kitchen dishes', price: 'USD 19', imgSrc: '/src/kitchendishes.png' },
              { title: 'Smart watches', price: 'USD 19', imgSrc: '/src/smartwatch.png' },
              { title: 'Kitchen mixer', price: 'USD 100', imgSrc: '/src/mixer.png' },
              { title: 'Blenders', price: 'USD 39', imgSrc: '/src/blender.png' },
              { title: 'Home appliance', price: 'USD 19', imgSrc: '/src/happliances.png' },
              { title: 'Coffee maker', price: 'USD 10', imgSrc: '/src/coffeemaker.png' },
            ].map((item, index) => (
              <div key={index} className="col">
                <div className="card h-100">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="card-img-top"
                    style={{ height: '150px', objectFit: 'cover' }}
                  />
                  <div className="card-body text-center">
                    <h6 className="card-title">{item.title}</h6>
                    <p className="card-text text-muted">From <br /> {item.price}</p>
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

export default Pro2;
