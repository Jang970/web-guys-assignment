"use client";
import styles from "./page.module.css";
import { Box, Grid, Hidden, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import CustomButton from "./components/CustomButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Landing Page */}
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        sx={{
          height: "100vh",
          margin: 0,
          padding: 0,
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, #052133 100%), url(/images/01.jpg), lightgray 50% / cover no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid item>
          <Navbar />
        </Grid>
        {/** Add 120px padding & main content section */}

        {/** SEA IT ALL TEXT */}
        <Grid
          item
          sx={{
            px: "30px",
            width: { xs: "450px", md: "613px" },
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
            sx={{ fontSize: { xs: "48px", md: "60px" } }}
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
      </Grid>

      {/* About */}
      {/** TODO: Add Animations */}
      <Grid
        container
        direction="column"
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="center"
        sx={{
          height: "100vh",
          background: "linear-gradient(180deg, #052133 0%, #041D2F 100%)",
          margin: 0,
          padding: 0,
          position: "relative",
        }}
      >
        {/** background layers image */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: "-320px", md: "-250px" },
            left: { xs: "-10px", md: "0px" },
            width: { xs: "800px", md: "900px" },
          }}
        >
          <Image
            src="/images/Layers.svg"
            alt="background-image"
            width={1000}
            height={1000}
            layout="responsive"
          />
        </Box>

        {/** Title */}
        <Grid
          item
          sx={{
            width: { xs: "370px", md: "820px" },
            zIndex: "1",
            ml: { xs: "30px", md: "60px" },
            mb: { xs: "16px", md: "30px" },
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "30px", md: "60px" } }}
          >
            WELCOME TO THE WORLD OF WASSP MULTIBEAM
          </Typography>
        </Grid>

        <Grid item>
          {/** Sub title */}
          <Grid
            item
            container
            justifyContent="flex-start"
            sx={{ width: { md: "820px" }, ml: { xs: "30px", md: "70px" } }}
          >
            <Grid item sx={{ mr: { xs: "60px", md: "120px" } }}>
              <Typography sx={{ fontSize: { xs: "12px", md: "14px" } }}>
                01
              </Typography>
            </Grid>

            <Grid item sx={{ mr: "170px" }}>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "14px" },
                  display: { xs: "none", md: "block" },
                }}
              >
                ABOUT WASSP
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "14px" },
                  display: { xs: "block", md: "none" },
                }}
              >
                ABOUT
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                width: { xs: "370px", md: "355px" },
                mt: { xs: "32px", md: "0px" },
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "14px", md: "16px" } }}
              >
                WASSP, a powerful multi-beam sounder with 120-degree coverage
                and models for deep exploration, offers unparalleled accuracy,
                detail, and versatility. Target fish with steerable sounders,
                generate real-time 3D charts, map fish in water, and make better
                decisions with the user-friendly advanced mode.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            sx={{
              ml: { xs: "30px", md: "470px" },
              mt: { xs: "48px", md: "30px" },
            }}
          >
            {/** Button */}
            <CustomButton
              text="Our Story"
              imageSrc="/images/ArrowRight.svg"
              imageAlt="arrow-right"
              imageWidth={30}
              imageHeight={30}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* F-Series */}
      <Box
        sx={{
          height: "100vh",
          background:
            "linear-gradient(180deg, #041D2F 0%, rgba(4, 29, 47, 0.00) 28.65%, rgba(4, 25, 43, 0.00) 73.18%, #04192B 100%), url(/images/02.jpg), lightgray 50% / cover no-repeat",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></Box>

      {/* Features */}
      <Box
        sx={{
          height: "100vh",
          background: "linear-gradient(180deg, #04192B 0%, #000719 100%)",
          margin: 0,
          padding: 0,
        }}
      ></Box>

      {/* Testimonials */}
      <Box
        sx={{
          height: "100vh",
          background: "#000719",
          margin: 0,
          padding: 0,
        }}
      ></Box>

      {/* Latest News */}
      <Box
        sx={{
          height: "100vh",
          background: "#000719",
          margin: 0,
          padding: 0,
        }}
      ></Box>

      {/* Contacts */}
      <Box
        sx={{
          height: "100vh",
          background: "#000719",
          margin: 0,
          padding: 0,
        }}
      ></Box>
    </main>
  );
}
