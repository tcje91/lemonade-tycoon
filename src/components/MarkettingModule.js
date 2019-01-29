import React from 'react'
import ClickBtn from './ClickBtn'

const MarkettingModule = ({ marketting, markettingCost, incMarketting}) => {
  return (
    <div>
        <h3>Marketting</h3>
      <ClickBtn clickFunc={incMarketting} label="Improve marketting" />
        <p>Current level: {marketting}</p>
        <p>Upgrade Cost: £{(markettingCost/100).toFixed(2)}</p>
    </div>
  )
}

export default MarkettingModule
