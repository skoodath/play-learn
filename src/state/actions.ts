import { ActionType, AppState } from "../declarations/declarations";

const setWelcome = (value: boolean): ActionType => ({
  type: "SET_WELCOME",
  payload: value,
});

const setCurrentUser = (currentUser: string): ActionType => ({
  type: "SET_USER",
  payload: currentUser,
});

const selectNumber = (
  selectedNumber: number,
  tableUpto: number
): ActionType => ({
  type: "SELECT_NUMBER",
  payload: {
    selectedNumber,
    tableUpto,
  },
});
const updateAnswer = (answerValue: number): ActionType => ({
  type: "ADD_TO_ANSWER",
  payload: answerValue,
});

const resetAll = (state: AppState): ActionType => ({
  type: "RESET_ALL",
  payload: state,
});

export { setWelcome, setCurrentUser, selectNumber, updateAnswer, resetAll };
