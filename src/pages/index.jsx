import { useRef, useState } from "react";
import { extractGroupMembers } from "@/utils/countUserTokens";
import { useGlobalContext } from "@/contexts/AppContext";

import ChartComponent from "@/components/ChartComponent";
import Sidebar from "@/components/layout/Sidebar";

export default function Home() {
  const { fileName } = useGlobalContext();
  // const fileInputRef = useRef(null);
  // const [fileContent, setFileContent] = useState([]);
  // const [fileName, setFileName] = useState("");
  // const [groupMembers, setGroupMembers] = useState({});

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
    setGroupMembers(extractGroupMembers(fileContent));
  };

  const handleFileChange = () => {
    const file = fileInputRef.current.files[0];
    setFileName(file.name);
    readFile(file);
  };

  // return (
  //   <>
  //     <Sidebar />
  //     <div className="py-5 px-3">
  //       <h1 className="font-sans font-bold text-center">
  //         Upload your Whatsapp txt file here
  //       </h1>
  //       <ChartComponent data={Object.entries(groupMembers)} />
  //       <div className="flex justify-center py-8">
  //         <button
  //           onClick={() => {
  //             fileInputRef.current.click();
  //           }}
  //           className="border border-dashed rounded-md border-blue-300 hover:border-blue-800 w-[400px] h-[300px]"
  //         >
  //           {fileName === "" ? (
  //             <p>Click to upload a .txt file here</p>
  //           ) : (
  //             <p>Uploaded: {fileName}, Click to change file </p>
  //           )}
  //           <input
  //             className="input-field hidden"
  //             type="file"
  //             ref={fileInputRef}
  //             onChange={handleFileChange}
  //           />
  //         </button>
  //       </div>

  //       {fileContent.length > 0 ? (
  //         <div className="flex justify-center">
  //           <button
  //             className="px-2 py-1 bg-slate-500 hover:bg-slate-600 text-white"
  //             onClick={handleClick}
  //           >
  //             Generate
  //           </button>
  //         </div>
  //       ) : (
  //         <></>
  //       )}
  //     </div>
  //   </>
  // );

  return (
    <div class="flex h-screen">
      <Sidebar />
      <div class="bg-sky-400 flex-grow">This is the file name: {fileName} </div>
    </div>
  );
}
