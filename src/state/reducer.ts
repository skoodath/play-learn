import { ActionType, AppState } from "../declarations/declarations";
import { generateGrid } from "../utils/generateArray";

export const initialState: AppState = {
  currentUser: "",
  table: {
    selectedNumber: 0,
    tableUpto: 0,
  },
  correctAnswer: [],
  selectedAnswers: new Set(),
};

export const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "SELECT_NUMBER":
      return {
        ...state,
        table: action.payload,
        correctAnswer: generateGrid(action.payload.tableUpto).map(
          (time) => time * action.payload.selectedNumber
        ),
      };
    case "ADD_TO_ANSWER":
      return {
        ...state,
        selectedAnswers: state.selectedAnswers.add(+action.payload),
      };
    default:
      return state;
  }
};
