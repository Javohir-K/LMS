import React from "react";
import "./Navbar.css";
import Logo from "../../logo.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookAtlas,
  faChalkboardTeacher,
  faDashboard,
  faGraduationCap,
  faMessage,
  faMoneyBill1,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [{ user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  function switcher(e) {
    let x = document.querySelectorAll("a#navBtn");
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
    }
    e.target.classList.add("active");
  }

  return (
    <div className="navbar wrapper">
      <div className="navbar-wrap">
        <div className="navbar-left">
          <Link to={"/"}>
            <div className="logo">
              <img src={Logo} width={24} alt="" />
              <h2>Edec</h2>
            </div>
          </Link>

          <div className="links">
            <Link to={"/"} id="navBtn" className="active" onClick={(e)=>switcher(e)}>
              <div>
                <FontAwesomeIcon icon={faDashboard} />
              </div>
              <p>Dashboard</p>
            </Link>
            <Link to={"/courses"} id="navBtn" onClick={(e)=>switcher(e)}>
              <div>
                <FontAwesomeIcon icon={faBookAtlas} />
              </div>
              <p>Courses</p>
            </Link>
            <Link to={"/teachers"} id="navBtn" onClick={(e)=>switcher(e)}>
              <div>
                <FontAwesomeIcon icon={faChalkboardTeacher} />
              </div>
              <p>Teachers</p>
            </Link>
            <Link to={"/students"} id="navBtn" onClick={(e)=>switcher(e)}>
              <div>
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <p>Students</p>
            </Link>
            <Link to={"/payments"} id="navBtn" onClick={(e)=>switcher(e)}>
              <div>
                <FontAwesomeIcon icon={faMoneyBill1} />
              </div>
              <p>Payments</p>
            </Link>
            <Link to={"/messages"} id="navBtn" onClick={(e)=>switcher(e)}>
              <div>
                <FontAwesomeIcon icon={faMessage} />
              </div>
              <p>Messages</p>
            </Link>
          </div>
        </div>
        <div className="navbar-right">
          <button onClick={handleAuth} className="bg-accent text-white">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
