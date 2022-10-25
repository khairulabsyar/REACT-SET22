import React from "react";
import { useState } from "react";
export function ColourPicker() {
  const [color, setColor] = useState("");
  const divStyle = { backgroundColor: color };

  return (
    <div style={divStyle}>
      <p>This color is {color}</p>
      <button onClick={() => setColor("aquamarine")}>Aquamarine</button>
      <button onClick={() => setColor("blueviolet")}>BlueViolet</button>
      <button onClick={() => setColor("chartreuse")}>Chartreuse</button>
      <button onClick={() => setColor("cornflowerblue")}>CornflowerBlue</button>
    </div>
  );
}
