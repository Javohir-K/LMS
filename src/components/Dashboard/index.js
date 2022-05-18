import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import SearchIcon from "@mui/icons-material/Search";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useStateValue } from "../../StateProvider";
import { Link } from "react-router-dom";
import { db } from "../../firebase";

function index() {
  return (
    <div className="dashboard">
      <DashboardTop />
      <div className="bs_wrapper">
        <Ad />
        <MyTasks />
      </div>
      <MyCourses />
    </div>
  );
}

function DashboardTop() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <>
      <div className="dashboard_top">
        <div className="user_info">
          <p className="greeting">Hello, {user?.email} </p>
          <h2>Welcome to Edec</h2>
        </div>
        <div className="searchbar">
          <SearchIcon />
          <input type="text" name="" placeholder="Search" id="" />
        </div>
      </div>
      <div className="user_stats">
        <div className="user_stats_items">
          <div className="usi_icon">
            <BarChartIcon />
          </div>
          <div className="usi_text">
            <p>Learning Time</p>
            <h4>2h 37m</h4>
          </div>
        </div>
        <div className="user_stats_items">
          <div className="usi_icon">
            <ShowChartIcon />
          </div>
          <div className="usi_text">
            <p>My Activities</p>
            <h4>21 Tasks</h4>
          </div>
        </div>
        <div className="user_stats_items">
          <div className="usi_text">
            <p>Discussion Box</p>
            <h4>{3} New Messages</h4>
          </div>
          <div className="usi_arrow_icon">
            <ArrowRightAltIcon />
          </div>
        </div>
      </div>
    </>
  );
}

function Ad() {
  return (
    <div className="bestseller">
      <div className="bs_info">
        <h2>
          Learn Python <br /> within 30 Days
        </h2>
        <p>Time to become advance then others with this course </p>
        <div>
          <Link>Join Trial Class</Link>
        </div>
      </div>
      <div className="bs_placeholder">
        <img
          src="https://miro.medium.com/max/840/1*RJMxLdTHqVBSijKmOO5MAg.jpeg"
          alt="asd"
        />
      </div>
    </div>
  );
}

function MyTasks() {
  return (
    <div className="my_tasks">
      <h2>Upcoming Tasks</h2>
      <div className="tasks_list">
        <div className="task_card">
          <h2>Environment Discuss</h2>
          <p>01:00 PM - 02:00 PM</p>
        </div>
        <div className="task_card">
          <h2>Environment Discuss</h2>
          <p>01:00 PM - 02:00 PM</p>
        </div>
        <div className="task_card">
          <h2>Environment Discuss</h2>
          <p>01:00 PM - 02:00 PM</p>
        </div>
      </div>
      <div className="tasks_link">
        <Link>
          View All Tasks <ArrowRightAltIcon />{" "}
        </Link>
      </div>
    </div>
  );
}

function MyCourses() {
  const [courses, setCourses] = useState([]);
  const [user_courses, setUserCourses] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    db.collection("courses").onSnapshot((snapshot) => {
      setCourses(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);
  useEffect(() => {
    db.collection("users")
      .orderBy("added_date", "desc")
      .onSnapshot((snapshot) => {
        setUserCourses(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  });

  function deleteDoc (docs) {
    db.collection("users").doc(docs.id).delete()
  }
 
  return (
    <div className="my_courses">
      <h2>My Courses</h2>
      {user_courses
        .filter((item) => item.data.user_id === user?.uid)
        .map((item) => (
          <div className="my_courses_card">
            <img src={item.data.image} alt="" />
            <div className="my_cc_info">
              <h2>{item.data.title}</h2>
              <p>{item.data.desc}</p>
              <span> {item.data.added_date} </span>
            </div>
            <button className="delete_btn" onClick={()=> deleteDoc(item)}>delete</button>
          </div>
        ))}
    </div>
  );
}

export default index;
