import React, { useState } from "react";
import "./AddTeacher.css";
import { db, storage } from "../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";

function AddTeacherPage() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(998);
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState();
  const [skills, setSkills] = useState("");
  const [age, setAge] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUploadImage = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            // console.log(url);
            setUrl(url);
          });
      }
    );
  };
  const handleRemove = (e) => {
    e.preventDefault();
    storage.ref("images").child(image.name).delete();
    const x = document.querySelector(".piw_showImage");
    x.src = "";
    setUrl("");
  };
  const handleUpload = (e) => {
    e.preventDefault();
    if (
      url === "" ||
      name === "" ||
      bio === "" ||
      level === "" ||
      image == null ||
      phoneNumber == null ||
      age == null ||
      skills === "" ||
      subject === ""
    ) {
      alert("All fields must be filled");
    } else {
      db.collection("teachers").add({
        name: name,
        subject: subject,
        level: level,
        skills: skills,
        age: age,
        phoneNumber: phoneNumber,
        bio: bio,
        image: url,
      });
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to={"/teachers"} />;
  }

  return (
    <div className="add-teacher-page">
      <h2>Add new teacher to the team!</h2>
      <div className="atp-form">
        <form action="" className="bg-dark2" onSubmit={handleUpload}>
          <div>
            <h4>Image</h4>
            <div className="piw bg-dark">
              <div className="piw_border bg-accent">
                <div className="photoInput_wrapper">
                  {url ? (
                    <img className="piw_showImage" src={url} alt="" />
                  ) : (
                    "Select photo"
                  )}
                  <input
                    type="file"
                    name=""
                    onChange={handleChange}
                    id="photoInput"
                    accept="image/heic, image/png, image/jpg, image/jpeg, image/webp"
                  />
                </div>
                {url ? (
                  <button
                    id="piw_remove_btn"
                    className="hide"
                    onClick={handleRemove}
                  >
                    <FontAwesomeIcon icon={faXmarkCircle} />
                  </button>
                ) : (
                  ""
                )}
              </div>
              <input type="button" value="Upload" onClick={handleUploadImage} />
              <progress value={progress} max="100" />
            </div>
          </div>
          <div>
            <h4>Name</h4>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div>
            <h4>Subject</h4>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div>
            <h4>Bio</h4>
            <input
              type="text"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div>
            <h4>Skills</h4>
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div>
            <h4>Level</h4>
            <input
              type="text"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div>
            <h4>Age</h4>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div>
            <h4>Phone number</h4>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              name=""
              id=""
            />
          </div>
          <button className="def-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddTeacherPage;
