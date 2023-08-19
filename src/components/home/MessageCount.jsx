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

      <div className="grid grid-cols-1 lg:grid-cols-4 ">
        <BarChartComponent
          className="col-span-3"
          labels={groupMembers}
          values={groupTokenCount}
        />

        {groupMembers.length > 0 ? (
          <div className="bg-zinc-700 overflow-y-auto px-3 rounded-sm h-auto max-h-[300px] ">
            <p className="py-2 sticky top-0 bg-zinc-700 text-base font-bold border-b border-zinc-500">
              All {groupMembers.length} your group members
            </p>
            {groupMembers.map((item) => (
              <p className="text-sm" key={item}>
                {item}
              </p>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MessageCount;
