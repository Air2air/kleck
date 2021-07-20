import React from "react";
import useScreenType from "react-screentype-hook";
import ReactTransitionGroup from "react-addons-transition-group";
import StackGrid from "react-stack-grid";
import "./styles.scss";
import investmentsJson from "./../../data/data.json";

const Tile = () => {
  const screenType = useScreenType();

  let colWidthPercent = 25;

  if (screenType.isMobile) {
    colWidthPercent = 50;
  } else {
    colWidthPercent = 33.333;
  }

  const listItems = investmentsJson.map((item) => (
    <div className="tile" key={item.id} style={{ backgroundColor: item.color }}>
      <h2>{item.category}</h2>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <div className="person">{item.person}</div>
    </div>
  ));
  return (
    <ReactTransitionGroup component="StackGrid">
      <StackGrid columnWidth={`${colWidthPercent}%`}>{listItems} </StackGrid>
    </ReactTransitionGroup>
  );
};

export default Tile;
