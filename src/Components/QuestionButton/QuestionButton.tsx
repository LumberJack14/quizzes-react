import React from "react";
import QuestionMark from "../../../public/svg/question-icon.svg";

import styles from "./QuestionButton.module.css";

export type QuestoinButtonProps = {
  questionName: string;
  questionText: string;
  questionNumber: number;
  onClick: () => void;
};

const QuestionButton = (props: QuestoinButtonProps): JSX.Element => {
  const { questionName, questionText, onClick, questionNumber } = props;

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" || e.key === "Space") {
          onClick();
        }
      }}
      className={styles.main}
      onClick={onClick}
    >
      <QuestionMark
        style={{
          height: "20px",
          marginLeft: "25px",
          marginTop: "10px",
        }}
      />
      <div className={styles.container}>
        <div className={styles.name}>
          {questionName === "" ? `Question ${questionNumber}` : questionName}
        </div>
        <div className={styles.question}>{questionText}</div>
      </div>
    </div>
  );
};

export default QuestionButton;
