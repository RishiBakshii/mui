import React from 'react'
import {Box} from '@mui/material'

// it is used as a replacement to the div tag

export const MuiBox = () => {
  return (
    <>
    <Box sx={{
        backgroundColor:"primary.main",
        color:"white",
        height:'150px',
        width:"450px",
        padding:"2rem",
        '&:hover':{
            backgroundColor:"primary.light",
            boxShadow:" 0 0 1rem 1px black"
        },
        transition:".6s"
        
    }}>
        RishiBakkshi
    
    </Box>
    
    <Box display={'flex'} width={'150px'} bgcolor={'red'} padding={'2rem'}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel explicabo qui doloremque nobis, velit aspernatur similique ratione rem doloribus veniam!
    </Box>
    
    </>
  )
}
