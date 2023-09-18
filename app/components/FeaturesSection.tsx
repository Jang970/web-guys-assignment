import { Button, ButtonProps, Grid, Typography } from "@mui/material";
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
      <Grid item sx={{ width: "100%" }}>
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

      {/** Seabots Hemisphere banner thing */}
      <Grid item></Grid>
    </>
  );
};

export default FeaturesSection;
