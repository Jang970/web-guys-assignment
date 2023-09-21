"use client";
import { Grid, Hidden } from "@mui/material";
import Image from "next/image";

// generate array of image paths
const imageNumbers = Array.from({ length: 10 }, (_, i) => i + 5);
const imagePaths = imageNumbers.map(
  (num) => `/images/${String(num).padStart(2, "0")}.jpg`
);
// last four images for smaller screens only
const lastFourImagePaths = imagePaths.slice(5, 9);

const ImageBanner = () => {
  return (
    <Grid
      container
      item
      alignItems="center"
      justifyContent="space-around"
      sx={{
        width: "100%",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "100px",
          background: "linear-gradient(to right, #000719, transparent)",
          zIndex: 2,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "100px",
          background: "linear-gradient(to left, #000719, transparent)",
        },
      }}
    >
      <Hidden mdDown>
        {imagePaths.map((path, idx) => (
          <Grid
            item
            sx={{
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "20px",
                background: "linear-gradient(to bottom, #000719, transparent)",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "20px",
                background: "linear-gradient(to top, #000719, transparent)",
              },
            }}
          >
            <Image
              src={path}
              key={idx}
              alt={`Image ${imageNumbers[idx]}`}
              width={150}
              height={150}
            />
          </Grid>
        ))}
      </Hidden>

      {/** Smaller screen images */}
      <Hidden mdUp>
        {lastFourImagePaths.map((path, idx) => (
          <Grid
            item
            sx={{
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "20px", // adjust this height as per requirement
                background: "linear-gradient(to bottom, #000719, transparent)",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "20px", // adjust this height as per requirement
                background: "linear-gradient(to top, #000719, transparent)",
              },
            }}
          >
            <Image
              src={path}
              key={idx}
              alt={`Image ${imageNumbers[idx]}`}
              width={100}
              height={100}
            />
          </Grid>
        ))}
      </Hidden>
    </Grid>
  );
};

export default ImageBanner;
