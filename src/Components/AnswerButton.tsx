import React, { ButtonHTMLAttributes } from "react";
import styles from "../styles/Button84.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
} 

export default function AnswerButton(props: Props): JSX.Element {
    return (
        <button onClick={props.onClick} className={styles.button}>{props.text}</button>
    )
}