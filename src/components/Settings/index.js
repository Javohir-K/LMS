import React from "react";
import "./Settings.css";

function Settings() {
    function Theme () {
        var x = document.querySelector(".app");
    
        if(!x.classList.contains("dark_theme")){
            
          x.classList.add("dark_theme")
          document.body.style.setProperty('--bg-color-main','#333333');
          document.body.style.setProperty('--bg-color-white','#222222');
          document.body.style.setProperty('--bold-text-color','#fcfef4');
    
            console.log("blah");
        }
        else{
          document.body.style.setProperty('--bold-text-color','#2b3674');
          document.body.style.setProperty('--bg-color-main','#f4f7fe');
          document.body.style.setProperty('--bg-color-white','#ffffff');
          x.classList.remove("dark_theme")
        }
    
      }
  return <div className="">
      <button className="theme_changer_btn" onClick={Theme}>click</button>
      
      Settings</div>;
}

export default Settings;
