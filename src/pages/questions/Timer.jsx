// import React, { useState, useEffect } from "react";

// const Timer = ({ timeLeft }) => {
//     const [minutes, setMinutes] = useState(Math.floor(timeLeft / 60));
//     const [seconds, setSeconds] = useState(timeLeft % 60);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (seconds > 0) {
//                 setSeconds((prevSeconds) => prevSeconds - 1);
//             } else if (minutes > 0) {
//                 setMinutes((prevMinutes) => prevMinutes - 1);
//                 setSeconds(59);
//             } else {
//                 // Expiré (facultatif : actions à effectuer si le temps est écoulé)
//                 console.log("Temps écoulé !");
//             }
//         }, 1000);
//         return () => clearInterval(interval);
//     }, [seconds, minutes]);

//     return (
//         <div className="timer">
//             {minutes}:{seconds < 10 ? "0" + seconds : seconds}
//         </div>
//     );
// };

// export default Timer;


import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";

const Timer = ({ timeLeft }) => {
    const [minutes, setMinutes] = useState(Math.floor(timeLeft / 60));
    const [seconds, setSeconds] = useState(timeLeft % 60);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds === 0) {
                setMinutes((prevMinutes) => prevMinutes - 1);
                setSeconds(59);
            } else {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }

            if (minutes === 0 && seconds === 0) {
                // Gérer le temps écoulé
                // ...
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [seconds]);

    const progress = (timeLeft / 120) * 100;

    return (
        <div className="container">
            <ProgressBar now={progress} variant="success" />
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
            {minutes === 0 && seconds === 0 && <p>Temps écoulé !</p>}
        </div>
    );
};

export default Timer;
