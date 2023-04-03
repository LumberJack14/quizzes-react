import React from "react";
import styles from "@/styles/creatorSideBar.module.css";
import { QuestionName } from "@/types/types";

export type QuestionsSBProps = {
  questionCount: number;
  addQuestion: () => void;
  maxQuestions: number;
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  names: Array<QuestionName>;
};

const QuestionsSideBar: React.FC<QuestionsSBProps> = ({
  questionCount,
  addQuestion,
  maxQuestions,
  currentQuestion,
  setCurrentQuestion,
  names,
}) => {
  const handleAdd = (): void => {
    console.log(questionCount);
    questionCount >= maxQuestions
      ? alert("Amount of questions exceeded!")
      : addQuestion();
  };

  const handleClick = (el: QuestionName) => {
    setCurrentQuestion(el.number);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {names.map(el => (
          <button onClick={() => handleClick(el)} className={styles.button}>
            {`${el.name}`}
          </button>
        ))}
      </div>
      <button onClick={handleAdd} className={styles.button}>
        +
      </button>
    </div>
  );
};

export default QuestionsSideBar;
