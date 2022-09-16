import React from "react";
import {BrowserRouter as Router, Route, Routes as R} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetailPage from "./Pages/ProductDetailPage";
import Checkout from "./Pages/Checkout";

const Routes = () => {
  return (
      <Router>
        <Navbar/>

        <R>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/:id" element={<ProductDetailPage/>}/>
          <Route path="/cart" element={<Checkout/>}/>
        </R>
      </Router>
  );
};

export default Routes;
