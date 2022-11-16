import * as React from "react";

import IState from "../utils/utils";

const List: React.FC<IState> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List" key={person.name}>
          <div className="List_Header">
            <img className="List-img" src={person.url} alt="img" />
            <h2>{person.name}</h2>
          </div>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
