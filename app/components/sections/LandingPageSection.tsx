import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";
import CustomButton from "../CustomButton";

const LandingPageSection = () => {
  return (
    <>
      <Grid item>
        <Navbar />
      </Grid>

      {/** SEA IT ALL TEXT */}
      <Grid
        item
        sx={{
          px: "30px",
          width: { xs: "370px", md: "613px" },
        }}
        mt="120px"
        flexGrow="1"
      >
        <Typography
          variant="h5"
          sx={{ fontSize: { xs: "16px", md: "24px" } }}
          color="white"
        >
          SEA IT ALL
        </Typography>
        <Typography
          variant="h2"
          color="white"
          sx={{ fontSize: { xs: "42px", md: "60px" } }}
        >
          MULTIBEAM SONAR PRODUCTS & SOLUTIONS.
        </Typography>
      </Grid>

      {/** WASSP text and contact button  */}
      <Grid
        container
        item
        direction={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems={{ md: "flex-start", lg: "center" }}
        sx={{
          pr: "30px",
          pl: { xs: "30px", lg: "600px" },
          mb: "56px",
        }}
      >
        <Box>
          <Typography
            color="white"
            sx={{ width: { xs: "270px", md: "220px" } }}
          >
            WASSP multi-beam enables sustainable fishing, exploration, and
            surveys with versatility and detail.
          </Typography>
        </Box>
        <Box sx={{ pt: { xs: "48px", lg: "0px" } }}>
          <CustomButton
            text="Contact Us"
            imageSrc="/images/ArrowRight.svg"
            imageAlt="arrow-right"
            imageWidth={30}
            imageHeight={30}
          />
        </Box>
      </Grid>
    </>
  );
};

export default LandingPageSection;
