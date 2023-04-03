import QuestionsSideBar from "@/Components/QuestionsSideBar";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { CustomQuestion, QuestionName } from "@/types/types";
import FormInput from "@/Components/FormInput";
import { questionNameInput } from "@/utils/constants";
import styles from "@/styles/Creator.module.css";

//make a layout with the header
const maxQuestions: number = 50;

const Questions: React.FC = () => {
  //cringe
  const router = useRouter();
  const primaryInfo = router.query;

  const [questionCount, setQuestionCount] = useState(1);
  const [questions, setQuestions] = useState<Array<CustomQuestion>>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<number>(1);
  const [names, setNames] = useState<Array<QuestionName>>([
    {
      name: "Question 1",
      number: 1,
    },
  ]);

  const handleAdd = (): void => {
    setQuestionCount(prev => prev + 1);

    setNames([
      ...names,
      {
        name: `Question ${questionCount + 1}`,
        number: names.length + 1,
      },
    ]);
  };

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNames(
      names.map(el => {
        if (el.number === selectedQuestion) {
          el.name = e.target.value;
        }
        return el;
      })
    );
  };

  return (
    <div className={styles.container}>
      <QuestionsSideBar
        questionCount={questionCount}
        addQuestion={handleAdd}
        maxQuestions={maxQuestions}
        currentQuestion={selectedQuestion}
        setCurrentQuestion={setSelectedQuestion}
        names={names}
      />
      <form className={styles.form}>
        <FormInput
          value={names[selectedQuestion - 1].name}
          input={questionNameInput}
          onChange={onNameChange}
        />
      </form>
    </div>
  );
};

export default Questions;
