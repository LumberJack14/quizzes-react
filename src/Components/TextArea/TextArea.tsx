import React from "react";
import styles from "./TextArea.module.css";

export type TextAreaProps = {
  text: string;
  placeholder: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea: React.FC<TextAreaProps> = ({
  text,
  placeholder,
  label,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
    onChange(e);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <textarea
        value={text}
        className={styles.main}
        onChange={handleChange}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
