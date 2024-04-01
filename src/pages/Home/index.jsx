import React from 'react';
import { isMobile } from 'react-device-detect';
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';

//import "antd/dist/antd.css";
import Header from './../../composants/Header/index';
import './homeCSS.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SignInSignUp from '../../composants/SignInSignUp';

const Home = () => {
    return (

        <>
            <Header />
            <div className='divTitre' style={{ display: 'flex', flexDirection: 'column', gap: 15, padding: isMobile ? 10 : 30 }}>
                <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
                    <span className={'spantitle1'}  >
                        Apprendre une <span style={{ color: '#FDA811' }}>nouvelle compétence</span> nouvelle compétence
                        Tous les jours, à tout moment et en tout lieu
                    </span>
                </div>
                <div className='divSoustexte' style={{ textAlign: isMobile ? 'center' : 'left' }}>
                    <span>
                        <span style={{ fontWeight: '700' }}>Plus de 1000 cours </span> couvrant tous les domaines technologiques pour vous permettre d'apprendre et d'explorer de nouvelles opportunités. Apprenez auprès d'experts du secteur et décrochez le job de vos rêves.<Link to={'/apropos'} style={{ textDecorationLine: 'none', }}> <span style={{ color: 'red', }}>En savoir plus...</span></Link>
                    </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', gap: isMobile ? 5 : 25, flexWrap: 'wrap', justifyContent: isMobile ? 'space-evenly' : 'flex-start' }}>
                    <SignInSignUp signIn={true} classButtom='boutton01' variantButton='contained' />
                    <SignInSignUp signIn={false} classButtom='boutton01' variantButton='outlined' />
                    {/*<Button className='boutton01' variant='contained' color='error'>S'inscrire</Button>
                    <Button className='boutton01' variant='outlined' color='error'>Se connecter</Button>*/}
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', gap: 50, rowGap: 5, flexWrap: 'wrap', }}>
                    <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', fontWeight: '700', }}>
                        <span style={{ color: '#8D4AA7', fontSize: 40, lineHeight: '56px' }}>1000+</span>
                        <span style={{ fontSize: 20, lineHeight: '28px' }}>Vue</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', fontWeight: '700', }}>
                        <span style={{ color: '#50b954', fontSize: 40, lineHeight: '56px' }}>5000+</span>
                        <span style={{ fontSize: 20, lineHeight: '28px' }}>Etudiant Formés</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', fontWeight: '700', }}>
                        <span style={{ color: '#fda811', fontSize: 40, lineHeight: '56px' }}>200+</span>
                        <span style={{ fontSize: 20, lineHeight: '28px' }}>Professionels formateur</span>
                    </div>
                </div>

            </div>
            {/* <img className='imageFille' src="/images/fille01.png" alt="une jeune ecoliere" /> */}
            <div className='imageFille' style={{ backgroundImage: 'url(/images/fille01.png)' }}></div>


            <footer className='footerHome' style={{ backgroundImage: 'url(/images/footerImage.png)' }} >
                .
                {/* <img src="/images/footerImage.png" alt="Ma superbe image" style={{ height: 150, bottom: 0, maxWidth: '100vw' }} /> */}
            </footer >
        </>

    )
}

export default Home
