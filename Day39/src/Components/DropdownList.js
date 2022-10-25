import React from "react";
import { useRef, useState } from "react";
import { DetectOutsideClick } from "../Hooks/DetectOutsideClick";

function DropdownList() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = DetectOutsideClick(dropdownRef, false);
  const [food, setFood] = useState("");
  const onClick = () => setIsActive(!isActive);

  return (
    <>
      <button onClick={onClick} className="menu-trigger">
        Click Me!
      </button>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li onClick={() => setFood("Nasi Lemak")}>Nasi Lemak</li>
          <li onClick={() => setFood("Roti Canai")}>Roti Canai</li>
          <li onClick={() => setFood("Chee Cheong Fun")}>Chee Cheong Fun</li>
        </ul>
      </nav>
      <h2>Selected food: {food}</h2>
    </>
  );
}
export default DropdownList;
