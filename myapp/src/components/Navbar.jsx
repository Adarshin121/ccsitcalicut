import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
              <Typography variant='h6' >My_App</Typography>
              <Link to='/log'>
              <Button variant='contained'color='success'>Login</Button>
              </Link>&nbsp;

              <Link to='/sign'>
              <Button variant='contained'color='success'>Signup</Button>
              </Link> &nbsp;

              <Link to='/s'>
              <Button variant='contained'color='success'>state</Button>
              </Link> &nbsp;

              <Link to='/c'>
              <Button variant='contained'color='success'>counter</Button>
              </Link> &nbsp;

              <Link to='/name'>
              <Button variant='contained'color='success'>name</Button>
              </Link> &nbsp;

              <Link to='/api'>
              <Button variant='contained'color='success'>Api</Button>
              </Link> &nbsp;
            </Toolbar>
        </AppBar>
        <br /><br /><br />
    </div>
  )
}

export default Navbar