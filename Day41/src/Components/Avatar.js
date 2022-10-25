import React from "react";
import UseTheme from "../Hooks/UseTheme";

function Avatar() {
  const theme = UseTheme();

  return (
    <img
      src={`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png`}
      alt={"user"}
      style={{
        width: 50,
        height: 50,
        borderRadius: "25%",
        border: `2px solid ${theme.color}`,
      }}
    ></img>
  );
}

export default Avatar;
