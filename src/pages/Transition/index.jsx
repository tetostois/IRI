import React from 'react'
import Header from '../../composants/Header'
import './TransitionCSS.css';
import Footer from '../../composants/Footer';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Transition = () => {
    return (
        <>
            <Header />
            <div className='imgTransition'>
                <div style={{ marginLeft: '5%', marginRight: '5%', display: 'flex', backgroundColor: 'white', padding: '10px', borderBottom: '3px solid red', height: '15%', width: '100%' }}>
                    <div style={{ marginRight: '5%', alignItems: 'center', flexDirection: 'column', width: '100%', padding: '30px', paddingTop: '5%' }}>
                        <span style={{ color: 'black', fontSize: '20px' }}><strong>Msr/Mme Votre inscription est terminer</strong></span> <br />
                        <span style={{ color: 'Red', fontSize: '40px', lineHeight: '28px' }}>BIENVENU AU PROGRAMME LEADERSHIP</span>
                    </div>
                    <div>
                        <img src="images/hero.png" alt="Hero" style={{ width: '100%', maxWidth: '374px', height: 'auto', }} />
                    </div>
                </div>
                
            </div>

            <div >
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="apropos-titre">
                                <h1 style={{ padding: '40px', textAlign: 'center' }}>Titre A Venir</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <p style={{ fontSize: '18px', fontWeight: '400px', textAlign: 'center' }}>
                                Bienvenue sur notre plateforme, où nous sommes passionnés par l'autonomisation des individus afin qu'ils maîtrisent le monde de la conception et du développement. Nous proposons un large éventail de cours en ligne conçus pour doter les apprenants des compétences et des connaissances nécessaires pour réussir dans le paysage numérique en constante évolution.
                            </p>
                        </Col>
                    </Row>
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                        <Button variant="danger">Commencer</Button>
                    </div>
                </Container>
            </div>


            <Footer />
        </>
    )
}

export default Transition