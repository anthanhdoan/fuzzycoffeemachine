import React from "react";
import {BsCart3} from "react-icons/bs";
import "./ProductCard.css";
import {Link} from "react-router-dom";

interface IProduct {
  productId: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  images: Array<string>;
}

const ProductCard = (props: IProduct) => {
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
          <Link to={"/cart"} className="product-addtocart">
            <BsCart3 style={{strokeWidth: 0.5}}/>
          </Link>
        </div>
      </div>
  );
};

export default ProductCard;
