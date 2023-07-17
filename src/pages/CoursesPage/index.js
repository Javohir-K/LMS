import React, { useEffect, useState } from "react";
import "./CoursesPage.css";
import CourseCard from "../../components/CourseCard";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import LoadingPage from "../LoadingPage";

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    db.collection("courses").onSnapshot((snapshot) => {
      setCourses(
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

  if (courses.length === 0) {
    return <LoadingPage />;
  }

  return (
    <div className="course-page">
      <div className="cp-top">
        <h2>All Courses</h2>
        <Link to={"/add-course"}>
          <button className="def-btn">Add course</button>
        </Link>
      </div>
      <div className="courses-list">
        {courses.map((item) => (
          <CourseCard
            title={item.data.name}
            _id={item.id}
            cover={
              "https://www.englishexplorer.com.sg/wp-content/uploads/2019/05/a-short-history-of-how-the-english-language-came-to-be.jpg"
            }
            schedule={item.data.schedule}
            numberOfGroups={
              groups.filter((x) => {
                return x.data.courseId === item.id;
              }).length
            }
            numberOfStudents={
              students.filter((s) => {
                return s.data.courseId === item.id;
              }).length
            }
          />
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;
