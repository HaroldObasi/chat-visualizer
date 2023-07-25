import { useRef, useState } from "react";
import { extractGroupMembers } from "@/utils/countUserTokens";

export default function Home() {
  const fileInputRef = useRef(null);
  const [fileContent, setFileContent] = useState([]);

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
    readFile(file);
  };

  return (
    <div className="px-5 py-3">
      <h1>Upload your Whatsapp txt file here</h1>
      <input type="file" ref={fileInputRef} onChange={handleFileChange} />

      <div>
        <button
          className="px-2 py-1 bg-slate-500 hover:bg-slate-600"
          onClick={handleClick}
        >
          Generate
        </button>
      </div>
    </div>
  );
}
