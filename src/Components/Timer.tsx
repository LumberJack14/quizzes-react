import React, { useEffect, useState } from "react";

type Props = {
  secondsNumber: number;
  onTimerFinished: () => void;
  restartTimer: boolean;
  setRestartTimer: () => void;
};

const Timer = ({
  secondsNumber,
  onTimerFinished,
  restartTimer,
  setRestartTimer,
}: Props): JSX.Element => {
  const [seconds, setSeconds] = useState<number>(secondsNumber);

  useEffect(() => {
    if (restartTimer) {
      setSeconds(secondsNumber);
      setRestartTimer();
    }
    if (seconds === 0) {
      setSeconds(secondsNumber);
      onTimerFinished();
    }
    const interval = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds, restartTimer]);

  return <h2>Timer: {seconds}</h2>;
};

export default Timer;
