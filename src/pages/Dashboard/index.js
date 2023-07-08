import React from "react";
import "./Dashboard.css";
import Navbar from "../../components/Navbar";
import Homepage from "../Homepage";
import { Route, Routes } from "react-router-dom";
import CoursesPage from "../CoursesPage";
import CourseInfoPage from "../CourseInfoPage";
import TeachersPage from "../TeachersPage";

function Dashboard() {
  return (
    <div className="dashboard container">
      <Navbar />
      <Routes>
        <Route element={<Homepage />} path="/" index />
        <Route element={<CoursesPage />} path="/courses" />
        <Route element={<CourseInfoPage />} path="/courses/course-info" />
        <Route element={<TeachersPage />} path="/teachers" />
      </Routes>
    </div>
  );
}

export default Dashboard;
