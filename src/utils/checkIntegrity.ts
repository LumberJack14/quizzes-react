import { CustomQuestion, statusOnComplete } from "@/types/types";

export default function checkIntegrity(
  questions: Array<CustomQuestion>
): [statusOnComplete, string] {
  for (const question of questions) {
    if (question.text.length === 0) return ["QUESTION", question.name];

    for (const answer of question.answers) {
      if (answer.text.length === 0) return ["ANSWER", question.name];
    }
  }

  return ["OK", ""];
}
