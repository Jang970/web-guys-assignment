"use client";
import styles from "./page.module.css";
import {
  Box,
  Grid,
  Hidden,
  LinearProgress,
  Typography,
  Link,
  Button,
} from "@mui/material";
import Navbar from "./components/Navbar";
import CustomButton from "./components/CustomButton";
import Image from "next/image";
import FeaturesSection from "./components/sections/FeaturesSection";
import LatestNewsSection from "./components/sections/LatestNewsSection";
import PageIdentifier from "./components/PageIdentifier";
import ContactsSection from "./components/sections/ContactsSection";
import LandingPageSection from "./components/sections/LandingPageSection";
import AboutSection from "./components/sections/AboutSection";
import FSeriesSection from "./components/sections/FSeriesSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main className={styles.main} style={{ overflowX: "hidden" }}>
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
        <LandingPageSection />
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

        <AboutSection />
      </Grid>

      {/* F-Series */}
      <Grid
        container
        direction="column"
        justifyContent={{ xs: "flex-start", md: "flex-end" }}
        sx={{
          height: "100vh",
          background:
            "linear-gradient(180deg, #041D2F 0%, rgba(4, 29, 47, 0.00) 28.65%, rgba(4, 25, 43, 0.00) 73.18%, #04192B 100%), url(/images/02.jpg), lightgray 50% / cover no-repeat",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <FSeriesSection />
      </Grid>

      {/* Features */}
      <Grid
        container
        direction="column"
        alignContent="center"
        sx={{
          height: { xs: "150vh", md: "200vh" },
          background: "linear-gradient(180deg, #04192B 0%, #000719 100%)",
          margin: 0,
          padding: "120px",
          px: "30px",
          position: "relative",
          overflowX: "hidden",
        }}
      >
        {/** background layers image */}
        <Box
          sx={{
            position: "absolute",
            width: { xs: "95vw", md: "600px" },
            left: { xs: "10px", md: "350px" },
            top: "550px",
          }}
        >
          <Image
            src="/images/Layers2.svg"
            alt="background-image"
            width={1000}
            height={1000}
            layout="responsive"
          />
        </Box>

        <FeaturesSection />
      </Grid>

      {/* Testimonials */}
      <Grid
        container
        direction="column"
        sx={{
          height: "100vh",
          background: "#000719",
          margin: 0,
          padding: 0,
        }}
      >
        <TestimonialsSection />
      </Grid>

      {/* Latest News */}
      <Grid
        container
        direction="column"
        sx={{
          height: "100vh",
          background: "#000719",
          margin: 0,
          padding: 0,
          pt: { xs: "0px", md: "60px" },
        }}
      >
        <LatestNewsSection />
      </Grid>

      {/* Contacts */}
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        sx={{
          height: "100vh",
          background: "#000719",
          position: "relative",
          margin: 0,
          padding: 0,
          pt: { xs: "0px", md: "120px" },
          pb: "160px",
        }}
      >
        {/** background LOGO */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "200px", md: "-60px" },
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90vw", md: "85vw" },
          }}
        >
          <Image
            src="/images/WasspMultibeam.svg"
            alt="background-image"
            width={1000}
            height={1000}
            layout="responsive"
          />
        </Box>
        <ContactsSection />
      </Grid>
    </main>
  );
}
