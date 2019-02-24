import React from 'react'
import Counter from './Counter';
import Para from './Para';



class LoremContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {num: 1, par: ['']}
    }

    addPar(e){
        this.setState({num: this.state.num+1})
        this.state.par.push('')
    }
    removePar(e){
        if(this.state.num > 0){
        this.setState({num: this.state.num-1})
        this.state.par.pop()
    }
        else return
    }


     render(){
        return(
            <React.Fragment>
                <Counter counter={this.state.num}/>
                <div>
                <button onClick={(e)=>{this.addPar(e)}}>Add Paragraph</button>
                <button onClick={(e)=>{this.removePar(e)}}>Remove Paragraph</button>
                </div>
                <Para par={this.state.par}/>
            </React.Fragment>
        )
    }

}




export default LoremContainer