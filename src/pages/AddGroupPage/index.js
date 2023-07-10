import React, { useEffect, useState } from "react";
import "./AddGroupPage.css";
import { Navigate, useParams } from "react-router-dom";
import { db } from "../../firebase";

function AddGroupPage() {
  const [level, setLevel] = useState("");
  const [name, setName] = useState("");
  const [schedule, setSchedule] = useState("");
  const [teacher, setTeacher] = useState([]);
  const [groupTeacher, setGroupTeacher] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    db.collection("teachers").onSnapshot((snapshot) => {
      setTeacher(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);

  //   console.log(teacher);

  const addGroup = (e) => {
    e.preventDefault();
    if (name === "" || level === "" || schedule === "" || groupTeacher === "") {
      alert("All fields must be filled");
    } else {
      db.collection("groups").add({
        name: name,
        level: level,
        schedule: schedule,
        groupTeacher: groupTeacher,
        courseId: id,
      });
      setRedirect(true);
    }
  };

  //   console.log(groupTeacher);

  if (redirect) {
    return <Navigate to={`/courses/${id}`} />;
  }

  return (
    <div className="add-group-page">
      <div className="agp-form">
        <form action="" className="wrapper" onSubmit={addGroup}>
          <h2>Create new group</h2>
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
            <h4>Level</h4>
            <input
              type="text"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div>
            <h4>Schedule</h4>
            <input
              type="text"
              value={schedule}
              onChange={(e) => setSchedule(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div>
            <h4>Teacher</h4>
            <select
              name=""
              value={groupTeacher}
              onChange={(e) => setGroupTeacher(e.target.value)}
              id=""
            >
              <option value="selectTeacher">Select teacher</option>
              {teacher.map((item) => (
                <option value={item.id}>{item.data.name}</option>
              ))}
            </select>
          </div>
          <button className="bg-accent text-white">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddGroupPage;
