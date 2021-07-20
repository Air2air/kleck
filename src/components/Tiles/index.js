import React, { Component } from "react";
import ReactTransitionGroup from 'react-addons-transition-group' // ES6
import StackGrid from "react-stack-grid";


export const Tiles = () => {
  return (
    <ReactTransitionGroup component="StackGrid">
    <StackGrid
    columnWidth={150}
  >
    <div key="key1">Item 1</div>
    <div key="key2">Item 2</div>
    <div key="key3">Item 3</div>
  </StackGrid>
  </ReactTransitionGroup>
  )
}
