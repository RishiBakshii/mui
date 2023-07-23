import React, { useState } from 'react'
import {Box,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio,FormHelperText} from '@mui/material'

export const MuiRadioButton = () => {
    const [value,setValue]=useState('')
  return (
    <Box>

        <FormControl error>
            <FormLabel id='job-experience-group-label'>
                Years of experience
            </FormLabel>

            <RadioGroup row value={value} onChange={e=>setValue(e.target.value)} name='job-experience-group' aria-labelledby='job-expeience-group-label'>

                <FormControlLabel control={<Radio size='medium' color='secondary'/>} label='0-2' value={'0-2'}/>
                <FormControlLabel control={<Radio/>} label='2-5' value={'3-5'}/>
                <FormControlLabel control={<Radio/>} label='6-10' value={'6-10'}/>

            </RadioGroup>
            <FormHelperText>Invalid Selection</FormHelperText>

        </FormControl>

    </Box>
  )
}
