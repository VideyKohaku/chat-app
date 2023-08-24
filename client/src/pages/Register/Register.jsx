import React, { useContext } from 'react'
import { Container, Button, Typography, TextField, Stack, Alert, AlertTitle, InputAdornment, IconButton  } from '@mui/material'
import register_styles from './register.style'
import { Grid } from '@mui/material'
import { useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


function Register() {
  const { 
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading,
    isPasswordVisible,
    togglePasswordVisible } = useContext(AuthContext);


  return (
    <Container
      sx={register_styles.body}

    >
      {/* Title */}
      <Container
        sx={register_styles.titleContainer}
      >
        <Typography
          sx={register_styles.title}
        >Register</Typography>
      </Container>



      {/* Input form */}
      <Container
        sx={register_styles.formContainer}
        disableGutters
      >
        <Stack gap={2}
          m={0} p={0}
          sx={{ width: "95%" }}
        >
          <TextField
            label={"Name"}
            required
            onChange={(e) => {
              updateRegisterInfo({
                ...registerInfo,
                name: e.target.value
              })
            }}
          ></TextField>
          <TextField
            label={"Email"}
            required
            onChange={(e) => {
              updateRegisterInfo({
                ...registerInfo,
                email: e.target.value
              })
            }}
          ></TextField>
          <TextField
            label={"Password"}
            required
            type= {isPasswordVisible ? "text" : "password"}
            onChange={(e) => {
              updateRegisterInfo({
                ...registerInfo,
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
            registerError && <Alert severity='error'>
              {registerError}
            </Alert>

          }

        </Stack>
      </Container>
      {/* Submit register */}
      <Container
        sx={register_styles.submitContainer}
        disableGutters
      >
        <Button
          sx={register_styles.btn}
          variant="contained"
          size='large'
          onClick={registerUser}
        >{isRegisterLoading ? "Creating your account" : "Register"}</Button>
      </Container>
    </Container>

  )
}

export default Register