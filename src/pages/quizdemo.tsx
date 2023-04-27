import React, { ReactElement, useState } from "react";
import Card from "@/Components/Card/Card";
import useFetch from "@/utils/useFetch";
import { Quiz } from "@/types/types";
import Layout from "@/Components/layout";

import styles from "@/styles/quizdemo.module.css";

export default function QuizPage(): JSX.Element {
  // TODO: implement isloading with use router maybe through the card component
  // TODO: check everything for useCallback needed, handle errors
  // TODO: implement useTransition inside Search bar (in the _app)
  // TODO: onBlur event DropDownMenu
  const apiURL = process.env.NEXT_PUBLIC_QUIZZES_TOP_URL as string;

  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  //TODO: add error and pending parts
  //TODO: use URL object instead
  const { data } = useFetch(
    `${apiURL}?pageNumber=${pageNumber}&pageSize=${pageSize}`
  );

  const quizzes = data?.quizzes;
  const amount = data?.amount;

  //sort out everything about AS type casting so delete it
  return (
    <div className={styles.page}>
      {quizzes?.map((quiz: Quiz) => (
        <Card
          key={quiz.id}
          quizName={quiz.quizName}
          quizDesc={quiz.quizDesc}
          creatorId={quiz.creatorId}
          creatorName={quiz.creatorName as string}
          amount={quiz.amount}
          id={quiz.id as number}
        />
      ))}
    </div>
  );
}

QuizPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
