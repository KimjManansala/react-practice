import React from "react";
import Name from "./Name";
import ReasonTheyFun from "./ReasonTheyFun";
import Submit from "./Submit";

const AddPeople = ({handleName, handleReason, name, reason, submit}) => {
  return (
    <form>
      <Name handleName={handleName} name={name}/>
      <ReasonTheyFun handleReason={handleReason} reason={reason}/>
      <Submit name={name} reason={reason} submit={submit}/>
    </form>
  );
};

export default AddPeople;
