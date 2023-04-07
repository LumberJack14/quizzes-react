import { HTMLInputTypeAttribute } from "react";

export type statusOnComplete = "OK" | "ERROR";

export type Answer = {
  id?: number;
  text: string;
  correct: boolean;
};

export interface Question {
  text: string;
  answers: Array<Answer>;
}

export interface Quiz {
  id?: number;
  amount: number;
  quizName: string;
  quizDesc: string;
  questions: Array<Question>;
  creatorId: number;
  creatorName?: string; // TODO: create a user TYPE
  //creationDate: Date
}

export interface QuizzesApiRequest {
  quizzes: Array<Quiz>;
  amount: number;
}

export interface FormInputType {
  id?: number;
  type: HTMLInputTypeAttribute; // doesn't matter if it's set
  // like this becaues ts still doesn't complain about invalid
  // input types. leave it though
  inputLabel?: string;
  placeholder?: string;
  name: string;
  errorMessage?: string;
  required?: boolean;
  pattern?: string;
  maxLength?: number;
  style?: object;
}

export interface CustomQuestion extends Question {
  number: number;
  name: string;
}

export type QuestionName = Pick<CustomQuestion, "name" | "number">;
