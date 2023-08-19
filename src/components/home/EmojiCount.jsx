import React, { useEffect, useState } from "react";
import "chart.js/auto";
import PieComponent from "../ui/ChartComponents/PieComponent";
import { countFrequentEmojis } from "@/utils/countFrequentEmojis";
import { useGlobalContext } from "@/contexts/AppContext";

const EmojiCount = () => {
  const { fileContent } = useGlobalContext();
  const [emojis, setEmojis] = useState([]);
  const [emojiCount, setEmojiCount] = useState([]);

  useEffect(() => {
    if (fileContent.length >= 1) {
      const emojiFreq = countFrequentEmojis(fileContent);
      const entries = Object.entries(emojiFreq);
      setEmojis(entries.map((item) => item[0]));
      setEmojiCount(entries.map((item) => item[1]));
    }
  }, [fileContent]);

  return (
    <div className="px-3">
      <p className="text-center my-3 text-base md:text-2xl z-20 ">
        Your Whatsapp group chat emoji stats will be shown here
      </p>
      <PieComponent labels={emojis} values={emojiCount} />
    </div>
  );
};

export default EmojiCount;
