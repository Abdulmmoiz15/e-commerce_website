import React from "react";
import "../styles/ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
      <button>View Details</button>
    </div>
  );
}

export default ProductCard;
