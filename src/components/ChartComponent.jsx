import React from "react";
// import {
//   Chart as ChartJS,
//   BarElement,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";
import "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

const ChartComponent = ({ labels, values }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Who's sent the most '✅' ",
        data: values,
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      subtitle: {
        display: true,
        text: "Custom Chart Subtitle",
      },
      title: {
        display: true,
        text: "Custom Chart Title",
      },
    },
    scales: {
      y: {
        // defining min and max so hiding the dataset does not change scale range
        min: 0,
        max: Math.max(...values) + 3,
      },
    },
    elements: {
      point: {
        radius: 3,
        hoverRadius: 5,
      },
      line: {
        tension: 0,
        backgroundColor: "aqua",
        borderWidth: 5,
        borderColor: "red",
        fill: true,
      },
    },
    responsive: true,
  };

  return (
    <div className="relative h-[40vh] w-[80%]">
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default ChartComponent;
