import React from 'react'
import Header from './Header';
import Body from './Body'


class HelloReact extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Header/>
                <Body/>
            </React.Fragment>
        )
    }


}
export default HelloReact