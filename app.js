import React, { useState } from 'react';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';
import './App.css';

const EXERCISES = [
  { name: 'Push-Ups', type: 'repetition' },
  { name: 'Pull-Ups', type: 'repetition' },
  { name: 'Sit-Ups', type: 'repetition' },
  { name: 'Squats', type: 'repetition' },
  { name: 'Running', type: 'duration' },
  { name: 'Plank', type: 'duration' },
  { name: 'Jump Rope', type: 'duration' },
  { name: 'Cycling', type: 'duration' },
];

function App() {
  const [selected, setSelected] = useState(null);

  let screen;
  if (selected === null) {
    screen = (
      <div className="menu-screen">
        <header className="app-header">
          <div className="header-tag">WORKOUT</div>
          <h1 className="app-title">Exercise<br />Tracker</h1>
          <p className="app-subtitle">Select an exercise to begin</p>
        </header>
        <div className="exercise-grid">
          {EXERCISES.map((ex) => (
            <button
              key={ex.name}
              className={`exercise-btn ${ex.type}`}
              onClick={() => setSelected(ex)}
            >
              <span className="ex-type-badge">{ex.type}</span>
              <span className="ex-name">{ex.name}</span>
              <span className="ex-arrow">→</span>
            </button>
          ))}
        </div>
      </div>
    );
  } else {
    let exerciseComponent;
    if (selected.type === 'repetition') {
      exerciseComponent = <RepetitionExercise name={selected.name} />;
    } else {
      exerciseComponent = <DurationExercise name={selected.name} />;
    }

    screen = (
      <div className="exercise-screen">
        <button className="back-btn" onClick={() => setSelected(null)}>
          ← Back
        </button>
        {exerciseComponent}
      </div>
    );
  }

  return (
    <div className="app">
      {screen}
    </div>
  );
}

export default App;
