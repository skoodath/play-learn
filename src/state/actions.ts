import { ActionType } from "../declarations/declarations";

export const selectNumber = (selectedNumber: number): ActionType => ({
  type: "SELECT_NUMBER",
  payload: selectedNumber,
});
export const addToAnswer = (answerValue: number): ActionType => ({
  type: "ADD_TO_ANSWER",
  payload: answerValue,
});
