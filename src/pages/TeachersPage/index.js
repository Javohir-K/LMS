import React, { useEffect, useState } from "react";
import "./TeachersPage.css";
import TeacherCard from "../../components/TeacherCard";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import LoadingPage from "../LoadingPage";
import Logo from "../../logo.png";

function TeachersPage() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    db.collection("teachers").onSnapshot((snapshot) => {
      setTeachers(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);
  if (teachers.length === 0) {
    return <LoadingPage />;
  }

  return (
    <div className="teachers-page">
      <div className="tp-top">
        <h2>Our Teachers</h2>
        <Link to={"/add-teacher"}>
          <button className="def-btn">Add teacher</button>
        </Link>
      </div>
      <div className="teachers-list">
        {teachers.map((teacher) => (
          <TeacherCard
            _id={teacher.id}
            image={teacher.data.image}
            name={teacher.data.name}
            subject={teacher.data.subject}
            bio={teacher.data.bio}
            level={teacher.data.level}
            rating={"5.0"}
            age={teacher.data.age}
          />
        ))}
      </div>
    </div>
  );
}

export default TeachersPage;
