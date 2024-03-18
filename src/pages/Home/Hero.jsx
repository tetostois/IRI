import React, { useContext } from 'react'
import "./hero.css"
import Title from './../../composants/title/Title';
import CollectionsPage from '../collectionsPage/CollectionsPage';
import { AppContext } from '../../context';
import CollectionsPageRegister from '../collectionsPage/CollectionsPageRegister';

const Hero = () => {
    const {language, SetLanguage} =useContext(AppContext)
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className='row'>
                        <Title subtitle="BIENVENUE À L'IINSTITUT DE RECHERCHE EN INTELLIGENCE" title='Meilleure éducation en ligne' />
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className='primary-btn'>
                                <CollectionsPage /> 
                                <CollectionsPageRegister />
                                
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Hero