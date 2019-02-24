import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Tabs from "./components/Tabs/Tabs";
import Section from './components/Section/Section'
class App extends Component {
  constructor(props) {
    super(props);

    // this.props.
    this.state = {
      activeTab: 0
    };
    this.manageTab = this.manageTab.bind(this);
  }
  manageTab(newTab) {
    this.setState({ activeTab: newTab });
  }

  render() {
    return (
      <React.Fragment>
        <Tabs method={this.manageTab}
              activeTab={this.state.activeTab}
        />


        <section className='section'>
          <Section activeTab={this.state.activeTab}/>

        </section>
      </React.Fragment>
    );
  }
}

export default App;
