// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="user-details-container">
            <div className="initial-container">
              <p className="initial"> S </p>
            </div>
            <p className="name"> Sarah Williams </p>
          </div>
          <div className="balance-container">
            <p className="your-balance"> Your Balance </p>
            <p className="balance">
              {' '}
              {balance}
              <br />
              <p className="currency"> In Rupees </p>
            </p>
          </div>
          <p className="withdraw"> Withdraw </p>
          <p className="choose-sum"> CHOOSE SUM (IN RUPEES) </p>
          <ul className="denominations-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
