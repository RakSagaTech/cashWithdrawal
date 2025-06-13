// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationDetails} = props
  const {id, value} = denominationDetails 

  return (
    <li> 
        <button type="button">
            {value}
        </button>
    </li>
  )
}

export default DenominationItem
