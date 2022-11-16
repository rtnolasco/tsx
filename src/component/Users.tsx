import { resolve } from "path";
import React, { useState, useEffect } from "react";
import { setConstantValue } from "typescript";

import { IUsers } from "../Models/IUsers";
import { UsersService } from "../Services/UsersService";

interface IState2 {
  loading: boolean;
  users: IUsers[];
  errorMsg: string;
}

const Users: React.FC = () => {
  const [state, setState] = useState<IState2>({
    loading: false,
    users: [] as IUsers[],
    errorMsg: "",
  });

  //API request

  useEffect(() => {
    setState({ ...state, loading: true });
    UsersService.getAllUsers()
      .then((res) =>
        setState({
          ...state,
          loading: false,
          //   console.log(res.data)
          users: res.data,
        })
      )
      .catch((err) =>
        setState({
          ...state,
          loading: false,
          errorMsg: err.message,
        })
      );

    //eslint-disable-next-line
  }, []);

  const { loading, users, errorMsg } = state;
  return (
    <>
      <div className="Container">
        {errorMsg && <p>{errorMsg}</p>}
        {loading && <h1> Loading...</h1>}
        <h1>Data from APIs</h1>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>User Name</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
