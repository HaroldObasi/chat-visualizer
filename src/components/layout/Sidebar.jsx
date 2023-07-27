import React from "react";
import { useGlobalContext } from "@/contexts/AppContext";

const Sidebar = () => {
  const { setFileName } = useGlobalContext();

  const onClickUpload = () => {
    setFileName("The life and times");
  };

  return (
    <div class="bg-slate-400 w-60 h-full flex-none">
      <div className="flex justify-center py-8">
        <button
          onClick={onClickUpload}
          className="py-2 px-3 text-gray-900 rounded-md border-2 border-dashed hover:border-blue-500 hover:bg-blue-50"
        >
          Click here to upload
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
