import React, { useState } from "react";
import "./Login.css";
import { auth, db } from "../../firebase";
import { Navigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        <Navigate to={"/"} />;
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <h2>Welcome to LMS Edec!</h2>
      <div className="login_container bg-dark2">
        <h2>Sign In</h2>
        <form action="">
          <p>E-mail</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name=""
            id="emailInput"
          />
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name=""
            id="passInput"
          />
          <button
            type="submit"
            onClick={signIn}
            className="login_signInButton bg-accent text-white"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
