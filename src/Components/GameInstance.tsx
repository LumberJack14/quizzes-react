import { question, answer } from "@/types/types";
import Link from "next/link";
import React from "react";
import { AnswerButton, Timer } from "./exports";
import styles from "@/styles/button84.module.css";

type Props = {
  questions: Array<question>;
  currentQuestion: number;
  handleAnswer: (answer: answer | undefined) => void;
  seconds: number;
};

const GameInstance = ({
  questions,
  currentQuestion,
  handleAnswer,
  seconds,
}: Props): JSX.Element => {
  return (
    <div>
      <div>
        <Link style={{ textDecoration: "none" }} href="/quizdemo">
          <button className={styles.button}>Back</button>
        </Link>
      </div>
      <div>
        <Timer
          secondsNumber={seconds}
          onTimerFinished={() => handleAnswer(undefined)}
        />
        <h2>
          question number: {currentQuestion + 1} <br />
          {questions[currentQuestion]?.text} <br />
          {questions[currentQuestion]?.answers.map((e: answer): JSX.Element => {
            return (
              <AnswerButton
                key={e.text}
                onClick={() => handleAnswer(e)}
                text={e.text}
              />
            );
          })}
        </h2>
      </div>
    </div>
  );
};

export default GameInstance;
