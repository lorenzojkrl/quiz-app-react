import React, { useState } from 'react';
import { Button } from '@material-ui/core';


const AnswerButton = ({ value, questions, questionsLeft, setQuestionsLeft, score, setScore, questionsSet }) => {
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
    const handleUserAnswer = ({ value }) => {

        if (value === questions[questionsSet[questionsLeft]].correct_answer) {
            setRightStyle(styles.RightAnswer)
            setTimeout(() => {
                setRightStyle(styles.AnswerContainer)
                setScore(score += 1)
                setQuestionsLeft(questionsLeft + 1)
            }, 300);
        } else {
            setRightStyle(styles.WrongAnswer)
            setTimeout(() => {
                setRightStyle(styles.AnswerContainer)
                setQuestionsLeft(questionsLeft + 1)
            }, 300);
        }
    }

    return (
        <Button
            variant="outlined"
            color="primary"
            size="large"
            style={rightStyle}
            onClick={() => handleUserAnswer({ value })}
        >
            {value}
        </Button>
    )
};

export default AnswerButton;