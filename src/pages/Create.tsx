import React, { useState, ReactElement } from "react";
import Layout from "@/Components/layout";
import { FormInput, AnswerButton, Upload } from "@/Components";
import { MEGABYTE, inputs } from "@/utils/constants";
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

    if (document.activeElement?.className.startsWith("Upload")) return;

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
      <form
        onSubmit={handleSubmit}
        className={styles.main}
        encType="multipart/form-data"
      >
        {inputs.map(input => (
          <FormInput key={input.id} input={input} onChange={handleChange} />
        ))}
        <Upload
          id="disableSubmit"
          label="Illustration (jpeg / png)"
          accept="image/png, image/jpeg"
          maxSize={MEGABYTE * 1.5}
        />
        <AnswerButton text="Continue" className={styles.button} />
      </form>
    </div>
  );
};

Create.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Create;
