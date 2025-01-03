import React from "react";

const suppliers = [
  { region: "Arabic Emirates", url: "shopname.ae", code: "AE" },
  { region: "Australia", url: "shopname.ae", code: "AU" },
  { region: "United States", url: "shopname.ae", code: "US" },
  { region: "Russia", url: "shopname.ru", code: "RU" },
  { region: "Italy", url: "shopname.it", code: "IT" },
  { region: "Denmark", url: "denmark.com.dk", code: "DK" },
  { region: "France", url: "shopname.com.fr", code: "FR" },
  { region: "China", url: "shopname.ae", code: "CN" },
  { region: "Great Britain", url: "shopname.co.uk", code: "GB" },
];

const Supply = () => {
  return (
    <div className="container py-4">
      <h2 className="text-primary text-center mb-4">Suppliers by Region</h2>
      <div className="row g-3">
        {suppliers.map((supplier, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">
            <div className="d-flex align-items-center bg-light p-3 rounded shadow-sm">
              <img
                src={`https://flagsapi.com/${supplier.code}/flat/64.png`}
                alt={`${supplier.region} flag`}
                className="me-3"
                style={{ width: "28px", height: "20px" }}
              />
              <div>
                <h3 className="h6 mb-1">{supplier.region}</h3>
                <a
                  href={`https://${supplier.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-decoration-none small"
                >
                  {supplier.url}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Supply;
