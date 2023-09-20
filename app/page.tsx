"use client";
import styles from "./page.module.css";
import {
  Box,
  Grid,
  Hidden,
  LinearProgress,
  Typography,
  Link,
  Card,
} from "@mui/material";
import Navbar from "./components/Navbar";
import CustomButton from "./components/CustomButton";
import Image from "next/image";
import FeaturesSection from "./components/FeaturesSection";
import ImageCard from "./components/ImageCard";

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
        <Grid item>
          <Navbar />
        </Grid>
        {/** Add 120px padding & main content section */}

        {/** SEA IT ALL TEXT */}
        <Grid
          item
          sx={{
            px: "30px",
            width: { xs: "370px", md: "613px" },
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
            sx={{ fontSize: { xs: "42px", md: "60px" } }}
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
            width: { xs: "400px", md: "820px" },
            zIndex: "1",
            ml: { xs: "16px", md: "60px" },
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
            sx={{ width: { md: "820px" }, ml: { xs: "16px", md: "70px" } }}
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
              ml: { xs: "16px", md: "470px" },
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
        <Grid
          container
          item
          sx={{
            mb: "16px",
            px: { xs: "16px", md: "30px" },
            py: { xs: "30px", md: "0px" },
            pt: { xs: "48px", md: "0px" },
          }}
          direction={{ xs: "column", md: "row" }}
          flexGrow={{ xs: 1, md: 0 }}
        >
          {/** Title section */}
          <Grid item flexGrow={1}>
            <Grid item container direction="column">
              <Grid item order={{ xs: 2, md: 1 }}>
                <Grid item container alignItems="center">
                  <Grid item>
                    <Typography variant="subtitle1" fontSize={12}>
                      01
                    </Typography>
                  </Grid>
                  <Grid item sx={{ width: "128px", mx: "8px" }}>
                    <LinearProgress
                      color="inherit"
                      variant="determinate"
                      sx={{ height: "2" }}
                      value={30}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" fontSize={12}>
                      03
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Hidden mdDown>
                <Grid item sx={{ my: "16px" }} order={2}>
                  <Typography variant="subtitle2" fontSize={12}>
                    (FISHING SERIES)
                  </Typography>
                </Grid>
              </Hidden>

              <Grid item order={{ xs: 1, md: 3 }}>
                <Typography
                  variant="h3"
                  fontSize={{ xs: "45px", md: "100px" }}
                  marginBottom={{ xs: "16px", md: "0px" }}
                >
                  F - SERIES
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/** Info section */}
          <Grid item>
            <Grid
              item
              container
              direction="column"
              justifyContent="flex-end"
              sx={{ height: "100%" }}
            >
              <Grid item>
                <Typography
                  variant="subtitle2"
                  fontSize={{ xs: "14px", md: "16px" }}
                >
                  F - SERIES
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  width: "350px",
                  mb: { xs: "16px", md: "24px" },
                  mt: "8px",
                }}
              >
                <Typography
                  variant="subtitle2"
                  fontSize={{ xs: "14px", md: "16px" }}
                >
                  WASSP Multibeam finds fish and habitat over a wider area than
                  single-beam systems.
                </Typography>
              </Grid>
              <Grid item>
                <Link
                  href="#"
                  color="inherit"
                  variant="subtitle1"
                  fontSize={{ xs: "14px", md: "16px" }}
                >
                  Explore Now
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Features */}
      <Grid
        container
        direction="column"
        alignContent="center"
        sx={{
          height: { xs: "150vh", md: "160vh" },
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
        {/** TODO: Moving background? */}
        <Grid
          container
          item
          justifyContent="center"
          direction={{ xs: "column", md: "row" }}
          sx={{ height: "100%" }}
        >
          <Grid
            item
            sx={{ height: { xs: "0%", md: "33%" } }}
            flexGrow={{ xs: 1, md: 3 }}
          >
            <Grid item container alignItems="flex-end" sx={{ height: "100%" }}>
              <Grid
                item
                sx={{
                  pl: "15px",
                  pr: { xs: "64px", md: "124px" },
                }}
              >
                <Typography variant="subtitle2">04</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2">TESTIMONIALS</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item flexGrow={{ xs: 5, md: 2 }}>
            <Grid
              item
              container
              direction="column"
              justifyContent={{ xs: "flex-start", md: "center" }}
              sx={{
                height: "100%",
                pl: { xs: "15px", md: "0px" },
                pt: { xs: "32px", md: "0px" },
              }}
            >
              <Grid
                item
                sx={{
                  width: { xs: "350px", md: "1100px" },
                }}
              >
                <Hidden mdDown>
                  <Typography variant="h3" fontSize={60}>
                    “WASSP LETS ME GO TO WHERE I WOULD NEVER HAVE FISHED BEFORE,
                    GIVING ME A HIGHER CATCH WITH REDUCED FUEL CONSUMPTION.”
                  </Typography>
                </Hidden>
                <Hidden mdUp>
                  <Typography variant="h3" fontSize={30}>
                    WASSP LETS ME GO TO WHERE I WOULD NEVER HAVE FISHED BEFORE,
                    GIVING ME A HIGHER VALUE CATCH, WITH REDUCED FUEL
                    CONSUMPTION.”
                  </Typography>
                </Hidden>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    width: "170px",
                    mt: "30px",
                  }}
                >
                  Dominique Faou Owner/Skipper, France
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
        }}
      >
        <Grid item sx={{ backgroundColor: "red" }} flexGrow={3}>
          <Grid item container sx={{ height: "100%" }}>
            <Grid item sx={{ backgroundColor: "blue" }} flexGrow={9}>
              {/** Latest News & Number */}
              <Grid item container>
                <Grid item>05</Grid>
                <Grid item>LATEST NEWS</Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                backgroundColor: "gray",
              }}
            >
              {/** Image Scroll menu */}
              <Grid
                item
                container
                sx={{
                  backgroundColor: "greenyellow",
                }}
              >
                <Grid item>
                  <ImageCard />
                </Grid>
                <Grid item>
                  <ImageCard />
                </Grid>
                <Grid item>
                  <ImageCard />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ backgroundColor: "green" }} flexGrow={1}>
          Image Banner Goes Here
        </Grid>
      </Grid>

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
