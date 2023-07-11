import React from "react";
import "./StudentCard.css";
import { Link } from "react-router-dom";

function StudentCard({ _id, name, phoneNumber, address, group }) {
  return (
    <Link to={`/students/${_id}`}>
      <div className="student-card wrapper">
        <div>
          <p>{name}</p>
        </div>
        <div>
          <p>{group}</p>
        </div>
        <div>
          <p>{address}</p>
        </div>
        <div>
          <p>{phoneNumber}</p>
        </div>
      </div>
    </Link>
  );
}

export default StudentCard;
