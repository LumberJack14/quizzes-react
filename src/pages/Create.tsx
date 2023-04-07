import React, { useState, ReactElement } from "react";
import Layout from "@/Components/layout";
import { FormInput, AnswerButton } from "@/Components";
import { inputs } from "@/utils/constants";
import { useRouter } from "next/router";

import styles from "@/styles/PrimaryForm.module.css";

const Create = (): JSX.Element => {
  const router = useRouter();

  // the idea: user submits primary form and then goes on to create
  // questions one by one being able to move between them as they
  // they would be stored on their pc. Also button to add and remove questions

  const [values, setValues] = useState({
    quizName: "",
    quizDesc: "",
    creatorName: "",
  });

  // TODO: make an array of messages and map them
  // TODO: make desc scalable

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    router.push({
      pathname: "/Create/questions",
      query: {
        quizName: values.quizName,
        quizDesc: values.quizDesc,
        creatorName: values.creatorName,
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        paddingTop: "65px",
      }}
    >
      <form onSubmit={handleSubmit} className={styles.main}>
        {inputs.map(input => (
          <FormInput key={input.id} input={input} onChange={handleChange} />
        ))}
        <AnswerButton text="Continue" className={styles.button} />
      </form>
    </div>
  );
};

Create.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Create;
