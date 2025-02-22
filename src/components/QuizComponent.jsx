import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import { saveQuizHistoryIndexedDB } from "../utils/IndexedDB";

const QuizComponent = ({ setQuizFinished, setScore }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScoreState] = useState(0);
  const [answerSelected, setAnswerSelected] = useState(null);

  const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },
  ];

  const handleAnswer = (selectedAnswer) => {
    setAnswerSelected(selectedAnswer);
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScoreState(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setAnswerSelected(null);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      saveQuizHistoryIndexedDB(score);
      setQuizFinished(true);
      setScore(score);
    }
  };

  return (
    <div className="quiz-container">
      <h2>{quizData[currentQuestion].question}</h2>
      <div>
        {quizData[currentQuestion].options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            disabled={answerSelected}
          >
            {option}
          </button>
        ))}
      </div>
      <Timer />
      {answerSelected && (
        <div>
          <p>
            {answerSelected === quizData[currentQuestion].correctAnswer
              ? "Correct!"
              : "Incorrect!"}
          </p>
          <button onClick={nextQuestion}>Next Question</button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
