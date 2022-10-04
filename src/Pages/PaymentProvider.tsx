import React, {useContext} from 'react';
import './PaymentProvider.css'
import Button, {EIntent} from "../Components/UI/Button";
import {useNavigate} from "react-router-dom";
import {CartContext, ICartItems} from "../Contexts/CartContext";
import {IPersonalDetails, PersonalDetailsContext} from "../Contexts/PersonalDetailsContext";

const PaymentProvider = () => {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useContext(CartContext);
  const [personalDetails, setPersonalDetails] = useContext(PersonalDetailsContext);


  // Show product name, amount, price, total price
  // Show street, streetnumber, postal code, city
  const paramStringSuccess = (cartData: ICartItems, personalData: IPersonalDetails) => {
    const tempObj: any = {cartData, ...personalData}
    delete tempObj['cardCvc'];
    delete tempObj['cardDate'];
    delete tempObj['cardNumber'];
    return `${JSON.stringify(tempObj)}`
  }

  // pass full objects for cartItems and personalDetails
  //JSON.stringify
  const paramStringFailure = (cartData: ICartItems, personalData: IPersonalDetails) => {
    return `${JSON.stringify(cartData)}${JSON.stringify(personalData)}`
  }

  return (
      <div className="pp-container">
        <p>{paramStringSuccess(cartItems, personalDetails)}</p>
        <h1 className="pp-header">Process mock payment</h1>
        <a className="pp-btn pp-success"
           href={`http://localhost:3000/payment-success?${paramStringSuccess(cartItems, personalDetails)}`}>SUCCESS</a>
        <a className="pp-btn pp-failure"
           href={`http://localhost:3000/payment-failure?${paramStringFailure(cartItems, personalDetails)}`}>FAILURE</a>
        <Button onClick={() => navigate(-1)} className="pp-btn pp-back" text={"BACK"} intent={EIntent.Transparent}/>
      </div>
  );
};

export default PaymentProvider;
