import React, { useState } from "react";
import "./Courses.css";
import { auth, db } from "../../firebase";
import { useEffect } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useStateValue } from "../../StateProvider";
import { Link, Switch, Route } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    db.collection("courses")
      .orderBy("id", "asc")
      .onSnapshot((snapshot) => {
        setCourses(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  return (
    <div className="courses">
      <Switch>
        <Route exact path="/courses">
          <h1>All Courses</h1>
          <div className="courses_list">
            <div className="list_carousel">
              {courses.map((item, key) => (
                <Card
                  key={item.data.id}
                  image={item.data.image}
                  title={item.data.title}
                  desc={item.data.desc}
                  author={item.data.author}
                  time={item.data.time}
                  link={item.data.link}
                />
              ))}
            </div>
          </div>
        </Route>

        {courses.map((item) => (
          <Route path={`/courses/${item.data.link}`}>
            <div className="courses_info_page">
              <div className="breadcrumbs">
                <Link to="/courses">- Courses</Link>
                <ArrowRightAltIcon />
                <p>{item.data.title}</p>
              </div>

              <div className="cip_content">
                <video controls width="900" >
                  <source src="https://firebasestorage.googleapis.com/v0/b/lms-edec.appspot.com/o/2022-04-14%2023-07-14.mkv?alt=media&token=6391183b-36df-44cf-bb99-a1cd52198e84"  type="video/mp4"/>
                </video>
                {/* <iframe
                  width="930"
                  height="523"
                  src={item.data.video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe> */}
                <div className="cip_content_info">
                  <h2>{item.data.desc}</h2>
                  <span>{item.data.time}</span>
                  <p>{item.data.author}</p>
                  {}
                  <p>{item.data.more_info}</p>
                </div>
              </div>
            </div>
          </Route>
        ))}
      </Switch>
    </div>
  );
}

function Card({ image, title, desc, author, time, link }) {
  const [{ user }, dispatch] = useStateValue();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

  const arr = users
    .filter((item) => item.data.user_id === user?.uid)
    .map((item) => item.data.title);

  const HandleApply = () => {
    if (auth && !arr.includes(title)) {
      db.collection("users")
        .doc(auth.useEmulator.uid)
        .set({
          title: title,
          desc: desc,
          image: image,
          user_id: user.uid,
          added_date:
            new Date().toLocaleDateString() +
            " " +
            new Date().toLocaleTimeString(),
        });
      alert("Congrats u applies this course!");
    } else if (auth && arr.includes(title)) {
      alert("You already applied this course");
    }
  };

  return (
    <div className="card">
      <div className="card_image">
        <img src={image} alt="" />
      </div>
      <div className="card_info">
        <div>
          <span className="card_time">{time}</span>
          <h2 className="card_title">{title}</h2>
          <p className="desc">{desc}</p>
          <p className="author">{author}</p>
        </div>
        <div className="card_link">
          <button
            onClick={HandleApply}
            className={auth && !arr.includes(title) ? "non_applied" : "applied"}
          >
            {" "}
            {auth && !arr.includes(title) ? "Apply to course" : "Applied"}{" "}
            <ChevronRightIcon />{" "}
          </button>
        </div>
        <Link to={`/courses/${link}`}>view course</Link>
      </div>
    </div>
  );
}

export default Courses;
