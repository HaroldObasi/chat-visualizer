import { useGlobalContext } from "@/contexts/AppContext";
import React, { useRef } from "react";
import { FiUpload, FiCheck } from "react-icons/fi";

const Sidebar = () => {
  const { sidebarOpen, fileName, setFileName, setFileContent, setSearchToken } =
    useGlobalContext();
  const fileInputRef = useRef(null);

  function readFile(file) {
    const reader = new FileReader();
    reader.onload = (evt) => {
      setFileContent(reader.result);
    };
    if (file) {
      reader.readAsText(file);
    }
  }

  const onClickUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = () => {
    const file = fileInputRef.current.files[0];
    if (!file) {
      return;
    }
    setFileName(file.name);
    readFile(file);
  };

  return (
    <div
      className={`${
        sidebarOpen ? "w-40" : "w-20"
      }  bg-zinc-800 h-screen px-2 border-r border-zinc-500 pt-4`}
    >
      <button
        onClick={onClickUpload}
        className="py-2 px-3 w-full rounded-md border-2 hover:bg-zinc-500 relative"
      >
        <FiUpload className="mx-auto my-1" />

        <p className={`text-xs hidden md:block`}>
          {fileName === ""
            ? "Click to upload a .txt file here"
            : `Uploaded: ${fileName}, Click to change file`}
        </p>

        <FiCheck
          className={`${
            fileName === "" ? "hidden" : "block"
          } absolute text-xl bg-zinc-800 rounded-full right-[-5px] text-green-500`}
        />

        <input
          className="input-field hidden"
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </button>
    </div>
  );
};

export default Sidebar;
