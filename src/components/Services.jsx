import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const services = [
  {id: 1, title: 'Source from Industry Hubs', description: 'Efficiently source products from key industry hubs.', image: '/src/Source.png'},
  {id: 2, title: 'Customize Your Products', description: 'Personalize and tailor products to meet your needs.', image: '/src/Products.png'},
  {id: 3, title: 'Reliable Shipping by Ocean or Air', description: 'Fast and dependable shipping services by ocean or air.', image: '/src/3.png'},
  {id: 4, title: 'Product Monitoring and Inspection', description: 'Ensure quality with thorough product monitoring and inspection.', image: '/src/4.png'},
];

const Services = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Our Extra Services</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {services.map((service) => (
          <div key={service.id} className="col">
            <div className="card shadow-sm h-100">
              <img
                src={service.image}
                alt={service.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="card-title">{service.title}</h5>
                  <div className="bg-primary text-white p-2 rounded-circle">
                    <svg
                      className="bi bi-house-door"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg>
                  </div>
                </div>
                <p className="card-text text-muted">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
