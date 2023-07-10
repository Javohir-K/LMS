import React from "react";
import "./TeacherCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function TeacherCard({ _id, image, name, subject, age, bio, level, rating }) {
  return (
    <div className="teacher-card wrapper">
      <div className="tc-top">
        <Link to={`/teachers/${_id}`}>
          <img src={image} alt="" />
        </Link>
      </div>
      <div className="tc-bottom">
        <h3>{name}</h3>
        <h4>Subject: {subject}</h4>
        <p>About: {bio}</p>
        <p>Age: {age}</p>
        <div className="tc-bottom-info">
          <p className="text-accent">{level}</p>
          <div className="tc-rating">
            Rating {rating} <FontAwesomeIcon icon={faStar} color="gold" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherCard;
