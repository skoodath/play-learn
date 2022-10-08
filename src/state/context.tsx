import React, { createContext, useReducer } from "react";
import { ActionType, AppState } from "../declarations/declarations";
import { initialState, reducer } from "./reducer";

interface ContextProps {
  children: React.ReactNode;
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => {} });

const AppContextProvider = ({ children }: ContextProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
