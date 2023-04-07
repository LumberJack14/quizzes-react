import { Question, statusOnComplete } from "@/types/types";

export default function checkIntegrity(
  questions: Array<Question>
): statusOnComplete {
  let status: statusOnComplete = "OK";
  questions.forEach(question => {
    if (question.text.length === 0) status = "ERROR";
    question.answers.forEach(ans => {
      if (ans.text.length === 0) status = "ERROR";
    });
  });

  return status;
}
