// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  render() {
    const {denominationsList} = this.props
    return (
      <div>
        <div>
          <div>
            <div>
              <p> S </p>
            </div>
            <p> Sarah Williams </p>
          </div>
          <div>
            <p> Your Balance </p>
            <p>
              {' '}
              2000
              <br />
              <p> In Rupees </p>
            </p>
          </div>
          <p> Withdraw </p>
          <p> CHOOSE SUM (IN RUPEES) </p>
          <ul>
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
