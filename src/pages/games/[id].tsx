import React, { useState } from "react";
import { Answer, Question, Quiz } from "@/types/types";
import { GameInstance, GameResult } from "@/Components";
import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const isLast = (questions: Array<Question>, e: Question): boolean => {
  return questions.indexOf(e) === questions.length - 1;
};

export const getServerSideProps: GetServerSideProps<{
  data: Quiz;
}> = async context => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_QUIZZES_API_URL as string}?id=${
      context.params?.id
    }`
  );

  const data: Quiz = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { data } };
};

export default function Game({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const router = useRouter();
  let seconds = router?.query?.seconds;

  const questions: Array<Question> = data.questions;

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [inGame, setInGame] = useState<boolean>(true);

  const handleAnswer = (answer: Answer | undefined): void => {
    answer?.correct && setCorrectAnswers(prev => prev + 1);
    setCurrentQuestion(prev => prev + 1);
    isLast(questions, questions[currentQuestion]) && setInGame(false);
  };

  if (inGame && typeof seconds === "string") {
    return (
      <GameInstance
        questions={questions}
        currentQuestion={currentQuestion}
        handleAnswer={(answer: Answer | undefined) => handleAnswer(answer)}
        seconds={parseInt(seconds)}
      />
    );
  }

  return <GameResult correctAnswers={correctAnswers} />;
}
