import { Grid, Hidden, Typography } from "@mui/material";
import React from "react";
import PageIdentifier from "../PageIdentifier";

const TestimonialsSection = () => {
  return (
    <>
      {/** TODO: Moving background? */}
      <Grid
        container
        item
        justifyContent="center"
        direction={{ xs: "column", md: "row" }}
        sx={{ height: "100%" }}
      >
        <Grid
          item
          sx={{ height: { xs: "0%", md: "33%" } }}
          flexGrow={{ xs: 1, md: 3 }}
        >
          <Grid item container alignItems="flex-end" sx={{ height: "100%" }}>
            <PageIdentifier pageNumber="04" pageTitle="TESTIMONIALS" />
          </Grid>
        </Grid>
        <Grid item flexGrow={{ xs: 5, md: 2 }}>
          <Grid
            item
            container
            direction="column"
            justifyContent={{ xs: "flex-start", md: "center" }}
            sx={{
              height: "100%",
              pl: { xs: "15px", md: "0px" },
              pt: { xs: "32px", md: "0px" },
            }}
          >
            <Grid
              item
              sx={{
                width: { xs: "350px", md: "1100px" },
              }}
            >
              <Hidden mdDown>
                <Typography variant="h3" fontSize={60}>
                  “WASSP LETS ME GO TO WHERE I WOULD NEVER HAVE FISHED BEFORE,
                  GIVING ME A HIGHER CATCH WITH REDUCED FUEL CONSUMPTION.”
                </Typography>
              </Hidden>
              <Hidden mdUp>
                <Typography variant="h3" fontSize={30}>
                  WASSP LETS ME GO TO WHERE I WOULD NEVER HAVE FISHED BEFORE,
                  GIVING ME A HIGHER VALUE CATCH, WITH REDUCED FUEL
                  CONSUMPTION.”
                </Typography>
              </Hidden>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  width: "170px",
                  mt: "30px",
                }}
              >
                Dominique Faou Owner/Skipper, France
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TestimonialsSection;
