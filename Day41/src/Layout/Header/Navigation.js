import React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import UseAuth from "../../Hooks/UseAuth";

function Navigation() {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
  });

  const { logout, token } = UseAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: 50,
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: 1,
          pl: 1,
        }}
      >
        <NavLink to="/google" style={style}>
          Google
        </NavLink>
        <NavLink to="/about" style={style}>
          About
        </NavLink>
        <NavLink to="/advertising" style={style}>
          Advertising
        </NavLink>
        <NavLink to="/business" style={style}>
          Business
        </NavLink>
        <NavLink to="/how-search-works" style={style}>
          How Search Works
        </NavLink>
        <NavLink to="/admin" style={style}>
          Admin
        </NavLink>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 1,
          pr: 1,
        }}
      >
        <NavLink to="/privacy" style={style}>
          Privacy
        </NavLink>
        <NavLink to="/terms" style={style}>
          Terms
        </NavLink>
        <NavLink to="/setting" style={style}>
          Setting
        </NavLink>
        {token ? <Button onClick={() => handleLogout()}>Log Out</Button> : null}
      </Box>
    </Box>
  );
}

export default Navigation;
