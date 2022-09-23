import React from 'react';
import './Checkout.css'
import Button, {EIntent} from "../Components/UI/Button";

const Checkout = () => {
  return (
      <>
        <div className="checkout-form-container">
          <h3 className="checkout-shipping-header checkout-header">Shipping Details</h3>
          <input type="text" placeholder="Street*" className="checkout-input checkout-input-street"/>
          <input type="text" placeholder="Postal Code*" className="checkout-input checkout-input-postal"/>
          <input type="text" placeholder="Number*" className="checkout-input checkout-input-number"/>
          <input type="text" placeholder="City*" className="checkout-input checkout-input-city"/>
          <h3 className="checkout-payment-header checkout-header">Payment Details</h3>
          <input type="text" placeholder="Email*" className="checkout-input checkout-input-email"/>
          <input type="text" placeholder="Name*" className="checkout-input checkout-input-name"/>
          <input type="text" placeholder="Card number*" className="checkout-input checkout-input-card-number"/>
          <input type="text" placeholder="MM/YY*" className="checkout-input checkout-input-card-date"/>
          <input type="text" placeholder="CVC*" className="checkout-input checkout-input-card-cvc"/>
        </div>
        <div className="checkout-buttons-container">
          <Button text="CANCEL" intent={EIntent.Transparent} className="checkout-btn-cancel"/>
          <Button text="CONTINUE" intent={EIntent.Solid} className="checkout-btn-continue"/>
        </div>
      </>
  );
};

export default Checkout;
