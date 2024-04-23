
// import React, { useState, useEffect, useRef } from 'react';
// import './QuestionCSS.css'; // Importer le fichier CSS

// const QuestionPage = () => {
//     const [questions, setQuestions] = useState([
//         {
//             texte: "Quelle est la capitale de la France ?",
//             description: "Choisissez la bonne réponse parmi les options suivantes."
//         },
//         {
//             texte: "Combien de continents y a-t-il sur Terre ?",
//             description: "Choisissez la bonne réponse parmi les options suivantes."
//         },
//         // ... autres questions
//     ]);
//     const [answers, setAnswers] = useState([]);
//     const [remainingTimes, setRemainingTimes] = useState(
//         questions.map(() => 60) // 60 secondes par défaut pour chaque question
//     );
//     const [isTimerActive, setIsTimerActive] = useState(Array(questions.length).fill(false));
//     const questionRefs = useRef(Array(questions.length).fill(null));

//     useEffect(() => {
//         const intervals = questions.map((_, index) => {
//             return setInterval(() => {
//                 if (remainingTimes[index] > 0 && isTimerActive[index]) {
//                     setRemainingTimes((prevRemainingTimes) => {
//                         const newRemainingTimes = [...prevRemainingTimes];
//                         newRemainingTimes[index] = prevRemainingTimes[index] - 1;
//                         return newRemainingTimes;
//                     });
//                 } else if (remainingTimes[index] === 0) {
//                     // Délai écoulé
//                     alert("Le temps imparti pour la question " + (index + 1) + " est écoulé !");
//                     setIsTimerActive((prevIsTimerActive) => {
//                         const newIsTimerActive = [...prevIsTimerActive];
//                         newIsTimerActive[index] = false;
//                         return newIsTimerActive;
//                     });
//                 }
//             }, 1000);
//         });

//         return () => intervals.forEach((interval) => clearInterval(interval));
//     }, [remainingTimes, isTimerActive]);

//     const handleStartTimer = (questionIndex) => {
//         setIsTimerActive((prevIsTimerActive) => {
//             const newIsTimerActive = [...prevIsTimerActive];
//             newIsTimerActive[questionIndex] = true;
//             return newIsTimerActive;
//         });
//         questionRefs.current[questionIndex].focus(); // Focus sur le champ de réponse
//     };

//     const handleSubmit = (e, questionIndex) => {
//         e.preventDefault();

//         const answer = e.target.answer.value;

//         // Envoyer la réponse au serveur ou l'enregistrer localement

//         // Mettre à jour la liste des réponses
//         setAnswers([...answers, { questionIndex, answer }]);

//         // Réinitialiser le chronomètre
//         setRemainingTimes((prevRemainingTimes) => {
//             const newRemainingTimes = [...prevRemainingTimes];
//             newRemainingTimes[questionIndex] = 60;
//             return newRemainingTimes;
//         });

//         // Vider le champ de réponse
//         e.target.answer.value = '';

//         alert("Votre réponse à la question " + (questionIndex + 1) + " a été soumise !");
//         setIsTimerActive((prevIsTimerActive) => {
//             const newIsTimerActive = [...prevIsTimerActive];
//             newIsTimerActive[questionIndex] = false;
//             return newIsTimerActive;
//         });
//     };

//     return (
//         <div className="question-page">
//             <h1>Formulaire de réponses aux questions ouvertes</h1>
//             {questions.map((question, index) => (
//                 <div key={question.texte} className="question-container">
//                     <h2>{question.texte}</h2>
//                     <p>{question.description}</p>
//                     <p className="time-remaining">Temps restant : {remainingTimes[index]} secondes</p>
//                     <button onClick={() => handleStartTimer(index)} className="start-button">Démarrer le chronomètre</button>
//                     {isTimerActive[index] && (
//                         <form onSubmit={(e) => handleSubmit(e, index)}>
//                             <label htmlFor="answer">Votre réponse : </label>
//                             <textarea
//                                 id="answer"
//                                 name="answer"
//                                 ref={questionRefs.current[index]}
//                                 className="answer-field"
//                             />
//                             <button type="submit" className="submit-button">Valider</button>
//                         </form>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default QuestionPage;



import React, { useState, useEffect, useRef } from 'react';


const QuestionPage = () => {
    const [questions, setQuestions] = useState([
        {
            texte: "Démontrez la pertinence technologique de la civilisation africaine avant le début de la colonisation",
            description: "Appuyer et repondre a la question vous avez 2 min."
        },
        {
            texte: "Démontrez les caractéristiques qui font de la civilisation africaine une civilisation compétitive sur le plan National et International",
            description: "Appuyer et repondre a la question."
        },
        {
            texte: "Au-dela du relativisme, quelles sont les erreurs que la communauté Internationale commet et que vous ne devez absolument pas suivre, dans les domaines: des comportements humains, des décisions culturelles, des décisions sociales, économiques, politiques et financières ",
            description: "Appuyer et repondre a la question."
        },
        {
            texte: "Quelles sont les limites de la civilisations occidentale que l'Afrique peut se proposer de résoudre?",
            description: "Appuyer et repondre a la question"
        },
        {
            texte: "Comment l'Afrique peut-elle se positionner aujour'hui dans le monde, quelle valeurs ajoutée peut-elle créer et quel impact?",
            description: "Appuyer et repondre a la question"
        },
        {
            texte: "A partir de votre filière ou secteur d'apprentisage comment peut-elle etre Leader mondial?",
            description: "Appuyer et repondre a la question"
        },
        {
            texte: "En quoi la décision d'immigrer vers un Pays étranger peut-elle etre un échec de Leadership pour l'étudiant face à l'opportunisme des ressources locales de son pays?  ",
            description: "Appuyer et repondre a la question"
        },
        {
            texte: "Combien de continents y a-t-il sur Terre ?",
            description: "Appuyer et repondre a la question.",
            section: "-la fouine"
        },
        {
            texte: "Citez 5 produits et services de différentes catégories de prix, mais créés a partir d'une meme matiere locale de base.",
            description: "Appuyer et repondre a la question."
        },
        {
            texte: "Quelles sont les principes de fonctionnement courant d'un homme riche en Afrique.",
            description: "Appuyer et repondre a la question."
        },
        {
            texte: "Quelles sont les principes de fonctionnement courant d'un homme riche en Afrique?",
            description: "Appuyer et repondre a la question."
        },
        {
            texte: "Qu'est ce que la richesse globale en Afrique?",
            description: "Appuyer et repondre a la question."
        },
        {
            texte: "Qu'est ce qui manifeste la souveraineté de l'Etat au sein de votre Pays dans son rapport:-Avec ses propres populations  -Avec les autres Pays ",
            description: "Appuyer et repondre a la question."
        },
        {
            texte: "Quelles vérités faut-il apprendre aux populations pour maintenir la souveraineté de l'Etat?",
            description: "Appuyer et repondre a la question."
        },
        {
            texte: "Quel est le rôle courant de votre culture dans le pouvoir au sein de votre Pays ou de votre communauté?",
            description: "Appuyer et repondre a la question."
        },
        {
            texte: "Comment faites-vous de votre culture une religion sur le plan individuel et collectif ?",
            description: "Appuyer et repondre a la question."
        },
        {
            texte: "Présenter les éléments culturels africains qui peuvent diriger le monde",
            description: "Appuyer et repondre a la question."
        },
        {
            texte: " «On entre pas à la Chefferie les mains». Pourquoi faut-il offrir un présent à la première rencontre avec une autorité en Afrique? Cette culture a-t-elle des enjeux importants? Qualifier cette acte de « corruption», est ce une ignorance ou une garantie de bon fonctionnement au sein de la culture africaine? ",
            description: "Appuyer et repondre a la question."
        },
        {
            texte: " Sous quelles formes le retombées d’un présent reçu par un Chef ce manifeste auprès de la collectivité qu'il dirige ou de son peuple?",
            description: "Appuyer et repondre a la question."
        },
        {
            texte: ": Quels sont les indicateurs de Leadership culturel africain que portait le discours du Président Français le 15 Janvier 2024? ",
            description: "Appuyer et repondre a la question."
        },
        {
            texte: ": L'Afrique du Sud a porté plainte a la cours pénale internationale contre l'Etat d'Israelpour génocide sur la Palestine. Quel processus d'actions devait-elle mener pour s'assurer de gagner le procès sur la plainte déposée?",
            description: "Appuyer et repondre a la question 658161630 ."
        },
        {
            texte: ": Qu'est ce que c'est qu'un talent ?",
            description: "Appuyer et repondre a la question."
        },
        {
            texte: "",
            description: "Appuyer et repondre a la question."
        },
    ]);
    const [answers, setAnswers] = useState([]);
    const [remainingTimes, setRemainingTimes] = useState(
        questions.map(() => 60) // 60 secondes par défaut pour chaque question
    );
    const [isTimerActive, setIsTimerActive] = useState(Array(questions.length).fill(false));
    const questionRefs = useRef(Array(questions.length).fill(null));
    const [isQuestionLocked, setIsQuestionLocked] = useState(Array(questions.length).fill(false));

    useEffect(() => {
        const intervals = questions.map((_, index) => {
            return setInterval(() => {
                if (remainingTimes[index] > 0 && isTimerActive[index]) {
                    setRemainingTimes((prevRemainingTimes) => {
                        const newRemainingTimes = [...prevRemainingTimes];
                        newRemainingTimes[index] = prevRemainingTimes[index] - 1;
                        return newRemainingTimes;
                    });
                } else if (remainingTimes[index] === 0) {
                    // Délai écoulé
                    alert("Le temps imparti pour la question " + (index + 1) + " est écoulé !");
                    setIsTimerActive((prevIsTimerActive) => {
                        const newIsTimerActive = [...prevIsTimerActive];
                        newIsTimerActive[index] = false;
                        return newIsTimerActive;
                    });
                    setIsQuestionLocked((prevIsQuestionLocked) => {
                        const newIsQuestionLocked = [...prevIsQuestionLocked];
                        newIsQuestionLocked[index] = true;
                        return newIsQuestionLocked;
                    });
                }
            }, 1000);
        });

        return () => intervals.forEach((interval) => clearInterval(interval));
    }, [remainingTimes, isTimerActive]);

    const handleStartTimer = (questionIndex) => {
        setIsTimerActive((prevIsTimerActive) => {
            const newIsTimerActive = [...prevIsTimerActive];
            newIsTimerActive[questionIndex] = true;
            return newIsTimerActive;
        });
        // Focus sur le champ de réponse
    };

    const handleSubmit = (e, questionIndex) => {
        e.preventDefault();

        const answer = e.target.answer.value;

        // Envoyer la réponse au serveur ou l'enregistrer localement

        // Mettre à jour la liste des réponses
        setAnswers([...answers, { questionIndex, answer }]);

        // Réinitialiser le chronomètre
        setRemainingTimes((prevRemainingTimes) => {
            const newRemainingTimes = [...prevRemainingTimes];
            newRemainingTimes[questionIndex] = 60;
            return newRemainingTimes;
        });

        // Vider le champ de réponse
        e.target.answer.value = '';

        alert("Votre réponse à la question " + (questionIndex + 1) + " a été soumise !");
        setIsTimerActive((prevIsTimerActive) => {
            const newIsTimerActive = [...prevIsTimerActive];
            newIsTimerActive[questionIndex] = false;
            return newIsTimerActive;
        });
        setIsQuestionLocked((prevIsQuestionLocked) => {
            const newIsQuestionLocked = [...prevIsQuestionLocked];
            newIsQuestionLocked[questionIndex] = true;
            return newIsQuestionLocked;
        });
    };

    return (
        <div className="question-page">
            {questions.map((question, index) => (
                <div key={question.texte} className="question-container">
                    <h2 className='texte'>{question.texte}</h2>
                    <p className='question'>{question.description}</p>
                    <p className="time-remaining">Temps restant : {remainingTimes[index]} secondes</p>
                    <button
                        onClick={() => handleStartTimer(index)}
                        className="start-button"
                        disabled={isQuestionLocked[index]}
                    >
                        Démarrer le chronomètre
                    </button>
                    {isTimerActive[index] && !isQuestionLocked[index] && (
                        <form onSubmit={(e) => handleSubmit(e, index)}>
                            <label htmlFor="answer">Votre réponse : </label>
                            <textarea
                                id="answer"
                                name="answer"
                                ref={questionRefs.current[index]}
                                className="answer-field"
                                disabled={isQuestionLocked[index]}
                            />
                            <button type="submit" className="submit-button">Valider</button>
                        </form>
                    )}
                </div>
            ))}
        </div>
    );
};

export default QuestionPage;



// import React, { useState, useEffect } from 'react';

// const QuestionsComponent = () => {
//     const [questions, setQuestions] = useState([]); // Liste des questions
//     const [answers, setAnswers] = useState({}); // Réponses de l'utilisateur
//     const [timer, setTimer] = useState(7200); // Chronomètre en secondes (2 heures)

//     // Fonction pour charger les questions depuis la base de données (simulé ici)
//     const fetchQuestionsFromDatabase = async () => {
//         // Remplacez cette partie par votre logique de récupération des questions depuis MongoDB
//         // Exemple fictif :
//         const fetchedQuestions = await fetch('/api/questions');
//         const questionsData = await fetchedQuestions.json();
//         setQuestions(questionsData);
//     };

//     // Fonction pour enregistrer les réponses dans la base de données (simulé ici)
//     const saveAnswersToMongoDB = async () => {
//         // Remplacez cette partie par votre logique d'enregistrement des réponses dans MongoDB
//         // Exemple fictif :
//         await fetch('/api/answers', {
//             method: 'POST',
//             body: JSON.stringify(answers),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//     };

//     // Fonction pour gérer le chronomètre
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setTimer((prevTimer) => prevTimer - 1);
//         }, 1000);

//         // Lorsque le chronomètre atteint 0, enregistrez les réponses
//         if (timer === 0) {
//             saveAnswersToMongoDB();
//         }

//         return () => clearInterval(interval);
//     }, [timer]);

//     // Fonction pour gérer la saisie des réponses
//     const handleAnswerChange = (questionId, answer) => {
//         setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: answer }));
//     };

//     // Chargez les questions au montage du composant
//     useEffect(() => {
//         fetchQuestionsFromDatabase();
//     }, []);

//     return (
//         <div className="questions-container">
//             <h1 className="questions-title">Questions</h1>
//             <p className="timer">
//                 Temps restant : {Math.floor(timer / 60)} minutes {timer % 60} secondes
//             </p>
//             {questions.map((question) => (
//                 <div key={question.id} className="question-item">
//                     <p className="question-text">{question.text}</p>
//                     <input
//                         type="text"
//                         className="answer-input"
//                         value={answers[question.id] || ''}
//                         onChange={(e) => handleAnswerChange(question.id, e.target.value)}
//                     />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default QuestionsComponent;
