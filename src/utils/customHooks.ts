import { useContext } from "react";
import { AppContext } from "../state/appContext";

export const useSwitch = () => {
  const { state } = useContext(AppContext);
  const { table } = state;
  return null;
};
