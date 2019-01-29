import React from 'react';

const ClickBtn = ({ clickFunc, label }) => {
  return (
      <button onClick={clickFunc}>{label}</button>
  )
}

export default ClickBtn