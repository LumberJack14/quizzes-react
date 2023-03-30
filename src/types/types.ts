export type Answer = {
  text: string;
  correct: boolean;
};

export interface Question {
  text: string;
  answers: Array<Answer>;
}

export interface Quiz {
  amount: number;
  id: number;
  quizName: string;
  quizDesc: string;
  questions: Array<Question>;
  creatorId: number; // TODO: create a user TYPE
  //creationDate: Date
}

export interface QuizzesApiRequest {
  quizzes: Array<Quiz>;
  amount: number;
}
