import React from "react";
import "./CoursesPage.css";
import CourseCard from "../../components/CourseCard";

function CoursesPage() {
  return (
    <div className="course-page">
      <h2>All Courses</h2>
      <div className="courses-list">
        <CourseCard
          title={"English"}
          cover={
            "https://www.englishexplorer.com.sg/wp-content/uploads/2019/05/a-short-history-of-how-the-english-language-came-to-be.jpg"
          }
          schedule={'Everyday'}
          numberOfGroups={5}
          numberOfStudents={58}
        />
        <CourseCard
          title={"English"}
          cover={
            "https://www.englishexplorer.com.sg/wp-content/uploads/2019/05/a-short-history-of-how-the-english-language-came-to-be.jpg"
          }
          schedule={'Everyday'}
          numberOfGroups={5}
          numberOfStudents={58}
        />
        <CourseCard
          title={"English"}
          cover={
            "https://www.englishexplorer.com.sg/wp-content/uploads/2019/05/a-short-history-of-how-the-english-language-came-to-be.jpg"
          }
          schedule={'Everyday'}
          numberOfGroups={5}
          numberOfStudents={58}
        />
        <CourseCard
          title={"English"}
          cover={
            "https://www.englishexplorer.com.sg/wp-content/uploads/2019/05/a-short-history-of-how-the-english-language-came-to-be.jpg"
          }
          schedule={'Everyday'}
          numberOfGroups={5}
          numberOfStudents={58}
        />
        <CourseCard
          title={"English"}
          cover={
            "https://www.englishexplorer.com.sg/wp-content/uploads/2019/05/a-short-history-of-how-the-english-language-came-to-be.jpg"
          }
          schedule={'Everyday'}
          numberOfGroups={5}
          numberOfStudents={58}
        />
        <CourseCard
          title={"English"}
          cover={
            "https://www.englishexplorer.com.sg/wp-content/uploads/2019/05/a-short-history-of-how-the-english-language-came-to-be.jpg"
          }
          schedule={'Everyday'}
          numberOfGroups={5}
          numberOfStudents={58}
        />
      </div>
    </div>
  );
}

export default CoursesPage;
