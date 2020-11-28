import React from 'react';
import { Button } from '@material-ui/core';


const PlayButton = ({ text, setPlay, setQuestionsLeft, setScore, setAsked }) => {
    const startQuiz = () => {
        if (text === 'PLAY!') {
            setTimeout(() => {
                setPlay(1)
            }, 300)
        } else {
            setScore(0)
            setQuestionsLeft(0)
            setAsked([])
        }

    }

    return (
        <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={startQuiz}
        >
            {text}
        </Button>
    );
};

export default PlayButton;