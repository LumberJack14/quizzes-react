import React, { useEffect, useState } from 'react'

type Props = {
    secondsNumber: number,
    onTimerFinished: () => void,
}

const Timer = ({ secondsNumber, onTimerFinished }: Props): JSX.Element => {

    const [seconds, setSeconds] = useState<number>(secondsNumber);

    useEffect(() => {
        if (seconds === 0) {
            onTimerFinished();
            setSeconds(secondsNumber);
        }
        const interval = setInterval(() => {
            setSeconds(prev => prev - 1)
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    }, [seconds]);



    return (
        <h2>Timer: {seconds}</h2>
    )
}

export default Timer;