import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [searchToken, setSearchToken] = useState("✅");
  const [fileName, setFileName] = useState("");
  const [fileContent, setFileContent] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(true);
  const [mode, setMode] = useState("");

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
        modalOpen,
        setModalOpen,
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
