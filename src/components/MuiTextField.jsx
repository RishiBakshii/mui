import { Stack, TextField,InputAdornment,startadornment,endadornment} from "@mui/material";
import { useState , React} from "react";

export const MuiTextField = () => {

    const [value,setValue]=useState("")
  return (
    <>
      <Stack
        padding={3}
        direction={"column"}
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack width={"50vw"} spacing={2}>
          <TextField label="outlined" error={!value} helperText={!value?("pleae enter a value"):("do not share you emai with anyone")} value={value} onChange={e=>setValue(e.target.value)} variant="outlined"></TextField>

          <TextField label="filled" variant="filled"></TextField>

          <TextField label="standard" variant="standard"></TextField>

          <TextField
            label="small secondary"
            size="small"
            color="secondary"
          ></TextField>

          <TextField
            label="password"
            color="secondary"
            helperText="do not share your password with anyone"
            required
            inputProps={{"readOnly":true}}
            value={'read only'}
          ></TextField>

          <TextField label='Amount' inputProps={{
            endadornment:<InputAdornment position="end">$</InputAdornment>
          }}></TextField>

          <TextField label='weight' inputProps={{
            startadornment:<InputAdornment position="start">kg</InputAdornment>
          }}>
          </TextField>

        </Stack>

        <Stack spacing={2}></Stack>
      </Stack>
    </>
  );
};
