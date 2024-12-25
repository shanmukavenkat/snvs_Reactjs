import { Component } from "react";
import './index.css'

class Feedback extends Component {
  render() {
    const {label, onClickHandler} = this.props;
    return (
      <div className="container">
        <button type="button" onClick={onClickHandler}>{label}</button>

      </div>
    );
  }
}   
export default Feedback;