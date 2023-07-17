import React, { useEffect, useState } from "react";
import "./NewPaymentPage.css";
import { db } from "../../firebase";
import { Navigate } from "react-router-dom";
import { format } from "date-fns";

function NewPaymentPage() {
  const year = new Date().getFullYear();
  const [studentId, setStudentId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [groupId, setGroupId] = useState("");
  const [month, setMonth] = useState("");
  const [thisYear, setThisYear] = useState(year);
  const [studentList, setStudentList] = useState([]);
  const [groups, setGroups] = useState([]);
  const [payments, setPayments] = useState([]);
  const [courses, setCourses] = useState([]);
  const [amount, setAmount] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const currentTime = format(new Date(), "MMM d, yyyy HH:mm");

  useEffect(() => {
    db.collection("students").onSnapshot((snapshot) => {
      setStudentList(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
    db.collection("groups").onSnapshot((snapshot) => {
      setGroups(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
    db.collection("courses").onSnapshot((snapshot) => {
      setCourses(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
    db.collection("payments").onSnapshot((snapshot) => {
      setPayments(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);

  const arr = payments.filter((x) => {
    return x.data.studentId === studentId && x.data.paymentFor === month;
  });

  const addPayment = (e) => {
    e.preventDefault();

    if (studentId === "" || thisYear === "" || month === "" || amount === 0) {
      alert("All fields must be filled");
    } else if (arr.length !== 0) {
      alert("This payment is already done. Try changing it!");
    } else {
      db.collection("payments").add({
        studentId: studentId,
        amount: amount,
        paymentFor: month,
        paymentTime: currentTime,
        year: thisYear,
        groupId: groupId,
      });
      setRedirect(true);
    }
  };

  // console.log(arr);

  if (redirect) {
    return <Navigate to={"/payments"} />;
  }

  return (
    <div className="new-payment-page">
      <div className="npp-header">
        <h2>New Payment</h2>
      </div>
      <div className="npp-form">
        <form action="" onSubmit={addPayment} className="wrapper">
          <div>
            <h4>Course</h4>
            <select
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
            >
              <option value="selectStudent">Select Course</option>
              {courses.map((item) => (
                <option value={item.id}>{item.data.name}</option>
              ))}
            </select>
          </div>
          <div>
            <h4>Group</h4>
            <select
              value={groupId}
              onChange={(e) => {
                setGroupId(e.target.value);
              }}
            >
              <option value="selectStudent">Select Group</option>
              {groups
                .filter((x) => {
                  return x.data.courseId === courseId;
                })
                .map((item) => (
                  <option value={item.id}>{item.data.name}</option>
                ))}
            </select>
          </div>
          <div>
            <h4>Student</h4>
            <select
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            >
              <option value="selectStudent">Select Student</option>
              {studentList
                .filter((st) => {
                  return st.data.groupId === groupId;
                })
                .map((item) => (
                  <option value={item.id}>{item.data.name}</option>
                ))}
            </select>
          </div>
          <div>
            <h4>Payment For?</h4>
            <select value={month} onChange={(e) => setMonth(e.target.value)}>
              <option value="month">Select month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
          <div>
            <h4>Year</h4>
            <input
              type="text"
              value={thisYear}
              onChange={(e) => setThisYear(e.target.value)}
            />
          </div>
          <div>
            <h4>Amount</h4>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button className="def-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default NewPaymentPage;
