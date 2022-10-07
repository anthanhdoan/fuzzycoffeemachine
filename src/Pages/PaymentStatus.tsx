import React, {useEffect} from 'react';
import './PaymentStatus.css'
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {ICartItems, CartContext} from "../Contexts/CartContext";
import {PersonalDetailsContext} from "../Contexts/PersonalDetailsContext";
import productsData from "../Mockdata/ProductsData";
import {FaBan, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaShippingFast, FaTwitterSquare} from 'react-icons/fa'
import Button, {EIntent} from "../Components/UI/Button";
import {useContext} from "react";

const PaymentStatus = () => {
  const [queryParams, setQueryParams] = useSearchParams()
  const orderInfo = JSON.parse(queryParams.get("obj")!)
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useContext(CartContext);
  const [personalDetails, setPersonalDetails] = useContext(PersonalDetailsContext);

  const productInfo = orderInfo.cartData.map(
      (product: ICartItems, i: number) => {
        const productAmount = product.amount
        const productName = productsData[product.productId - 1].name
        return (<li key={i}>{productAmount}x {productName}</li>)
      })

  const paymentSuccessful = (
      <div className="payment-status-container">
        <h1 className="ps-header">Congratulations!</h1>
        <FaShippingFast style={{fontSize: "80px", margin: "20px 0px", alignSelf: "center"}}/>
        <div className="ps-productInfo-container">
          <h3 className="ps-productInfo-header">Your order of</h3>
          <ul>{productInfo}</ul>
          <h3 className="ps-shippingInfo-header">Is on its way to</h3>
          <p>{orderInfo.street} {orderInfo.streetNumber}</p>
          <p>{orderInfo.postalCode} {orderInfo.city}</p>
        </div>
        <div className="ps-social-container">
          <p>Tell your friends and colleagues about your support of local businesses!</p>
          <div className="ps-social-icons">
            <FaFacebookSquare className="ps-social-icon"/>
            <FaInstagramSquare className="ps-social-icon"/>
            <FaTwitterSquare className="ps-social-icon"/>
            <FaLinkedin className="ps-social-icon"/>
          </div>
        </div>
      </div>
  );

  const paymentFailed = (
      <div className="payment-status-container">
        <h1 className="pf-header">Oops!</h1>
        <h1 className="pf-header">Something went wrong!</h1>
        <FaBan style={{fontSize: "80px", margin: "20px 0px", alignSelf: "center", color: "red"}}/>
        <p style={{marginBottom: "20px"}}>Please try again...</p>
        <Button onClick={() => navigate('/cart')} text={"BACK"} intent={EIntent.Transparent}
                className="pf-btn-back"/>
      </div>
  )

  useEffect(
      () => {
        if (pathname === "/payment-failure") {
          const personalDetails = () => {
            const tmpObj = {...orderInfo}
            delete tmpObj.cartData
            return tmpObj
          }
          setPersonalDetails(personalDetails())
          setCartItems(orderInfo.cartData)
        }
      }
      , [])

  const renderPaymentStatus = () => {
    if (pathname === "/payment-success") return paymentSuccessful
    if (pathname === "/payment-failure") return paymentFailed
  }

  return (
      <div className="paymentStatus">
        {renderPaymentStatus()}
      </div>
  )

}

export default PaymentStatus;