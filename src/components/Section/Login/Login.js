import React from "react";
import Signin from "./SignIn";
import Success from "./Succes";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { success: false };
  }

  handleSubmit = (message) =>{
    console.log('message', message);
    if(message === 'success'){
        console.log('1')
        this.setState({ success: true });
        console.log(this.state)
    }else{
        this.setState({ success: false });
        console.log(this.state)
        console.log('2')
    }


  }

  render() {
    return (
      <React.Fragment>
        
        {this.state.success ? <Success method={this.handleSubmit}/>: <Signin submit={this.handleSubmit} />}
      </React.Fragment>
    );
  }
}

export default Login;
