import * as React from "react";
import { TextField, Box } from "@mui/material";

function VisibleLabel() {
  const [color, setcolor] = React.useState("#3A3A3A");
  const [showError, setShowError] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  const handleOnFocus = () => {
    setcolor("#09A3A9");
  };

  const handleOnBlur = () => {
    setcolor("#3A3A3A");
  };

  const handleOnChange = (e) => {
    if (e.target["value"].length >= 25) {
      setShowError(true);
      setcolor("#3A3A3A");
    } else {
      setShowError(false);
    }
    let inputType = e.target["value"];
    inputType = parseInt(inputType);
    if (!isNaN(inputType)) {
      setDisabled(true);
      setShowError(true);
      setcolor("#3A3A3A");
    } else {
      setDisabled(false);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <label style={{ color: color }}>Label</label>
      <TextField
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        placeholder="Hint text here..."
        error={showError}
        helperText={showError ? "Error message here" : ""}
        disabled={disabled}
        inputProps={{ maxLength: 25 }}
        sx={{ width: "50ch" }}
      />
    </Box>
  );
}

export default VisibleLabel;
