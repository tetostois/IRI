import React, { useState } from 'react'
import Header from '../../composants/Header'
import { Button, Checkbox, CircularProgress } from '@mui/material'
import HeaderContent from '../../composants/HeaderContent'
import { chapitre } from '../../utils/data/index.ts'
import ReactPlayer from 'react-player'
//import { Button } from 'bootstrap'

export default function Course() {
    return (
        <>
            <Header />
            <HeaderContent />
            <Button variant='contained'> Bonjour</Button>
            <ViewChapitre chapitre={chapitre} index={0} />
        </>
    )
}



const ViewChapitre = ({ chapitre, index }) => {
    const [valider, setValider] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const [errorVideo, setErrorVideo] = useState(false);

    const [trueQCM, setTrueQCM] = useState([]);

    const handleVideoLoad = () => {
        setIsLoading(false);
    };

    const handleVideoError = () => {
        setErrorVideo(true);
        setIsLoading(false);
    };

    return (
        <>
            <div mame='titreChapitre'>
                <h2>Chapitre {index + 1}: {chapitre.titre}</h2>
            </div>

            {chapitre.urlVideo &&
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 5, marginBottom: 5 }}>
                    {isLoading && (
                        <div style={{ position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                            <CircularProgress /> {/* Remplacez par votre indicateur de progression circulaire personnalisé */}
                            <span>Chargement de la video...</span>
                        </div>
                    )}
                    {errorVideo && (
                        <div style={{ position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                            <span>Impossible de charger la video du cour...! Controler votre connexion</span>
                        </div>
                    )}
                    <ReactPlayer controls={true} onReady={handleVideoLoad} onError={handleVideoError} url="https://www.youtube.com/watch?v=TvgfzI7rFYU" /> {/* Replace with your video URL */}
                </div>
            }

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
                                <h6 style={{ fontWeight: 'bold' }}>{(indexBloc + 1) + '.' + (indexSousBloc + 1) + ') ' + sousBloc.titre}</h6>
                                <p>{sousBloc.texte}</p>
                            </div>
                        ))
                    }
                </div>
            ))}


            {chapitre.qcms &&
                <div name='bloc_Global_QCM' style={{ marginTop: 10 }}>
                    <div style={{ fontSize: 17, fontWeight: 'bold' }}><span>Repondez au QCM pour valider ce cour:</span></div>
                    <div style={{ fontSize: 14, fontStyle: 'italic', color: 'gray' }}><span>Question à choix multiple, chaque QCM peut contenir une ou plusieurs proposition juste...!</span></div>

                    <div name='ListQCM' style={{ paddingLeft: 15, marginTop: 10 }}>
                        {chapitre.qcms.map((qcm, index) => (
                            <DisplayQCM qcm={qcm} index={index} setTrueQCM={setTrueQCM} trueQCM={trueQCM} />
                        ))}
                    </div>
                </div>
            }

        </>
    )
}



const DisplayQCM = ({ qcm, index }) => {

    const [selectedValues, setSelectedValues] = useState([]);



    const changeValueSelected = (event, choixId) => {
        const isChecked = event.target.checked;

        // Si la case à cocher est cochée, ajoutez choixId aux selectedValues
        if (isChecked) {
            setSelectedValues(prevSelectedValues => [...prevSelectedValues, choixId]);
        } else {
            // Si la case à cocher est décochée, retirez choixId de selectedValues
            setSelectedValues(prevSelectedValues => prevSelectedValues.filter(id => id !== choixId));
        }
    };

    const validation = () => {
        console.log('value select === ', selectedValues)
    }

    return (
        <>
            <div name='itemQCM' key={index + 'erp1x'}>
                <div style={{ fontSize: 15, fontWeight: 'bold' }}><span>{(1 * index + 1) + " ) " + qcm.libelle}</span></div>
                {qcm.choix.map((choix, index02) => (
                    <div key={choix.texte + index02} style={{ fontSize: 14, fontStyle: 'italic', color: 'gray' }}>
                        <Checkbox onChange={(event) => changeValueSelected(event, choix.id)} />
                        <span>{choix.texte}</span>
                    </div>
                ))}
                <Button variant="contained" onClick={() => validation()} >Validation</Button>
            </div>
        </>
    )
}