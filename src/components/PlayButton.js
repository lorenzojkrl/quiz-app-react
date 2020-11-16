import React from 'react';
import { Button } from '@material-ui/core';


const PlayButton = ({ text, setPlay, setQuestionsLeft, setScore }) => {
    const startQuiz = () => {
        if (text === 'PLAY!') {
            setTimeout(() => {
                setPlay(1)
            }, 400)
        } else {
            setQuestionsLeft(0)
            setScore(0)
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