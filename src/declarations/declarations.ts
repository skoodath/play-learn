type correctAnswer = number;

export type typeName = "SET_USER" | "SELECT_NUMBER" | "ADD_TO_ANSWER";

export type ActionType = { type: typeName; payload: string | number };

export interface AppState {
  currentUser: string;
  selectedNumber: number;
  tableUpto: number;
  correctAnswer: correctAnswer[];
  selectedAnswers: Set<number>;
}
