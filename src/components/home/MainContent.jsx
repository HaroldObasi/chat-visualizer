import React, { useEffect, useState } from "react";
import {
  extractGroupMembers,
  extractMessageCount,
} from "@/utils/countUserTokens";
import { useGlobalContext } from "@/contexts/AppContext";
import ChartComponent from "../ChartComponent";

const MainContent = () => {
  const { fileName, fileContent } = useGlobalContext();
  const [groupMembers, setGroupMembers] = useState([]);
  const [groupTokenCount, setGroupTokenCount] = useState([]);

  useEffect(() => {
    if (fileContent.length > 1) {
      const groupData = extractGroupMembers(fileContent);
      const entries = Object.entries(groupData);
      setGroupMembers(entries.map((item) => item[0]));
      setGroupTokenCount(entries.map((item) => item[1]));
    }
  }, [fileContent]);

  return (
    <div className="px-3 py-2 max-h-screen">
      <p className=" text-2xl">
        Your Whatsapp group chat stats will be shown here
      </p>

      {groupMembers.length > 0 ? (
        <div className="bg-sky-100 overflow-y-auto max-h-[200px] px-3 rounded-sm">
          <p className="my-1 sticky">
            These are all {groupMembers.length} your group members
          </p>
          {groupMembers.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      ) : (
        <></>
      )}

      <ChartComponent labels={groupMembers} values={groupTokenCount} />
    </div>
  );
};

export default MainContent;
