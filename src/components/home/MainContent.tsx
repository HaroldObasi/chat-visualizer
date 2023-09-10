import React from "react";
import { useGlobalContext } from "../../contexts/AppContext";
import MessageCount from "./MessageCount";
import EmojiCount from "./EmojiCount";
import Header from "../layout/Header";
import TimeFreq from "./TimeFreq";

const MainContent = () => {
  var { mode } = useGlobalContext();

  const renderSelectedMode = () => {
    if (mode === "messageFreqCount") {
      return <MessageCount />;
    } else if (mode === "emojiFreqCount") {
      return <EmojiCount />;
    } else if (mode === "timeFreq") {
      return <TimeFreq />;
    }

    return <></>;
  };

  return (
    <div className="flex-1 h-screen overflow-y-auto bg-zinc-800">
      <div className="max-w-screen-xl mx-auto">
        <Header />
        {renderSelectedMode()}
      </div>
    </div>
  );
};

export default MainContent;
