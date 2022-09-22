import React, {useContext, useMemo} from 'react';
import {Link, useParams} from "react-router-dom";
import productsData from "../Mockdata/ProductsData";
import './ProductDetailPage.css'
import Button, {EIntent} from "../Components/UI/Button";
import Carousel from "../Components/Carousel";
import {CartContext, ICartItems} from "../Contexts/CartContext";

const ProductDetailPage = () => {
  let {id} = useParams()
  let currentProduct = productsData[Number(id) - 1]

  const [cartItems, setCartItems, incrementCartItem] = useContext(CartContext);

  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault()
    incrementCartItem(currentProduct)
  }

  return (
      <>
        <div className="product-detail-title">
          <p>{currentProduct.name}</p>
        </div>
        <Carousel product={currentProduct} productId={id}/>
        <div className="product-detail-info">
          <p className="product-detail-price">{`${currentProduct.currency}${currentProduct.price}`}</p>
          <ul className="product-detail-usps">
            <li>Next day delivery</li>
            <li>2 year warranty</li>
            <li>No shipping fee</li>
          </ul>
          <p className="product-detail-description">{currentProduct.longDescription}</p>
        </div>
        <div className="product-detail-buttons-container">
          <Link to={"/products"}>
            <Button text="BACK" intent={EIntent.Transparent} className={"pdbtn-back"}/>
          </Link>
          <Button onClick={clickHandler} text="ADD TO CART" intent={EIntent.Solid} className="pdbtn-addtocart"/>
        </div>
      </>
  );
};

export default ProductDetailPage;