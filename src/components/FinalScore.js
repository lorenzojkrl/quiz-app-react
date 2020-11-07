import React from 'react';

const encouragement = (score) => {
    let encouragement = ''
    if (score < 4) {
        encouragement = 'Are You Kidding Me?'
    } else if (score < 7) {
        encouragement = 'Not Bad, Not Bad'
    } else {
        encouragement = 'Go! Hack NASA, now!'
    }
    return encouragement
}


const FinalScore = ({ score }) => {
    let cheers = encouragement(score)
    return (
        <div className="question-container">
            <div>You scored {score}/10</div>
            <div>{cheers}</div>
        </div>
    )
}

export default FinalScore;