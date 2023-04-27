import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import FormInput from "../FormInput/FormInput";
import { Answer } from "@/types/types";

import styles from "./AnswersForm.module.css";

export type AnswersFormProps = {
  answers: Array<Answer>;
  changeAnswer: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  addAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void;
  setCorrect: (index: number) => void;
};

let input = {
  type: "text",
  name: "answer1",
};

let input2 = {
  type: "text",
  name: "ready",
  cursor: "pointer",
};

const AnswersForm: React.FC<AnswersFormProps> = props => {
  const { answers, changeAnswer, addAnswer, setCorrect } = props;

  return (
    <div className={styles.main}>
      <label className={styles.label}>Answers</label>
      <div className={styles.items}>
        {answers.map(el => (
          <div key={answers.indexOf(el)} className={styles.item}>
            <BsFillCircleFill
              onClick={() => setCorrect(answers.indexOf(el))}
              style={{
                color: `${el.correct ? "#01b075" : "#ed3737"}`,
                filter: `drop-shadow(0 0 10px ${el.correct ? "green" : "red"})`,
                cursor: "pointer",
              }}
            />
            <FormInput
              onChange={e => changeAnswer(e, answers.indexOf(el))}
              value={el.text}
              input={input}
            />
          </div>
        ))}
        <div className={styles.ready}>
          <button onClick={addAnswer}></button>
        </div>
      </div>
    </div>
  );
};

export default AnswersForm;
