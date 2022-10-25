import {
  Box,
  CircularProgress,
  FormControlLabel,
  Switch,
  Button,
} from "@mui/material";
import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

function HomePage() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    if (!loading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }

  return (
    <>
      <h1>BUTT0N</h1>
      <FormControlLabel
        sx={{
          display: "block",
        }}
        control={
          <Switch
            checked={loading}
            onChange={() => setLoading(!loading)}
            color="primary"
          />
        }
        label={loading ? "yeah im loading for you" : "Click ME!!!"}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          backgroundColor: "lightred",
          padding: 2,
          border: 1,
          "& button": { m: 1 },
        }}
      >
        <LoadingButton
          size="small"
          onClick={handleClick}
          loading={loading}
          loadingIndicator={<CircularProgress color="secondary" />}
          variant="outlined"
          sx={loading ? { width: "100px", height: "100px" } : {}}
        >
          Lunch Small
        </LoadingButton>

        <LoadingButton
          size="medium"
          onClick={handleClick}
          loading={loading}
          loadingIndicator={<CircularProgress color="success" />}
          variant="outlined"
          sx={loading ? { width: "200px", height: "100px" } : {}}
        >
          Medium Lunch
        </LoadingButton>

        <LoadingButton
          size="large"
          onClick={handleClick}
          loading={loading}
          loadingIndicator="Yeah, wait for Elon to go Mars"
          variant="outlined"
          color="error"
          sx={loading ? { width: "300px", height: "100px" } : {}}
        >
          To The Moon?
        </LoadingButton>

        <Button variant="contained" color="success" onClick={handleClick}>
          {loading ? "I wont follow you" : <CircularProgress color="error" />}
        </Button>
        <Button
          sx={{
            overflow: "hidden",
            my: 2,
            p: 1,
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#101010" : "grey.100",
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            border: "1px solid",
            borderRadius: 2,
            fontSize: "0.875rem",
            fontWeight: "700",
          }}
          disabled
        >
          I'm forever Disabled
        </Button>
      </Box>
    </>
  );
}

export default HomePage;
