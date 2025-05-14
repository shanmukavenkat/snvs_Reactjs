import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class App extends Component{
    state={
        selectOption:countryAndCapitalsList[0].id
    }
    handleClick = (event) =>{
        this.setState({
            selectOption:event.target.value
        })
    }
    render(){
        const findDetails = countryAndCapitalsList.find(item =>
            item.id === this.state.selectOption
        )
        return(
            <>
            <div className='one'>
                <h1>The country Name</h1>
                <div className='two'>
                    <select value={this.state.selectOption} onChange={this.handleClick} >
                        {
                            countryAndCapitalsList.map(item=>(
                                <option key={item.id} value={item.id}>{item.capitalDisplayText}</option>
                            ))
                        }

                    </select>
                </div>
            </div>
            <p>
                {findDetails.country}
            </p>
            </>
        )
    }

}
export default App