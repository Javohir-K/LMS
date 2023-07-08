import React from "react";
import "./CourseInfoPage.css";
import GroupCard from "../../components/GroupCard";

function CourseInfoPage() {
  return (
    <div className="course-info-page">
      <div className="cip-top">
        <h2>English</h2>
        <p>
          Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Minima omnis quibusdam corporis, velit ad ut perspiciatis est ipsa
          ullam labore?
        </p>
      </div>
      <div className="cip-bottom">
        <h2>Groups:</h2>
        <div className="cip-groups-list">
          <div className="group-card wrapper">
            <h4>Level</h4>
            <h4>Name</h4>
            <h4>No. of students</h4>
            <h4>Schedule</h4>
            <h4>Teacher</h4>
          </div>
          <GroupCard
            level={"beginner"}
            index={1}
            name={"BEG-001"}
            schedule={"09:00-11:00 (Mon, Wed, Fri)"}
            numberOfStudents={"10"}
            teacher={"Mr.Adam"}
          />
          <GroupCard
            level={"beginner"}
            index={1}
            name={"BEG-001"}
            schedule={"09:00-11:00 (Mon, Wed, Fri)"}
            numberOfStudents={"10"}
            teacher={"Mr.Adam"}
          />
          <GroupCard
            level={"beginner"}
            index={1}
            name={"BEG-001"}
            schedule={"09:00-11:00 (Mon, Wed, Fri)"}
            numberOfStudents={"10"}
            teacher={"Mr.Adam"}
          />
          <GroupCard
            level={"beginner"}
            index={1}
            name={"BEG-001"}
            schedule={"09:00-11:00 (Mon, Wed, Fri)"}
            numberOfStudents={"10"}
            teacher={"Mr.Adam"}
          />
          <GroupCard
            level={"beginner"}
            index={1}
            name={"BEG-001"}
            schedule={"09:00-11:00 (Mon, Wed, Fri)"}
            numberOfStudents={"10"}
            teacher={"Mr.Adam"}
          />
          <GroupCard
            level={"beginner"}
            index={1}
            name={"BEG-001"}
            schedule={"09:00-11:00 (Mon, Wed, Fri)"}
            numberOfStudents={"10"}
            teacher={"Mr.Adam"}
          />
        </div>
      </div>
    </div>
  );
}

export default CourseInfoPage;
