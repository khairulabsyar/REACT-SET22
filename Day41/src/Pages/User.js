import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function User() {
  const { userId } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h2>This is the user page {userId}</h2>
      <br />
      <Button
        onClick={(e) => {
          e.preventDefault();
          navigate("/about");
        }}
      >
        Back
      </Button>
    </>
  );
}

export default User;
