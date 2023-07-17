import React, { useEffect, useState } from "react";
import "./StudentsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import SearchList from "../../components/SearchList";
import LoadingPage from "../LoadingPage";

function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    db.collection("students")
      .orderBy("name", "asc")
      .onSnapshot((snapshot) => {
        setStudents(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
    db.collection("groups").onSnapshot((snapshot) => {
      setGroups(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

  const filteredPosts = students.filter((student) => {
    return student.data.name.toLowerCase().includes(searchField.toLowerCase());
  });

  function searchList() {
    return <SearchList filteredPosts={filteredPosts} groupList={groups} />;
  }

  if (students.length === 0) {
    return <LoadingPage />;
  }

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
            onChange={(e) => setSearchField(e.target.value)}
            id=""
          />
        </div>
        <Link to={"/add-student"}>
          <button className="def-btn">Add student</button>
        </Link>
      </div>
      <div className="sp-students-list">
        <div className="student-card wrapper">
          <div>
            <h4>Full name</h4>
          </div>
          <div>
            <h4>Group</h4>
          </div>
          <div>
            <h4>Address</h4>
          </div>
          <div>
            <h4>Phone number</h4>
          </div>
          <div>
            <h4>Start date</h4>
          </div>
        </div>

        {filteredPosts.length === 0
          ? "No students with this name!"
          : searchList()}
      </div>
    </div>
  );
}

export default StudentsPage;
