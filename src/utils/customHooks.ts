import { useContext } from "react";
import { AppContext } from "../state/appContext";

export const useSwitch = () => {
  const { state } = useContext(AppContext);
  const { selectedAnswers, table } = state;
  let view = selectedAnswers.length < table.tableUpto;
  return view;
};
