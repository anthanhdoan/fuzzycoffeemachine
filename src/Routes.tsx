import React from "react";
import {BrowserRouter as Router, Route, Routes as R} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetailPage from "./Pages/ProductDetailPage";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import PaymentProvider from "./Pages/PaymentProvider";
import PaymentStatus from "./Pages/PaymentStatus";

const Routes = () => {
  return (
      <Router>
        <Navbar/>

        <R>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/:id" element={<ProductDetailPage/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/payment-provider' element={<PaymentProvider/>}/>
          <Route path='/payment-success' element={<PaymentStatus/>}/>
          <Route path='/payment-failure' element={<PaymentStatus/>}/>
        </R>
      </Router>
  );
};

export default Routes;