import React from "react";
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import "./../node_modules/bootstrap/dist/css/Bootstrap.min.css"
import "./App.css";

function App() {
  return (
    <div className="app">
    <Header />
    <Navigation />
    {/* Other components or sections */}
  </div>  
    
  );
}

export default App;
