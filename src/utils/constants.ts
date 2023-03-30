import { QuizGame } from "@/types/types";

export const possibleTimers = [
    {
        text: "5 seconds",
        value: 5,
    },
    {
        text: "10 seconds",
        value: 10,
    },
    {
        text: "30 seconds",
        value: 30,
    },
    {
        text: "60 seconds",
        value: 60,
    },
];

export const gameDemo: QuizGame = {
    amount: 2,
    questions: [
        {
            text: "who is the main character",
            answers: [
                {
                    text: "subaru",
                    isCorrect: true
                },
                {
                    text: "lion heart",
                    isCorrect: false
                }
            ]
        },
        {
            text: "felix is a trap",
            answers: [
                {
                    text: "true",
                    isCorrect: true
                },
                {
                    text: "false",
                    isCorrect: false
                }
            ]
        }
    ],
    creator: "me"
};