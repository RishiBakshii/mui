import React from 'react'
import {AppBar,Toolbar,IconButton,Typography,Stack,Button} from '@mui/material'
import {Send} from '@mui/icons-material'
import { color } from 'framer-motion'

export const MuiNavbar = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
            <IconButton size='large' edge='start' aria-label='logo'>
                <Send/>
            </IconButton>
            <Typography variant='h6' component={'div'} sx={{flexGrow:1}}>
                POKEMONAPP
            </Typography>
            <Stack direction={'row'} spacing={2}>
                <Button variant='contained' sx={{backgroundColor:'inherit','&:hover':{color:'black'}}} color='inherit'>Pricing</Button>
                <Button color='inherit'>About</Button>
                <Button color='inherit'>Login</Button>
                <Button color='inherit'>Features</Button>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}
