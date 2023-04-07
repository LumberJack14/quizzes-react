import React, { useState } from "react";
import Image from "next/image";
import poster from "public/demoImages/poster.jpeg";
import DropDownMenu from "@/Components/DropDownMenu/DropDownMenu";
import { possibleTimers } from "@/utils/constants";
import { IoIosTimer } from "react-icons/io";
import { useRouter } from "next/router";

import styles from "./Card.module.css";
import startButtonStyles from "@/styles/Button37.module.css";

// consider changing to type?
// TODO: change basic button to green button
export type CardProps = {
  quizName: string;
  quizDesc: string;
  creatorId: number;
  amount: number;
  id: number;
  creatorName: string;
};

const Card = ({
  quizName,
  quizDesc,
  creatorId,
  amount,
  id,
  creatorName,
}: CardProps): JSX.Element => {
  const router = useRouter();
  const [selectedTimer, setSelectedTimer] = useState<number>(10);

  const selectTimer = (seconds: number): void => {
    setSelectedTimer(seconds);
  };

  const handleClick = () => {
    router.push({
      pathname: `/games/${id}`,
      query: {
        seconds: selectedTimer,
        id: id,
      },
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={poster}
          alt="poster"
          style={{
            height: "90%",
            width: "unset",
            borderRadius: "25px",
          }}
          priority={true}
        />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.header}>{quizName}</h2>
          <h3>
            {" "}
            Description: <br />
            {quizDesc} <br />
            amount of questions: {amount} <br />
            creator: {creatorName}
          </h3>
        </div>
        <div className={styles.buttonContainer}>
          <button className={startButtonStyles.button} onClick={handleClick}>
            START
          </button>
          <DropDownMenu
            text="SET TIMER"
            items={possibleTimers}
            Icon={
              <IoIosTimer
                style={{
                  marginRight: "10px",
                }}
                size={35}
                className={styles.icon}
              />
            }
            onClickFunction={(seconds: number) => selectTimer(seconds)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
