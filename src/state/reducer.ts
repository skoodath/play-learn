import { ActionType, AppState } from "../declarations/declarations";
import { generateGrid } from "../utils/generateArray";

export const initialState: AppState = {
  welcome: true,
  currentUser: "",
  table: {
    selectedNumber: 0,
    tableUpto: 0,
  },
  correctAnswer: [],
  selectedAnswers: [],
};

export const init = (initialState: AppState) => {
  return initialState;
};

export const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "SET_WELCOME":
      return {
        ...state,
        welcome: action.payload,
      };
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
        selectedAnswers: [...state.selectedAnswers, +action.payload],
      };
    case "RESET_ALL":
      return init(action.payload);

    default:
      return state;
  }
};
