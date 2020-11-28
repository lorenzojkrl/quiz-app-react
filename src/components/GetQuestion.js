import React from 'react';

function decode(str) {
    return decodeURI(str)
}

const GetQuestion = ({ questions, questionsSet, questionsLeft }) => {

    const questionContainer = {
        color: 'alice-blue',
        fontStyle: 'italic',
        fontFamily: 'sans-serif',
        fontSize: 18,
        backgroundColor: "#F8F8F8",
        minHeight: "180px",
        padding: '10px 30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10px'
    }
    console.log("number: ", questionsSet[questionsLeft])
    let question = decode(questions[questionsSet[questionsLeft]].question)

    return (
        <div className="question-container" style={questionContainer}>
            <h2>{question}</h2>
        </div>
    );
};

export default GetQuestion;