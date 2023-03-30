import React, { useState } from "react";
import { answer, question, QuizGame } from "@/types/types";
import { GameInstance, GameResult } from "@/Components/exports"
import { gameDemo } from "@/utils/constants";
import { useRouter } from "next/router";

const isLast = (questions: Array<question>, e: question): boolean => {
    return questions.indexOf(e) === (questions.length - 1);
};

export default function Game(): JSX.Element {

    const router = useRouter();
    let seconds = router?.query?.seconds;

    const questions: Array<question> = gameDemo.questions;

    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [correctAnswers, setCorrectAnswers] = useState<number>(0);
    const [inGame, setInGame] = useState<boolean>(true);

    const handleAnswer = (answer: answer | undefined): void => {
        answer?.isCorrect && setCorrectAnswers(prev => prev + 1);
        setCurrentQuestion(prev => prev + 1);
        isLast(questions, questions[currentQuestion]) && setInGame(false);
    }

    if (inGame && typeof seconds === "string") {
        return (
            <GameInstance
                questions={questions}
                currentQuestion={currentQuestion}
                handleAnswer={(answer: answer | undefined) => handleAnswer(answer)}
                seconds={parseInt(seconds)}
            />
        )
    };

    return (
        <GameResult correctAnswers={correctAnswers} />
    )
}