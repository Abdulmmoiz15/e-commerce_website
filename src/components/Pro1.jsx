import React, { useState } from 'react';

const Pro1 = () => {
  // State to hold cart items
  const [cart, setCart] = useState([]);

  // Function to handle adding items to the cart
  const handleAddToCart = (item) => {
    // Check if item is already in cart
    const existingItem = cart.find((cartItem) => cartItem.title === item.title);

    if (existingItem) {
      // If item exists, increment quantity
      setCart(
        cart.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // If item doesn't exist, add new item with quantity 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mx-auto my-4">
      <div className="d-flex flex-column flex-lg-row p-3 m-3">
        {/* Left Section */}
        <div className="d-none d-md-flex flex-column align-items-center justify-content-center mb-4 mb-lg-0">
          <div className="position-relative rounded">
            <img
              src="/src/bgpro1.png"
              alt="Room"
              className="img-fluid rounded-start"
              style={{ width: '295px', height: '257px', objectFit: 'cover' }}
            />
            <div className="position-absolute d-flex flex-column gap-2 justify-content-start align-items-start" style={{ top: '20px', left: '20px' }}>
              <span className="fs-5 fw-bold text-white">Home and <br /> Outdoor</span>
              <button className="btn btn-light">Source Now</button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="d-flex flex-wrap text-center rounded align-items-center mx-auto ms-3">
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
            <div key={index} className="border rounded p-3 m-2 d-flex flex-column align-items-center" style={{ width: '224px', height: '320px' }}>
              <img
                src={item.imgSrc}
                alt={item.title}
                className="img-fluid mb-2"
                style={{ height: '150px', objectFit: 'cover' }}
              />
              <p className="mt-2 mb-1">{item.title}</p>
              <p className="text-muted small">From <br /> {item.price}</p>
              <button
                className="btn btn-primary mt-2"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      {cart.length > 0 && (
        <div className="mt-4">
          <h3>Cart Items:</h3>
          <ul className="list-group">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{item.title}</span>
                <span>{item.quantity} x {item.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <button className="btn btn-success">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pro1;
