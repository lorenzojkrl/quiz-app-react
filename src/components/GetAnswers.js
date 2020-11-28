import React from 'react';
import AnswerButton from './AnswerButton'



const GetAnswers = ({ questions, setQuestionNumber, questionsLeft, setQuestionsLeft, score, setScore, questionsSet }) => {
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

    const randomAnswer = (questionsList) => {
        let answersArray = [
            questionsList[questionsSet[questionsLeft]].correct_answer,
            questionsList[questionsSet[questionsLeft]].incorrect_answers[0],
            questionsList[questionsSet[questionsLeft]].incorrect_answers[1],
            questionsList[questionsSet[questionsLeft]].incorrect_answers[2]
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

    let randomized = randomAnswer(questions)

    return (
        <div className="answers-container" style={styles.AnswersContainer}>
            <AnswerButton value={randomized[0]}
                questions={questions}
                setQuestionNumber={setQuestionNumber}
                score={score}
                setScore={setScore}
                questionsLeft={questionsLeft}
                setQuestionsLeft={setQuestionsLeft}
                questionsSet={questionsSet} />
            <AnswerButton value={randomized[1]}
                questions={questions}
                setQuestionNumber={setQuestionNumber}
                score={score}
                setScore={setScore}
                questionsLeft={questionsLeft}
                setQuestionsLeft={setQuestionsLeft}
                questionsSet={questionsSet} />
            <div className="break" style={styles.breakRow}></div>
            <AnswerButton value={randomized[2]}
                questions={questions}
                setQuestionNumber={setQuestionNumber}
                score={score}
                setScore={setScore}
                questionsLeft={questionsLeft}
                setQuestionsLeft={setQuestionsLeft}
                questionsSet={questionsSet} />
            <AnswerButton value={randomized[3]}
                questions={questions}
                setQuestionNumber={setQuestionNumber}
                score={score}
                setScore={setScore}
                questionsLeft={questionsLeft}
                setQuestionsLeft={setQuestionsLeft}
                questionsSet={questionsSet} />
        </div>
    );
};

export default GetAnswers;