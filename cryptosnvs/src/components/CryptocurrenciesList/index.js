import React, { Component } from 'react';
import './index.css';
import CryptocurrenciesItem from '../CryptocurrenciesItem';

class CryptocurrenciesList extends Component {
  state = { currencyData: [] }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/crypto-currency-converter')
    const dataNew = await response.json()
    const formattedData = dataNew.map((each) => ({
      id: each.id,
      currency_name: each.currency_name,
      usd_value: each.usd_value,
      euro_value: each.euro_value,
      currency_logo: each.currency_logo
    }))
    console.log(formattedData)
    this.setState({ currencyData: formattedData });
  }

  render() {
    const { currencyData } = this.state
    return (
      <>
        <div>
          <div className='container'>
            <div>
              <h1 className="name">CryptocurrencyTracker</h1>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
                alt="cryptocurrency"
              />
            </div>
          </div>
        </div>

        <div className="crypto-table">
          <table>
            <thead>
              <tr>
                <th className="bg-color">Coin Type</th>
                <th className="bg-color">USD</th>
                <th className="bg-color">EURO</th>
              </tr>
            </thead>
            <tbody>
              {currencyData.map(item => <CryptocurrenciesItem theNewData={item} key={item.id} />)}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default CryptocurrenciesList;