import React, { useState } from "react";
import QuizComponent from "./components/QuizComponent";
import Scoreboard from "./components/Scoreboard";

const App = () => {
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="app-container">
      {quizFinished ? (
        <Scoreboard score={score} />
      ) : (
        <QuizComponent setQuizFinished={setQuizFinished} setScore={setScore} />
      )}
    </div>
  );
};

export default App;
