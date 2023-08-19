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
      <div className="flex flex-col gap-5 mb-5">
        <PieComponent labels={emojis} values={emojiCount} />

        {emojis.length > 0 ? (
          <div className="bg-zinc-700 overflow-y-auto  px-3 rounded-sm h-auto max-h-[300px] ">
            <p className="py-2 text-center  bg-zinc-700 text-base font-bold border-b border-zinc-500">
              All {emojis.length} emojis in your group chat
            </p>
            <div className="flex py-2 justify-between overflow-x-auto">
              {emojis.map((item, index) => (
                <div className="text-3xl px-2 flex items-center " key={item}>
                  <p>{item}</p>
                  <p className="text-base">x{emojiCount[index]}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default EmojiCount;
