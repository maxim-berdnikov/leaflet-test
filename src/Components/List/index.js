import React from "react";

export const List = ({ points, onListItemHover }) => {
  const hadleListItemHover = (event) => {
    onListItemHover(event.target.innerText);
  };

  const hadleListItemOut = () => {
    onListItemHover("");
  };

  return (
    <ul className="list">
      {points.map((point, index) => {
        const pointKey = `${index}-${point.title}`;

        return (
          <li
            className="list__item"
            key={pointKey}
            onMouseEnter={hadleListItemHover}
            onMouseOut={hadleListItemOut}
          >
            {point.title}
          </li>
        );
      })}
    </ul>
  );
};
