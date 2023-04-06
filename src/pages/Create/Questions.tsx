import React, { useState, ReactElement } from "react";
import { useRouter } from "next/router";
import { CustomQuestion } from "@/types/types";
import { primaryAnswers, questionNameInput } from "@/utils/constants";
import Layout from "@/Components/layout";
import {
  QuestionsSideBar,
  TextArea,
  FormInput,
  AnswersForm,
} from "@/Components";

import styles from "@/styles/Creator.module.css";

const maxQuestions: number = 50;

const Questions = (): JSX.Element => {
  //cringe
  const router = useRouter();
  const primaryInfo = router.query;

  const [questionCount, setQuestionCount] = useState(1);
  const [questions, setQuestions] = useState<Array<CustomQuestion>>([
    {
      name: "",
      number: 1,
      text: "",
      answers: primaryAnswers,
    },
  ]);
  const [selectedQuestion, setSelectedQuestion] = useState<number>(1);

  const handleAdd = (): void => {
    setQuestionCount(prev => prev + 1);

    setQuestions([
      ...questions,
      {
        name: "",
        number: questions.length + 1,
        text: "",
        answers: primaryAnswers,
      },
    ]);
  };

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestions(
      questions.map(el => {
        if (el.number === selectedQuestion) {
          el.name = e.target.value;
        }
        return el;
      })
    );
  };

  const onQuestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestions(
      questions.map(el => {
        if (el.number === selectedQuestion) {
          el.text = e.target.value;
        }
        return el;
      })
    );
  };

  const changeAnswer = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setQuestions(
      questions.map(question => {
        if (question.number === selectedQuestion) {
          question.answers.map(ans => {
            if (question.answers.indexOf(ans) === index) {
              ans.text = e.target.value;
            }
            return ans;
          });
        }
        return question;
      })
    );
  };

  const addAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQuestions(
      questions.map(el => {
        if (el.number === selectedQuestion) {
          el.answers.push({
            text: "",
            correct: false,
          });
        }
        return el;
      })
    );
  };

  const setCorrect = (index: number) => {
    setQuestions(
      questions.map(question => {
        if (question.number === selectedQuestion) {
          return {
            ...question,
            answers: question.answers.map((ans, i) => ({
              ...ans,
              correct: index === i,
            })),
          };
        }
        return question;
      })
    );
  };

  return (
    <div
      className={styles.container}
      style={{
        paddingTop: "65px",
        height: "100dvh",
        boxSizing: "border-box",
      }}
    >
      <QuestionsSideBar
        questionCount={questionCount}
        addQuestion={handleAdd}
        maxQuestions={maxQuestions}
        currentQuestion={selectedQuestion}
        setCurrentQuestion={setSelectedQuestion}
        questions={questions}
      />
      <form className={styles.form}>
        <h1>{primaryInfo.quizName}</h1>
        <FormInput
          value={questions[selectedQuestion - 1].name}
          input={questionNameInput}
          onChange={onNameChange}
        />
        <TextArea
          text={questions[selectedQuestion - 1].text}
          placeholder="your question"
          label="Question"
          onChange={onQuestionChange}
        />
        <AnswersForm
          answers={questions[selectedQuestion - 1].answers}
          changeAnswer={changeAnswer}
          addAnswer={addAnswer}
          setCorrect={setCorrect}
        />
      </form>
    </div>
  );
};

Questions.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Questions;
