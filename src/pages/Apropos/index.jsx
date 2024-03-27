import React from 'react'
import Header from '../../composants/Header'
import './AproposCSS.css';
import SignInSignUp from '../../composants/SignInSignUp';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Footer from '../../composants/Footer';


const Apropos = () => {
    return (
        <>
            <Header />
            <div className='imgTransition'>
            <div style={{ marginLeft: '5%', marginRight: '5%', display: 'flex', backgroundColor: 'white', padding: '10px', borderBottom: '3px solid red', height: '15%', width: '100%' }}>
                <div style={{ marginRight: '5%', alignItems: 'center', flexDirection: 'column', width: '100%', padding: '30px', paddingTop: '5%' }}>
                    <span style={{ color: 'black', fontSize: '20px' }}><strong>Qui Sommes-nous?</strong></span> <br />
                    <span style={{ color: 'Red', fontSize: '40px', lineHeight: '28px' }}>LE PROGRAMME LEADERSHIP</span>
                </div>
                <div>
                    <img src="images/hero.png" alt="Hero" style={{ width: '100%', maxWidth: '374px', height: 'auto', paddingTop: '0%' }} />
                </div>
            </div>
        </div>

            <div style={{borderBottom: '3px solid red'}}>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="apropos-titre">
                                <h1 style={{ padding: '40px', textAlign: 'center' }}>A propos de nous</h1>
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
                </Container>
            </div>

            <div style={{ marginLeft: '200px', marginRight: '200px', paddingTop: '100px', }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', paddingLeft: '150px' }}>
                        <img className='toto' src="images/toto.jpg" style={{ width: '318px', height: '227px', marginRight: '20px',  maxWidth: '30vw', marginRight: '20px' }} />
                        <img className='toto1' src="images/toto1.jpg" style={{ width: '355px', height: '264px', marginRight: '20px' }} />
                        <img className='toto2' src="images/toto2.jpg" style={{ width: '137px', height: '185px', }} />
                    </div>
                    <div style={{ alignItems: 'flex-end', display: 'flex', alignItems: 'flex-start', paddingTop: '10px' }}>
                        <img className='toto3' src="images/toto3.jpg" style={{ width: '254.22px', height: '299.61px', marginRight: '20px' }} />
                        <img className='toto4' src="images/toto4.jpg" style={{ width: '481.2px', height: '354.09px', marginRight: '20px' }} />
                        <div>
                            <img className='toto6' src="images/toto6.jpg" style={{ width: '372px', height: '200.58px', }} />
                            <img className='toto5' src="images/toto5.jpg" style={{ width: '140.73px', height: '155px', paddingTop: '10px', }} />
                        </div>
                    </div>
                </div>
            </div>

            

          

            <div style={{ paddingTop: '50px', padding: '50px' }}>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div style={{ fontSize: 20, margin: '0px' }}> {/* Removed unnecessary margins */}
                                <h1> Nos <span style={{ color: 'Red', fontSize: 40, lineHeight: '28px' }}>Objectifs</span></h1>
                                <p style={{ fontSize: '18px', fontWeight: '400px' }}>
                                    At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact. Through our carefully crafted courses, we aim to...
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div>
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <span style={{ color: 'Violet', fontSize: '24px' }}></span>
                                <h2 style={{ color: 'Violet', margin: '0', paddingTop: '20px' }}>Fournir des compétences pratiques</h2>
                                <p style={{ margin: '0' }}>
                                    Nous nous attachons à fournir des compétences pratiques qui correspondent aux exigences actuelles de l'industrie. Nos cours sont conçus pour doter les apprenants des connaissances et des outils nécessaires pour exceller dans leur domaine de prédilection.
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <span style={{ color: 'Goldenrod', fontSize: '24px' }}></span>
                                <h2 style={{ color: 'Goldenrod', margin: '0', paddingTop: '20px' }}>Favoriser la créativité</h2>
                                <p style={{ margin: '0' }}>
                                    Nous encourageons la créativité et l'innovation dans tout ce que nous faisons. Nos cours permettent aux apprenants de développer leur propre style et de trouver des solutions uniques aux problèmes.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ paddingTop: '50px' }}>
                        <Col xs={12} md={6}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <span style={{ color: 'green', fontSize: '24px' }}></span>
                                <h2 style={{ color: 'green', margin: '0', paddingTop: '20px' }}>Promouvoir la collaboration</h2>
                                <p style={{ margin: '0' }}>
                                    Nous croyons au pouvoir de la collaboration et du travail d'équipe. Nos cours encouragent les interactions entre les apprenants et leur permettent de développer des compétences de communication et de collaboration essentielles.
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <span style={{ color: 'blue', fontSize: '24px' }}></span>
                                <h2 style={{ color: 'blue', margin: '0', paddingTop: '20px' }}>Rester à l'avant-garde</h2>
                                <p style={{ margin: '0' }}>
                                    Nous sommes passionnés par l'innovation et nous nous engageons à offrir des cours à la pointe des dernières technologies et tendances du marché.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div>
                <Container>
                    <Row style={{ paddingTop: '100px', paddingBottom: '100px' }}>
                        <Col xs={12} md={6}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <h1 style={{ fontSize: '47px' }}>Ensemble, <span style={{ color: 'red', fontSize: '47px' }}>façonnons l'avenir<br />de l'innovation numérique.</span><br /></h1>
                                <p style={{ fontSize: '18px' }}>Rejoignez-nous dans ce voyage d'apprentissage passionnant et libérez votre potentiel dans le domaine de la conception et du développement.</p>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <SignInSignUp />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default Apropos