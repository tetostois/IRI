import React from 'react'
import Header from '../../composants/Header'
import { Col, Container, Row } from 'react-bootstrap'
import { Divider } from '@mui/material'
//import { modules } from '../../utils/data'
import { useNavigate } from 'react-router-dom'
import { modules } from '../../utils/data/index.ts'
import Footer from '../../composants/Footer/index.jsx'

export default function Dashboard() {
    const navigation = useNavigate();
    return (
        <>

            <Container fluid style={{ width: '100vw', margin: 0, padding: 0 }} >
                <Header />
                <div
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

                </div>

                <div
                    style={{ marginTop: 10, textAlign: "center", fontWeight: 'bold' }}
                >
                    Explorez nos Modules de Formation: Plongez dans notre programme de formation complet! Découvrez des modules spécialement conçus pour vous aider à maîtriser les compétences essentielles en matière de rentabilité et de fonctionnement. Que vous soyez un novice ou un entrepreneur chevronné, ces modules vous guideront vers le succès.
                </div>





                <Row style={{ backgroundColor: "rgba(36,172,242,0.3)", borderRadius: 5, margin: 20, marginTop: 30, padding: 10 }}>
                    <div style={{ fontWeight: 'bold', fontSize: 19, textAlign: 'center' }}>Module de formation</div>

                    {modules.map((module, index) => (
                        <Col onClick={() => { navigation('/module/' + (module.idModule)) }} style={{ margin: 8, minHeight: '200px', backgroundColor: "rgba(36,172,242,0.4)", padding: 5, borderRadius: 5 }}>
                            <div style={{ minWidth: '250px' }}>
                                <div name='titre' style={{ minHeight: '40px', textAlign: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', fontWeight: "bold", fontSize: 18, color: 'red' }}>
                                    <span>{module.titre}</span>
                                </div>
                                <Divider style={{ marginTop: 10, marginBottom: 10 }} />
                                <div name='description'>
                                    {module.description.map((point, index01) => (
                                        <div style={{ marginBottom: 10 }}>
                                            <span>
                                                <span style={{ fontWeight: "bold", fontStyle: "italic" }}>{point.titre ? point.titre + ' :' : ''}</span>
                                                {point.texte}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <Divider style={{ marginTop: 10, marginBottom: 10 }} />
                                <div name='nombreChapitre' style={{ textAlign: 'center' }}>
                                    <span><spam>{module.nombreChapitre}</spam> Chapitres</span>
                                </div>
                                <Divider style={{ marginTop: 10, marginBottom: 10 }} />
                                <div name='accessible' style={{ textAlign: 'center' }}>
                                    {module.isOk ?
                                        'Accessible'
                                        :
                                        ("Accessible a partir du: " + module.dateAccess)
                                    }
                                </div>
                            </div>
                        </Col>
                    ))}

                </Row>

                <Row style={{ backgroundColor: "rgba(36,172,242,0.3)", borderRadius: 5, margin: 20, marginTop: 30, padding: 20 }}>

                    <Col>
                        <div>
                            <div style={{ fontWeight: 'bold', fontSize: 17 }}>Fonctionement de la formation:</div>
                            <ol>
                                <li style={{ margin: 5 }}><span style={{ fontWeight: 'bold' }}>Chapitres et Quiz:</span> Chaque module est divisé en plusieurs chapitres. À la fin de chaque chapitre, vous trouverez un quiz à compléter. Ces quiz vous permettront de vérifier vos connaissances et de renforcer votre compréhension des sujets abordés.</li>
                                <li style={{ margin: 5 }}><span style={{ fontWeight: 'bold' }}>Progression Graduelle:</span> Les modules ne sont pas tous accessibles simultanément. Au début, seul le premier module est déverrouillé. Chaque semaine, un nouveau module sera accessible. Cette approche progressive vous permettra de suivre la formation de manière structurée et d’assimiler les informations étape par étape</li>
                                <li style={{ margin: 5 }}><span style={{ fontWeight: 'bold' }}>Attestation de Réussite:</span> À la fin de la formation, si vous avez complété tous les chapitres et réussi les quiz, vous recevrez une attestation qui témoigne de votre engagement et de vos compétences nouvellement acquises.</li>
                            </ol>
                        </div>
                    </Col>
                </Row>

                <Footer />
            </Container>

        </>
    )
}
