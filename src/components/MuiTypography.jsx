import { Typography } from "@mui/material";
import React from "react";

export const MuiTypography = () => {
  return (
    <>
      <Typography variant="h1">Typography </Typography>
      <Typography variant="h1">h1 component</Typography>
      <Typography variant="h2">h2 component</Typography>
      <Typography variant="h3">h3 component</Typography>
      <Typography variant="h4">h4 component</Typography>
      <Typography variant="h5">h5 component</Typography>
      <Typography variant="h6">h6 component</Typography>

      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>


      {/* body 1 is the default value and it renders as p tag [ paragraph tag ] */}
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
        cupiditate ullam. Provident corporis accusamus magnam adipisci quasi
        placeat eum error.
      </Typography>


      <Typography variant="body2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
        voluptatem temporibus officiis ullam mollitia ex cum. Officia at modi
        voluptates.
      </Typography>

    </>
  );
};
