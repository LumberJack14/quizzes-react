import React from "react";
import styles from "@/styles/Button37.module.css";

export interface GreenButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const GreenButton: React.FC<GreenButtonProps> = props => {
  return (
    <button
      onClick={props.onClick}
      className={styles.button}
      style={props.style}
    >
      {props.text}
    </button>
  );
};

export default GreenButton;
