import React, { useEffect, useState } from "react";
import { useGlobalContext } from "@/contexts/AppContext";
import { generateRandomHexColors } from "@/utils/generateRandomHexColors";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";

const PieComponent = ({ labels, values, className }) => {
  const data = {
    labels: labels || ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Emoji Count",
        data: values || [300, 50, 100],
        backgroundColor: generateRandomHexColors(values.length),
        hoverOffset: 5,
        borderWidth: 0,
        hoverBorderWidth: 2,
        cutout: "50%",
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },

    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className={`${className}`}>
      <Pie width="400px" height="350px" data={data} options={options} />
    </div>
  );
};

export default PieComponent;
