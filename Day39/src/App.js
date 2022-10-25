import React from "react";
import { ExampleOne } from "./Components/ExampleOne";
import ExampleOneFunction from "./Components/ExampleOneFunction";
import OnOff from "./Components/OnOff";
import { ColourPicker } from "./Components/ColorPicker";
import ChangeTitle from "./Components/ChangingTitle";
import Counter from "./Components/Counter";
import CustomHook from "./Components/CustomHook";
import DropdownList from "./Components/DropdownList";
import "./App.css";

function App() {
  return (
    <>
      <ExampleOne src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg" />
      <ExampleOneFunction src={process.env.PUBLIC_URL + "Rectangle6.png"} />
      <OnOff />
      <ColourPicker />
      <ChangeTitle />
      <Counter />
      <CustomHook />
      <DropdownList />
    </>
  );
}

export default App;
