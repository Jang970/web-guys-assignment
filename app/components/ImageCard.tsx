"use client";

import { Button, Card, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface ImageCardProps {
  imageSrc: string;
  imageText: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, imageText }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: { xs: "330px", md: "411px" },
        height: { xs: "300px", md: "416px" },
        p: "16px",
        mx: "16px",
        backgroundColor: "transparent",
        borderColor: "white",
      }}
    >
      <Grid container direction="column" sx={{ height: "100%" }}>
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
              height: "30px",
              background: "linear-gradient(to bottom, #000719, transparent)",
              zIndex: "2",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "30px",
              background: "linear-gradient(to top, #000719, transparent)",
            },
          }}
          flexGrow={5}
        >
          <Image
            src={imageSrc}
            alt="card-img"
            layout="fill"
            objectFit="cover"
          />
        </Grid>
        <Grid item sx={{ pt: "16px" }} flexGrow={1}>
          <Typography
            variant="subtitle2"
            fontSize={{ xs: 16, md: 24 }}
            sx={{ color: "white" }}
          >
            {imageText}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              textTransform: "none",
            }}
          >
            <Typography
              variant="subtitle2"
              fontSize={14}
              sx={{ color: "white" }}
            >
              View
            </Typography>
            <ArrowForwardIcon sx={{ color: "white" }} />
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ImageCard;
