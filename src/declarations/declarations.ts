type correctAnswer = number;

export type typeName = "SET_USER" | "SELECT_NUMBER" | "ADD_TO_ANSWER";

export type multiple = {
  selectedNumber: number;
  tableUpto: number;
};

export type ActionType = {
  type: typeName;
  payload: number | string | multiple;
};

export interface AppState {
  currentUser: string;
  table: multiple;
  correctAnswer: correctAnswer[];
  selectedAnswers: Set<number>;
}
