// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationDetails} = props
  const {value} = denominationDetails

  return (
    <li className="denomination-item">
      <button type="button" className="denomination-btn">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
