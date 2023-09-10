import React from "react";
import { useGlobalContext } from "../../../contexts/AppContext";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";

type ChartComponent = {
  labels: string[];
  values: number[];
  className?: string;
};

const BarChartComponent: React.FC<ChartComponent> = ({
  labels,
  values,
  className,
}) => {
  const { searchToken } = useGlobalContext();
  const data = {
    labels: labels,
    datasets: [
      {
        label: `Who's sent the most ${
          searchToken === "" ? "messages" : `'${searchToken}'`
        } in the chat`,
        data: values,
        backgroundColor: "aqua",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        min: 0,
        max: Math.max(...values) + 3,
        display: true,
      },
      x: {
        display: false, // Hide x-axis labels
      },
    },
    elements: {
      point: {
        radius: 1.5,
        hoverRadius: 5,
      },
      line: {
        tension: 0.4,
        backgroundColor: "aqua",
        borderColor: "red",
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className={`relative w-full ${className}`}>
      <Bar height="350px" data={data} options={options}></Bar>
    </div>
  );
};

export default BarChartComponent;
