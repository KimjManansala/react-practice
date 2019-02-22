import React from 'react'


class Signin extends React.Component{

    constructor(props){
        super(props)
        this.state = {username: '', passowrd: '', error: ''}
        console.log(props)
    }
    
    checkSubmit(evt){
        evt.preventDefault()
        if(!this.state.username) this.setState({error: 'No Username'})
        
        if(!this.state.passowrd) this.setState({error: 'No password'})
        
        if(this.state.passowrd && this.state.username){
            console.log('HI')
        this.props.submit('success')
        }


    }
    handleUser(evt){
        this.setState({username: evt.target.value})
    }
    handlePass(evt){
        this.setState({passowrd: evt.target.value})
    }


    render(){
        return(

            <React.Fragment>
                <h1>Login</h1>
            <form onSubmit={(e)=>{this.checkSubmit(e)}}>
                {this.state.error ? <h1 display={{color: 'red'}}>{this.state.error}</h1> : null}
                <label>
                    UserName
                    <input type="text" value={this.state.username} onChange={(e)=>{this.handleUser(e)}} />
                    Password
                    <input type="password" value={this.state.passowrd} onChange={(e)=>{this.handlePass(e)}} />
                </label>
                <input type="submit" value="Submit" />
                </form>
                



            </React.Fragment>

        )

    }



}



export default Signin