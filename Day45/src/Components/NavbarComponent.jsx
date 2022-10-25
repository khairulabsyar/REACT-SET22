import React from "react";
import { NavLink } from "react-router-dom";

function NavbarComponent(props) {
  return (
    <>
      <NavLink to={`/${props.url}`} style={props.style}>
        {props.name}
      </NavLink>
    </>
  );
}

export default NavbarComponent;
