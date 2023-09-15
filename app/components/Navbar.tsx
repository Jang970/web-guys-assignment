"use client";
import {
  AppBar,
  Button,
  Grid,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const actions = ["SEARCH", "LOGIN"];

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none", pt: "16px" }}
    >
      <Toolbar>
        {/** LOGO */}
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item sx={{ width: { xs: "130px", md: "201px" } }}>
            <Image
              src="/images/Logo.svg"
              alt="Logo"
              height={35}
              width={201}
              layout="responsive"
            />
          </Grid>

          {/** NAV ITEMS */}
          <Grid item>
            {/** NAV ACTION BUTTONS TODO */}
            {actions.map((action) => (
              <Button
                color="inherit"
                sx={{ fontSize: { xs: "12px", md: "14px" } }}
              >
                {action}
              </Button>
            ))}

            {/** Language Selector TODO Perhaps change to Menu component?
             */}
            <Hidden mdDown>
              <Button color="inherit">
                <Typography variant="button" sx={{ mr: 1 }}>
                  EN
                </Typography>
                <Image
                  src="/images/ArrowDown.svg"
                  alt="Logo"
                  height={35}
                  width={201}
                  layout="responsive"
                />
              </Button>
            </Hidden>
            <IconButton
              aria-label="menu"
              sx={{
                width: { xs: "35px", md: "38px" },
                height: { xs: "35px", md: "38px" },
                ml: { xs: 1, md: 2 },
              }}
            >
              <Image
                src="/images/Menu.svg"
                alt="hamburger-stack"
                layout="responsive"
                height={40}
                width={40}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
