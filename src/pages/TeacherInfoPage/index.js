import React, { useEffect, useState } from "react";
import "./TeacherInfoPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import GroupCard from "../../components/GroupCard";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase";
import Page404 from "../Page404";
import LoadingPage from "../LoadingPage";

function TeacherInfoPage() {
  const [teacherInfo, setTeacherInfo] = useState(null);
  const [groupList, setGroupList] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    db.collection("teachers")
      .doc(id)
      .get()
      .then((res) => {
        setTeacherInfo(res.data());
      });
    db.collection("groups")
      .where("groupTeacher", "==", id)
      .onSnapshot((snapshot) => {
        setGroupList(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  if (teacherInfo === undefined) {
    return <Page404 />;
  } else if (!teacherInfo) {
    return <LoadingPage />;
  }

  return (
    <div className="teacher-info-page">
      <div className="teacher-info-header wrapper">
        <div className="tih-cover">
          <img src={teacherInfo.image} alt="" />
        </div>
        <div className="tih-info">
          <h2>{teacherInfo.name}</h2>
          <h4 className="text-gray">{teacherInfo.subject}</h4>
          <p>Biography: {teacherInfo.bio}</p>
          <p>Skills: {teacherInfo.skills}</p>
          <div className="tih-info-additionals">
            <div>
              <h4 className="text-accent">{teacherInfo.level}</h4>
            </div>
            <div>
              <p>Age: {teacherInfo.age}</p>
            </div>
            <div className="rating">
              Rating: 5.0 <FontAwesomeIcon icon={faStar} color="gold" />
            </div>
            <div>
              <FontAwesomeIcon icon={faGraduationCap} /> {35} Students
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} /> {teacherInfo.phoneNumber}
            </div>
          </div>
        </div>
      </div>
      <div className="teacher-info-main">
        <h2>Groups</h2>
        <div className="tim-groups-list">
          <div className="group-card wrapper">
            <h4>Level</h4>
            <h4>Name</h4>
            <h4>No. of students</h4>
            <h4>Schedule</h4>
            <h4 className="group-teacher">Teacher</h4>
          </div>

          {groupList.length !== 0
            ? groupList.map((item) => (
                <GroupCard
                  groupId={item.id}
                  level={item.data.level}
                  name={item.data.name}
                  schedule={item.data.schedule}
                  numberOfStudents={"10"}
                />
              ))
            : "No groups"}
        </div>
      </div>
    </div>
  );
}

export default TeacherInfoPage;
