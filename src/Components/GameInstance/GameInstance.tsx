import { Question, Answer } from "@/types/types";
import Link from "next/link";
import React, { useState } from "react";
import { AnswerButton, Timer } from "@/Components";

import styles from "@/styles/Button84.module.css";

type Props = {
  questions: Array<Question>;
  currentQuestion: number;
  handleAnswer: (answer: Answer | undefined) => void;
  seconds: number;
};

const GameInstance = ({
  questions,
  currentQuestion,
  handleAnswer,
  seconds,
}: Props): JSX.Element => {
  const [restartTimer, setRestartTimer] = useState<boolean>(false);

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
          restartTimer={restartTimer}
          setRestartTimer={() => setRestartTimer(false)}
        />
        <h2>
          question number: {currentQuestion + 1} <br />
          {questions[currentQuestion]?.text} <br />
          {questions[currentQuestion]?.answers.map((e: Answer): JSX.Element => {
            return (
              <AnswerButton
                key={e.text}
                onClick={() => {
                  handleAnswer(e);
                  setRestartTimer(true);
                }}
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
