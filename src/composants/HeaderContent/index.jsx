import { Button } from '@mui/material';
import React, { useState } from 'react'
import './headerContentCSS.css';

function HeaderContent() {
    const [selectedNav, setSelectedNav] = useState(1)

    return (
        <>
            <div className='mainHaderContent' style={{ backgroundImage: 'url(/images/footerImage.png)' }}>
                <div className='subDivHeaderContent' style={{}}>
                    <div className='userProfilButtonAction'>
                        <div className='userProfil'>
                            <div className='profil'></div>
                            <div className='infoUser'>
                                <span className='nomCompletHedercontent'>Talla andre marie</span>
                                <span className='metierHedercontent'>Informaticien</span>
                            </div>
                        </div>
                        <div className='buttonAction'>
                            <Button variant='outlined' color='error' >Deconnexion</Button>
                        </div>
                    </div>
                    <div className='navigationHeaderContent'>
                        <div onClick={() => { setSelectedNav(1) }} className={'itemNavigationHeaderContent' + ((selectedNav === 1) ? " selectedNav" : '')}>
                            <spam>TABLEAU DE BORD</spam>
                        </div>
                        <div onClick={() => { setSelectedNav(2) }} className={'itemNavigationHeaderContent' + ((selectedNav === 2) ? " selectedNav" : '')}>
                            <span>PARAMETRE</span>
                        </div>
                    </div>
                </div>

            </div >

            {/* <div className='footerImageFooter' style={{ backgroundImage: 'url(/images/footerImage.png)' }}>

            </div> */}
        </>

    )
}

export default HeaderContent;