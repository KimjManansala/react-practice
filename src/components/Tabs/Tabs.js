import React from "react";

import Tab from "./Tab";

class Tabs extends React.Component {
  

  render() {
    const { method, activeTab } = this.props;

    return (
      <div className="tabs is-boxed is-medium">
        <ul>
          <Tab
            method={() => {
              method(0);
            }}
            show={activeTab === 0}
            label={"Hello React"}
          />
          <Tab
            method={() => {
              method(1);
            }}
            show={activeTab === 1}
            label={"Lorem"}
          />
          <Tab
            method={() => {
              method(2);
            }}
            show={activeTab === 2}
            label={"Login"}
          />
          <Tab
            method={() => {
              method(3);
            }}
            show={activeTab === 3}
            label={"Fun People"}
          />
        </ul>
      </div>
    );
  }
}

export default Tabs;
