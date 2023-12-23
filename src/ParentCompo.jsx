import React , { Component, createRef }from 'react';
import PureCompo from './PureComponent';
import Fecomponent from './fcomponent';
class ParentCompo extends Component {
    
    constructor(){
        super()
      this.myInput =createRef();
    }
    componentDidMount(){
        this.myInput.current.focus();
    }

    render(){
        return(
            <div>
                {/*<PureCompo /> */} 
                <Fecomponent ref={this.myInput} />
                
            </div>
        )
    }
}

export default ParentCompo;