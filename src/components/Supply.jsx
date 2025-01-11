import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const suppliers = [
  { region: 'Arabic Emirates', url: 'shopname.ae', code: 'AE' },
  { region: 'Australia', url: 'shopname.ae', code: 'AU' },
  { region: 'United States', url: 'shopname.ae', code: 'US' },
  { region: 'Russia', url: 'shopname.ru', code: 'RU' },
  { region: 'Italy', url: 'shopname.it', code: 'IT' },
  { region: 'Denmark', url: 'denmark.com.dk', code: 'DK' },
  { region: 'France', url: 'shopname.com.fr', code: 'FR' },
  { region: 'China', url: 'shopname.ae', code: 'CN' },
  { region: 'Great Britain', url: 'shopname.co.uk', code: 'GB' },
];

const Supply = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Suppliers by Region</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {suppliers.map((supplier, index) => (
          <div key={index} className="col">
            <div className="d-flex align-items-center p-3 border rounded">
              <img
                src={`https://flagsapi.com/${supplier.code}/flat/64.png`}
                alt={`${supplier.region} flag`}
                className="me-3"
                style={{ width: '28px', height: '20px' }}
              />
              <div>
                <h5 className="mb-1">{supplier.region}</h5>
                <a
                  href={`https://${supplier.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-decoration-none"
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
