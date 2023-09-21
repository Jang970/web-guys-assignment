import { Grid, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../CustomButton";

const AboutSection = () => {
  return (
    <>
      {/** Title */}
      <Grid
        item
        sx={{
          width: { xs: "400px", md: "820px" },
          zIndex: "1",
          ml: { xs: "16px", md: "60px" },
          mb: { xs: "16px", md: "30px" },
        }}
      >
        <Typography variant="h3" sx={{ fontSize: { xs: "30px", md: "60px" } }}>
          WELCOME TO THE WORLD OF WASSP MULTIBEAM
        </Typography>
      </Grid>

      <Grid item>
        {/** Sub title */}
        <Grid
          item
          container
          justifyContent="flex-start"
          sx={{ width: { md: "820px" }, ml: { xs: "16px", md: "70px" } }}
        >
          <Grid item sx={{ mr: { xs: "60px", md: "120px" } }}>
            <Typography sx={{ fontSize: { xs: "12px", md: "14px" } }}>
              01
            </Typography>
          </Grid>

          <Grid item sx={{ mr: "170px" }}>
            <Typography
              sx={{
                fontSize: { xs: "12px", md: "14px" },
                display: { xs: "none", md: "block" },
              }}
            >
              ABOUT WASSP
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", md: "14px" },
                display: { xs: "block", md: "none" },
              }}
            >
              ABOUT
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              width: { xs: "370px", md: "355px" },
              mt: { xs: "32px", md: "0px" },
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: "14px", md: "16px" } }}
            >
              WASSP, a powerful multi-beam sounder with 120-degree coverage and
              models for deep exploration, offers unparalleled accuracy, detail,
              and versatility. Target fish with steerable sounders, generate
              real-time 3D charts, map fish in water, and make better decisions
              with the user-friendly advanced mode.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          sx={{
            ml: { xs: "16px", md: "470px" },
            mt: { xs: "48px", md: "30px" },
          }}
        >
          {/** Button */}
          <CustomButton
            text="Our Story"
            imageSrc="/images/ArrowRight.svg"
            imageAlt="arrow-right"
            imageWidth={30}
            imageHeight={30}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutSection;
