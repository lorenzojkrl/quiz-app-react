import React, { useState } from 'react';
import './App.css';

import GetQuestion from './components/GetQuestion'
import Answers from './components/Answers'

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
        <Answers questionNumber={questionNumber} />


      </div>
    </div>
  );
}

export default App;


// Improvements

// Questions array will come from back - encodeURI, avoiding duplication