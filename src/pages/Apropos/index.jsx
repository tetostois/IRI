import React from 'react'
import Header from '../../composants/Header'
import './AproposCSS.css';
import SignInSignUp from '../../composants/SignInSignUp';
import { Col, Row } from 'react-bootstrap';

const Apropos = () => {
    return (
        <>
            <Header />
            <div className='imgApropos' style={{ backgroundImage: 'url(/images/footerImage.png)', display: 'flex', justifyContent: 'center' }}>
                <div style={{ marginLeft: '50px', marginRight: '50px', display: 'flex', backgroundColor: 'white', padding: '10px', borderBottom: '3px solid red', height: '150px' }}>
                    <div style={{ marginRight: '400px', alignItems: 'center', flexDirection: 'column', width: '649px', padding: '30px' }}>
                        <span style={{ color: 'black', fontSize: '20px', }}><strong>Qui Sommes-nous?</strong></span> <br />
                        <span style={{ color: 'Red', fontSize: '40px', lineHeight: '28px' }}>LE PROGRAMME LEADERSHIP</span>
                    </div>
                    <div>
                        <img src="images/hero.png" style={{ width: '374px', height: '120px', }} />
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', height: '250px', borderBottom: '3px solid red', }}>
                <div style={{ flex: 1, fontSize: 20, margin: '50px' }}>
                    <h1 style={{ padding: '40px' }}>A propos de nous</h1>
                </div>
                <div style={{ flex: 1, fontSize: 20, margin: '50px' }}>
                    <p style={{ fontSize: '18px', fontWeight: '400px' }}>
                        Bienvenue sur notre plateforme, où nous sommes passionnés par l'autonomisation des individus afin qu'ils maîtrisent le monde de la conception et du développement. Nous proposons un large éventail de cours en ligne conçus pour doter les apprenants des compétences et des connaissances nécessaires pour réussir dans le paysage numérique en constante évolution.
                    </p>
                </div>
            </div>

            <div style={{ marginLeft: '200px', marginRight: '200px', paddingTop: '50px', }}>
                <div style={{}}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', paddingLeft: '150px' }}>
                        <img src="images/toto.jpg" style={{ width: '318px', height: '227px', marginRight: '20px' }} />
                        <img src="images/toto1.jpg" style={{ width: '355px', height: '264px', marginRight: '20px' }} />
                        <img src="images/toto2.jpg" style={{ width: '137px', height: '185px', }} />
                    </div>
                    <div style={{ alignItems: 'flex-end', display: 'flex', alignItems: 'flex-start', paddingTop: '10px' }}>
                        <img src="images/toto3.jpg" style={{ width: '254.22px', height: '299.61px', marginRight: '20px' }} />
                        <img src="images/toto4.jpg" style={{ width: '481.2px', height: '354.09px', marginRight: '20px' }} />
                        <div>
                            <img src="images/toto6.jpg" style={{ width: '372px', height: '200.58px', }} />
                            <img src="images/toto5.jpg" style={{ width: '140.73px', height: '155px', paddingTop: '10px', }} />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ marginLeft: '10px', marginRight: '10px', paddingTop: '50px', padding: '50px' }}>
                <div style={{ flex: 1, fontSize: 20, margin: '50px', }}>
                    <h1> Nos <span style={{ color: 'Red', fontSize: 40, lineHeight: '28px' }}>Objectifs</span></h1>
                    <p style={{ fontSize: '18px', Weight: '400px' }}>
                        At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
                        Through our carefully crafted courses, we aim to
                    </p>
                </div>
            </div>

            <Row style={{ display: 'flex', paddingLeft: '100px', paddingRight: '100px', }}>
                <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: '300px' }}>
                    <span style={{ color: 'Violet', fontSize: '24px', }}>🌟</span>
                    <h2 style={{ color: 'Violet', margin: '0', paddingTop: '20px' }}>Fournir des compétences pratiques</h2>
                    <p style={{ margin: '0' }}>Nous nous attachons à fournir des compétences pratiques qui correspondent aux exigences actuelles de l'industrie. Nos cours sont conçus pour doter les apprenants des connaissances et des  outils nécessaires pour exceller dans leur domaine de prédilection.</p>
                </Col>
                <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <span style={{ color: 'Goldenrod', fontSize: '24px' }}>🌟</span>
                    <h2 style={{ color: 'Goldenrod', margin: '0', paddingTop: '20px' }}>Favoriser la créativité</h2>
                    <p style={{ margin: '0' }}>Nous nous attachons à fournir des compétences pratiques qui correspondent aux exigences actuelles de l'industrie. Nos cours sont conçus pour doter les apprenants des connaissances et des outils nécessaires pour exceller dans leur domaine de prédilection.</p>
                </Col>
            </Row>
            <Row style={{ display: 'flex', paddingLeft: '100px', paddingRight: '100px', paddingTop: '50px' }}>
                <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: '300px' }}>
                    <span style={{ color: 'green', fontSize: '24px', }} className='span3'>🌟</span>
                    <h2 style={{ color: 'green', margin: '0', paddingTop: '20px' }}>Promouvoir la collaboration</h2>
                    <p style={{ margin: '0' }}>Nous nous attachons à fournir des compétences pratiques qui correspondent aux exigences actuelles de l'industrie. Nos cours sont conçus pour doter les apprenants des connaissances et des  outils nécessaires pour exceller dans leur domaine de prédilection.</p>
                </Col>
                <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <span style={{ color: 'blue', fontSize: '24px' }}>🌟</span>
                    <h2 style={{ color: 'blue', margin: '0', paddingTop: '20px' }}>Rester à l'avant-garde</h2>
                    <p style={{ margin: '0' }}>Nous nous attachons à fournir des compétences pratiques qui correspondent aux exigences actuelles de l'industrie. Nos cours sont conçus pour doter les apprenants des connaissances et des outils nécessaires pour exceller dans leur domaine de prédilection.</p>
                </Col>
            </Row>

            <Row style={{ display: 'flex', paddingLeft: '100px', paddingRight: '100px', paddingTop: '100px', paddingBottom: '100px', marginLeft: '100px', marginRight: '100px',  }}>
                <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', }}>
                    <Col style={{paddingLeft: '100px', paddingRight: '100px'}}>
                        <h1 style={{fontSize: '47px'}}>Ensemble,<span style={{ color: 'red', fontSize: '47px', }}> façonnons l'avenir <br/> de l'innovation numérique.</span> <br /></h1>
                        <p style={{fontSize:'18px'}}>Rejoignez-nous dans ce voyage d'apprentissage passionnant et libérez votre potentiel dans le domaine de la conception et du développement.</p>
                    </Col>
                    <div></div>
                </Col>
                <Col style={{  }}>

                    <SignInSignUp />
                </Col>
            </Row>
        </>
    )
}

export default Apropos