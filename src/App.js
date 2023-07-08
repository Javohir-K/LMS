import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Dashboard from "./pages/Dashboard";


function App() {
  const [{ user }, dispatch] = useStateValue();

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
    <div className="app bg-dark">
      {user ? (
          <div className="main_content">
            <Dashboard />
          </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
