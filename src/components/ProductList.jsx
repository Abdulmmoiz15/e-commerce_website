import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const productlist = [
  // Product list remains the same as in your provided code
];

const categories = {
  Electronics: ["electronics", "electronic", "electro", "electric"],
  "Mobile and accessories": ["mobile", "accessories", "mobile accessories", "mob"],
  books: ["books", "book"],
};

const Sidebar = () => {
  return (
    <div className="col-md-3 bg-light p-3 rounded">
      <h2 className="h5 fw-bold mb-3">Category</h2>
      <ul className="list-unstyled">
        <li><input type="checkbox" className="me-2" /> Mobile Accessory</li>
        <li><input type="checkbox" className="me-2" /> Electronics</li>
        <li><input type="checkbox" className="me-2" /> Smartphones</li>
      </ul>

      <h2 className="h5 fw-bold mt-4 mb-3">Brands</h2>
      <ul className="list-unstyled">
        <li><input type="checkbox" className="me-2" /> Samsung</li>
        <li><input type="checkbox" className="me-2" /> Apple</li>
        <li><input type="checkbox" className="me-2" /> Huawei</li>
      </ul>

      <h2 className="h5 fw-bold mt-4 mb-3">Features</h2>
      <ul className="list-unstyled">
        <li><input type="checkbox" className="me-2" /> Metallic</li>
        <li><input type="checkbox" className="me-2" /> Plastic Cover</li>
        <li><input type="checkbox" className="me-2" /> 8GB RAM</li>
      </ul>
    </div>
  );
};

const Header = ({ isGridView, toggleView }) => {
  const { category } = useParams();
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h1 className="h4 fw-bold">{`12,911 items in ${category}`}</h1>
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
    const fetchProducts = () => {
      const matchedCategory = Object.keys(categories).find(cat =>
        categories[cat].some(c => category.toLowerCase().includes(c))
      );
      const filteredProducts = productlist.filter(product => product.category === matchedCategory);
      setProducts(filteredProducts);
    };
    fetchProducts();
  }, [category]);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  return (
    <div className="row">
      {/* Sidebar */}
      <div className="col-lg-3">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="col-lg-9">
        <Header isGridView={isGridView} toggleView={toggleView} />

        <div className={isGridView ? "row row-cols-1 row-cols-md-3 g-4" : "list-group"}>
          {products.map((product) => (
            <div
              key={product.id}
              className={isGridView ? "col" : "list-group-item list-group-item-action flex-column align-items-start border rounded mb-3"}
            >
              <div className={isGridView ? "card h-100" : "d-flex align-items-center"}>
                <div
                  style={{
                    width: isGridView ? "100%" : "150px",
                    height: "150px",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid"
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                  />
                </div>
                <div className={isGridView ? "card-body" : "d-flex flex-column"}>
                  <h5 className="card-title fw-bold">{product.name}</h5>
                  <p className={isGridView ? "card-text text-muted small" : "text-muted small mb-2"}>
                    {product.description}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-primary fw-bold">{product.price}</span>
                    <span className="text-muted text-decoration-line-through">{product.originalPrice}</span>
                  </div>
                  <div className={isGridView ? "mt-2 text-muted small" : "d-flex gap-3 mt-2 text-muted small"}>
                    <span>⭐ {product.rating}</span>
                    <span>{product.orders} orders</span>
                    <span className="text-success">{product.shipping}</span>
                  </div>
                  <button className="btn btn-link text-start p-0 mt-2">
                    View details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
