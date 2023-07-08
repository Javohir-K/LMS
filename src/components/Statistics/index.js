import React from "react";
import "./Statistics.css";
import StatisticsCard from "../StatisticsCard";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

function Statistics() {
  const currentDate = format(new Date(), "MMM d, yyyy");

  return (
    <div className="statistics">
      <h2>Dashboard</h2>
      <p>{currentDate}</p>
      <div className="statistics-wrap">
        <StatisticsCard
          count={132}
          name={"Students"}
          icon={<i class="fa-solid fa-graduation-cap"></i>}
        />
        <StatisticsCard
          count={6}
          name={"Teachers"}
          icon={<i class="fa-solid fa-person-chalkboard"></i>}
        />
        <StatisticsCard
          count={14}
          name={"Classes"}
          icon={<i class="fa-solid fa-book"></i>}
        />
        <StatisticsCard
          count={`2,3k$`}
          name={"Monthly budget"}
          icon={<i class="fa-solid fa-chart-simple"></i>}
        />
      </div>
    </div>
  );
}

export default Statistics;
