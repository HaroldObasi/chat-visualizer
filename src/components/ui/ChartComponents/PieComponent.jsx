import React from "react";
import { useGlobalContext } from "@/contexts/AppContext";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";

const PieComponent = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Pie width="400px" height="400px" data={data} options={options} />
    </div>
  );
};

export default PieComponent;
