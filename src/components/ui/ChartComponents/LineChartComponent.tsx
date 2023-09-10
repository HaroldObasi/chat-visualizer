import React from "react";
import { useGlobalContext } from "../../../contexts/AppContext";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

type ChartComponentTypes = {
  className?: string;
};

const LineChartComponent: React.FC<ChartComponentTypes> = ({ className }) => {
  const data = {
    labels: [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
    ],
    datasets: [
      {
        label: "Times",
        data: [
          6, 3, 9, 2, 7, 8, 4, 5, 1, 2, 8, 10, 4, 7, 6, 3, 9, 1, 5, 10, 8, 7, 6,
          2,
        ],
        backgroundColor: "aqua",
      },
    ],
  };

  const options = { responsive: true, maintainAspectRatio: false };

  return (
    <div className={`relative w-full ${className}`}>
      <Line height="350px" data={data} options={options}></Line>
    </div>
  );
};

export default LineChartComponent;
