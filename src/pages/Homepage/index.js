import React from "react";
import "./Homepage.css";
import Statistics from "../../components/Statistics";
import RecentPayments from "./RecentPayments";
import { renderLineChart } from "./Chart";

function Homepage() {
  return (
    <div className="homepage">
      <Statistics />
      <div>
        <h2>Sales graph</h2>
        <br />
        <div className="chart-wrap wrapper">{renderLineChart}</div>
      </div>
      <RecentPayments />
    </div>
  );
}

export default Homepage;
