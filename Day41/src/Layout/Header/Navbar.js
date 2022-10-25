import React from "react";
import UseTheme from "../../Hooks/UseTheme";
import Avatar from "../../Components/Avatar";

function Navbar() {
  const theme = UseTheme();
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignContent: "center",
        padding: "20px 30px",
        borderRadius: `1px solid ${theme.color}`,
      }}
    >
      <Avatar />
    </nav>
  );
}

export default Navbar;
