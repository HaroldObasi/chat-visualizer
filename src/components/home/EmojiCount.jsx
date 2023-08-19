import React from "react";
import "chart.js/auto";
import PieComponent from "../ui/ChartComponents/PieComponent";

const EmojiCount = () => {
  return (
    <div className="px-3">
      <p className="text-center my-3 text-base md:text-2xl z-20 ">
        Your Whatsapp group chat emoji stats will be shown here
      </p>
      <PieComponent />
    </div>
  );
};

export default EmojiCount;
