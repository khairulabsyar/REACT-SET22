import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage, Hello, TSQHello } from "./Pages";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/tsq-hello" element={<TSQHello />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </>
  );
}

export default App;
