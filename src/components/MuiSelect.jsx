import React, { useState } from "react";
import { Box, TextField, MenuItem ,Stack} from "@mui/material";

// box is just a div tag

export const MuiSelect = () => {

    const [country,setCountry]=useState([])
    const handleChange=(e)=>{
        setCountry(e.target.value)
    }
    console.log(country)
  return (
    <Stack spacing={2} width={'100vw'} justifyContent='center' alignItems='center' mt='5rem'> 
    <Box width={"50%"}>
        <TextField  fullWidth label="Select Country" select value={country} onChange={handleChange} SelectProps={{
            multiple:true
        }} size="small" color="secondary" helperText='please select mutliplye countrues'>
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
    </Box>
        
    </Stack>
  );
};
