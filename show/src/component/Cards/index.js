import { Component } from "react";
import './index.css';

class Cards extends Component {
    state = {
        values: "hide",
        buttonText: "show" // Initialize the buttonText in state
    };

    handleClick = () => {
        const { buttonText } = this.state;
        let newTwo = document.getElementById("newOne");
        let newToe = "none"; // Define what class or display you're changing
        
        // Toggle show/hide functionality
        if (buttonText === "show") {
            newTwo.style.display = "block"; // Show the card
            this.setState({ buttonText: "hide" });
        } else {
            newTwo.style.display = "none"; // Hide the card
            this.setState({ buttonText: "show" });
        }
    };

    render() {
        return (
            <div className="card flex-wrap d-flex flex-row" id="card">
                <button className="btn btn-primary" onClick={this.handleClick}>
                    {this.state.buttonText}
                </button>
                <div className="card" id="newOne" style={{ display: "none" }}>
                    <h2>The Title</h2>
                </div>
            </div>
        );
    }
}

export default Cards;
