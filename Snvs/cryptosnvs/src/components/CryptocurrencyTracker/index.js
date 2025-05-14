import './index.css'
import { Component } from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'
import { Rings } from 'react-loader-spinner' // Import the specific loader component

class CryptocurrencyTracker extends Component {
  state = { isLoading: true }

  componentDidMount() {
    // Simulating a delay to demonstrate loading
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 2000)
  }

  render() {
    const { isLoading } = this.state

    return (
      <>
        {isLoading ? (
          <div className="loader-container">
            <Rings color="#ffffff" height={80} width={80} /> {/* Use Rings directly */}
          </div>
        ) : (
          <CryptocurrenciesList />
        )}
      </>
    )
  }
}

export default CryptocurrencyTracker
