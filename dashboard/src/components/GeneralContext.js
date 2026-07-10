import React, { createContext } from "react";

const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  return (
    <GeneralContext.Provider value={{}}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
