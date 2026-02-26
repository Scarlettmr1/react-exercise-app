import React, { useState } from 'react';
import './RepetitionExercise.css';

function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div className="exercise-card rep-card">
      <h2 className="exercise-name">{name}</h2>
      <div className="counter-display">
        <span className="counter-value">{count}</span>
        <span className="counter-label">reps</span>
      </div>
      <div className="button-group">
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          + Rep
        </button>
        <button className="btn btn-reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default RepetitionExercise;
