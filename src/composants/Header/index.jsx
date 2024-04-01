import React, { useContext, useState } from 'react'
import { isMobile } from 'react-device-detect';
import { Link } from "react-router-dom";
import { AppContext } from '../../context';
import './headerCSS.css';
import { Button } from '@mui/material';
import SignInSignUp from '../SignInSignUp';

export default function Header() {
    const { language, setLanguage, setUser, user } = useContext(AppContext);
    const [showSignInsignOn, setShowSignInsignOn] = useState(false)
    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    return (

        <div style={{ zIndex: 10, marginBottom: "5px", width: "100%", height: isMobile ? "40px" : "75px", backgroundColor: 'whitesmoke', display: "flex", flexDirection: 'row', fontSize: "19px", fontWeight: 'bold', color: '#FFF', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <div style={{ marginLeft: 10 }}>
                    <img className='logo' src="/images/logoprogrammeleadership.png" alt="Logo programme leadership" />
                </div>
                {!isMobile &&
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <span style={{ marginLeft: 10 }}>
                            <Link to={'/home'} style={{ textDecorationLine: 'none', color: 'black' }} >home </Link>
                        </span>
                        <span style={{ marginLeft: 10 }}>
                            <Link to={'/dashboard'} style={{ textDecorationLine: 'none', color: 'black' }} >dashbord </Link>
                        </span>
                        <span style={{ marginLeft: 10 }}>
                            <Link to={'/course'} style={{ textDecorationLine: 'none', color: 'black' }} >course </Link>
                        </span>
                    </div>
                }
            </div>
            <div style={{ marginRight: 20, zIndex: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                {user ?
                    <div className='buttonAction'>
                        <Button variant='outlined' color='error' onClick={() => { setUser(null) }} >Deconnexion</Button>
                    </div>
                    :
                    <SignInSignUp signIn={false} />

                }
                <select
                    id="language-select"
                    value={language}
                    onChange={handleLanguageChange}
                >
                    <option value="EN">{isMobile ? 'EN' : 'English'}</option>
                    <option value="FR">{isMobile ? 'FR' : 'Français'}</option>
                </select>
            </div>
        </div>
    )
}
