import React, { useState, useEffect } from 'react';
import './App.css';
import FinalScore from './components/FinalScore'
import GetQuestion from './components/GetQuestion'
import GetAnswers from './components/GetAnswers'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import questionService from './services/getQuestions'
import PlayButton from './components/PlayButton'

const App = () => {
  const [questionsJSON, setQuestionsJSON] = useState([])
  const [questionNumber, setQuestionNumber] = useState(Math.floor(Math.random() * 50));
  const [score, setScore] = useState(0)
  const [questionsLeft, setQuestionsLeft] = useState(0)
  const [play, setPlay] = useState(0)


  useEffect(() => {
    questionService
      .getAll()
      .then(response => {
        setQuestionsJSON(response)
      })
  }, [])


  return (
    <div className="App">
      <NavBar />
      <div className="body-container">
        {play === 0
          ? <header className="App-header"> 10-QUESTION QUIZ</header>
          : <header className="App-header"> QUESTION {questionsLeft}/10 </header>
        }
        {play === 0
          ? <PlayButton
            text="PLAY!"
            setPlay={setPlay}
            setQuestionsLeft={setQuestionsLeft}
            setScore={setScore}
          />
          : <div className='main-section'>
            {questionsLeft === 10
              ? <div>
                <FinalScore score={Number(score)} />
                <PlayButton
                  text="REPLAY!"
                  setPlay={setPlay}
                  setQuestionsLeft={setQuestionsLeft}
                  setScore={setScore}
                />
                <br />
                 or
                 <br />
                <PlayButton text="See Answers" />

              </div>
              : <div>
                <GetQuestion
                  questionNumber={questionNumber}
                  questions={questionsJSON}
                  setQuestionsLeft={setQuestionsLeft}
                />
                <GetAnswers
                  questionNumber={questionNumber}
                  questions={questionsJSON}
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
// 
