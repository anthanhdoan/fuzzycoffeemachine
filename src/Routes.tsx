import React from "react";
import { BrowserRouter as Router, Routes as R, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";

const Routes = () => {
  return (
    <Router>
      <Navbar />

      <R>
        <Route path="/" element={<Home />} />
        <Route path="/productsData" element={<Products />} />
      </R>
    </Router>
  );
};

export default Routes;
