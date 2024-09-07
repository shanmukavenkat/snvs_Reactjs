import { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './index.css';


class Counter extends Component {
  render() {
    return (
      <div>
        <h1 className='text-center'>Counter</h1>
        <p className='text-center'>0</p>
        <div className='text-center'>
          <button className='btn btn-primary m-5'>+</button>
          <button className='btn btn-danger m-5'>-</button>
        </div>
      </div>
    );
  }
}

export default Counter;
