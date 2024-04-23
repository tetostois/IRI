import React from 'react'
import HeaderContent from '../../composants/HeaderContent'
import Footer from '../../composants/Footer'
import './QuestionCSS.css';
import QuestionPage from './QuestionPage';
import { Row, Col } from 'react-bootstrap';
import Head from '../../composants/Head';

const Leadership = () => {
    return (
        <>
            <Head />
            <HeaderContent />
            <div>
                <h1 className='containeur'>TEST D'EVALUATION DES LEADERS</h1>

                <Row style={{ backgroundColor: "rgba(36,172,242,0.3)", borderRadius: 5, margin: 20, marginTop: 30, padding: 20 }}>

                    <Col>
                        <div>
                            <div style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center' }}> Fonctionement du test de question a réponse ouvertes:</div>
                            <p style={{ textAlign: 'center' }}> Ce test en ligne à réponses ouvertes est composé de 8 questions réparties en 3 parties.</p>
                            <ol>
                                <ul style={{ margin: 5 }}><span style={{ fontWeight: 'bold' }}>Partie1: Leadership:</span> L'objectif de ce test de leadership est d'évaluer les compétences et les aptitudes d’un ientrepreuneur en tant que leader.</ul>
                                <ul style={{ margin: 5 }}><span style={{ fontWeight: 'bold' }}>Partie2: Entreprenariat:</span> L'objectif de ce test est de  mesurer les qualités comportementales et les compétences nécessaires à la création d'une entreprise.</ul>
                                <ul style={{ margin: 5 }}><span style={{ fontWeight: 'bold' }}>Partie2: Compétence Professionnelle:</span>  L'objectif de ce test est d'évaluer ces compétences professionnelles, à la fois techniques et personnelles. </ul>
                            </ol>
                        </div>
                    </Col>
                </Row>

                <QuestionPage />
            </div>

            <Footer />
        </>
    )
}

export default Leadership


