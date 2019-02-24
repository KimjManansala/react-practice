import React from "react";

const Name = ({handleName, name}) => {
  return (
    <div className="field">
      <label className="label">Name</label>
      <div className="control">
        <input
          type="text"
          id="nameInput"
          className="input is-medium"
          onChange={(e)=>{handleName(e)}}
          value={name}
        />
      </div>
    </div>
  );
};

export default Name;
