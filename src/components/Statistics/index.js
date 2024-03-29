import React, { useEffect, useState } from "react";
import "./Statistics.css";
import StatisticsCard from "../StatisticsCard";
import { format } from "date-fns";
import { db } from "../../firebase";

function Statistics() {
  const currentDate = format(new Date(), "MMM d, yyyy. 'Time:' hh:mm");
  const [teachers, setTeachers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [students, setStudents] = useState([]);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    db.collection("teachers").onSnapshot((snapshot) => {
      setTeachers(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
    db.collection("payments").onSnapshot((snapshot) => {
      setPayments(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
    db.collection("groups").onSnapshot((snapshot) => {
      setGroups(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
    db.collection("students").onSnapshot((snapshot) => {
      setStudents(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);

  let budget = 0;

  payments.map((x) => {
    budget += parseInt(x.data.amount);
  });

  return (
    <div className="statistics">
      <h2>Dashboard</h2>
      <p>{currentDate}</p>
      <div className="statistics-wrap">
        <StatisticsCard
          count={students.length}
          name={"Students"}
          icon={<i class="fa-solid fa-graduation-cap"></i>}
        />
        <StatisticsCard
          count={teachers.length}
          name={"Teachers"}
          icon={<i class="fa-solid fa-person-chalkboard"></i>}
        />
        <StatisticsCard
          count={groups.length}
          name={"Groups"}
          icon={<i class="fa-solid fa-book"></i>}
        />
        <StatisticsCard
          count={Math.floor(budget * 0.000086) + "$"}
          name={"Monthly budget"}
          icon={<i class="fa-solid fa-chart-simple"></i>}
        />
      </div>
    </div>
  );
}

export default Statistics;
