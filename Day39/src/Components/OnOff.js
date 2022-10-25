import React from "react";
import { useState } from "react";
function OnOff() {
  const [condition, setCondition] = useState("Off");

  // const handleOn = () => {
  //   setCondition("On");
  // };

  // const handleOff = () => {
  //   setCondition("Off");
  // };

  //   return (
  //     <>
  //       <h1>This toogle is {condition}</h1>
  //       <button onClick={() => handleOn()}>On</button>
  //       <button onClick={() => handleOff()}>Off</button>
  //     </>
  //   );

  return (
    <>
      <h1>This toogle is {condition}</h1>
      <button onClick={() => setCondition("On")}>On</button>
      <button onClick={() => setCondition("Off")}>Off</button>
    </>
  );
}

export default OnOff;
