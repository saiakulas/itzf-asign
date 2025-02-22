import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <div>
      <p>Time Left: {timer} seconds</p>
    </div>
  );
};

export default Timer;
