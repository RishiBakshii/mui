import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { BookmarkBorder, BookmarkAddRounded } from "@mui/icons-material";

export const MuiCheckBox = () => {
  const [accept, setAccept] = useState(false);
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I Accept terms and conditions"
          control={
            <Checkbox checked={accept} onChange={(e) => setAccept(!accept)} />
          }
        />
      </Box>

      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<BookmarkAddRounded />}
        ></Checkbox>
      </Box>

      <Box>
        <FormLabel>Skills</FormLabel>
        <FormGroup>
          <FormControlLabel
            label="Html"
            control={
              <Checkbox checked={accept} value={'HTML'} />
            }
          />
          <FormControlLabel
            label="CSS"
            control={
              <Checkbox checked={accept} value={'CSS'} />
            }
          />
          <FormControlLabel
            label="JAVASCRIPT"
            control={
              <Checkbox checked={accept} value={'JAVASRIPT'} />
            }
          />
        </FormGroup>
      </Box>
    </Box>
  );
};
