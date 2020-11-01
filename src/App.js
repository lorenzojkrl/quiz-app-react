import './App.css';

const App = () => {
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
          <h2>What is...</h2>
        </div>
        <div className="answers-container">
          <div className="answer-container">Answer A</div>
          <div className="answer-container">Answer B</div>
          <div class="break"></div>
          <div className="answer-container">Answer C</div>
          <div className="answer-container">Answer D</div>

        </div>

      </div>
    </div>
  );
}

export default App;
