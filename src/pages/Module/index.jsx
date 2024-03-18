import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../composants/Header';
import { chapitre, modules } from '../../utils/data/index.ts'
//import { useDeviceDetect } from 'react-device-detect';
import { isMobile } from 'react-device-detect';
import ReactPlayer from 'react-player'


export default function Module({ chapitres }) {
    const { idModule } = useParams();


    var module = modules.find((module) => ((module.idModule * 1) === (idModule * 1)))
    console.log('modulle == ', module)
    if (!module) {
        module = {}
    }
    return (
        <div style={{ height: '100vh' }}>
            <Header />
            <div style={{ height: '100vh' }} >
                <div name='nomModule' style={{ border: '2px solid gray', minHeight: 50, textAlign: 'center', }}>
                    <span style={{ fontSize: "18", fontWeight: 'bold', }}>Module: {module.titre}</span>
                </div>
                <div name='cours' style={{ display: 'flex', flexDirection: 'row' }}>
                    {!isMobile &&
                        <div name='sommaire' style={{ width: '20%', border: '2px solid gray', height: '100vh' }}>
                            sommaire
                        </div>
                    }
                    <div name='cour' style={{ width: '80%', padding: 10 }} >
                        <ViewChapitre chapitre={chapitre} />
                    </div>
                </div>
            </div>

        </div>
    )
}




const ViewChapitre = ({ chapitre }) => {

    return (
        <>
            <div mame='titreChapitre'>
                <h2>Chapitre: {chapitre.titre}</h2>
            </div>
            {chapitre.preanbule &&
                <div name='preanbule' style={{ paddingLeft: 10 }}>
                    <span>Preanbule: <span>{chapitre.preanbule}</span></span>
                </div>
            }
            {(chapitre.objectifs) &&
                <div style={{ paddingLeft: 10 }}>
                    <div style={{ fontWeight: 'bold', fontSize: 17 }}>Objectif:</div>
                    <ul>
                        {
                            chapitre.objectifs.map((objectif) => (
                                <li style={{ margin: 5 }}>
                                    {objectif}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            }

            {chapitre.texte &&
                <div className='texteChapitre' style={{ paddingLeft: 10 }}>
                    <p>{chapitre.texte}</p>
                </div>
            }

            {chapitre.blocs.map((bloc, indexBloc) => (
                <div className='bloc' style={{ paddingLeft: 10 }}>
                    <h5 style={{ fontWeight: 'bold' }}>{(indexBloc + 1) + ') ' + bloc.titre}</h5>
                    {bloc.texte &&
                        <p className='texteBloc'>
                            {bloc.texte}
                        </p>
                    }

                    {bloc.sousBlocs &&
                        bloc.sousBlocs.map((sousBloc, indexSousBloc) => (
                            <div className='sousBloc' style={{ paddingLeft: 20 }}>
                                <h6 style={{ fontWeight: 'bold' }}>{(indexBloc + 1) + '.' + (indexSousBloc + 1) + ') ' + bloc.titre}</h6>
                                <p>{sousBloc.texte}</p>
                            </div>
                        ))
                    }
                </div>
            ))}

        </>
    )
}


