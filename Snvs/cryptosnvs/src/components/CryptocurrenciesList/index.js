import React, { Component } from 'react';
import './index.css';
import CryptocurrenciesItem from '../CryptocurrenciesItem';

class CryptocurrenciesList extends Component {
  state = { currencyData: [] };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    );
    const dataNew = await response.json();
    const formattedData = dataNew.map((each) => ({
      id: each.id,
      currency_name: each.name,
      usd_value: each.current_price,
      euro_value: (each.current_price * 0.85).toFixed(2), // Approximate EURO conversion
      currency_logo: each.image,
    }));
    console.log(formattedData);
    this.setState({ currencyData: formattedData });
  };

  render() {
    const { currencyData } = this.state;
    return (
      <>
        <div>
          <div className="container">
            <div>
              <h1 className="name">Cryptocurrency Tracker</h1>
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
              {currencyData.map((item) => (
                <CryptocurrenciesItem theNewData={item} key={item.id} />
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default CryptocurrenciesList;
