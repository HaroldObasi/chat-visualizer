import React from "react";

const Sidebar = () => {
  return (
    <div class="bg-slate-400 w-60 h-full flex-none">
      {" "}
      <div className="flex justify-center py-8">
        <button className="py-2 px-3  text-gray-900 rounded-md border-2 border-dashed hover:border-blue-500 hover:bg-blue-50">
          Click here to upload
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
