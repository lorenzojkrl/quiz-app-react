import React from 'react';
import AnswerButton from './AnswerButton'

const randomAnswer = (questionNumber, questionsList) => {
    let answersArray = [
        questionsList[questionNumber].correct_answer,
        questionsList[questionNumber].incorrect_answers[0],
        questionsList[questionNumber].incorrect_answers[1],
        questionsList[questionNumber].incorrect_answers[2]
    ];

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

    let randomizedAnswers = shuffle(answersArray);
    return randomizedAnswers;
}

const GetAnswers = ({ questionNumber, questions, setQuestionNumber, questionsLeft, setQuestionsLeft, score, setScore, asked, setAsked }) => {
    const styles = {
        AnswersContainer: {
            display: 'flex',
            justifyContent: 'space-around',
            flexFlow: 'row wrap',
        },
        breakRow: {
            flexBasis: '100%',
            height: 0,
        },
    }

    let randomized = randomAnswer(questionNumber, questions)

    return (
        <div className="answers-container" style={styles.AnswersContainer}>
            <AnswerButton value={randomized[0]}
                questionNumber={questionNumber}
                questions={questions}
                setQuestionNumber={setQuestionNumber}
                score={score}
                setScore={setScore}
                questionsLeft={questionsLeft}
                setQuestionsLeft={setQuestionsLeft}
                asked={asked}
                setAsked={setAsked} />
            <AnswerButton value={randomized[1]}
                questionNumber={questionNumber}
                questions={questions}
                setQuestionNumber={setQuestionNumber}
                score={score}
                setScore={setScore}
                questionsLeft={questionsLeft}
                setQuestionsLeft={setQuestionsLeft}
                asked={asked}
                setAsked={setAsked} />
            <div className="break" style={styles.breakRow}></div>
            <AnswerButton value={randomized[2]}
                questionNumber={questionNumber}
                questions={questions}
                setQuestionNumber={setQuestionNumber}
                score={score}
                setScore={setScore}
                questionsLeft={questionsLeft}
                setQuestionsLeft={setQuestionsLeft}
                asked={asked}
                setAsked={setAsked} />
            <AnswerButton value={randomized[3]}
                questionNumber={questionNumber}
                questions={questions}
                setQuestionNumber={setQuestionNumber}
                score={score}
                setScore={setScore}
                questionsLeft={questionsLeft}
                setQuestionsLeft={setQuestionsLeft}
                asked={asked}
                setAsked={setAsked} />
        </div>
    );
};

export default GetAnswers;