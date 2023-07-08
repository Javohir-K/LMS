import React from "react";
import "./GroupCard.css";
import { Link } from "react-router-dom";

function GroupCard({ level, name, numberOfStudents, schedule, teacher, index }) {
  return (
    <div className="group-card wrapper">
      <div>
        <p>{index}</p>
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
      <div>
        <Link to={"/teachers"}>{teacher}</Link>
      </div>
    </div>
  );
}

export default GroupCard;
