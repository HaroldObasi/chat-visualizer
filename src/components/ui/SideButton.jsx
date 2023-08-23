import React from "react";

const SideButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-2 px-3 w-full rounded-md border-2 hover:bg-zinc-500 relative"
    >
      {children}
    </button>
  );
};

export default SideButton;
