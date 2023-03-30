export type answer = {
    text: string,
    isCorrect: boolean,
}

export interface question {
    text: string,
    answers: Array<answer>,
}

export interface QuizGame {
    amount: number,
    questions: Array<question>,
    creator: string, // TODO: create a user TYPE
    //creationDate: Date
}