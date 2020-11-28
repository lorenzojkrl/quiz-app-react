import React from 'react';
import { Button } from '@material-ui/core';



const PlayButton = ({ text, setPlay, setQuestionsLeft, setScore, setQuestionsSet }) => {

    const reset = () => {
        setScore(0)
        setQuestionsLeft(0)
        setQuestionsSet([])
    }

    const generateSet = () => {
        let arr = [];
        while (arr.length < 10) {
            let r = Math.floor(Math.random() * 50) + 1;
            if (arr.indexOf(r) === -1) arr.push(r);
        }
        setQuestionsSet(arr)
        console.log("REPlay with: ", arr);
    }

    const startQuiz = () => {

        if (text === 'PLAY!') {
            generateSet()
            setTimeout(() => {
                setPlay(1)
            }, 300)
        } else {
            reset()
            generateSet()
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