import styles from "./page.module.css";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Landing Page */}
      <Box
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
        <Navbar />
      </Box>

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
