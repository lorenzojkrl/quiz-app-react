import React, { useState } from 'react';
import { Button } from '@material-ui/core';


const AnswerButton = ({ value, e, questionNumber, questions, setQuestionNumber, questionsLeft, setQuestionsLeft, score, setScore, asked, setAsked }) => {
    const styles = {
        AnswerContainer: {
            maxWidth: '280px',
            flex: '300px',
            fontSize: 16,
            margin: '5px',
        },
        RightAnswer: {
            maxWidth: '280px',
            flex: '300px',
            fontSize: 16,
            margin: '5px',
            backgroundColor: 'rgba(70, 227, 89, 0.8)',
        },
        WrongAnswer: {
            maxWidth: '280px',
            flex: '300px',
            fontSize: 16,
            margin: '5px',
            backgroundColor: 'red',
        }
    }
    const [rightStyle, setRightStyle] = useState(styles.AnswerContainer)
    const handleUserAnswer = ({ value, e }) => {

        if (value === questions[questionNumber].correct_answer) {
            setRightStyle(styles.RightAnswer)
            setTimeout(() => {
                setRightStyle(styles.AnswerContainer)
                setScore(score += 1)
                setQuestionsLeft(questionsLeft + 1)

                // const genNewNumber = asked => {
                //     let number = Math.floor(Math.random() * 50)
                //     if (asked.includes(number)) {
                //         genNewNumber(asked)
                //     } else {
                //         return number
                //     }
                // }
                // let prova = genNewNumber(asked)
                // console.log(prova);
                // console.log(asked);
                // let newArr = asked.concat([prova])
                // console.log("newArr", newArr);
                // setQuestionNumber(newArr)

                setQuestionNumber(Math.floor(Math.random() * 50))


            }, 300);
        } else {
            setRightStyle(styles.WrongAnswer)
            setTimeout(() => {
                setRightStyle(styles.AnswerContainer)
                setQuestionsLeft(questionsLeft + 1)

                // const genNewNumber = asked => {
                //     let number = Math.floor(Math.random() * 50)
                //     if (asked.includes(number)) {
                //         genNewNumber(asked)
                //     } else {
                //         return number
                //     }
                // }
                // let prova = genNewNumber(asked)

                // console.log(prova);
                // console.log(asked);
                // let newArr = asked.push(prova)
                // console.log("newArr", newArr);

                // setQuestionNumber(newArr)

                setQuestionNumber(Math.floor(Math.random() * 50))
            }, 300);
        }
    }

    return (
        <Button
            variant="outlined"
            color="primary"
            size="large"
            style={rightStyle}
            onClick={(e) => handleUserAnswer({ value, e })}
        >
            {value}
        </Button>
    )
};

export default AnswerButton;