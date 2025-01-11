import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
  { id: 1, name: "T-shirts with multiple colors, for men", price: "$10.30", image: "/src/Tshirts.png" },
  { id: 2, name: "Jeans shorts for men blue color", price: "$10.30", image: "/src/blueshorts.png" },
  { id: 3, name: "Brown winter coat medium size", price: "$12.50", image: "/src/browncoat.png" },
  { id: 4, name: "Jeans bag for travel for men", price: "$34.00", image: "/src/jeansbag.png" },
  { id: 5, name: "Leather wallet", price: "$99.00", image: "/src/wallets.png" },
  { id: 6, name: "Canon camera black, 100x zoom", price: "$9.99", image: "/src/canoncam.png" },
  { id: 7, name: "Headset for gaming with mic", price: "$8.99", image: "/src/headset.png" },
  { id: 8, name: "Smartwatch silver color modern", price: "$10.30", image: "/src/watch.png" },
  { id: 9, name: "Blue wallet for men leather material", price: "$10.30", image: "/src/wallets.png" },
  { id: 10, name: "Jeans bag for travel for men", price: "$80.95", image: "/src/jeansbag.png" },
];

const Recommend = () => {
  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Recommended Items</h2>
      <div className="row">
        {items.map(item => (
          <div key={item.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-lg">
              <img src={item.image} alt={item.name} className="card-img-top object-cover rounded-top" style={{height: '10rem'}} />
              <div className="card-body text-center">
                <p className="card-text text-muted">{item.price}</p>
                <h5 className="card-title">{item.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommend;
