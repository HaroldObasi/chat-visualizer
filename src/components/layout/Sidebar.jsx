import React, { useRef } from "react";
import { useGlobalContext } from "@/contexts/AppContext";

const Sidebar = () => {
  const { fileName, setFileName, setFileContent, setSearchToken } =
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
      id="sidebar"
      className="z-10 hidden md:block bg-slate-400 w-[300px] h-full flex-none"
    >
      <div className="flex flex-col justify-center py-8 px-3 gap-5">
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
        <input
          className="p-1"
          type="text"
          onChange={(e) => setSearchToken(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Sidebar;
