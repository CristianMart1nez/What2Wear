import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../services/auth';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:5173">
        What2wear
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export function RegisterPage() {
  const navigate = useNavigate()

  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[errorName, setErrorName] = useState(false)
  const[errorEmail, setErrorEmail] = useState(false)
  const[errorPassword, setErrorPassword] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(name.trim() === '') {
      setErrorName(true)
    }

    if(email.trim() === '') {
      setErrorEmail(true)
    }

    if(password.trim() === '') {
      setErrorPassword(true)
    }
    
    try {
      const response = await signUp({
        firstName: name,
        email: email,
        password: password
      }) 

      console.log(response)

      localStorage.setItem('token', response.token)
      localStorage.setItem('user', response.firstName)
      localStorage.setItem('id', response.id)
      navigate(-1)

      setName('')
      setEmail('')
      setPassword('')

      console.log('enviado')

    } catch (error) {
      console.log('Error Submit: ', error)
    }
  };

  const handleBlurName = () => {
    if(name.trim() === '') {
      setErrorName(true)
    }
  }

  const handleBlurEmail = () => {
    if(email.trim() === '') {
      setErrorEmail(true)
    }
  }

  const handleBlurPassword = () => {
    if(password.trim() === '') {
      setErrorPassword(true)
    }
  }

  const handleName = (event) => {
    setName(event.target.value)

    if(event.target.value.length !== 0) {
      setErrorName(false)
    } 
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)

    if(event.target.value.length !== 0) {
      setErrorEmail(false)
    } 
  }

  const handlePassword = (event) => {
    setPassword (event.target.value)

    if(event.target.value.length !== 0) {
      setErrorPassword(false)
    } 
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url('src/assets/img-login-prueba.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'right',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{backgroundColor: "#fafafa"}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            
          >
            <Typography component="h1" variant="h5" style={{fontFamily: "Rock Salt", color: "#b8e32d", fontSize: "2rem"}}>
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="Name"
                name="firstName"
                autoComplete="name"
                autoFocus
                onChange={(event) => handleName(event)}
                onBlur={handleBlurName}
                error={errorName}
                helperText={errorName ? 'Required field': ''}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(event) => handleEmail(event)}
                onBlur={handleBlurEmail}
                error={errorEmail}
                helperText={errorEmail ? 'Required field': ''}

              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event) => handlePassword (event)}
                onBlur={handleBlurPassword}
                error={errorPassword}
                helperText={errorPassword ? 'Required field': ''}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "#b8e32d", color: "#0f0f0f"}}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" style={{ color: "#0f0f0f"}}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" style={{ color: "#0f0f0f"}}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}