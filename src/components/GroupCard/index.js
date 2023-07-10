import React from "react";
import "./GroupCard.css";
import { Link } from "react-router-dom";

function GroupCard({ _id, level, name, numberOfStudents, schedule, teacher }) {
  return (
    <div className="group-card wrapper">
      <div>
        <p className="text-accent">#{level}</p>
      </div>
      <div>
        <h4>{name}</h4>
      </div>
      <div>
        <p>{numberOfStudents}</p>
      </div>
      <div>
        <p>{schedule}</p>
      </div>
      <div className="group-teacher">
        <Link to={`/teachers/${_id}`}>{teacher}</Link>
      </div>
    </div>
  );
}

export default GroupCard;
