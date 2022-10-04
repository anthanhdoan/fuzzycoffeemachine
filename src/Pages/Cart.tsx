import React, {useContext, useEffect, useState} from 'react';
import './Cart.css'
import {useNavigate} from "react-router-dom";
import Button, {EIntent} from "../Components/UI/Button";
import {CartContext, ICartItems} from "../Contexts/CartContext";
import productsData from "../Mockdata/ProductsData";
import {IProduct} from "../Components/ProductCard";
import {BsTrash} from "react-icons/bs";

const Cart = () => {
  const [disabledButton, setDisabledButton] = useState(true)
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cartItems, setCartItems, updateCart, addCartItem] = useContext(CartContext);

  const totalPrice = (): string => {
    return `€${cartItems
        .map((item: ICartItems) => item.amount * productsData[item.productId - 1].price).reduce((prev: number, cur: number) => prev + cur, 0).toFixed(2).replace('.', ',')}`
  }

  useEffect(() => {
    if (cartItems.length === 0) return setDisabledButton(true)
    if (cartItems.length > 0) return setDisabledButton(false)
  }, [cartItems])

  const renderCartItems = () => {
    return cartItems.map((cartItem: ICartItems, i: number) => {
      const currentProduct: IProduct = productsData[cartItem.productId - 1]
      const totalItemPrice = `${currentProduct.currency + (currentProduct.price * cartItem.amount).toFixed(2).replace('.', ',')}`


      if (cartItem.amount > 0) {
        return (
            <div key={i} className="cart-item">
              <img className="cart-item-image" src={currentProduct.images[0]} alt="coffee machine"></img>
              <div className="cart-item-description">{currentProduct.longDescription}</div>
              <div className="cart-item-control">
                <div className="cart-counter-container">
                  <Button onClick={() => updateCart(currentProduct, "decrement")}
                          text={"–"} intent={EIntent.Solid}
                          className="cart-counter-button"></Button>
                  <div className="cart-counter-label">{cartItem.amount}</div>
                  <Button onClick={() => updateCart(currentProduct, "increment")} text="+" intent={EIntent.Solid}
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
            <p className="cart-summary-articles-price">{totalPrice()}</p>
            <p className="cart-summary-shipping-label">Shipping costs</p>
            <p className="cart-summary-shipping-price">€0,00</p>
            <div className="cart-summary-line"></div>
            <p className="cart-summary-total-label">Total</p>
            {/*<p className="cart-summary-total-price">{totalPrice()}</p>*/}
            <p className="cart-summary-total-price">{totalPrice()}</p>
          </div>
          <div className="cart-buttons-container">
            <Button onClick={() => navigate(-1)} text="BACK" intent={EIntent.Transparent} className={"cartbtn-back"}/>
            <button onClick={() => navigate('/checkout')} className={"cartbtn-checkout"}
                    disabled={disabledButton}>CHECKOUT
            </button>
          </div>
        </div>

      </div>
  );
};

export default Cart;
