import { Grid, Hidden, LinearProgress, Link, Typography } from "@mui/material";
import React from "react";

const FSeriesSection = () => {
  return (
    <>
      <Grid
        container
        item
        sx={{
          mb: "16px",
          px: { xs: "16px", md: "30px" },
          py: { xs: "30px", md: "0px" },
          pt: { xs: "48px", md: "0px" },
        }}
        direction={{ xs: "column", md: "row" }}
        flexGrow={{ xs: 1, md: 0 }}
      >
        {/** Title section */}
        <Grid item flexGrow={1}>
          <Grid item container direction="column">
            <Grid item order={{ xs: 2, md: 1 }}>
              <Grid item container alignItems="center">
                <Grid item>
                  <Typography variant="subtitle1" fontSize={12}>
                    01
                  </Typography>
                </Grid>
                <Grid item sx={{ width: "128px", mx: "8px" }}>
                  <LinearProgress
                    color="inherit"
                    variant="determinate"
                    sx={{ height: "2" }}
                    value={30}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" fontSize={12}>
                    03
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Hidden mdDown>
              <Grid item sx={{ my: "16px" }} order={2}>
                <Typography variant="subtitle2" fontSize={12}>
                  (FISHING SERIES)
                </Typography>
              </Grid>
            </Hidden>

            <Grid item order={{ xs: 1, md: 3 }}>
              <Typography
                variant="h3"
                fontSize={{ xs: "45px", md: "100px" }}
                marginBottom={{ xs: "16px", md: "0px" }}
              >
                F - SERIES
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/** Info section */}
        <Grid item>
          <Grid
            item
            container
            direction="column"
            justifyContent="flex-end"
            sx={{ height: "100%" }}
          >
            <Grid item>
              <Typography
                variant="subtitle2"
                fontSize={{ xs: "14px", md: "16px" }}
              >
                F - SERIES
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                width: "350px",
                mb: { xs: "16px", md: "24px" },
                mt: "8px",
              }}
            >
              <Typography
                variant="subtitle2"
                fontSize={{ xs: "14px", md: "16px" }}
              >
                WASSP Multibeam finds fish and habitat over a wider area than
                single-beam systems.
              </Typography>
            </Grid>
            <Grid item>
              <Link
                href="#"
                color="inherit"
                variant="subtitle1"
                fontSize={{ xs: "14px", md: "16px" }}
              >
                Explore Now
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FSeriesSection;
