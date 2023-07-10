import React from "react";
import "./LoadingPage.css"

function LoadingPage() {
  return (
    <div className="loading">
      <div className="loading-wrapper">
        <div className="loader">
          <div className="loader-inner bg-primary"></div>
        </div>
        <p>Loading...</p>
      </div>
    </div>
  );
}

export default LoadingPage;
