import React, { useEffect, useState } from "react";
import { extractGroupMembers } from "@/utils/countUserTokens";
import { useGlobalContext } from "@/contexts/AppContext";
import ChartComponent from "../ChartComponent";
import { HiOutlineSearch } from "react-icons/hi";

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
    <div className="flex-1 h-screen overflow-y-auto bg-zinc-800">
      <div className="p-3 bg-zinc-800 sticky top-0 z-10 border-b border-zinc-500">
        <div className="relative">
          <HiOutlineSearch className="text-xl text-zinc-600 absolute top-0 bottom-0 my-auto left-1" />
          <input
            className="pr-1 pl-9 py-1 my-1 rounded-sm bg-zinc-500 w-full"
            type="text"
            onChange={(e) => setSearchToken(e.target.value)}
          />
        </div>
      </div>

      <div className="px-3">
        <p className="my-3 text-2xl">
          Your Whatsapp group chat stats will be shown here
        </p>

        {groupMembers.length > 0 ? (
          <div className="bg-zinc-700 overflow-y-auto max-h-[200px] px-3 rounded-sm ">
            <p className="my-1 sticky top-0 bg-zinc-700 text-xl">
              These are all {groupMembers.length} of your group members
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
    </div>
  );
};

export default MainContent;
