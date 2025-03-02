import React, { useState, useEffect } from "react";
import { fetchRandomDestination } from "./services/api";
import Confetti from "react-confetti";

const App = () => {
  const [destination, setDestination] = useState(null);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    loadDestination();
  }, []);

  const loadDestination = async () => {
    const data = await fetchRandomDestination();
    setDestination(data);
    setFeedback(null);
  };

  const handleSubmit = () => {
    if (answer.toLowerCase() === destination.city.toLowerCase()) {
      setFeedback({ correct: true, funFact: destination.fun_fact[0] });
    } else {
      setFeedback({ correct: false, funFact: destination.fun_fact[1] });
    }
  };

  return (
    <div className="game-container">
      {feedback?.correct && <Confetti />}
      <h2>Guess the Destination!</h2>
      {destination && (
        <>
          <p>
            {
              destination.clues[
                Math.floor(Math.random() * destination.clues.length)
              ]
            }
          </p>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Your answer..."
          />
          <button onClick={handleSubmit}>Submit</button>
          {feedback && (
            <div>
              <p>{feedback.correct ? "🎉 Correct!" : "😢 Incorrect!"}</p>
              <p>Fun Fact: {feedback.funFact}</p>
              <button onClick={loadDestination}>Next</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default App;
