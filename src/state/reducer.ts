import { ActionType, AppState } from "../declarations/declarations";
import { generateGrid } from "../utils/generateArray";
import { typeNames } from "./actions";

const [setUser, numberSelect, addAnswer] = typeNames;

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
  console.log(state);
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
        correctAnswer: generateGrid(12).map((time) => time * +action.payload),
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
