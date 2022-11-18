import React from "react";
import { useState } from "react";
import Users from "./Users";
import List from "./list";
import IState from "../utils/utils";

export const Home = () => {
  const [people, setPeople] = useState<IState["people"]>([
    {
      id: 2,
      name: "Lebron James",
      url: "",
      age: 36,
      note: "Allergic to teams mates",
    },
  ]);
  return (
    <div className="App">
      <h1>Riki Nolasco</h1>
      <List people={people} />
      <Users />
    </div>
  );
};
