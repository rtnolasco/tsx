import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

export const User = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUser = searchParams.get("userid") === "active";
  return (
    <>
      <div>
        <h2>
          <Outlet />
        </h2>
        <button onClick={() => setSearchParams({ userid: "active" })}>Active User</button>
        <button onClick={() => setSearchParams({})}>Reset</button>
      </div>
      {showActiveUser ? <h2>showing active users</h2> : <h2>Showing Users</h2>}
    </>
  );
};
