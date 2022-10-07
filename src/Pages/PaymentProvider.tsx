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

  const paramStringSuccess = (cartData: ICartItems, personalData: IPersonalDetails) => {
    const tempObj: any = {cartData, ...personalData}
    delete tempObj['cardCvc'];
    delete tempObj['cardDate'];
    delete tempObj['cardNumber'];
    return `${JSON.stringify(tempObj)}`
  }

  const paramStringFailure = (cartData: ICartItems, personalData: IPersonalDetails) => {
    const tempObj: any = {cartData, ...personalData}
    return `${JSON.stringify(tempObj)}`
  }

  return (
      <div className="pp-container">
        <h1 className="pp-header">Process mock payment</h1>
        <a className="pp-btn pp-success"
           href={`http://localhost:3000/payment-success?obj=${paramStringSuccess(cartItems, personalDetails)}`}>SUCCESS</a>
        <a className="pp-btn pp-failure"
           href={`http://localhost:3000/payment-failure?obj=${paramStringFailure(cartItems, personalDetails)}`}>FAILURE</a>
        <Button onClick={() => navigate('/cart')} className="pp-btn pp-back" text={"BACK"}
                intent={EIntent.Transparent}/>
      </div>
  );
};

export default PaymentProvider;
