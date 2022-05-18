import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "../../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          db.collection('users').doc(auth.user.uid).set({
            name: email
          })
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_container">
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
          <button type="submit" onClick={signIn} className="login_signInButton accent-color-bg">
            Sign In
          </button>
        </form>
        <p className="login_terms">
          By signing in you agree to our app's Conditions of use.
          Please see our Privacy Notice, our cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login_registerButton">
          Create your Account
        </button>
      </div>
    </div>
  );
}

export default Login;