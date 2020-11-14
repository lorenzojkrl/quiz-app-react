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

const outcomeContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'blue',
    fontStyle: 'italic',
    fontSize: 16,
    backgroundColor: "#F8F8F8",
    minHeight: "180px",
    padding: '10px 30px',
    // border: '1px solid black',
    marginBottom: '10px'
}

const outcomeText = {
    margin: '5px',
    fontSize: 20,
}

const FinalScore = ({ score }) => {
    let cheers = encouragement(score)
    return (
        <div style={outcomeContainer}>
            <div style={outcomeText}>You Scored</div>
            <div style={outcomeText}>{score}/10</div>
            <div style={outcomeText}>{cheers}</div>
        </div>
    )
}

export default FinalScore;