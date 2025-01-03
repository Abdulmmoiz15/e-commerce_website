// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <Router>
      <div className="container-fluid p-4">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Product List Page */}
          <Route path="/products/:category" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
