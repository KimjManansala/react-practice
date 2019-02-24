import React from "react";
import FunPeeps from "./FunPeeps";

const FunPeepContainer = ({ people, method}) => {

  return (
    <React.Fragment>
      {people.map((peep, index) => (
        <FunPeeps key={index} reason={peep.reason} name={peep.name} method={method}/>
      ))}
    </React.Fragment>
  );
};

export default FunPeepContainer;
