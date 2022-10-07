import React, {SyntheticEvent, useContext} from 'react';
import './Checkout.css'
import Button, {EIntent} from "../Components/UI/Button";
import {useNavigate} from "react-router-dom";
import {IPersonalDetails, PersonalDetailsContext} from "../Contexts/PersonalDetailsContext";

const Checkout = () => {
  const navigate = useNavigate()

  const [personalDetails, setPersonalDetails, updateDetails] = useContext(PersonalDetailsContext)

  const updateHandler = (field: any) => {
    return (val: any) => updateDetails(field, val.target.value)
  }

  const update = (key: keyof IPersonalDetails, value: string) => {
    const tmpDetails = {...personalDetails};
    tmpDetails[key] = value;
    setPersonalDetails(tmpDetails);
  }

  const formSubmitHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    navigate('/payment-provider');
  }

  return (
      <form onSubmit={formSubmitHandler}>
        <div className="checkout-form-container">
          <h3 className="checkout-header">Personal information</h3>
          <input required
                 onChange={(e) => update('name', e.target.value)}
                 type="text"
                 placeholder="Name*"
                 className="checkout-input checkout-input-name"
                 value={personalDetails.name}
          />
          <input required
                 onChange={(e) => update('email', e.target.value)}
                 type="email"
                 placeholder="Email*"
                 className="checkout-input checkout-input-email"
                 value={personalDetails.email}
          />
          <input required
                 onChange={(e) => update('street', e.target.value)}
                 type="text"
                 placeholder="Street*"
                 className="checkout-input checkout-input-street"
                 value={personalDetails.street}
          />
          <input required
                 onChange={(e) => update('streetNumber', e.target.value)}
                 type="number"
                 placeholder="Number*"
                 className="checkout-input checkout-input-number"
                 value={personalDetails.streetNumber}
          />
          <input required
                 onChange={(e) => update('postalCode', e.target.value)}
                 type="text"
                 placeholder="Postal Code*"
                 className="checkout-input checkout-input-postal"
                 value={personalDetails.postalCode}
          />
          <input required
                 onChange={(e) => update('city', e.target.value)}
                 type="text"
                 placeholder="City*"
                 className="checkout-input checkout-input-city"
                 value={personalDetails.city}
          />

          <h3 className="checkout-header">Payment details</h3>
          <input required
                 onChange={(e) => update('cardNumber', e.target.value)}
                 type="number"
                 placeholder="Card number*"
                 className="checkout-input checkout-input-card-number"
                 value={personalDetails.cardNumber}
          />
          <input required
                 onChange={(e) => update('cardDate', e.target.value)}
                 type="string"
                 placeholder="MM/YY*"
                 className="checkout-input checkout-input-card-date"
                 value={personalDetails.cardDate}
          />
          <input required
                 onChange={(e) => update('cardCvc', e.target.value)}
                 type="number"
                 placeholder="CVC*"
                 className="checkout-input checkout-input-card-cvc"
                 value={personalDetails.cardCvc}
          />
        </div>
        <div className="checkout-buttons-container">
          <Button onClick={() => navigate('/cart')} text="CANCEL" intent={EIntent.Transparent}
                  className={"checkout-btn-cancel"}/>
          <Button type={"submit"} text="CONTINUE" intent={EIntent.Solid}
                  className="checkout-btn-continue"/>
        </div>
      </form>
  );
};

export default Checkout;
