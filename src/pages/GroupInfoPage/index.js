import React, { useEffect, useState } from "react";
import "./GroupInfoPage.css";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase";
import LoadingPage from "../LoadingPage";

function GroupInfoPage() {
  const [groupInfo, setGroupInfo] = useState(null);
  const [students, setStudents] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [attendance, setAttendance] = useState("");
  const { id } = useParams();

  useEffect(() => {
    db.collection("groups")
      .doc(id)
      .get()
      .then((res) => {
        setGroupInfo(res.data());
      });
    db.collection("students")
      .where("groupId", "==", id)
      .onSnapshot((snapshot) =>
        setStudents(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
    db.collection("teachers").onSnapshot((snapshot) => {
      setTeacher(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);

  if (!groupInfo) {
    return <LoadingPage />;
  }

  // console.log(attendance);

  return (
    <div className="group-info-page">
      <div className="gip-top wrapper">
        <h3>{groupInfo.name}</h3>
        <p>Schedule: {groupInfo.schedule}</p>
        <p>
          Teacher:{" "}
          {teacher
            .filter((x) => {
              return x.id === groupInfo.groupTeacher;
            })
            .map((item) => (
              <Link to={`/teachers/${item.id}`}>
                <p>{item.data.name}</p>
              </Link>
            ))}
        </p>
      </div>
      <div className="gip-bottom">
        <div className="gip-students-list">
          <table>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Attendance</th>
            </tr>
            {students.map((st, index) => (
              <tr>
                <td>{(index += 1)}</td>
                <td>{st.data.name}</td>
                <td>
                  <select
                    onChange={(e) => setAttendance(e.target.value)}
                    value={attendance}
                  >
                    <option value="attendance">Attended?</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </td>
              </tr>
            ))}
          </table>
          <button>submit</button>
        </div>
      </div>
    </div>
  );
}

export default GroupInfoPage;
