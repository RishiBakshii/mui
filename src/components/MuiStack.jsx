import React from 'react'
import {Stack,Box,Divider} from '@mui/material'

// it is used to manage the one dimensional layouts

export const MuiStack = () => {
    const myStyle={
        height:"400px",
        width:'400px',
        padding:"2rem",
        borderRadius:".8rem",
        boxShadow:"0 0 1rem 1px purple"
    }
  return (
    <Stack spacing={2} mt={8} direction={'row'} justifyContent={'center'} alignItems={'center'} divider={<Divider  orientation='vertical' flexItem />}>

        <Box sx={myStyle} bgcolor={'yellow'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor consequatur dolorem labore eveniet maxime mollitia laudantium minus ipsa. f</Box>

        <Box sx={myStyle} bgcolor={'purple'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ipsum officiis quia a voluptas voluptates nisi velit autem sequi ratione.</Box>

    </Stack>
  )
}
