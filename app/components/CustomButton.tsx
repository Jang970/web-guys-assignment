"use client";
import Button from "@mui/material/Button";
import Image from "next/image";

// MUI Button with custom styling

import React from "react";

interface CustomButtonProps {
  text: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
}) => {
  return (
    <Button
      color="inherit"
      variant="outlined"
      sx={{
        borderRadius: "50px",
        textTransform: "capitalize",
        px: "30px",
        py: "10px",
      }}
    >
      {text}
      {imageSrc && imageAlt && imageHeight && imageWidth && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
        />
      )}
    </Button>
  );
};

export default CustomButton;
