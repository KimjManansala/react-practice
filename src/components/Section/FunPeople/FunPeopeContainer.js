import React, { Component } from "react";
import AddPeople from "./AddPeople";
import FunPeepContainer from "./FunPeepContainer";

class FunPeopeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "", reason: "", funPeople: [{name: 'Bill', reason: 'he likes to party'}, {name: 'Billy', reason: 'he parties harder than Bill'}, {name:'William', reason:"he doesn't party"}] };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleReasoneChange = this.handleReasoneChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this)
  }
  handleNameChange(evt) {
    this.setState({ name: evt.target.value });
  }
  handleReasoneChange(evt) {
    this.setState({ reason: evt.target.value });
  }
  handleOnSubmit(evt, funPeep) {
    evt.preventDefault();
    let arr =  this.state.funPeople
    arr.push(funPeep)
    this.setState({ funPeople: arr});

  }
  handleRemove(evt, name){
    evt.preventDefault()
    function checkName (peep){
        return (peep.name !== name)
    }
    let arr = this.state.funPeople.filter(checkName)
    this.setState({ funPeople: arr});
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state)
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
          <div className="columns">
            <FunPeepContainer people={this.state.funPeople} method={this.handleRemove} />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default FunPeopeContainer;

{
  /* <section className="content">
    <h1 className="title">List of Fun People</h1>
        <div className="box">
           
        </div>
    <div className="columns">
        <div className="column is-4">
            <div className="box content is-medium">
                <p>Bill is fun because he likes to party.</p>
                <button className="button is-link">Remove Bill</button>
            </div>
        </div>
    <div className="column is-4">
        <div className="box content is-medium">
            <p>Billy is fun because he parties harder than Bill.</p>
            <button className="button is-link">Remove Billy</button>
        </div>
    </div>
    <div className="column is-4">
        <div className="box content is-medium">
            <p>William is fun because he doesn't party at all.</p>
            <button className="button is-link">Remove William</button>
        </div>
    </div>
</div>
</section> */
}
