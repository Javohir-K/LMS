import React from "react";
import "./Navbar.css";
import Logo from "../../logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

function Navbar() {
  const [{ user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="navbar bg-dark container">
      <div className="navbar-wrap">
        <div className="navbar-left">
          <Link to={"/"}>
            <div className="logo">
              <img src={Logo} width={24} alt="" />
              <h2>Edec</h2>
            </div>
          </Link>
          |
          <div className="links">
            <Link to={"/courses"}>
              <p>Courses</p>
            </Link>
            <Link to={"/teachers"}>
              <p>Teachers</p>
            </Link>
            <Link to={"/students"}>
              <p>Students</p>
            </Link>
            <Link to={"/payments"}>
              <p>Payments</p>
            </Link>
          </div>
        </div>
        <div className="navbar-right">
          <div className="search-wrap">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              type="text"
              name=""
              className="search bg-grey"
              placeholder="Search"
              id=""
            />
          </div>

          <Link to={"/"}>
            <i class="fa-regular fa-message"></i>
          </Link>
          <Link to={"/"}>
            <i class="fa-regular fa-bell"></i>
          </Link>
          <span>|</span>
          <button onClick={handleAuth} className="bg-accent text-white">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
