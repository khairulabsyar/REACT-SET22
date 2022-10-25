import React from "react";
import NavbarComponent from "./NavbarComponent";

const linkList = [
  // { url: "", name: "HomePage" },
  { url: "hello", name: "Hello" },
  { url: "tsq-hello", name: "TSQ-Hello" },
];

const style = ({ isActive }) => ({
  fontWeight: isActive ? "bold" : "normal",
});

function NavBar() {
  return (
    <>
      {linkList.map((list) => {
        return (
          <NavbarComponent url={list.url} name={list.name} style={style} />
        );
      })}
    </>
  );
}

export default NavBar;
