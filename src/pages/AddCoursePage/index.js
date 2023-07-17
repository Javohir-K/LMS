import React, { useState } from "react";
import "./AddCoursePage.css";
import { Navigate } from "react-router-dom";
import { db } from "../../firebase";

function AddCoursePage() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [schedule, setSchedule] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleUpload = (e) => {
    e.preventDefault();
    if (name === "" || desc === "" || schedule === "") {
      alert("All fields must be filled");
    } else {
      db.collection("courses").add({
        name: name,
        desc: desc,
        schedule: schedule,
      });
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to={"/courses"} />;
  }

  return (
    <div className="add-course-page">
      <div className="acp-form">
        <form action="" className="wrapper" onSubmit={handleUpload}>
          <h2>Add new course</h2>
          <div>
            <h4>Name</h4>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div>
            <h4>Description</h4>
            <input
              type="text"
              onChange={(e) => setDesc(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div>
            <h4>Schedule</h4>
            <input
              type="text"
              onChange={(e) => setSchedule(e.target.value)}
              name=""
              id=""
            />
          </div>
          <button className="def-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddCoursePage;
