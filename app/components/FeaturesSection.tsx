"use client";

import { Button, ButtonProps, Grid, Hidden, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

interface ButtonInformation {
  title: string;
  description: string;
}

const buttonData: ButtonInformation[] = [
  {
    title: "High Resolution Chirp Sounder",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim.",
  },
  {
    title: "120° side to side coverage",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim.",
  },
  {
    title: "Realtime CDX Mapping",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim.",
  },
  {
    title: "Realtime 3D View CDX",
    description:
      "Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim.",
  },
  {
    title: "Backscatter License",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim.",
  },
  {
    title: "1. High Resolution Side Scan",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim.",
  },
  {
    title: "Third-Party Software Integration",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada.",
  },
  {
    title: "Multiple WASSP Transducers",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim.",
  },
];

const FeaturesSection = () => {
  // will need to make use of states in order to render the button data
  // will base on currently 'selected' feature, default will be first one
  const [selectedFeature, setSelectedFeature] =
    useState<ButtonInformation | null>(buttonData[0]);

  const [selectedFeatureNumber, setSelectedFeatureNumber] = useState<
    number | null
  >(1);

  // defining button styles for if selected or not
  const commonButtonStyles: ButtonProps["sx"] = {
    borderRadius: "50px",
    px: "24px",
    py: "8px",
    m: "4px",
    backgroundColor: "black",
    borderColor: "white",
    "&:hover": {
      borderColor: "white",
      backgroundColor: "white",
      color: "black",
    },
  };

  const defaultButtonStyles: ButtonProps["sx"] = {
    ...commonButtonStyles,
    backgroundColor: "",
    color: "white",
  };

  const activeButtonStyles: ButtonProps["sx"] = {
    ...commonButtonStyles,
    backgroundColor: "white",
    color: "black",
    "&:hover": {
      color: "white",
      backgroundColor: "",
      borderColor: "white",
    },
  };

  const handleClick = (feature: ButtonInformation, order: number) => {
    setSelectedFeature(feature);
    setSelectedFeatureNumber(order);
  };

  return (
    <>
      <Grid
        item
        sx={{
          width: { xs: "100vw", md: "100%" },
          mt: "190px",
        }}
      >
        {/** Features title and Feature Buttons */}
        <Grid
          item
          container
          justifyContent="flex-start"
          direction={{ md: "column", lg: "row" }}
        >
          <Grid item sx={{ ml: { xs: "15px", md: "0px" } }}>
            <Typography variant="subtitle2" fontSize={14} fontWeight={400}>
              03
            </Typography>
          </Grid>
          {/** Changes to 'our capabilities */}
          <Grid
            item
            sx={{
              ml: { xs: "64px", md: "124px" },
              mr: { xs: "0px", md: "390px" },
              mb: { xs: "24px", md: "0px" },
            }}
          >
            <Hidden mdDown>
              <Typography variant="subtitle2" fontSize={14} fontWeight={400}>
                FEATURES
              </Typography>
            </Hidden>
            <Hidden mdUp>
              <Typography variant="subtitle2" fontSize={14} fontWeight={400}>
                OUR CAPABILITIES
              </Typography>
            </Hidden>
          </Grid>

          {/** Buttons go here */}
          <Grid
            item
            sx={{
              width: { xs: "100vw", md: "900px" },
              overflowX: { xs: "auto", md: "initial" },
              whiteSpace: { xs: "nowrap", md: "normal" },
              ml: { xs: "15px", lg: "0px" },
            }}
          >
            {buttonData.map((feature, idx) => (
              <Button
                key={idx}
                onClick={() => handleClick(feature, idx + 1)}
                sx={
                  selectedFeature === feature
                    ? activeButtonStyles
                    : defaultButtonStyles
                }
                variant="outlined"
              >
                <Grid container columnSpacing={2} alignItems="center">
                  <Grid item>
                    <Typography variant="subtitle2" sx={{ fontWeight: "600" }}>
                      {idx < 10 ? "0" : ""}
                      {idx + 1}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontSize: { xs: "12px", md: "14px" } }}
                    >
                      {feature.title}
                    </Typography>
                  </Grid>
                </Grid>
              </Button>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        sx={{ mx: { xs: "15px", lg: "600px" }, mt: "30px", zIndex: "1" }}
      >
        <Grid
          item
          container
          direction="column"
          sx={{ width: { xs: "90vw", md: "100%" } }}
        >
          {/** Current button number */}
          <Grid item>
            <Typography variant="h3" fontSize={24}>
              {selectedFeatureNumber && selectedFeatureNumber < 10 ? "0" : ""}
              {selectedFeatureNumber}
            </Typography>
          </Grid>
          {/** Current button associated title */}
          <Grid
            item
            width={{ xs: 350, md: 635 }}
            sx={{ mt: "32px", mb: "8px" }}
          >
            <Typography variant="h3" fontSize={{ md: 30, lg: 60 }}>
              {selectedFeature ? selectedFeature.title : ""}
            </Typography>
          </Grid>
          {/** Current button associated description */}
          <Grid item sx={{ width: { xs: "350px", md: "700px" } }}>
            <Typography variant="subtitle2" fontSize={{ md: 14, lg: 16 }}>
              {selectedFeature ? selectedFeature.description : ""}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        sx={{
          height: "100px",
          mt: { xs: "220px", lg: "450px" },
          position: "relative",
          borderImage:
            "linear-gradient(to right, #000719, white 5%, white 95%, #000719) 1",
          borderStyle: "solid",
          borderWidth: "1px 0",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "30px",
            background: "linear-gradient(to right, #021123, transparent)",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "30px",
            background: "linear-gradient(to left, #021123, transparent)",
          },
        }}
      >
        {/** Banner thing */}
        <Grid
          item
          container
          justifyContent={{ xs: "flex-start", lg: "space-between" }}
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid item>
            <Grid item container alignItems="center">
              <Hidden lgDown>
                <Grid item>
                  <div
                    style={{
                      overflow: "hidden",
                      width: "250px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Typography
                      variant="h3"
                      fontSize={60}
                      style={{ marginLeft: "-170px" }}
                    >
                      SBG SYSTEMS
                    </Typography>
                  </div>
                </Grid>
              </Hidden>

              <Grid item sx={{ mx: { xs: "8px", lg: "32px" } }}>
                <Button
                  color="inherit"
                  variant="outlined"
                  sx={{
                    borderRadius: "50px",
                    width: { xs: "80px", lg: "120px" },
                  }}
                >
                  <Image
                    src="/images/SBGSystems.svg"
                    alt="button-img-SBGSystems"
                    width={50}
                    height={25}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item container alignItems="center">
              <Grid item>
                <Typography variant="h3" fontSize={{ xs: 24, lg: 60 }}>
                  GPA SEABOTS
                </Typography>
              </Grid>
              <Grid item sx={{ mx: { xs: "8px", lg: "32px" } }}>
                <Button
                  color="inherit"
                  variant="outlined"
                  sx={{
                    borderRadius: "50px",
                    width: { xs: "80px", lg: "120px" },
                  }}
                >
                  <Image
                    src="/images/Seabots.svg"
                    alt="button-img-seabots"
                    width={50}
                    height={25}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item container alignItems="center">
              <Hidden mdUp>
                <Grid item sx={{ width: "40px" }}>
                  <Typography variant="h3" fontSize={24}>
                    HE
                  </Typography>
                </Grid>
              </Hidden>

              <Hidden lgDown>
                <Grid item>
                  <Typography variant="h3" fontSize={60}>
                    HEMISPHERE
                  </Typography>
                </Grid>
                <Grid item sx={{ mx: "32px" }}>
                  <Button
                    color="inherit"
                    variant="outlined"
                    sx={{ borderRadius: "50px", width: "120px" }}
                  >
                    <Image
                      src="/images/Hemisphere.svg"
                      alt="button-img-Hemisphere"
                      width={50}
                      height={25}
                    />
                  </Button>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>

          <Grid item>
            <Grid item container alignItems="center">
              <Hidden lgDown>
                <Grid item>
                  <div
                    style={{
                      overflow: "hidden",
                      width: "100px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Typography variant="h3" fontSize={60} sx={{ ml: "52px" }}>
                      FUN
                    </Typography>
                  </div>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FeaturesSection;
