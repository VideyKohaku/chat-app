import React from 'react'
import { Container, Button, Typography, TextField, Stack, Alert, AlertTitle } from '@mui/material'
import register_styles from './register.style'
import { Grid } from '@mui/material'
import { useState } from 'react'


function Register() {

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
          sx={{width:"95%"}}
        >
          <TextField label={"Name"} ></TextField>
          <TextField label={"Email"} ></TextField>
          <TextField label={"Password"} ></TextField>
          <Alert severity='error'
          >
            Weak password - please try again!
          </Alert>
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
        >Register</Button>
      </Container>
    </Container>

  )
}

export default Register