import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#09A3A9",
    },
  },
  typography: {
    fontFamily: {
      h1: { lineHeight: 51 },
    },
  },
});

export default Theme;
