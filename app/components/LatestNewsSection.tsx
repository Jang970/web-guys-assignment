"use client";

import { Grid, GridProps, Hidden, Typography } from "@mui/material";
import React from "react";
import ImageCard from "./ImageCard";
import ImageBanner from "./ImageBanner";
import PageIdentifier from "./PageIdentifier";

interface ImageInformation {
  src: string;
  description: string;
}

const imageCardData: ImageInformation[] = [
  {
    src: "/images/03.jpg",
    description: "South Pacific reopens for superyachts, a top charter spot.",
  },
  {
    src: "/images/04.jpg",
    description: "WASSP’s Bluebeam brings major feature advancements",
  },
  //   {
  //     src: "/images/05.jpg",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus.",
  //   },
];

const LatestNewsSection = () => {
  // defining styles for mobile and desktop
  const mobileStyles: GridProps["sx"] = {
    width: "100%",
  };

  return (
    <>
      <Grid item flexGrow={{ xs: 1, md: 3 }}>
        <Grid
          item
          container
          sx={{ height: "100%", width: "100%" }}
          direction={{ xs: "column", md: "row" }}
        >
          <Grid
            item
            sx={{
              height: { xs: "auto", md: "100%" },
              width: { xs: "100%", md: "auto" },
            }}
            flexGrow={{ xs: 1, md: 4 }}
          >
            {/** Latest News & Number */}
            <Grid item container>
              <PageIdentifier pageNumber="05" pageTitle="LATEST NEWS" />
            </Grid>
          </Grid>
          <Grid
            item
            flexGrow={4}
            sx={{
              height: { xs: "auto", md: "100%" },
              width: { xs: "100%", md: "auto" },
            }}
          >
            {/** Image Scroll menu */}
            <Grid
              item
              container
              justifyContent={{ xs: "center", md: "flex-start" }}
              alignItems="flex-start"
              sx={{
                height: "100%",
                width: "100%",
              }}
            >
              <Hidden mdDown>
                {imageCardData.map((imageData) => (
                  <ImageCard
                    imageSrc={imageData.src}
                    imageText={imageData.description}
                  />
                ))}
              </Hidden>

              <Hidden mdUp>
                {/** smaller screen only one image */}
                {
                  <ImageCard
                    imageSrc={imageCardData[0].src}
                    imageText={imageCardData[0].description}
                  />
                }
              </Hidden>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item flexGrow={1}>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          justifyContent={{ xs: "flex-start", md: "center" }}
          sx={{ width: "100%", height: { xs: "100%", md: "100%" } }}
        >
          <ImageBanner />
        </Grid>
      </Grid>
    </>
  );
};

export default LatestNewsSection;
