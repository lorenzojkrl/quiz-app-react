import React, { useState } from 'react';
import './App.css';

import GetQuestion from './components/GetQuestion'

const App = () => {
  const [questionNumber, setQuestionNumber] = useState(Math.floor(Math.random() * 50));


  return (
    <div className="App">
      <nav className="navbar">
        Space reserved for navbar
    </nav>
      <header className="App-header">
        YOUR HTML QUIZ
      </header>
      <div className='main-section'>
        <div className="question-container">
          {console.log("qN:", questionNumber)}
          <h2><GetQuestion questionNumber={questionNumber} /></h2>
        </div>
        <div className="answers-container">
          <div className="answer-container">Answer A</div>
          <div className="answer-container">Answer B</div>
          <div className="break"></div>
          <div className="answer-container">Answer C</div>
          <div className="answer-container">Answer D</div>

        </div>

      </div>
    </div>
  );
}

export default App;
