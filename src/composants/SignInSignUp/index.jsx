// import React, { useContext, useState } from 'react'

// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import Stepper from '@mui/material/Stepper';
// // import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Typography from '@mui/material/Typography';

// import './signInSignUpCSS.css';
// import { Alert, AlertTitle, Box, CircularProgress, Step } from '@mui/material';
// import { useFetch } from '../../utils/hooks/FetchData';
// import { useNavigate } from 'react-router-dom';
// import { AppContext } from '../../context';
// import Cookies from 'js-cookie';

// const etoileSpanRed = <span style={{ color: 'red' }}> *</span>;


// export default function SignInSignUp({ signIn, variantButton, classButtom }) {
//     const [isSignIn, setIsSignIn] = useState(signIn)
//     const [open, setOpen] = useState(false);
//     const [formSignIn, setFormSignIn] = useState({})
//     const [formSignUp, setFormSignUp] = useState({})


//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//         setFormSignUp({})
//         setFormSignIn({})
//     };

//     const toggleSignInSignUp = () => {
//         setIsSignIn((previsSignIn) => !previsSignIn)
//     }


//     return (
//         <>
//             <Button className='bouttonhead' variant='contained' onClick={handleClickOpen} color='error' >S'inscrire</Button>
//             <Dialog
//                 fullWidth={true}
//                 maxWidth='md'
//                 open={open}

//                 PaperProps={{
//                     component: 'form',
//                     onSubmit: (event) => {
//                         event.preventDefault();
//                         const formData = new FormData(event.currentTarget);
//                         const formJson = Object.fromEntries(formData.entries());
//                         const email = formJson.email;
//                         console.log(email);
//                         handleClose();
//                     },
//                 }}


//             >

//                 <div className='dialogSign'>
//                     <div className='banderoleSignin' style={{ backgroundImage: 'url(/images/footerImagedebout.png)' }} >

//                     </div>

//                     {isSignIn ?
//                         <SignIn formSignIn={formSignIn} setFormSignIn={setFormSignIn} setIsSignIn={setIsSignIn} setOpen={setOpen} handleClose={handleClose} toggleSignInSignUp={toggleSignInSignUp} />
//                         :
//                         <SignUp formSignUp={formSignUp} setFormSignUp={setFormSignUp} setIsSignIn={setIsSignIn} setOpen={setOpen} handleClose={handleClose} toggleSignInSignUp={toggleSignInSignUp} />
//                     }


//                 </div>



//             </Dialog >
//         </>

//     )
// }


// const steps = ['Etape 1', 'Etape 2', 'Etape 3'];
// const SignUp = ({ formSignUp, setFormSignUp, setOpen, setIsSignIn, handleClose, toggleSignInSignUp }) => {
//     const [activeStep, setActiveStep] = React.useState(0);
//     const [skipped, setSkipped] = React.useState(new Set());
//     const [save, setSave] = useState(false)
//     const [error, setError] = useState({
//         signUpError: null,
//         step: -1,
//     })

//     const isStepOptional = (step) => {
//         return step === -1;
//     };

//     const isStepSkipped = (step) => {
//         return skipped.has(step);
//     };

//     const handleNext = () => {
//         let newSkipped = skipped;
//         if (isStepSkipped(activeStep)) {
//             newSkipped = new Set(newSkipped.values());
//             newSkipped.delete(activeStep);
//         }

//         setActiveStep((prevActiveStep) => prevActiveStep + 1);
//         setSkipped(newSkipped);
//     };

//     const handleBack = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     };

//     const handleSkip = () => {
//         if (!isStepOptional(activeStep)) {
//             // You probably want to guard against something like this,
//             // it should never occur unless someone's actively trying to break something.
//             throw new Error("You can't skip a step that isn't optional.");
//         }

//         setActiveStep((prevActiveStep) => prevActiveStep + 1);
//         setSkipped((prevSkipped) => {
//             const newSkipped = new Set(prevSkipped.values());
//             newSkipped.add(activeStep);
//             return newSkipped;
//         });
//     };




//     const [formData, setFormData] = useState({})
//     const handleChange = (e) => {
//         setFormData(
//             {
//                 ...formData,
//                 [e.target.id]: e.target.value,
//             }
//         )
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const res = await fetch('api/auth/signup',
//             {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });
//         const data = await res.json();
//         console.log(data);
//     };

//     console.log(formData);


//     return (
//         <>
//             <form>

//             </form>
//         </>
//     )
// }


// const SignIn = ({ formSignIn, setFormSignIn, setOpen, setIsSignIn, handleClose, toggleSignInSignUp, }) => {
//     const [save, setSave] = useState(false)
//     const [error, setError] = useState({
//         signInError: null,
//         step: -1,
//     })
//     return (
//         <>
//             <div className='divFormulaire' style={{ display: 'flex', flexDirection: 'column', }}>
//                 <div style={{ textAlign: 'center', marginTop: 20, marginBottom: 40 }}>
//                     <span className='signInTitle' style={{}} >Connetez Vouz...!</span>
//                 </div>

//                 <fieldset>
//                     <legend>Informations de <span style={{ color: 'red', fontWeight: 'bold' }}> Connexion</span></legend>
//                     {error.signInError &&
//                         <span style={{ color: 'red', fontWeight: 700, fontSize: 17 }}>{error.signInError}</span>
//                     }

//                     <div name='password' className='divChamp'>
//                         <div className='subDivChamp'>
//                             <label className='labelSignIn'>Telephone où Email </label>
//                             <input maxLength={50} name='email  telephone' className='inputSignIn' type='text' required placeholder=''
//                                 value={formSignIn.emailOrPhone}
//                                 onChange={event => setFormSignIn((prevForm) => ({ ...prevForm, login: event.target.value }))}
//                             />
//                         </div>
//                     </div>

//                     <div name='confirmPassword' className='divChamp'>
//                         <div className='subDivChamp'>
//                             <label className='labelSignIn'>Mot de passse </label>
//                             <input maxLength={50} className='inputSignIn' type='password' required placeholder=''
//                                 value={formSignIn.password}
//                                 onChange={event => setFormSignIn((prevForm) => ({ ...prevForm, password: event.target.value }))}
//                             />
//                         </div>
//                     </div>

//                     {save &&
//                         <ValidationSingInSignUp formSignIn={formSignIn} setSave={setSave} isSignIn={true} setError={setError} />
//                     }

//                 </fieldset>

//                 <div className='divContainButton'>
//                     <Button color='error' variant='contained' onClick={handleClose} >Annuler</Button>
//                     <div style={{ display: 'flex', gap: 10 }}>
//                         <Button variant='contained' onClick={() => setSave(true)} disabled={save}>
//                             Connexion
//                         </Button>
//                     </div>

//                 </div>
//                 <div style={{ marginTop: 15, cursor: 'pointer' }}>
//                     <span>Vous n'avez de compte? <span onClick={toggleSignInSignUp} style={{ color: 'green', fontWeight: 'bold' }}>Creer votre compte</span></span>
//                 </div>
//             </div>
//         </>
//     )
// }



// const ValidationSingInSignUp = ({ isSignIn, formSignIn, formSignUp, setActiveStep, setError, setSave }) => {
//     const { isOnline, language, setUser } = useContext(AppContext);
//     const { isLoading, data, error } = useFetch(((isSignIn ? "/login/" : "/etudiant/enregistrement/")), 'POST', isSignIn ? formSignIn : formSignUp)
//     const navigation = useNavigate();


//     if (isLoading) {
//         return (
//             <div style={{ marginLeft: '40%', marginBottom: '40%' }} >
//                 <CircularProgress size={70} />
//             </div>
//         )
//     } else if (error) {
//         if (isOnline) {
//             return (
//                 <div style={{ width: '100%', marginBottom: '5px', }}>
//                     <Alert severity="error">
//                         <AlertTitle>Erreur</AlertTitle>
//                         <span>{language == 'FR' ? "Probleme avec le serveur...!" : "Problem with the server...!"}</span>
//                     </Alert>
//                 </div>
//             )
//         } else {
//             return (
//                 <div style={{ width: '100%', marginBottom: '5px', }}>
//                     <Alert severity="error">
//                         <AlertTitle>Erreur</AlertTitle>
//                         <span>{language == 'FR' ? "Vous êtes hors connexion, controler votre connexion internet" : "You are offline, check your internet connection"}</span>
//                     </Alert>
//                 </div>
//             )
//         }
//     } else if (!isLoading && !error) {
//         if (data.errorAPI) {
//             //console.log('errorAPI === ', data.errorAPI)
//             if (!isSignIn) {
//                 setError((prevError) => ({ ...prevError, step: data.index, signUpError: data.message }))
//                 setActiveStep(data.index)
//             } else {
//                 setError((prevError) => ({ ...prevError, signInError: data.message }))
//                 setSave(false)
//             }
//         } else {
//             //console.log("user connect == ", data)
//             Cookies.set("user", data);
//             setUser(data)
//             //console.log("cookie save == ", Cookies.get('user'))
//             navigation('/dashboard')

//         }
//     }
// }





// import React, { useState } from 'react'

// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Typography from '@mui/material/Typography';

// import './signInSignUpCSS.css';
// import { Box } from '@mui/material';

// const etoileSpanRed = <span style={{ color: 'red' }}> *</span>;


// export default function SignInSignUp({ signIn }) {
//     const [isSignIn, setIsSignIn] = useState(signIn)
//     const [open, setOpen] = useState(false);
//     const [formSignIn, setFormSignIn] = useState({})
//     const [formSignUp, setFormSignUp] = useState({})

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//         setFormSignUp({})
//         setFormSignIn({})
//     };

//     const toggleSignInSignUp = () => {
//         setIsSignIn((previsSignIn) => !previsSignIn)
//     }


//     return (
//         <>
//             <Button className='bouttonhead' variant='contained' onClick={handleClickOpen} color='error' >S'inscrire</Button>
//             <Dialog
//                 fullWidth={true}
//                 maxWidth='md'
//                 open={open}

//                 PaperProps={{
//                     component: 'form',
//                     onSubmit: (event) => {
//                         event.preventDefault();
//                         const formData = new FormData(event.currentTarget);
//                         const formJson = Object.fromEntries(formData.entries());
//                         const email = formJson.email;
//                         console.log(email);
//                         handleClose();
//                     },
//                 }}


//             >

//                 <div className='dialogSign'>
//                     <div className='banderoleSignin' style={{ backgroundImage: 'url(/images/footerImagedebout.png)' }} >

//                     </div>

//                     {isSignIn ?
//                         <SignIn formSignIn={formSignIn} setFormSignIn={setFormSignIn} setIsSignIn={setIsSignIn} setOpen={setOpen} handleClose={handleClose} toggleSignInSignUp={toggleSignInSignUp} />
//                         :
//                         <SignUp formSignUp={formSignUp} setFormSignUp={setFormSignUp} setIsSignIn={setIsSignIn} setOpen={setOpen} handleClose={handleClose} toggleSignInSignUp={toggleSignInSignUp} />
//                     }


//                 </div>



//             </Dialog >
//         </>

//     )
// }


// const steps = ['Etape 1', 'Etape 2', 'Etape 3'];
// const SignUp = ({ setOpen, setIsSignIn, handleClose, toggleSignInSignUp }) => {
//     const [activeStep, setActiveStep] = React.useState(0);
//     const [skipped, setSkipped] = React.useState(new Set());

//     const isStepOptional = (step) => {
//         return step === -1;
//     };

//     const isStepSkipped = (step) => {
//         return skipped.has(step);
//     };

//     const handleNext = () => {
//         let newSkipped = skipped;
//         if (isStepSkipped(activeStep)) {
//             newSkipped = new Set(newSkipped.values());
//             newSkipped.delete(activeStep);
//         }

//         setActiveStep((prevActiveStep) => prevActiveStep + 1);
//         setSkipped(newSkipped);
//     };

//     const handleBack = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     };

//     const handleSkip = () => {
//         if (!isStepOptional(activeStep)) {
//             // You probably want to guard against something like this,
//             // it should never occur unless someone's actively trying to break something.
//             throw new Error("You can't skip a step that isn't optional.");
//         }

//         setActiveStep((prevActiveStep) => prevActiveStep + 1);
//         setSkipped((prevSkipped) => {
//             const newSkipped = new Set(prevSkipped.values());
//             newSkipped.add(activeStep);
//             return newSkipped;
//         });
//     };

//     const handleReset = () => {
//         setActiveStep(0);
//     };


//     const [formData, setFormData] = useState({})
//     const handleChange = (e) => {
//         setFormData(
//             {
//                 ...formData,
//                 [e.target.id]: e.target.value,
//             }
//         )
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const res = await fetch('api/auth/signup',
//             {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });
//         const data = await res.json();
//         console.log(data);
//     };

//     console.log(formData);

//     return (
//         <>
//             <div className='divFormulaire' style={{ display: 'flex', flexDirection: 'column', }}>
//                 <div style={{ textAlign: 'center', marginTop: 20 }}>
//                     <span className='signInTitle' >Créer votre compte</span>
//                 </div>
//                 <div style={{ marginTop: 10, marginBottom: 10 }}>
//                     <Stepper activeStep={activeStep}>
//                         {steps.map((label, index) => {
//                             const stepProps = {};
//                             const labelProps = {};

//                             if (isStepSkipped(index)) {
//                                 stepProps.completed = false;
//                             }
//                             return (
//                                 <Step key={label} {...stepProps}>
//                                     <StepLabel {...labelProps}>{label}</StepLabel>
//                                 </Step>
//                             );
//                         })}
//                     </Stepper>
//                 </div>
//                 {activeStep === 0 &&
//                     <fieldset>
//                         <legend>Informations <span style={{ color: 'green' }}>Personnelles</span></legend>
//                         <div name='nom_prenom' className='divChamp'>
//                             <div className='subDivChamp'>
//                                 <label className='labelSignIn'>Nom<span style={{ color: 'red' }}> *</span></label>
//                                 <input className='inputSignIn' type='text' required placeholder='Entrez votre nom' />
//                             </div>
//                             <div className='subDivChamp maginLeft'>
//                                 <label className='labelSignIn'>Prenom</label>
//                                 <input className='inputSignIn' type='text' required placeholder='Entrez votre prenom' />
//                             </div>
//                         </div>

//                         <div name='date_lieu_naissane' className='divChamp'>
//                             <div className='subDivChamp'>
//                                 <label className='labelSignIn'>Date de Naisance{etoileSpanRed}</label>
//                                 <input className='inputSignIn' type='date' required placeholder='...' />
//                             </div>
//                             <div className='subDivChamp maginLeft'>
//                                 <label className='labelSignIn'>Lieu de naissance{etoileSpanRed}</label>
//                                 <input className='inputSignIn' type='text' required placeholder='...' />
//                             </div>
//                         </div>

//                         <div name='date_lieu_naissane' className='divChamp'>
//                             <div className='subDivChamp'>
//                                 <label className='labelSignIn'>Telephone{etoileSpanRed}</label>
//                                 <input className='inputSignIn' type='text' required placeholder='...' />
//                             </div>
//                         </div>

//                         <div name='date_lieu_naissane' className='divChamp'>
//                             <div className='subDivChamp'>
//                                 <label className='labelSignIn'>Email{etoileSpanRed}</label>
//                                 <input className='inputSignIn' type='text' required placeholder='...' />
//                             </div>
//                         </div>
//                     </fieldset>
//                 }
//                 {activeStep === 1 &&
//                     <fieldset>
//                         <legend>Informations <span style={{ color: 'blue' }}>Professionels</span></legend>
//                         <div name='non_profession' className='divChamp'>
//                             <div className='subDivChamp'>
//                                 <label className='labelSignIn'>Profession<span style={{ color: 'red' }}> *</span></label>
//                                 <input className='inputSignIn' type='text' required placeholder='Entrez votre Profession' />
//                             </div>
//                         </div>

//                         <div name='nonEntreprise' className='divChamp'>
//                             <div className='subDivChamp'>
//                                 <label className='labelSignIn'>Nom de l'entreprise </label>
//                                 <input className='inputSignIn' type='text' required placeholder='...' />
//                             </div>
//                         </div>

//                         <div name='Chiffre_affaire' className='divChamp'>
//                             <div className='subDivChamp'>
//                                 <label className='labelSignIn'>Chiffre d'affaire </label>
//                                 <input className='inputSignIn' type='text' required placeholder='...' />
//                             </div>
//                         </div>

//                         <div name='Region' className='divChamp'>
//                             <div className='subDivChamp'>
//                                 <label className='labelSignIn'>Region de residence </label>
//                                 <input className='inputSignIn' type='text' required placeholder='...' />
//                             </div>
//                         </div>

//                     </fieldset>
//                 }

//                 {activeStep === 2 &&
//                     <fieldset>
//                         <legend>Informations de <span style={{ color: 'red', fontWeight: 'bold' }}> Connexion</span></legend>
//                         <div name='password' className='divChamp'>
//                             <div className='subDivChamp'>
//                                 <label className='labelSignIn'>Mot de passse </label>
//                                 <input className='inputSignIn' type='password' required placeholder='' />
//                             </div>
//                         </div>

//                         <div name='confirmPassword' className='divChamp'>
//                             <div className='subDivChamp'>
//                                 <label className='labelSignIn'>Confirmer le mot de passse </label>
//                                 <input className='inputSignIn' type='password' required placeholder='' />
//                             </div>
//                         </div>

//                     </fieldset>
//                 }

//                 <div className='divContainButton'>
//                     <Button color='error' variant='contained' onClick={handleClose} >Annuler</Button>
//                     <div style={{ display: 'flex', gap: 10 }}>
//                         <Button variant='outlined' onClick={handleBack} disabled={activeStep === 0}>
//                             Precedant
//                         </Button>
//                         <Button variant='contained' onClick={handleNext}  >
//                             {activeStep === steps.length - 1 ? 'Enregister' : 'Suivant'}
//                         </Button>
//                     </div>

//                 </div>
//                 <div style={{ marginTop: 15, cursor: 'pointer' }}>
//                     <span>Vous avez déja un compte? <span onClick={toggleSignInSignUp} style={{ color: 'green', fontWeight: 'bold' }}>connectez Vous</span></span>
//                 </div>
//             </div>
//         </>
//     )
// }


// const SignIn = ({ setOpen, setIsSignIn, handleClose, toggleSignInSignUp }) => {
//     return (
//         <>
//             <div className='divFormulaire' style={{ display: 'flex', flexDirection: 'column', }}>
//                 <div style={{ textAlign: 'center', marginTop: 20, marginBottom: 40 }}>
//                     <span className='signInTitle' style={{}} >Connetez Vouz...!</span>
//                 </div>

//                 <fieldset>
//                     <legend>Informations de <span style={{ color: 'red', fontWeight: 'bold' }}> Connexion</span></legend>
//                     <div name='password' className='divChamp'>
//                         <div className='subDivChamp'>
//                             <label className='labelSignIn'>Telephone où Email </label>
//                             <input name='email  telephone' className='inputSignIn' type='text' required placeholder='' />
//                         </div>
//                     </div>

//                     <div name='confirmPassword' className='divChamp'>
//                         <div className='subDivChamp'>
//                             <label className='labelSignIn'>Mot de passse </label>
//                             <input className='inputSignIn' type='password' required placeholder='' />
//                         </div>
//                     </div>

//                 </fieldset>

//                 <div className='divContainButton'>
//                     <Button color='error' variant='contained' onClick={handleClose} >Annuler</Button>
//                     <div style={{ display: 'flex', gap: 10 }}>
//                         <Button variant='contained'>
//                             Connexion
//                         </Button>
//                     </div>

//                 </div>
//                 <div style={{ marginTop: 15, cursor: 'pointer' }}>
//                     <span>Vous n'avez de compte? <span onClick={toggleSignInSignUp} style={{ color: 'green', fontWeight: 'bold' }}>Creer votre compte</span></span>
//                 </div>
//             </div>
//         </>
//     )
// }


import React, { useContext, useState } from 'react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

import './signInSignUpCSS.css';
import { Alert, AlertTitle, Box, CircularProgress } from '@mui/material';
import { useFetch } from '../../utils/hooks/FetchData';
import { json, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context';
import Cookies from 'js-cookie';

const etoileSpanRed = <span style={{ color: 'red' }}> *</span>;


export default function SignInSignUp({ signIn, variantButton, classButtom }) {
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
            <Button className={classButtom ? classButtom : 'bouttonhead'} variant={variantButton ? variantButton : 'contained'} onClick={handleClickOpen} color='error' >{!signIn ? 'S\'inscrire' : 'Se connecter'}</Button>
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
                        <SignIn formSignIn={formSignIn} setFormSignIn={setFormSignIn} setIsSignIn={setIsSignIn} setOpen={setOpen} handleClose={handleClose} toggleSignInSignUp={toggleSignInSignUp} />
                        :
                        <SignUp formSignUp={formSignUp} setFormSignUp={setFormSignUp} setIsSignIn={setIsSignIn} setOpen={setOpen} handleClose={handleClose} toggleSignInSignUp={toggleSignInSignUp} />
                    }


                </div>

            </Dialog >
        </>

    )
}


const steps = ['Etape 1', 'Etape 2', 'Etape 3'];
const SignUp = ({ formSignUp, setFormSignUp, setOpen, setIsSignIn, handleClose, toggleSignInSignUp }) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [save, setSave] = useState(false)
    const [error, setError] = useState({
        signUpError: null,
        step: -1,
    })

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

    const setNom = (event) => {
        setFormSignUp((prevForm) => ({ ...prevForm, nom: event.target.value }))
    }

    const setPrenom = (event) => {
        setFormSignUp((prevForm) => ({ ...prevForm, prenom: event.target.value }))
    }

    const setDateNaissance = (event) => {
        setFormSignUp((prevForm) => ({ ...prevForm, dateNaissance: event.target.value }))
    }

    const setLieuNaissance = (event) => {
        setFormSignUp((prevForm) => ({ ...prevForm, lieuNaissance: event.target.value }))
    }

    const setTelephone = (event) => {
        setFormSignUp((prevForm) => ({ ...prevForm, telephone: event.target.value }))
    }

    const setEmail = (event) => {
        setFormSignUp((prevForm) => ({ ...prevForm, email: event.target.value }))
    }

    const setChiffreAffaire = (event) => {
        if (!isNaN(event.target.value) && event.target.value > 0) {
            setFormSignUp((prevForm) => ({ ...prevForm, chiffreAffaire: event.target.value }))
        }
    }




    const [formData, setFormData] = useState({})
    const handleChange = (e) => {
        setFormData(
            {
                ...formData,
                [e.target.id]: e.target.value,
            }
        )
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('api/auth/signup',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
        const data = await res.json();
        console.log(data);
    };

    console.log(formData);


    return (
        <>
            <div className='divFormulaire' style={{ display: 'flex', flexDirection: 'column', }}>
                <form>
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
                            {error.step == 0 &&
                                <span style={{ color: 'red', fontWeight: 700, fontSize: 17 }}>{error.signUpError}</span>
                            }
                            <legend>Informations <span style={{ color: 'green' }}>Personnelles</span></legend>
                            <div name='nom_prenom' className='divChamp'>
                                <div className='subDivChamp'>
                                    <label className='labelSignIn'>Nom<span style={{ color: 'red' }}> *</span></label>
                                    <input
                                        className='inputSignIn'
                                        type='text' maxLength={60}
                                        required
                                        placeholder='Entrez votre nom'
                                        value={formSignUp.nom}
                                        id='nom'
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='subDivChamp maginLeft'>
                                    <label className='labelSignIn'>Prenom</label>
                                    <input className='inputSignIn' type='text' maxLength={60} required placeholder='Entrez votre prenom'
                                        value={formSignUp.prenom}
                                        id='prenom'
                                        // onChange={e => setPrenom(e)}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div name='date_lieu_naissane' className='divChamp'>
                                <div className='subDivChamp'>
                                    <label className='labelSignIn'>Date de Naisance{etoileSpanRed}</label>
                                    <input className='inputSignIn' type='date' required placeholder='...'
                                        value={formSignUp.dateNaissance}
                                        //id='dateNaissance'
                                        // onChange={e => setDateNaissance(e)}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='subDivChamp maginLeft'>
                                    <label className='labelSignIn'>Lieu de naissance{etoileSpanRed}</label>
                                    <input className='inputSignIn' type='text' maxLength={60} required placeholder='...'
                                        value={formSignUp.lieuNaissance}
                                        id='lieuNaissance'
                                        // onChange={e => setLieuNaissance(e)}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div name='date_lieu_naissane' className='divChamp'>
                                <div className='subDivChamp'>
                                    <label className='labelSignIn'>Telephone{etoileSpanRed}</label>
                                    <input className='inputSignIn' type='text' maxLength={60} required placeholder='...'
                                        value={formSignUp.telephone}
                                        id='telephone'
                                        // onChange={e => setTelephone(e)}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div name='date_lieu_naissane' className='divChamp'>
                                <div className='subDivChamp'>
                                    <label className='labelSignIn'>Email{etoileSpanRed}</label>
                                    <input className='inputSignIn' type='text' maxLength={60} required placeholder='...'
                                        value={formSignUp.email}
                                        id='email'
                                        // onChange={e => setEmail(e)}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </fieldset>
                    }
                    {activeStep === 1 &&
                        <fieldset>
                            <legend>Informations <span style={{ color: 'blue' }}>Professionels</span></legend>

                            {error.step == 1 &&
                                <span style={{ color: 'red', fontWeight: 700, fontSize: 17 }}>{error.signUpError}</span>
                            }

                            <div name='non_profession' className='divChamp'>
                                <div className='subDivChamp'>
                                    <label className='labelSignIn'>Profession<span style={{ color: 'red' }}> *</span></label>
                                    <input className='inputSignIn' type='text' maxLength={60} required placeholder='Entrez votre Profession'
                                        value={formSignUp.profession}
                                        id='profession'
                                        // onChange={event => setFormSignUp((prevForm) => ({ ...prevForm, profession: event.target.value }))}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div name='nonEntreprise' className='divChamp'>
                                <div className='subDivChamp'>
                                    <label className='labelSignIn'>Nom de l'entreprise </label>
                                    <input className='inputSignIn' type='text' maxLength={60} required placeholder='...'
                                        value={formSignUp.nomEntreprise}
                                        id='nomEntreprise'
                                        // onChange={event => setFormSignUp((prevForm) => ({ ...prevForm, nomEntreprise: event.target.value }))}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div name='Chiffre_affaire' className='divChamp'>
                                <div className='subDivChamp'>
                                    <label className='labelSignIn'>Chiffre d'affaire </label>
                                    <input className='inputSignIn' type='text' maxLength={60} required placeholder='...'
                                        value={formSignUp.chiffreAffaire}
                                        id='chiffreAffaire'
                                        // onChange={event => setChiffreAffaire(event)}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div name='Region' className='divChamp'>
                                <div className='subDivChamp'>
                                    <label className='labelSignIn'>Region de residence </label>
                                    <input className='inputSignIn' type='text' maxLength={60} required placeholder='...'
                                        value={formSignUp.region}
                                        id='regionResidence'
                                        // onChange={event => setFormSignUp((prevForm) => ({ ...prevForm, region: event.target.value }))}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                        </fieldset>
                    }

                    {activeStep === 2 &&
                        <fieldset>
                            <legend>Informations de <span style={{ color: 'red', fontWeight: 'bold' }}> Connexion</span></legend>
                            {error.step == 2 &&
                                <span style={{ color: 'red', fontWeight: 700, fontSize: 17 }}>{error.signUpError}</span>
                            }
                            <div name='password' className='divChamp'>
                                <div className='subDivChamp'>
                                    <label className='labelSignIn'>Mot de passse </label>
                                    <input maxLength={50} className='inputSignIn' type='password' required placeholder=''
                                        value={formSignUp.password}
                                        id='password'
                                        // onChange={event => setFormSignUp((prevForm) => ({ ...prevForm, password: event.target.value }))}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div name='confirmPassword' className='divChamp'>
                                <div className='subDivChamp'>
                                    <label className='labelSignIn'>Confirmer le mot de passse </label>
                                    <input maxLength={50} className='inputSignIn' type='password' required placeholder=''
                                        value={formSignUp.confirmPassword}
                                        id='password'
                                        // onChange={event => setFormSignUp((prevForm) => ({ ...prevForm, confirmPassword: event.target.value }))}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                        </fieldset>
                    }

                    {activeStep === 3 &&
                        <fieldset>
                            <legend>Enregistrement <span style={{ color: 'green', fontWeight: 'bold' }}> ...</span></legend>
                            <ValidationSingInSignUp formSignUp={formSignUp} setActiveStep={setActiveStep} setError={setError} />
                        </fieldset>
                    }

                    <div className='divContainButton'>
                        <Button color='error' variant='contained' onClick={handleClose} disabled={activeStep === 3}  >Annuler</Button>
                        <div style={{ display: 'flex', gap: 10 }}>
                            <Button variant='outlined' onClick={handleBack} disabled={activeStep === 0 || activeStep === 3}>
                                Precedant
                            </Button>
                            {(activeStep >= steps.length - 1) ?
                                <Button variant='contained' onClick={() => { setActiveStep(3) }} >
                                    Enregister
                                </Button>
                                :
                                <Button variant='contained' onClick={handleNext}  >
                                    Suivant
                                </Button>
                            }
                            {/* <Button variant='contained' onClick={handleNext}  >
                            {activeStep === steps.length - 1 ? 'Enregister' : 'Suivant'}
                        </Button> */}
                        </div>

                    </div>
                    <div style={{ marginTop: 15, cursor: 'pointer' }}>
                        <span>Vous avez déja un compte? <span onClick={toggleSignInSignUp} style={{ color: 'green', fontWeight: 'bold' }}>connectez Vous</span></span>
                    </div>
                </form>
            </div>
        </>
    )
}


const SignIn = ({ formSignIn, setFormSignIn, setOpen, setIsSignIn, handleClose, toggleSignInSignUp, }) => {
    const [save, setSave] = useState(false)
    const [error, setError] = useState({
        signInError: null,
        step: -1,
    })
    return (
        <>
            <div className='divFormulaire' style={{ display: 'flex', flexDirection: 'column', }}>
                <div style={{ textAlign: 'center', marginTop: 20, marginBottom: 40 }}>
                    <span className='signInTitle' style={{}} >Connetez Vouz...!</span>
                </div>

                <fieldset>
                    <legend>Informations de <span style={{ color: 'red', fontWeight: 'bold' }}> Connexion</span></legend>
                    {error.signInError &&
                        <span style={{ color: 'red', fontWeight: 700, fontSize: 17 }}>{error.signInError}</span>
                    }

                    <div name='password' className='divChamp'>
                        <div className='subDivChamp'>
                            <label className='labelSignIn'>Telephone où Email </label>
                            <input maxLength={50} name='email  telephone' className='inputSignIn' type='text' required placeholder=''
                                value={formSignIn.emailOrPhone}
                                onChange={event => setFormSignIn((prevForm) => ({ ...prevForm, login: event.target.value }))}
                            />
                        </div>
                    </div>

                    <div name='confirmPassword' className='divChamp'>
                        <div className='subDivChamp'>
                            <label className='labelSignIn'>Mot de passse </label>
                            <input maxLength={50} className='inputSignIn' type='password' required placeholder=''
                                value={formSignIn.password}
                                onChange={event => setFormSignIn((prevForm) => ({ ...prevForm, password: event.target.value }))}
                            />
                        </div>
                    </div>

                    {save &&
                        <ValidationSingInSignUp formSignIn={formSignIn} setSave={setSave} isSignIn={true} setError={setError} />
                    }

                </fieldset>

                <div className='divContainButton'>
                    <Button color='error' variant='contained' onClick={handleClose} >Annuler</Button>
                    <div style={{ display: 'flex', gap: 10 }}>
                        <Button variant='contained' onClick={() => setSave(true)} disabled={save}>
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



const ValidationSingInSignUp = ({ isSignIn, formSignIn, formSignUp, setActiveStep, setError, setSave }) => {
    const { isOnline, language, setUser } = useContext(AppContext);
    const { isLoading, data, error } = useFetch(((isSignIn ? "/login/" : "/etudiant/enregistrement/")), 'POST', isSignIn ? formSignIn : formSignUp)
    const navigation = useNavigate();


    if (isLoading) {
        return (
            <div style={{ marginLeft: '40%', marginBottom: '40%' }} >
                <CircularProgress size={70} />
            </div>
        )
    } else if (error) {
        if (isOnline) {
            return (
                <div style={{ width: '100%', marginBottom: '5px', }}>
                    <Alert severity="error">
                        <AlertTitle>Erreur</AlertTitle>
                        <span>{language == 'FR' ? "Probleme avec le serveur...!" : "Problem with the server...!"}</span>
                    </Alert>
                </div>
            )
        } else {
            return (
                <div style={{ width: '100%', marginBottom: '5px', }}>
                    <Alert severity="error">
                        <AlertTitle>Erreur</AlertTitle>
                        <span>{language == 'FR' ? "Vous êtes hors connexion, controler votre connexion internet" : "You are offline, check your internet connection"}</span>
                    </Alert>
                </div>
            )
        }
    } else if (!isLoading && !error) {
        if (data.errorAPI) {
            //console.log('errorAPI === ', data.errorAPI)
            if (!isSignIn) {
                setError((prevError) => ({ ...prevError, step: data.index, signUpError: data.message }))
                setActiveStep(data.index)
            } else {
                setError((prevError) => ({ ...prevError, signInError: data.message }))
                setSave(false)
            }
        } else {
            //console.log("user connect == ", data)
            Cookies.set("user", JSON.stringify(data));
            setUser(data)
            console.log("cookie save == ", JSON.parse(Cookies.get('user')))
            navigation('/dashboard')

        }
    }
}