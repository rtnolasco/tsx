import React from "react";
import { Outlet } from "react-router-dom";

export const User = () => {
  return (
    <>
      <h2>
        <Outlet />
      </h2>
    </>
  );
};
