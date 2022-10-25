import * as React from "react";
import { TextField, Box, InputAdornment } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

function Icon() {
  const [colour, setColour] = React.useState("#8A8A8A");
  const [showError, setShowError] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  const handleOnFocus = (e) => {
    if (e.target["value"].length >= 25) {
      setColour("#EB5757");
    } else {
      setColour("#09A3A9");
    }
  };

  const handleOnBlur = () => {
    setColour("#8A8A8A");
  };

  const handleOnChange = (e) => {
    if (e.target["value"].length >= 25) {
      setShowError(true);
      setColour("#EB5757");
    } else {
      setShowError(false);
      setColour("#09A3A9");
    }

    let inputType = e.target["value"];
    inputType = parseInt(inputType);
    if (!isNaN(inputType)) {
      setShowError(true);
      setDisabled(true);
      setColour("#C6CAC9");
    } else {
      setDisabled(false);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <TextField
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        placeholder="Label"
        error={showError}
        helperText={showError ? "Error message here" : ""}
        disabled={disabled}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <StarIcon sx={{ color: colour }} />
            </InputAdornment>
          ),
        }}
        inputProps={{ maxLength: 25 }}
        sx={{ width: "50ch" }}
      />
    </Box>
  );
}

export default Icon;
