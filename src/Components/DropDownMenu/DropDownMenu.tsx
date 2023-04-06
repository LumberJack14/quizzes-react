import React, { useState } from "react";

import buttonStyles from "@/styles/Button84.module.css";
import styles from "./DropDownMenu.module.css";

interface item {
  text: string;
  value?: number;
}

type Props = {
  text: string;
  items: Array<item>;
  Icon: React.ReactNode | undefined;
  onClickFunction: (value: number) => any;
};

export default function DropDownMenu({
  text,
  items,
  Icon,
  onClickFunction,
}: Required<Props>): JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <>
      <button
        className={buttonStyles.button}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {Icon}
        {text}
        {isExpanded && (
          <div className={styles.list}>
            <ul className={styles.ul}>
              {items.map((el: item) => {
                return (
                  <li
                    className={styles.item}
                    onClick={() => {
                      el.value && onClickFunction(el.value);
                    }}
                    key={el.text}
                  >
                    {el.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </button>
    </>
  );
}
