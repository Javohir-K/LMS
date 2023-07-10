import React from "react";
import "./Dashboard.css";
import Navbar from "../../components/Navbar";
import Homepage from "../Homepage";
import { Route, Routes } from "react-router-dom";
import CoursesPage from "../CoursesPage";
import CourseInfoPage from "../CourseInfoPage";
import TeachersPage from "../TeachersPage";
import TeacherInfoPage from "../TeacherInfoPage";
import AddTeacherPage from "../AddTeacherPage";
import AddCoursePage from "../AddCoursePage";
import AddGroupPage from "../AddGroupPage";
import StudentsPage from "../StudentsPage";

function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-content container">
        <Routes>
          <Route element={<Homepage />} path="/" index />
          <Route element={<CoursesPage />} path="/courses" />
          <Route element={<CourseInfoPage />} path="/courses/:id" />
          <Route element={<AddGroupPage />} path="/courses/:id/add-new-group" />
          <Route element={<TeachersPage />} path="/teachers" />
          <Route element={<TeacherInfoPage />} path="/teachers/:id" />
          <Route element={<AddTeacherPage />} path="/add-teacher" />
          <Route element={<AddCoursePage />} path="/add-course" />
          <Route element={<StudentsPage />} path="/students" />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
