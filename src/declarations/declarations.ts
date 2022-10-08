type correctAnswer = number;

export type ActionType =
  | { type: "SELECT_NUMBER"; payload: number }
  | { type: "ADD_TO_ANSWER"; payload: number };

export interface AppState {
  selectedNumber: number;
  correctAnswer: correctAnswer[];
  selectedAnswers: Set<number>;
}
