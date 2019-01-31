import React from 'react';
import ClickBtn from "./ClickBtn";

const TreeModule = ({ funds, treeCost, treeCount, addTree }) => {
  return (
    <div className="module">
      <h3>Lemon Trees</h3>
      <p>Current Lemon trees: {treeCount}</p>
      <p>Tree cost: £{(treeCost / 100).toFixed(2)}</p>
      <ClickBtn label="Buy lemon tree" clickFunc={addTree} isDisabled={funds < treeCost} />
    </div>
  )
}

export default TreeModule
