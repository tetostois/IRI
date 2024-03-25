import React, { useState } from 'react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

import './signInSignUpCSS.css';
import { Box } from '@mui/material';

const etoileSpanRed = <span style={{ color: 'red' }}> *</span>;


export default function SignInSignUp({ signIn }) {
    const [isSignIn, setIsSignIn] = useState(signIn)
    const [open, setOpen] = useState(false);
    const [formSignIn, setFormSignIn] = useState({})
    const [formSignUp, setFormSignUp] = useState({})

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setFormSignUp({})
        setFormSignIn({})
    };

    const toggleSignInSignUp = () => {
        setIsSignIn((previsSignIn) => !previsSignIn)
    }


    return (
        <>
            <Button className='bouttonhead' variant='contained' onClick={handleClickOpen} color='error' >S'inscrire</Button>
            <Dialog
                fullWidth={true}
                maxWidth='md'
                open={open}

                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                    },
                }}


            >

                <div className='dialogSign'>
                    <div className='banderoleSignin' style={{ backgroundImage: 'url(/images/footerImagedebout.png)' }} >

                    </div>

                    {isSignIn ?
                        <SignIn setIsSignIn={setIsSignIn} setOpen={setOpen} handleClose={handleClose} toggleSignInSignUp={toggleSignInSignUp} />
                        :
                        <SignUp setIsSignIn={setIsSignIn} setOpen={setOpen} handleClose={handleClose} toggleSignInSignUp={toggleSignInSignUp} />
                    }


                </div>

            </Dialog >
        </>

    )
}


const steps = ['Etape 1', 'Etape 2', 'Etape 3'];
const SignUp = ({ setOpen, setIsSignIn, handleClose, toggleSignInSignUp }) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === -1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <>
            <div className='divFormulaire' style={{ display: 'flex', flexDirection: 'column', }}>
                <div style={{ textAlign: 'center', marginTop: 20 }}>
                    <span className='signInTitle' >Créer votre compte</span>
                </div>
                <div style={{ marginTop: 10, marginBottom: 10 }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};

                            if (isStepSkipped(index)) {
                                stepProps.completed = false;
                            }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                </div>
                {activeStep === 0 &&
                    <fieldset>
                        <legend>Informations <span style={{ color: 'green' }}>Personnelles</span></legend>
                        <div name='nom_prenom' className='divChamp'>
                            <div className='subDivChamp'>
                                <label className='labelSignIn'>Nom<span style={{ color: 'red' }}> *</span></label>
                                <input className='inputSignIn' type='text' required placeholder='Entrez votre nom' />
                            </div>
                            <div className='subDivChamp maginLeft'>
                                <label className='labelSignIn'>Prenom</label>
                                <input className='inputSignIn' type='text' required placeholder='Entrez votre prenom' />
                            </div>
                        </div>

                        <div name='date_lieu_naissane' className='divChamp'>
                            <div className='subDivChamp'>
                                <label className='labelSignIn'>Date de Naisance{etoileSpanRed}</label>
                                <input className='inputSignIn' type='date' required placeholder='...' />
                            </div>
                            <div className='subDivChamp maginLeft'>
                                <label className='labelSignIn'>Lieu de naissance{etoileSpanRed}</label>
                                <input className='inputSignIn' type='text' required placeholder='...' />
                            </div>
                        </div>

                        <div name='date_lieu_naissane' className='divChamp'>
                            <div className='subDivChamp'>
                                <label className='labelSignIn'>Telephone{etoileSpanRed}</label>
                                <input className='inputSignIn' type='text' required placeholder='...' />
                            </div>
                        </div>

                        <div name='date_lieu_naissane' className='divChamp'>
                            <div className='subDivChamp'>
                                <label className='labelSignIn'>Email{etoileSpanRed}</label>
                                <input className='inputSignIn' type='text' required placeholder='...' />
                            </div>
                        </div>
                    </fieldset>
                }
                {activeStep === 1 &&
                    <fieldset>
                        <legend>Informations <span style={{ color: 'blue' }}>Professionels</span></legend>
                        <div name='non_profession' className='divChamp'>
                            <div className='subDivChamp'>
                                <label className='labelSignIn'>Profession<span style={{ color: 'red' }}> *</span></label>
                                <input className='inputSignIn' type='text' required placeholder='Entrez votre Profession' />
                            </div>
                        </div>

                        <div name='nonEntreprise' className='divChamp'>
                            <div className='subDivChamp'>
                                <label className='labelSignIn'>Nom de l'entreprise </label>
                                <input className='inputSignIn' type='text' required placeholder='...' />
                            </div>
                        </div>

                        <div name='Chiffre_affaire' className='divChamp'>
                            <div className='subDivChamp'>
                                <label className='labelSignIn'>Chiffre d'affaire </label>
                                <input className='inputSignIn' type='text' required placeholder='...' />
                            </div>
                        </div>

                        <div name='Region' className='divChamp'>
                            <div className='subDivChamp'>
                                <label className='labelSignIn'>Region de residence </label>
                                <input className='inputSignIn' type='text' required placeholder='...' />
                            </div>
                        </div>

                    </fieldset>
                }

                {activeStep === 2 &&
                    <fieldset>
                        <legend>Informations de <span style={{ color: 'red', fontWeight: 'bold' }}> Connexion</span></legend>
                        <div name='password' className='divChamp'>
                            <div className='subDivChamp'>
                                <label className='labelSignIn'>Mot de passse </label>
                                <input className='inputSignIn' type='password' required placeholder='' />
                            </div>
                        </div>

                        <div name='confirmPassword' className='divChamp'>
                            <div className='subDivChamp'>
                                <label className='labelSignIn'>Confirmer le mot de passse </label>
                                <input className='inputSignIn' type='password' required placeholder='' />
                            </div>
                        </div>

                    </fieldset>
                }

                <div className='divContainButton'>
                    <Button color='error' variant='contained' onClick={handleClose} >Annuler</Button>
                    <div style={{ display: 'flex', gap: 10 }}>
                        <Button variant='outlined' onClick={handleBack} disabled={activeStep === 0}>
                            Precedant
                        </Button>
                        <Button variant='contained' onClick={handleNext}  >
                            {activeStep === steps.length - 1 ? 'Enregister' : 'Suivant'}
                        </Button>
                    </div>

                </div>
                <div style={{ marginTop: 15, cursor: 'pointer' }}>
                    <span>Vous avez déja un compte? <span onClick={toggleSignInSignUp} style={{ color: 'green', fontWeight: 'bold' }}>connectez Vous</span></span>
                </div>
            </div>
        </>
    )
}


const SignIn = ({ setOpen, setIsSignIn, handleClose, toggleSignInSignUp }) => {
    return (
        <>
            <div className='divFormulaire' style={{ display: 'flex', flexDirection: 'column', }}>
                <div style={{ textAlign: 'center', marginTop: 20, marginBottom: 40 }}>
                    <span className='signInTitle' style={{}} >Connetez Vouz...!</span>
                </div>

                <fieldset>
                    <legend>Informations de <span style={{ color: 'red', fontWeight: 'bold' }}> Connexion</span></legend>
                    <div name='password' className='divChamp'>
                        <div className='subDivChamp'>
                            <label className='labelSignIn'>Telephone où Email </label>
                            <input name='email  telephone' className='inputSignIn' type='text' required placeholder='' />
                        </div>
                    </div>

                    <div name='confirmPassword' className='divChamp'>
                        <div className='subDivChamp'>
                            <label className='labelSignIn'>Mot de passse </label>
                            <input className='inputSignIn' type='password' required placeholder='' />
                        </div>
                    </div>

                </fieldset>

                <div className='divContainButton'>
                    <Button color='error' variant='contained' onClick={handleClose} >Annuler</Button>
                    <div style={{ display: 'flex', gap: 10 }}>
                        <Button variant='contained'>
                            Connexion
                        </Button>
                    </div>

                </div>
                <div style={{ marginTop: 15, cursor: 'pointer' }}>
                    <span>Vous n'avez de compte? <span onClick={toggleSignInSignUp} style={{ color: 'green', fontWeight: 'bold' }}>Creer votre compte</span></span>
                </div>
            </div>
        </>
    )
}
