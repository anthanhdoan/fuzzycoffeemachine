import React from 'react';
import './Cart.css'
import {Link} from "react-router-dom";
import Button, {EIntent} from "../Components/UI/Button";

const Cart = () => {
  return (
      <div>
        <h1 className="cart-header"><p>Shopping Cart</p></h1>
        {/* Render products added to basket */}
        <div className="cart-footer">
          <div className="cart-summary">
            <p className="cart-summary-articles-label">Total from articles</p>
            <p className="cart-summary-articles-price">€Sum</p>
            <p className="cart-summary-shipping-label">Shipping costs</p>
            <p className="cart-summary-shipping-price">€Shipping</p>
            <div className="cart-summary-line"></div>
            <p className="cart-summary-total-label">Total</p>
            <p className="cart-summary-total-price">€Total</p>
          </div>
        </div>
        <div className="cart-buttons-container">
          <Link to={"/products"}>
            <Button text="BACK" intent={EIntent.Transparent} className={"cartbtn-back"}/>
          </Link>
          <Button text="CHECKOUT" intent={EIntent.Solid} className={"cartbtn-checkout"}/>
        </div>
      </div>
  );
};

export default Cart;
