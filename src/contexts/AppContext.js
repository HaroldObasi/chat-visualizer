import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [fileName, setFileName] = useState("");
  const [fileContent, setFileContent] = useState([]);

  return (
    <AppContext.Provider
      value={{
        fileName,
        setFileName,
        fileContent,
        setFileContent,
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
