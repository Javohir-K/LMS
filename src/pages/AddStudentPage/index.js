import React, { useEffect, useState } from "react";
import "./AddStudentPage.css";
import { Navigate, useParams } from "react-router-dom";
import { db } from "../../firebase";

function AddStudentPage() {
  const [name, setName] = useState("");
  const [courses, setCourses] = useState([]);
  const [groups, setGroups] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [thisGroup, setThisGroup] = useState("");
  const [thisCourse, setThisCourse] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [startDate, setStartDate] = useState("");

  useEffect(() => {
    db.collection("groups").onSnapshot((snapshot) => {
      setGroups(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
    db.collection("courses").onSnapshot((snapshot) => {
      setCourses(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);

  //   console.log(teacher);

  const addStudent = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      phoneNumber === "" ||
      thisGroup === "" ||
      address === ""
    ) {
      alert("All fields must be filled");
    } else {
      db.collection("students").add({
        name: name,
        phoneNumber: phoneNumber,
        groupId: thisGroup,
        address: address,
        courseId: thisCourse,
        startDate: startDate,
      });
      setRedirect(true);
    }
  };

  //   console.log(groupTeacher);

  if (redirect) {
    return <Navigate to={"/students"} />;
  }

  return (
    <div className="add-group-page">
      <div className="agp-form">
        <form action="" className="wrapper" onSubmit={addStudent}>
          <h2>Add new student</h2>
          <div>
            <h4>Name</h4>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div>
            <h4>Phone Number</h4>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div>
            <h4>Address</h4>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div>
            <h4>Start date</h4>
            <input
              type="date"
              name=""
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              id=""
            />
          </div>
          <div>
            <h4>Course</h4>
            <select
              name=""
              value={thisCourse}
              onChange={(e) => setThisCourse(e.target.value)}
              id=""
            >
              <option value="selectGroup">Select Course</option>
              {courses.map((item) => (
                <option value={item.id}>{item.data.name}</option>
              ))}
            </select>
          </div>
          <div>
            <h4>Group</h4>
            <select
              name=""
              value={thisGroup}
              onChange={(e) => setThisGroup(e.target.value)}
              id=""
            >
              <option value="selectGroup">Select group</option>
              {groups
                .filter((item) => {
                  return item.data.courseId === thisCourse;
                })
                .map((item) => (
                  <option value={item.id}>{item.data.name}</option>
                ))}
            </select>
          </div>
          <button className="def-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddStudentPage;
