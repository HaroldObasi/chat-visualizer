import React, { useEffect, useState } from "react";
import { extractGroupMembers } from "@/utils/countUserTokens";
import { useGlobalContext } from "@/contexts/AppContext";
import ChartComponent from "../ChartComponent";

const MainContent = () => {
  const { fileName, fileContent } = useGlobalContext();
  //   const [groupData, setGroupData] = useState({});
  const [groupMembers, setGroupMembers] = useState([]);
  const [groupTokenCount, setGroupTokenCount] = useState([]);

  useEffect(() => {
    if (fileContent.length > 1) {
      //   setGroupData(extractGroupMembers(fileContent));
      const groupData = extractGroupMembers(fileContent);
      const entries = Object.entries(groupData);
      setGroupMembers(entries.map((item) => item[0]));
      setGroupTokenCount(entries.map((item) => item[1]));
    }
  }, [fileContent]);

  return (
    <div className="px-3 py-2">
      <p className=" text-2xl">
        Your Whatsapp group chat stats will be shown here
      </p>

      {groupMembers ? (
        <div className="bg-sky-100 overflow-y-auto max-h-[400px]">
          <p>These are all {groupMembers.length} your group members</p>
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
