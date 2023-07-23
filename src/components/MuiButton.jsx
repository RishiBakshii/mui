import React, { useState } from "react";
import { Button, Stack, Typography ,IconButton,ButtonGroup,ToggleButton,ToggleButtonGroup} from "@mui/material";
import { Send,Delete ,FormatUnderlined,FormatBold,FormatItalic} from "@mui/icons-material";

// **********************************************************
// by default the stack is flex
// disable elevation is used to disable the default shadow 
// disable ripple prop disbales the ripple
// button group component is a thing
// **********************************************************

export const MuiButton = () => {


    const [formats,setFormats]=useState([])

    const handleFormatChange=()=>{
        alert("format changed")
    }

  return (
    <>

      <Typography variant="h1" margin={5}>
        Buttons
      </Typography>
    
    <Stack spacing={4}>

      <Stack spacing={2} direction={"row"}>
        <Button variant="text" href="https://google.com">
          text
        </Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="contained">contained</Button>
      </Stack>
      
      <Stack spacing={4} direction={"row"}>
        <Button variant="contained" color="primary">primary</Button>
        <Button variant="contained" color="secondary">secondary</Button>
        <Button variant="contained" color="error">error</Button>
        <Button variant="contained" color="warning">warning</Button>
        <Button variant="contained" color="info">info</Button>
        <Button variant="contained" color="success">success</Button>
      </Stack>

      <Stack display={'block'} spacing={2} direction={'row'}>
        <Button variant="contained" size="small">small</Button>
        <Button variant="contained" size="medium">medium</Button>
        <Button variant="contained" size="large">large</Button>
      </Stack>

      <Stack spacing={2} direction={'row'}>
        <Button variant="contained"  startIcon={<Send/>}>Send</Button>
        <Button variant="contained" disableRipple disableElevation endIcon={<Send/>}>Send</Button>
        <Button variant="contained" endIcon={<Delete/>} color="error">Delete</Button>

{/* to create icon buttons */}
        <IconButton>
            <Send color="primary"/>
        </IconButton>

      </Stack>

        <Typography variant="h6" color={'secondary'}>Button Group 👇</Typography>
      <Stack direction={'row'}>
        <ButtonGroup orientation="vertical" size="small" color="secondary" variant="contained" aria-label="alignment button group">
        <Button onClick={()=>alert("left clicked")}>Left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction={'row'}>

        <ToggleButtonGroup aria-label='text formatting' value={formats} size="large" color="secondary" orientation="vertical" exclusive>

            <ToggleButton onChange={handleFormatChange}  value={'bold'} aria-label="bold"><FormatBold/></ToggleButton>
            <ToggleButton onChange={handleFormatChange}  value={'italic'} aria-label="italic"><FormatItalic/></ToggleButton>
            <ToggleButton onChange={handleFormatChange}  value={'underlined'} aria-label="underlined"><FormatUnderlined/></ToggleButton>

        </ToggleButtonGroup>


      </Stack>
        
      </Stack>
    </>
  );
};
