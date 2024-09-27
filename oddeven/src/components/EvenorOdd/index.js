import { Component } from "react";
import './index.css'

class EvenorOdd extends Component {
    state = {
        num: 0
    }
    updateNUm = () => {
    let num = Math.floor(Math.random() *1000000) +1
    this.setState({num})
    }

    primeNUM = (num) => {
        if(num === 1){
            return false
        }
        for(let i = 2 ; i <= num; i++){
            if(num % i === 0){
                return false
            }
            else{
                return true
            }
        }
        }
        render(){
            const {num} = this.state
            return(
            <div className="container">
            <h1>{num}</h1>
            <button onClick={this.updateNUm}>{num%2===0 ? 'Even':'Odd'}</button>
            <button onClick={this.updateNUm}>{this.primeNUM(num) ? 'Prime':'Not Prime'}</button>
            </div>)
        }
    }
    export default EvenorOdd;