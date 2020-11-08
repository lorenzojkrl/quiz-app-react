import React from 'react';

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        // swap elements array[i] and array[j]
        // we use "destructuring assignment" syntax to achieve that
        // let t = array[i]; array[i] = array[j]; array[j] = t
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

// Reviee and eliminate, use ...
const randomAnswer = (questionNumber, questionsList) => {
    // console.log(`In randomAnswer - Correct answer: ${questionsList[questionNumber].correct_answer}`);
    let answersArray = [
        questionsList[questionNumber].correct_answer,
        questionsList[questionNumber].incorrect_answers[0],
        questionsList[questionNumber].incorrect_answers[1],
        questionsList[questionNumber].incorrect_answers[2]
    ];

    let randomizedAnswers = shuffle(answersArray);
    // console.log('In randomAnswer - randomized: ', randomizedAnswers);
    return randomizedAnswers;
}


const GetAnswers = ({ questionNumber, questions, setQuestionNumber, questionsLeft, setQuestionsLeft, score, setScore }) => {
    const AnswersContainer = {
        display: 'flex',
        flexFlow: 'row wrap'
    }
    const AnswerContainer = {
        padding: '20px',
        border: '1px solid black',
        minWidth: '300px',
        flex: '300px',
        background: 'none',
        fontSize: 16,
    }
    const breakRow = {
        flexBasis: '100%',
        height: 0,
    }

    const AnswerButton = ({ value }) => {

        const handleUserAnswer = ({ value }) => {
            // console.log("In handleUserAnswer - entered");
            // console.log("Text is: ", value)
            if (value === questions[questionNumber].correct_answer) {
                // console.log("CORRECT! ", value)
                setScore(score += 1)
            } else {
                // console.log("WRONG! ", value)
            }
            setQuestionsLeft(questionsLeft + 1)
            setQuestionNumber(Math.floor(Math.random() * 50))
        }

        return (
            <button className="answer-container" style={AnswerContainer} onClick={() => handleUserAnswer({ value })}  >{value}</button>
        )
    }

    let randomized = randomAnswer(questionNumber, questions)

    return (
        <div className="answers-container" style={AnswersContainer}>
            <AnswerButton value={randomized[0]} />
            <AnswerButton value={randomized[1]} />
            <div className="break" style={breakRow}></div>
            <AnswerButton value={randomized[2]} />
            <AnswerButton value={randomized[3]} />


        </div>
    );
};

export default GetAnswers;