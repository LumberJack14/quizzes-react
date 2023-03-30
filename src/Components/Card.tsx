import React, { useState } from "react";
import startButtonStyles from "@/styles/Button37.module.css";
import Image from "next/image";
import poster from "public/demoImages/poster.jpeg";
import DropDownMenu from "@/Components/DropDownMenu";
import { possibleTimers } from "@/utils/constants";
import { IoIosTimer } from "react-icons/io";
import { useRouter } from "next/router";
import styles from "@/styles/Card.module.css";

const Card = (): JSX.Element => {
  const router = useRouter();
  const [selectedTimer, setSelectedTimer] = useState<number>(10);

  const selectTimer = (seconds: number): void => {
    setSelectedTimer(seconds);
  };

  const handleClick = () => {
    router.push({
      pathname: "/games/[gameid]",
      query: {
        seconds: selectedTimer,
        gameid: 1,
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
        />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.header}>Zagolovok</h2>
          <h2>
            description <br />
            amount of questions: 2
          </h2>
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