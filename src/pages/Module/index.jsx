import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../composants/Header';
import { chapitre, modules } from '../../utils/data/index.ts'
//import { useDeviceDetect } from 'react-device-detect';
import { isMobile } from 'react-device-detect';
import ReactPlayer from 'react-player'
import { Button, Checkbox, CircularProgress } from '@mui/material';
import HeaderContent from '../../composants/HeaderContent/index.jsx';
import { Col, Container, Row } from 'react-bootstrap';
import './moduleCSS.css';

export default function Module({ chapitres }) {
    const { idModule } = useParams();
    const navigation = useNavigate();

    var module = modules.find((module) => ((module.idModule * 1) === (idModule * 1)))
    console.log('modulle == ', module)
    if (!module) {
        module = {}
    }
    return (
        <Container fluid style={{ width: '100vw', margin: 0, padding: 0 }} >
            <div style={{ height: '100vh' }}>
                <Header />
                <HeaderContent />{/*justifyContent: 'space-evenly', flexWrap: 'wrap' */}
                <Row style={{ padding: 10, justifyContent: 'space-evenly', }}>
                    <Col md={2} style={{ maxWidth: '300px', margin: 10, padding: 0, boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)' }}>
                        <div className="chapitreModule">
                            <div className='divImageChapitremodule'>
                                <img className='imageLogoFooter' src='/images/lecteurcour.png' />
                            </div>
                            <div className='titreChapitre'>
                                <span>Metrise du maketing</span>
                            </div>
                            <div className='statutChapitre'>
                                <Button onClick={() => { navigation('/course/') }} variant='contained' sx={{ width: '100%' }}>Commencer le cour</Button>
                            </div>
                        </div>
                    </Col>

                    <Col md={2} style={{ maxWidth: '300px', margin: 10, padding: 0, boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)' }}>
                        <div className="chapitreModule">
                            <div className='divImageChapitremodule'>
                                <img className='imageLogoFooter' src='/images/lecteurcour.png' />
                            </div>
                            <div className='titreChapitre'>
                                <span>Metrise du maketing</span>
                            </div>
                            <div className='statutChapitre'>
                                <Button onClick={() => { navigation('/course/') }} variant='contained' sx={{ width: '100%' }}>Commencer le cour</Button>
                            </div>
                        </div>
                    </Col>

                    <Col md={2} style={{ maxWidth: '300px', margin: 10, padding: 0, boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)' }}>
                        <div className="chapitreModule">
                            <div className='divImageChapitremodule'>
                                <img className='imageLogoFooter' src='/images/lecteurcour.png' />
                            </div>
                            <div className='titreChapitre'>
                                <span>Metrise du maketing</span>
                            </div>
                            <div className='statutChapitre'>
                                <Button onClick={() => { navigation('/course/') }} variant='contained' sx={{ width: '100%' }}>Commencer le cour</Button>
                            </div>
                        </div>
                    </Col>

                </Row>


                <Row style={{ padding: 10, justifyContent: 'space-evenly', }}>
                    <Col md={2} style={{ maxWidth: '300px', margin: 10, padding: 0, boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)' }}>
                        <div className="chapitreModule">
                            <div className='divImageChapitremodule'>
                                <img className='imageLogoFooter' src='/images/lecteurcour.png' />
                            </div>
                            <div className='titreChapitre'>
                                <span>Metrise du maketing</span>
                            </div>
                            <div className='statutChapitre'>
                                <Button onClick={() => { navigation('/course/') }} variant='contained' sx={{ width: '100%' }}>Commencer le cour</Button>
                            </div>
                        </div>
                    </Col>

                    <Col md={2} style={{ maxWidth: '300px', margin: 10, padding: 0, boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)' }}>
                        <div className="chapitreModule">
                            <div className='divImageChapitremodule'>
                                <img className='imageLogoFooter' src='/images/lecteurcour.png' />
                            </div>
                            <div className='titreChapitre'>
                                <span>Metrise du maketing</span>
                            </div>
                            <div className='statutChapitre'>
                                <Button onClick={() => { navigation('/course/') }} variant='contained' sx={{ width: '100%' }}>Commencer le cour</Button>
                            </div>
                        </div>
                    </Col>

                    <Col md={2} style={{ maxWidth: '300px', margin: 10, padding: 0, boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)' }}>
                        <div className="chapitreModule">
                            <div className='divImageChapitremodule'>
                                <img className='imageLogoFooter' src='/images/lecteurcour.png' />
                            </div>
                            <div className='titreChapitre'>
                                <span>Metrise du maketing</span>
                            </div>
                            <div className='statutChapitre'>
                                <Button onClick={() => { navigation('/course/') }} variant='contained' sx={{ width: '100%' }}>Commencer le cour</Button>
                            </div>
                        </div>
                    </Col>

                </Row>




            </div>
        </Container>
    )
}



