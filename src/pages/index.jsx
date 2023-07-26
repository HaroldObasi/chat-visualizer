import { useRef, useState } from "react";
import { extractGroupMembers } from "@/utils/countUserTokens";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

export default function Home() {
  const fileInputRef = useRef(null);
  const [fileContent, setFileContent] = useState([]);
  const [fileName, setFileName] = useState("");

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

  const handleClick = () => {
    extractGroupMembers(fileContent);
  };

  const handleFileChange = () => {
    const file = fileInputRef.current.files[0];
    setFileName(file.name);
    readFile(file);
  };

  return (
    <div className="py-5 px-3">
      <h1 className="font-sans font-bold text-center">
        Upload your Whatsapp txt file here
      </h1>

      <div className="flex justify-center py-8">
        <button
          onClick={() => {
            fileInputRef.current.click();
            console.log(fileInputRef.current.files[0]);
          }}
          className="border border-dashed rounded-md border-blue-300 hover:border-blue-800 w-[400px] h-[300px]"
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

      {fileContent.length > 0 ? (
        <div className="flex justify-center">
          <button
            className="px-2 py-1 bg-slate-500 hover:bg-slate-600 text-white"
            onClick={handleClick}
          >
            Generate
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
