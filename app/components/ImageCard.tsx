import { Card, Grid } from "@mui/material";
import React from "react";

const ImageCard = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "411px",
        height: "416px",
        p: "16px",
      }}
    >
      <Grid container direction="column" sx={{ height: "100%" }}>
        <Grid item sx={{ backgroundColor: "red" }} flexGrow={5}>
          1
        </Grid>
        <Grid item sx={{ backgroundColor: "gray" }} flexGrow={2}>
          2
        </Grid>
        <Grid item sx={{ backgroundColor: "greenyellow" }} flexGrow={1}>
          3
        </Grid>
      </Grid>
    </Card>
  );
};

export default ImageCard;
