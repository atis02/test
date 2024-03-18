import {
  Box,
  Drawer,
  IconButton,
  Stack,
  Typography,
  toggleButtonClasses,
} from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navData } from "./navData.mjs";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography
          sx={{
            width: { lg: "270px", xs: "120px" },
            borderTop: "1px solid #fff",
            borderBottom: "1px solid #fff",
            textDecoration: "none",
            padding: "10px 0",
            display: "flex",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "600",
            fontSize: { lg: "30px", xs: "15px" },
          }}
        >
          ALEX.SHEVTSOV
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: { lg: "block", xs: "none" } }}
        >
          {navData.map((item) => (
            <NavLink key={item.id} to={item.nav} className="nav-link">
              {item.title}
            </NavLink>
          ))}
        </Stack>
        <Stack direction="row" spacing={1}>
          <Stack direction="row" spacing={2} alignItems="center">
            <span
              style={{
                border: "1px solid #fff",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "100px",
              }}
            >
              <img src="/images/Frame.png" alt="" />
            </span>
            <Stack sx={{ display: { lg: "block", xs: "none" } }}>
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "25px",
                  color: "#fff",
                  fontWeight: "600",
                }}
              >
                8-345-123-34-45
              </Link>
            </Stack>
          </Stack>
          <Stack sx={{ display: { lg: "none", xs: "block" } }}>
            <IconButton onClick={toggleMobileMenu}>
              <img src="/images/menu.png" alt="" />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileMenuOpen}
              onClose={toggleMobileMenu}
              sx={{
                "& .MuiDrawer-paper": {
                  width: "100%",
                },
              }}
            >
              <Box
                sx={{
                  bg: "#fff",
                  height: "100%",
                  color: "#000",
                  padding: "16px 0",
                }}
              >
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  height="100vh"
                  spacing={2}
                >
                  <IconButton onClick={() => setMobileMenuOpen(false)}>
                    X
                  </IconButton>
                  {navData.map((item) => (
                    <NavLink
                      key={item.id}
                      style={{ color: "#000" }}
                      to={item.nav}
                      className="nav-link"
                    >
                      {item.title}
                    </NavLink>
                  ))}
                </Stack>
              </Box>
            </Drawer>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
