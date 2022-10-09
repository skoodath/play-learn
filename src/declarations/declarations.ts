export type typeName = "SET_USER" | "SELECT_NUMBER" | "ADD_TO_ANSWER";

export type multiple = {
  selectedNumber: number;
  tableUpto: number;
};

export type ActionType =
  | {
      type: "ADD_TO_ANSWER";
      payload: number;
    }
  | {
      type: "SET_USER";
      payload: string;
    }
  | {
      type: "SELECT_NUMBER";
      payload: multiple;
    };

export interface AppState {
  currentUser: string;
  table: multiple;
  correctAnswer: number[];
  selectedAnswers: Set<number>;
}
