import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-light p-3 border rounded" style={{ width: "250px" }}>
      <h5 className="fw-bold mb-3">Categories</h5>
      <ul className="list-unstyled">
        <li><a href="/products/category1" className="text-primary text-decoration-none">Category 1</a></li>
        <li><a href="/products/category2" className="text-primary text-decoration-none">Category 2</a></li>
        <li><a href="/products/category3" className="text-primary text-decoration-none">Category 3</a></li>
      </ul>
    </div>
  );
};

const Header = ({ isGridView, toggleView }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h1 className="h4 fw-bold">Product List</h1>
      <button 
        onClick={toggleView} 
        className="btn btn-primary"
      >
        {isGridView ? "Switch to List View" : "Switch to Grid View"}
      </button>
    </div>
  );
};

const ProductList = () => {
  const [isGridView, setIsGridView] = useState(false);
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        const fetchedProducts = response.data;
        const filteredProducts = category
          ? fetchedProducts.filter(product => product.category.toLowerCase().includes(category.toLowerCase()))
          : fetchedProducts;
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [category]);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4">
        <Header isGridView={isGridView} toggleView={toggleView} />
        <div className={isGridView ? "row g-3" : "list-group"}>
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className={isGridView ? "col-md-4" : "list-group-item list-group-item-action p-3 d-flex align-items-center gap-3"}
                style={isGridView ? { maxWidth: "300px" } : { maxWidth: "920px" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-thumbnail"
                  style={isGridView ? { width: "100%", height: "auto" } : { width: "150px", height: "150px" }}
                />
                <div className={isGridView ? "mt-2" : "ms-3"}>
                  <h5 className="fw-bold mb-1">{product.name}</h5>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="text-primary fw-bold">{product.price}</span>
                    <span className="text-muted text-decoration-line-through">{product.originalPrice}</span>
                  </div>
                  {!isGridView && (
                    <>
                      <div className="d-flex gap-3 text-muted mb-2">
                        <span>⭐ {product.rating}</span>
                        <span>{product.orders} orders</span>
                        <span className="text-success">{product.shipping}</span>
                      </div>
                      <p className="small text-muted">{product.description}</p>
                    </>
                  )}
                  <button className="btn btn-link p-0 text-decoration-none">View details</button>
                </div>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
