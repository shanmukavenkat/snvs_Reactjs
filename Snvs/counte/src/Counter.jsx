import React,{Component} from 'react';

 class Counter extends Component {
    state = {
        count : 0
    }
  render(){
    return(
<>
        <h1>The counter</h1>
        <h3>count:{this.state.count}</h3>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Increment</button>
        <button onClick={()=>{this.setState({count:this.state.count-1})}}>Decrement</button>
        <button onClick={()=>{this.setState({count:0})}}>Reset</button>
</>
    )
  }
}

export default Counter;