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
  const [questionsSet, setQuestionsSet] = useState([])
  const [questionsLeft, setQuestionsLeft] = useState(0)
  const [score, setScore] = useState(0)
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
          ? <div>
            <header className="App-header"> 10-QUESTION QUIZ</header>
            <PlayButton
              text="PLAY!"
              setPlay={setPlay}
              setQuestionsLeft={setQuestionsLeft}
              setScore={setScore}
              setQuestionsSet={setQuestionsSet}
            />
          </div>
          : <div className='main-section'>
            <header className="App-header"> QUESTION {questionsLeft}/10 </header>
            {questionsLeft === 10
              ? <div>
                <FinalScore score={Number(score)} />
                <PlayButton
                  text="REPLAY!"
                  setQuestionsLeft={setQuestionsLeft}
                  setScore={setScore}
                  setQuestionsSet={setQuestionsSet}
                />
                {/* Not deployed yet */}
                {/* <br />
                 or
                 <br />
                <PlayButton text="See Answers" /> */}

              </div>
              : <div>
                <GetQuestion
                  questions={questionsJSON}
                  questionsSet={questionsSet}
                  questionsLeft={questionsLeft}
                />
                <GetAnswers
                  questions={questionsJSON}
                  score={score}
                  setScore={setScore}
                  questionsLeft={questionsLeft}
                  setQuestionsLeft={setQuestionsLeft}
                  questionsSet={questionsSet}
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
// refactor
// remove redundant code
// Add a summary of Q&A 
