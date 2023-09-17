import { Typography } from "@mui/material";
import React from "react";

interface CustomTypographyProps {
  text: string;
  fontSize: string;
}

const CaptionTypography: React.FC<CustomTypographyProps> = ({
  text,
  fontSize,
}) => {
  return (
    <Typography variant="subtitle2" sx={{ fontSize }}>
      {text}
    </Typography>
  );
};

export default CaptionTypography;
