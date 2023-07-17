import React from "react";
import "./PaymentCard.css";

function PaymentCard({
  name,
  group,
  paymentFor,
  timeOfPayment,
  amountOfPayment,
}) {
  return (
    <div className="payment-card">
      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>{group}</p>
      </div>
      <div>
        <p>{paymentFor.charAt(0).toUpperCase() + paymentFor.slice(1)}</p>
      </div>
      <div>
        <p>{timeOfPayment}</p>
      </div>
      <div>
        <p>{amountOfPayment} sum</p>
      </div>
    </div>
  );
}

export default PaymentCard;
