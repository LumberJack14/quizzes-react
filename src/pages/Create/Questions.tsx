import React, { useState, ReactElement } from "react";
import { NextRouter, useRouter } from "next/router";
import { CustomQuestion, Quiz } from "@/types/types";
import { primaryAnswers, questionNameInput } from "@/utils/constants";
import Layout from "@/Components/layout";
import checkIntegrity from "@/utils/checkIntegrity";
import {
  QuestionsSideBar,
  TextArea,
  FormInput,
  AnswersForm,
  GreenButton,
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
      name: "Question 1",
      number: 1,
      text: "",
      answers: JSON.parse(JSON.stringify(primaryAnswers)),
    },
  ]);
  const [selectedQuestion, setSelectedQuestion] = useState<number>(1);

  const handleAdd = (): void => {
    setQuestionCount(prev => prev + 1);

    setQuestions([
      ...questions,
      {
        name: `Question ${questionCount + 1}`,
        number: questions.length + 1,
        text: "",
        answers: JSON.parse(JSON.stringify(primaryAnswers)),
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

  //add redirect to a new page indicating that the creation was successfull
  const handleSubmit = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const response = submitQuiz(primaryInfo, questions);

    response.catch(error => {
      console.error(error);
      //router.push("/errorPage");
      // add an error page explaining what's going on
    });
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
        <GreenButton text="Submit Quiz" onClick={handleSubmit} />
      </form>
    </div>
  );
};

Questions.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const submitQuiz = async (
  primaryInfo: any,
  questions: Array<CustomQuestion>
) => {
  const [status, name] = checkIntegrity(questions);

  if (status.toString() !== "OK") {
    alert(`There is a blank ${status.toLowerCase()} field. Check: ${name}`);
    return;
  }

  let data: Quiz = {
    amount: questions.length,
    quizName: primaryInfo.quizName,
    quizDesc: primaryInfo.quizDesc,
    questions: questions,
    creatorId: 10,
    creatorName: primaryInfo.creatorName,
  };

  let response;

  try {
    response = await fetch(process.env.NEXT_PUBLIC_QUIZZES_API_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error(error);
  }

  return response;
};

export default Questions;
