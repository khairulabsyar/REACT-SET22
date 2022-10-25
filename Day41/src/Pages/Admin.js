import React from "react";
import { Link, Outlet } from "react-router-dom";

function Admin() {
  const admins = [
    { id: "1", fullName: "Absyar" },
    { id: "2", fullName: "Jun" },
    { id: "3", fullName: "Hanafi" },
  ];
  return (
    <>
      {admins.map((admin) => (
        <li key={admin.id}>
          <Link to={`/admin/${admin.id}`}>{admin.fullName}</Link>
        </li>
      ))}
      <Outlet />
    </>
  );
}

export default Admin;
