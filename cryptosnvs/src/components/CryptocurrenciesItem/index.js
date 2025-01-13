import './index.css'

const CryptocurrenciesItem = ({ theNewData }) => {
    const { id,currency_name, usd_value, euro_value, currency_logo } = theNewData;
  
    return (
      <tr className="list-item">
        <td className="alignment">
          <img src={currency_logo} alt={currency_name} className="coin-icon" key={id} />
          <p>{currency_name}</p>
        </td>
        <td>{usd_value}</td>
        <td>{euro_value}</td>
      </tr>
    );
  };
 export default CryptocurrenciesItem  
 