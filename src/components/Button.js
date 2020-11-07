import React from 'react';

const Button = () => {
    return (
        <div>

        </div>
    );
};

export default Button;



// const Button = ({ questionNumber, questionsLeft, setQuestionsLeft, text, setScore, setQuestionNumber, score }) => {

//     const handleMe = () => {
//         console.log("clicked on: ", text)
//         setQuestionsLeft(questionsLeft + 1)
//         if (questionsLeft === 2) {
//             console.log("Fuori dai piedi");
//             return {
//                 "question-container": { display: "none" },
//                 "answers-container": "hidden"
//             }
//         }
//         if (text === questions[questionNumber].correct_answer) {
//             console.log("Correct anaswer");
//             setScore(score + 1)
//             setQuestionNumber(Math.floor(Math.random() * 50))
//         } else {
//             console.log("Incorrect anaswer");
//             setQuestionNumber(Math.floor(Math.random() * 50))
//         }
//     }

//     return (
//         <button onClick={handleMe}>{text}</button>
//     );
// }

// export default Button;