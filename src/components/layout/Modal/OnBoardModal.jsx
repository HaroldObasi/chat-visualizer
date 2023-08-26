import React, { useState } from "react";
import { AiOutlineRightCircle, AiOutlineLeftCircle } from "react-icons/ai";

const OnBoardModal = () => {
  const [onBoardStepPage, setOnBoardStepPage] = useState(0);

  const onBoardSteps = [
    `The purpose of this site is to help provide quick insights for
          whatsapp group chats, these instructions are for Whatsapp on IOS (i
          unfortunately don't have an android), but you should be able to do the
          same on android as well there is also a button on the sidebar to use AI generated group chat text as a stand in `,
    `Firstly go to the whatsapp app (on mobile), and then go to the desired
          group chat, click the top (Group Info), scroll down to the "Export
          Chat" button, and select "Without media", (no support for media for
          now)`,
    `When you export it will give you a zip, and a bunch of sources to
          export to, I recommend exporting it to files, and then going to the
          files app to unzip the .zip file, to get the raw .txt file, then you
          can easily upload it with the button on the side bar`,
  ];

  const goRight = () => {
    if (onBoardStepPage >= onBoardSteps.length - 1) {
      return;
    }

    setOnBoardStepPage(onBoardStepPage + 1);
  };

  const goLeft = () => {
    if (onBoardStepPage <= 0) {
      return;
    }

    setOnBoardStepPage(onBoardStepPage - 1);
  };

  return (
    <div className="text-black relative">
      <p className="font-bold text-xl text-center">HOW TO USE</p>

      <button
        className={`absolute left-0 top-1/2 ${
          onBoardStepPage === 0 ? "text-gray-400" : ""
        }`}
        onClick={goLeft}
        disabled={onBoardStepPage === 0}
      >
        <AiOutlineLeftCircle size={20} />
      </button>

      <button
        className={`absolute right-0 top-1/2 ${
          onBoardStepPage === onBoardSteps.length - 1 ? "text-gray-400" : ""
        }`}
        onClick={goRight}
        disabled={onBoardStepPage === onBoardSteps.length - 1}
      >
        <AiOutlineRightCircle size={20} />
      </button>

      <div className="px-5 sm:px-8 text-sm text-center">
        {onBoardSteps[onBoardStepPage]}
      </div>
    </div>
  );
};

export default OnBoardModal;
