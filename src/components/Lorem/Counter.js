import React from "react";

const Counter = ({ counter }) => {
  console.log(counter);
  return <h2>Number of Lorem Ipsum paragrpahs: {counter}</h2>;
};

export default Counter;
