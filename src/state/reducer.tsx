import { ActionType, AppState } from "../declarations/declarations";
import { generateGrid } from "../utils/generateArray";

export const initialState: AppState = {
  selectedNumber: 0,
  correctAnswer: [],
  selectedAnswers: new Set(),
};

export const reducer = (state: AppState = initialState, action: ActionType) => {
  switch (action.type) {
    case "SELECT_NUMBER":
      return {
        ...state,
        selectedNumber: action.payload,
        correctAnswer: generateGrid(12).map((time) => time * action.payload),
      };
    case "ADD_TO_ANSWER":
      return {
        ...state,
        selectedAnswers: state.selectedAnswers.add(action.payload),
      };
    default:
      return state;
  }
};
