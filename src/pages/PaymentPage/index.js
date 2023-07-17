import React, { useEffect, useState } from "react";
import "./PaymentPage.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import PaymentCard from "../../components/PaymentCard";
import { db } from "../../firebase";

function PaymentPage() {
  const [searchField, setSearchField] = useState("");
  const [payments, setPayments] = useState([]);
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    db.collection("payments")
    .orderBy("paymentTime","desc")
    .onSnapshot((snapshot) => {
      setPayments(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
    db.collection("students").onSnapshot((snapshot) => {
      setStudents(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
    db.collection("groups").onSnapshot((snapshot) => {
      setGroups(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

  // console.log(payments);

  return (
    <div className="payment-page">
      <div className="payment-header">
        <h2>Payments</h2>
        <div className="search-wrap">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            name=""
            className="search bg-grey"
            placeholder="Search"
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            id=""
          />
        </div>
        <Link to={"/new-payment"}>
          <button className="def-btn">New Payment</button>
        </Link>
      </div>
      <div className="payment-list">
        <div className="recent-payments-list wrapper">
          <div className="rpl-table-header">
            <div>
              <p>Full name</p>
            </div>
            <div>
              <p>Group</p>
            </div>
            <div>
              <p>Payment Month</p>
            </div>
            <div>
              <p>Payment Time</p>
            </div>
            <div>
              <p>Amount</p>
            </div>
          </div>
          <div className="rpl-table-content">
            {payments.map((item) => (
              <PaymentCard
                name={students
                  .filter((x) => {
                    return x.id === item.data.studentId;
                  })
                  .map((a) => a.data.name)}
                group={groups
                  .filter((x) => {
                    return x.id === item.data.groupId;
                  })
                  .map((a) => a.data.name)}
                paymentFor={item.data.paymentFor}
                timeOfPayment={item.data.paymentTime}
                amountOfPayment={new Intl.NumberFormat().format(
                  parseInt(item.data.amount)
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
