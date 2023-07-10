import React from "react";
import "./CourseCard.css";
import { Link } from "react-router-dom";

function CourseCard({
  _id,
  title,
  cover,
  schedule,
  numberOfGroups,
  numberOfStudents,
}) {
  return (
    <div className="course-card wrapper">
      <div className="cc-top">
        <Link to={`/courses/${_id}`}>
          <img src={cover} alt="" />
        </Link>
      </div>
      <div className="cc-bottom">
        <h3>{title}</h3>
        <p>Schedule: {schedule}</p>
        <div className="cc-info">
          <p>Groups: {numberOfGroups}</p>
          <p>Students: {numberOfStudents}</p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
