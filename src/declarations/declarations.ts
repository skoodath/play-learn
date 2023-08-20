export type typeName =
  | "SET_USER"
  | "SELECT_NUMBER"
  | "ADD_TO_ANSWER"
  | "RESET_ALL";

export type multiple = {
  selectedNumber: number;
  tableUpto: number;
};

export type ActionType =
  | {
      type: "SET_WELCOME";
      payload: boolean;
    }
  | {
      type: "SET_USER";
      payload: string;
    }
  | {
      type: "ADD_TO_ANSWER";
      payload: number;
    }
  | {
      type: "SELECT_NUMBER";
      payload: multiple;
    }
  | { type: "RESET_ALL"; payload: AppState };

export interface AppState {
  welcome: boolean;
  currentUser: string;
  table: multiple;
  correctAnswer: number[];
}
