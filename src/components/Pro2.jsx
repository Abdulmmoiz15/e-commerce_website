import React from 'react'; // Ensure this is imported to apply Bootstrap styles

const Pro2 = () => {
  return (
    <div className="container my-5">
      <div className="row mx-auto my-4">
        {/* Left Section */}
        <div className="col-12 col-lg-6 mb-4 mb-lg-0 d-flex flex-column align-items-center justify-content-center position-relative">
          <div className="w-100 h-50 rounded-3 d-flex align-items-center justify-content-center position-relative">
            {/* Placeholder for Room Image */}
            <img
              src="/src/Electronics.png"
              alt="Room"
              className="object-cover w-100 h-100 rounded-3"
              style={{ width: '295px', height: '257px' }}
            />
          </div>
          <div className="position-absolute d-flex flex-column gap-3 left-50 p-4 mb-5" style={{ left: '40%' }}>
            <span className="h4 fw-bold">Consumer <br /> Electronics and <br /> Gadgets</span>
            <button className="btn btn-light">Source Now</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-12 col-lg-6">
          <div className="d-flex flex-wrap border border-light rounded-3">
            <div className="d-flex flex-column border border-light p-3" style={{ width: '224px', height: '127px' }}>
              <p className="mt-2">Soft chairs</p>
              <p className="text-muted small">From <br /> USD 19</p>
              <div className="ms-auto mb-2">
                <img src="/src/headphone.png" alt="Soft chairs" className="w-12 h-12 object-cover" />
              </div>
            </div>
            <div className="d-flex flex-column border border-light p-3" style={{ width: '224px', height: '127px' }}>
              <p className="mt-2">Sofa & chair</p>
              <p className="text-muted small">From <br /> USD 19</p>
              <div className="ms-auto mb-2">
                <img src="/src/camera.png" alt="Sofa & chair" className="w-12 h-12 object-cover" />
              </div>
            </div>
            <div className="d-flex flex-column border border-light p-3" style={{ width: '224px', height: '127px' }}>
              <p className="mt-2">Kitchen dishes</p>
              <p className="text-muted small">From <br /> USD 19</p>
              <div className="ms-auto mb-2">
                <img src="/src/camera.png" alt="Kitchen dishes" className="w-12 h-12 object-cover" />
              </div>
            </div>
            <div className="d-flex flex-column border border-light p-3" style={{ width: '224px', height: '127px' }}>
              <p className="mt-2">Smart watches</p>
              <p className="text-muted small">From <br /> USD 19</p>
              <div className="ms-auto mb-2">
                <img src="/src/camera.png" alt="Smart watches" className="w-12 h-12 object-cover" />
              </div>
            </div>
            <div className="d-flex flex-column border border-light p-3" style={{ width: '224px', height: '127px' }}>
              <p className="mt-2">Kitchen mixer</p>
              <p className="text-muted small">From <br /> USD 100</p>
              <div className="ms-auto mb-2">
                <img src="/src/camera.png" alt="Kitchen mixer" className="w-12 h-12 object-cover" />
              </div>
            </div>
            <div className="d-flex flex-column border border-light p-3" style={{ width: '224px', height: '127px' }}>
              <p className="mt-2">Blenders</p>
              <p className="text-muted small">From <br /> USD 39</p>
              <div className="ms-auto mb-2">
                <img src="/src/camera.png" alt="Blenders" className="w-12 h-12 object-cover" />
              </div>
            </div>
            <div className="d-flex flex-column border border-light p-3" style={{ width: '224px', height: '127px' }}>
              <p className="mt-2">Home appliance</p>
              <p className="text-muted small">From <br /> USD 19</p>
              <div className="ms-auto mb-2">
                <img src="/src/camera.png" alt="Home appliance" className="w-12 h-12 object-cover" />
              </div>
            </div>
            <div className="d-flex flex-column border border-light p-3" style={{ width: '224px', height: '127px' }}>
              <p className="mt-2">Coffee maker</p>
              <p className="text-muted small">From <br /> USD 10</p>
              <div className="ms-auto mb-2">
                <img src="/src/camera.png" alt="Coffee maker" className="w-12 h-12 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pro2;
