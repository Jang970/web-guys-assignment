import { Button, Grid, Hidden, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../CustomButton";

const links = [
  "Products",
  "About ENL",
  "Multibeam Technology",
  "News",
  "Resources",
  "Contact",
];

const smallerScreenLinks = [
  "Products",
  "About",
  "News",
  "Resources",
  "Contact",
];
const socials = ["Facebook", "Instagram", "Youtube"];

const offices = ["Offices", "Auckland - NZ", "Essex - UK"];

const ContactsSection = () => {
  return (
    <>
      {/** Main container 1 */}
      <Grid item sx={{ height: "auto" }} flexGrow={1}>
        <Grid
          item
          container
          direction="column"
          sx={{ height: "100%", pl: { xs: "15px", md: "30px" } }}
        >
          <Grid
            item
            sx={{
              width: { xs: "350px", md: "400px" },
            }}
            flexGrow={1}
          >
            <Typography variant="subtitle2" fontSize={{ xs: 16, md: 24 }}>
              Dui duis facilisis id et ullamcorper diam est. Vulputate ac magna
              in id.
            </Typography>
          </Grid>
          <Grid item flexGrow={2}>
            <CustomButton
              text="Contact"
              imageSrc="/images/ArrowRight.svg"
              imageAlt="arrow-right"
              imageWidth={30}
              imageHeight={30}
            />
          </Grid>
          <Grid item flexGrow={1}>
            <Button
              sx={{
                textTransform: "none",
                textDecoration: "underline",
                color: "white",
                m: "0px",
                p: "0px",
              }}
            >
              <Typography variant="subtitle2" fontSize={{ xs: 14, md: 16 }}>
                Subscribe to our newsletter
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/** Main container 2 */}
      <Grid item sx={{ height: "auto" }} flexGrow={1}>
        <Grid
          container
          item
          alignItems="center"
          justifyContent="center"
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          <Grid item sx={{ height: "100%" }} flexGrow={1}>
            <Grid
              container
              item
              sx={{ height: "100%", pl: { xs: "15px", md: "0px" } }}
              justifyContent={{ xs: "flex-start", md: "space-evenly" }}
            >
              <Grid item>
                <Grid container item direction="column" sx={{ height: "100%" }}>
                  {/** Links */}
                  <Grid item flexGrow={{ md: 3 }}>
                    <Button
                      sx={{
                        textTransform: "none",
                        textDecoration: "underline",
                        color: "white",
                        m: "0px",
                        p: "0px",
                        minWidth: "0px",
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        fontSize={{ xs: 14, md: 16 }}
                        sx={{ p: "0px", m: "0px" }}
                      >
                        Home
                      </Typography>
                    </Button>
                    <Hidden mdDown>
                      {links.map((link) => (
                        <Typography
                          variant="subtitle2"
                          fontSize={{ xs: 14, md: 16 }}
                          sx={{ mb: "4px" }}
                        >
                          {link}
                        </Typography>
                      ))}
                    </Hidden>
                    <Hidden mdUp>
                      {smallerScreenLinks.map((link) => (
                        <Typography
                          variant="subtitle2"
                          fontSize={{ xs: 14, md: 16 }}
                          sx={{ mb: "4px" }}
                        >
                          {link}
                        </Typography>
                      ))}
                    </Hidden>
                  </Grid>
                  {/** Socials */}
                  <Grid
                    item
                    flexGrow={{ md: 1 }}
                    sx={{
                      mt: { xs: "16px", md: "0px" },
                    }}
                  >
                    {socials.map((social) => (
                      <Typography
                        variant="subtitle2"
                        fontSize={{ xs: 14, md: 16 }}
                        sx={{ mb: "4px" }}
                      >
                        {social}
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid
                  container
                  item
                  direction="column"
                  sx={{ height: "100%", ml: { xs: "52px", md: "0px" } }}
                >
                  {/** Offices text */}
                  <Grid item flexGrow={{ xs: 4, md: 5 }}>
                    {offices.map((office) => (
                      <Typography
                        variant="subtitle2"
                        fontSize={{ xs: 14, md: 16 }}
                      >
                        {office}
                      </Typography>
                    ))}
                  </Grid>
                  {/** Copyright WASSP */}
                  <Grid item flexGrow={{ xs: 5, md: 1 }}>
                    <Typography
                      variant="subtitle2"
                      fontSize={{ xs: 14, md: 16 }}
                    >
                      ©2023 WASSP
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactsSection;
