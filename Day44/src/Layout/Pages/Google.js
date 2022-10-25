import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import CssTextField from "../Assets/CssTextField";
import { useDispatch, useSelector } from "react-redux";

const SearchField = CssTextField();

function Google() {
  const [input, setInput] = useState("");
  // check index.js in Store why state.home and state.profile
  const { title, description } = useSelector((state) => state.home);
  const { name } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  // since using index.js it will automatilly find the type based in combineReducers
  const setName = (name) => dispatch({ type: "SET_NAME", payload: name });
  const setEmail = (email) => dispatch({ type: "SET_EMAIL", payload: email });
  const setTitleAndDescription = (title, description) =>
    dispatch({
      type: "SET_HOME_STATE",
      payload: { title: title, description: description },
    });

  const setResetitleAndDescription = () =>
    dispatch({ type: "RESET_HOME_STATE" });

  useEffect(() => {
    setName("Absyar");
    setEmail("Khairul@absyar.com");

    setTitleAndDescription("Hello World", "this is home Page");

    setTimeout(() => {
      setResetitleAndDescription();
    }, 2500);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You have searched for ${input}`);
    setInput("");
  };

  return (
    <>
      <Box
        sx={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>
          Dear {name}, {title}, {description}
        </h1>
        <form onSubmit={handleSubmit}>
          <SearchField
            fullWidth
            label="Search"
            id="search"
            value={input}
            onInput={(e) => setInput(e.target.value)}
          />
        </form>
      </Box>
    </>
  );
}

export default Google;
