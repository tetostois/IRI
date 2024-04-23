
import React, { useState } from 'react';

import { Typography, Link, Grid, CssBaseline, Avatar, TextField, Button, Box, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Head from '../../composants/Head/index.jsx';
import { useNavigate } from 'react-router-dom';




export default function SignUp() {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
        telephone: '',
        dateNaissance: '',
        lieuNaissance: '',
        regionResidence: '',
        profession: '',
        nomEntreprise: '',
        chiffreAffaire: '',
    })
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch('http://localhost:3000/api/auth/signup',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
            const data = await res.json();
            console.log(data);
            if (data.success === false) {
                setLoading(false);
                setError(data.message);
                return;
            }
            setLoading(false);
            setError(null);
            navigate('/dashboard');
        } catch (error) {
            setLoading(false)
            setError(error.message);
        }
    };





    return (
        <>
            <Head />
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Créer votre compte
                    </Typography>

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <Box sx={{ mt: 1, width: '100%' }} >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} name='nom_prenom'>
                                    <TextField required variant="outlined" fullWidth label="Nom" name="nom" autoFocus onChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required variant="outlined" fullWidth label="Prénom" name="prenom" onChange={handleChange} value={formData.prenom} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required variant="outlined" fullWidth label="Email Address" name="email" autoComplete="email" onChange={handleChange} value={formData.telepemailhone} />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField required variant="outlined" fullWidth label="Password" name="password" type="password" autoComplete="current-password" onChange={handleChange} value={formData.password} />
                                </Grid>
                                {/* <Grid item xs={12} sm={6}>
                                <TextField required variant="outlined" fullWidth id="password" label="Confirmer Password" name="password" type="confirmerPassword" autoComplete="current-password" onChange={handleChange} />
                            </Grid> */}
                                <Grid item xs={12} sm={6}>
                                    <TextField required variant="outlined" fullWidth label="Téléphone" name="telephone" onChange={handleChange} value={formData.telephone} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required variant="outlined" fullWidth label="Date de Naissance" name="dateNaissance" type="date" InputLabelProps={{ shrink: true }} onChange={handleChange} value={formData.dateNaissance} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required variant="outlined" fullWidth label="Lieu de Naissance" name="lieuNaissance" onChange={handleChange} value={formData.lieuNaissance} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required variant="outlined" fullWidth label="Région de Résidence" name="regionResidence" onChange={handleChange} value={formData.regionResidence} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required variant="outlined" fullWidth label="Profession" name="profession" onChange={handleChange} value={formData.profession} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required variant="outlined" fullWidth label="Nom de l'Entreprise" name="nomEntreprise" onChange={handleChange} value={formData.nomEntreprise} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required variant="outlined" fullWidth label="Chiffre d'Affaire" name="chiffreAffaire" type="number" onChange={handleChange} value={formData.chiffreAffaire} />
                                </Grid>
                            </Grid>
                            <Button
                                disabled={loading}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                {loading ? 'Loading...' : "S'inscrire"}
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link href="/connexion" variant="body2">
                                        Vous avez deja un compte? Connctez-vous
                                    </Link>
                                </Grid>
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                            </Grid>

                        </Box>
                    </Box>

                </Box>
            </Container>
            <div className='footerImageFooter' style={{ backgroundImage: 'url(/images/footerImage.png)', }}>

            </div>
        </>
    );
};

