import React from "react";

const index = () => {
  const openSideBar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");
    sidebar.classList.toggle("fixed");
  };

  return (
    <div
      onClick={openSideBar}
      className="block md:hidden bg-slate-700 py-3 px-2"
    >
      <button className="bg-slate-500 p-1 rounded-sm">Menu</button>
    </div>
  );
};

export default index;
