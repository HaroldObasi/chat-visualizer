import { useGlobalContext } from "../../../contexts/AppContext";
import React, { useRef, useState } from "react";
import { FiUpload, FiCheck } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { BsChatLeftText } from "react-icons/bs";
import SideButton from "../../ui/SideButton";

const Sidebar = () => {
  const { sidebarOpen, fileName, setFileName, setFileContent } =
    useGlobalContext();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [useSampleChat, setUseSampleChat] = useState(false);

  function readFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      setFileContent(reader.result);
    };
    if (file) {
      reader.readAsText(file);
    }
  }

  const onClickUpload = () => {
    fileInputRef?.current?.click();
  };

  const handleFileChange = () => {
    if (fileInputRef?.current?.files) {
      const file = fileInputRef.current.files[0];
      if (!file) {
        return;
      }
      setFileName(file.name);
      readFile(file);
    }
    return;
  };

  const onClickSampleChatButton = async () => {
    if (useSampleChat) {
      setFileContent([]);
    } else {
      try {
        const response = await fetch("api/readDefaultFile");
        const data = await response.json();
        setFileContent(data.data);
      } catch (error) {
        console.error(error);
      }
    }

    setUseSampleChat(!useSampleChat);
  };

  return (
    <div
      className={`${
        sidebarOpen ? "w-40" : "w-20"
      }  bg-zinc-800 h-screen px-2 border-r border-zinc-500 py-4 flex flex-col justify-between`}
    >
      <div className="space-y-5">
        <SideButton onClick={onClickUpload}>
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
        </SideButton>

        <SideButton
          className={`${useSampleChat ? "bg-zinc-600" : ""}`}
          onClick={onClickSampleChatButton}
        >
          <BsChatLeftText className="mx-auto my-1" />
          <p className="text-xs hidden md:block">Click to use sample chat</p>
        </SideButton>
      </div>

      <a
        href="https://github.com/HaroldObasi/chat-visualizer"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex flex-shrink-0 justify-center rounded-md border-2 bg-transparent hover:bg-zinc-500 text-white p-3 shadow-md transition duration-300 ease-in-out"
      >
        <FaGithub className="text-xl text-center" />
      </a>
    </div>
  );
};

export default Sidebar;
