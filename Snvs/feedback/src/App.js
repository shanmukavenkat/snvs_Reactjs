import { Component } from "react";
import './index.css'
import Feedback from './Components/Feedback'



class App extends Component {
  
  render() {
    return (
      <div className="container">
       
<Feedback label="Good" onClickHandler={() => alert('Good')} />
<Feedback label="Neutral" onClickHandler={() => alert('Neutral')} />
<Feedback label="Bad" onClickHandler={() => alert('Bad')} />
      </div>
    );
  }
}

export default App;
