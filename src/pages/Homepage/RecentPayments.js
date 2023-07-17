import React, { useEffect, useState } from "react";
import "./Homepage.css";
import PaymentCard from "../../components/PaymentCard";
import { db } from "../../firebase";

function RecentPayments() {
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

  return (
    <div className="recent-payments">
      <h2>Recent Payments</h2>
      <div className="recent-payments-list wrapper">
        <div className="rpl-table-header">
          <div>
            <p>Full name</p>
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
          {payments.slice(0, 10).map((item) => (
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
  );
}

export default RecentPayments;
