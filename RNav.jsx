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
import ClearIcon from '@mui/icons-material/Clear';

import { styled } from "@mui/system";
import { Link } from "react-router-dom";

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

const CustomTypography = styled(Typography)(({ theme }) => ({
  marginRight: "10px",
  pt: 3,
  cursor: 'pointer',

  whiteSpace: 'nowrap', 
  overflow: 'hidden', 
  textOverflow: 'ellipsis', 
}));

const RNav = () => {
  const NavItems = [
    {name:"Who We Are",link:"who"},
    {name:"Fashioning Possibilities",link:"fashion"},
    {name:"Our Bussinesses",link:"bussiness"},
    {name:"Investors",link:"investors"},
    {name:"Sustainability",link:"sus"},
    {name:"CSR",link:"csr"},
    {name:"Media",link:"media"},
    {name:"Careers",link:"careers"},
    {name:"Contact Us",link:"contact"},
  ];
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
            {NavItems.map((nav) => (
              <CustomBox>
                <CustomTypography
                  variant="topic2"
                  component="div"
                  sx={{ marginRight: "10px", pt: 3 }}
                >
                  <Link to={nav.link} className="link">{nav.name}</Link>
                </CustomTypography>
              </CustomBox>
            ))}
            <SearchIcon sx={{ mt: 3.2}} />
          </Box>
        </Toolbar>
      </AppBar>
    <Box>
        <Link to='/'>Home</Link>
    </Box>
    </div>
  );
};

export default RNav;
