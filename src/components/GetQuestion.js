import React from 'react';

function decode(str) {
    return decodeURI(str)
}

const GetQuestion = ({ questionNumber, questions }) => {

    const questionContainer = {
        color: 'blue',
        fontStyle: 'italic',
        fontSize: 16,
        backgroundColor: "#F8F8F8",
        minHeight: "180px",
        padding: '10px 30px',
        // border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10px'
    }

    let question = decode(questions[questionNumber].question)

    return (
        <div className="question-container" style={questionContainer}>
            <h2>{question}</h2>
        </div>
    );
};

export default GetQuestion;