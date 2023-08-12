import { useGlobalContext } from "@/contexts/AppContext";
import React, { useRef } from "react";

const Sidebar = () => {
  const { sidebarOpen, fileName, setFileName, setFileContent, setSearchToken } =
    useGlobalContext();
  const fileInputRef = useRef(null);

  function readFile(file) {
    const reader = new FileReader();
    reader.onload = (evt) => {
      const linesArray = reader.result.split("\n");
      setFileContent(linesArray);
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
    setFileName(file.name);
    readFile(file);
  };

  return (
    <div
      className={`${sidebarOpen ? "w-40" : "w-20"} bg-blue-500 h-screen px-2`}
    >
      <input
        className="p-1 my-1 rounded-sm bg-blue-300 w-full"
        type="text"
        onChange={(e) => setSearchToken(e.target.value)}
      />
      <button
        onClick={onClickUpload}
        className="py-2 px-3 text-gray-900 rounded-md border-2 border-dashed hover:border-blue-500 hover:bg-blue-50"
      >
        {fileName === "" ? (
          <p>Click to upload a .txt file here</p>
        ) : (
          <p>Uploaded: {fileName}, Click to change file </p>
        )}
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
