import React, { useState, useEffect } from "react";
import styles from "@/styles/quizdemo.module.css";

import Card from "@/Components/Card";
import useFetch from "@/utils/useFetch";
import { Quiz } from "@/types/types";

export default function QuizPage(): JSX.Element {
  // TODO: implement isloading with use router maybe through the card component
  // TODO: check everything for useCallback needed, handle errors
  // TODO: implement useTransition inside Search bar (in the _app)
  // TODO: onBlur event DropDownMenu
  const apiURL = process.env.NEXT_PUBLIC_QUIZZES_TOP_URL as string;

  const [pageNumber, setPageNumber] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(5);

  //TODO: add error and pending parts
  const { data } = useFetch(
    `${apiURL}?pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
  console.log(data);

  const quizzes = data?.quizzes;
  const amount = data?.amount;

  return (
    <div className={styles.page}>
      {quizzes?.map((quiz: Quiz) => (
        <Card
          key={quiz.id}
          quizName={quiz.quizName}
          quizDesc={quiz.quizDesc}
          creatorId={quiz.creatorId}
          amount={quiz.amount}
        />
      ))}
    </div>
  );
}
