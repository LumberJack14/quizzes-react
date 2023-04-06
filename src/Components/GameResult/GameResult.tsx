import Link from "next/link";
import React from "react";
import styles from "@/styles/button84.module.css";

type Props = {
  correctAnswers: number;
};

const GameResult = ({ correctAnswers }: Props): JSX.Element => {
  return (
    <div>
      <h2>GameResult Correct answers: {correctAnswers}</h2>
      <button className={styles.button}>Details</button>
      <Link style={{ textDecoration: "none" }} href="/quizdemo">
        <button className={styles.button}>Back</button>
      </Link>
    </div>
  );
};

export default GameResult;
