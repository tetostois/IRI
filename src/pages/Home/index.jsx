import React, { useContext } from 'react'
import Header from '../../composants/Header'
import { AppContext } from '../../context';

export default function Home() {
    const { language, setLanguage } = useContext(AppContext);
    return (
        <>
            <Header />
            <div>Home</div>
            <div>
                <span>Langue :</span>
                <span>{language}</span>
            </div>
        </>

    )
}
