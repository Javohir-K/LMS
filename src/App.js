import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Courses from "./components/Courses";
import Login from "./components/Login";
import Settings from "./components/Settings";


import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  
 

  return (
    <BrowserRouter>
      <div className="app">
        {user ? 
        <>
        <Sidebar />
        <div className="main_content">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route  path="/courses">
              <Courses />
            </Route>
            <Route path="/signin">
              <Login />
            </Route>
            <Route path="/settings">
              <Settings/>
            </Route>
          </Switch>
        </div> </>
      : <Login/>  
      }
      </div>
    </BrowserRouter>
  );
}

export default App;
