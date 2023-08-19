import React, { useEffect } from "react";
import "chart.js/auto";
import PieComponent from "../ui/ChartComponents/PieComponent";
import { countFrequentEmojis } from "@/utils/countFrequentEmojis";
import { useGlobalContext } from "@/contexts/AppContext";

const EmojiCount = () => {
  const { fileContent } = useGlobalContext();

  useEffect(() => {
    if (fileContent.length >= 1) {
      console.log(countFrequentEmojis(fileContent));
    }
  }, [fileContent]);

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
