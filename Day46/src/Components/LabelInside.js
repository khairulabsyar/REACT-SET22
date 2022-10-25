import * as React from "react";
import { TextField, Box } from "@mui/material";

function LabelInside() {
  const [showError, setShowError] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  const handleOnChange = (e) => {
    if (e.target["value"].length >= 25) {
      setShowError(true);
    } else {
      setShowError(false);
    }
    let inputType = e.target["value"];
    inputType = parseInt(inputType);
    if (!isNaN(inputType)) {
      setDisabled(true);
      setShowError(true);
    } else {
      setDisabled(false);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <TextField
        onChange={handleOnChange}
        placeholder="Label"
        error={showError}
        helperText={showError ? "Error message here" : ""}
        disabled={disabled}
        inputProps={{ maxLength: 25 }}
        sx={{ width: "50ch" }}
      />
    </Box>
  );
}

export default LabelInside;
