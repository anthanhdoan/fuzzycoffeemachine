import React, {ReactNode, useContext, useEffect} from 'react';
import './Cart.css'
import {Link, useNavigate} from "react-router-dom";
import Button, {EIntent} from "../Components/UI/Button";
import {CartContext, ICartItems} from "../Contexts/CartContext";
import productsData from "../Mockdata/ProductsData";
import {IProduct} from "../Components/ProductCard";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems, incrementCartItem, decrementCartItem] = useContext(CartContext);

  const totalPrice = (): ReactNode => {
    return (<p>{cartItems
            .map((item: ICartItems) => item.amount * productsData[item.productId].price).reduce((prev: number, cur: number) => prev + cur, 0)}</p>
    )
  }

  const decrementHandler = (product: IProduct) => {
    decrementCartItem(product)
  }
  const incrementHandler = (product: IProduct) => {
    incrementCartItem(product)
  }

  //  SET ITEM AMOUNT ON CHANGE OF INPUT
  const setItemAmount = () => {
  }
  const renderCartItems = () => {
    return cartItems.map((cartItem: ICartItems, i: number) => {
      const productIndex: number = cartItem.productId - 1
      const currentProduct: IProduct = productsData[productIndex]
      const totalItemPrice = `${currentProduct.currency + (currentProduct.price * cartItem.amount).toFixed(2).replace('.', ',')}`


      if (cartItem.amount > 0) {
        return (
            <div key={i} className="cart-item">
              <img className="cart-item-image" src={currentProduct.images[0]} alt="coffee machine"></img>
              <div className="cart-item-description">{currentProduct.longDescription}</div>
              <div className="cart-item-control">
                <div className="cart-counter-container">
                  <Button onClick={() => decrementHandler(currentProduct)} text="–" intent={EIntent.Solid}
                          className="cart-counter-button"/>
                  <input onChange={setItemAmount} type="text" value={cartItem.amount} className="cart-counter-input"/>
                  <Button onClick={() => incrementHandler(currentProduct)} text="+" intent={EIntent.Solid}
                          className="cart-counter-button"/>
                </div>
                <div
                    className="cart-item-price">{totalItemPrice}</div>
              </div>
            </div>
        )
      }
    })
  }

  return (
      <div className="cart-container">
        <h1 className="cart-header"><p>Shopping Cart</p></h1>
        {renderCartItems()}
        <div className="cart-footer">
          <div className="cart-summary">
            <p className="cart-summary-articles-label">Total from articles</p>
            <p className="cart-summary-articles-price">€Sum</p>
            <p className="cart-summary-shipping-label">Shipping costs</p>
            <p className="cart-summary-shipping-price">€0,00</p>
            <div className="cart-summary-line"></div>
            <p className="cart-summary-total-label">Total</p>
            {/*<p className="cart-summary-total-price">{totalPrice()}</p>*/}
            <p className="cart-summary-total-price">{'hi'}</p>
          </div>
          <div className="cart-buttons-container">
            <Button onClick={() => navigate(-1)} text="BACK" intent={EIntent.Transparent} className={"cartbtn-back"}/>
            <Button text="CHECKOUT" intent={EIntent.Solid} className={"cartbtn-checkout"}/>
          </div>
        </div>

      </div>
  );
};

export default Cart;
