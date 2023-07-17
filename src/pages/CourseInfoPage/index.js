import React, { useEffect, useState } from "react";
import "./CourseInfoPage.css";
import GroupCard from "../../components/GroupCard";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase";
import LoadingPage from "../LoadingPage";

function CourseInfoPage() {
  const [courseInfo, setCourseInfo] = useState(null);
  const [groups, setGroups] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [students, setStudents] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    db.collection("courses")
      .doc(id)
      .get()
      .then((res) => {
        setCourseInfo(res.data());
      });

    db.collection("teachers").onSnapshot((snapshot) => {
      setTeacher(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
    db.collection("students").onSnapshot((snapshot) => {
      setStudents(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });

    db.collection("groups")
      .where("courseId", "==", id)
      .onSnapshot((snapshot) => {
        setGroups(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  if (courseInfo === null) {
    return <LoadingPage />;
  }
  // console.log(teacher);

  return (
    <div className="course-info-page">
      <div className="cip-top">
        <h2>{courseInfo?.name}</h2>
        <p>Description: {courseInfo?.desc}</p>
        <p>Schedule: {courseInfo?.schedule}</p>
      </div>
      <div className="cip-bottom">
        <div className="cip-bottom-action">
          <h2>Groups:</h2>
          <Link to={`/courses/${id}/add-new-group`}>
            <button className="def-btn">Create new group</button>
          </Link>
        </div>
        <div className="cip-groups-list">
          <div className="group-card wrapper">
            <h4>Level</h4>
            <h4>Name</h4>
            <h4>No. of students</h4>
            <h4>Schedule</h4>
            <h4>Teacher</h4>
          </div>

          {groups
            ? groups.map((group) => (
                <GroupCard
                  groupId={group.id}
                  _id={group.data.groupTeacher}
                  level={group.data.level}
                  name={group.data.name}
                  schedule={group.data.schedule}
                  numberOfStudents={
                    students.filter((st) => {
                      return st.data.groupId === group.id;
                    }).length
                  }
                  teacher={teacher
                    .filter((item) => {
                      return item.id === group.data.groupTeacher;
                    })
                    .map((x) => (
                      <div className="cip-group-teacher bg-dark">
                        {/* <img src={x.data.image} alt="" /> */}
                        <p>{x.data.name}</p>
                      </div>
                    ))}
                />
              ))
            : "No groups for this course!"}
        </div>
      </div>
    </div>
  );
}

export default CourseInfoPage;
