import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [searchToken, setSearchToken] = useState("✅");
  const [fileName, setFileName] = useState("");
  const [fileContent, setFileContent] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mode, setMode] = useState("messageFreqCount");

  return (
    <AppContext.Provider
      value={{
        fileName,
        setFileName,
        fileContent,
        setFileContent,
        searchToken,
        setSearchToken,
        sidebarOpen,
        setSidebarOpen,
        mode,
        setMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
