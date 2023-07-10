import React from "react";
import "./StatisticsCard.css";

function StatisticsCard({ count, name, icon }) {
  return (
    <div className="statistics-card wrapper">
      <div>
        <h2>{count}</h2>
        <p>{name}</p>
      </div>
      <div>{icon}</div>
    </div>
  );
}

export default StatisticsCard;
