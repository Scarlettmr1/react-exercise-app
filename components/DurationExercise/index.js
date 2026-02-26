import React, { useState, useEffect, useRef } from 'react';
import './DurationExercise.css';

function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    const pad = n => String(n).padStart(2, '0');
    if (hrs > 0) return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    return `${pad(mins)}:${pad(secs)}`;
  };

  const handleReset = () => {
    setRunning(false);
    setSeconds(0);
  };

  return (
    <div className="exercise-card dur-card">
      <h2 className="exercise-name">{name}</h2>
      <div className="counter-display">
        <span className="counter-value timer-value">{formatTime(seconds)}</span>
        <span className="counter-label">elapsed</span>
      </div>
      <div className="button-group">
        <button
          className={`btn ${running ? 'btn-pause' : 'btn-primary'}`}
          onClick={() => setRunning(!running)}
        >
          {running ? 'Pause' : 'Start'}
        </button>
        <button className="btn btn-reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default DurationExercise;
