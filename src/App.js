import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import FinalScore from './components/FinalScore'
import GetQuestion from './components/GetQuestion'
import GetAnswers from './components/GetAnswers'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const App = () => {
  const [questionsJSON, setQuestionsJSON] = useState([])
  const [questionNumber, setQuestionNumber] = useState(Math.floor(Math.random() * 50));
  const [score, setScore] = useState(0)
  const [questionsLeft, setQuestionsLeft] = useState(0)
  const [play, setPlay] = useState(0)


  useEffect(() => {
    axios
      .get('http://localhost:3001/questions')
      .then(response => {
        setQuestionsJSON(response.data)
      })
  }, [])

  const StartButton = ({ text }) => {
    const startQuiz = () => {
      setPlay(1)
      // console.log("In StartButton - startQuiz concluded");
    }

    return (
      <button onClick={startQuiz}>{text}</button>
    );
  }

  return (
    <div className="App">
      <NavBar />
      <div className="body-container">
        {play === 0
          ? <header className="App-header"> 10-QUESTION QUIZ</header>
          : <header className="App-header"> QUESTION {questionsLeft}/10 </header>
        }

        {play === 0
          ? <StartButton text="Start Quiz!"></StartButton>
          : <div className='main-section'>
            {questionsLeft === 10
              ? <FinalScore score={Number(score)} />
              : <div>
                <GetQuestion questionNumber={questionNumber} questions={questionsJSON}
                  setQuestionsLeft={setQuestionsLeft}
                />
                <GetAnswers questionNumber={questionNumber} questions={questionsJSON}
                  setQuestionNumber={setQuestionNumber}
                  score={score}
                  setScore={setScore}
                  questionsLeft={questionsLeft}
                  setQuestionsLeft={setQuestionsLeft}
                />
              </div>
            }
          </div>
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;


// Improvements
// randomAnswer to be reviewed with ...
// refactor StartButton and header in component
// Build and move to backend
