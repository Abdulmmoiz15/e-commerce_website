import React from "react";

const services = [
  { id: 1, title: "Source from Industry Hubs", description: "Efficiently source products from key industry hubs.", image: "/src/Source.png" },
  { id: 2, title: "Customize Your Products", description: "Personalize and tailor products to meet your needs.", image: "/src/Products.png" },
  { id: 3, title: "Reliable Shipping by Ocean or Air", description: "Fast and dependable shipping services by ocean or air.", image: "/src/3.png" },
  { id: 4, title: "Product Monitoring and Inspection", description: "Ensure quality with thorough product monitoring and inspection.", image: "/src/4.png" },
];

const Services = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-5">Our Extra Services</h2>
      <div className="row justify-content-center g-4">
        {services.map((service) => (
          <div key={service.id} className="col-12 col-md-6 col-lg-3">
            <div className="card border-0 shadow">
              <img
                src={service.image}
                alt={service.title}
                className="card-img-top rounded-top"
                style={{ height: "120px", objectFit: "cover" }}
              />
              <div className="card-body d-flex align-items-center">
                <h3 className="card-title h6 flex-grow-1 mb-0">{service.title}</h3>
                <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
                  <svg
                    className="bi bi-house-door-fill text-primary"
                    width="24"
                    height="24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 10.995V14.5A1.5 1.5 0 0 0 8 16h.5a1.5 1.5 0 0 0 1.5-1.5v-3.505H6.5ZM7 2.793V6.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V2.793l-1-.8-1 .8Z" />
                    <path d="M8 0 3 4.5H0v1a1 1 0 0 0 1 1h1v7.5A2.5 2.5 0 0 0 4.5 16h7A2.5 2.5 0 0 0 14 13.5V6.5h1a1 1 0 0 0 1-1v-1h-3L8 0Z" />
                  </svg>
                </div>
              </div>
              {/* <p className="card-text text-muted">{service.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
