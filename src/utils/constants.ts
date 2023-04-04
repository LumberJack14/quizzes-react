import { FormInputType } from "@/types/types";

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

export const inputs: Array<FormInputType> = [
  {
    id: 1,
    type: "text",
    inputLabel: "Quiz Name",
    placeholder: "CoolQuiz1337",
    name: "quizName",
    errorMessage:
      "Quiz name should have 1-50 characters. And no special characters.",
    required: true,
    pattern: "[A-Za-z0-9]{1,50}$",
  },
  {
    id: 2,
    type: "text",
    inputLabel: "Quiz description",
    placeholder: "the best quiz out there",
    name: "quizDesc",
    errorMessage: "Quiz description's maximum length is 200 characters.",
    required: false,
    maxLength: 200,
  },
  {
    id: 3,
    type: "text",
    inputLabel: "Your nickname",
    placeholder: "Booty_hunter_9000",
    name: "creatorName",
    errorMessage: "Maximum length is 30 and no special charaters.",
    required: true,
    maxLength: 30,
  },
];

export const questionNameInput: FormInputType = {
  type: "text",
  inputLabel: "Question Name",
  placeholder: "question name",
  name: "question name",
  maxLength: 20,
};

export const questionInput: FormInputType = {
  type: "text",
  inputLabel: "Question",
  placeholder: "your question",
  name: "",
};
