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
  faMoneyBill1,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [{ user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="navbar bg-dark2">
      <div className="navbar-wrap">
        <div className="navbar-left">
          <Link to={"/"}>
            <div className="logo">
              <img src={Logo} width={24} alt="" />
              <h2>Edec</h2>
            </div>
          </Link>

          <div className="links">
            <Link to={"/"}>
              <div>
                <FontAwesomeIcon icon={faDashboard} />
              </div>
              <p>Dashboard</p>
            </Link>
            <Link to={"/courses"}>
              <div>
                <FontAwesomeIcon icon={faBookAtlas} />
              </div>
              <p>Courses</p>
            </Link>
            <Link to={"/teachers"}>
              <div>
                <FontAwesomeIcon icon={faChalkboardTeacher} />
              </div>
              <p>Teachers</p>
            </Link>
            <Link to={"/students"}>
              <div>
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <p>Students</p>
            </Link>
            <Link to={"/payments"}>
              <div>
                <FontAwesomeIcon icon={faMoneyBill1} />
              </div>
              <p>Payments</p>
            </Link>
          </div>
        </div>
        <div className="navbar-right">
          {/* <Link to={"/"}>
            <i class="fa-regular fa-message"></i>
          </Link>
          <Link to={"/"}>
            <i class="fa-regular fa-bell"></i>
          </Link> */}
          <button onClick={handleAuth} className="bg-accent text-white">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
