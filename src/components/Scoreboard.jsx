import React from "react";

const Scoreboard = ({ score }) => {
  return (
    <div>
      <h3>Your Score: {score}</h3>
      <button onClick={() => window.location.reload()}>Retry Quiz</button>
    </div>
  );
};

export default Scoreboard;
