import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ChartComponent = ({ labels, values }) => {
  const [entries, setEntries] = useState([]);
  const data = {
    labels: labels,
    datasets: [
      {
        labels: "369",
        data: values,
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {};

  return (
    <div>
      <Bar data={data} options={options}></Bar>
    </div>
  );
};

export default ChartComponent;
