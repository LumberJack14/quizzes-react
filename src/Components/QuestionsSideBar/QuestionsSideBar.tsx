import React from "react";
import { CustomQuestion, QuestionName } from "@/types/types";
import GreenButton from "../GreenButton";
import QuestionButton from "../QuestionButton/QuestionButton";

import styles from "./creatorSideBar.module.css";
//problems?

export type QuestionsSBProps = {
  questionCount: number;
  addQuestion: () => void;
  maxQuestions: number;
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  questions: Array<CustomQuestion>;
};

const QuestionsSideBar: React.FC<QuestionsSBProps> = ({
  questionCount,
  addQuestion,
  maxQuestions,
  currentQuestion,
  setCurrentQuestion,
  questions,
}) => {
  const handleAdd = (): void => {
    questionCount >= maxQuestions
      ? alert("Amount of questions exceeded!")
      : addQuestion();
  };

  const handleClick = (el: QuestionName) => {
    setCurrentQuestion(el.number);
  };

  return (
    <aside className={styles.container}>
      <div className={styles.wrapper}>
        {questions.map(el => (
          <QuestionButton
            key={el.number}
            questionNumber={el.number}
            questionName={el.name}
            questionText={el.text}
            onClick={() => handleClick(el)}
          />
        ))}
      </div>
      <GreenButton
        text={"Add"}
        onClick={handleAdd}
        style={{
          height: "40px",
          width: "180px",
          position: "absolute",
          top: "92dvh",
          marginLeft: "25px",
        }}
      />
    </aside>
  );
};

export default QuestionsSideBar;
