import React from "react";

const ReasonTheyFun = ({handleReason, reason}) => {
  return (
    <div className="field">
      <label className="label">Reason they are fun</label>
      <div className="control">
        <input type="text" 
        className="input is-medium" 
        onChange={(e)=>{handleReason(e)}}
        value={reason} />
      </div>
    </div>
  );
};

export default ReasonTheyFun;
