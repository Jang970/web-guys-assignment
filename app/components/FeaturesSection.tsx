import { Button, ButtonProps, Grid, Typography } from "@mui/material";
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
      <Grid item sx={{ width: "100%", mt: "190px" }}>
        {/** Features title and Feature Buttons */}
        <Grid item container justifyContent="flex-start">
          <Grid item>
            <Typography variant="subtitle2" fontSize={14} fontWeight={400}>
              03
            </Typography>
          </Grid>
          {/** Changes to 'our capabilities */}
          <Grid item marginLeft={16} marginRight={48}>
            <Typography variant="subtitle2" fontSize={14} fontWeight={400}>
              FEATURES
            </Typography>
          </Grid>

          {/** Buttons go here */}
          <Grid item width={900}>
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
                <Grid container columnSpacing={2}>
                  <Grid item>
                    <Typography variant="subtitle2" sx={{ fontWeight: "600" }}>
                      {idx < 10 ? "0" : ""}
                      {idx + 1}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2">{feature.title}</Typography>
                  </Grid>
                </Grid>
              </Button>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Grid item sx={{ ml: "600px", mt: "30px", zIndex: "1" }}>
        <Grid item container direction="column" sx={{ width: "100%" }}>
          {/** Current button number */}
          <Grid item>
            <Typography variant="h3" fontSize={24}>
              {selectedFeatureNumber && selectedFeatureNumber < 10 ? "0" : ""}
              {selectedFeatureNumber}
            </Typography>
          </Grid>
          {/** Current button associated title */}
          <Grid item width={635} sx={{ mt: "32px", mb: "8px" }}>
            <Typography variant="h3" fontSize={60}>
              {selectedFeature ? selectedFeature.title : ""}
            </Typography>
          </Grid>
          {/** Current button associated description */}
          <Grid item width={700}>
            <Typography variant="subtitle2" fontSize={16}>
              {selectedFeature ? selectedFeature.description : ""}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        sx={{
          height: "150px",
          mt: "450px",
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
            width: "30px", // adjust this width as per requirement
            background: "linear-gradient(to right, #010C1E, transparent)",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "30px", // adjust this width as per requirement
            background: "linear-gradient(to left, #010C1E, transparent)",
          },
        }}
      >
        <Grid
          item
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          {/** Turn item into component? into component */}
          <Grid item>
            <Grid item container alignItems="center">
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

              <Grid item sx={{ mx: "32px" }}>
                <Button
                  color="inherit"
                  variant="outlined"
                  sx={{ borderRadius: "50px", width: "120px" }}
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
                <Typography variant="h3" fontSize={60}>
                  GPA SEABOTS
                </Typography>
              </Grid>
              <Grid item sx={{ mx: "32px" }}>
                <Button
                  color="inherit"
                  variant="outlined"
                  sx={{ borderRadius: "50px", width: "120px" }}
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
            </Grid>
          </Grid>

          <Grid item>
            <Grid item container alignItems="center">
              <Grid item>
                <div
                  style={{
                    overflow: "hidden",
                    width: "100px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Typography
                    variant="h3"
                    fontSize={60}
                    style={{ marginLeft: "52px" }}
                  >
                    FUN
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FeaturesSection;
