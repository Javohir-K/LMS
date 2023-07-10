import React from "react";
import "./StudentsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function StudentsPage() {
  return (
    <div className="students-page">
      <div className="sp-top">
        <h2>Students</h2>
        <div className="search-wrap">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            name=""
            className="search bg-grey"
            placeholder="Search"
            id=""
          />
        </div>
        <button className="bg-accent text-white">Add student</button>
      </div>
    </div>
  );
}

export default StudentsPage;
