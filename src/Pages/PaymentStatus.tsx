import React from 'react';
import './PaymentStatus.css'
import {useLocation, useSearchParams} from "react-router-dom";

const PaymentStatus = () => {
  const [queryParams, setQueryParams] = useSearchParams()
  let decoded = decodeURIComponent(queryParams.toString().slice(0, -1))
  console.log(decoded)
  console.log(JSON.parse(decoded))
  const orderInfo = JSON.parse(decoded)


  return (
      <div className="center">
        <p>{orderInfo.street} {orderInfo.streetNumber}</p>
        <p>{orderInfo.postalCode} {orderInfo.city}</p>
        <p></p>
      </div>
  );
};

export default PaymentStatus;
