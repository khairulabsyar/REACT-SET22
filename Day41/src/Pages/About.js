import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  const users = [
    { id: "1", fullName: "Absyar" },
    { id: "2", fullName: "Jun" },
    { id: "3", fullName: "Hanafi" },
  ];
  return (
    <>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={`/about/${user.id}`}>{user.fullName}</Link>
        </li>
      ))}
      <Outlet />
    </>
  );
}

export default About;
