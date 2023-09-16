import styles from "./page.module.css";
import Button from "@mui/material/Button";
import { Box, Grid, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import CustomButton from "./components/CustomButton";

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
            width: { xs: "100vw", md: "613px" },
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
      <Box
        sx={{
          height: "100vh",
          background: "linear-gradient(180deg, #052133 0%, #041D2F 100%)",
          margin: 0,
          padding: 0,
        }}
      ></Box>

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
