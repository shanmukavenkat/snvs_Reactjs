import { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './index.css';


class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    //console.log('Increment Clicked')//
    this.setState(prevState => {
      console.log(`previous state value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }
  onDecrement = () =>{
    this.setState(prevState =>{
      return{count:prevState.count-1}
    })
  }
  render() {
    const {count} = this.state;
    return (
      <div>
        <h1 className='text-center'>Counter</h1>
        <p className='text-center'>{count}</p>
        <div className='text-center'>
          <button className='btn btn-primary m-5' onClick={this.onIncrement}>+</button>
          <button className='btn btn-danger m-5' onClick={this.onDecrement}>-</button>
        </div>
      </div>
    );
  }
}

export default Counter;
