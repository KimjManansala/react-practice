import React from "react";

const FunPeeps = ({number, reason, name, method}) => {
  return (
    <div className="column is-4">
      <div className="box content is-medium">
        <p>{name} is fun because {reason}</p>
        <button onClick={(evt)=>{method(evt, name, reason)}} className="button is-link">Remove {name}</button>
      </div>
    </div>
  );
};

export default FunPeeps;
