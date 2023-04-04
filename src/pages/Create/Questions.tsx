import QuestionsSideBar from "@/Components/QuestionsSideBar";
import { useRouter } from "next/router";
import React, { useState, ReactElement } from "react";
import { CustomQuestion } from "@/types/types";
import FormInput from "@/Components/FormInput";
import Layout from "@/Components/layout";
import { questionInput, questionNameInput } from "@/utils/constants";
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
      answers: [],
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
        answers: [],
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

  const onQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestions(
      questions.map(el => {
        if (el.number === selectedQuestion) {
          el.text = e.target.value;
        }
        return el;
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
        <FormInput
          input={questionInput}
          value={questions[selectedQuestion - 1].text}
          onChange={onQuestionChange}
        />
      </form>
    </div>
  );
};

Questions.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Questions;
