import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from "@mui/icons-material/Article";
import SmsIcon from "@mui/icons-material/Sms";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Logo from "../../logo.png";
import {useStateValue} from "../../StateProvider";
import {auth} from "../../firebase";


function Sidebar() {
  const [{user},dispatch]  = useStateValue();

  const handleAuth = () =>{
    if(user){
      auth.signOut();
    }
  }

  function HandleNavClick(e) {
    const btns = document.querySelectorAll(".nav a");
    for (let j = 0; j < btns.length; j++) {
      btns[j].classList.remove("link_active");
    }
    e.target.classList.add("link_active");
  }


  return (
    <div className="sidebar">
      <div>
        
      <div className="logo">
        <img src={Logo} alt="" width="40px" />
        Edec
      </div>
      <div className="nav">
        <Link onClick={(e) => HandleNavClick(e)} className="link_active" to="/">
          {" "}
          <DashboardIcon /> Dashboard
        </Link>
        <Link onClick={(e) => HandleNavClick(e)} to="/courses">
          {" "}
          <ArticleIcon /> Courses
        </Link>
        <Link onClick={(e) => HandleNavClick(e)} to="/resourses">
          {" "}
          <BookmarkBorderIcon /> Resources
        </Link>
        <Link onClick={(e) => HandleNavClick(e)} to="/discussion">
          {" "}
          <SmsIcon /> Discussion
        </Link>
        <Link onClick={(e) => HandleNavClick(e)} to="/schedule">
          {" "}
          <CalendarTodayIcon /> Schedule
        </Link>
        <Link onClick={(e) => HandleNavClick(e)} to="/account">
          {" "}
          <PersonIcon /> My Account
        </Link>
        <Link onClick={(e) => HandleNavClick(e)} to="/settings">
          {" "}
          <SettingsIcon /> Settings
        </Link>
      </div>
    
      </div>

      <div className="nav_bottom">
        <Link to={ !user && "/signin"} onClick={handleAuth}>
          {" "}
          <LogoutIcon /> {user ? "Sign Out" : "Sign In"}
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
