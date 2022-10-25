import React from "react";
import { Button } from "@mui/material";
import UseAuth from "../Hooks/UseAuth";

function Google() {
  const { login } = UseAuth();

  return (
    <>
      <Button onClick={() => login()}>Login</Button>
    </>
  );
}

export default Google;
