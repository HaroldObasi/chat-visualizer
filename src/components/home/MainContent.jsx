import React, { useEffect, useState } from "react";
import { extractGroupMembers } from "@/utils/countUserTokens";
import { useGlobalContext } from "@/contexts/AppContext";
import ChartComponent from "../ChartComponent";

const MainContent = () => {
  var { fileContent, searchToken, setSearchToken } = useGlobalContext();
  const [groupMembers, setGroupMembers] = useState([]);
  const [groupTokenCount, setGroupTokenCount] = useState([]);

  useEffect(() => {
    if (fileContent.length >= 1) {
      const groupData = extractGroupMembers(fileContent, searchToken);
      const entries = Object.entries(groupData);
      setGroupMembers(entries.map((item) => item[0]));
      setGroupTokenCount(entries.map((item) => item[1]));
    }
  }, [fileContent, searchToken]);

  return (
    <div className="flex-1 h-screen overflow-y-auto">
      <div className="py-2 bg-blue-500 sticky top-0">
        <input
          className="p-1 my-1 rounded-sm bg-blue-300 w-full"
          type="text"
          onChange={(e) => setSearchToken(e.target.value)}
        />
      </div>
      <div className="px-3 py-2 ">
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

        <div className="h-60 bg-red-400 w-20 my-2"> </div>
        <div className="h-60 bg-red-400 w-20 my-2"> </div>
        <div className="h-60 bg-red-400 w-20 my-2"> </div>
        <div className="h-60 bg-red-400 w-20 my-2"> </div>
        <div className="h-60 bg-red-400 w-20 my-2"> </div>
        <div className="h-60 bg-red-400 w-20 my-2"> </div>
        <div className="h-60 bg-red-400 w-20 my-2"> </div>
        <div className="h-60 bg-red-400 w-20 my-2"> </div>

        {/* <ChartComponent labels={groupMembers} values={groupTokenCount} />
        <ChartComponent labels={groupMembers} values={groupTokenCount} />
        <ChartComponent labels={groupMembers} values={groupTokenCount} /> */}
      </div>
    </div>
  );
};

export default MainContent;
