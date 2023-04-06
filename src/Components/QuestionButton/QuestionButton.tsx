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

  const innerText =
    questionText.length >= 20
      ? `${questionText.slice(0, 20)}...`
      : questionText;

  return (
    <div className={styles.main} onClick={onClick}>
      <QuestionMark
        style={{ marginRight: "10px", marginTop: "3px", fontSize: 100 }}
      />
      <div>
        <div className={styles.name}>
          {questionName === "" ? `Question ${questionNumber}` : questionName}
        </div>
        <div className={styles.question}>{innerText}</div>
      </div>
    </div>
  );
};

export default QuestionButton;