import React, {useContext} from "react";
import {BsCart3} from "react-icons/bs";
import "./ProductCard.css";
import {CartContext, ICartItems} from "../Contexts/CartContext";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  currency: string;
  images: Array<string>;
}

const ProductCard = (props: IProduct) => {
  const [cartItems, setCartItems, updateCart] = useContext(CartContext);

  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault()
    updateCart(props, "increment")
  }

  return (
      <div className="product-card">
        <h3 className="product-title">
          <p>{props.name}</p>
        </h3>
        <div className="product-grid">
          <img className="product-image" src={props.images[0]} alt=""/>
          <p className="product-description">{props.description}</p>
          <p className="product-price">
            {props.currency + props.price.toFixed(2).replace(".", ",")}
          </p>
          <button className="product-addtocart" onClick={clickHandler}>
            <BsCart3 style={{strokeWidth: 0.5}}/>
          </button>

        </div>
      </div>
  );
};

export default ProductCard;
