import { typeName, ActionType } from "../declarations/declarations";

const typeNames: typeName[] = ["SET_USER", "SELECT_NUMBER", "ADD_TO_ANSWER"];

const [setUser, numberSelect, addAnswer] = typeNames;

const setCurrentUser = (currentUser: string): ActionType => ({
  type: setUser,
  payload: currentUser,
});

const selectNumber = (selectedNumber: number): ActionType => ({
  type: numberSelect,
  payload: selectedNumber,
});
const updateAnswer = (answerValue: number): ActionType => ({
  type: addAnswer,
  payload: answerValue,
});

export { typeNames, setCurrentUser, selectNumber, updateAnswer };
