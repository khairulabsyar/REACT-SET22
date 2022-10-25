import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function Profile() {
  const { user } = useSelector((state) => state.profile);
  return (
    <>
      <h1>This is your profile page, but sadly it is empty for now</h1>
      <Outlet />
    </>
  );
}

export default Profile;
