import React from "react";
import {
  AppBar,
  MenuItem,
  Toolbar,
  Box,
  Menu,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import Logo from "../img/Logo.svg";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

import { styled } from "@mui/system";

const CustomBox = styled(Box)(({ theme }) => ({
  position: "relative",
  cursor: "pointer",
  width: "auto",
  height: "60px",
  
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%) scaleX(0)",
    transformOrigin: "center",
    display: "block",
    height: "2px",
    width: "0",
    background: "#a31834",
    transition: "width .5s ease-out",
  },
  "&:hover::after": {
    width: "90%",
    transformOrigin: "center",
    transform: "translateX(-50%) scaleX(1)",
  },
}));

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  position: "relative",
  cursor: "pointer",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-8px",
    left: "50%",
    transform: "translateX(-50%) scaleX(0)",
    transformOrigin: "center",
    display: "block",
    height: "2px",
    width: "0",
    background: "#a31834",
    transition: "width .5s ease-out",
  },
  "&:hover::after, &:last-child:hover::after": {
    width: "100%",
    transformOrigin: "center",
    transform: "translateX(-50%) scaleX(1)",
  },
}));

const NavBar = () => {
  const car="careers"
  return (
    <div>
      <AppBar sx={{ bgcolor: "white", height: 80 }}>
        <Toolbar
          sx={{
            height: 80,
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
          }}
        >
          <img src={Logo} style={{ height: 50, width: "auto" }} />
          <Box
            sx={{
              width: "182px",
              height: "20px",
              borderBottom: "2px solid gold",
              marginLeft: "12px",
              marginBottom: "40px",
            }}
          />
          <Box
            sx={{
              color: "Grey",
              display: "flex",
              marginLeft: "30px",
              fontSize: "18px",
            }}
          >
            <CustomBox>
              <Typography
                variant="topic2"
                component="div"
                sx={{ marginRight: "10px",pt:3 }}
              >
                Who We Are
              </Typography>
            </CustomBox>
            <CustomBox>
              <Typography
                variant="topic2"
                component="div"
                sx={{ marginRight: "10px",pt:3 }}
              >
                Fashioning Possibilities
              </Typography>
            </CustomBox>
            <CustomBox>
              <Typography
                variant="topic2"
                component="div"
                sx={{ marginRight: "10px",pt:3 }}
              >
                Our Bussineses
              </Typography>
            </CustomBox>
            <CustomBox>
              <Typography
                variant="topic2"
                component="div"
                sx={{ marginRight: "10px",pt:3 }}
              >
                Investors
              </Typography>
            </CustomBox>
            <CustomBox>
              <Typography
                variant="topic2"
                component="div"
                sx={{ marginRight: "10px",pt:3 }}
              >
                Sustainability
              </Typography>
            </CustomBox>
            <CustomBox>
              <Typography
                variant="topic2"
                component="div"
                sx={{ marginRight: "10px",pt:3 }}
              >
                CSR
              </Typography>
            </CustomBox>
            <CustomBox>
            <Typography
              variant="topic2"
              component="div"
              sx={{ marginRight: "10px",pt:3 }}
            >
              Media
            </Typography>
            </CustomBox>
            <CustomBox>
            <Typography
              variant="topic2"
              component="div"
              sx={{ marginRight: "10px",pt:3 }}
            >
              <Link to={car}>Careers</Link>
            </Typography>
            </CustomBox>
            <CustomBox>
            <Typography
              variant="topic2"
              component="div"
              sx={{ marginRight: "10px",pt:3 }}
            >
              Contact Us
            </Typography>
            </CustomBox>
            <SearchIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
