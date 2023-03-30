import React from "react";
import styles from "@/styles/quizdemo.module.css";

import Card from "@/Components/Card";

export default function Quiz(): JSX.Element {
  // TODO: implement isloading with use router maybe through the card component
  // TODO: check everything for useCallback needed
  return (
    <div className={styles.page}>
      <Card />
    </div>
  );
}
