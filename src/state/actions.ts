import { typeName, ActionType } from "../declarations/declarations";

const typeNames: typeName[] = ["SET_USER", "SELECT_NUMBER", "ADD_TO_ANSWER"];

const [setUser, numberSelect, addAnswer] = typeNames;

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

export { typeNames, setCurrentUser, selectNumber, updateAnswer };
