import React, { useState, useEffect } from "react";
import BarChartComponent from "../ui/ChartComponents/BarChartComponent";
import { useGlobalContext } from "@/contexts/AppContext";
import { countTokens } from "@/utils/countTokens";

const MessageCount = () => {
  const { fileContent, searchToken } = useGlobalContext();
  const [groupMembers, setGroupMembers] = useState([]);
  const [groupTokenCount, setGroupTokenCount] = useState([]);

  useEffect(() => {
    if (fileContent.length >= 1) {
      const groupData = countTokens(fileContent, searchToken);
      const entries = Object.entries(groupData);
      setGroupMembers(entries.map((item) => item[0]));
      setGroupTokenCount(entries.map((item) => item[1]));
    }
  }, [fileContent, searchToken]);

  return (
    <div className="px-3">
      <p className="text-center my-3 text-base md:text-2xl z-20 ">
        Your Whatsapp group chat stats will be shown here
      </p>

      <div className="flex flex-col gap-5">
        <BarChartComponent
          className="col-span-3"
          labels={groupMembers}
          values={groupTokenCount}
        />

        {groupMembers.length > 0 ? (
          <div className="bg-zinc-700  px-3 rounded-sm h-auto max-h-[300px] ">
            <p className="py-2 text-center  bg-zinc-700 text-base font-bold border-b border-zinc-500">
              All {groupMembers.length} of your group members
            </p>
            <div className="flex items-center justify-between overflow-x-auto py-2">
              {groupMembers.map((item) => (
                <div className="px-2 flex" key={item}>
                  <p className="px-3">{item}</p>
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

export default MessageCount;
