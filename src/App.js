import React, { useState } from "react";
import { CITY, POINTS } from "./const";
import { List, Map } from "./Components";
import "./styles.scss";

export default function App() {
  const [selectedPoint, setSelectedPoint] = useState("");

  const onListItemHover = (listItemName) => {
    const currnentPoint =
      listItemName === ""
        ? ""
        : POINTS.find((point) => point.title === listItemName);

    setSelectedPoint(currnentPoint);
  };

  return (
    <React.Fragment>
      <header>
        <h1>Парки города {CITY.title}:</h1>
      </header>
      <main>
        <List points={POINTS} onListItemHover={onListItemHover} />
        <Map city={CITY} points={POINTS} selectedPoint={selectedPoint} />
      </main>
    </React.Fragment>
  );
}
