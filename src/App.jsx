import React from "react";
import Navbar from "./component/Navbar";
import Portfolio from "./component/portfolio";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
  
    <Router>
      {/* Navbar stays fixed at top */}
      <Navbar />
      
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
