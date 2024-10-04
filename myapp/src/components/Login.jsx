import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {

  return (

    <div>
        <h1>Login page</h1>
        <TextField label='name' variant='outlined'/><br /><br />
        <TextField label='age' variant='outlined'/><br /><br />
        <TextField label='Phome' variant='outlined'/><br /><br />
        <TextField label='password' variant='outlined'/><br /><br />
        <Button variant="contained">submit</Button>
    </div>
  )
}

export default Login