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

const ChartComponent = (props) => {
  const [entries, setEntries] = useState([]);
  const data = {
    labels: props.data.map((item) => item[0]),
    datasets: [
      {
        labels: "369",
        data: props.data.map((item) => item[1]),
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
