import { useGlobalContext } from "../../contexts/AppContext";
import React, { useEffect } from "react";
import LineChartComponent from "../ui/ChartComponents/LineChartComponent";

const TimeFreq = () => {
  const { fileContent } = useGlobalContext();

  useEffect(() => {
    if (fileContent.length >= 1) {
    }
  }, [fileContent]);
  return (
    <div className="px-3">
      <p className="text-center my-3 text-base md:text-2xl z-20 ">
        See what times the group chat is most active
      </p>
      <LineChartComponent />
    </div>
  );
};

export default TimeFreq;
