import React from 'react';

const items = [
  { id: 1, name: "T-shirts with multiple colors, for men", price: "$10.30", image: "/src/canon.png" },
  { id: 2, name: "Jeans shorts for men blue color", price: "$10.30", image: "/src/laptop.png" },
  { id: 3, name: "Brown winter coat medium size", price: "$12.50", image: "/src/camera.png" },
  { id: 4, name: "Jeans bag for travel for men", price: "$34.00", image: "path/to/jeans-bag.jpg" },
  { id: 5, name: "Leather wallet", price: "$99.00", image: "path/to/leather-wallet.jpg" },
  { id: 6, name: "Canon camera black, 100x zoom", price: "$9.99", image: "path/to/camera.jpg" },
  { id: 7, name: "Headset for gaming with mic", price: "$8.99", image: "path/to/headset.jpg" },
  { id: 8, name: "Smartwatch silver color modern", price: "$10.30", image: "path/to/smartwatch.jpg" },
  { id: 9, name: "Blue wallet for men leather material", price: "$10.30", image: "path/to/blue-wallet.jpg" },
  { id: 10, name: "Jeans bag for travel for men", price: "$80.95", image: "path/to/jeans-bag-2.jpg" },
];

const Recommend = () => {
  return (
    <div className="container my-5">
      <h2 className="text-2xl font-weight-bold mb-4">Recommended items</h2>
      <div className="row justify-content-center g-4">
        {items.map(item => (
          <div key={item.id} className="col-12 col-md-4 col-lg-3">
            <div className="card shadow-sm h-100">
              <img 
                src={item.image} 
                alt={item.name} 
                className="card-img-top rounded-top" 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommend;
