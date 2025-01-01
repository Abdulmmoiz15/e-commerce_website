import React from "react";
import "../styles/Productlist.css";
import ProductCard from "./ProductCard.jsx"; // Ensure the `ProductCard.jsx` file exists in the same folder.


function Productlist() {
  const products = [
    {
      id: 1,
      name: "Canon Camera EOS 200D",
      price: "$999",
      rating: 8.5,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "GoPro HERO 9 Action Camera",
      price: "$989",
      rating: 9.0,
      image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Iphone 11 pro Max",
        price: "$999",
        rating: 9.5,
        image: "https://via.placeholder.com/150",
      }
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Productlist;
