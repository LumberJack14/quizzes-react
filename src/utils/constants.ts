import { Quiz } from "@/types/types";

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

export const gameDemo: Quiz = {
  amount: 2,
  questions: [
    {
      text: "who is the main character",
      answers: [
        {
          text: "subaru",
          correct: true,
        },
        {
          text: "lion heart",
          correct: false,
        },
      ],
    },
    {
      text: "felix is a trap",
      answers: [
        {
          text: "true",
          correct: true,
        },
        {
          text: "false",
          correct: false,
        },
      ],
    },
  ],
  creator: "me",
};
