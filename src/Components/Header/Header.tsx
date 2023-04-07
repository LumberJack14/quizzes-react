import React from "react";
import AnswerButton from "../AnswerButton/AnswerButton";
import Link from "next/link";

import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <button>button1</button>
      </div>
      <div className={styles.middle}>
        <Link href="/quizdemo" style={{ textDecoration: "none" }}>
          <AnswerButton text="Home" />
        </Link>
        <Link href="/Create" style={{ textDecoration: "none" }}>
          <AnswerButton text="Create" />
        </Link>
        <AnswerButton text="button3" />
        <AnswerButton text="button4" />
      </div>
      <div className={styles.right}>
        <button>button6</button>
        <button>button7</button>
      </div>
    </div>
  );
};

export default Header;
