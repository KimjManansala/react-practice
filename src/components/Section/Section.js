import React, { Component } from "react";

import HelloReact from "./HelloReact/HelloReact";

import Lorem from "./Lorem/LoremContainer";

import Login from "./Login/Login";
import FunPeopeContainer from "./FunPeople/FunPeopeContainer";

class Section extends Component {
  render() {
    let { activeTab } = this.props;
    return (
      <React.Fragment>
        {activeTab === 0 ? (
          <HelloReact />
        ) : activeTab === 1 ? (
          <Lorem />
        ) : activeTab === 2 ? (
          <Login />
        ) : activeTab === 3? <FunPeopeContainer/>:null}
      </React.Fragment>
    );
  }
}

export default Section;
