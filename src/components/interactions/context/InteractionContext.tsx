import React, { createContext, useState } from "react";

interface ContextProps {
  children: React.ReactNode;
}

type InteractionContextType = {
  openTable: boolean;
  setOpenTable: React.Dispatch<React.SetStateAction<boolean>>;
};

const InteractionContext = createContext<InteractionContextType>({
  openTable: false,
  setOpenTable: () => {},
});

const InterContextProvider = ({ children }: ContextProps) => {
  const [openTable, setOpenTable] = useState(false);

  return (
    <InteractionContext.Provider value={{ openTable, setOpenTable }}>
      {children}
    </InteractionContext.Provider>
  );
};

export { InteractionContext, InterContextProvider };
