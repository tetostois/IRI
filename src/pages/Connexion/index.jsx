import React, { useState } from 'react';
import { Typography, Link, Grid, CssBaseline, Paper, Avatar, TextField, Button, Box } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Head from '../../composants/Head/index.jsx'
import { Navigate } from 'react-router-dom';

// Composant MadeWithLove
const MadeWithLove = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Built with love by the '}
    {/* <Link color="inherit" href="">
      Material-UI
    </Link> */}
    {' team.'}
  </Typography>
);

// Composant SignInSide
const SignInSide = () => {
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
      const res = await fetch('http://localhost:3000/api/auth/signin',
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
      Navigate('/')
    } catch (error) {
      setLoading(false)
      setError(error.message);
    }
  };

  return (
    <>
      <Head />
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} sx={{
          backgroundImage: 'url(/images/entrepreneur-700x370.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Paper sx={{
            margin: (theme) => theme.spacing(8, 4),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: (theme) => theme.spacing(2)
          }}>
            <Avatar sx={{
              margin: (theme) => theme.spacing(1),
              backgroundColor: (theme) => theme.palette.secondary.main,
            }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Connectez vous...!
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', marginTop: 1 }} noValidate>
              <TextField required variant="outlined" fullWidth label="Email Address" name="email" autoComplete="email" onChange={handleChange} value={formData.telepemailhone} style={{ marginBottom: '10px' }} />
              <TextField required variant="outlined" fullWidth label="Password" name="password" type="password" autoComplete="current-password" onChange={handleChange} value={formData.password} />
              <Button
                disabled={loading}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                {loading ? 'Loading...' : "Se connecter"}
              </Button>
              <Grid container>
                {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
                <Grid item>
                  <Link href="/dashboard" variant="body2">
                    {"Vous n'avez pas de compte? Creer votre compte"}
                  </Link>
                </Grid>
                {error && <p style={{ color: 'red' }}>{error}</p>}
              </Grid>

            </Box>
          </Paper>
        </Grid>
      </Grid>
      <div className='footerImageFooter' style={{ backgroundImage: 'url(/images/footerImage.png)' }}>

      </div>
    </>
  );
};

export default SignInSide;
