import React from "react";
import "./PaymentCard.css";

function PaymentCard({
  name,
  subject,
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
        <p>{subject}</p>
      </div>
      <div>
        <p>{group}</p>
      </div>
      <div>
        <p>{paymentFor}</p>
      </div>
      <div>
        <p>{timeOfPayment}</p>
      </div>
      <div>
        <p>{amountOfPayment}</p>
      </div>
    </div>
  );
}

export default PaymentCard;
