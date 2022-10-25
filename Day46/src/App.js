import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  LabelInside,
  VisibleLabel,
  Icon,
  TailWind,
  DatePicker,
  TextArea,
} from "./Components";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<VisibleLabel />} />
        <Route path="/visible-label" element={<VisibleLabel />} />
        <Route path="/label-inside" element={<LabelInside />} />
        <Route path="/icon" element={<Icon />} />
        <Route path="/date-picker" element={<DatePicker />} />
        <Route path="/tailwind" element={<TailWind />} />
        <Route path="/text-area" element={<TextArea />} />
      </Routes>
    </>
  );
}

export default App;
