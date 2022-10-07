import { ActionType, AppState } from "../declarations/declarations";

export const initialState: AppState = {
  selectedNumber: 0,
  correctAnswer: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  selectedAnswers: new Set(),
};

export const reducer = (state: AppState = initialState, action: ActionType) => {
  switch (action.type) {
    case "SELECT_NUMBER":
      return {
        ...state,
        selectedNumber: action.payload,
      };
    case "CREATE_ANSWERS":
      return {
        ...state,
        correctAnswer: [...state.correctAnswer, action.payload],
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
