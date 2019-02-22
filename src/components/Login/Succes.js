import React from "react";

const Success = ({ method }) => {
  return (
    <React.Fragment>
      <h1>Succes!</h1>
      <button onClick={method}>Restart</button>
    </React.Fragment>
  );
};

export default Success