import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button, Divider } from '@mui/material'
//import { modules } from '../../utils/data'
import { useNavigate } from 'react-router-dom'
import { modules } from '../../utils/data/index.ts'
import Footer from '../../composants/Footer/index.jsx'
import HeaderContent from '../../composants/HeaderContent/index.jsx'
import './dashboardCSS.css';
import { AppContext } from '../../context/index.jsx'
import Head from '../../composants/Head/index.jsx'


export default function Dashboard() {
    const { isOnline, language, setUser, user } = useContext(AppContext);
    const navigation = useNavigate();
    const navigationData = [
        // Replace with your links
        { title: 'Partie 1 : Leadership', link: '/Transition' },
        { title: 'Partie 2: Entreprenariat', link: '/Transition' },
        { title: 'Partie 3: Compétence Professionnelle', link: '/Transition' },
    ];

    const navigate = useNavigate(); // Use useNavigate to handle navigation


    return (
        <>

            <Container fluid style={{ width: '100vw', margin: 0, padding: 0 }} >
                <Head />
                <HeaderContent />
                {/* <div
                    style={{
                        margin: 0,
                        height: "50vh",
                        width: '100%',
                        border: '0px solid black',
                        borderRadius: 5,
                        backgroundImage: `url(entrepreneurbureau.png)`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundColor: 'rgba(0,0,0,0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        color: '#fff',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    }}
                >

                    <div
                        style={{
                            backgroundColor: 'rgba(0,0,0,0.4)',
                            minHeight: "50vh",
                            width: '100%',
                            fontSize: 25,
                            fontWeight: "bold",
                            display: "flex",
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            justifyContent: "space-evenly"
                        }}

                    >
                        <div style={{
                            display: "flex",
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <span>Programe LeaderShip</span>
                            <span>Formation de 1000 Entrepreuneurs sur toute l'etendu du territoire national</span>
                        </div>

                        <div style={{
                            display: "flex",
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <span style={{ fontSize: 17 }}>Théme: <span style={{ fontSize: 22, }}>RENTABILITE ET FONCTIONNEMENT</span></span>
                        </div>

                        <div style={{
                            display: "flex",
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <span>Obtenez une Attestation á la suite de votre formation</span>
                            <span>Formation reconue par le MINJEC</span>
                        </div>
                    </div>

                </div> */}

                <div style={{ marginTop: 10, textAlign: "center", fontWeight: 'bold' }}>
                </div>



                <Row style={{ backgroundColor: "rgba(36,172,242,0.3)", borderRadius: 5, margin: 20, marginTop: 30, padding: 20 }}>

                    <Col>
                        <div>
                            <div style={{ fontWeight: 'bold', fontSize: 17 }}>Fonctionement du test de question a réponse ouvertes:</div>
                            <p className='test'>Ce test en ligne à réponses ouvertes est composé de 8 questions réparties en 3 parties.</p>
                            <ol>
                                <ul style={{ margin: 5 }}><span style={{ fontWeight: 'bold' }}>Partie1: Leadership:</span></ul>
                                <ul style={{ margin: 5 }}><span style={{ fontWeight: 'bold' }}>Partie2: Entreprenariat:</span> Les modules ne sont pas tous accessibles simultanément. Au début, seul le premier module est déverrouillé. Chaque semaine, un nouveau module sera accessible. Cette approche progressive vous permettra de suivre la formation de manière structurée et d’assimiler les informations étape par étape</ul>
                                <ul style={{ margin: 5 }}><span style={{ fontWeight: 'bold' }}>Partie2: Compétence Professionnelle:</span> À la fin de la formation, si vous avez complété tous les chapitres et réussi les quiz, vous recevrez une attestation qui témoigne de votre engagement et de vos compétences nouvellement acquises.</ul>
                            </ol>
                        </div>
                    </Col>
                </Row>




                {/* <Row style={{ borderRadius: 5, margin: 20, marginTop: 30, padding: 10 }}>
                    <div style={{ margin: '5px', fontWeight: 'blod', }}>Tableau de bord</div>
                    <Col style={{ margin: 10 }}>
                        <div className='statItemDashbord' style={{ backgroundColor: '#FFEEE8' }}>
                            <div className='icnDashbord'></div>
                            <div className='texteStatDashbord'>
                                <span className='numberStatDashboard'>Partie1 LeaderShip</span>
                                <span className='texteStatDashboard'>80 Questions</span>
                            </div>
                        </div>
                    </Col>
                    <Col style={{ margin: 10 }}>
                        <div className='statItemDashbord' style={{ backgroundColor: '#EBEBFF' }}>
                            <div className='icnDashbord'></div>
                            <div className='texteStatDashbord'>
                                <span className='numberStatDashboard'>Partie2: Entreprenariat</span>
                                <span className='texteStatDashboard'>80 Questions</span>
                            </div>
                        </div>
                    </Col>
                    <Col style={{ margin: 10 }}>
                        <div className='statItemDashbord' style={{ backgroundColor: '#E1F7E3' }}>
                            <div className='icnDashbord'></div>
                            <div className='texteStatDashbord'>
                                <span className='numberStatDashboard'>Partie3: : Compétence Professionnelle</span>
                                <span className='texteStatDashboard'>80 Questions</span>
                            </div>
                        </div>
                    </Col>
                </Row> */}

                <div className="question-page">
                    <div style={{ margin: '5px', fontWeight: 'blod', }}>Tableau de bord</div>
                    {/* Navigation buttons */}
                    <div className="navigation-buttons row">
                        {navigationData.map((item, index) => (
                            <Col key={index} style={{ margin: 10 }}>
                                {/* Wrap entire content in a button */}
                                <button
                                    className="statItemDashbord"
                                    style={{ backgroundColor: index % 2 === 0 ? '#FFEEE8' : '#EBEBFF' }} // Alternate background colors
                                    onClick={() => navigate(item.link)}
                                >
                                    <div className='icnDashbord'></div>
                                    <div className='texteStatDashbord'>
                                        <span className='numberStatDashboard'>{item.title}</span>
                                        <span className='texteStatDashboard'>80 Questions</span>
                                    </div>
                                </button>
                            </Col>
                        ))}
                    </div>
                    {/* Rest of your QuestionPage content */}
                </div>

                <Footer />
            </Container>

        </>
    )
}
