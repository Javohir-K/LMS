import React from "react";
import "./Homepage.css";
import PaymentCard from "../../components/PaymentCard";

function RecentPayments() {
  return (
    <div className="recent-payments">
      <h2>Recent Payments</h2>
      <div className="recent-payments-list wrapper">
        <div className="rpl-table-header">
          <div>
            <p>Full name</p>
          </div>
          <div>
            <p>Subject</p>
          </div>
          <div>
            <p>Group</p>
          </div>
          <div>
            <p>PaymentFor</p>
          </div>
          <div>
            <p>Date</p>
          </div>
          <div>
            <p>Amount</p>
          </div>
        </div>
        <div className="rpl-table-content">
          <PaymentCard name={'John Doe'} subject={'IELTS'} group={'IE-001'} paymentFor={'July, 2023'} timeOfPayment={'7 July, 2023'} amountOfPayment={'300,000 sum'}/>
          <PaymentCard name={'John Doe'} subject={'IELTS'} group={'IE-001'} paymentFor={'July, 2023'} timeOfPayment={'7 July, 2023'} amountOfPayment={'300,000 sum'}/>
          <PaymentCard name={'John Doe'} subject={'IELTS'} group={'IE-001'} paymentFor={'July, 2023'} timeOfPayment={'7 July, 2023'} amountOfPayment={'300,000 sum'}/>
          <PaymentCard name={'John Doe'} subject={'IELTS'} group={'IE-001'} paymentFor={'July, 2023'} timeOfPayment={'7 July, 2023'} amountOfPayment={'300,000 sum'}/>
          <PaymentCard name={'John Doe'} subject={'IELTS'} group={'IE-001'} paymentFor={'July, 2023'} timeOfPayment={'7 July, 2023'} amountOfPayment={'300,000 sum'}/>
          <PaymentCard name={'John Doe'} subject={'IELTS'} group={'IE-001'} paymentFor={'July, 2023'} timeOfPayment={'7 July, 2023'} amountOfPayment={'300,000 sum'}/>
          <PaymentCard name={'John Doe'} subject={'IELTS'} group={'IE-001'} paymentFor={'July, 2023'} timeOfPayment={'7 July, 2023'} amountOfPayment={'300,000 sum'}/>
          <PaymentCard name={'John Doe'} subject={'IELTS'} group={'IE-001'} paymentFor={'July, 2023'} timeOfPayment={'7 July, 2023'} amountOfPayment={'300,000 sum'}/>
          <PaymentCard name={'John Doe'} subject={'IELTS'} group={'IE-001'} paymentFor={'July, 2023'} timeOfPayment={'7 July, 2023'} amountOfPayment={'300,000 sum'}/>
          <PaymentCard name={'John Doe'} subject={'IELTS'} group={'IE-001'} paymentFor={'July, 2023'} timeOfPayment={'7 July, 2023'} amountOfPayment={'300,000 sum'}/>
          <PaymentCard name={'John Doe'} subject={'IELTS'} group={'IE-001'} paymentFor={'July, 2023'} timeOfPayment={'7 July, 2023'} amountOfPayment={'300,000 sum'}/>
        </div>
      </div>
    </div>
  );
}

export default RecentPayments;
