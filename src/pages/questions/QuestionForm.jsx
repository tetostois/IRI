// import React, { useState } from "react";

// const QuestionForm = ({ question, onSubmit }) => {
//     const [answer, setAnswer] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSubmit(answer);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             {question.type === "reponse_courte" && (
//                 <textarea
//                     value={answer}
//                     onChange={(e) => setAnswer(e.target.value)}
//                 />
//             )}
//             {question.type === "qcm" && (
//                 <ul>
//                     {question.answers.map((answer) => (
//                         <li key={answer.texte}>
//                             <input
//                                 type="radio"
//                                 name="answer"
//                                 value={answer.texte}
//                                 checked={answer === answer.texte}
//                                 onChange={(e) => setAnswer(e.target.value)}
//                             />
//                             {answer.texte}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//             <button type="submit">Valider</button>
//         </form>
//     );
// };

// export default QuestionForm;


const QuestionForm = ({
    question,
    questionIndex,
    remainingTime,
    isQuestionLocked,
    onAnswerSubmit,
    handleStartTimer,
    questionRef,
}) => {

    return (
        <div className="question-container">
            <h2>{question.texte}</h2>
            <p>{question.description}</p>
            <p>Temps restant : {remainingTime} secondes</p>
            <form onSubmit={onAnswerSubmit}>
                <label htmlFor="answer">Votre réponse : </label>
                <textarea id="answer" name="answer" ref={questionRef} disabled={isQuestionLocked} />
                <button type="submit" disabled={isQuestionLocked} onClick={() => handleStartTimer(questionIndex)}>
                    {isQuestionLocked ? "Soumis" : "Répondre"}
                </button>
            </form>
        </div>
    );
};

export default QuestionForm;
