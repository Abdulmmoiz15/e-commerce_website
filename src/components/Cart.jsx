import React, { useState } from "react";

const Cart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "T-shirts with multiple colors for men",
      price: 78.99,
      quantity: 2,
      image: "/src/Tshirts.png",
      size: "Medium",
      color: "Blue",
    },
    {
      id: 2,
      name: "Solid Backpack blue jeans large size",
      price: 78.99,
      quantity: 1,
      image: "/src/jeansbag.png",
      size: "Medium",
      color: "Blue",
    },
    {
      id: 3,
      name: "Water boiler black for kitchen, 1200 Watt",
      price: 78.99,
      quantity: 2,
      image: "/src/boiler.png",
    },
  ]);

  const [savedForLater, setSavedForLater] = useState([
    {
      id: 4,
      name: "Regular Fit Resort Shirt",
      price: 57.7,
      image: "/src/resortshirt.png",
    },
    {
      id: 5,
      name: "Headphones",
      price: 99.99,
      image: "/src/headphones.png",
    },
  ]);

  // Function to handle quantity update
  const handleQuantityChange = (id, operation) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                operation === "increase"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : item.quantity,
            }
          : item
      )
    );
  };

  // Function to handle removing item from cart
  const handleRemoveFromCart = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Function to handle removing item from Saved for Later
  const handleRemoveFromSaved = (id) => {
    setSavedForLater((prevSaved) => prevSaved.filter((item) => item.id !== id));
  };

  // Function to handle moving item to Cart
  const handleMoveToCart = (id) => {
    const itemToMove = savedForLater.find((item) => item.id === id);

    // Check if the item already exists in the cart
    const itemExistsInCart = items.find((item) => item.id === itemToMove.id);

    if (itemExistsInCart) {
      // If the item already exists, increase its quantity
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemToMove.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the item doesn't exist in the cart, add it with quantity 1
      setItems((prevItems) => [...prevItems, { ...itemToMove, quantity: 1 }]);
    }

    // Remove the item from "Saved for Later"
    setSavedForLater((prevSaved) => prevSaved.filter((item) => item.id !== id));
  };

  // Calculate total price
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="py-4 bg-light min-vh-100">
      <div className="container">
        <div className="row g-4">
          {/* Left Section: Cart Items */}
          <div className="col-lg-8">
            <div className="card shadow-sm">
              {/* Cart Header */}
              <div className="card-header bg-white">
                <h2 className="h5 mb-0">Shopping Cart</h2>
                <p>{items.length} item(s) in the cart</p>
              </div>

              {/* Items Section */}
              <div className="card-body">
                {items.map((item) => (
                  <div key={item.id} className="d-flex mb-4 align-items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-thumbnail"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <div className="ms-3 flex-grow-1">
                      <h5 className="mb-1">{item.name}</h5>
                      {item.size && item.color && (
                        <p className="text-muted small mb-2">
                          Size: {item.size}, Color: {item.color}
                        </p>
                      )}
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold">${item.price.toFixed(2)}</span>
                        <div className="input-group" style={{ maxWidth: "120px" }}>
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() => handleQuantityChange(item.id, "decrease")}
                            disabled={item.quantity === 1}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="form-control text-center"
                            value={item.quantity}
                            readOnly
                          />
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() => handleQuantityChange(item.id, "increase")}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="btn btn-danger btn-sm ms-3"
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section: Summary and Saved Items */}
          <div className="col-lg-4">
            <div className="card shadow-sm mb-4">
              {/* Summary Section */}
              <div className="card-body">
                <h5 className="card-title mb-4">Order Summary</h5>
                <div className="d-flex justify-content-between mb-2">
                  <span>Items ({items.length}):</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping:</span>
                  <span>$10.00</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Tax:</span>
                  <span>$7.00</span>
                </div>
                <div className="d-flex justify-content-between fw-bold fs-5">
                  <span>Total:</span>
                  <span>${(total + 10 + 7).toFixed(2)}</span>
                </div>
                <button className="btn btn-success w-100 mt-3">
                  Checkout ({items.length} items)
                </button>
              </div>
            </div>

            {/* Saved for Later */}
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-4">Saved for later</h5>
                {savedForLater.length === 0 ? (
                  <p>No items saved for later.</p>
                ) : (
                  savedForLater.map((item) => (
                    <div key={item.id} className="d-flex align-items-center mb-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-thumbnail"
                        style={{ width: "60px", height: "60px" }}
                      />
                      <div className="ms-3 flex-grow-1">
                        <h6 className="mb-1">{item.name}</h6>
                        <span>${item.price.toFixed(2)}</span>
                      </div>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-link text-decoration-none p-0 text-primary"
                          onClick={() => handleMoveToCart(item.id)}
                        >
                          Move to cart
                        </button>
                        <button
                          className="btn btn-link text-decoration-none p-0 text-danger"
                          onClick={() => handleRemoveFromSaved(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
