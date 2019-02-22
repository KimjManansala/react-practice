import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import HelloReact from './components/HelloReact/HelloReact'
import LoremContainer from "./components/Lorem/LoremContainer";
import Login from "./components/Login/Login";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {helloReact: true, lorem: false, login: false}
  }

  onClickReact(e){
    e.preventDefault()

    this.setState({helloReact: true, lorem: false, login: false})

  }
  onClickLorem(e){
    e.preventDefault()

    this.setState({helloReact: false, lorem: true, login: false})

  }

  onLogin(e){
    this.setState({helloReact: false, lorem: false, login: true})


  }

  render() {
    return (
      <React.Fragment>
        <div className="tabs">
          <ul>
            <li className="is-active">
              <button onClick={(e)=> this.onClickReact(e)}> Hello React</button>
            </li>
            <li>
              <button onClick={(e)=> this.onClickLorem(e)}> Lorem paragraphs</button>
            </li>
            <li>
              <button onClick={(e)=> this.onLogin(e)}> Login</button>
            </li>
          </ul>
        </div>

        {this.state.helloReact? <HelloReact/> : null}
        {this.state.lorem ? <LoremContainer/> : null}
        {this.state.login ? <Login/> : null}
      </React.Fragment>
    );
  }
}

export default App;
