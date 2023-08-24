import React, {useContext} from 'react'
import { Container, Button, Typography, TextField, Stack, Alert, AlertTitle, InputAdornment, IconButton  } from '@mui/material'
import login_styles from './login.style'
import { Grid } from '@mui/material'
import { useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Login() {
  const {
    loginInfo,
    isLoginLoading,
    loginError,
    updateLoginInfo,
    loginUser,
    isPasswordVisible,
    togglePasswordVisible,
  } = useContext(AuthContext);

  return (
    <Container
      sx={login_styles.body}

    >
      {/* Title */}
      <Container
        sx={login_styles.titleContainer}
      >
        <Typography
          sx={login_styles.title}
        >Log in</Typography>
      </Container>



      {/* Input form */}
      <Container
        sx={login_styles.formContainer}
        disableGutters
      >
        <Stack gap={2}
          m={0} p={0}
          sx={{width: "95%"}}
        >

          <TextField 
            label={"Email"}
            required
            onChange={(e)=>{
              updateLoginInfo({
                ...loginInfo,
                email: e.target.value
              })
            }}
          ></TextField>
          <TextField 
            label={"Password"} 
            required
            type={isPasswordVisible? "text": "password"}
            onChange={(e)=>{
              updateLoginInfo({
                ...loginInfo,
                password: e.target.value
              })
            }}
            InputProps={{ // <-- This is where the toggle button is added.
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={togglePasswordVisible}
                  >
                    {isPasswordVisible ? <VisibilityIcon/> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          ></TextField>
          {
            loginError && <Alert severity='error'>
              {loginError}
          </Alert>
          }
        </Stack>
      </Container>
      
      {/* Submit login */}
      <Container
        sx={login_styles.submitContainer}
        disableGutters
      >
        <Button
          sx={login_styles.btn}
          variant="contained"
          size='large'
          onClick={loginUser}
        >{isLoginLoading ? "Loging in": "Login"}</Button>
      </Container>
    </Container>

  )
}

export default Login