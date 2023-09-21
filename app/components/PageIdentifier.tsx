import { Grid, Typography } from "@mui/material";
import React from "react";

interface PageIdentifierProps {
  pageNumber: string;
  pageTitle: string;
}

const PageIdentifier: React.FC<PageIdentifierProps> = ({
  pageNumber,
  pageTitle,
}) => {
  return (
    <>
      <Grid
        item
        sx={{
          pl: "15px",
          pr: { xs: "64px", md: "124px" },
        }}
      >
        <Typography variant="subtitle2">{pageNumber}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle2">{pageTitle}</Typography>
      </Grid>
    </>
  );
};

export default PageIdentifier;
