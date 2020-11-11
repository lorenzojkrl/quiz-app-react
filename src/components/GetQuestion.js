import React from 'react';



function decode(str) {
    return decodeURI(str)
}


const GetQuestion = ({ questionNumber, questions }) => {

    const questionContainer = {
        color: 'black',
        fontStyle: 'italic',
        fontSize: 16,
        backgroundColor: "#F8F8F8",
        minHeight: "120px",
        padding: '10px 30px',
        // border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    let question = decode(questions[questionNumber].question)
    // console.log("In GetQuestion.js - question: ", questions[questionNumber].question);

    return (
        <div className="question-container" style={questionContainer}>
            <h2>{question}</h2>
        </div>
    );
};

export default GetQuestion;