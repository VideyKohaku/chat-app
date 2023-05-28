import React from 'react'
import { Container, Button, Typography, TextField, Stack, Alert, AlertTitle } from '@mui/material'
import login_styles from './login.style'
import { Grid } from '@mui/material'
import { useState } from 'react'


function Login() {

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
        >

          <TextField label={"Email"} ></TextField>
          <TextField label={"Password"} ></TextField>
          <Alert severity='error'
          >
            Wrong email or password - please try again!
          </Alert>
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
        >Log in</Button>
      </Container>
    </Container>

  )
}

export default Login