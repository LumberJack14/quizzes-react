import React, { useState } from "react";
import styles from "@/styles/FormInput.module.css";
import { FormInputType } from "@/types/types";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  input: FormInputType;
}

const FormInput = (props: Props): JSX.Element => {
  const { input, onChange, value } = props;

  const [blurred, setBlurred] = useState<boolean>(false);

  const handleBlur = () => {
    setBlurred(true);
  };

  return (
    <>
      <div className={styles.div}>
        <label>{input.inputLabel}</label>
        <input
          value={value}
          placeholder={input.placeholder}
          name={input.name}
          type={input.type}
          required={input.required}
          pattern={input.pattern}
          onChange={onChange}
          onBlur={handleBlur}
          alt={blurred.toString()}
          maxLength={input.maxLength}
          /* really dirty trick here */
        />
        <span className={styles.span}>{input.errorMessage}</span>
      </div>
    </>
  );
};

export default FormInput;
