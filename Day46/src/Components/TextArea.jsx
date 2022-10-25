import React from "react";
import { TextareaAutosize } from "@mui/material";
import { Box } from "@mui/system";

function TextArea() {
  const [color, setcolor] = React.useState("#3A3A3A");
  const [disabled, setDisabled] = React.useState(false);
  const [count, setCount] = React.useState(0);

  const handleOnFocus = () => {
    setcolor("#09A3A9");
  };

  const handleOnBlur = () => {
    setcolor("#3A3A3A");
  };

  const handleOnChange = (e) => {
    setCount(e.target["value"].length);

    if (e.target["value"].length >= 100) {
      setcolor("#3A3A3A");
    } else {
      setcolor("#09A3A9");
    }

    let inputType = e.target["value"];
    inputType = parseInt(inputType);
    if (!isNaN(inputType)) {
      setDisabled(true);
      setcolor("#3A3A3A");
    } else {
      setDisabled(false);
    }
  };
  return (
    <>
      <label style={{ color: color }}>Label</label>
      <Box sx={{ width: "340px" }}>
        <Box sx={{ borderColor: color, border: 1, height: "100%", padding: 1 }}>
          <TextareaAutosize
            minRows={3}
            aria-label="maximum height"
            placeholder="Hint text here..."
            style={{ width: 320, height: 160 }}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            disabled={disabled}
            maxLength={100}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <label style={{ color: color }}>{count}/100</label>
        </Box>
      </Box>
    </>
  );
}

export default TextArea;
