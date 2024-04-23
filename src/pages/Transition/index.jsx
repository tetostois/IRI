// import React from 'react'
// import './TransitionCSS.css';
// import Footer from '../../composants/Footer';
// import { Button, Col, Container, Row } from 'react-bootstrap';
// import ReactPlayer from 'react-player';
// import Head from '../../composants/Head';

// const Transition = () => {
//     return (
//         <>
//             <Head />
//             <div className='imgTransition'>
//                 <div style={{ marginLeft: '5%', marginRight: '5%', display: 'flex', backgroundColor: 'white', padding: '10px', borderBottom: '3px solid red', height: '15%', width: '100%' }}>
//                     <div style={{ marginRight: '5%', alignItems: 'center', flexDirection: 'column', width: '100%', padding: '30px', paddingTop: '5%' }}>
//                         <span style={{ color: 'black', fontSize: '20px' }}><strong>Msr/Mme Votre inscription est terminer</strong></span> <br />
//                         <span style={{ color: 'Red', fontSize: '40px', lineHeight: '28px' }}>BIENVENU AU PROGRAMME LEADERSHIP</span>
//                     </div>
//                     <div>
//                         <img src="images/hero.png" alt="Hero" style={{ width: '100%', maxWidth: '374px', height: 'auto', }} />
//                     </div>
//                 </div>

//             </div>

//             <div >
//                 <Container>
//                     <Row>
//                         <Col xs={12}>
//                             <div className="apropos-titre">
//                                 <h1 style={{ padding: '40px', textAlign: 'center' }}>Diriger vous vers votre tableau de bord</h1>
//                             </div>
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col xs={12}>
//                             <p style={{ fontSize: '18px', fontWeight: '400px', textAlign: 'center' }}>
//                                 Félicitations ! Vous vous êtes connecté avec succès.

//                                 Cliquez sur le bouton Ci-dessous pour commencer à explorer nos modules de formations, valides les cours et obtener votre certification.

//                                 Si vous avez besoin de plus d'information suivez la video.
//                             </p>
//                         </Col>

//                         <div style={{ display: 'flex' }} className="video-button-container">
//                             <ReactPlayer
//                                 url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"


//                             />
//                             <div style={{ display: "flex", justifyContent: "center", marginLeft: '20%', paddingTop: '10%' }}>
//                                 <a href="/dashboard" >
//                                     <Button variant="danger">Accéder au tableau de bord</Button>
//                                 </a>
//                             </div>
//                         </div>


//                     </Row>
//                 </Container>
//             </div>
//             <Footer />
//         </>
//     )
// }

// export default Transition

// import React from 'react'
// import Head from '../../composants/Head'
// import { Row, Col } from 'react-bootstrap';
// import './TransitionCSS.css';

// const Transition = () => {
//     return (
//         <div className='font'>
//             <Head />
//             <div style={{ paddingTop: '100px' }}>
//                 <Row style={{ backgroundColor: "rgba(36,172,242,0.3)", borderRadius: 5, margin: 20, marginTop: 30, padding: 20 }}>

//                     <Col>
//                         <div>
//                             <div style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center' }}> Fonctionement du test de question a réponse ouvertes:</div>
//                             <p style={{ textAlign: 'center' }}> Une fois que le quiz a commencé, vous ne pouvez pas l'arrêter avant de l'avoir terminé !
//                                 Assurez-vous d'être totalement prêt !
//                                 Rappelez-vous que vous êtes un soleil qui brille et qui apprend !
//                                 Assurez-vous que la réponse est sélectionnée dans la case prévue à côté de la question !</p>
//                             <ol>
//                                 <ul style={{ margin: 5 }}><span style={{ fontWeight: 'bold' }}>Partie1: Leadership:</span> L'objectif de ce test de leadership est d'évaluer les compétences et les aptitudes d’un ientrepreuneur en tant que leader.</ul>
//                                 <ul style={{ margin: 5 }}><span style={{ fontWeight: 'bold' }}>Partie2: Entreprenariat:</span> L'objectif de ce test est de  mesurer les qualités comportementales et les compétences nécessaires à la création d'une entreprise.</ul>
//                                 <ul style={{ margin: 5 }}><span style={{ fontWeight: 'bold' }}>Partie2: Compétence Professionnelle:</span>  L'objectif de ce test est d'évaluer ces compétences professionnelles, à la fois techniques et personnelles. </ul>
//                             </ol>
//                         </div>
//                     </Col>
//                 </Row>

//             </div>
//         </div>
//     )
// }

// export default Transition





import React from 'react';
import './TransitionCSS.css';// Assuming styles are defined in a separate CSS file
import Head from '../../composants/Head';
import Footer from '../../composants/Footer';
import { useNavigate } from 'react-router-dom';

const Transition = () => {
    const navigate = useNavigate();
    return (
        <>
            <Head />
            {/* Your existing component content */}

            {/* Warning message and buttons */}
            <div className='warning-message '>
                <div className="warning-message-container">
                    <div className="warning-message">
                        <p>Une fois que le quiz a commencé, vous ne pouvez pas abandonner avant d'avoir terminé !</p>
                        <p>Assurez-vous d'être bien préparé !</p>
                        <p>N'oubliez pas que vous êtes un soleil pour briller et aussi pour apprendre !</p>
                        <p>Assurez-vous que la réponse est sélectionnée dans la case prévue à cet effet !</p>
                    </div>
                    <div className="buttons-container">
                        <button className="btn btn-primary" onClick={() => navigate('/QuestionReponseChrono')}>Demarrer</button>
                        <button className="btn btn-secondary" onClick={() => navigate('/')}>Annuler</button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Transition;

