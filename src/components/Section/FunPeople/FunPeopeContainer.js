import React, { Component } from "react";
import AddPeople from "./AddPeople";
import FunPeepContainer from "./FunPeepContainer";
import { wrap } from "module";

class FunPeopeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      reason: "",
      funPeople: [
        { name: "Bill", reason: "he likes to party" },
        { name: "Billy", reason: "he parties harder than Bill" },
        { name: "William", reason: "he doesn't party" }
      ]
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleReasoneChange = this.handleReasoneChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleNameChange(evt) {
    this.setState({ name: evt.target.value });
  }
  handleReasoneChange(evt) {
    this.setState({ reason: evt.target.value });
  }
  handleOnSubmit(evt, funPeep) {
    evt.preventDefault();
    let arr = this.state.funPeople;
    arr.push(funPeep);
    this.setState({ funPeople: arr });
  }
  handleRemove(evt, name, reason) {
    evt.preventDefault();
    function checkName(peep) {
      if (peep.name !== name) {
        return true;
      } else {
        if (peep.reason !== reason) return true;
        else return false;
      }
    }
    let arr = this.state.funPeople.filter(checkName);
    this.setState({ funPeople: arr });
  }

  componentDidUpdate(prevProps, prevState) {
      
  }

  render() {
    return (
      <React.Fragment>
        <section className="content">
          <h1 className="title">List of Fun People</h1>
          <div className="box">
            <AddPeople
              handleName={this.handleNameChange}
              handleReason={this.handleReasoneChange}
              name={this.state.name}
              reason={this.state.reason}
              submit={this.handleOnSubmit}
            />
          </div>
          <div
            className="columns"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
           {this.state.funPeople.length?<FunPeepContainer
              people={this.state.funPeople}
              method={this.handleRemove}
            />: <p>No Fun people :(</p> } 
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default FunPeopeContainer;
